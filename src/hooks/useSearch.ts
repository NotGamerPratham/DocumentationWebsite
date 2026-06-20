import { useMemo } from 'react'
import type { SearchResult } from '@/types/docs'
import { navigation } from '@/data/navigation'

const searchContent: Record<string, string> = {
  'getting-started/introduction': 'Learn about the documentation platform, its features, and how to get started quickly.',
  'getting-started/installation': 'Step-by-step guide to install and configure the platform in your project.',
  'guides/routing': 'Understanding the routing system, dynamic routes, and navigation patterns.',
  'guides/components': 'Explore the component library, props, composition patterns, and best practices.',
  'tutorials/beginner': 'Follow along with a hands-on beginner tutorial to build your first application.',
  'api-reference/core': 'Complete API reference for core modules, including types, functions, and interfaces.',
}

export function useSearch(query: string): SearchResult[] {
  return useMemo(() => {
    if (!query.trim()) return []

    const lower = query.toLowerCase()
    const results: SearchResult[] = []

    function walk(items: typeof navigation, category: string) {
      for (const item of items) {
        if (item.items) {
          walk(item.items, item.title)
        } else {
          const content = searchContent[item.slug] || ''
          const matchTitle = item.title.toLowerCase().includes(lower)
          const matchContent = content.toLowerCase().includes(lower)

          if (matchTitle || matchContent) {
            results.push({
              title: item.title,
              slug: item.slug,
              category,
              content,
            })
          }
        }
      }
    }

    walk(navigation, 'Documentation')
    return results.slice(0, 10)
  }, [query])
}
