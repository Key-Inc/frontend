import { Button } from '@/components/ui';
import { ColumnDef } from '@tanstack/react-table';
import { convertDate } from '../utils/convertDate';
import { translateRequestStatus, translateUserRole } from '@/shared/utils';

export const getColumns = (
  approve: (index: number) => void,
  reject: (index: number) => void,
): ColumnDef<KeyRequestFullDto>[] => [
  {
    accessorFn: (row) => translateRequestStatus(row.status),
    header: 'Статус заявки',
  },
  {
    accessorKey: `user.fullName`,
    header: 'Человек',
  },
  {
    accessorFn: (row) => translateUserRole(row.user.userRole),
    header: 'Роль человека',
  },
  {
    // accessorFn: (row) => `${row.classroom.number} (${row.classroom.building})`,
    accessorFn: (row) => `${row.classroomId})`,
    header: 'Кабинет, корпус',
  },
  {
    accessorFn: (row) => convertDate(new Date(Date.parse(row.startDate.slice(0, -1)))),
    header: 'Дата начала',
  },
  {
    accessorFn: (row) => convertDate(new Date(Date.parse(row.endDate.slice(0, -1)))),
    header: 'Дата окончания',
  },
  {
    accessorFn: (row) => (row ? 'Да' : 'Нет'),
    header: 'Повторяющаяся заявка',
  },
  {
    header: 'Подтвердить заявку',
    cell: (props) => (
      <Button onClick={() => approve(Number(props.row.id))}>Подтвердить</Button>
    ),
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
