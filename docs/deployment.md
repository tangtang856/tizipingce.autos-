# Cloudflare Pages 部署与生产环境发布指南

本网站（**梯子评测网 tizipingce.autos**）专为全球边缘加速与零维护静态架构设计，推荐采用 **Cloudflare Pages** 进行全托管静态部署。

---

## 一、生产环境核心构建参数

| 配置项 | 推荐值 | 说明 |
| :--- | :--- | :--- |
| **Framework Preset** | Astro | Cloudflare Pages 原生支持 |
| **Build Command** | `npm run build` | 执行 Astro 生产环境静态打包 |
| **Build Output Directory** | `dist` | 纯静态 HTML/CSS/JS 输出目录 |
| **Node.js Version** | `20.18.0` 或更高 | 环境变量 `NODE_VERSION=20.18.0` |

---

## 二、部署步骤（通过 GitHub 自动持续集成）

### 步骤 1：连接 GitHub 仓库
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)；
2. 在左侧菜单点击 **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**；
3. 授权并选择 GitHub 远程仓库：`tangtang856/tizipingce.autos`。

### 步骤 2：设置构建配置
在项目构建设置中输入：
- **Project name**: `tizipingce-autos`
- **Production branch**: `main`
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables (环境变量)**:
  - 变量名: `NODE_VERSION`
  - 变量值: `20`

### 步骤 3：点击 “Save and Deploy”
Cloudflare Pages 将自动克隆仓库、安装依赖并执行静态构建。构建完成后，您将获得一个类似 `tizipingce-autos.pages.dev` 的默认访问地址。

---

## 三、绑定正式自定义域名 (tizipingce.autos)

1. 在 Cloudflare Pages 项目后台，进入 **Custom domains (自定义域)** 标签页；
2. 点击 **Set up a custom domain**；
3. 输入本次正式域名：
   ```text
   tizipingce.autos
   ```
4. 如果域名已托管在 Cloudflare DNS：
   Cloudflare 会自动添加一条 CNAME 指向 Pages 边缘节点，并自动签发免费的 SSL/TLS 证书。
5. **设置根域名与 www 重定向**：
   建议统一规范使用根域名 `https://tizipingce.autos/`，在 Cloudflare Page Rules 或 Redirect Rules 中将 `www.tizipingce.autos` 永久 301 重定向至 `https://tizipingce.autos/`。

---

## 四、安全与缓存优化建议

1. **SSL/TLS 模式**：
   在 Cloudflare SSL/TLS 设置中选择 **Full (Strict) / 完全(严格)** 模式；
2. **启用 Always Use HTTPS**：
   强制将所有 HTTP 请求重定向到 HTTPS；
3. **启用 Brotli 压缩**：
   在 Speed → Optimization 中开启 Brotli 压缩，进一步缩减 CSS 与 JS 体积；
4. **爬虫与安全防护**：
   在 Security → Bots 中开启 Bot Fight Mode，防止恶意垃圾爬虫抓取。
