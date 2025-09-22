'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileAvatar() {
  return (
    <Link 
      href="https://www.awwesome.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block transition-opacity hover:opacity-80"
    >
      <Avatar className="h-8 w-8">
        <AvatarImage 
          src="/profile-avatar.jpg" 
          alt="Profile" 
        />
        <AvatarFallback className="text-xs font-medium">
          RQ
        </AvatarFallback>
      </Avatar>
    </Link>
  );
}
