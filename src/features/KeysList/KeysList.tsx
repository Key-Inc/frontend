import { KeyCard } from './components/KeyCard/KeyCard';
import { useKeysList } from './hooks/useKeysList';

export const KeysList = () => {
  const { keys, setKeyStatus } = useKeysList();
  return (
    <div className='flex gap-5 py-4 flex-wrap'>
      {keys.map((key, index) => (
        <KeyCard classromKey={key} key={index} />
      ))}
    </div>
  );
};
