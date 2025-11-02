/**
 * Build Media Strategies Design Tokens
 * Extracted from Bolt.new Project - SACRED DOCUMENT
 *
 * CRITICAL: These are the source of truth for all design decisions.
 * DO NOT deviate from these values.
 */

export const colors = {
  // Base colors
  black: '#000000',
  darkGray: '#1A1A1A',
  white: '#FFFFFF',

  // Gold accents (used sparingly)
  gold: {
    light: '#ffd700',
    dark: '#b8860b',
  },

  // Gray scale
  gray: {
    300: '#D1D5DB',
    400: '#9CA3AF',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Purple glow effects
  purpleGlow: {
    light: 'rgba(168, 85, 247, 0.4)',
    strong: 'rgba(168, 85, 247, 0.6)',
  },
} as const;

export const typography = {
  fontFamily: 'Manrope, system-ui, sans-serif',
} as const;

export const components = {
  button: {
    primary: 'inline-block px-7 sm:px-6 py-3.5 sm:py-3 bg-black text-white font-normal rounded-full border border-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95',
    secondary: 'inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95',
    outline: 'px-5 py-1.5 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg',
  },
  card: {
    default: 'rounded-2xl sm:rounded-3xl py-12 sm:py-16 px-6 sm:px-8 relative overflow-hidden',
  },
} as const;

export const spacing = {
  section: {
    py: 'py-12 sm:py-16 lg:py-20',
    px: 'px-5 sm:px-6',
  },
} as const;

export const animations = {
  transition: {
    standard: 'transition-all duration-300',
  },
} as const;

/**
 * DESIGN SYSTEM RULES - DO NOT VIOLATE
 *
 * NEVER:
 * - Use fonts other than Manrope
 * - Use bright colors (red, blue, green) except gold accents
 * - Use square corners (always rounded)
 * - Use harsh shadows (always soft)
 * - Use colorful gradients (only white-to-gray or purple glow)
 * - Skip hover states on interactive elements
 *
 * ALWAYS:
 * - Use Manrope font
 * - Include hover effects on buttons (translate-y-1)
 * - Include active effects on buttons (scale-95)
 * - Use rounded-full for buttons
 * - Use black or dark gray backgrounds
 * - Include purple glow on primary interactive elements
 * - Use 300ms transitions
 */
