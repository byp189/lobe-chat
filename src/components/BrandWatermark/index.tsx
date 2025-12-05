'use client';

import { memo } from 'react';
import type { FlexboxProps } from 'react-layout-kit'; // 保留类型定义

// ⚠️ 注意：所有与样式、链接、LobeHub 品牌相关的导入都已被删除。
// 如果您想恢复功能，需要重新添加这些导入。

/**
 * @description 品牌水印组件。
 * 作用是显示“Powered by”信息，此处被修改为返回 null，以禁用水印。
 */
// 💡 将组件参数重命名为以下划线开头（如 _style, _rest），可以避免 ESLint 的未使用变量错误。
// 但是，最干净的做法是根本不解构它们。
const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(() => {
  
  return null; // 阻止组件渲染任何内容
});

export default BrandWatermark;