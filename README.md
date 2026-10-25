# ChaosDown

ChaosDown is a modern Angular-based blogging platform UI built with Angular 14, Angular Material, Bootstrap, and CKEditor. It includes a landing page, blog listing/detail views, rich text post creation, authentication screens, contact/about pages, and a simple blogger dashboard.

This project is designed as a front-end blogging application prototype and can be extended with a backend API, database, and real authentication in the future.

## Suggested Project Name

A strong and memorable name for this project is: "ChaosDown"

It fits the current brand styling already present in the app header and gives the blog a bold, modern identity.

## Features

- Modern landing page with image carousel
- Blog listing and blog detail views
- Post creation form with rich text editing
- Sign in and sign up screens
- About us and contact us sections
- Responsive UI using Angular Material and Bootstrap
- Blogger dashboard and sidebar navigation
- Pagination support for blog cards
- Clean routing setup for page navigation

## Tech Stack

- Angular 14
- TypeScript
- Angular Material
- Bootstrap 5
- CKEditor 5
- RxJS
- Karma/Jasmine for unit testing

## Project Structure

```bash
blogging-site/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── ...
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── ...
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── karma.conf.js
├── .gitignore
└── README.md
```

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v16 or above recommended)
- npm
- Angular CLI

## Installation

Clone the repository:

```bash
git clone https://github.com/arifmdkhan/blogging-site.git
cd blogging-site
```

Install dependencies:

```bash
npm install
```

## Run the App

Start the development server:

```bash
ng serve
```

Then open your browser at:

```bash
http://localhost:4200/
```

The app supports hot reload during development, so changes to the source files will automatically refresh in the browser.

## Build for Production

```bash
ng build
```

The production build output will be generated in the `dist/` directory.

## Run Tests

```bash
ng test
```

## Notes

This project is primarily a front-end UI implementation for a blog application. It currently includes routing and component structure for user-facing pages, but does not yet include a backend database or full authentication flow.

## License

This project is currently unlicensed unless you add one explicitly.

## Author

- arifmdkhan

## Future Enhancements

- Add backend API with Node.js or NestJS
- Implement real user authentication
- Add database support with MongoDB or PostgreSQL
- Store blog posts and user profiles persistently
- Add admin panel and article moderation
- Enable search, categories, and tags
- Improve SEO and accessibility

## Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

