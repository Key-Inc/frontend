import { ColumnDef } from '@tanstack/react-table';

export const COLUMNS: ColumnDef<KeyRequestFullDto>[] = [
  {
    accessorKey: 'status',
    header: 'Статус заявки',
  },
  {
    accessorKey: 'user',
    header: 'Человек',
  },
  {
    accessorKey: 'classroom',
    header: 'Кабинет',
  },
  {
    accessorKey: 'startDate',
    header: 'Дата начала',
  },
  {
    accessorKey: 'endDate',
    header: 'Дата окончания',
  },
  {
    accessorKey: 'isRecurring',
    header: 'Повторяющаяся заявка',
  },
];
