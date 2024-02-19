interface BaseResponse {
  status: string;
  message: string;
}

interface UserDto {
  id: string;
  fullName: string;
  birthDate?: string;
  gender: string;
  phoneNumber?: string;
  email: string;
  userRole: string;
}

interface PageInfoDto {
  size: number;
  count: number;
  current: number;
}

interface RegistrationRequestPagedListDto {
  users: UserDto[];
  pagination: PageInfoDto;
}
interface UserLiteDto {
  fullName: string;
  userRole: 'Student' | 'Teacher' | 'Dean' | 'Admin';
}

interface KeyFullDto {
  id: string;
  classroomId: string;
  keyStatus: 'InDeanOffice' | 'InPossession';
  user?: UserLiteDto;
}

interface SearchUserDto {
  id: string;
  fullname: string;
  userRole: string;
}
