import {
  Input,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { Select } from '@/components/ui';
import { useDebounce } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { handleChangeRole, handleChangeStatus } from './Filtering.utils';

interface FilteringProps {
  setParamsByName: (name: string, value?: string) => void;
  getParamsByName: (name: string) => string;
}

export const Filtering = ({ setParamsByName, getParamsByName }: FilteringProps) => {
  const [fullName, setFullName] = useState(getParamsByName('FullName'));
  const [size, setSize] = useState(getParamsByName('Size') || '10');
  const debouncedFullName = useDebounce(fullName, 300);
  const debouncedSize = useDebounce(size, 300);

  useEffect(() => {
    setParamsByName('FullName', debouncedFullName);
    setParamsByName('Size', debouncedSize);
  }, [debouncedFullName, debouncedSize]);

  return (
    <div className='grid md:grid-cols-2 gap-4 py-5 px-8 grid-cols-1'>
      <div>
        <span>Минимальная дата подачи заявки</span>
        <Input
          type='datetime-local'
          value={getParamsByName('MinDate')}
          onChange={(e) => setParamsByName('MinDate', e.currentTarget.value)}
        />
      </div>
      <div>
        <span>Максимальная дата подачи заявки</span>
        <Input
          type='datetime-local'
          value={getParamsByName('MaxDate')}
          onChange={(e) => setParamsByName('MaxDate', e.currentTarget.value)}
        />
      </div>
      <div>
        <span>Роль заявителя</span>
        <Select
          defaultValue={getParamsByName('Role') || 'Any'}
          onValueChange={(value) => handleChangeRole(value, setParamsByName)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Роль' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Any'>Любая</SelectItem>
            <SelectItem value='Student'>Студент</SelectItem>
            <SelectItem value='Teacher'>Учитель</SelectItem>
            <SelectItem value='Dean'>Деканат</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <span>Сортировка</span>
        <Select
          defaultValue={getParamsByName('Sorting')}
          onValueChange={(value) => setParamsByName('Sorting', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Сортировка' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='CreateAsc'>Сначала старые</SelectItem>
            <SelectItem value='CreateDesc'>Сначала новые</SelectItem>
            <SelectItem value='StartDateDesc'>
              Сначала заявки, которые начинаются первыми
            </SelectItem>
            <SelectItem value='StartDateAsc'>
              Сначала заявки, которые начинаются последними
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <span>ФИО заявителя</span>
        <Input
          placeholder='ФИО'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <span>Количество заявок на странице</span>
        <Input
          placeholder='Кол-во'
          type='number'
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <div>
        <span>Статус заявки</span>
        <Select
          defaultValue={getParamsByName('Status') || 'Any'}
          onValueChange={(value) => handleChangeStatus(value, setParamsByName)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Статус' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Any'>Любая</SelectItem>
            <SelectItem value='Accepted'>Принятые</SelectItem>
            <SelectItem value='Rejected'>Отклонённые</SelectItem>
            <SelectItem value='UnderConsideration'>На рассмотрении</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
