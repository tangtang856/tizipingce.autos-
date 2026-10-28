---
title: "Mac苹果电脑科学上网配置教程：Clash Verge Rev与Surge入门指南"
description: "macOS系统下主流代理客户端Clash Verge Rev与Surge for Mac详细安装与配置指南。支持Apple Silicon M1/M2/M3/M4芯片原生运行。"
platform: "macos"
pubDate: 2026-01-20
updatedDate: 2026-03-20
difficulty: "进阶操作"
readingTime: "5分钟"
---

在苹果 Mac 电脑（无论是 Intel 架构还是最新的 Apple Silicon M 系列芯片）上，我们推荐两款主流客户端：
1. **Clash Verge Rev (免费开源)**：跨平台统一体验，支持 Mihomo 核心，资源占用极轻，支持中文界面。
2. **Surge for Mac (商业旗舰)**：苹果生态顶级网络调试与分流利器，原生集成透明网关功能，但售价较高。

本文以免费开源、适合 95% 用户的 **Clash Verge Rev for macOS** 为例进行讲解。

---

## 一、下载安装

1. 访问 Clash Verge Rev 官方 Release 页面。
2. 根据你的 Mac 芯片架构下载安装包：
   - 如果是 M1 / M2 / M3 / M4 芯片：下载带有 `aarch64.dmg` 标识的安装镜像。
   - 如果是老款 Intel 芯片：下载带有 `x64.dmg` 标识的安装镜像。
3. 双击下载的 `.dmg` 镜像，将 Clash Verge 图标拖拽至 `Applications (应用程序)` 文件夹中完成安装。
4. **安全提示处理**：首次打开时若系统提示“无法打开，因为无法验证开发者”，请前往 Mac 的 **系统设置 → 隐私与安全性**，在底部找到“仍要打开”并输入开机密码放行。

---

## 二、导入机场订阅与启用系统代理

1. 启动应用后，在左侧导航点击 **配置 (Profiles)**。
2. 粘贴从机场用户中心复制的 Clash 订阅链接，点击 **导入 (Import)**。
3. 单击选中刚下载成功的配置卡片（使其成为高亮激活状态）。
4. 在左侧菜单点击 **代理 (Proxies)**，确保模式为 **规则 (Rule)**，并选择满意的测速节点。
5. 在左侧菜单点击 **设置 (Settings)**，开启 **系统代理 (System Proxy)**。
6. 打开 Safari 或 Chrome 浏览器，即可无障碍访问全球互联网。

---

## 三、进阶：配合终端 (Terminal / iTerm2) 走代理

在 macOS 终端中，系统代理通常不会对 `curl`、`git clone` 或 `brew install` 自动生效。
如需让终端使用代理流量，可在 `~/.zshrc` 中追加快捷函数：

```bash
# 快捷设置终端走 Clash 代理 (默认混合端口 7897)
alias setproxy="export http_proxy=http://127.0.0.1:7897; export https_proxy=http://127.0.0.1:7897; echo 'Terminal Proxy ON'"
alias unsetproxy="unset http_proxy; unset https_proxy; echo 'Terminal Proxy OFF'"
```
保存后执行 `source ~/.zshrc`，在终端输入 `setproxy` 即可一键让终端所有网络命令走代理通道。
