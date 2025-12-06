import ABEI from '@/components/Branding/ABEI';
import { memo } from 'react';
// 导入 React，以便使用 CSSProperties 类型
import type * as React from 'react'; 

interface ProductLogoProps {
  height?: number;
  width?: number;
  size?: number;
  
  // --- 关键修改：添加缺失的属性 ---
  // 1. 修复 'type' 缺失错误
  type?: string; 

  // 2. 修复 'extra' 缺失错误
  extra?: string; 
  
  // 3. 修复 'style' 缺失错误，使用 React.CSSProperties
  style?: React.CSSProperties; 
  // --------------------------------

}

export const ProductLogo = memo<ProductLogoProps>((props) => {
  // 注意：虽然 ABEI.tsx 目前没有使用 type, extra, style，
  // 但 ProductLogo 组件作为容器，需要接受这些 props 并传递下去（通过 {...props}）。
  // 即使 ABEI.tsx 不使用它们，TypeScript 也只关心 props 是否允许被传递。
  return <ABEI {...props} />;
});