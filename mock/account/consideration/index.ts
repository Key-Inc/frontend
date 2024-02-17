import type { RestRequestConfig } from 'mock-config-server';

export const getApllicationsConsiderations: RestRequestConfig = {
  path: '/account/consideration',
  method: 'get',
  routes: [
    {
      data: {
        users: [
          [
            {
              id: 'b8b3160a-2d51-4a94-ac67-e307a2341d6c',
              fullName: 'Kenwood',
              birthDate: '2024-02-17T05:10:47.642Z',
              gender: 'male',
              phoneNumber: '+7 (973) 523-2582',
              email: 'spearswyatt@kidstock.com',
              userRole: 'Admin',
            },
            {
              id: 'c0708d6a-2c8e-4d3e-97a2-6f574053bcb5',
              fullName: 'Thermal',
              birthDate: '2024-02-17T05:10:47.642Z',
              gender: 'male',
              phoneNumber: '+7 (917) 576-2227',
              email: 'vernamathews@jamnation.com',
              userRole: 'Admin',
            },
            {
              id: 'cb3abd5b-2b7b-4629-ba4e-7af3ebc0921b',
              fullName: 'Jenkinsville',
              birthDate: '2024-02-17T05:10:47.642Z',
              gender: 'female',
              phoneNumber: '+7 (978) 538-2647',
              email: 'cervantesmcgowan@dragbot.com',
              userRole: 'Admin',
            },
            {
              id: 'a3c1866f-0bbe-48e6-8264-cf9124976fba',
              fullName: 'Washington',
              birthDate: '2024-02-17T05:10:47.642Z',
              gender: 'male',
              phoneNumber: '+7 (888) 512-2964',
              email: 'donovanadams@neurocell.com',
              userRole: 'Admin',
            },
            {
              id: 'a2525574-8d9f-4576-bf75-3976a7ac637b',
              fullName: 'Cumberland',
              birthDate: '2024-02-17T05:10:47.642Z',
              gender: 'male',
              phoneNumber: '+7 (946) 430-2711',
              email: 'lydiawilliamson@buzzopia.com',
              userRole: 'Admin',
            },
          ],
        ],
        pagination: {
          size: 5,
          count: 5,
          current: 1,
        },
      },

      // entities: { params: { size: 5, count: 5, current: 1 } },
    },
  ],
};
