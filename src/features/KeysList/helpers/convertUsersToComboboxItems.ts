import { ComboBoxItemType } from '@/components/ui';

export const convertUsersToComboboxItems = (users?: UserFullDto[]): ComboBoxItemType[] =>
  users?.map((user) => ({
    label: user.fullName,
    value: user.id,
  })) ?? [];
