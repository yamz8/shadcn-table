"use client"

import * as React from "react"
import { tasks, type Task } from "@/db/schema"
import type {
  DataTableFilterField,
  DataTableRowAction,
} from "@/types"

import { toSentenceCase } from "@/lib/utils"
import { useDataTable } from "@/hooks/use-data-table"
import { DataTable } from "@/components/data-table/data-table"
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar"

import type {
  getTaskPriorityCounts,
  getTasks,
  getTaskStatusCounts,
} from "../_lib/queries"
import { getPriorityIcon, getStatusIcon } from "../_lib/utils"
import { DeleteTasksDialog } from "./delete-tasks-dialog"
import { getColumns } from "./tasks-table-columns"
import { TasksTableToolbarActions } from "./tasks-table-toolbar-actions"
import { UpdateTaskSheet } from "./update-task-sheet"

interface TasksTableProps {
  promises: Promise<
    [
      Awaited<ReturnType<typeof getTasks>>,
      Awaited<ReturnType<typeof getTaskStatusCounts>>,
      Awaited<ReturnType<typeof getTaskPriorityCounts>>,
    ]
  >
}

export function TasksTable({ promises }: TasksTableProps) {
  const [{ data, pageCount }, statusCounts, priorityCounts] =
    React.use(promises)

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<Task> | null>(null)

  const columns = React.useMemo(() => getColumns({ setRowAction }), [])

  const filterFields: DataTableFilterField<Task>[] = [
    {
      id: "title",
      label: "Title",
      placeholder: "Filter titles...",
    },
    {
      id: "status",
      label: "Status",
      options: tasks.status.enumValues.map((status) => ({
        label: toSentenceCase(status),
        value: status,
        icon: getStatusIcon(status),
        count: statusCounts[status],
      })),
    },
    {
      id: "priority",
      label: "Priority",
      options: tasks.priority.enumValues.map((priority) => ({
        label: toSentenceCase(priority),
        value: priority,
        icon: getPriorityIcon(priority),
        count: priorityCounts[priority],
      })),
    },
  ]

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    initialState: {
      sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"] },
    },
    getRowId: (originalRow) => originalRow.id,
    shallow: false,
    clearOnDefault: false,
  })

  return (
    <>
      <DataTable table={table}>
        <DataTableToolbar table={table} filterFields={filterFields}>
          <TasksTableToolbarActions table={table} />
        </DataTableToolbar>
      </DataTable>
      <UpdateTaskSheet
        open={rowAction?.type === "update"}
        onOpenChange={() => setRowAction(null)}
        task={rowAction?.row.original ?? null}
      />
      <DeleteTasksDialog
        open={rowAction?.type === "delete"}
        onOpenChange={() => setRowAction(null)}
        tasks={rowAction?.row.original ? [rowAction?.row.original] : []}
        showTrigger={false}
        onSuccess={() => rowAction?.row.toggleSelected(false)}
      />
    </>
  )
}
