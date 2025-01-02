 import { Shell } from "@/components/shell"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExamplesPage() {
  return (
    <Shell className="md:pb-10">
       <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Examples</h1>
          <p className="text-muted-foreground">
            Collection of examples from shadcn-table and roadmap-ui implementations.
          </p>
        </div>

        {/* Shadcn Table Examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Shadcn Table Examples</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Basic Table</h3>
                <p className="text-sm text-muted-foreground">
                  A simple data table with basic sorting and filtering.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/examples/shadcn-table/basic">View Example</Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Advanced Table</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced features like multi-select, row actions, and custom filters.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/examples/shadcn-table/advanced-table">View Example</Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Floating Bar</h3>
                <p className="text-sm text-muted-foreground">
                  Table with a floating action bar for bulk actions.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/examples/shadcn-table/floating-bar">View Example</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Add New Row</h3>
                <p className="text-sm text-muted-foreground">
                  Table with the ability to add new rows directly.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/examples/shadcn-table/with-add-new-row">View Example</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap UI Examples */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Roadmap UI Examples</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Roadmap Table</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive roadmap table with timeline visualization.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/examples/roadmap-ui/table">View Example</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>        
    </Shell>
  )
} 