import ProjectHero from "@/components/ProjectHero";
import TechStack, { TechItem } from "@/components/TechStack";
import ExportedImage from "next-image-export-optimizer";
import { Metadata } from "next";
import ProjectContent from "@/components/ProjectContent";

import gemtech1 from "@/public/images/gemtech1.png";
import gemtech2 from "@/public/images/gemtech2.png";
import gemtech3 from "@/public/images/gemtech3.png";
import gemtech4 from "@/public/images/gemtech4.png";
import gemtech5 from "@/public/images/gemtech5.png";
import gemtech6 from "@/public/images/gemtech6.png";
import gemtech7 from "@/public/images/gemtech7.png";
import gemtech8 from "@/public/images/gemtech8.png";

import decapLogo from "@/public/images/decap.svg";

export const metadata: Metadata = {
    title: "New Gemtech Website | Nathan Chamberlain Portfolio",
    description: "I am currently creating a new website for Gemtech using Next.js. The website includes a content management system that allows Gemtech to easily update and manage their content.",
};

const images = [
    gemtech1,
    gemtech2,
    gemtech3,
    gemtech4,
];

const cmsImages = [
    gemtech5,
    gemtech6,
    gemtech7,
    gemtech8,
];

const GemtechWebsite = () => {
    return (
        <>
            <ProjectHero
                title="New Gemtech Website"
                description="The new Gemtech website is designed to optimised for search engines, modern and professional. It will increase Gemtech's internet presence, with the goal of reaching new clients and partners."
                images={images}
                url="https://gemtech.nz"
            />
            <ProjectContent
                title={"About Gemtech Website"}
                sections={[
                    "The new Gemtech website is designed to be modern, responsive, and user-friendly, showcasing Gemtech's capabilities across their service lines in the public and private sectors.",
                    "The project is still in development, with plans to soft-launch the website soon. The goal is to create a platform that not only highlights Gemtech's capabilities but also provides a seamless user experience for their clients and partners.",
                    "I am one of two developers working on the new Gemtech website, and we are working alongside Gemtech's team to ensure that the site meets their needs and expectations. The website is being built using Next.js, a powerful React framework that allows for fast loading times and optimised performance.",
                    "A special focus is placed on ensuring the website is optimised for search engines, enhancing Gemtech's online visibility and reach."
                ]}
            />
            <ProjectHero
                title="Content Management System"
                description="The website includes a content management system that allows Gemtech to easily update and manage their content."
                images={cmsImages}
                imagePosition="left"
            />
            <ProjectContent
                title="About the CMS"
                sections={[
                    "The CMS is designed to be user-friendly, enabling non-technical staff to make changes without needing extensive training.",
                    "The CMS supports various content types, including text, images, pages and videos, ensuring that Gemtech can keep their website fresh and engaging. It also includes customisation of metadata for SEO optimisation, allowing Gemtech to improve their search engine rankings and visibility.",
                    "The CMS has been built with scalability in mind, allowing for future expansion as Gemtech's needs grow. This ensures that the website can evolve alongside the company, adapting to new requirements and technologies.",
                    "During editing, previews of changes are available, allowing Gemtech to see how updates will look before they go live. This feature helps maintain the quality and consistency of the content across the website.",
                ]}
            />
            <TechStack>
                <TechItem
                    name="Next.js"
                    icon={
                        <svg viewBox="0 0 24 24" className="fill-gray-950 dark:fill-white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0)"> <path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"></path> </g> <defs> <clipPath id="clip0"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                    }
                />
                <TechItem
                    name="Tailwind CSS"
                    icon={
                        <svg className="fill-gray-950 dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>
                    }
                />
                <TechItem
                    name="Decap CMS"
                    icon={
                        <ExportedImage
                            src={decapLogo}
                            alt="Decap CMS Logo"
                            width={32}
                            height={32}
                            className="brightness-5 dark:brightness-100"
                        />
                    }
                />
            </TechStack>
        </>

    )
}

export default GemtechWebsite;