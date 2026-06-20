import { type ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyButton } from './CopyButton'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  className?: string
  children?: ReactNode
}

const languageMap: Record<string, string> = {
  js: 'javascript',
  jsx: 'jsx',
  ts: 'typescript',
  tsx: 'tsx',
  bash: 'bash',
  sh: 'bash',
  json: 'json',
  md: 'markdown',
  css: 'css',
  html: 'html',
  py: 'python',
  rs: 'rust',
  go: 'go',
}

export function CodeBlock({ className, children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''
  const code = String(children).replace(/\n$/, '')

  if (!match) {
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    )
  }

  const prismLang = languageMap[language] || language

  return (
    <div className="relative group my-6">
      <div className="flex items-center justify-between rounded-t-lg bg-zinc-900 px-4 py-2 text-xs text-zinc-400 border-b border-zinc-800">
        <span>{language}</span>
        <CopyButton text={code} />
      </div>
      <SyntaxHighlighter
        language={prismLang}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        showLineNumbers
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export function InlineCode({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <code className={cn('rounded bg-muted px-1.5 py-0.5 text-sm font-mono', className)}>
      {children}
    </code>
  )
}
