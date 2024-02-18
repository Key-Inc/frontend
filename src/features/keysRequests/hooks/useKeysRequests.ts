import { REQUEST } from '@/lib/constants/api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { KeysRequestsPagination } from '../types/KeysRequestsPagination';

export const useKeysRequests = () => {
  const [requestsList, setRequestsList] = useState<KeyRequestFullDto[]>([]);
  const [paramsValues, setParamsValues] = useState<KeysRequestsPagination>({} as KeysRequestsPagination);
  const [params, setParams] = useSearchParams();

  const setParamsByName = (name: string, value: string) => {
    params.set(name, value);
    setParams(params);
  };

  const nextPage = () => {
    setParamsByName('Page', String(Number(params.get('Page') || '1') + 1));
  };

  const previousPage = () => {
    setParamsByName('Page', String(Number(params.get('Page')!) - 1));
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
  }, []);

  return { setParamsByName, nextPage, previousPage, requestsList };
};
