import axios from 'axios';

export interface getApllicationsConsiderationsParams {
  gender?: string;
  fullname?: string;
  minAge?: string;
  maxAge?: string;
  sorting?: string;
  page?: string;
}

export const getApllicationsConsiderations = async ({
  gender,
  fullname,
  maxAge,
  minAge,
  page,
  sorting,
}: getApllicationsConsiderationsParams) => {
  try {
    const res = await axios.get<RegistrationRequestPagedListDto>(
      `http://localhost:31299/api/account/consideration?${
        !sorting ? '' : `&sorting=${sorting}`
      }${!minAge ? '' : `&minAge=${minAge}`}${
        !maxAge ? '' : `&maxAge=${maxAge}`
      }${!minAge ? '' : `&minAge=${minAge}`}${
        !gender ? '' : `&gender=${minAge}`
      }${!fullname ? '' : `&fullname=${fullname}`}&page=${page}&size=${30}`,
      {},
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
