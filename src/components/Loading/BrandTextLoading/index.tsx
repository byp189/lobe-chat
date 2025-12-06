import { BrandLoading } from '@lobehub/ui/brand';
import { Center } from 'react-layout-kit';

import { isCustomBranding } from '@/const/version';

import CircleLoading from '../CircleLoading';

// 定义一个新的 React 组件来渲染品牌文本
const ABEI_AI_Text = () => {
  return <>ABEI AI Welcome You</>;
};

export default () => {
  if (isCustomBranding) return <CircleLoading />;

  return (
    <Center height={'100%'} width={'100%'}>
      {/* 将 text 属性的值从字符串替换为我们定义的 ABEI_AI_Text 组件 */}
      <BrandLoading size={40} style={{ opacity: 0.6 }} text={ABEI_AI_Text} />
    </Center>
  );
};