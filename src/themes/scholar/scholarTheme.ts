/**
 * Scholar Theme — Ergonomic Learning & Editorial Theme for Astryx
 *
 * Tailored for technical education, deep reading, and cognitive comfort.
 * - Typography: Fraunces (authoritative academic headings), Albert Sans (high-legibility body), JetBrains Mono (code).
 * - Light Mode: Warm archival ivory parchment (#fbf9f5) with deep espresso ink (#1c1917) and Oxford blue accent (#1e40af).
 * - Dark Mode: Soothing midnight slate (#0f1217) with soft white ink (#e9edf2) and luminous sapphire accent (#60a5fa).
 */

import {defineTheme, defineSyntaxTheme} from '@astryxdesign/core/theme';
import {scholarIconRegistry} from './icons';

/** High-contrast, color-accessible syntax theme for both light & dark modes. */
const scholarSyntax = defineSyntaxTheme({
  name: 'astryx-scholar',
  tokens: {
    keyword: ['#1d4ed8', '#93c5fd'],     // Deep indigo / Sky blue
    string: ['#15803d', '#86efac'],      // Forest sage / Soft mint
    comment: ['#78716c', '#788291'],     // Warm stone / Slate gray
    number: ['#c2410c', '#fdba74'],      // Burnt orange / Warm peach
    function: ['#0369a1', '#38bdf8'],    // Aegean blue / Electric cyan
    type: ['#7e22ce', '#c084fc'],        // Purple / Lavender
    variable: ['#1c1917', '#e9edf2'],    // Primary ink / Crisp text
    operator: ['#57534e', '#94a3b8'],    // Neutral operator
    constant: ['#c2410c', '#fdba74'],    // Constant values
    tag: ['#b91c1c', '#f87171'],         // Ruby red
    attribute: ['#b45309', '#fcd34d'],   // Amber gold
    property: ['#0f766e', '#5eead4'],    // Deep teal / Aqua
    punctuation: ['#78716c', '#94a3b8'], // Subtle punctuation
    background: ['#ffffff', '#141820'],  // Surface matching
  },
});

export const scholarTheme = defineTheme({
  name: 'scholar',

  typography: {
    scale: {base: 15, ratio: 1.25},
    body: {
      family: 'Albert Sans',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    heading: {
      family: 'Fraunces',
      fallbacks: 'Georgia, "Times New Roman", Times, serif',
      weights: {3: 'bold', 4: 'bold'},
    },
    code: {
      family: 'JetBrains Mono',
      fallbacks: '"SF Mono", Monaco, Consolas, monospace',
    },
  },

  motion: {fast: 125, medium: 280, slow: 650, ratio: 0.75},

  syntax: scholarSyntax,

  tokens: {
    // =========================================================================
    // Core Semantics — Light / Dark
    // =========================================================================
    '--color-accent': ['#1e40af', '#60a5fa'],
    '--color-accent-muted': ['#1e40af14', '#60a5fa22'],
    '--color-neutral': ['#1c19170a', '#ffffff12'],
    '--color-background-surface': ['#ffffff', '#171b22'],
    '--color-background-body': ['#fbf9f5', '#0f1217'],
    '--color-background-card': ['#ffffff', '#1b2028'],
    '--color-background-popover': ['#ffffff', '#1e242e'],
    '--color-background-muted': ['#f2eee6', '#212732'],
    '--color-overlay': ['#1c191766', '#090b0e99'],
    '--color-overlay-hover': ['#1c191708', '#ffffff0a'],
    '--color-overlay-pressed': ['#1c191712', '#ffffff14'],

    // Text hierarchy
    '--color-text-primary': ['#1c1917', '#e9edf2'],
    '--color-text-secondary': ['#686056', '#929dae'],
    '--color-text-disabled': ['#a89f91', '#586375'],
    '--color-text-accent': ['#1e40af', '#60a5fa'],
    '--color-on-dark': '#ffffff',
    '--color-on-light': '#1c1917',
    '--color-on-accent': ['#ffffff', '#0f1217'],
    '--color-on-success': ['#ffffff', '#0f1217'],
    '--color-on-error': ['#ffffff', '#0f1217'],
    '--color-on-warning': '#1c1917',

    // Icons
    '--color-icon-accent': ['#1e40af', '#60a5fa'],
    '--color-icon-primary': ['#1c1917', '#e9edf2'],
    '--color-icon-secondary': ['#686056', '#929dae'],
    '--color-icon-disabled': ['#a89f91', '#586375'],

    // Status: Success / Warning / Error
    '--color-success': ['#15803d', '#4ade80'],
    '--color-success-muted': ['#dcfce7', '#143320'],
    '--color-warning': ['#b45309', '#fbbf24'],
    '--color-warning-muted': ['#fef3c7', '#382b12'],
    '--color-error': ['#b91c1c', '#f87171'],
    '--color-error-muted': ['#fee2e2', '#381a1a'],

    // Borders & UI lines
    '--color-border': ['#e7e1d6', '#262e3b'],
    '--color-border-emphasized': ['#c7beaf', '#3b4657'],
    '--color-skeleton': ['#e7e1d6', '#2a3240'],
    '--color-track': ['#e7e1d6', '#2a3240'],
    '--color-shadow': ['rgba(28, 25, 23, 0.06)', 'rgba(0, 0, 0, 0.4)'],
    '--color-tint-hover': ['black', 'white'],

    // Categorical Colors
    '--color-background-blue': ['#dbeafe', '#1e3a8a44'],
    '--color-border-blue': ['#93c5fd', '#3b82f6'],
    '--color-icon-blue': ['#1d4ed8', '#60a5fa'],
    '--color-text-blue': ['#1e40af', '#93c5fd'],

    '--color-background-cyan': ['#cffafe', '#164e6344'],
    '--color-border-cyan': ['#67e8f9', '#06b6d4'],
    '--color-icon-cyan': ['#0e7490', '#22d3ee'],
    '--color-text-cyan': ['#155e75', '#67e8f9'],

    '--color-background-gray': ['#f5f5f4', '#262626'],
    '--color-border-gray': ['#d6d3d1', '#525252'],
    '--color-icon-gray': ['#57534e', '#a3a3a3'],
    '--color-text-gray': ['#292524', '#e5e5e5'],

    '--color-background-green': ['#dcfce7', '#14532d44'],
    '--color-border-green': ['#86efac', '#22c55e'],
    '--color-icon-green': ['#15803d', '#4ade80'],
    '--color-text-green': ['#166534', '#86efac'],

    '--color-background-orange': ['#ffedd5', '#7c2d1244'],
    '--color-border-orange': ['#fdba74', '#f97316'],
    '--color-icon-orange': ['#c2410c', '#fb923c'],
    '--color-text-orange': ['#9a3412', '#fdba74'],

    '--color-background-pink': ['#fce7f3', '#83184344'],
    '--color-border-pink': ['#f9a8d4', '#ec4899'],
    '--color-icon-pink': ['#be185d', '#f472b6'],
    '--color-text-pink': ['#9d174d', '#f9a8d4'],

    '--color-background-purple': ['#f3e8ff', '#581c8744'],
    '--color-border-purple': ['#d8b4fe', '#a855f7'],
    '--color-icon-purple': ['#7e22ce', '#c084fc'],
    '--color-text-purple': ['#6b21a8', '#d8b4fe'],

    '--color-background-red': ['#fee2e2', '#7f1d1d44'],
    '--color-border-red': ['#fca5a5', '#ef4444'],
    '--color-icon-red': ['#b91c1c', '#f87171'],
    '--color-text-red': ['#991b1b', '#fca5a5'],

    '--color-background-teal': ['#ccfbf1', '#134e4a44'],
    '--color-border-teal': ['#5eead4', '#14b8a6'],
    '--color-icon-teal': ['#0f766e', '#2dd4bf'],
    '--color-text-teal': ['#115e59', '#5eead4'],

    '--color-background-yellow': ['#fef9c3', '#713f1244'],
    '--color-border-yellow': ['#fde047', '#eab308'],
    '--color-icon-yellow': ['#a16207', '#facc15'],
    '--color-text-yellow': ['#854d0e', '#fde047'],

    // Radius
    '--radius-none': '0px',
    '--radius-inner': '4px',
    '--radius-element': '8px',
    '--radius-container': '12px',
    '--radius-page': '24px',
    '--radius-full': '9999px',

    // Shadows
    '--shadow-low': '0 1px 3px rgba(28, 25, 23, 0.05), 0 1px 2px rgba(28, 25, 23, 0.04)',
    '--shadow-med': '0 4px 6px -1px rgba(28, 25, 23, 0.07), 0 2px 4px -2px rgba(28, 25, 23, 0.05)',
    '--shadow-high': '0 10px 15px -3px rgba(28, 25, 23, 0.08), 0 4px 6px -4px rgba(28, 25, 23, 0.05)',
    '--shadow-inset-hover': 'inset 0px 0px 0px 2px #1e40af26',
    '--shadow-inset-selected': 'inset 0px 0px 0px 2px #1e40af66',
    '--shadow-inset-success': 'inset 0px 0px 0px 2px #15803d55',
    '--shadow-inset-warning': 'inset 0px 0px 0px 2px #b4530955',
    '--shadow-inset-error': 'inset 0px 0px 0px 2px #b91c1c55',
  },

  icons: scholarIconRegistry,
});
