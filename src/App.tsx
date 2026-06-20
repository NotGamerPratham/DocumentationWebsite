import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { DocPage } from '@/pages/DocPage'
import { NotFound } from '@/pages/NotFound'
import { DocsLayout } from '@/components/layout/DocsLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<DocsLayout />}>
        <Route path=":slug" element={<DocPage />} />
        <Route path=":category/:slug" element={<DocPage />} />
        <Route path=":category/:subcategory/:slug" element={<DocPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
