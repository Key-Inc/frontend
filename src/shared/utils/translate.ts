export const translateRequestStatus = (status: RequestStatus) => {
  switch (status) {
    case 'Accepted':
      return 'Принята';
    case 'Rejected':
      return 'Отклонена';
    case 'UnderConsideration':
      return 'На рассмотрении';
    default:
      return '';
  }
};

export const translateUserRole = (role: Role) => {
  switch (role) {
    case 'Admin':
      return 'Админ';
    case 'Dean':
      return 'Деканат';
    case 'Student':
      return 'Студент';
    case 'Teacher':
      return 'Преподаватель';
    default:
      return '';
  }
};

export const translateGender = (gender: Gender) => {
  switch (gender) {
    case 'Male':
      return 'Мужской';
    case 'Female':
      return 'Женский';
    default:
      return '';
  }
};
