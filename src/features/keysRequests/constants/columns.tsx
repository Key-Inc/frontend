import { Button } from '@/components/ui';
import { ColumnDef } from '@tanstack/react-table';
import { convertDate } from '../utils/convertDate';

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
    accessorFn: (row) => convertDate(new Date(row.startDate)),
    header: 'Дата начала',
  },
  {
    accessorFn: (row) => convertDate(new Date(row.endDate)),
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
