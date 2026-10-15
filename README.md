# 日织官网

这是可直接部署到 GitHub Pages 或 Cloudflare Pages 的纯静态网站，无需安装依赖或构建。

## 发布前要做的两件事

1. 将安装包及自动更新所需文件上传到对象存储/CDN。
2. 编辑 `site-config.js`，填入 `downloadUrl`、`version` 和 `publishedAt`。

```js
window.RIZHI_SITE_CONFIG = {
  downloadUrl: 'https://downloads.example.com/rizhi/RiZhi-Setup-0.6.1.exe',
  version: '0.6.1',
  publishedAt: '2026-10-12'
};
```

## 本地预览

直接双击 `index.html` 即可预览；也可以使用任意静态 HTTP 服务。

## Cloudflare Pages

- Framework preset: `None`
- Build command: 留空
- Build output directory: `.`

将本目录作为独立 GitHub 仓库根目录推送即可。
