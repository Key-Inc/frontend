import { MockServerConfig } from 'mock-config-server';

const mockServerConfig: MockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [],
  },
  interceptors: {
    request: ({ setDelay }) => setDelay(1000),
  },
};

export default mockServerConfig;
