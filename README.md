# 🚀 Sudip Lamichhane - Personal Portfolio

A modern, responsive portfolio website showcasing my journey as a full-stack developer and creative technologist. Built with cutting-edge technologies to provide an exceptional user experience.

## 🌟 Live Demo

Visit my portfolio: [sudip-lamichhane.com.np](https://sudip-lamichhane.com.np)

## ✨ Features

- **🎨 Modern Design**: Clean, professional, and visually appealing interface
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🌙 Dark/Light Mode**: Theme switching with system preference detection
- **⚡ Fast Performance**: Built with Next.js 15 and optimized for speed
- **🎭 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **📧 Contact Form**: Functional contact form with email integration
- **🔍 SEO Optimized**: Meta tags, sitemap, and structured data
- **♿ Accessible**: WCAG compliant and keyboard navigation friendly
- **🗂️ Project Showcase**: Dynamic project pages with detailed case studies

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and hooks
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Hook Form** - Forms with easy validation
- **React Icons** - Beautiful icon library

### Features & Integrations
- **EmailJS & Resend** - Email service integration
- **Next Themes** - Theme switching functionality
- **Next Sitemap** - Automatic sitemap generation
- **NextJS TopLoader** - Loading progress indicator
- **React Spinners** - Loading animations

### Development & Build
- **Turbopack** - Ultra-fast bundler for development
- **PostCSS** - CSS preprocessing
- **ESLint** - Code linting and formatting

## 🏗️ Project Structure

```
sudip-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio overview
│   ├── projects/          # Dynamic project pages
│   └── layout.js          # Root layout
├── components/            # Reusable React components
│   ├── HomePage/          # Landing page components
│   ├── AboutPage/         # About page components
│   ├── ContactPage/       # Contact form and info
│   ├── PortfolioPage/     # Portfolio grid
│   ├── ProjectPage/       # Individual project display
│   ├── Navbar/            # Navigation component
│   └── Footer/            # Footer component
├── data/                  # Static data files
│   └── myProjects.json    # Project information
├── public/                # Static assets
│   ├── images/            # Project screenshots
│   └── sudipCV.pdf        # Resume/CV
├── utils/                 # Utility functions
└── actions/               # Server actions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sudip15622/Personal-portfolio.git
   cd sudip-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your email service credentials and other required variables.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run postbuild` - Generate sitemap after build

## 🎯 Key Pages

- **Home** (`/`) - Landing page with hero section and overview
- **About** (`/about`) - Personal information, skills, and experience
- **Portfolio** (`/portfolio`) - Project showcase and gallery
- **Projects** (`/projects/[project]`) - Detailed project case studies
- **Contact** (`/contact`) - Contact form and social links

## 🔧 Customization

### Adding New Projects

1. Add project data to `data/myProjects.json`
2. Upload project images to `public/`
3. The project page will be automatically generated

### Styling

- Modify `app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize theme colors in `tailwind.config.js`

### Email Configuration

Update email settings in the contact form component and environment variables for EmailJS/Resend integration.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation and interactions

## 🔍 SEO Features

- Meta tags and Open Graph data
- Structured data markup
- Automatic sitemap generation
- Optimized images and performance
- Semantic HTML structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

- **Website**: [sudip-lamichhane.com.np](https://sudip-lamichhane.com.np)
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/sudip-lamichhane-a22613271/)
- **GitHub**: [@sudip15622](https://github.com/sudip15622)

---

Built with ❤️ by [Sudip Lamichhane](https://sudip-lamichhane.com.np)
