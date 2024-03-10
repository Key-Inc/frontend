import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KeysRequestsQueryParams } from '../types/KeysRequestsQueryParams';
import { AxiosError } from 'axios';
import { getKeysRequests, putKeyReject } from '@/shared/utils';
import { putKeyApprove } from '@/shared/utils';

export const useKeysRequests = () => {
  const [requestsList, setRequestsList] = useState<KeyRequestFullDto[]>([]);
  const [paramsValues, setParamsValues] = useState<KeysRequestsQueryParams>(
    {} as KeysRequestsQueryParams,
  );
  const [params, setParams] = useSearchParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogId, setDialogId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const setParamsByName = (name: string, value?: string) => {
    if (value) params.set(name, value);
    else params.delete(name);
    setParams(params);
  };

  const getParamsByName = (name: string) => params.get(name) || '';

  const nextPage = () => {
    setParamsByName('Page', String(Number(params.get('Page') || '1') + 1));
  };

  const previousPage = () => {
    setParamsByName('Page', String(Number(params.get('Page')!) - 1));
  };

  const handleApprove = async (id: string) => {
    try {
      await putKeyApprove(id, false);
      reset();
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 400) {
          setDialogId(id);
          setIsDialogOpen(true);
        }
      }
    }
  };

  const reset = () => {
    setParamsByName('Page', '1');
    fetchKeysRequest();
  };

  const handleReject = async (id: string) => {
    await putKeyReject(id);
    reset();
  };

  const fetchKeysRequest = async () => {
    const minDate = params.get('MinDate');
    const maxDate = params.get('MaxDate');

    const configParams: KeysRequestsQueryParams = {
      MinDate: minDate ? new Date(minDate).toISOString() : null,
      MaxDate: maxDate ? new Date(maxDate).toISOString() : null,
      FullName: params.get('FullName') || null,
      Role: params.get('Role'),
      Sorting: params.get('Sorting'),
      Page: params.get('Page'),
      Size: params.get('Size'),
      Status: params.get('Status'),
    };

    setRequestsList([]);
    setIsLoading(true);

    try {
      const res = await getKeysRequests({
        params: configParams,
      });
      setRequestsList(res.data.items);
      setParamsValues({ ...configParams });
    } catch (error) {
      if (paramsValues.FullName) params.set('FullName', paramsValues.FullName);
      if (paramsValues.Page) params.set('Page', paramsValues.Page);
      if (paramsValues.MinDate) params.set('MinDate', paramsValues.MinDate);
      if (paramsValues.MaxDate) params.set('MaxDate', paramsValues.MaxDate);
      if (paramsValues.Role) params.set('Role', paramsValues.Role);
      if (paramsValues.Sorting) params.set('Sorting', paramsValues.Sorting);
      setParams(params);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchKeysRequest();
  }, [params]);

  return {
    setParamsByName,
    nextPage,
    previousPage,
    requestsList,
    handleApprove,
    getParamsByName,
    isDialogOpen,
    dialogId,
    setIsDialogOpen,
    handleReject,
    isLoading,
    reset,
  };
};
