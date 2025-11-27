# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages (Recommended)

This project is configured to automatically deploy to GitHub Pages. Follow these steps:

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to the main branch:**
   - Any push to the `main` branch will trigger the deployment workflow
   - The workflow will build the project and deploy it to GitHub Pages

3. **Custom Domain (Optional):**
   - The CNAME file is already configured for `virskyline.dev`
   - Add your custom domain in GitHub Settings → Pages → Custom domain
   - Configure your DNS provider to point to GitHub Pages

### Manual Deployment

You can also deploy manually to other platforms:

```sh
# Build the project
npm run build

# The dist/ folder contains the production-ready files
# Deploy the contents of dist/ to your hosting provider
```

### Lovable Platform

Simply open [Lovable](https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727) and click on Share → Publish.
