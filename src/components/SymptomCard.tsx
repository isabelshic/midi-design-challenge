import type { CSSProperties } from 'react'
import { SelectablePill } from './SelectablePill'
import { tokenValue } from '../tokens/tokens'

export type SymptomCardProps = {
  greeting: string
  question: string
  selectedSymptoms: string[]
  symptomOptions: readonly string[]
  onToggleSymptom: (label: string, nextSelected: boolean) => void
  onContinue?: () => void
}

export function SymptomCard({
  greeting,
  question,
  selectedSymptoms,
  symptomOptions,
  onToggleSymptom,
  onContinue,
}: SymptomCardProps) {
  const t = tokenValue
  const tokenDrivenStyle = {
    '--symptom-card-surface': t('Colors/Background/bg-primary'),
    '--symptom-card-greeting': t('Colors/Text/text-secondary (700)'),
    '--symptom-card-question': t('Colors/Text/text-primary (900)'),
    '--symptom-card-continue-bg': t('Colors/Base/15'),
    '--symptom-card-continue-hover-bg': t('Colors/Background/bg-secondary-hover'),
    '--symptom-card-continue-fg': t('Colors/Text/text-secondary_hover'),
    '--symptom-card-continue-focus-surface': t('Colors/Background/bg-disabled'),
    '--symptom-card-continue-focus-ring': t('Colors/Effects/Focus rings/focus-ring'),
  } as CSSProperties
  const firstRow = symptomOptions.slice(0, 3)
  const secondRow = symptomOptions.slice(3)

  return (
    <article
      style={tokenDrivenStyle}
      className="w-full max-w-[366px] rounded-[12px] bg-[var(--symptom-card-surface)] p-6"
    >
      <header className="mb-5 w-full max-w-[317px] space-y-1">
        <p className="text-[14px] leading-[20px] font-normal text-[var(--symptom-card-greeting)]">
          {greeting}
        </p>
        <p className="text-[18px] leading-[1.2] font-normal text-[var(--symptom-card-question)]">
          {question}
        </p>
      </header>

      <div className="relative pr-12">
        <div className="min-w-0 space-y-2">
          <div className="flex items-center gap-2">
            {firstRow.map((symptom) => (
              <SelectablePill
                key={symptom}
                label={symptom}
                selected={selectedSymptoms.includes(symptom)}
                className="px-3 py-2 text-[12px] leading-[20px] font-semibold"
                onToggle={(nextSelected) => onToggleSymptom(symptom, nextSelected)}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            {secondRow.map((symptom) => (
              <SelectablePill
                key={symptom}
                label={symptom}
                selected={selectedSymptoms.includes(symptom)}
                className="px-3 py-2 text-[12px] leading-[20px] font-semibold"
                onToggle={(nextSelected) => onToggleSymptom(symptom, nextSelected)}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label="Continue"
          onClick={onContinue}
          className="absolute right-0 bottom-0 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--symptom-card-continue-bg)] text-[var(--symptom-card-continue-fg)] transition-colors hover:bg-[var(--symptom-card-continue-hover-bg)] focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_2px_var(--symptom-card-continue-focus-surface),0px_0px_0px_4px_var(--symptom-card-continue-focus-ring)]"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-5">
            <path
              d="M3.5 8H12.5M8.5 4L12.5 8L8.5 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </article>
  )
}
