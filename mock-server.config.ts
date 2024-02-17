import { MockServerConfig } from 'mock-config-server';
import { postAuthLogin } from './mock';

const mockServerConfig: MockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [postAuthLogin],
  },
  interceptors: {
    request: ({ setDelay }) => setDelay(1000),
  },
};

export default mockServerConfig;
