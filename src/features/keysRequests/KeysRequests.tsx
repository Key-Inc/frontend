import { Loader } from '@/components/ui';
import { useKeysRequests } from './hooks/useKeysRequests';
import { RequestsTable } from './components/RequestsTable';
import { getColumns } from './constants/columns.tsx';

export const KeysRequests = () => {
  const { requestsList, nextPage, previousPage, setParamsByName, approve, reject } = useKeysRequests();

  const COLUMNS = getColumns(approve, reject);

  return <div>{requestsList.length ? <RequestsTable columns={COLUMNS} data={requestsList} /> : <Loader />}</div>;
};
