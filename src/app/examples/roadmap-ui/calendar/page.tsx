import { CalendarExample } from '@/app/examples/roadmap-ui/calendar/_components/calendar-example';
import { Shell } from '@/components/shell';

export default function GanttPage() {
  return (
    <div>
      <h1>Gantt</h1>
      <Shell className='gap-4'>
        <CalendarExample />
      </Shell>
    </div>
  );
}
