# [jeffreyharmon.dev](https://jeffreyharmon.dev)

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/squarepear/www/deploy.yaml)


My personal portfolio website and blog, built with [Hugo](https://gohugo.io/) and [Nix](https://nixos.org).

## About

This is a static website showcasing my projects, blog posts, and professional background. The site features:

- **Portfolio**: Showcasing various software projects and games
- **Blog**: Technical articles and project write-ups
- **About**: Professional background and skills
- **Contact**: Links to social profiles and contact information

## Development

### Prerequisites

- [Nix](https://nixos.org/download.html) with flakes enabled

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/SquarePear/www.git
   cd www
   ```

2. Enter the development environment (or use [direnv](https://direnv.net/)!):

   ```bash
   nix develop --no-pure-eval
   ```

3. Start the development server:

   ```bash
   hugo server
   ```

4. Visit `http://localhost:1313` to view the site

### Building

To build the static site for production:

```bash
hugo build --gc
```

The built site will be available in the `public/` directory.

### Building with Nix

Alternatively, you can build the site using Nix:

```bash
nix build
```

The built site will be available in the `result/` directory as a symlink to the Nix store.

## Project Structure

```text
├── archetypes/         # Content templates
├── assets/             # Fonts, images, and styles
├── content/            # Site content (Markdown files)
│   ├── blog/             # Blog posts
│   ├── projects/         # Project showcases
│   └── redirect/         # Redirect pages
├── layouts/            # Hugo templates
├── static/             # Static assets (icons, etc.)
├── hugo.toml           # Hugo configuration
└── flake.nix           # Nix development environment
```

## Content Management

### Adding a Blog Post

Create a new Markdown file in `content/blog/`:

```bash
hugo new blog/your-post-title.md
```

### Adding a Project

Create a new Markdown file in `content/projects/`:

```bash
hugo new projects/your-project-name.md
```
