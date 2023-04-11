'use client';

import MandalartFull from '@/components/mandalart/mandalart-full';
import { DUMMY_MANDALART_TOTAL } from '@/constants/mandalart';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

function FullGoalsPage() {
  /* 캡처 영역 변수 선언 */
  const captureArea = useRef<HTMLDivElement>(null);

  /* 다운로드 버튼 함수 */
  const onCaptureButtonClick = () => {
    if (captureArea.current) {
      html2canvas(captureArea.current).then((canvas) => {
        const element = document.createElement('a');
        element.href = canvas.toDataURL('image/png');
        element.download = '2023_Mandalart.png';
        element.click();
      });
    }
  };

  return (
    <div>
      <div ref={captureArea}>
        <MandalartFull contents={DUMMY_MANDALART_TOTAL} theme='primary' />
      </div>
      <button onClick={onCaptureButtonClick} className='button bg-vivaMegenta text-white'>
        DOWNLOAD
      </button>
    </div>
  );
}

export default FullGoalsPage;
