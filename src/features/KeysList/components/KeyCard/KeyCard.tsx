import { Button } from '@/components/ui';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Combobox } from '@/components/ui/combobox';
import { useKeyCard } from './useKeyCard';

interface KeyCardProps {
  classromKey: KeyFullDto;
}

export interface ComboBoxItemType {
  value: string;
  label: string;
}

const comboboxItems: ComboBoxItemType[] = [{ value: 'Ivanov', label: 'Ivanov' }];

export const KeyCard = ({ classromKey }: KeyCardProps) => {
  const { handleUserSelect, hadleReturnInStock, selectedUser } = useKeyCard(
    classromKey.id,
  );

  return (
    <Card className='min-w-[280px] max-w-[400px] flex-1 flex justify-between flex-col'>
      <CardHeader className='pb-1'>
        <CardTitle className='text-xl'>Аудитория {classromKey.classroomId}</CardTitle>
        {classromKey.user && (
          <CardDescription>{classromKey.user.fullName}</CardDescription>
        )}
      </CardHeader>
      <CardContent className='flex flex-col space-y-2'>
        <div className='flex space-y-2 flex-col mt-3 text-sm'>
          <span>
            {classromKey.keyStatus == 'InDeanOffice' ? 'В деканте' : 'В пользовании'}
          </span>
        </div>
        {!classromKey.user && (
          <div>
            <Combobox
              items={comboboxItems}
              onSelect={handleUserSelect}
              value={selectedUser}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className='flex justify-between'>
        {!classromKey.user && <Button>Выдать</Button>}
        {classromKey.user && (
          <Button onClick={hadleReturnInStock}>Подтвердить возврат</Button>
        )}
      </CardFooter>
    </Card>
  );
};
