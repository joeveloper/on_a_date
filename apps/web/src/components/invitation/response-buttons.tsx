'use client';

import { Button } from '@/components/ui/button';
import { ResponseType } from '@/lib/types';

export function ResponseButtons({
  onRespond,
  disabled,
}: {
  onRespond: (response: ResponseType) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled={disabled} onClick={() => onRespond('YES')}>
        Yes ❤️
      </Button>
      <Button variant="outline" disabled={disabled} onClick={() => onRespond('MAYBE')}>
        Maybe 👀
      </Button>
      <Button variant="outline" disabled={disabled} onClick={() => onRespond('NO')}>
        No 😅
      </Button>
    </div>
  );
}
