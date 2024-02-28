import type { RestRequestConfig } from 'mock-config-server';

export const getUsers: RestRequestConfig = {
  path: '/user',
  method: 'get',
  routes: [
    {
      entities: {
        query: { fullname: 'Daniil' },
      },
      data: [
        {
          fullname: 'Daniil Iraq',
          id: '123asd1asda231asd2',
          userRole: 'Student',
        },
        {
          fullname: 'Danill Barnaul',
          id: '12312312',
          userRole: 'Student',
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
