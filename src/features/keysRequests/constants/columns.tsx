import { Button } from '@/components/ui';
import { ColumnDef } from '@tanstack/react-table';
import { convertDate, convertToLocaleDate } from '../utils/convertDate';
import { translateRequestStatus, translateUserRole } from '@/shared/utils';

export const getColumns = (
  approve: (id: string) => void,
  reject: (id: string) => void,
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
    accessorFn: (row) => `${row.classroom.number} (${row.classroom.building})`,
    header: 'Кабинет, корпус',
  },
  {
    accessorFn: (row) => convertDate(convertToLocaleDate(row.startDate)),
    header: 'Дата начала',
  },
  {
    accessorFn: (row) => convertDate(convertToLocaleDate(row.endDate)),
    header: 'Дата окончания',
  },
  {
    accessorFn: (row) =>
      row.endDateOfRecurrence
        ? `Да, до ${convertDate(convertToLocaleDate(row.endDateOfRecurrence))}`
        : 'Нет',
    header: 'Повторяющаяся заявка',
  },
  {
    header: 'Подтвердить заявку',
    cell: (props) =>
      props.row.original.status === 'Accepted' ? (
        'Заявка уже принята'
      ) : (
        <Button onClick={() => approve(props.row.original.id)}>Подтвердить</Button>
      ),
  },
  {
    header: 'Отклонить заявку',
    cell: (props) =>
      props.row.original.status === 'Rejected' ? (
        'Заявка уже отклонена'
      ) : (
        <Button variant={'destructive'} onClick={() => reject(props.row.original.id)}>
          Отклонить
        </Button>
      ),
  },
];
