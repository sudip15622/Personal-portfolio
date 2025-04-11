import PortfolioPage from "@/components/PortfolioPage/PortfolioPage"

export const metadata = {
    title: "Portfolio | Sudip Lamichhane",
    description: "Explore sudip's portfolio showcasing a variety of Full-stack development projects that demonstrate his skills and creativity.",
    openGraph: {
        title: "Portfolio | Sudip Lamichhane",
        description: "Explore sudip's portfolio showcasing a variety of Full-stack development projects that demonstrate his skills and creativity.",
        url: "https://sudip-lamichhane.com.np/portfolio",
    },
    twitter: {
        title: "Portfolio | Sudip Lamichhane",
        description: "Explore sudip's portfolio showcasing a variety of Full-stack development projects that demonstrate his skills and creativity.",
    },
    alternates: {
        canonical: "https://sudip-lamichhane.com.np/portfolio",
    },
  }

const page = () => {
    return (
        <>
            <PortfolioPage />
        </>
    )
}

export default page
