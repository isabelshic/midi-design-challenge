import type { CSSProperties } from 'react'
import { Button } from './Button'
import { SelectablePill } from './SelectablePill'
import { tokenValue } from '../tokens/tokens'

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <path
        d="M6 3.5L10 8L6 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
  } as CSSProperties

  return (
    <article
      style={tokenDrivenStyle}
      className="inline-block w-fit rounded-[12px] bg-[var(--symptom-card-surface)] p-6"
    >
      <header className="mb-5 w-full max-w-[317px] space-y-1">
        <p className="text-[14px] leading-[20px] font-normal text-[var(--symptom-card-greeting)]">
          {greeting}
        </p>
        <p className="text-[18px] leading-[1.2] font-normal text-[var(--symptom-card-question)]">
          {question}
        </p>
      </header>

      <div className="space-y-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {symptomOptions.map((symptom) => (
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
        <div className="flex justify-end">
          <Button
            variant="primary"
            size="md"
            iconTrailing={<ChevronRightIcon />}
            onClick={onContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </article>
  )
}
