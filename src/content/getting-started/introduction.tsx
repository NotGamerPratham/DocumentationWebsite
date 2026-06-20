export default function GettingStartedIntroduction() {
  return (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        Welcome to the documentation platform. This guide will help you understand the architecture,
        features, and how to use the platform effectively.
      </p>
      <p>
        The platform is built with modern web technologies to provide a fast, accessible, and
        developer-friendly documentation experience. It supports markdown with JSX components, syntax
        highlighting, and interactive examples.
      </p>

      <h2 id="key-features">Key Features</h2>
      <ul>
        <li>
          <strong>MDX Support</strong> — Write content in Markdown with embedded JSX components for
          interactive documentation.
        </li>
        <li>
          <strong>Syntax Highlighting</strong> — Code blocks with language detection, line numbers,
          and one-click copy.
        </li>
        <li>
          <strong>Full-Text Search</strong> — Instant search across all documentation with keyboard
          shortcuts (Cmd+K).
        </li>
        <li>
          <strong>Dark Mode</strong> — Automatic theme detection with manual toggle.</li>
        <li>
          <strong>Responsive Design</strong> — Optimized for desktop, tablet, and mobile viewing.
        </li>
        <li>
          <strong>Version Selector</strong> — Switch between documentation versions.</li>
        <li>
          <strong>Breadcrumb Navigation</strong> — Clear path indicators for deep content navigation.
        </li>
      </ul>

      <h2 id="quick-start">Quick Start</h2>
      <pre className="not-prose">
        <code className="language-bash">npm create docs-app
cd my-docs
npm run dev</code>
      </pre>
      <p>The development server will start at <code>http://localhost:5173</code>.</p>

      <h2 id="project-structure">Project Structure</h2>
      <pre className="not-prose">
        <code className="language-plaintext">src/
├── content/          # Documentation files
│   ├── getting-started/
│   ├── guides/
│   ├── tutorials/
│   └── api-reference/
├── components/       # React components
│   ├── layout/       # Layout components
│   └── ui/           # shadcn/ui components
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── data/             # Navigation and content data
├── types/            # TypeScript type definitions
└── lib/              # Utility functions</code>
      </pre>

      <h2 id="technology-stack">Technology Stack</h2>
      <table>
        <thead>
          <tr><th>Technology</th><th>Purpose</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>React 18</strong></td><td>UI framework</td></tr>
          <tr><td><strong>TypeScript</strong></td><td>Type safety</td></tr>
          <tr><td><strong>Vite</strong></td><td>Build tool</td></tr>
          <tr><td><strong>Tailwind CSS</strong></td><td>Styling</td></tr>
          <tr><td><strong>shadcn/ui</strong></td><td>UI components</td></tr>
          <tr><td><strong>react-router-dom</strong></td><td>Navigation</td></tr>
          <tr><td><strong>next-themes</strong></td><td>Dark mode</td></tr>
        </tbody>
      </table>

      <h2 id="navigation">Navigation</h2>
      <p>
        The sidebar on the left provides access to all documentation sections. Each section can be
        expanded to reveal sub-pages. Use the search bar at the top to find specific topics.
      </p>

      <hr />
      <h3 id="next-steps">Next Steps</h3>
      <p>
        Continue to the <a href="/getting-started/installation">Installation guide</a> to set up
        the platform in your project.
      </p>
    </>
  )
}
