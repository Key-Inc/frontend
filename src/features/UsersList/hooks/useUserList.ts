import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UsersQueryParams } from '../types/UsersQueryParams';
import { getUsers } from '@/shared/utils/api/requests/user/getUsers';

export const useUsersList = () => {
  const [values, setValues] = useState<UsersQueryParams>({} as UsersQueryParams);
  const [users, setUsers] = useState<UserFullDto[]>([]);
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

  const fetchUsers = async () => {
    const configParams = {
      Gender: params.get('Gender'),
      NameQuery: params.get('NameQuery'),
      Page: params.get('Page'),
    };

    try {
      const res = await getUsers({ params: configParams });
      setUsers(res.data.items);
      setValues({ ...configParams });
    } catch (error) {
      if (values.NameQuery) params.set('NameQuery', values.NameQuery);
      if (values.Page) params.set('Page', values.Page);
      setParams(params);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [params]);

  return {
    users,
    params,
    setParamsByName,
    nextPage,
    previousPage,
    fetchUsers,
  };
};
