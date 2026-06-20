export default function GuidesRouting() {
  return (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        The documentation platform uses React Router for client-side routing. Routes are defined in
        the main <code>App.tsx</code> file and support nested URL patterns for organizing content
        hierarchically.
      </p>

      <h2 id="route-structure">Route Structure</h2>
      <pre className="not-prose">
        <code className="language-tsx">{`<Routes>
  <Route path="/" element={<Home />} />
  <Route element={<DocsLayout />}>
    <Route path=":slug" element={<DocPage />} />
    <Route path=":category/:slug" element={<DocPage />} />
    <Route path=":category/:subcategory/:slug" element={<DocPage />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>`}</code>
      </pre>
      <ul>
        <li><strong><code>/</code></strong> — Landing page with feature overview and navigation to docs</li>
        <li><strong><code>/getting-started/introduction</code></strong> — Documentation pages with nested routing</li>
        <li><strong><code>*</code></strong> — Catch-all 404 page</li>
      </ul>

      <h2 id="adding-new-pages">Adding New Pages</h2>
      <p>To add a new documentation page, follow these steps:</p>

      <h3 id="1-create-a-content-file">1. Create a Content File</h3>
      <p>Create a new TSX file in <code>src/content/</code>:</p>
      <pre className="not-prose">
        <code className="language-tsx">{`// src/content/guides/advanced-config.tsx

export default function AdvancedConfig() {
  return (
    <>
      <h2 id="advanced-configuration">Advanced Configuration</h2>
      <p>Content goes here...</p>
    </>
  )
}`}</code>
      </pre>

      <h3 id="2-register-the-content-module">2. Register the Content Module</h3>
      <p>Add the import to <code>src/hooks/useDocContent.ts</code>:</p>
      <pre className="not-prose">
        <code className="language-ts">{`const contentModules: Record<string, () => Promise<ContentModule>> = {
  // ... existing entries
  'guides/advanced-config': () => import('@/content/guides/advanced-config'),
}`}</code>
      </pre>

      <h3 id="3-add-navigation-entry">3. Add Navigation Entry</h3>
      <p>Add the page to the navigation data in <code>src/data/navigation.ts</code>:</p>
      <pre className="not-prose">
        <code className="language-ts">{`{
  title: 'Guides',
  slug: 'guides',
  items: [
    { title: 'Routing', slug: 'guides/routing' },
    { title: 'Components', slug: 'guides/components' },
    { title: 'Advanced Configuration', slug: 'guides/advanced-config' },
  ],
}`}</code>
      </pre>

      <h2 id="dynamic-routing">Dynamic Routing</h2>
      <p>The platform supports three levels of URL nesting:</p>
      <table>
        <thead>
          <tr><th>Pattern</th><th>Example</th></tr>
        </thead>
        <tbody>
          <tr><td><code>:slug</code></td><td><code>/introduction</code></td></tr>
          <tr><td><code>:category/:slug</code></td><td><code>/guides/routing</code></td></tr>
          <tr><td><code>:category/:subcategory/:slug</code></td><td><code>/api-reference/core</code></td></tr>
        </tbody>
      </table>

      <h2 id="navigation-components">Navigation Components</h2>

      <h3 id="sidebar">Sidebar</h3>
      <p>
        The sidebar automatically renders navigation from the data structure. Sections with{' '}
        <code>items</code> are rendered as collapsible accordions, while leaf nodes are clickable
        links.
      </p>

      <h3 id="breadcrumbs">Breadcrumbs</h3>
      <p>
        Breadcrumb navigation is automatically generated from the current URL path. Each segment is
        parsed and matched against the navigation tree to display the correct hierarchy.
      </p>
      <pre className="not-prose">
        <code className="language-tsx">{`export function Breadcrumbs({ slug }: { slug: string }) {
  const crumbs = getBreadcrumbs(slug)
  // Renders: Getting Started > Introduction
}`}</code>
      </pre>

      <h2 id="programmatic-navigation">Programmatic Navigation</h2>
      <p>Use React Router's <code>useNavigate</code> hook for programmatic navigation:</p>
      <pre className="not-prose">
        <code className="language-tsx">{`import { useNavigate } from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/guides/routing')}>
      Go to Routing Guide
    </button>
  )
}`}</code>
      </pre>
    </>
  )
}
