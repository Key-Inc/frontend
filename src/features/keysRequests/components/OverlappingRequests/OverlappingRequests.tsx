import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Loader,
} from '@/components/ui';
import { RequestCard } from '../RequestCard';
import { useOverlappingRequests } from './OverlappingRequests.hooks';

interface OverlappingRequestsProps {
  isOpen: boolean;
  id: string;
  toggle: () => void;
}

export const OverlappingRequests = ({ isOpen, id, toggle }: OverlappingRequestsProps) => {
  const { requestsList, handleApprove, handleReject } = useOverlappingRequests(
    isOpen,
    toggle,
    id,
  );

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className='max-w-5xl max-h-screen overflow-auto'>
        <DialogHeader>
          <DialogTitle className='text-xl'>Есть пересекающиеся заявки:</DialogTitle>
        </DialogHeader>
        {requestsList.length ? (
          <ul className='flex gap-5 flex-wrap justify-evenly w-full'>
            {requestsList.map((request) => (
              <li key={request.id}>
                <RequestCard
                  request={request}
                  handleReject={() => handleReject(request.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
        <Button className='flex flex-col h-fit' onClick={handleApprove}>
          <span className='text-lg'>Всё равно принять</span>
          <span>(Пересекающиеся заявки отклонятся)</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
