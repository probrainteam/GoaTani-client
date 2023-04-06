import { IconType } from '@/components/icon/icon-type';

export function VerticalDotsIcon({ size = 20 }: IconType) {
  return (
    <svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_13_199)'>
        <path
          d='M7.99999 3.99998C8.94676 3.99998 9.71428 3.23247 9.71428 2.2857C9.71428 1.33892 8.94676 0.571411 7.99999 0.571411C7.05322 0.571411 6.28571 1.33892 6.28571 2.2857C6.28571 3.23247 7.05322 3.99998 7.99999 3.99998Z'
          stroke='currentColor'
          strokeWidth='1.42857'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.99999 9.71428C8.94676 9.71428 9.71428 8.94676 9.71428 7.99999C9.71428 7.05322 8.94676 6.28571 7.99999 6.28571C7.05322 6.28571 6.28571 7.05322 6.28571 7.99999C6.28571 8.94676 7.05322 9.71428 7.99999 9.71428Z'
          stroke='currentColor'
          strokeWidth='1.42857'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.99999 15.4286C8.94676 15.4286 9.71428 14.6611 9.71428 13.7143C9.71428 12.7675 8.94676 12 7.99999 12C7.05322 12 6.28571 12.7675 6.28571 13.7143C6.28571 14.6611 7.05322 15.4286 7.99999 15.4286Z'
          stroke='currentColor'
          strokeWidth='1.42857'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_13_199'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
