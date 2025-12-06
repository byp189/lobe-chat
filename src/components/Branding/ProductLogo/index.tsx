import ABEI from '@/components/Branding/ABEI';
import { memo } from 'react';
import type * as React from 'react'; 

interface ProductLogoProps {
  height?: number;
  width?: number;
  size?: number;
  
  // 上次添加的属性
  type?: string; 
  extra?: string; 
  style?: React.CSSProperties; 
  
  // --- 关键修改：添加 'className' 属性 ---
  // 用于接收 Tailwind CSS 或其他 CSS 类名
  className?: string; 
  // ------------------------------------
}

export const ProductLogo = memo<ProductLogoProps>((props) => {
  return <ABEI {...props} />;
});