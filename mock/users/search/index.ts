import type { RestRequestConfig } from 'mock-config-server';

export const getUsers: RestRequestConfig = {
  path: '/user',
  method: 'get',
  routes: [
    {
      entities: {
        query: { fullname: 'Danill' },
      },
      data: [
        {
          country: 'Danill Iraq',
          region: 'Student',
        },
        {
          country: 'Danill Barnaul',
          region: 'Student',
        },
      ],
    },
    {
      entities: {
        query: { fullname: 'Yura' },
      },
      data: [
        {
          fullname: 'Yura Angarsk',
          id: 'asd123',
          userRole: 'Student',
        },
        {
          fullname: '21Yura Angarsk2',
          id: '1123123123',
          userRole: 'Student',
        },
      ],
    },
  ],
};
