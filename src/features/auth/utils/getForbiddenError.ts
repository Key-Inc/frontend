import { ForbiddenCause } from '../types/forbidden';

export const getForbiddenError = (cause: ForbiddenCause) => {
  switch (cause) {
    case 'Rejected':
      return 'Ваша заявка была отклонена 😓';
    case 'UnderConsideration':
      return 'Ваша заявка ещё обрабатывается 🧐';
    case 'Role':
      return 'У вас не достаточно прав для данного ресурса. Пожалуйста воспользуйтесь нашим мобильным приложеним!';
  }
};
