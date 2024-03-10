import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { translateGender } from '@/shared/utils';
import { useUserCard } from './useUserCard';

interface UserCardProps {
  user: UserFullDto;
  fetchUsers: () => void;
  resetPage: () => void;
}

export const UserCard = ({ user, fetchUsers, resetPage }: UserCardProps) => {
  const { hadleChangeUserRole, setUserRole, userRole } = useUserCard(
    user.id,
    fetchUsers,
    resetPage,
  );

  return (
    <Card className='min-w-[330px] md:max-w-[400px] flex-1'>
      <CardHeader>
        <CardTitle className='text-xl'>{user.fullName}</CardTitle>
        <CardDescription>{user.phoneNumber}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <Select
          onValueChange={(value) => setUserRole(value)}
          defaultValue={user.userRole}
          disabled={user.userRole === 'Admin'}
        >
          <SelectTrigger className='w-[150px] h-8'>
            <SelectValue placeholder='Роль' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Dean'>Декан</SelectItem>
            {user.userRole === 'Admin' && <SelectItem value='Admin'>Админ</SelectItem>}
            <SelectItem value='Teacher'>Преподаватель</SelectItem>
            <SelectItem value='Student'>Студент</SelectItem>
          </SelectContent>
        </Select>
        <div className='flex space-y-2 flex-col mt-3 text-sm'>
          <span>{translateGender(user.gender)}</span>
          <span>{user.email}</span>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button
          variant='outline'
          onClick={hadleChangeUserRole}
          disabled={user.userRole === 'Admin' || user.userRole === userRole}
        >
          Сохранить
        </Button>
      </CardFooter>
    </Card>
  );
};
