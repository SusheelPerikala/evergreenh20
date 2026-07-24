# Routes

| URL | Entry | Layout | Summary |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | `src/app/layout.tsx` | Single-page marketing experience with navigation, hero, platform stories, proof, editorial content, final CTA, and footer. |
| `/_not-found` | Next.js generated | `src/app/layout.tsx` | Framework-generated not-found route. |

Routing uses the Next.js App Router and file-system conventions. There is no separate router configuration.

## Next.js configuration

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

