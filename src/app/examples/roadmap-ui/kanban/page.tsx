import { KanbanExample } from '@/app/examples/roadmap-ui/kanban/_components/kanban-example';
import { Shell } from '@/components/shell';

export default function KanbanPage() {
  return (
    <div>
      <h1>Kanban</h1>
      <Shell className='gap-4'>
        <KanbanExample />
      </Shell>
    </div>
  );
}
