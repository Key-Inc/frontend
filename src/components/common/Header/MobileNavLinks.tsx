import { HEADER_LINKS } from '@/shared/constants/navigation/HEADER_LINKS';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { useHeader } from './hooks/useHeader';

export const MobileNavLinks = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const { handleLogout } = useHeader();
  return (
    <div className='md:hidden'>
      <Sheet open={isSheetOpen}>
        <SheetTrigger onClick={() => setSheetOpen(true)}>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent onInteractOutside={() => setSheetOpen(false)}>
          <SheetHeader className='h-full'>
            <div className='flex justify-end'>
              <X className='h-4 w-4 cursor-pointer' onClick={() => setSheetOpen(false)} />
            </div>
            <SheetTitle>Список страниц</SheetTitle>
            <SheetDescription className='h-full flex flex-col'>
              <nav className='items-center text-sm flex-auto justify-between flex-col space-y-4 my-6 '>
                {HEADER_LINKS!.map((link, index) => (
                  <div>
                    <Link
                      to={link.href}
                      className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
                      key={index}
                      onClick={() => setSheetOpen(false)}
                    >
                      <span>{link.text}</span>
                    </Link>
                  </div>
                ))}
              </nav>
              <div className='flex gap-2 items-center justify-center'>
                <Button onClick={() => setSheetOpen(false)}>
                  <Link to='/profile'>
                    <span>Профиль</span>
                  </Link>
                </Button>
                <Button onClick={handleLogout}>
                  <span>Выйти</span>
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
