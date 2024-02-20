import { Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { DataTable } from '@/components/common';
import { COLUMNS } from './constants/columns';

export const KeysRequests = () => {
  const { requestsList, nextPage, previousPage, setParamsByName } = useKeysRequests();

  return <div>{requestsList.length ? <DataTable columns={COLUMNS} data={requestsList} /> : <Loader />}</div>;
};
