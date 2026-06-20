export default function GuidesComponents() {
  return (
    <>
      <h2 id="overview">Overview</h2>
      <p>
        The platform includes a rich set of UI components built with shadcn/ui and Radix UI
        primitives. These components are fully accessible, customizable, and support dark mode out of
        the box.
      </p>

      <h2 id="button-component">Button Component</h2>
      <p>Buttons trigger actions throughout the interface. They come in multiple variants and sizes.</p>
      <pre className="not-prose">
        <code className="language-tsx">{`import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`}</code>
      </pre>

      <h3 id="button-props">Button Props</h3>
      <table>
        <thead>
          <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>variant</code></td><td><code>'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'</code></td><td><code>'default'</code></td><td>Visual style</td></tr>
          <tr><td><code>size</code></td><td><code>'default' | 'sm' | 'lg' | 'icon'</code></td><td><code>'default'</code></td><td>Button size</td></tr>
          <tr><td><code>asChild</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Compose with Radix Slot</td></tr>
        </tbody>
      </table>

      <h2 id="dialog-component">Dialog Component</h2>
      <p>Dialogs display content in a modal overlay.</p>
      <pre className="not-prose">
        <code className="language-tsx">{`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

export function ExampleDialog() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to proceed?
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`}</code>
      </pre>

      <h2 id="accordion-component">Accordion Component</h2>
      <p>Accordions organize content into expandable sections.</p>
      <pre className="not-prose">
        <code className="language-tsx">{`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export function FAQ() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this platform?</AccordionTrigger>
        <AccordionContent>
          A modern documentation platform with React, TypeScript, and Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}</code>
      </pre>

      <h2 id="badge-component">Badge Component</h2>
      <p>Badges are used for status indicators and labels.</p>
      <pre className="not-prose">
        <code className="language-tsx">{`import { Badge } from '@/components/ui/badge'

export function Labels() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Deprecated</Badge>
    </div>
  )
}`}</code>
      </pre>

      <h2 id="composition-pattern">Composition Pattern</h2>
      <p>
        Components support composition via the <code>asChild</code> prop (powered by Radix Slot).
      </p>
      <pre className="not-prose">
        <code className="language-tsx">{`<Button asChild>
  <a href="https://example.com" target="_blank">
    External Link
  </a>
</Button>`}</code>
      </pre>
    </>
  )
}
