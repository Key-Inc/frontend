import axios, { AxiosError } from 'axios';

// export interface getApllicationsConsiderationsParams {
//   gender?: string;
//   fullname?: string;
//   minAge?: string;
//   maxAge?: string;
//   sorting?: string;
//   page?: string;
// }

export const getApllicationsConsiderations = async () => {
  try {
    const res = await axios.get<RegistrationRequestPagedListDto>(
      'http://localhost:31299/api/account/consideration',
      {},
    );
    return res;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw e.response?.data.message || 'Произошла ошибка';
    }
    throw 'Произошла ошибка';
  }
};
