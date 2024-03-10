import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui';
export interface ForbiddenDialogProps {
  cause: string;
  isOpen: boolean;
  toggle: () => void;
}

export const ForbiddenDialog = ({ cause, isOpen, toggle }: ForbiddenDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className='max-w-5xl max-h-screen overflow-auto flex flex-col items-center'>
        <DialogHeader>
          <DialogTitle className='text-xl text-error'>Произошла ошибка</DialogTitle>
        </DialogHeader>
        <p className='text-lg'>{cause}</p>
      </DialogContent>
    </Dialog>
  );
};
