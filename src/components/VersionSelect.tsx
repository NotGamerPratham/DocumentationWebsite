import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { versions } from '@/data/versions'

export function VersionSelect() {
  const [current, setCurrent] = useState(versions[0])

  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="inline-flex items-center gap-1 rounded-md border border-input bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        {current.label}
        <ChevronDown className="h-3 w-3" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-50 min-w-[140px] rounded-md border bg-popover p-1 shadow-md">
          {versions.map((v) => (
            <button
              key={v.value}
              onClick={() => {
                setCurrent(v)
                setOpen(false)
              }}
              className={`w-full text-left px-2.5 py-1.5 text-xs rounded-sm transition-colors ${
                v.value === current.value
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-popover-foreground hover:bg-accent/50'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
