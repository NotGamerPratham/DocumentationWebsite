export default function GettingStartedInstallation() {
  return (
    <>
      <h2 id="prerequisites">Prerequisites</h2>
      <p>Before you begin, ensure you have the following installed:</p>
      <ul>
        <li><a href="https://nodejs.org/">Node.js</a> 18.x or later</li>
        <li>npm, yarn, or pnpm package manager</li>
      </ul>

      <h2 id="create-a-new-project">Create a New Project</h2>
      <p>The fastest way to get started is using the create command:</p>
      <pre className="not-prose">
        <code className="language-bash">npm create docs-app@latest my-project
cd my-project</code>
      </pre>

      <h2 id="manual-installation">Manual Installation</h2>
      <p>If you prefer to set up manually, follow these steps:</p>

      <h3 id="1-initialize-the-project">1. Initialize the Project</h3>
      <pre className="not-prose">
        <code className="language-bash">mkdir my-docs && cd my-docs
npm init -y</code>
      </pre>

      <h3 id="2-install-dependencies">2. Install Dependencies</h3>
      <pre className="not-prose">
        <code className="language-bash">npm install react react-dom react-router-dom @mdx-js/react react-syntax-highlighter lucide-react clsx tailwind-merge class-variance-authority next-themes
npm install -D @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-scroll-area @radix-ui/react-slot @radix-ui/react-tooltip
npm install -D typescript @types/react @types/react-dom vite @vitejs/plugin-react tailwindcss postcss autoprefixer tailwindcss-animate @tailwindcss/typography</code>
      </pre>

      <h3 id="3-configure-vite">3. Configure Vite</h3>
      <p>Create <code>vite.config.ts</code>:</p>
      <pre className="not-prose">
        <code className="language-ts">{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`}</code>
      </pre>

      <h3 id="4-configure-tailwind-css">4. Configure Tailwind CSS</h3>
      <p>Create <code>tailwind.config.ts</code>:</p>
      <pre className="not-prose">
        <code className="language-ts">{`import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config`}</code>
      </pre>

      <h3 id="5-set-up-typescript">5. Set Up TypeScript</h3>
      <p>Create <code>tsconfig.json</code>:</p>
      <pre className="not-prose">
        <code className="language-json">{`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}`}</code>
      </pre>

      <h2 id="running-the-development-server">Running the Development Server</h2>
      <pre className="not-prose">
        <code className="language-bash">npm run dev</code>
      </pre>
      <p>This starts the Vite development server at <code>http://localhost:5173</code>.</p>

      <h2 id="building-for-production">Building for Production</h2>
      <pre className="not-prose">
        <code className="language-bash">npm run build</code>
      </pre>
      <p>
        The output will be in the <code>dist/</code> directory, ready to deploy to any static
        hosting provider.
      </p>

      <hr />
      <h3 id="next-steps">Next Steps</h3>
      <p>
        Now that you have the platform installed, check out the{' '}
        <a href="/guides/routing">Routing guide</a> to understand how pages and navigation work.
      </p>
    </>
  )
}
