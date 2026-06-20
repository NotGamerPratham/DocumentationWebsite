declare module 'next-themes' {
  import type { ReactNode } from 'react'

  interface ThemeProviderProps {
    children: ReactNode
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element
  export function useTheme(): {
    theme: string | undefined
    setTheme: (theme: string) => void
    resolvedTheme: string | undefined
  }
}

declare module 'react-syntax-highlighter' {
  import type { ComponentType, ReactNode } from 'react'

  interface SyntaxHighlighterProps {
    language?: string
    style?: Record<string, React.CSSProperties>
    customStyle?: React.CSSProperties
    children?: string
    showLineNumbers?: boolean
    wrapLines?: boolean
  }

  export const Prism: ComponentType<SyntaxHighlighterProps>
  export const Light: ComponentType<SyntaxHighlighterProps>
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  const style: Record<string, React.CSSProperties>
  export const oneDark: Record<string, React.CSSProperties>
  export default style
}
