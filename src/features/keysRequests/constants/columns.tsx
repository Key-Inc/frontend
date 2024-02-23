import { Button } from '@/components/ui';
import { ColumnDef } from '@tanstack/react-table';

export const getColumns = (
  approve: (index: number) => void,
  reject: (index: number) => void,
): ColumnDef<KeyRequestFullDto>[] => [
  {
    accessorKey: 'status',
    header: 'Статус заявки',
  },
  {
    accessorKey: `user.fullName`,
    header: 'Человек',
  },
  {
    accessorKey: `user.userRole`,
    header: 'Роль человека',
  },
  {
    accessorFn: (row) => `${row.classroom.number} (${row.classroom.building})`,
    header: 'Кабинет, корпус',
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
    accessorFn: (row) => (row ? 'Да' : 'Нет'),
    header: 'Повторяющаяся заявка',
  },
  {
    header: 'Подтвердить заявку',
    cell: (props) => <Button onClick={() => approve(Number(props.row.id))}>Подтвердить</Button>,
  },
  {
    header: 'Отклонить заявку',
    cell: (props) => (
      <Button variant={'destructive'} onClick={() => reject(Number(props.row.id))}>
        Отклонить
      </Button>
    ),
  },
];
