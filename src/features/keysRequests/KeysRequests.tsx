import { Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { RequestsTable } from './components/RequestsTable';
import { getColumns } from './constants/columns.tsx';
import { Filtering } from './components/Filtering/Filtering.tsx';

export const KeysRequests = () => {
  const { requestsList, setParamsByName, approve, reject, getParamsByName } = useKeysRequests();

  const COLUMNS = getColumns(approve, reject);

  return (
    <div className='flex gap-5 flex-col'>
      <Filtering getParamsByName={getParamsByName} setParamsByName={setParamsByName} />
      {requestsList.length ? <RequestsTable columns={COLUMNS} data={requestsList} /> : <Loader />}
    </div>
  );
};
