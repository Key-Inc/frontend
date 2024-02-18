import { MockServerConfig } from 'mock-config-server';
import { getProfile, postAuthLogin, putProfile } from './mock';

const mockServerConfig: MockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [postAuthLogin, getProfile, putProfile],
  },
  interceptors: {
    request: ({ setDelay }) => setDelay(1000),
  },
};

export default mockServerConfig;
