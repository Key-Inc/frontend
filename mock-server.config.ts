import type { MockServerConfig } from 'mock-config-server';

import * as requests from './mock';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api',
  cors: {
    origin: 'http://localhost:31299',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['content-type', 'authorization'],
    credentials: true,
  },
  rest: {
    configs: Object.values(requests),
  },
};

export default mockServerConfig;
