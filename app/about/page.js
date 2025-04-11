import AboutPage from "@/components/AboutPage/AboutPage";

export const metadata = {
  title: "About | Sudip Lamichhane",
  description: "Learn more about Sudip Lamichhane, a passionate Full-stack developer with a focus on creating modern and responsive web applications.",
  openGraph: {
    title: "About | Sudip Lamichhane",
    description: "Learn more about Sudip Lamichhane, a passionate Full-stack developer with a focus on creating modern and responsive web applications.",
    url: "https://sudip-lamichhane.com.np/about",
  },
  twitter: {
    title: "About | Sudip Lamichhane",
    description: "Learn more about Sudip Lamichhane, a passionate Full-stack developer with a focus on creating modern and responsive web applications.",
  },
  alternates: {
    canonical: "https://sudip-lamichhane.com.np/about",
  },
}

export default function Home() {
  return (
    <>
      <AboutPage />
    </>
  );
}