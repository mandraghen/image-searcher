[![Pull Request](https://github.com/mandraghen/image-searcher/actions/workflows/pr.yml/badge.svg)](https://github.com/mandraghen/image-searcher/actions/workflows/pr.yml)[![CI](https://github.com/mandraghen/image-searcher/actions/workflows/ci.yml/badge.svg)](https://github.com/mandraghen/image-searcher/actions/workflows/ci.yml)[![Vercel Preview Deployment](https://github.com/mandraghen/image-searcher/actions/workflows/preview.yml/badge.svg)](https://github.com/mandraghen/image-searcher/actions/workflows/preview.yml)[![Vercel Production Deployment](https://github.com/mandraghen/image-searcher/actions/workflows/promote.yml/badge.svg)](https://github.com/mandraghen/image-searcher/actions/workflows/promote.yml)

# image-searcher
This is a test web app built using the nextjs framework that retrieve images from Unsplash using its public API.
It presents a home page with the search functionality and a detail page, that is accessible clicking on the tile of an image in the listing page.

## Technologies Used

- **Next.js 15**: A React framework for production.
- **NextUI**: Component library for building modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22.8.0 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

Yarn is preferred, so now on it will be taken as reference.

### Running the application

1. Clone the repository:
   ```bash
   git clone git@github.com:mandraghen/image-searcher.git
   cd image-searcher
   ```
2. Install the dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. Open your browser and navigate to http://localhost:3000.
5. You need an account on [Unsplash](https://unsplash.com/) to use the search functionality, and add your personal access key to the project properties `.env`:
   ```bash
   UNSPLASH_ACCESS_KEY=<access_key>
   ```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The project is deployed in my personal account on the [Vercel Platform](https://vercel.com/).
The production link is accessible publicily: https://image-searcher-one.vercel.app/

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details about how to deploy a nextjs app.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
