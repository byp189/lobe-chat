import { BrandLoading } from '@lobehub/ui/brand';
import { Center } from 'react-layout-kit';

import { isCustomBranding } from '@/const/version';

import CircleLoading from '../CircleLoading';

// 定义一个新的 React 组件来渲染品牌文本
const ABEI_AI_Text = () => {
  // 1. 使用 <span> 元素包裹文本
  return (
    <span 
      style={{ 
        // 2. 增大字体大小，例如从 1.5em 到 2.5em。您可以尝试不同的值。
        fontSize: '3em', 
        fontWeight: 'bold', // 保持粗体效果
      }}
    >
      ABEI AI Welcome You
    </span>
  );
};

export default () => {
  if (isCustomBranding) return <CircleLoading />;

  return (
    <Center height={'100%'} width={'100%'}>
      {/* 保持 BrandLoading 的使用不变 */}
      <BrandLoading size={40} style={{ opacity: 0.6 }} text={ABEI_AI_Text} />
    </Center>
  );
};