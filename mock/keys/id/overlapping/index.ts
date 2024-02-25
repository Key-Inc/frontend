import type { RestRequestConfig } from 'mock-config-server';

export const putRejectKeyRequest: RestRequestConfig = {
  path: '/request/:id/overlapping',
  method: 'get',
  routes: [
    {
      data: { success: true },
      entities: { params: { id: { checkMode: 'exists' } } },
    },
  ],
};
