import { ActionIcon, ActionIconProps } from '@lobehub/ui';
import { FlaskConical } from 'lucide-react'; // 移除 Github 导入
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

// 移除 GITHUB 导入

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

const ICON_SIZE: ActionIconProps['size'] = {
  blockSize: 36,
  size: 20,
  strokeWidth: 1.5,
};

const BottomActions = memo(() => {
  const { t } = useTranslation('common');

  // 保持 hideGitHub 的获取，但我们不再使用它
  const { hideGitHub } = useServerConfigStore(featureFlagsSelectors); 

  return (
    <Flexbox gap={8}>
      {/* 移除 GitHub 图标及其链接的代码块 */}
      <Link aria-label={t('labs')} to={'/labs'}>
        <ActionIcon
          icon={FlaskConical}
          size={ICON_SIZE}
          title={t('labs')}
          tooltipProps={{ placement: 'right' }}
        />
      </Link>
    </Flexbox>
  );
});

export default BottomActions;