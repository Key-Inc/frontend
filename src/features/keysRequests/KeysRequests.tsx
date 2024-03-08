import { Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { RequestsTable } from './components/RequestsTable';
import { getColumns } from './constants/columns.tsx';
import { Filtering } from './components/Filtering.tsx';
import { Pagination } from '@/components/common';
import { OverlappingRequests } from './components/OverlappingRequests/OverlappingRequests.tsx';

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
    isLoading,
    handleReject,
  } = useKeysRequests();

  const COLUMNS = getColumns(
    (index) => handleApprove(getRequestIdByIndex(index)),
    (index) => handleReject(getRequestIdByIndex(index)),
  );

  return (
    <div className='flex gap-5 flex-col'>
      <OverlappingRequests
        toggle={() => setIsDialogOpen((prev) => !prev)}
        isOpen={isDialogOpen}
        id={dialogId}
      />
      <Filtering getParamsByName={getParamsByName} setParamsByName={setParamsByName} />
      {isLoading ? <Loader /> : <RequestsTable columns={COLUMNS} data={requestsList} />}
      <Pagination
        className='justify-center mt-auto'
        nextPage={nextPage}
        previousPage={previousPage}
        page={getParamsByName('Page') || '1'}
      />
    </div>
  );
};
