# Personal Portfolio Website

A modern, responsive personal portfolio website built with React. The design is minimal, visually appealing, and optimized for showcasing your work and skills.

## Features

- Responsive layout for all devices
- Modern, minimal design with subtle animations
- Hero section with name, tagline, and profile photo
- About Me section for personal introduction
- Projects section with filterable project cards
- Social media integration and contact information
- Clean, maintainable code structure

## Technologies Used

- React
- JavaScript
- CSS
- Font Awesome icons
- Google Fonts

## Getting Started

### Prerequisites

- Node.js (version 14.x or later recommended)
- npm or yarn

### Installation

1. Clone this repository:
   ```
   git clone <your-repo-url>
   cd personal_website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Customization

### Personal Information

1. Update your name, tagline, and personal information:
   - Edit `Hero.jsx` to update the hero section content
   - Edit `About.jsx` to update your personal bio and skills
   - Edit `Footer.jsx` to update contact information

2. Add your projects:
   - Edit the projects array in `Projects.jsx` to include your own work
   - For each project, provide a title, description, category, tags, and link

3. Replace placeholder images:
   - Add your profile photo to replace the placeholder in the Hero section
   - Add project images to the Projects section

### Styling

- Main colors and variables are defined in `src/index.css` in the `:root` selector
- Component-specific styles are in their respective CSS files in the `styles` folder

## Deployment

### Building for Production

To create a production-optimized build:

```
npm run build
```

This will generate a `dist` folder with all the optimized files.

### Deploying to Netlify

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Install the Netlify CLI:
   ```
   npm install netlify-cli -g
   ```
3. Login to Netlify:
   ```
   netlify login
   ```
4. Deploy your site:
   ```
   netlify deploy --prod
   ```

### Deploying to GitHub Pages

1. Install the gh-pages package:
   ```
   npm install gh-pages --save-dev
   ```

2. Add the following to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/personal_website",
   "scripts": {
     // other scripts...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy your site:
   ```
   npm run deploy
   ```

### Deploying to Vercel

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Login to Vercel:
   ```
   vercel login
   ```

3. Deploy your site:
   ```
   vercel --prod
   ```

## License

This project is licensed under the MIT License.

## Acknowledgements

- Font Awesome for the icons
- Google Fonts for the typography
- Unsplash for free stock images (if used)
