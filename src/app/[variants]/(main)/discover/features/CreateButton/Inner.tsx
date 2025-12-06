import { memo } from 'react';
import { useTranslation } from 'react-i18next';

// 移除了所有与指南内容渲染（如按钮、图标、图片等）相关的导入，
// 仅保留组件运行所必需的 memo 和 useTranslation。

const Inner = memo(() => {
  // 保留 useTranslation 以符合应用的结构
  const { t } = useTranslation('discover'); 

  // 返回一个空片段，导致此组件在页面上渲染为空白，从而隐藏整个指南模块
  return <></>; 
});

export default Inner;