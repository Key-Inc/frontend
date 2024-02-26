import { REQUEST } from '@/lib/constants/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KeysRequestsQueryParams } from '../types/KeysRequestsQueryParams';
import { KEY_APPROVE, KEY_REJECT } from '@/lib/constants/api';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useKeysRequests = () => {
  const [requestsList, setRequestsList] = useState<KeyRequestFullDto[]>([]);
  const [paramsValues, setParamsValues] = useState<KeysRequestsQueryParams>({} as KeysRequestsQueryParams);
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

  const approve = async (id: string) => {
    try {
      await axios.put(KEY_APPROVE(id), {});
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 400) {
          setDialogId(id);
          setIsDialogOpen(true);
        }
      } else toast('Произошла ошибка');
    }
  };

  const reject = async (id: string) => {
    try {
      await axios.put(KEY_REJECT(id));
    } catch (e) {
      toast('Произошла ошибка');
    }
  };

  useEffect(() => {
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
        const res = await axios.get<KeyRequestPagedListDto>(`${REQUEST}`, {
          params: configParams,
        });
        setRequestsList(res.data.requests);
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
    approve,
    reject,
    getParamsByName,
    isDialogOpen,
    dialogId,
    setIsDialogOpen,
  };
};
