'use client';

import { LobeHub } from '@lobehub/ui/brand';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import { ORG_NAME } from '@/const/branding';
import { UTM_SOURCE } from '@/const/url';
import { isCustomORG } from '@/const/version';

const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    line-height: 1;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

// 组件修改：直接返回 null，阻止渲染任何内容
const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  // 警告：请确保您理解此操作会彻底移除 LobeHub 品牌水印。
  // ⚠️ 如果要恢复水印，请还原此文件。
  return null; 
});

export default BrandWatermark;
