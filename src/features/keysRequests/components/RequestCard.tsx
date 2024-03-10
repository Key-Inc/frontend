import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { convertDate, convertToLocaleDate } from '../utils/convertDate';
import { translateUserRole } from '@/shared/utils';

export interface RequestCardProps {
  request: KeyRequestFullDto;
  handleReject: () => void;
}

export const RequestCard = ({ request, handleReject }: RequestCardProps) => {
  return (
    <Card className='min-w-[330px] max-w-[440px] flex-1'>
      <CardHeader>
        <CardTitle className='text-xl'>{request.user.fullName}</CardTitle>
        <CardDescription>{translateUserRole(request.user.userRole)}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <p>
          {request.classroom.number} ({request.classroom.building})
        </p>
        <p>Дата начала: {convertDate(convertToLocaleDate(request.startDate))}</p>
        <p>Дата окончания: {convertDate(convertToLocaleDate(request.endDate))}</p>
        <p>
          Повторяющаяся:{' '}
          {request.endDateOfRecurrence ? `Да, до ${request.endDateOfRecurrence}` : 'Нет'}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant='destructive' onClick={handleReject}>
          Отклонить
        </Button>
      </CardFooter>
    </Card>
  );
};
