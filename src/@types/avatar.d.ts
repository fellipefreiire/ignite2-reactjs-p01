import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
