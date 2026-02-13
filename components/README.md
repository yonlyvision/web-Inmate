# INM8TE Website

A modern, responsive lifestyle and storytelling platform built with React and TypeScript. INM8TE weaves together stories of life, love, and the pursuit of a healthy mind and body.

## Features

- 📚 **Stories & Books** - Discover compelling narratives and literary works
- 🤝 **Connections Concept** - Explore the power of human connection
- 🥗 **Lifestyle & Recipes** - Healthy living tips and delicious recipes
- 📱 **Responsive Design** - Optimized for all devices
- ♿ **Accessible** - Built with ARIA labels and accessibility best practices
- 🎨 **Modern UI** - Clean, elegant design with Tailwind CSS

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library
- **Create React App** - Zero-config build setup

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yonlyvision/web-Inmate.git
cd inm8te-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run lint` - Lints TypeScript files
- `npm run format` - Formats code with Prettier

## Project Structure

```
inm8te-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Connections.tsx
│   │   └── Lifestyle.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder, ready for deployment.

## Deployment

The app can be deployed to various platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to S3

## Configuration

### Tailwind CSS

Tailwind is configured in `tailwind.config.js`. The custom color palette includes:
- Stone shades for neutral tones
- Primary color for brand accents

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
REACT_APP_API_URL=your_api_url_here
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

INM8TE - [@inm8te](https://twitter.com/inm8te)

Project Link: [https://github.com/yonlyvision/web-Inmate](https://github.com/yonlyvision/web-Inmate)

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Router](https://reactrouter.com/)
