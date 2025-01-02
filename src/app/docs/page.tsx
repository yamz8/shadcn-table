import { Shell } from "@/components/shell"

export default function DocsPage() {
  return (
    <Shell className="md:pb-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="text-muted-foreground">
            Learn how to use the data table component and its features.
          </p>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
            <p className="text-muted-foreground mt-2">
              Learn how to install and set up the data table component in your project.
            </p>
            {/* Add installation instructions and basic setup here */}
          </section>
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Basic Usage</h2>
            <p className="text-muted-foreground mt-2">
              Learn how to create a basic data table with sorting and filtering.
            </p>
            {/* Add basic usage examples here */}
          </section>
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Advanced Features</h2>
            <p className="text-muted-foreground mt-2">
              Explore advanced features like custom filters, row actions, and more.
            </p>
            {/* Add advanced features documentation here */}
          </section>
        </div>
      </div>
    </Shell>
  )
} 