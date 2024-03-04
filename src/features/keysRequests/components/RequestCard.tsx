import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { convertDate } from '../utils/convertDate';
import { translateUserRole } from '@/shared/utils';
import { putKeyReject } from '@/shared/utils';

export const RequestCard = ({
  classroomId,
  endDate,
  isRecurring,
  startDate,
  user,
  id,
}: KeyRequestFullDto) => {
  return (
    <Card className='min-w-[330px] max-w-[440px] flex-1'>
      <CardHeader>
        <CardTitle className='text-xl'>{user.fullName}</CardTitle>
        <CardDescription>{translateUserRole(user.userRole)}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <p>
          {/* {classroom.number} ({classroom.building}) */}
          {classroomId}
        </p>
        <p>Дата начала: {convertDate(new Date(startDate))}</p>
        <p>Дата окончания: {convertDate(new Date(endDate))}</p>
        <p>Повторяющаяся: {isRecurring ? 'Да' : 'Нет'}</p>
      </CardContent>
      <CardFooter>
        <Button variant='destructive' onClick={() => putKeyReject(id)}>
          Отклонить
        </Button>
      </CardFooter>
    </Card>
  );
};
