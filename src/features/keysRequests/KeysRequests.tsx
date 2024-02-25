import { Button, Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { RequestsTable } from './components/RequestsTable';
import { getColumns } from './constants/columns.tsx';
import { Filtering } from './components/Filtering/Filtering.tsx';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export const KeysRequests = () => {
  const { requestsList, setParamsByName, approve, reject, getParamsByName, previousPage, nextPage } = useKeysRequests();

  const COLUMNS = getColumns(approve, reject);

  return (
    <div className='flex gap-5 flex-col'>
      <Filtering getParamsByName={getParamsByName} setParamsByName={setParamsByName} />
      {requestsList.length ? <RequestsTable columns={COLUMNS} data={requestsList} /> : <Loader />}
      <div className='gap-3 flex pt-3 justify-center items-center'>
        <Button variant='outline' size='sm' disabled={false} className='border-none' onClick={previousPage}>
          <ChevronLeftIcon className='h-6 w-6 stroke-2 font-normal' />
        </Button>
        <span>{getParamsByName('Page')}</span>
        <Button variant='outline' size='sm' disabled={false} className='border-none' onClick={nextPage}>
          <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
        </Button>
      </div>
    </div>
  );
};
