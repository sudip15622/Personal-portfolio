import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  openGraph: {
    siteName: "Sudip Lamichhane",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 570,
        alt: "Sudip Lamichhane Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://sudip-lamichhane.com.np",
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sudip Lamichhane",
              url: "https://sudip-lamichhane.com.np",
              image: "https://sudip-lamichhane.com.np/og-image.png",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer"
              },
              sameAs: [
                "https://github.com/sudip15622", // replace with your actual links
                "https://www.linkedin.com/in/sudip-lamichhane-a22613271"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <NextTopLoader color="var(--action-color)" showSpinner={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
