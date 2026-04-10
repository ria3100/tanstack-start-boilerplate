# Project Conventions

## Language

- コードのコメント・ドキュメント・コミットメッセージは日本語

## File Naming

- ファイル名はケバブケース（kebab-case）。PascalCase 禁止
- 例: `theme-toggle.tsx`, `mcp-handler.ts`

## Import Alias

- `@/*` → `src/*` を使用（`#/*` は使わない）
- `package.json` の `imports` フィールドは使用しない（Vite 組み込みの `resolve.tsconfigPaths` で解決）

## Export Policy

- アプリケーションコードでは `default export` を使わず、named export を使う
- 例外として、Storybook の `export default meta` とツール設定ファイルの `export default` は許容する
- `src/components/ui/` の shadcn 生成物は生成元のスタイルを維持してよく、`function` 宣言や既存の export 形式を無理に変えない

## Component Structure

```
src/components/
  ui/           # shadcn 生成コンポーネント
  common/       # 汎用コンポーネント
    layout/     # Header, Footer, ThemeToggle
    media/      # Image, Picture
  (feature)/    # 機能固有コンポーネント
```

- `ui/` は `pnpm dlx shadcn@latest add <name>` で生成する場所。直接作成しない
- 特定ページ専用でない汎用コンポーネントは `common/` 配下にサブディレクトリを作って配置
- `@unpic/react` を直接 import せず `common/media/image.tsx` 経由で使用する

## Route Structure

- `/` は `src/routes/index.tsx` を使用する
- 通常ページは `src/routes/<route>/index.tsx` を route 定義ファイルとする
- ページ専用の分割コンポーネント、hook、schema、整形関数は `src/routes/<route>/` 配下にコロケーションする
- route 定義ファイルには route 定義、`head()`, loader/action 呼び出し、ページ骨格だけを残す
- 補助ファイルは file-based routing の走査対象から外すため、`-page.tsx` や `-foo.ts` のように `-` プレフィックスを付ける
- 複数画面で再利用するようになったら `src/components/<feature>/` または `src/components/common/` へ移動する

## Tooling

- Toolchain: [Vite+](https://viteplus.dev/) (`vp` CLI)
- Check: `pnpm check` (oxfmt + oxlint + 型チェックを一括実行)
- Test: `pnpm test`

## PR / CI

- PR 作成・PR への push 後は auto-fix を有効化し、CI 失敗時に自動修正を行う
- コミットメッセージは英語（Language セクション参照）

## Image

- 画像コンポーネントは `@unpic/react` ベース
- 単一画像: `Image`（`common/media/image.tsx`）
- breakpoint で出し分け: `Picture`（`common/media/picture.tsx`）
- 対応 CDN: Cloudinary, imgix, Cloudflare, Vercel 等

## Storybook MCP

Storybook が起動中（`pnpm storybook`）のとき、`storybook` MCP サーバーが `http://localhost:6006/mcp` で利用可能になる。

UI コンポーネントを新規作成・修正する際は、以下の順で MCP ツールを活用する:

1. `list-all-documentation` — 利用可能なコンポーネントと既存ストーリーを確認する
2. `get-documentation` — 対象コンポーネントの props・使用例を確認し、ドキュメントに存在しないプロパティは使用しない
3. `preview-stories` — 実装後にストーリーの URL を取得して視覚的に確認する
4. `run-story-tests` — テストとアクセシビリティチェックを実行する

Storybook が起動していない場合はこれらのツールを使用しない。
