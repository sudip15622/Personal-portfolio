import ProjectPage from "@/components/ProjectPage/ProjectPage";
import myProjects from '@/data/myProjects.json';
import { redirect } from "next/navigation";

// export const metadata = {
//     title: `Project | Sudip Lamichhane`,
//     description: `Discover the details of the project created by Sudip Lamichhane, showcasing the technologies and features implemented.`,
// };

export async function generateMetadata({ params }) {

    const slug = await params;
    const projectId = slug.project;

    if (!projectId) {
        return {
            title: "Project Not Found | Sudip Lamichhane",
            description: "Sorry, the project you are looking for doesn't exist.",
        };
    }

    const getProjectName = (id) => {
        const str = id.split("-")[2];

        return str
            .toLowerCase()                          // Convert the whole string to lowercase
            .split(' ')                              // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize first letter of each word
            .join(' ');
    }

    return {
        title: `${getProjectName(projectId)} | Sudip Lamichhane`,
        description: `Discover the details of the project ${getProjectName(projectId)}, a web development project created by Sudip Lamichhane, showcasing the technologies and features implemented.`,
    };
}

const page = async ({ params }) => {

    const slug = await params;
    const projectId = slug.project;

    const getProjectDetails = (id) => {
        if (myProjects) {
            const selectedProjects = myProjects.filter((project) => {
                return project.id === id;
            })

            if (selectedProjects.length > 0) {
                return selectedProjects[0];
            } else {
                return null;
            }
        }
    }

    const projectDetails = getProjectDetails(projectId);

    if (!projectDetails) {
        redirect("/404");
        return null;
    }

    return (
        <>
            <ProjectPage details={projectDetails} />
        </>
    )
}

export default page
