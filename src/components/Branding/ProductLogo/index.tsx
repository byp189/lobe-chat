import ABEI from '@/components/Branding/ABEI';
import { memo } from 'react';

interface ProductLogoProps {
  height?: number;
  width?: number;
  size?: number;
}

export const ProductLogo = memo<ProductLogoProps>((props) => {
  return <ABEI {...props} />;
});
