import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Loader } from '@/components/ui';
import { RequestCard } from '../RequestCard';
import { useOverlappingRequests } from './OverlappingRequests.hooks';

interface OverlappingRequestsProps {
  isOpen: boolean;
  id: string;
  reject: (id: string) => void;
  toggle: () => void;
}

export const OverlappingRequests = ({ isOpen, id, reject, toggle }: OverlappingRequestsProps) => {
  const { requestsList } = useOverlappingRequests(isOpen, id);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className='max-w-5xl max-h-screen overflow-auto'>
        <DialogHeader>
          <DialogTitle className='text-xl'>Есть пересекающие заявки:</DialogTitle>
        </DialogHeader>
        {requestsList.length ? (
          <ul className='flex gap-5 flex-wrap justify-evenly w-full'>
            {requestsList.map((request, index) => (
              <li key={index + 1}>
                <RequestCard keyRequest={request} reject={reject} />
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}

        <Button className='flex flex-col h-fit'>
          <span className='text-lg'>Всё равно принять</span>
          <span>(Пересекающиеся заявки отклонятся)</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
