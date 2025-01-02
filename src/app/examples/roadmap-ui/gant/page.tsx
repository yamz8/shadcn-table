import { GanttExample } from '@/app/examples/roadmap-ui/gant/_components/gant-example';
import { Shell } from '@/components/shell';

export default function GanttPage() {
  return (
    <div>
      <h1>Gantt</h1>
      <Shell className='gap-4'>
        <GanttExample />
      </Shell>
    </div>
  );
}
