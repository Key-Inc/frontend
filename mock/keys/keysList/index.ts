import type { RestRequestConfig } from 'mock-config-server';

export const getKeys: RestRequestConfig = {
  path: '/key',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: '8797790f-ddfc-47e1-a667-a3eac6b536c6',
          userId: '67a57d46-b374-4ec1-aecf-c9d6e73f0d5c',
          classroomId: '219',
          keyStatus: 'InPossession',
        },
        {
          id: '19c963ef-903f-4d66-9a36-492a85038f85',
          userId: 'fd56536f-ef3c-4019-b7b0-37f58d6f9b17',
          classroomId: '232',
          keyStatus: 'InPossession',
        },
        {
          id: '8589f8e2-fd78-4984-9cb0-e5f9c80c2569',
          userId: 'da5ac748-f04a-4acd-8b1d-efb301620808',
          classroomId: '302',
          keyStatus: 'InPossession',
        },
        {
          id: '98a3a159-d675-4243-bf3c-731934796e03',
          userId: '319df000-ef66-4aa1-89df-be1a0f2bf4ba',
          classroomId: '408',
          keyStatus: 'InPossession',
        },
        {
          id: '3c64c907-8601-4e5e-a142-c99fc95a6982',
          userId: '63456c69-d4c8-4db4-8599-9f9b812ef8c4',
          classroomId: '101',
          keyStatus: 'InPossession',
        },
      ],
    },
  ],
};
