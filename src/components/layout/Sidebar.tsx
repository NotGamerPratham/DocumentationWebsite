import { useLocation, useNavigate } from 'react-router-dom'
import { navigation, flattenNavigation } from '@/data/navigation'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface SidebarProps {
  onNavClick?: () => void
}

export function Sidebar({ onNavClick }: SidebarProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const currentSlug = location.pathname.slice(1) || 'getting-started/introduction'

  const allPages = flattenNavigation(navigation)

  const handleNav = (slug: string) => {
    navigate(`/${slug}`)
    onNavClick?.()
  }

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-1 py-4">
        {navigation.map((section) => {
          const isActive = section.items?.some((item) => item.slug === currentSlug)
          const defaultOpen = isActive

          if (!section.items) {
            return (
              <button
                key={section.slug}
                onClick={() => handleNav(section.slug)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                  section.slug === currentSlug
                    ? 'bg-sidebar-accent/10 text-sidebar-accent'
                    : 'text-sidebar-foreground hover:bg-sidebar-muted'
                )}
              >
                {section.title}
              </button>
            )
          }

          return (
            <div key={section.slug} className="px-3">
              <Accordion
                type="multiple"
                defaultValue={defaultOpen ? [section.slug] : undefined}
              >
                <AccordionItem value={section.slug}>
                  <AccordionTrigger
                    className={cn(
                      'text-sm font-medium px-1 rounded-md hover:no-underline',
                      isActive && 'text-sidebar-accent'
                    )}
                  >
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-0.5 pl-1">
                      {section.items.map((item) => (
                        <button
                          key={item.slug}
                          onClick={() => handleNav(item.slug)}
                          className={cn(
                            'flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors text-left',
                            item.slug === currentSlug
                              ? 'bg-sidebar-accent/10 text-sidebar-accent font-medium'
                              : 'text-sidebar-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-muted'
                          )}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )
        })}

        <Separator className="my-4 mx-4 w-auto" />

        <div className="px-3">
          <p className="px-2 text-xs font-medium text-sidebar-muted-foreground uppercase tracking-wider">
            All Pages
          </p>
          <div className="mt-2 flex flex-col gap-0.5">
            {allPages.map((page) => (
              <button
                key={page.slug}
                onClick={() => handleNav(page.slug)}
                className={cn(
                  'flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors text-left',
                  page.slug === currentSlug
                    ? 'bg-sidebar-accent/10 text-sidebar-accent font-medium'
                    : 'text-sidebar-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-muted'
                )}
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
