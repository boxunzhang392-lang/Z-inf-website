# Zinf Homepage

Zinf 官方首页首版，基于 Next.js、TypeScript、Tailwind CSS 与 Motion。

在线访问：<https://boxunzhang392-lang.github.io/Z-inf-website/>

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

生产构建：

```bash
npm run build
```

静态站点会输出到 `out/`。推送到 `main` 分支后，GitHub Actions 会自动部署到 GitHub Pages。

## 内容替换

- 所有项目、故事墙、生态和页脚占位内容集中在 `data/site-content.ts`。
- 首屏影像位于 `assets/plates/hero-photo.png`。
- 项目与活动占位影像位于 `assets/media/`。
- 当前影像为合成占位素材，上线前请替换为经授权的 Zinf 真实照片。
- 邮箱、社交媒体、法律文本、备案和二维码均明确标记为待补充。

## 检查命令

```bash
npm run typecheck
npm run lint
npm run build
```
