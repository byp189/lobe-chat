import qs from 'query-string';
import urlJoin from 'url-join';

import { INBOX_SESSION_ID } from './session';

const isDev = process.env.NODE_ENV === 'development';

export const UTM_SOURCE = 'chat_preview';

// ------------------- 自定义品牌 -------------------------
export const OFFICIAL_URL = '';
export const OFFICIAL_SITE = '';
export const OFFICIAL_DOMAIN = '';

// OG 图（可以保留）
export const OG_URL = '/og/cover.png?v=1';

// ------------------- GitHub 相关（全部禁用） -------------------------
export const GITHUB = '';
export const GITHUB_ISSUES = '';
export const CHANGELOG = '';

// ------------------- 文档（全部禁用） -------------------------
export const DOCUMENTS = '';
export const USAGE_DOCUMENTS = '';
export const SELF_HOSTING_DOCUMENTS = '';
export const DATABASE_SELF_HOSTING_URL = '';

export const DOCUMENTS_REFER_URL = '';

// 插件开发文档
export const WIKI_PLUGIN_GUIDE = '';
export const MANUAL_UPGRADE_URL = '';

// Blog
export const BLOG = '';

// About / Feedback
export const ABOUT = '';
export const FEEDBACK = '';

// 隐私 / 条款
export const PRIVACY_URL = '';
export const TERMS_URL = '';

// 插件市场（如果你要禁用，改成空）
export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const MORE_MODEL_PROVIDER_REQUEST_URL = '';
export const MORE_FILE_PREVIEW_REQUEST_URL = '';

// Agents
export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');
export const AGENTS_OFFICIAL_URL = 'https://lobehub.com/agent';

// Chat 页面
export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  qs.stringifyUrl({
    query: mobile ? { session: id, showMobileWorkspace: mobile } : { session: id },
    url: '/chat',
  });

export const imageUrl = (filename: string) => `/images/${filename}`;

export const LOBE_URL_IMPORT_NAME = 'settings';

export const RELEASES_URL = '';

export const mailTo = (email: string) => '';

// 加密文档 / Providers
export const AES_GCM_URL = '';
export const BASE_PROVIDER_DOC_URL = '';

// sitemap
export const SITEMAP_BASE_URL = isDev ? '/sitemap.xml/' : 'sitemap';

// Changelog
export const CHANGELOG_URL = '';
