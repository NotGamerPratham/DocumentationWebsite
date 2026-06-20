import { useParams, Navigate } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useDocContent } from '@/hooks/useDocContent'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export function DocPage() {
  const { slug = 'getting-started/introduction', category, subcategory } = useParams()

  const resolvedSlug = [category, subcategory, slug].filter(Boolean).join('/')

  const { Component, meta } = useDocContent(resolvedSlug)

  if (!Component) {
    return <Navigate to={`/getting-started/introduction`} replace />
  }

  return (
    <article>
      <Breadcrumbs slug={resolvedSlug} />

      <div className="mb-8">
        {meta?.title && (
          <h1 className="text-3xl font-bold tracking-tight mb-2">{meta.title}</h1>
        )}
        {meta?.description && (
          <p className="text-lg text-muted-foreground">{meta.description}</p>
        )}
      </div>

      <div className="prose-custom">
        <Component />
      </div>

      <Separator className="my-12" />

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {resolvedSlug.split('/')[0]}
          </Badge>
        </div>
        <p>
          <a
            href={`https://github.com/example/docs/edit/main/src/content/${resolvedSlug}.mdx`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Edit this page
          </a>
        </p>
      </div>
    </article>
  )
}
