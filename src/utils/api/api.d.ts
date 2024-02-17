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
