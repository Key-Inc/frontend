import { Input, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { Select } from '@/components/ui';
import { useDebounce } from '@uidotdev/usehooks';
import { FilteringProps } from './Filtering.types';
import { useEffect, useState } from 'react';

export const Filtering = ({ setParamsByName, getParamsByName }: FilteringProps) => {
  const [fullName, setFullName] = useState(getParamsByName('FullName'));
  const [size, setSize] = useState(getParamsByName('Size'));
  const debouncedFullName = useDebounce(fullName, 300);
  const debouncedSize = useDebounce(size, 300);

  useEffect(() => {
    setParamsByName('FullName', debouncedFullName);
    setParamsByName('Size', debouncedSize);
  }, [debouncedFullName, debouncedSize]);

  return (
    <div className='grid grid-cols-2 gap-4 py-5 px-10'>
      <Input type='datetime-local' />
      <Input type='datetime-local' />
      <Select defaultValue={getParamsByName('Role')} onValueChange={(value) => setParamsByName('Role', value)}>
        <SelectTrigger>
          <SelectValue placeholder='Роль' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='Student'>Студент</SelectItem>
          <SelectItem value='Teacher'>Учитель</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue={getParamsByName('Sorting')} onValueChange={(value) => setParamsByName('Sorting', value)}>
        <SelectTrigger>
          <SelectValue placeholder='Сортировка' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='CreateDesc'>Сначала старые</SelectItem>
          <SelectItem value='CreateAsc'>Сначала новые</SelectItem>
          <SelectItem value='StartDateAsc'>Сначала заявки, которые начинаются первыми</SelectItem>
          <SelectItem value='StartDateDesc'>Сначала заявки, которые начинаются последними</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder='ФИО' value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <Input placeholder='Кол-во' type='number' value={size} onChange={(e) => setSize(e.target.value)} />
    </div>
  );
};
