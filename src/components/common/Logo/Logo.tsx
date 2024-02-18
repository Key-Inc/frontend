import logo from '@/assets/key_logo.svg';
import { cn } from '@/lib';
import React from 'react';

interface LogoProps extends React.ComponentPropsWithoutRef<'img'> {}

// interface AddressCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

// export const AddressCardSkeleton = React.forwardRef<HTMLDivElement, AddressCardSkeletonProps>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn('w-full', className)} {...props}>
//     </div>

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(({ className }) => (
  <img src={logo} alt='logo' className={cn('w-7', className)} />
));
