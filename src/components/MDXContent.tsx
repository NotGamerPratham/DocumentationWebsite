import type { ComponentType, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CodeBlock, InlineCode } from './CodeBlock'

type HeadingProps = { children?: ReactNode; id?: string }

function createHeading(Tag: 'h1' | 'h2' | 'h3' | 'h4') {
  return function Heading({ children, ...props }: HeadingProps) {
    const id = getHeadingId(children)
    return (
      <Tag id={id} className="group" {...props}>
        <a
          href={`#${id}`}
          className="no-underline hover:underline decoration-muted-foreground/30"
        >
          {children}
        </a>
      </Tag>
    )
  }
}

function getHeadingId(children: ReactNode): string {
  if (typeof children === 'string') {
    return children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  }
  return ''
}

function A({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith('/')) {
    return (
      <Link to={href} className="text-primary hover:text-indigo-500 transition-colors font-medium">
        {children}
      </Link>
    )
  }
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-primary hover:text-indigo-500 transition-colors font-medium"
      {...props}
    >
      {children}
    </a>
  )
}

function Pre({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

export const components: Record<string, ComponentType<any>> = {
  h1: createHeading('h1'),
  h2: createHeading('h2'),
  h3: createHeading('h3'),
  h4: createHeading('h4'),
  code: InlineCode,
  pre: Pre,
  CodeBlock,
  a: A,
}
