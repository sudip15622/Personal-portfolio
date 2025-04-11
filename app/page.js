import HomePage from "@/components/HomePage/HomePage";

export const metadata = {
  title: "Home | Sudip Lamichhane",
  description: "Welcome to the personal website of Sudip Lamichhane - a full-stack developer and creative technologist crafting modern web experiences.",
  openGraph: {
    title: "Home | Sudip Lamichhane",
    description: "Welcome to the personal website of Sudip Lamichhane - a full-stack developer and creative technologist crafting modern web experiences.",
    url: "https://sudip-lamichhane.com.np",
  },
  twitter: {
    title: "Home | Sudip Lamichhane",
    description: "Welcome to the personal website of Sudip Lamichhane - a full-stack developer and creative technologist crafting modern web experiences.",
  },
  alternates: {
    canonical: "https://sudip-lamichhane.com.np",
  },
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
