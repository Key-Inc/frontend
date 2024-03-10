export const handleChangeRole = (
  value: string,
  setParams: (name: string, value?: string) => void,
) => {
  setParams('Role', value !== 'Any' ? value : undefined);
};

export const handleChangeStatus = (
  value: string,
  setParams: (name: string, value?: string) => void,
) => {
  setParams('Status', value !== 'Any' ? value : undefined);
};
