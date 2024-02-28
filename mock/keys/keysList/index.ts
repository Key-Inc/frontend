import type { RestRequestConfig } from 'mock-config-server';

export const getKeys: RestRequestConfig = {
  path: '/key',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: '8797790f-ddfc-47e1-a667-a3eac6b536c6',
          classroomId: '428',
          keyStatus: 'InPossession',
          user: { fullName: 'Alexey Bababa', userRole: 'Student' },
        },
        {
          id: '19c963ef-903f-4d66-9a36-492a85038f85',
          classroomId: '232',
          keyStatus: 'InPossession',
          user: { fullName: 'Nikita ChipiChapa', userRole: 'Student' },
        },
        {
          id: '8589f8e2-fd78-4984-9cb0-e5f9c80c2569',
          classroomId: '302',
          keyStatus: 'InPossession',
          user: { fullName: 'Yura Angarask', userRole: 'Student' },
        },
        {
          id: '98a3a159-d675-4243-bf3c-731934796e03',
          classroomId: '408',
          keyStatus: 'InPossession',
          user: { fullName: 'Daniil Iraq', userRole: 'Student' },
        },
        {
          id: '3c64c907-8601-4e5e-a142-c99fc95a6982',
          classroomId: '101',
          keyStatus: 'InPossession',
          user: { fullName: 'Ruslan Unity Enjoyer', userRole: 'Student' },
        },
        {
          id: '8796790f-ddfc-47e1-a667-a3eac6b536c1',
          classroomId: '228',
          keyStatus: 'InDeanOffice',
        },
        {
          id: '8796790f-ddfc-47e1-a667-a3eac6b526c3',
          classroomId: '412',
          keyStatus: 'InDeanOffice',
        },
        {
          id: '8797790f-ddfc-47e1-a667-a3eac6b536c6',
          classroomId: '238',
          keyStatus: 'InDeanOffice',
        },
      ],
    },
  ],
};
