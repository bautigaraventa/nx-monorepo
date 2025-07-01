# NxReactRouterApp

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Project Overview

**NxReactRouterApp** is a modern monorepo web application built with [Nx](https://nx.dev), [React](https://react.dev), [React Router v7](https://reactrouter.com/), [Vite](https://vitejs.dev/), [Tailwind CSS 4](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/). It demonstrates scalable project structure, strict TypeScript, and advanced UI patterns.

### What does it do?

- Provides a multi-page React app with dynamic routing using React Router v7.
- Features a dynamic breadcrumb navigation system with randomizable labels.
- Uses Tailwind CSS 4 for utility-first styling and shadcn/ui for accessible, beautiful UI components.
- Demonstrates Nx monorepo best practices for scalable frontend development.

### Who is it for?

- Developers seeking a robust, scalable React monorepo starter.
- Teams wanting to use the latest React, Vite, Tailwind, and shadcn/ui in a modular Nx workspace.
- Anyone interested in advanced routing, context, and UI patterns in React.

## Project Structure

```
apps/
  web/                # Main React app
    src/
      app/            # App entry, routes, and main layout
        routes/       # Route layout components (FooLayout, BarLayout, BazLayout)
      components/     # UI and logic components (Breadcrumb, NavigationMenu, RandomizeButton, ui/)
        ui/           # shadcn/ui-based primitives (button, card, breadcrumb, separator)
      lib/            # Context and utility files (breadcrumb-context, utils)
      styles.css      # Tailwind CSS entrypoint
    index.html        # HTML entrypoint
    vite.config.ts    # Vite configuration
    tailwind.config.js|cjs # Tailwind config (may be .js or .cjs)
    postcss.config.js|cjs  # PostCSS config (may be .js or .cjs)
```

## Key Features

- **Dynamic Breadcrumbs:**
  - Breadcrumbs update based on the current route and can be randomized with a button.
  - Uses React context for state management and label randomization.
- **Modern UI:**
  - Uses shadcn/ui for accessible, themeable UI primitives (Button, Card, Breadcrumb, etc).
  - Tailwind CSS 4 for rapid, utility-first styling.
- **Routing:**
  - React Router v7 for nested layouts and route-based navigation.
- **Developer Experience:**
  - Strict TypeScript, modular Nx structure, and Vite for fast development.

## How to Run

To run the dev server for your app, use:

```sh
npx nx serve web
```

To create a production bundle:

```sh
npx nx build web
```

To see all available targets to run for a project, run:

```sh
npx nx show project web
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
