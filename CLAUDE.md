# CLAUDE.md - Project Context for tunnels-docs

## Project Overview
This is a **React Router v7** documentation site built with **Fumadocs**, a modern documentation framework. The project is generated from Create Fumadocs App and serves as a documentation platform for "tunnels-docs".

## Technology Stack
- **Framework**: React Router v7 (latest)
- **Documentation**: Fumadocs (MDX-based)
- **UI**: fumadocs-ui with Tailwind CSS v4
- **Build Tool**: Vite
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin

## Key Dependencies
- `@react-router/*`: Core React Router v7 packages
- `fumadocs-*`: Documentation framework (core, MDX, UI)
- `react` & `react-dom`: v19.x
- `tailwindcss`: v4.x
- `typescript`: v5.x

## Project Structure
```
├── app/                    # React Router app directory
│   ├── root.tsx           # Root layout with providers
│   ├── routes.ts          # Route definitions
│   ├── lib/
│   │   ├── source.ts      # Fumadocs source loader
│   │   └── layout.shared.tsx
│   ├── docs/              # Documentation-related components
│   │   ├── page.tsx       # Doc page component
│   │   └── search.ts      # Search functionality
│   └── routes/
│       └── home.tsx       # Home page route
├── content/docs/          # MDX documentation content
│   ├── index.mdx         # Main documentation page
│   └── test.mdx          # Test documentation
├── public/               # Static assets
└── source.generated.ts   # Auto-generated source file
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript checking with React Router typegen

## Build & Development
- **Dev Server**: `react-router dev`
- **Build**: `react-router build` (includes SSR and prerendering)
- **TypeCheck**: `react-router typegen && tsc`
- **Production**: `react-router-serve ./build/server/index.js`

## Key Configuration Files
- `react-router.config.ts` - React Router configuration with prerendering
- `source.config.ts` - Fumadocs MDX configuration
- `vite.config.ts` - Vite plugins: MDX, Tailwind, React Router, tsconfig paths
- `tsconfig.json` - TypeScript config with path aliases (`@/*` -> `./app/*`)

## Important Features
- **SSR Enabled**: Server-side rendering is configured
- **Prerendering**: Static generation for docs pages from `content/docs/*.mdx`
- **Path Aliases**: `@/*` maps to `./app/*`
- **MDX Support**: Full MDX support with Fumadocs components
- **Search**: Built-in documentation search functionality
- **Theme Support**: Dark/light theme via fumadocs-ui

## Development Notes
- Uses React Router v7's new file-based routing system
- MDX files in `content/docs/` are automatically processed and routed
- The project follows strict TypeScript configuration
- Tailwind CSS v4 is used with the new Vite plugin
- Source files are auto-generated based on MDX content

## Content Management
- Documentation content lives in `content/docs/`
- Uses frontmatter for metadata (title, description)
- Supports Fumadocs components like `<Cards>`, `<Card>`
- Auto-generates navigation and search indexes

## Build Process
1. React Router typegen generates types
2. TypeScript compilation with strict checking
3. Fumadocs processes MDX files
4. Vite bundles with all plugins
5. Prerendering generates static pages for docs