import { Button } from './components/Button'
import { SelectablePill } from './components/SelectablePill'
import { SymptomCard } from './components/SymptomCard'
import IsabelDrawing from './assets/isabel-drawing.png'
import { useState } from 'react'

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-4"
    >
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

function App() {
  const pages = [
    { key: 'buttons', label: 'Buttons' },
    { key: 'pills', label: 'Selectable pills' },
    { key: 'symptomCard', label: 'Symptom card' },
  ] as const
  const [activePage, setActivePage] = useState<(typeof pages)[number]['key']>('buttons')
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  const variants = [
    {
      key: 'primary',
      label: 'Primary',
      description: 'Main call-to-action with filled brand styling.',
    },
    {
      key: 'secondary',
      label: 'Secondary',
      description: 'Secondary action with bordered neutral surface styling.',
    },
    {
      key: 'secondaryOnBrand',
      label: 'Secondary-on brand',
      description: 'Secondary action tuned for use on brand-colored surfaces.',
    },
    {
      key: 'tertiary',
      label: 'Tertiary',
      description: 'Low-emphasis action with minimal chrome.',
    },
    {
      key: 'linkColor',
      label: 'Link color',
      description: 'Inline link-style action with color emphasis.',
    },
    {
      key: 'linkGray',
      label: 'Link gray',
      description: 'Inline link-style action with neutral gray emphasis.',
    },
  ] as const
  const states = [
    { key: 'default', label: 'Default', buttonProps: {} },
    { key: 'loading', label: 'Loading', buttonProps: { loading: true } },
    { key: 'disabled', label: 'Disabled', buttonProps: { disabled: true } },
  ] as const
  const pillStates = [
    { key: 'default', label: 'Default', selected: false },
    { key: 'hover', label: 'Hover', selected: false, className: 'bg-[var(--pill-hover-bg)]' },
    { key: 'selected', label: 'Selected', selected: true },
  ] as const
  const symptomOptions = [
    'Brain fog',
    'Fatigue',
    'Headache',
    'Nausea',
    'Irritability',
  ] as const

  function toggleSymptom(label: string, nextSelected: boolean) {
    setSelectedSymptoms((prev) => {
      if (nextSelected) {
        return prev.includes(label) ? prev : [...prev, label]
      }
      return prev.filter((item) => item !== label)
    })
  }

  return (
    <main className="min-h-svh p-10 bg-slate-100">
      <div className="max-w-none space-y-10">
        <header className="rounded-[20px] py-10">
          <div className="mb-12 flex items-center gap-2 text-[#283c4e]">
            <span className="inline-flex h-7 px-[6px] items-center justify-center rounded-[8px] border border-[rgba(10,13,18,0.12)] bg-white">
              <img src={IsabelDrawing} alt="" className="size-4" />
            </span>
            <p className="text-sm font-semibold">Isabel&apos;s Midi Takehome</p>
            <span className="inline-flex items-center text-[#8fa1af]">
              <ChevronRightIcon />
            </span>
            <p className="text-sm font-normal">
              {pages.find((page) => page.key === activePage)?.label}
            </p>
          </div>
          <div className="space-y-2">
            <p className="pb-2 text-5xl font-semibold tracking-[-0.02em] text-[#283c4e]">
              {pages.find((page) => page.key === activePage)?.label}
            </p>
            <p className="text-base text-[#a4a7ae]">
              {activePage === 'buttons' &&
                'Buttons communicate actions that users can take.'}
              {activePage === 'pills' &&
                'Selectable pills let users toggle categories like symptoms and filters.'}
              {activePage === 'symptomCard' &&
                'Symptom cards combine content and actions for quick daily symptom logging.'}
            </p>
          </div>
          <nav aria-label="Component pages" className="mt-8">
            <div className="inline-flex flex-wrap gap-2 rounded-[12px] bg-white p-2">
              {pages.map((page) => (
                <button
                  key={page.key}
                  type="button"
                  onClick={() => setActivePage(page.key)}
                  className={`rounded-[10px] px-4 py-2 text-sm font-semibold transition-colors ${
                    activePage === page.key
                      ? 'bg-[#283c4e] text-white'
                      : 'bg-transparent text-[#6b7c88] hover:bg-[#eef5f7]'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </nav>
        </header>

        {activePage === 'buttons' &&
          variants.map((variant) => (
            <section key={variant.key} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-base leading-5 font-semibold text-[#283c4e]">
                  {variant.label}
                </h2>
                <p className="text-sm text-[#a4a7ae]">
                  {variant.description}
                </p>
              </div>
              <div className="space-y-4">
                {states.map((state) => (
                  <div key={`${variant.key}-${state.key}`} className="space-y-2">
                    <p className="pb-[6px] text-[10px] font-medium uppercase tracking-wide text-slate-500">
                      {state.key === 'default'
                        ? `${state.label} (Tab into any button here to preview focus styles.)`
                        : state.label}
                    </p>
                    <div className="rounded-[12px] bg-white p-4">
                      <div className="overflow-x-auto">
                        <div className="inline-flex min-w-max flex-nowrap items-start justify-start gap-4">
                          {sizes.map((size) => (
                            <div
                              key={`${variant.key}-${size}-${state.key}-group`}
                              className="space-y-2 text-left"
                            >
                              <p className="text-[9px] font-medium uppercase tracking-wide text-slate-500">
                                {size}
                              </p>
                              <div className="flex items-center gap-2">
                                <Button
                                  key={`${variant.key}-${size}-${state.key}`}
                                  variant={variant.key}
                                  size={size}
                                  {...state.buttonProps}
                                >
                                  {state.key === 'loading'
                                    ? 'Submitting...'
                                    : 'Button CTA'}
                                </Button>
                                <Button
                                  key={`${variant.key}-${size}-${state.key}-icon-only`}
                                  variant={variant.key}
                                  size={size}
                                  iconTrailing={<ChevronRightIcon />}
                                  aria-label={state.label}
                                  {...state.buttonProps}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

        {activePage === 'pills' && (
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-base leading-5 font-semibold text-[#283c4e]">
                Selectable pill
              </h2>
              <p className="text-sm text-[#a4a7ae]">
                Toggleable label-only pill used for symptom and filter selection.
              </p>
            </div>

            <div className="space-y-2">
              <p className="pb-[6px] text-[10px] font-medium uppercase tracking-wide text-slate-500">
                States (Tab into a pill to preview focus styles.)
              </p>
              <div className="rounded-[12px] bg-white p-4">
                <div className="inline-flex flex-wrap items-center gap-3">
                  {pillStates.map((state) => (
                    <div key={state.key} className="space-y-2 text-left">
                      <p className="text-[9px] font-medium uppercase tracking-wide text-slate-500">
                        {state.label}
                      </p>
                      <SelectablePill
                        label="Brain fog"
                        selected={state.selected}
                        className={'className' in state ? state.className : undefined}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="pb-[6px] text-[10px] font-medium uppercase tracking-wide text-slate-500">
                Interactive example
              </p>
              <div className="rounded-[12px] bg-white p-4">
                <div className="inline-flex flex-wrap items-center gap-2">
                  {symptomOptions.map((symptom) => (
                    <SelectablePill
                      key={symptom}
                      label={symptom}
                      selected={selectedSymptoms.includes(symptom)}
                      onToggle={(nextSelected) => toggleSymptom(symptom, nextSelected)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activePage === 'symptomCard' && (
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-base leading-5 font-semibold text-[#283c4e]">
                Symptom card
              </h2>
              <p className="text-sm text-[#a4a7ae]">
                Realistic card composition using selectable pills as symptom
                toggles.
              </p>
            </div>
            <SymptomCard
              greeting="Good morning, Isabel."
              question="What are you experiencing today?"
              selectedSymptoms={selectedSymptoms}
              symptomOptions={symptomOptions}
              onToggleSymptom={toggleSymptom}
            />
          </section>
        )}
      </div>
    </main>
  )
}

export default App
