'use client';

import Button from '@/components/button';
import MandalartFull from '@/components/mandalart/mandalart-full';
import { DUMMY_MANDALART_TOTAL } from '@/constants/mandalart';
import useImageDownload from '@/hooks/use-image-download';

function FullGoalsPage() {
  const { captureArea, onImageDownload } = useImageDownload();

  return (
    <div>
      <div ref={captureArea}>
        <MandalartFull contents={DUMMY_MANDALART_TOTAL} theme='primary' />
      </div>
      <Button onClick={onImageDownload}>DOWNLOAD</Button>
    </div>
  );
}

export default FullGoalsPage;
