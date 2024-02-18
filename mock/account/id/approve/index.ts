import type { RestRequestConfig } from 'mock-config-server';

export const putApproveRegistration: RestRequestConfig = {
  path: '/account/:id/approve',
  method: 'put',
  routes: [
    {
      data: { success: true },
      entities: { params: { id: 1 } },
    },
  ],
};
