import { lazy, useMemo } from 'react'
import type { ComponentType } from 'react'

interface DocMeta {
  title?: string
  description?: string
}

type ContentModule = {
  default: ComponentType<any>
  meta?: DocMeta
}

const contentModules: Record<string, () => Promise<ContentModule>> = {
  'getting-started/introduction': () => import('@/content/getting-started/introduction'),
  'getting-started/installation': () => import('@/content/getting-started/installation'),
  'guides/routing': () => import('@/content/guides/routing'),
  'guides/components': () => import('@/content/guides/components'),
  'tutorials/beginner': () => import('@/content/tutorials/beginner'),
  'api-reference/core': () => import('@/content/api-reference/core'),
}

export function useDocContent(slug: string) {
  const importFn = contentModules[slug]

  const Component = useMemo(() => {
    if (!importFn) return null
    return lazy(importFn)
  }, [slug])

  const meta = useMemo<DocMeta | undefined>(() => {
    if (!importFn) return undefined
    const metaMap: Record<string, DocMeta> = {
      'getting-started/introduction': { title: 'Introduction', description: 'Learn about the documentation platform.' },
      'getting-started/installation': { title: 'Installation', description: 'Step-by-step installation guide.' },
      'guides/routing': { title: 'Routing', description: 'Understanding the routing system.' },
      'guides/components': { title: 'Components', description: 'Explore the component library.' },
      'tutorials/beginner': { title: 'Beginner Tutorial', description: 'Build your first documentation page.' },
      'api-reference/core': { title: 'Core API', description: 'Complete API reference.' },
    }
    return metaMap[slug]
  }, [slug])

  return { Component, meta }
}
