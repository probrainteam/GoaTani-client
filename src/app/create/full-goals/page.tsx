'use client';

import MandalartFull from '@/components/mandalart/mandalart-full';
import { DUMMY_MANDALART_TOTAL } from '@/constants/mandalart';

function FullGoalsPage() {
  return (
    <div>
      <MandalartFull contents={DUMMY_MANDALART_TOTAL} theme='primary' />
    </div>
  );
}

export default FullGoalsPage;
