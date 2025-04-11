import ContactPage from "@/components/ContactPage/ContactPage"

export const metadata = {
    title: "Contact | Sudip Lamichhane",
    description: "Get in touch with Sudip Lamichhane. Reach out for web development inquiries, project collaborations, or any questions you may have.",
    openGraph: {
        title: "Contact | Sudip Lamichhane",
        description: "Get in touch with Sudip Lamichhane. Reach out for web development inquiries, project collaborations, or any questions you may have.",
        url: "https://sudip-lamichhane.com.np/contact",
    },
    twitter: {
        title: "Contact | Sudip Lamichhane",
        description: "Get in touch with Sudip Lamichhane. Reach out for web development inquiries, project collaborations, or any questions you may have.",
    },
    alternates: {
        canonical: "https://sudip-lamichhane.com.np/contact",
    },
}

const page = () => {
    return (
        <>
            <ContactPage />
        </>
    )
}

export default page
