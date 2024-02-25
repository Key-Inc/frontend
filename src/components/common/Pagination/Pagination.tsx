import { Button } from '@/components/ui';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface PaginationProps {
  page: string;
  nextPage: () => void;
  previousPage: () => void;
  className?: string;
}

export const Pagination = ({ nextPage, page, previousPage, className }: PaginationProps) => (
  <div className={`${className} gap-3 flex pt-3 items-center`}>
    <Button variant='outline' size='sm' disabled={false} className='border-none' onClick={previousPage}>
      <ChevronLeftIcon className='h-6 w-6 stroke-2 font-normal' />
    </Button>
    <span>{page}</span>
    <Button variant='outline' size='sm' disabled={false} className='border-none' onClick={nextPage}>
      <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
    </Button>
  </div>
);
