import { CONSIDERATION } from '@/lib/constants/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RegistrationsRequestsQueryParams } from '../types/registrationsRequestsQueryParams';
import { api } from '@/api/api';

export const useRegistrationsRequests = () => {
  const [values, setValues] = useState<RegistrationsRequestsQueryParams>(
    {} as RegistrationsRequestsQueryParams,
  );
  const [users, setUsers] = useState<UserDto[]>([]);
  const [params, setParams] = useSearchParams();

  const nextPage = () => {
    setParamsByName('Page', String(Number(params.get('Page') || '1') + 1));
  };

  const previousPage = () => {
    setParamsByName('Page', String(Number(params.get('Page')!) - 1));
  };

  const setParamsByName = (name: string, value: string) => {
    params.set(name, value);
    setParams(params);
  };

  useEffect(() => {
    const configParams = {
      Gender: params.get('Gender'),
      FullName: params.get('FullName'),
      MinAge: params.get('MinAge'),
      MaxAge: params.get('MaxAge'),
      Sorting: params.get('Sorting'),
      Page: params.get('Page'),
    };

    const fetchData = async () => {
      try {
        const res = await api.get<RegistrationRequestPagedListDto>(`${CONSIDERATION}`, {
          params: configParams,
        });
        setUsers(res.data.items);
        setValues({ ...configParams });
      } catch (error) {
        if (values.FullName) params.set('FullName', values.FullName);
        if (values.Page) params.set('Page', values.Page);
        if (values.Gender) params.set('Gender', values.Gender);
        if (values.MinAge) params.set('MinAge', values.MinAge);
        if (values.MaxAge) params.set('MaxAge', values.MaxAge);
        if (values.Sorting) params.set('Sorting', values.Sorting);
        setParams(params);
        console.error(error);
      }
    };
    fetchData();
  }, [params]);

  return { users, params, setParamsByName, nextPage, previousPage };
};
