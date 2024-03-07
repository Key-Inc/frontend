import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRegistrationRequestCard } from './useRegistrationRequestCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { translateGender } from '@/shared/utils';

interface RegistrationRequestCardProps {
  user: UserDto;
}
export const RegistrationRequestCard = ({ user }: RegistrationRequestCardProps) => {
  const { handleApprove, handleReject, setUserRole } = useRegistrationRequestCard(
    user.id,
  );

  return (
    <Card className='min-w-[330px] max-w-[440px] flex-1'>
      <CardHeader>
        <CardTitle className='text-xl'>{user.fullName}</CardTitle>
        <CardDescription>{user.phoneNumber}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <Select onValueChange={(value) => setUserRole(value)} defaultValue={'Student'}>
          <SelectTrigger className='w-[150px] h-8'>
            <SelectValue placeholder='Роль' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Dean'>Декан</SelectItem>
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
        <Button variant='outline' onClick={handleReject}>
          Отклонить
        </Button>
        <Button onClick={handleApprove}>Принять</Button>
      </CardFooter>
    </Card>
  );
};
