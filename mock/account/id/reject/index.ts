import type { RestRequestConfig } from 'mock-config-server';

export const putRejectRegistration: RestRequestConfig = {
  path: '/account/:id/reject',
  method: 'put',
  routes: [
    {
      data: { success: true },
      entities: { params: { id: 1 } },
    },
  ],
};
