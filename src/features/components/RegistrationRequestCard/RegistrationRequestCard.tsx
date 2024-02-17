interface RegistrationRequestCardProps {
  user: UserDto;
}

export const RegistrationRequestCard = ({
  user,
}: RegistrationRequestCardProps) => {
  <span>{user.fullName}</span>;
};
