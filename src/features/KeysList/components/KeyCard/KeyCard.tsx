import { Button } from '@/components/ui';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface KeyCardProps {
  classromKey: KeyFullDto;
}

export const KeyCard = ({ classromKey }: KeyCardProps) => {
  return (
    <Card className='min-w-[280px] max-w-[400px] flex-1'>
      <CardHeader>
        <CardTitle className='text-xl'>Аудитория {classromKey.classroomId}</CardTitle>
        <CardDescription>{classromKey.userId}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <div className='flex space-y-2 flex-col mt-3 text-sm'>
          <span>{classromKey.keyStatus == 'InDeanOffice' ? 'В деканта' : 'В пользовании'}</span>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Отклонить</Button>
        <Button>Принять</Button>
      </CardFooter>
    </Card>
  );
};
