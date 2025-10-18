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

## ⚠️ CRITICAL: MDX Documentation Formatting Rules ⚠️

**THESE FORMATTING RULES ARE MANDATORY AND MUST BE FOLLOWED FOR ALL MDX FILES IN `content/docs/`**

### Required Formatting Standards

**1. ALL Numbered Lists MUST Be Wrapped in Code Blocks**
```markdown
CORRECT:
```
1. Step one
2. Step two
3. Step three
\```

INCORRECT:
1. Step one
2. Step two
3. Step three
```

**2. ALL Bullet Point Lists MUST Be Wrapped in Code Blocks**
```markdown
CORRECT:
```
- First item
- Second item
- Third item
\```

INCORRECT:
- First item
- Second item
- Third item
```

**3. Consecutive Bold Statements AND MUST Use Line Breaks**
```markdown
CORRECT:
**First Point:** Description here<br/>
**Second Point:** Description here

INCORRECT:
**First Point:** Description here
**Second Point:** Description here
```

**4. Lists Following Introductory Text MUST Have Blank Lines**
```markdown
CORRECT:
Here is a list of items:
```
- Item one
- Item two
\```

INCORRECT:
Here is a list of items:
- Item one
- Item two
```

**5. Remove Bold Formatting Inside Code Blocks**
```markdown
CORRECT (inside code block):
```
- Feature Name: Description
\```

INCORRECT (inside code block):
```
- **Feature Name:** Description
\```
```

**6. Main Section Titles MUST Use Single Hash (#)**
```markdown
CORRECT:
# Overview
# Configuration
# Getting Started

INCORRECT:
## Overview
## Configuration
## Getting Started
```

**Note:** Use `##` (double hash) for subsections within main sections, and `###` (triple hash) for sub-subsections.

**7. Main Section Titles MUST Have Section Dividers**
```markdown
CORRECT:
Some introductory content here.

---

# Main Section Title

Content of the section...

---

# Next Main Section

INCORRECT:
Some introductory content here.

# Main Section Title

Content of the section...

# Next Main Section
```

**Note:** Add a `---` (horizontal rule) before each main section title (single `#`) to visually separate major sections. This applies to all `#` headers except when they immediately follow the frontmatter.


### Examples from Real Documentation

See `content/docs/client/cli.mdx` for a complete reference implementation of these formatting rules.

**WHY THESE RULES MATTER:**
- Ensures consistent visual presentation across all documentation
- Improves readability and scannability
- Maintains professional documentation standards
- Provides clear visual hierarchy

**WHEN EDITING MDX FILES:**
1. Always check existing formatting before making changes
2. Apply these rules to ALL new content
3. Fix any non-compliant formatting you encounter
4. Reference dns-security.mdx as the formatting standard

## Build Process
1. React Router typegen generates types
2. TypeScript compilation with strict checking
3. Fumadocs processes MDX files
4. Vite bundles with all plugins
5. Prerendering generates static pages for docs
