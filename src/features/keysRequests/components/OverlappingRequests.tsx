import { Button, Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui';
import { RequestCard } from './RequestCard';

interface OverlappingRequestsProps {
  isOpen: boolean;
  requests: KeyRequestFullDto[];
  reject: (id: string) => void;
  toggle: () => void;
}

export const OverlappingRequests = ({ isOpen, requests, reject, toggle }: OverlappingRequestsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className='max-w-5xl max-h-screen overflow-auto'>
        <DialogHeader>
          <DialogTitle>Есть пересекающие заявки:</DialogTitle>
        </DialogHeader>
        <ul className='flex gap-5 flex-wrap justify-center w-full'>
          {requests.map((request, index) => (
            <li key={index + 1}>
              <RequestCard keyRequest={request} reject={reject} />
            </li>
          ))}
        </ul>
        <Button className='flex flex-col h-fit'>
          <span className='text-lg'>Всё равно принять</span>
          <span>(Пересекающиеся заявки отклонятся)</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
