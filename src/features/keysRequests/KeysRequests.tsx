import { Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { RequestsTable } from './components/RequestsTable';
import { getColumns } from './constants/columns.tsx';
import { Filtering } from './components/Filtering/Filtering.tsx';
import { Pagination } from '@/components/common';
import { OverlappingRequests } from './components/OverlappingRequests/OverlappingRequests.tsx';

export const KeysRequests = () => {
  const {
    requestsList,
    setParamsByName,
    handleApprove,
    isDialogOpen,
    getParamsByName,
    previousPage,
    nextPage,
    setIsDialogOpen,
    dialogId,
    isLoading,
    handleReject,
    reset,
  } = useKeysRequests();

  const COLUMNS = getColumns(handleApprove, handleReject);

  return (
    <div className='flex gap-5 flex-col max-w-full'>
      <OverlappingRequests
        toggle={() => setIsDialogOpen((prev) => !prev)}
        isOpen={isDialogOpen}
        id={dialogId}
        reset={reset}
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
