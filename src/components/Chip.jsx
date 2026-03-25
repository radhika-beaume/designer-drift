export default function Chip({ number, label, onClick }) {
  const showNumber = number !== undefined && number !== null && number !== ''

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ borderBottom: '1px solid var(--border-chips)' }}
      className="w-full min-h-[44px] rounded-lg bg-surface px-4 py-3 text-left transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
    >
      <div className={`flex items-start ${showNumber ? 'gap-3' : 'gap-0'}`}>
        {showNumber ? (
          <div className="font-['Lora'] text-[32px] font-bold leading-none text-secondary opacity-30">
            {number}
          </div>
        ) : null}
        <div className="text-base font-normal text-primary">{label}</div>
      </div>
    </button>
  )
}
