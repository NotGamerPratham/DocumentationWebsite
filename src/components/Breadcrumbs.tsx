import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { getBreadcrumbs } from '@/data/navigation'

interface BreadcrumbsProps {
  slug: string
}

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  const crumbs = getBreadcrumbs(slug)

  if (crumbs.length === 0) return null

  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1
        return (
          <span key={crumb.slug} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {isLast ? (
              <span className="text-foreground font-medium">{crumb.title}</span>
            ) : (
              <Link
                to={`/${crumb.slug}`}
                className="hover:text-foreground transition-colors"
              >
                {crumb.title}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
