import * as React from 'react'

import { cn } from '../utils/cn'
import { tokenValue } from '../tokens/tokens'

export type SelectablePillProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'onChange' | 'onToggle'
> & {
  label: string
  selected?: boolean
  defaultSelected?: boolean
  onToggle?: (nextSelected: boolean) => void
}

export function SelectablePill({
  label,
  selected,
  defaultSelected = false,
  onToggle,
  className,
  type = 'button',
  onClick,
  ...props
}: SelectablePillProps) {
  const isControlled = selected !== undefined
  const [internalSelected, setInternalSelected] = React.useState(defaultSelected)
  const isSelected = isControlled ? selected : internalSelected

  const t = tokenValue
  const tokenDrivenStyle = {
    '--pill-bg': t('Colors/Background/bg-primary'),
    '--pill-border': t('Colors/Border/border-primary'),
    '--pill-text': t('Colors/Text/text-secondary (700)'),
    '--pill-hover-bg': t('Colors/Background/bg-primary-hover'),
    '--pill-focus-ring': t('Colors/Effects/Focus rings/focus-ring'),
    '--pill-selected-bg': t('Colors/Brand/Primary 400'),
    '--pill-selected-border': t('Colors/Brand/Primary 400'),
    '--pill-selected-text': t('Colors/Text/text-white'),
  } as React.CSSProperties

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const nextSelected = !isSelected
    if (!isControlled) {
      setInternalSelected(nextSelected)
    }
    onToggle?.(nextSelected)
    onClick?.(event)
  }

  return (
    <button
      type={type}
      aria-pressed={isSelected}
      onClick={handleClick}
      style={tokenDrivenStyle}
      className={cn(
        'inline-flex items-center justify-center rounded-[28px] border px-[12px] py-[8px] text-[12px] leading-[20px] font-semibold whitespace-nowrap transition-colors',
        'bg-[var(--pill-bg)] border-[var(--pill-border)] text-[var(--pill-text)]',
        'hover:bg-[var(--pill-hover-bg)]',
        'focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_2px_var(--pill-bg),0px_0px_0px_4px_var(--pill-focus-ring)]',
        isSelected &&
          'bg-[var(--pill-selected-bg)] border-[var(--pill-selected-border)] text-white hover:bg-[var(--pill-selected-bg)]',
        className,
      )}
      {...props}
    >
      {isSelected ? (
        <span
          aria-hidden="true"
          className="mr-[6px] inline-flex size-[14px] shrink-0 items-center justify-center text-[var(--pill-selected-text)]"
        >
          <svg viewBox="0 0 16 16" className="size-[14px]" fill="none">
            <path
              d="M3.5 8.25L6.5 11.25L12.5 5.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
      {label}
    </button>
  )
}
