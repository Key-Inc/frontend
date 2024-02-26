import type { RestRequestConfig } from 'mock-config-server';

export const getOverlappingRequests: RestRequestConfig = {
  path: '/request/:id/overlapping',
  method: 'get',
  routes: [
    {
      data: [
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
      ],
      entities: { params: { id: { checkMode: 'exists' } } },
    },
  ],
};
