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
  userRole: Role;
}

type RequestStatus = 'UnderConsideration' | 'Accepted' | 'Rejected';

type Sorting = 'CreateDesc' | 'CreateAsc' | 'StartDateAsc' | 'StartDateDesc';

type Role = 'Student' | 'Teacher' | 'Dean' | 'Admin';

interface ClassroomDto {
  id: string;
  number: number;
  building: number;
}

interface UserLiteDto {
  fullName: string;
  userRole: Role;
}

interface KeyRequestFullDto {
  id: string;
  status: RequestStatus;
  startDate: string;
  endDate: string;
  isRecurring: boolean;
  classroom: ClassroomDto;
  user: UserLiteDto;
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
  userRole: Role;
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

interface KeyRequestPagedListDto {
  requests: KeyRequestFullDto[];
  pagination: PageInfoDto;
}
