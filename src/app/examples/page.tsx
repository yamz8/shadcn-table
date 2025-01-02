import { Shell } from "@/components/shell"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExamplesPage() {
  return (
    <Shell className="md:pb-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Examples</h1>
          <p className="text-muted-foreground">
            Explore different configurations and use cases of the data table component.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Table Example */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-bold">Basic Table</h3>
              <p className="text-sm text-muted-foreground">
                A simple data table with basic sorting and filtering.
              </p>
              <Button asChild className="mt-4">
                <Link href="/examples/basic">View Example</Link>
              </Button>
            </div>
          </div>
          
          {/* Advanced Table Example */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-bold">Advanced Table</h3>
              <p className="text-sm text-muted-foreground">
                Advanced features like multi-select, row actions, and custom filters.
              </p>
              <Button asChild className="mt-4">
                <Link href="/examples/advanced-table">View Example</Link>
              </Button>
            </div>
          </div>
          
          {/* Floating Bar Example */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-bold">Floating Bar</h3>
              <p className="text-sm text-muted-foreground">
                Table with a floating action bar for bulk actions.
              </p>
              <Button asChild className="mt-4">
                <Link href="/examples/floating-bar">View Example</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  )
} 