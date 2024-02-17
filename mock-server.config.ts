import { MockServerConfig } from 'mock-config-server';
import { loginConfig } from './mock';

const mockServerConfig: MockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [loginConfig],
  },
  interceptors: {
    request: ({ setDelay }) => setDelay(1000),
  },
};

export default mockServerConfig;
