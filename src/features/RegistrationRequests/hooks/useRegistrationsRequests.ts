import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RegistrationsRequestsQueryParams } from '../types/registrationsRequestsQueryParams';
import { getRegistrationRequests } from '@/shared/utils';

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

  const configParams = {
    Gender: params.get('Gender'),
    NameQuery: params.get('NameQuery'),
    Sorting: params.get('Sorting'),
    Page: params.get('Page'),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchRegistrationRequests = async () => {
    try {
      const res = await getRegistrationRequests({ params: configParams });
      setUsers(res.data.items);
      setValues({ ...configParams });
    } catch (error) {
      if (values.NameQuery) params.set('NameQuery', values.NameQuery);
      if (values.Page) params.set('Page', values.Page);
      if (values.Sorting) params.set('Sorting', values.Sorting);
      setParams(params);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRegistrationRequests();
  }, [params]);

  return {
    users,
    params,
    setParamsByName,
    nextPage,
    previousPage,
    fetchRegistrationRequests,
  };
};
