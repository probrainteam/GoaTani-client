import html2canvas from 'html2canvas';
import { useRef } from 'react';

function useImageDownload() {
  const captureArea = useRef<HTMLDivElement>(null);

  /* 다운로드 버튼 함수 */
  const onImageDownload = () => {
    if (captureArea.current) {
      html2canvas(captureArea.current).then((canvas) => {
        const element = document.createElement('a');
        element.href = canvas.toDataURL('image/png');
        element.download = '2023_Mandalart.png';
        element.click();
      });
    }
  };

  const getImageBlob = () => {
    if (captureArea.current) {
      html2canvas(captureArea.current).then((canvas) => {
        canvas.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          console.log('url: ', url);
          return url;
        });
      });
    }
  };

  return {
    captureArea,
    onImageDownload,
    getImageBlob,
  };
}

export default useImageDownload;
