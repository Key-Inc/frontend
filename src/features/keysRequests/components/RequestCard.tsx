import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface RequestCardProps {
  keyRequest: KeyRequestFullDto;
  reject: (id: string) => void;
}

export const RequestCard = ({
  keyRequest: { classroom, endDate, isRecurring, startDate, user, id },
  reject,
}: RequestCardProps) => {
  return (
    <Card className='min-w-[330px] max-w-[440px] flex-1'>
      <CardHeader>
        <CardTitle className='text-xl'>{user.fullName}</CardTitle>
        <CardDescription>{user.userRole}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <p>
          {classroom.number} ({classroom.building})
        </p>
        <p>
          <span>Дата начала: {startDate}</span>
          <span>Дата окончания: {endDate}</span>
        </p>
        <p>Повторяющаяся: {isRecurring ? 'Да' : 'Нет'}</p>
      </CardContent>
      <CardFooter>
        <Button variant='destructive' onClick={() => reject(id)}>
          Отклонить
        </Button>
      </CardFooter>
    </Card>
  );
};
