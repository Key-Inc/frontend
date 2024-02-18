import { Link } from 'react-router-dom';
import { Logo } from '..';

export const Header = () => (
  <header className='flex px-10 py-4 border-b-2'>
    <div className='flex font-bold items-center mr-6'>
      <Logo />
      Key Inc.
    </div>
    <nav className='flex items-center gap-6 text-sm'>
      <Link
        to='/registrationrequests'
        className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
      >
        Заявки на регистрацию
      </Link>
      <Link
        to='/registrationrequests'
        className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
      >
        Ключи
      </Link>
      <Link
        to='/registrationrequests'
        className='transition-colors hover:text-foreground/80 text-foreground/60 active:text-current'
      >
        Заявки на регистрацию
      </Link>
    </nav>
  </header>
);
