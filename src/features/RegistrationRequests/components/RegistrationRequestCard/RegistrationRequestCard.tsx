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

interface RegistrationRequestCardProps {
  user: UserDto;
}
export const RegistrationRequestCard = ({
  user,
}: RegistrationRequestCardProps) => {
  const { handleApprove, handleRefuse } = useRegistrationRequestCard();
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{user.fullName}</CardTitle>
        <CardDescription>{user.phoneNumber}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <span>{user.userRole}</span>
        <span>{user.gender}</span>
        <span>{user.email}</span>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline' onClick={handleRefuse}>
          Отклонить
        </Button>
        <Button onClick={handleApprove}>Принять</Button>
      </CardFooter>
    </Card>
  );
};
