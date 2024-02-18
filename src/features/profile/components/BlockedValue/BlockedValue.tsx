import { BlockedValueProps } from './BlockedValue.types';

export const BlockedValue = ({ value, label }: BlockedValueProps) => (
  <div>
    <span className='text-sm font-medium'>{label}</span>
    <p className='text-xl'>{value}</p>
  </div>
);
