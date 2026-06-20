export default function TutorialsBeginner() {
  return (
    <>
      <h2 id="introduction">Introduction</h2>
      <p>
        In this tutorial, you'll learn how to create a custom documentation page with interactive
        examples. By the end, you'll have a working page with code snippets, tables, and embedded
        components.
      </p>

      <h2 id="step-1-create-the-content-file">Step 1: Create the Content File</h2>
      <p>Create a new TSX file at <code>src/content/guides/my-guide.tsx</code>:</p>
      <pre className="not-prose">
        <code className="language-tsx">{`export default function MyGuide() {
  return (
    <>
      <h2 id="getting-started">Getting Started</h2>
      <p>This is my custom guide page.</p>

      <h2 id="code-example">Code Example</h2>
      <pre><code className="language-tsx">{'function Greeting({ name }: { name: string }) {\n  return <h1>Hello, {name}!</h1>\n}'}</code></pre>
    </>
  )
}`}</code>
      </pre>

      <h2 id="step-2-register-the-content">Step 2: Register the Content</h2>
      <p>Open <code>src/hooks/useDocContent.ts</code> and add your new content:</p>
      <pre className="not-prose">
        <code className="language-ts">{`const contentModules: Record<string, () => Promise<ContentModule>> = {
  // ... existing entries
  'guides/my-guide': () => import('@/content/guides/my-guide'),
}`}</code>
      </pre>

      <h2 id="step-3-add-navigation">Step 3: Add Navigation</h2>
      <p>Open <code>src/data/navigation.ts</code> and add the page:</p>
      <pre className="not-prose">
        <code className="language-ts">{`{
  title: 'Guides',
  slug: 'guides',
  items: [
    { title: 'Routing', slug: 'guides/routing' },
    { title: 'Components', slug: 'guides/components' },
    { title: 'My Guide', slug: 'guides/my-guide' }, // New entry
  ],
}`}</code>
      </pre>
      <p>Your page is now live at <code>/guides/my-guide</code>!</p>

      <h2 id="embedding-components">Embedding Components</h2>
      <p>You can embed React components directly in your content:</p>
      <pre className="not-prose">
        <code className="language-tsx">{`import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

<Badge>New Feature</Badge>
<Button onClick={() => alert('Hello!')}>Click me</Button>`}</code>
      </pre>

      <h2 id="tables">Tables</h2>
      <table>
        <thead>
          <tr><th>Feature</th><th>Status</th><th>Priority</th></tr>
        </thead>
        <tbody>
          <tr><td>Dark mode</td><td>✅ Done</td><td>High</td></tr>
          <tr><td>Search</td><td>✅ Done</td><td>High</td></tr>
          <tr><td>Print styles</td><td>🔄 In progress</td><td>Medium</td></tr>
          <tr><td>i18n</td><td>📋 Planned</td><td>Low</td></tr>
        </tbody>
      </table>

      <hr />
      <h3 id="whats-next">What's Next</h3>
      <ul>
        <li>Explore the <a href="/guides/components">Components guide</a> for more UI patterns</li>
        <li>Check the <a href="/api-reference/core">API Reference</a> for detailed API documentation</li>
        <li>Customize the theme by modifying CSS variables in <code>src/index.css</code></li>
      </ul>
    </>
  )
}
