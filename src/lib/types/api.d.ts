/* eslint-disable @typescript-eslint/no-unused-vars */
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

enum RequestStatus {
  UnderConsideration,
  Accepted,
  Rejected,
}

enum Sorting {
  CreateDesc,
  CreateAsc,
  StartDateAsc,
  StartDateDesc,
}

enum Role {
  Student,
  Teacher,
  Dean,
  Admin,
}

interface KeyRequestFullDto {
  status: RequestStatus;
  startDate: string;
  endDate: string;
  isRecurring: boolean;
  classroomId: string;
  userId: string;
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

interface KeyRequestPagedListDto {
  requests: KeyRequestFullDto[];
  pagination: PageInfoDto;
}
