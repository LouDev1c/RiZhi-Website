# 日织官网 · RiZhi Website

日织的官方产品网站，用于介绍软件、展示核心能力，并为 Windows 用户提供安装包下载入口。

[![Windows](https://img.shields.io/badge/平台-Windows%2010%20%7C%2011-0078D4?style=flat-square&logo=windows11&logoColor=white)](https://github.com/LouDev1c/RiZhi-Windows/releases)
[![部署方式](https://img.shields.io/badge/托管-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![静态站点](https://img.shields.io/badge/技术-HTML%20%2B%20CSS%20%2B%20JavaScript-264DE4?style=flat-square)](#技术说明)

## 相关项目

| 项目 | 地址 | 用途 |
| --- | --- | --- |
| 日织 Windows 客户端 | [LouDev1c/RiZhi-Windows](https://github.com/LouDev1c/RiZhi-Windows) | 软件源代码与 Windows 构建配置 |
| Windows 版本发布 | [Releases](https://github.com/LouDev1c/RiZhi-Windows/releases) | 安装包与版本更新说明 |
| 本仓库 | RiZhi Website | 产品介绍与软件下载入口 |

## 网站内容

- 日织的产品介绍、核心功能与本地优先的数据说明；
- Windows 安装步骤与当前版本信息；
- 指向官方 GitHub Release 安装包的直接下载链接；
- 适配桌面与移动设备的纯静态页面。

## 技术说明

本项目不依赖框架、数据库或构建工具。网站由浏览器直接加载以下文件：

```text
index.html               页面结构与内容
styles.css               主视觉与响应式样式
typography-fixes.css     标题与局部排版优化
script.js                下载链接与页面交互
site-config.js           当前版本和安装包链接
rizhi-icon.svg           日织应用图标
```

## 发布新版本

每次发布新的 Windows 客户端版本时，按以下顺序更新：

1. 在 [RiZhi-Windows Releases](https://github.com/LouDev1c/RiZhi-Windows/releases) 创建并发布新版本。
2. 在 Release 的 **Assets** 中复制 Windows `.exe` 安装包的直接下载链接。
3. 修改本仓库的 `site-config.js`：

```js
window.RIZHI_SITE_CONFIG = {
  downloadUrl: 'https://github.com/LouDev1c/RiZhi-Windows/releases/download/v1.0.0/rizhi-setup-1.0.0.exe',
  version: '1.0.0',
  publishedAt: '2026-10-20'
};
```

4. 提交并推送到生产分支。Cloudflare Pages 完成部署后，用无痕窗口打开官网并测试下载。

> `downloadUrl` 必须是 `.exe` 文件的直接链接，而不是 Release 列表页面链接。

## 本地预览

直接双击 `index.html` 即可查看页面。若需要更接近线上环境的预览，可在本目录启动任意静态 HTTP 服务。

## Cloudflare Pages 部署

将本仓库连接到 Cloudflare Pages 后，使用以下设置：

| 字段 | 值 |
| --- | --- |
| Framework preset | `None` |
| Production branch | `master` |
| Build command | 留空 |
| Build output directory | `.` |
| Root directory | 留空（本仓库根目录即网站根目录） |

Cloudflare 会在生产分支每次提交后自动部署。请确保 GitHub 中的 Cloudflare Workers / Pages 应用仍拥有本仓库的访问权限。

## 维护原则

- 官网只保存展示内容和下载链接，不保存安装包；
- 安装包的唯一官方来源是 [RiZhi-Windows Releases](https://github.com/LouDev1c/RiZhi-Windows/releases)；
- 不要在仓库中提交 API 密钥、账户令牌或其他敏感信息；
- 修改下载链接后，始终实际下载并检查安装包是否正确。
