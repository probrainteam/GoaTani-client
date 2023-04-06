import { IconType } from '@/components/icon/icon-type';
import { MessageIcon } from '@/components/icon/message-icon';
import { ShareIcon } from '@/components/icon/share-icon';
import { VerticalDotsIcon } from '@/components/icon/vertical-dots-icon';

// add new icons here
const iconMap = {
  'message': MessageIcon,
  'share': ShareIcon,
  'vertical-dots': VerticalDotsIcon,
};

export type IconName = keyof typeof iconMap;

interface IconProps extends IconType {
  name: IconName;
}

export const Icon = ({ name, size = 20 }: IconProps) => {
  const IconComponent = iconMap[name];
  return <IconComponent size={size} />;
};
