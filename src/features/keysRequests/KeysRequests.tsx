import { Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { RequestsTable } from './components/RequestsTable';
import { getColumns } from './constants/columns.tsx';
import { Filtering } from './components/Filtering.tsx';
import { Pagination } from '@/components/common';
import { OverlappingRequests } from './components/OverlappingRequests.tsx';

export const KeysRequests = () => {
  const {
    requestsList,
    setParamsByName,
    approve,
    reject,
    isDialogOpen,
    getRequestIdByIndex,
    getParamsByName,
    previousPage,
    nextPage,
  } = useKeysRequests();

  const COLUMNS = getColumns(
    (index) => approve(getRequestIdByIndex(index)),
    (index) => reject(getRequestIdByIndex(index)),
  );

  return (
    <div className='flex gap-5 flex-col'>
      <OverlappingRequests isOpen={isDialogOpen} reject={reject} requests={requestsList} />
      <Filtering getParamsByName={getParamsByName} setParamsByName={setParamsByName} />
      {requestsList.length ? <RequestsTable columns={COLUMNS} data={requestsList} /> : <Loader />}
      <Pagination
        className='justify-center'
        nextPage={nextPage}
        previousPage={previousPage}
        page={getParamsByName('Page') || '1'}
      />
    </div>
  );
};
