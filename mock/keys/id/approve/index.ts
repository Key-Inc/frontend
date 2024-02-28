import type { RestRequestConfig } from 'mock-config-server';

export const putApproveKeyRequest: RestRequestConfig = {
  path: '/request/:id/approve',
  method: 'put',
  routes: [
    {
      data: { success: true },
      entities: { params: { id: '3fa85f64-5717-4562-b3fc-2c963f66afa6' } },
    },
    {
      data: { success: true },
      entities: { params: { id: { checkMode: 'exists' } } },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(400);
          return data;
        },
      },
    },
  ],
};
