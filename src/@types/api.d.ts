interface BaseResponse {
  status: string;
  message: string;
}

interface UserDto {
  id: string;
  fullName: string;
  birthDate?: string;
  gender: Gender;
  phoneNumber?: string;
  email: string;
}

type RegistrationStatus = 'UnderConsideration' | 'Accepted' | 'Rejected';

type Sorting = 'CreateDesc' | 'CreateAsc' | 'StartDateAsc' | 'StartDateDesc';

type Role = 'Student' | 'Teacher' | 'Dean' | 'Admin';

type Gender = 'Male' | 'Female';

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
  status: RegistrationStatus;
  startDate: string;
  endDate: string;
  classroom: ClassroomDto;
  user: UserLiteDto;
  endDateOfRecurrence: string;
}

interface PageInfoDto {
  size: number;
  count: number;
  current: number;
}

interface RegistrationRequestPagedListDto {
  items: UserDto[];
  pagination: PageInfoDto;
}
interface UserLiteDto {
  fullName: string;
  userRole: Role;
}
interface ClassRoomDto {
  id: string;
  number: string;
  building: string;
}

interface KeyFullDto {
  id: string;
  classroom: ClassRoomDto;
  keyStatus: 'InDeanOffice' | 'InPossession';
  user?: UserLiteDto;
}

interface UserFullDto {
  id: string;
  fullName: string;
  userRole: Role;
  birthDate: string; //Тут исправить формат, если нужно это будет где-то
  email: string;
  phoneNumber?: string;
  gender: Gender;
}

interface PageInfoDto {
  size: number;
  current: number;
  count: number;
}

interface UserFullDtoPagedListDto {
  items: UserFullDto[];
  pagination: PageInfoDto;
}

interface KeyRequestPagedListDto {
  items: KeyRequestFullDto[];
  pagination: PageInfoDto;
}

interface LoginCredintialsDto {
  email: string;
  password: string;
}

interface UserEditDto {
  birthDate?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
}
