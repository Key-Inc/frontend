export const ROOT = 'http://localhost:31299/api';
export const ACCOUNT = `${ROOT}/account`;
export const CONSIDERATION = `${ACCOUNT}/consideration`;
export const LOGIN = `${ACCOUNT}/login`;
export const PROFILE = `${ACCOUNT}/profile`;
export const REQUEST = `${ROOT}/request`;
export const KEY_APPROVE = (id: string) => `${REQUEST}/${id}/approve`;
export const KEY_REJECT = (id: string) => `${REQUEST}/${id}/reject`;
export const OVERLAPPING = (id: string) => `${REQUEST}/${id}/overlapping`;
