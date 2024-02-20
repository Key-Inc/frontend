import type { RestRequestConfig } from 'mock-config-server';

export const getKeysRequests: RestRequestConfig = {
  path: '/request',
  method: 'get',
  routes: [
    {
      data: {
        requests: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            status: 'UnderConsideration',
            startDate: '2024-02-20T10:38:02.451Z',
            endDate: '2024-02-20T10:38:02.451Z',
            isRecurring: true,
            classroom: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              number: 202,
              building: 2,
            },
            user: {
              fullName: 'string',
              userRole: 'Student',
            },
          },
          {
            id: '3fa85f64-5717-4562-b3fc-2c723f66afa6',
            status: 'Accepted',
            startDate: '2024-02-20T10:38:02.451Z',
            endDate: '2024-02-20T10:38:02.451Z',
            isRecurring: true,
            classroom: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              number: 202,
              building: 2,
            },
            user: {
              fullName: 'string',
              userRole: 'Teacher',
            },
          },
          {
            id: '3fa85f64-5741-4562-b3fc-2c963f66afa6',
            status: 'Rejected',
            startDate: '2024-02-20T10:38:02.451Z',
            endDate: '2024-02-20T10:38:02.451Z',
            isRecurring: true,
            classroom: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              number: 202,
              building: 2,
            },
            user: {
              fullName: 'string',
              userRole: 'Student',
            },
          },
        ],
        pagination: {
          size: 5,
          count: 3,
          current: 1,
        },
      },
      // entities: { params: { page: 1 } },
    },
    // {
    //   data: {
    //     users: [
    //       {
    //         id: '536b0168-f4ee-4fbf-9cc7-d92c89c6e227',
    //         fullName: 'Mcmahon',
    //         birthDate: '2024-02-17T05:10:47.642Z',
    //         gender: 'male',
    //         phoneNumber: '+7 (861) 409-3221',
    //         email: 'willisbaker@canopoly.com',
    //         userRole: 'neAdmin',
    //       },
    //       {
    //         id: '306b9817-32fe-48de-ac92-f88981fc1701',
    //         fullName: 'Evans',
    //         birthDate: '2024-02-17T05:10:47.642Z',
    //         gender: 'male',
    //         phoneNumber: '+7 (852) 557-3156',
    //         email: 'meyersbattle@centrexin.com',
    //         userRole: 'neAdmin',
    //       },
    //       {
    //         id: '68d11d21-f9cb-4bfa-b2c9-2b6c256a3ae6',
    //         fullName: 'Jimenez',
    //         birthDate: '2024-02-17T05:10:47.642Z',
    //         gender: 'male',
    //         phoneNumber: '+7 (824) 407-3240',
    //         email: 'burtonfox@visualix.com',
    //         userRole: 'neAdmin',
    //       },
    //       {
    //         id: '245a0278-ec6a-4af8-90ae-bc0a62d42f4f',
    //         fullName: 'Crosby',
    //         birthDate: '2024-02-17T05:10:47.642Z',
    //         gender: 'male',
    //         phoneNumber: '+7 (826) 448-2012',
    //         email: 'linahodge@medicroix.com',
    //         userRole: 'neAdmin',
    //       },
    //       {
    //         id: '9382e216-6bff-4bca-be6e-a698f6baebeb',
    //         fullName: 'York',
    //         birthDate: '2024-02-17T05:10:47.642Z',
    //         gender: 'female',
    //         phoneNumber: '+7 (840) 503-2408',
    //         email: 'noelhutchinson@biospan.com',
    //         userRole: 'neAdmin',
    //       },
    //     ],
    //     pagination: {
    //       size: 5,
    //       count: 5,
    //       current: 1,
    //     },
    //   },
    //   entities: { params: { page: 2 } },
    // },
  ],
};
