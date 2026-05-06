export type TokenValue = string | number

export const tokens = {
  'Colors/Base/15': '#dbe3e7',
  'Colors/Background/bg-disabled': '#eef5f7',
  'Colors/Background/bg-primary': '#ffffff',
  'Colors/Background/bg-primary-hover': '#e7f0f3',
  'Colors/Background/bg-secondary-hover': '#d3dde1',
  'Colors/Brand/Primary 400': '#579fff',
  'Colors/Brand/Primary 600': '#006af9',
  'Colors/Brand/Primaryt 200': '#88b8fb',
  'Colors/Border/border-disabled_subtle': '#eef5f7',
  'Colors/Border/border-base-200': '#a9b5ba',
  'Colors/Border/border-primary': '#8998a1',
  'Colors/Border/border-tertiary': '#d3dde1',
  'Colors/Effects/Focus rings/focus-ring': '#b6e7a0',
  'Colors/Effects/Shadows/shadow-skeumorphic-inner': '#0a0d120d',
  'Colors/Effects/Shadows/shadow-skeumorphic-inner-border': '#0a0d122e',
  'Colors/Effects/Shadows/shadow-xs': '#0a0d120d',
  'Colors/Foreground/fg-disabled': '#bdc8cc',
  'Colors/Text/text-secondary (700)': '#6b7c88',
  'Colors/Text/text-primary (900)': '#283c4e',
  'Colors/Text/text-secondary_on-brand': '#e7f0f3',
  'Colors/Text/text-secondary_hover': '#415465',
  'Colors/Text/text-white': '#ffffff',
  'Font size/text-md': 16,
  'Font size/text-sm': 14,
  'Line height/text-md': 24,
  'Line height/text-sm': 20,
  'radius-sm': 6,
  'spacing-lg': 12,
  'spacing-md': 8,
  'spacing-sm': 6,
  'spacing-xl': 16,
  'spacing-xs': 4,
  'spacing-xxs': 2,
} as const

export type TokenName = keyof typeof tokens

export function tokenValue(tokenName: TokenName) {
  return tokens[tokenName]
}
