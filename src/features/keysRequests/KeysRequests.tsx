import { Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { RequestsTable } from './components/RequestsTable';
import { getColumns } from './constants/columns.tsx';
import { Filtering } from './components/Filtering.tsx';
import { Pagination } from '@/components/common';
import { OverlappingRequests } from './components/OverlappingRequests/OverlappingRequests.tsx';
import { reject } from './utils/requestStatusChange.ts';

export const KeysRequests = () => {
  const {
    requestsList,
    setParamsByName,
    handleApprove,
    isDialogOpen,
    getRequestIdByIndex,
    getParamsByName,
    previousPage,
    nextPage,
    setIsDialogOpen,
    dialogId,
  } = useKeysRequests();

  const COLUMNS = getColumns(
    (index) => handleApprove(getRequestIdByIndex(index)),
    (index) => reject(getRequestIdByIndex(index)),
  );

  return (
    <div className='flex gap-5 flex-col'>
      <OverlappingRequests toggle={() => setIsDialogOpen((prev) => !prev)} isOpen={isDialogOpen} id={dialogId} />
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
