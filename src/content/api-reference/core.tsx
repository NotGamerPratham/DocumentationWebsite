export default function ApiReferenceCore() {
  return (
    <>
      <h2 id="modules">Modules</h2>
      <p>The platform provides several core modules for building documentation:</p>
      <table>
        <thead>
          <tr><th>Module</th><th>Path</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>cn</code></td><td><code>@/lib/utils</code></td><td>Class name merging utility</td></tr>
          <tr><td><code>navigation</code></td><td><code>@/data/navigation</code></td><td>Navigation tree and helpers</td></tr>
          <tr><td><code>versions</code></td><td><code>@/data/versions</code></td><td>Version configuration</td></tr>
          <tr><td><code>useSearch</code></td><td><code>@/hooks/useSearch</code></td><td>Search hook</td></tr>
          <tr><td><code>useDocContent</code></td><td><code>@/hooks/useDocContent</code></td><td>Content loader</td></tr>
        </tbody>
      </table>

      <h2 id="cn"><code>cn()</code></h2>
      <p>Merges class names with Tailwind CSS conflict resolution.</p>
      <pre className="not-prose">
        <code className="language-ts">{`import { cn } from '@/lib/utils'

cn('px-4 py-2', 'px-6')
// => 'py-2 px-6'`}</code>
      </pre>
      <p><strong>Signature:</strong></p>
      <pre className="not-prose">
        <code className="language-ts">function cn(...inputs: ClassValue[]): string</code>
      </pre>
      <table>
        <thead>
          <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>...inputs</code></td><td><code>ClassValue[]</code></td><td>Class names, arrays, or conditional objects</td></tr>
        </tbody>
      </table>

      <h2 id="navigation-api">Navigation API</h2>

      <h3 id="navigation"><code>navigation</code></h3>
      <p>The navigation tree is an array of <code>NavItem</code> objects:</p>
      <pre className="not-prose">
        <code className="language-ts">{`interface NavItem {
  title: string
  slug: string
  items?: NavItem[]
}`}</code>
      </pre>

      <h3 id="flattennavigation"><code>flattenNavigation()</code></h3>
      <p>Flattens the navigation tree into a flat list of all pages.</p>
      <pre className="not-prose">
        <code className="language-ts">{`function flattenNavigation(items: NavItem[]): { title: string; slug: string }[]`}</code>
      </pre>

      <h3 id="getbreadcrumbs"><code>getBreadcrumbs()</code></h3>
      <p>Returns an array of breadcrumb segments for a given slug.</p>
      <pre className="not-prose">
        <code className="language-ts">{`function getBreadcrumbs(slug: string): { title: string; slug: string }[]

getBreadcrumbs('getting-started/introduction')
// => [
//   { title: 'Getting Started', slug: 'getting-started' },
//   { title: 'Introduction', slug: 'getting-started/introduction' }
// ]`}</code>
      </pre>

      <h2 id="search-api">Search API</h2>

      <h3 id="usesearch"><code>useSearch()</code></h3>
      <p>A hook that filters documentation content based on a search query.</p>
      <pre className="not-prose">
        <code className="language-ts">{`function useSearch(query: string): SearchResult[]

interface SearchResult {
  title: string
  slug: string
  category: string
  content: string
}

const results = useSearch('installation')`}</code>
      </pre>

      <h2 id="theme-api">Theme API</h2>
      <p>The platform uses <code>next-themes</code> for theme management.</p>
      <pre className="not-prose">
        <code className="language-tsx">{`import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  )
}`}</code>
      </pre>

      <h3 id="themeprovider-props">ThemeProvider Props</h3>
      <table>
        <thead>
          <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>attribute</code></td><td><code>string</code></td><td><code>'class'</code></td><td>HTML attribute for theme</td></tr>
          <tr><td><code>defaultTheme</code></td><td><code>string</code></td><td><code>'system'</code></td><td>Default theme</td></tr>
          <tr><td><code>enableSystem</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Respect system preference</td></tr>
        </tbody>
      </table>

      <h2 id="type-definitions">Type Definitions</h2>

      <h3 id="docmeta"><code>DocMeta</code></h3>
      <pre className="not-prose">
        <code className="language-ts">{`interface DocMeta {
  title: string
  description?: string
  order?: number
}`}</code>
      </pre>

      <h3 id="version"><code>Version</code></h3>
      <pre className="not-prose">
        <code className="language-ts">{`interface Version {
  label: string
  value: string
}`}</code>
      </pre>

      <h2 id="utilities">Utilities</h2>
      <p>
        All heading elements have <code>scroll-mt-20</code> to ensure they are visible below the
        sticky header when navigated to via anchor links.
      </p>
      <p>
        The <code>.prose-custom</code> class provides Tailwind Typography prose styling with custom
        overrides for code blocks, links, and headings.
      </p>
    </>
  )
}
