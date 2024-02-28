import type { RestRequestConfig } from 'mock-config-server';

export const putRejectKeyRequest: RestRequestConfig = {
  path: '/request/:id/reject',
  method: 'put',
  routes: [
    {
      data: { success: true },
      entities: { params: { id: '3fa85f64-5717-4562-b3fc-2c963f66afa6' } },
    },
  ],
};
