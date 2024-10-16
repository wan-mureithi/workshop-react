# DDI Frontend Template (ddi-frontend-template)

This repository serves as a template for quickly scaffolding frontend projects using [Vite](https://vitejs.dev/), configured with a standard project structure for React applications. It's designed to help developers start new projects with good practices in code organization and build configurations.

## Getting Started

To use this template for your next project, follow these steps:

### Using GitHub (Recommended)

GitHub has a streamlined process of using such kinds of templates.

1. **Navigate to the new repository button**

   ![image](https://github.com/DalbergDataInsights/ddi-frontend-template/assets/41194018/1a1b47ba-81c3-47a6-8e85-bea9470bebf8)

2. **Select the required template**

   ![image](https://github.com/DalbergDataInsights/ddi-frontend-template/assets/41194018/adf57f6c-106d-475c-a9bc-cd589b88ea30)

OR:

While on the repository, scroll back to the top of the page and click the `use this template button` like this:

![image](https://github.com/DalbergDataInsights/ddi-frontend-template/assets/41194018/475659a7-71de-4292-82f8-6209099cc09d)

This is ideally the quickest way to re-use this template.

## Features

- **Vite**: Enjoy the fast, modern build tooling experience for React apps.
- **Pre-configured Folder Structure**: Jump straight into development with an organized folder structure for your components, assets, and API functions.
- **Nginx deployment configuration**: nginx config is attached to this repo, including proxy for /api/ backend
- **react**
- **react-dom**
- **react-router**
- **axios**
- **react-query**
- **tailwind css**
- **tailwind-merge & clsx**: Helps to merge classNames in tailwind
- **react-components**: DDI's react components library
- **data-model**: DDI's data model library

## Customization

- **API Functions**: Add your API functions in the `/api` directory. This keeps your API calls centralized and easy to manage.
- **Components**: Develop reusable components in the `/components` directory. This enhances consistency and reduces code duplication.
- **Views/Pages**: Create or modify your application's pages within the `/views` directory. This separation makes routing and page management straightforward.
- **Configuration**: Global configurations and settings can be adjusted in the `/config` directory.

## Contribution

Contributions to this template are welcome! If you have suggestions for improvements or have identified issues, please feel free to submit a pull request or open an issue in the repository.

## Project Structure

Here's an overview of the project structure, along with a description of each item:

```bash
frontend-template
├── README.md                # You are here! Documentation for using this template.
├── index.html               # The entry point for your application.
├── package-lock.json        # Locks the installed package versions for consistency.
├── package.json             # Project metadata and dependencies.
├── public/                  # Public assets that are automatically served under /.
├── src/
│   ├── api/                 # Directory for API integration.
│   ├── assets/              # Static assets for your web development.
│   ├── components/          # Reusable React components.
│   ├── config/              # Configuration files and constants.
│   ├── model/               # Business logic of the application.
│   ├── views/               # Components representing view structure.
│   ├── App.tsx              # Main React application component.
│   ├── index.css            # Global CSS styles.
│   └── main.tsx             # Main JavaScript entry point, bootstraps React app.
├── config/
│   └── nginx.conf.erb       # NGINX configuration file for deployment.
├── tsconfig.json            # TypeScript configuration file.
├── tsconfig.node.json       # Additional TypeScript configuration specific to Node.js.
└── vite.config.js           # Vite configuration file.
```

## Local Development

1. **Run Docker Container**

   Run the container via:

   ```bash
   docker run -d -i --name <your-project-name> node-dev
   ```

2. **Attach to a docker container using VSCode**

3. **Clone the Repository**

   Clone repository to your local machine:

   ```bash
   git clone <git-clone-link>
   ```

   Or just clone the project.

4. **Install dependencies**

   Navigate to the project directory and install the required dependencies:

   ```bash
   npm install
   ```

5. **Run the development server**

   Start the development server to see your app in action:

   ```bash
   npm run dev
   ```

   This will serve your app on a local server, typically at `http://127.0.0.1:5173`

## Deployment

1. **Clone the repository to the target machine**

2. **Build deployment image**

   ```bash
   docker build --tag frontend .
   ```

3. **Run deployment container**

   ```bash
   docker run -p 443:443 -p 80:80 --name frontend frontend
   ```
