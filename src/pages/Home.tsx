import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, Code2, Layers, Zap, Search, Moon, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { navigation } from '@/data/navigation'
import { ThemeToggle } from '@/components/ThemeToggle'
import { TooltipProvider } from '@/components/ui/tooltip'

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Guides',
    description: 'Detailed documentation covering every aspect of the platform with practical examples.',
  },
  {
    icon: Code2,
    title: 'Interactive Examples',
    description: 'Live code examples with syntax highlighting and copy-to-clipboard functionality.',
  },
  {
    icon: Layers,
    title: 'Organized Structure',
    description: 'Well-organized content with searchable sidebar navigation and breadcrumb trails.',
  },
  {
    icon: Zap,
    title: 'Fast & Responsive',
    description: 'Built with modern tooling for instant page loads and a seamless mobile experience.',
  },
  {
    icon: Search,
    title: 'Full-Text Search',
    description: 'Powerful search with keyboard shortcuts (Cmd+K) to find what you need instantly.',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    description: 'Automatic dark mode support with system preference detection and manual toggle.',
  },
]

export function Home() {
  const navigate = useNavigate()

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <span>Documentation</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <Button onClick={() => navigate('/getting-started/introduction')}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-5xl px-4 pt-20 pb-16 lg:px-8 lg:pt-28 lg:pb-20">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                v2.0 — Latest Release
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build better with
                <br />
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  great documentation
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A modern documentation platform designed for clarity and developer experience.
                Explore guides, tutorials, and API references — all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button size="lg" onClick={() => navigate('/getting-started/introduction')}>
                  Read the docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/getting-started/installation')}
                >
                  Installation
                </Button>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-lg border p-6 transition-all hover:shadow-md hover:border-indigo-500/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t">
            <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
              <h2 className="text-2xl font-bold text-center mb-10">Explore Documentation</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {navigation.map((section) => (
                  <div
                    key={section.slug}
                    className="rounded-lg border p-5 cursor-pointer hover:border-indigo-500/30 transition-colors"
                    onClick={() =>
                      navigate(
                        `/${section.items?.[0]?.slug || section.slug}`
                      )
                    }
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-indigo-500" />
                      <h3 className="font-semibold text-sm">{section.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {section.items?.length || 0} pages
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8 text-center text-sm text-muted-foreground">
            <p>Built with React, TypeScript, Tailwind CSS & shadcn/ui</p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
