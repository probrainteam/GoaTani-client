'use client';

import MandalartFull from '@/components/mandalart/mandalart-full';
import { DUMMY_MANDALART_TOTAL } from '@/constants/mandalart';
import useImageDownload from '@/hooks/use-image-download';

function FullGoalsPage() {
  /* 캡처 영역 변수 선언 */

  const { captureArea, onImageDownload } = useImageDownload();

  return (
    <div>
      <div ref={captureArea}>
        <MandalartFull contents={DUMMY_MANDALART_TOTAL} theme='primary' />
      </div>
      <button onClick={onImageDownload}>DOWNLOAD</button>
    </div>
  );
}

export default FullGoalsPage;
