import type { NavItem } from '@/types/docs'

export const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    slug: 'getting-started',
    items: [
      { title: 'Introduction', slug: 'getting-started/introduction' },
      { title: 'Installation', slug: 'getting-started/installation' },
    ],
  },
  {
    title: 'Guides',
    slug: 'guides',
    items: [
      { title: 'Routing', slug: 'guides/routing' },
      { title: 'Components', slug: 'guides/components' },
    ],
  },
  {
    title: 'Tutorials',
    slug: 'tutorials',
    items: [
      { title: 'Beginner Tutorial', slug: 'tutorials/beginner' },
    ],
  },
  {
    title: 'API Reference',
    slug: 'api-reference',
    items: [
      { title: 'Core API', slug: 'api-reference/core' },
    ],
  },
]

export function flattenNavigation(items: NavItem[]): { title: string; slug: string }[] {
  const result: { title: string; slug: string }[] = []
  for (const item of items) {
    if (item.items) {
      result.push(...flattenNavigation(item.items))
    } else {
      result.push({ title: item.title, slug: item.slug })
    }
  }
  return result
}

export function findNavItem(slug: string): NavItem | undefined {
  for (const item of navigation) {
    if (item.slug === slug) return item
    if (item.items) {
      const found = item.items.find((child) => child.slug === slug)
      if (found) return found
    }
  }
  return undefined
}

export function getBreadcrumbs(slug: string): { title: string; slug: string }[] {
  const crumbs: { title: string; slug: string }[] = []
  const parts = slug.split('/')

  for (let i = 0; i < parts.length; i++) {
    const currentSlug = parts.slice(0, i + 1).join('/')
    const item = findNavItem(currentSlug)
    if (item) {
      crumbs.push({ title: item.title, slug: currentSlug })
    }
  }

  return crumbs
}
