import { useEffect, useState, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSearch } from '@/hooks/useSearch'
import { cn } from '@/lib/utils'

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const results = useSearch(query)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onOpenChange(true)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onOpenChange])

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const handleSelect = useCallback(
    (slug: string) => {
      navigate(`/${slug}`)
      onOpenChange(false)
    },
    [navigate, onOpenChange]
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex].slug)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] top-[15%] translate-y-0">
        <div className="flex items-center gap-2 border-b pb-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </p>
          )}

          {results.length > 0 && (
            <div className="space-y-0.5">
              {results.map((result, index) => (
                <button
                  key={result.slug}
                  onClick={() => handleSelect(result.slug)}
                  className={cn(
                    'w-full text-left px-2 py-2 rounded-md transition-colors',
                    index === selectedIndex
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-accent/50'
                  )}
                >
                  <div className="text-sm font-medium">{result.title}</div>
                  <div className="text-xs text-muted-foreground truncate mt-0.5">
                    {result.content}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    {result.category}
                  </div>
                </button>
              ))}
            </div>
          )}

          {!query.trim() && (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Start typing to search documentation...
            </div>
          )}
        </div>

        <div className="border-t pt-2 flex items-center gap-4 text-[10px] text-muted-foreground">
          <span>↑↓ Navigate</span>
          <span>↵ Open</span>
          <span className="ml-auto">Esc Close</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
