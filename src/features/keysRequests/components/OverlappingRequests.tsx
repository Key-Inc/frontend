import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui';
import { RequestCard } from './RequestCard';

interface OverlappingRequestsProps {
  isOpen: boolean;
  requests: KeyRequestFullDto[];
  reject: (id: string) => void;
}

export const OverlappingRequests = ({ isOpen, requests, reject }: OverlappingRequestsProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Есть пересекающие заявки:</DialogTitle>
        </DialogHeader>
        <ul>
          {requests.map((request, index) => (
            <li key={index + 1}>
              <RequestCard keyRequest={request} reject={() => reject(request.id)} />
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
