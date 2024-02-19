import { ComboBoxItemType } from '@/components/ui';

export const convertUsersToComboboxItems = (
  users?: SearchUserDto[],
): ComboBoxItemType[] =>
  users?.map((user) => ({
    label: user.fullname,
    value: user.id,
  })) ?? [];
