import { Button } from '@/components/ui';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui';

import { useKeyCard } from './useKeyCard';
import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/shared/utils';

interface KeyCardProps {
  classromKey: KeyFullDto;
}

export const KeyCard = ({ classromKey }: KeyCardProps) => {
  const {
    handleUserSelect,
    hadleReturnInStock,
    users,
    handleSearchChange,
    hadleIssueToUser,
  } = useKeyCard(classromKey.id);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<UserFullDto | null>(null);

  return (
    <Card className='min-w-[280px] max-w-[400px] flex-1 flex justify-between flex-col'>
      <CardHeader className='pb-1'>
        <CardTitle className='text-xl'>{classromKey.classroomId}</CardTitle>
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
        {classromKey.keyStatus == 'InDeanOffice' && (
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className='w-[200px] justify-between'
                >
                  {value ? value.fullName : 'Выберите студента...'}
                  <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-0'>
                <Command>
                  <CommandInput
                    placeholder='Поиск студента...'
                    className='h-9'
                    onValueChange={(e) => handleSearchChange(e)}
                  />
                  <CommandEmpty>Студент не найден.</CommandEmpty>
                  <CommandGroup>
                    {users.map((user) => (
                      <CommandItem
                        key={user.id}
                        value={user.fullName}
                        onSelect={() => {
                          setValue(user);
                          handleUserSelect(user.id);
                          setOpen(false);
                        }}
                      >
                        {user.fullName}
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            value && value.id === user.id ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </CardContent>
      <CardFooter className='flex justify-between'>
        {!classromKey.user && <Button onClick={hadleIssueToUser}>Выдать</Button>}
        {classromKey.user && (
          <Button onClick={hadleReturnInStock}>Подтвердить возврат</Button>
        )}
      </CardFooter>
    </Card>
  );
};
