export interface NavItem {
  title: string
  slug: string
  items?: NavItem[]
}

export interface DocMeta {
  title: string
  description?: string
  order?: number
}

export interface Version {
  label: string
  value: string
}

export interface SearchResult {
  title: string
  slug: string
  category: string
  content: string
}
