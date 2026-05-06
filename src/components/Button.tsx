import * as React from 'react'

import { cn } from '../utils/cn'
import { tokenValue } from '../tokens/tokens'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'secondaryOnBrand'
    | 'linkColor'
    | 'linkGray'
  iconLeading?: React.ReactNode
  iconTrailing?: React.ReactNode
  /** Matches the Figma “Loading” state; shows a spinner but remains enabled */
  loading?: boolean
}

export function Button({
  className,
  size = 'md',
  variant = 'primary',
  iconLeading,
  iconTrailing,
  type = 'button',
  ...props
}: ButtonProps) {
  const t = tokenValue
  const iconSlotClasses =
    'shrink-0 size-[20px] inline-flex items-center justify-center'
  const sharedInsetRingClasses =
    'before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none'
  const sharedInsetRingShadowClasses =
    'before:shadow-[inset_0px_0px_0px_1px_var(--button-shadow-inner-border),inset_0px_-2px_0px_0px_var(--button-shadow-inner)]'
  const sharedFocusRingClasses =
    'focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_2px_var(--button-surface),0px_0px_0px_4px_var(--button-focus-ring)]'
  const sharedLinkClasses =
    'text-[var(--button-secondary-text)] bg-transparent shadow-none border-0'
  const sharedDisabledTextClasses = 'disabled:text-[var(--button-disabled-fg)]'

  const base =
    'inline-flex items-center justify-center overflow-hidden relative rounded-[6px] font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none'

  const sizeClasses = {
    sm: 'gap-[4px] px-[12px] py-[8px] text-[14px] leading-[20px]',
    md: 'gap-[4px] px-[14px] py-[10px] text-[14px] leading-[20px]',
    lg: 'gap-[6px] px-[16px] py-[10px] text-[16px] leading-[24px]',
    xl: 'gap-[6px] px-[18px] py-[12px] text-[16px] leading-[24px]',
  }[size]

  const iconOnlySizeClasses = {
    sm: 'p-[8px] size-[32px]',
    md: 'p-[10px] size-[36px]',
    lg: 'p-[10px] size-[40px]',
    xl: 'p-[12px] size-[44px]',
  }[size]

  const primaryClasses = cn(
    'text-[var(--button-text-on-brand)]',
    'bg-[var(--button-primary-default)] hover:bg-[var(--button-primary-hover)] focus-visible:bg-[var(--button-primary-focus)]',
    'shadow-[0px_1px_2px_0px_var(--button-shadow-xs)]',
    sharedInsetRingClasses,
    sharedInsetRingShadowClasses,
    sharedFocusRingClasses,
    'disabled:bg-[var(--button-disabled-bg)] disabled:text-[var(--button-disabled-fg)] disabled:border disabled:border-[var(--button-disabled-border)] disabled:shadow-[0px_1px_2px_0px_var(--button-shadow-xs)] disabled:before:content-none',
  )

  const secondaryClasses = cn(
    'text-[var(--button-secondary-text)]',
    'bg-[var(--button-surface)] border border-[var(--button-secondary-border)]',
    'hover:bg-[var(--button-secondary-hover-bg)] hover:text-[var(--button-secondary-hover-text)]',
    'shadow-[0px_1px_2px_0px_var(--button-shadow-xs)]',
    sharedInsetRingClasses,
    sharedInsetRingShadowClasses,
    sharedFocusRingClasses,
    'disabled:text-[var(--button-disabled-fg)] disabled:border-[var(--button-disabled-border)] disabled:shadow-none disabled:before:content-none',
  )

  const tertiaryClasses = cn(
    'text-[var(--button-secondary-text)] bg-transparent',
    'hover:bg-[var(--button-secondary-hover-bg)] hover:text-[var(--button-secondary-hover-text)]',
    `focus-visible:bg-[var(--button-surface)] ${sharedFocusRingClasses}`,
    sharedDisabledTextClasses,
  )

  const secondaryOnBrandClasses = cn(
    'text-[var(--button-secondary-on-brand-text)]',
    'bg-[var(--button-secondary-on-brand-bg)] border border-[var(--button-secondary-on-brand-border)]',
    'hover:bg-[var(--button-secondary-on-brand-hover-bg)]',
    'shadow-[0px_1px_2px_0px_var(--button-shadow-xs)]',
    sharedInsetRingClasses,
    sharedInsetRingShadowClasses,
    'focus-visible:outline-none focus-visible:border-[var(--button-secondary-on-brand-focus-border)] focus-visible:shadow-[0px_1px_2px_0px_var(--button-shadow-xs),0px_0px_0px_2px_var(--button-focus-ring)]',
    'disabled:bg-[var(--button-disabled-bg)] disabled:text-[var(--button-disabled-fg)] disabled:border-[var(--button-secondary-on-brand-disabled-border)] disabled:shadow-none disabled:before:content-none',
  )

  const linkColorClasses = cn(
    sharedLinkClasses,
    'hover:text-[var(--button-secondary-hover-text)] hover:underline',
    sharedFocusRingClasses,
    sharedDisabledTextClasses,
  )

  const linkGrayClasses = cn(
    sharedLinkClasses,
    'hover:text-[var(--button-link-gray-hover-text)] hover:underline',
    sharedFocusRingClasses,
    sharedDisabledTextClasses,
  )

  const variantClasses = {
    primary: primaryClasses,
    secondary: secondaryClasses,
    tertiary: tertiaryClasses,
    secondaryOnBrand: secondaryOnBrandClasses,
    linkColor: linkColorClasses,
    linkGray: linkGrayClasses,
  }[variant]

  const tokenDrivenStyle = {
    '--button-radius-sm': `${t('radius-sm')}px`,
    '--button-gap-xs': `${t('spacing-xs')}px`,
    '--button-gap-sm': `${t('spacing-sm')}px`,
    '--button-font-sm': `${t('Font size/text-sm')}px`,
    '--button-font-md': `${t('Font size/text-md')}px`,
    '--button-line-sm': `${t('Line height/text-sm')}px`,
    '--button-line-md': `${t('Line height/text-md')}px`,
    '--button-primary-default': t('Colors/Brand/Primary 400'),
    '--button-primary-hover': t('Colors/Brand/Primaryt 200'),
    '--button-primary-focus': t('Colors/Brand/Primary 600'),
    '--button-text-on-brand': t('Colors/Text/text-white'),
    '--button-secondary-text': t('Colors/Text/text-secondary (700)'),
    '--button-secondary-hover-text': t('Colors/Text/text-secondary_hover'),
    '--button-link-gray-hover-text': t('Colors/Text/text-secondary_on-brand' as any),
    '--button-secondary-border': t('Colors/Border/border-primary'),
    '--button-secondary-hover-bg': t('Colors/Background/bg-primary-hover'),
    '--button-surface': t('Colors/Background/bg-primary'),
    '--button-focus-ring': t('Colors/Effects/Focus rings/focus-ring'),
    '--button-disabled-bg': t('Colors/Background/bg-disabled'),
    '--button-disabled-fg': t('Colors/Foreground/fg-disabled'),
    '--button-disabled-border': t('Colors/Border/border-disabled_subtle'),
    '--button-secondary-on-brand-text': t('Colors/Foreground/fg-disabled'),
    '--button-secondary-on-brand-bg': t('Colors/Background/bg-disabled'),
    '--button-secondary-on-brand-hover-bg': t('Colors/Background/bg-secondary-hover' as any),
    '--button-secondary-on-brand-border': t('Colors/Border/border-base-200' as any),
    '--button-secondary-on-brand-focus-border': t('Colors/Border/border-primary'),
    '--button-secondary-on-brand-disabled-border': t('Colors/Border/border-tertiary' as any),
    '--button-shadow-xs': 'rgba(10,13,18,0.05)',
    '--button-shadow-inner': 'rgba(10,13,18,0.05)',
    '--button-shadow-inner-border': 'rgba(10,13,18,0.18)',
  } as React.CSSProperties

  const { onClick, disabled, loading, tabIndex, children, ...rest } = props
  const isLoading = Boolean(loading)
  const isDisabled = disabled ?? false
  const isInteractive = !isDisabled && !isLoading

  const hasChildren = React.Children.count(children) > 0
  const hasIcon = Boolean(iconLeading || iconTrailing)
  const isIconOnly = hasIcon && !hasChildren

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (isLoading) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    onClick?.(event)
  }

  return (
    <button
      type={type}
      className={cn(
        base,
        isIconOnly ? iconOnlySizeClasses : sizeClasses,
        variantClasses,
        isLoading && 'pointer-events-none',
        className,
      )}
      style={tokenDrivenStyle}
      disabled={isDisabled}
      tabIndex={isLoading ? -1 : tabIndex}
      aria-disabled={!isInteractive || undefined}
      aria-busy={isLoading || undefined}
      aria-live={isLoading ? 'polite' : undefined}
      onClick={handleClick}
      {...rest}
    >
      {isLoading ? (
        <>
          <span className={iconSlotClasses}>
            <span className="inline-block size-3 rounded-full border-2 border-[color:inherit] border-r-transparent animate-spin" />
          </span>
          {hasChildren && (
            <span className="px-[2px] opacity-80">{children}</span>
          )}
        </>
      ) : (
        <>
          {iconLeading ? (
            <span className={iconSlotClasses}>{iconLeading}</span>
          ) : null}
          {hasChildren && (
            <span className="px-[2px]">
              {children}
            </span>
          )}
          {iconTrailing ? (
            <span className={iconSlotClasses}>{iconTrailing}</span>
          ) : null}
        </>
      )}
    </button>
  )
}

