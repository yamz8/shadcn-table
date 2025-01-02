import { Shell } from '@/components/shell';
import { TableExample } from './_components/table-example';

export default function TablePage() {
  return (
    <div>
      <h1>Table</h1>
      <Shell className='gap-4'>
        <TableExample />
      </Shell>
    </div>
  );
}
