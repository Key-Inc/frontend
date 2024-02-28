interface BlockedValueProps {
  label: string;
  value: string;
}

export const BlockedValue = ({ value, label }: BlockedValueProps) => (
  <div>
    <span className='text-sm font-medium'>{label}</span>
    <p className='text-xl'>{value}</p>
  </div>
);
