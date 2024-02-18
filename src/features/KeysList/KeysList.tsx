import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { KeyCard } from './components/KeyCard/KeyCard';
import { useKeysList } from './hooks/useKeysList';

export const KeysList = () => {
  const { keys, setKeyStatus } = useKeysList();
  return (
    <div className='pt-4'>
      <Select onValueChange={(value) => setKeyStatus(value)} defaultValue='InDeanOffice'>
        <SelectTrigger className='w-[200px]'>
          <SelectValue placeholder='Статус ключей' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='InDeanOffice'>В деканте</SelectItem>
          <SelectItem value='InPossession'>В пользовании</SelectItem>
        </SelectContent>
      </Select>
      <div className='flex gap-5 py-4 flex-wrap'>
        {keys.map((key, index) => (
          <KeyCard classromKey={key} key={index} />
        ))}
      </div>
    </div>
  );
};
