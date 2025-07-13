import ProjectHero from '@/components/ProjectHero';
import ProjectContent from '@/components/ProjectContent';
import { Metadata } from 'next';
import TechStack, { TechItem } from '@/components/TechStack';

// Import images as static assets
import sapp1 from '@/public/images/sapp1.png';
import sapp2 from '@/public/images/sapp2.png';
import sapp3 from '@/public/images/sapp3.png';
import sapp4 from '@/public/images/sapp4.png';
import sapp5 from '@/public/images/sapp5.png';
import sapp6 from '@/public/images/sapp6.png';

export const metadata: Metadata = {
    title: 'Sepsis App (SAPP) | Nathan Chamberlain Portfolio',
    description: 'Sepsis App (SAPP) is an application designed to support clinical decision-making in emergency departments around infection and sepsis. It is currently in development at Victoria University in collaboration with CCDHB, Te Whatu Ora, and Wellington Hospital.',
};

export default function Sapp() {
    const images = [sapp1, sapp2, sapp3, sapp4, sapp5, sapp6];

    return (
        <>
            <ProjectHero
                title="Sepsis App (SAPP)"
                description="SAPP is an application that supports clinical decision-making around patients who may have sepsis or an infection. It is designed to be used in the emergency department."
                images={images}
            />
            <ProjectContent
                title="About SAPP"
                sections={[
                    "I am currently developing SAPP in collaboration with Victoria University, CCDHB, Te Whatu Ora, and Wellington Hospital.",
                    "Clinicians in the Wellington Hospital emergency department are time-poor, with triaging taking on average ten minutes or less. SAPP addresses this through its efficient and simplistic design, allowing clinicians to quickly assess patients and make informed decisions about their care.",
                    "The application is designed to be used on a tablet, with a user-friendly interface that allows clinicians to quickly input patient information and receive recommendations for further action. SAPP is currently in development, with plans for user testing and trials in the near future.",
                    "I am developing SAPP for my honours project at Victoria University, with the goal of creating a tool that will improve patient outcomes and support clinicians in their decision-making."
                ]}
            />
            <TechStack>
                <TechItem
                    name="Expo"
                    icon={
                        <svg className="fill-gray-950 dark:fill-white" viewBox="0 -12.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M121.309004,84.6732585 C123.402504,81.5874152 125.694292,81.1950171 127.553451,81.1950171 C129.41261,81.1950171 132.509843,81.5874152 134.604162,84.6732585 C151.106348,107.339593 178.345607,152.492 198.439108,185.798721 C211.542532,207.519499 221.6069,224.201947 223.671721,226.324944 C231.422996,234.294992 242.053551,229.327949 248.230809,220.287799 C254.312201,211.387762 256.000111,205.138399 256.000111,198.471155 C256.000111,193.930186 167.895315,30.0714244 159.022317,16.4322117 C150.48936,3.31359639 147.710044,0 133.105527,0 L122.176721,0 C107.615631,0 105.511479,3.31359639 96.9777022,16.4322117 C88.1055238,30.0714244 0.0001105152,193.930186 0.0001105152,198.471155 C0.0001105152,205.138399 1.68839227,211.387762 7.76991495,220.287799 C13.9471241,229.327949 24.5775965,234.294992 32.3286259,226.324944 C34.3936934,224.201947 44.4580605,207.519499 57.5616485,185.798721 C77.654822,152.492 104.806818,107.339593 121.309004,84.6732585 Z"> </path> </g> </g></svg>
                    }
                />
                <TechItem
                    name="React Native"
                    icon={
                        <svg className="fill-gray-950 dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>react</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"></path> </g></svg>
                    }
                />
                <TechItem
                    name="Tailwind CSS"
                    icon={
                        <svg className="fill-gray-950 dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>
                    }
                />
            </TechStack>
        </>
    );
}
