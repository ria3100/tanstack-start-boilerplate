# Project Conventions

## Language

- コードのコメント・ドキュメントは日本語可
- コミットメッセージは英語

## File Naming

- ファイル名はケバブケース（kebab-case）。PascalCase 禁止
- 例: `theme-toggle.tsx`, `mcp-handler.ts`

## Import Alias

- `@/*` → `src/*` を使用（`#/*` は使わない）
- `package.json` の `imports` フィールドは使用しない（`vite-tsconfig-paths` で解決）

## Component Structure

```
src/components/
  ui/           # shadcn 生成コンポーネント（手動編集しない）
  common/       # 汎用コンポーネント
    layout/     # Header, Footer, ThemeToggle
    media/      # Image, Picture
  (feature)/    # 機能固有コンポーネント
```

- `ui/` は `pnpm dlx shadcn@latest add <name>` で生成する場所。直接作成しない
- 特定ページ専用でない汎用コンポーネントは `common/` 配下にサブディレクトリを作って配置
- `@unpic/react` を直接 import せず `common/media/image.tsx` 経由で使用する

## Tooling

- Lint: oxlint (`pnpm lint`)
- Format: oxfmt (`pnpm format`)
- Test: vitest (`pnpm test`)
- Check: `pnpm check` (oxfmt --write && oxlint --fix)

## Image

- 画像コンポーネントは `@unpic/react` ベース
- 単一画像: `Image`（`common/media/image.tsx`）
- breakpoint で出し分け: `Picture`（`common/media/picture.tsx`）
- 対応 CDN: Cloudinary, imgix, Cloudflare, Vercel 等
