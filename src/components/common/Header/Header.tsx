import { Link } from 'react-router-dom';
import { Logo } from '..';
import { HEADER_LINKS } from '@/shared/constants/navigation/HEADER_LINKS';
import { MobileNavLinks } from './MobileNavLinks';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { useHeader } from './hooks/useHeader';

export const Header = () => {
  const [isAuth, setIsAuth] = useState(true); //TODO: Когда будет чек стейта авторизации, убрать это
  const { handleLogout } = useHeader();
  return (
    <header className='flex md:px-10 py-4 border-b-2 px-4 justify-between md:justify-normal'>
      <div className='flex font-bold items-center mr-6'>
        <Link to='/' className='flex'>
          <Logo />
          Key Inc.
        </Link>
      </div>

      <div className='flex justify-between flex-auto'>
        <nav className='items-center gap-6 text-sm md:flex hidden'>
          {HEADER_LINKS.map((link, index) => (
            <Link
              to={link.href}
              className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
              key={index}
            >
              <span>{link.text}</span>
            </Link>
          ))}
        </nav>
        {isAuth && (
          <div className='gap-2 items-center md:flex hidden'>
            <Button>
              <Link to='/profile'>
                <span>
                  {/* {email} */}
                  тут еmail
                </span>
              </Link>
            </Button>
            <Button onClick={handleLogout}>
              <span>Выйти</span>
            </Button>
          </div>
        )}
      </div>

      <MobileNavLinks />
    </header>
  );
};
