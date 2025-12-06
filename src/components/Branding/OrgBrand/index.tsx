import { memo } from 'react';

import { ORG_NAME } from '@/const/branding';
import { isCustomORG } from '@/const/version';

export const OrgBrand = memo(() => {
  return <span>{ORG_NAME || 'ABEI AI'}</span>;
});
