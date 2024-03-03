import { REQUEST } from '@/lib/constants/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KeysRequestsQueryParams } from '../types/KeysRequestsQueryParams';
import { AxiosError } from 'axios';
import { approve } from '../utils/requestStatusChange';
import { api } from '@/api/api';

export const useKeysRequests = () => {
  const [requestsList, setRequestsList] = useState<KeyRequestFullDto[]>([]);
  const [paramsValues, setParamsValues] = useState<KeysRequestsQueryParams>(
    {} as KeysRequestsQueryParams,
  );
  const [params, setParams] = useSearchParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogId, setDialogId] = useState('');

  const setParamsByName = (name: string, value: string) => {
    params.set(name, value);
    setParams(params);
  };

  const getParamsByName = (name: string) => params.get(name) || '';

  const nextPage = () => {
    setParamsByName('Page', String(Number(params.get('Page') || '1') + 1));
  };

  const previousPage = () => {
    setParamsByName('Page', String(Number(params.get('Page')!) - 1));
  };

  const getRequestIdByIndex = (index: number) => requestsList[index].id;

  const handleApprove = async (id: string) =>
    approve(id, false, (e) => {
      if (e instanceof AxiosError) {
        if (e.response?.status === 400) {
          setDialogId(id);
          setIsDialogOpen(true);
        }
      }
    });

  useEffect(() => {
    setParamsByName('Size', '10');

    const configParams = {
      MinDate: params.get('MinDate'),
      MaxDate: params.get('MaxDate'),
      FullName: params.get('FullName'),
      Role: params.get('Role'),
      Sorting: params.get('Sorting'),
      Page: params.get('Page'),
      Size: params.get('Size'),
    };

    const fetchData = async () => {
      try {
        setRequestsList([]);
        const res = await api.get<KeyRequestPagedListDto>(`${REQUEST}`, {
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
        console.error(error);
      }
    };
    fetchData();
  }, [params]);

  return {
    setParamsByName,
    nextPage,
    previousPage,
    requestsList,
    getRequestIdByIndex,
    handleApprove,
    getParamsByName,
    isDialogOpen,
    dialogId,
    setIsDialogOpen,
  };
};
