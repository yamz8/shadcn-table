import { Shell } from '@/components/shell';
import { ListExample } from './_components/list-example';

export default function KanbanPage() {
  return (
    <div>
      <h1>Kanban</h1>
      <Shell className='gap-4'>
        <ListExample />
      </Shell>
    </div>
  );
}
