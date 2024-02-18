import { RestRequestConfig } from 'mock-config-server';

export const getProfile: RestRequestConfig = {
  path: '/account/profile',
  method: 'get',
  routes: [
    {
      data: { message: 'Нужно авторизоваться' },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(401);
          return data;
        },
      },
    },
    {
      data: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        fullName: 'string',
        birthDate: '2024-02-18T05:33:16.322Z',
        gender: 'Male',
        phoneNumber: 'string',
        email: 'user@example.com',
        userRole: 'Student',
      },
      entities: {
        headers: {
          Authorization: {
            checkMode: 'exists',
          },
        },
      },
    },
  ],
};

export const putProfile: RestRequestConfig = {
  path: '/account/profile',
  method: 'put',
  routes: [
    {
      data: { message: 'Нужно авторизоваться' },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(401);
          return data;
        },
      },
    },
    {
      data: {},
      entities: {
        headers: {
          Authorization: {
            checkMode: 'exists',
          },
        },
      },
    },
  ],
};
