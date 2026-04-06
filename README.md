# TanStack Start Boilerplate

## セットアップ

```bash
pnpm install
pnpm dev
```

## ビルド

```bash
pnpm build
```

## テスト

[Vitest](https://vitest.dev/)（Vite+ 経由）を使用。

```bash
pnpm test
```

## スタイリング

[Tailwind CSS](https://tailwindcss.com/) v4 を使用。

## Check（Lint / フォーマット / 型チェック）

[Vite+](https://viteplus.dev/) でフォーマット（oxfmt）、Lint（oxlint）、型チェックを一括実行する。

```bash
pnpm check     # vp check（oxfmt + oxlint + 型チェック）
```

## shadcn

[shadcn](https://ui.shadcn.com/) でUIコンポーネントを追加できる。生成されたコンポーネントは `src/components/ui/` に配置される。

```bash
pnpm dlx shadcn@latest add button
```

## Storybook

```bash
pnpm storybook
```

アプリ内ルートではなく、通常は `http://localhost:6006` で確認する。

## ディレクトリ構成

```
src/
  components/
    ui/          # shadcn 生成コンポーネント
    common/      # 汎用コンポーネント
      layout/    # Header, Footer, ThemeToggle
      media/     # Image, Picture
  routes/        # ファイルベースルーティング
    __root.tsx   # ルートレイアウト
    index.tsx    # "/" の route 定義
    index/       # "/" 専用の分割コンポーネント
    about/       # "/about" の route 定義と分割コンポーネント
  lib/           # ユーティリティ
```

## ルーティング

[TanStack Router](https://tanstack.com/router) のファイルベースルーティングを使用。`src/routes/` にファイルを追加するとルートが自動生成される。

### ルートの追加

`src/routes/` にファイルを追加する。TanStack Router がルートファイルの内容を自動生成する。

- `/` は `src/routes/index.tsx` を使用する
- 通常ページは `src/routes/<route>/index.tsx` を基本形とする

### リンク

```tsx
import { Link } from '@tanstack/react-router'
;<Link to="/about">About</Link>
```

### レイアウト

レイアウトは `src/routes/__root.tsx` に定義する。全ルート共通のUIはここに記述する。

### ページ肥大化時の分割

ページ専用の分割コンポーネントは、Next.js と同様に route 近傍へコロケーションしてよい。

```text
src/routes/
  dashboard/
    index.tsx
    components/
      stats-card.tsx
      activity-list.tsx
    hooks/
      use-dashboard-filters.ts
    lib/
      format-dashboard-data.ts
```

- route 定義ファイルには route 定義、`head()`, loader/action 呼び出し、ページ骨格だけを置く
- その route でしか使わないものは `src/routes/<route>/` 配下へ置き、route 定義は `src/routes/<route>/index.tsx` にまとめる
- 複数画面で再利用するようになったら `src/components/<feature>/` か `src/components/common/` へ移す
- `src/components/ui/` は shadcn 生成物専用なので、手書きのページ部品は置かない
- file-based routing の走査対象から外すため、route ではない補助ファイルは `-page.tsx` や `-foo.ts` のように `-` プレフィックスを付ける

### エラーと 404

共通の `errorComponent` と `notFoundComponent` を `src/routes/__root.tsx` に定義している。boilerplate を複製した後は、ブランドに合わせて文言と導線を更新する。

## サーバー関数

```tsx
import { createServerFn } from '@tanstack/react-start'

const getServerTime = createServerFn({
  method: 'GET',
}).handler(async () => {
  return new Date().toISOString()
})
```

## API ルート

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () => json({ message: 'Hello, World!' }),
    },
  },
})
```

## データ取得

TanStack Query またはTanStack Router の `loader` でデータを取得できる。

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    return response.json()
  },
  component: PeopleComponent,
})

function PeopleComponent() {
  const data = Route.useLoaderData()
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}
```

詳細は [Loader ドキュメント](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters) を参照。

## 参考

- [TanStack ドキュメント](https://tanstack.com)
- [TanStack Start ドキュメント](https://tanstack.com/start)

## 最初に差し替える項目

- `src/routes/__root.tsx` の title / description / theme-color
- `public/manifest.json` のアプリ名と配色
- `src/components/common/layout/header.tsx` の外部リンク
- `src/components/common/layout/footer.tsx` のコピーライト表記
- `src/routes/index/-page.tsx` のトップ文言
