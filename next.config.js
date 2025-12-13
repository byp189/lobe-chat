// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // LobeChat 项目的 Next.js 默认配置

  experimental: {
    // 根据 Vercel/Next.js 的最新警告修复
    // 强制 Next.js 和 Vercel 将 @napi-rs/canvas 视为外部依赖。
    // 使用新的配置项 'serverExternalPackages' 来解决 Vercel 运行时的内存崩溃问题。
    serverExternalPackages: ['@napi-rs/canvas'],
  },
};

module.exports = nextConfig;