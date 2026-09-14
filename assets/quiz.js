// ==========================================================================
// Astryx UX Interactions: Themes, Code Tabs, Quizzes, Copy & Live Search
// ==========================================================================

const THEME_KEY = 'dsa-astryx-theme';
const LANG_KEY = 'dsa-preferred-lang';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingProgress();
  initCodeTabs();
  initEventDelegation();
  initIndexFiltering();
});

/* --------------------------------------------------------------------------
   1. Theme Management (System sync + localStorage persistence)
   -------------------------------------------------------------------------- */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved || 'auto');

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.getItem(THEME_KEY) || localStorage.getItem(THEME_KEY) === 'auto') {
      applyTheme('auto');
    }
  });
}

function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (theme === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.innerHTML = isDark ? '<span>☀️</span><span>Light</span>' : '<span>🌙</span><span>Dark</span>';
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'auto';
  const isDark = current === 'dark' || (current === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const nextTheme = isDark ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
}

/* --------------------------------------------------------------------------
   2. Reading Progress Bar (Throttled fallback for CSS scroll-timeline)
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  let bar = document.querySelector('.reading-progress-bar');
  if (!bar && document.querySelector('main')) {
    bar = document.createElement('div');
    bar.className = 'reading-progress-bar';
    document.body.prepend(bar);
  }
  if (!bar || CSS.supports?.('animation-timeline', 'scroll()')) return;

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (max > 0) bar.style.width = `${Math.min(100, Math.max(0, (window.scrollY / max) * 100))}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Multi-Language Code Tabs & Copy
   -------------------------------------------------------------------------- */
function initCodeTabs() {
  // Ensure copy buttons exist in tab navs
  document.querySelectorAll('.code-tabs .tab-nav').forEach(nav => {
    if (!nav.querySelector('.copy-btn')) {
      const actions = document.createElement('div');
      actions.className = 'tab-actions';
      actions.innerHTML = '<button type="button" class="copy-btn"><span>📋</span><span>Copy</span></button>';
      nav.appendChild(actions);
    }
  });

  syncAllTabs(localStorage.getItem(LANG_KEY) || 'python');
}

function syncAllTabs(lang) {
  document.querySelectorAll('.code-tabs').forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const contents = container.querySelectorAll('.tab-content');
    const targetBtn = container.querySelector(`.tab-btn[data-lang="${lang}"]`) || buttons[0];
    const activeLang = targetBtn?.getAttribute('data-lang');

    buttons.forEach(btn => btn.classList.toggle('active', btn === targetBtn));
    contents.forEach(content => content.classList.toggle('active', content.getAttribute('data-lang') === activeLang));
  });
}

/* --------------------------------------------------------------------------
   4. Event Delegation (Single global handler for all interactive clicks)
   -------------------------------------------------------------------------- */
function initEventDelegation() {
  document.addEventListener('click', async (e) => {
    // Theme toggle
    if (e.target.closest('.theme-toggle-btn')) {
      toggleTheme();
      return;
    }

    // Tab button click
    const tabBtn = e.target.closest('.tab-btn');
    if (tabBtn) {
      const lang = tabBtn.getAttribute('data-lang');
      if (lang) {
        localStorage.setItem(LANG_KEY, lang);
        syncAllTabs(lang);
      }
      return;
    }

    // Copy code button
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      const container = copyBtn.closest('.code-tabs');
      const activeCode = container?.querySelector('.tab-content.active pre code') || container?.querySelector('.tab-content.active pre');
      if (activeCode) {
        try {
          await navigator.clipboard.writeText(activeCode.textContent || '');
          copyBtn.innerHTML = '<span>✓</span><span>Copied!</span>';
        } catch {
          copyBtn.innerHTML = '<span>✕</span><span>Failed</span>';
        }
        setTimeout(() => { copyBtn.innerHTML = '<span>📋</span><span>Copy</span>'; }, 2000);
      }
      return;
    }

    // Quiz option selection
    const option = e.target.closest('.quiz-option');
    if (option) {
      const quiz = option.closest('.quiz-box');
      if (!quiz || quiz.classList.contains('solved')) return;

      const options = Array.from(quiz.querySelectorAll('.quiz-option'));
      const selectedIdx = options.indexOf(option);
      const correctIdx = parseInt(quiz.getAttribute('data-correct') || '0', 10);
      const explanation = quiz.getAttribute('data-explanation') || '';
      let feedback = quiz.querySelector('.quiz-feedback');

      if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'quiz-feedback';
        quiz.appendChild(feedback);
      }

      options.forEach(opt => opt.classList.remove('selected', 'incorrect'));
      option.classList.add('selected');

      const isCorrect = selectedIdx === correctIdx;
      if (isCorrect) {
        option.classList.add('correct');
        quiz.classList.add('solved');
        feedback.className = 'quiz-feedback show success';
        feedback.innerHTML = `<div><strong>✓ Correct!</strong> ${explanation}</div><button type="button" class="quiz-reset-btn" aria-label="Reset question">Reset</button>`;
      } else {
        option.classList.add('incorrect');
        feedback.className = 'quiz-feedback show error';
        feedback.innerHTML = `<div><strong>✕ Not quite.</strong> Take a close look at how operations scale or allocate memory. Try another option!</div><button type="button" class="quiz-reset-btn" aria-label="Reset options">Try Again</button>`;
      }
      return;
    }

    // Quiz reset
    const resetBtn = e.target.closest('.quiz-reset-btn');
    if (resetBtn) {
      const quiz = resetBtn.closest('.quiz-box');
      if (quiz) {
        quiz.classList.remove('solved');
        quiz.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
        const feedback = quiz.querySelector('.quiz-feedback');
        if (feedback) {
          feedback.className = 'quiz-feedback';
          feedback.innerHTML = '';
        }
      }
    }
  });
}

/* --------------------------------------------------------------------------
   5. Index Page Filtering & Live Search
   -------------------------------------------------------------------------- */
function initIndexFiltering() {
  const searchInput = document.querySelector('.search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const rowItems = document.querySelectorAll('.row-list .row-item');
  const sections = document.querySelectorAll('.module-section');

  if (!searchInput && filterButtons.length === 0) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    rowItems.forEach(item => {
      const category = item.getAttribute('data-category') || '';
      const text = item.textContent.toLowerCase();
      const matchesCat = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = !searchQuery || text.includes(searchQuery);
      item.hidden = !(matchesCat && matchesSearch);
    });

    sections.forEach(sec => {
      const hasRows = sec.querySelector('.row-item');
      if (hasRows) {
        sec.hidden = !sec.querySelector('.row-item:not([hidden])');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.toggle('active', b === btn));
      currentCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });
}
