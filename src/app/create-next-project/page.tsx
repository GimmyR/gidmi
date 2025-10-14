import CodeSnippet from "@/components/code-snippet";
import CommandSnippet from "@/components/command-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";
import { code1 } from "./code-1";
import { code2 } from "./code-2";

export const metadata: Metadata = {
    title: 'Create Next project - Gidmi'
}

export default async function CreateNextProjectPage() {
    const previousLink = {
        title: "Next & Bootstrap",
        route: "/next-bootstrap"
    };

    const nextLink = { 
        title: "Use Bootstrap", 
        route: "/use-bootstrap"
    };

	return (
		<Guide title="Create Next project" previous={previousLink} next={nextLink}>
            <p>After creating a directory for your project, move in it and open a terminal to run this command :</p>
            <CommandSnippet>npx create-next-app@latest ./</CommandSnippet>
            <p>This is what it should look like :</p>
            <img src="/images/screenshot-1.png" className="img-fluid mb-5" alt="screenshot-1"/>
            <span className="d-block">I recommend that you make the same choices as I did, namely (for the most important) :</span>
            <ol type="1" className="mb-4">
                <li>
                    <span>Typescript (yes) :</span> very important to ensure the type of objects we&apos;ll be handling 
                </li>
                <li> 		 		
                    <span>Tailwind CSS (no) :</span> we&apos;ll use <strong>Bootstrap</strong> 	 	
                </li> 	 	
                <li> 		 		
                    <span>&apos;src/&apos; directory (yes) :</span> important for a well-organized project 	 	
                </li> 	 	
                <li> 		 		
                    <span>App router (yes) :</span> it&apos;s much more intuitive than <strong>Page router</strong> 	 	
                </li> 	 	
                <li> 		 		
                    <span>Customize the import alias (no) :</span> the use of <strong>‘@/*’</strong> will suit us fine 	 	
                </li>  
            </ol>
            <span className="d-block">Now, delete these files :</span>
            <ul className="mb-4"> 	 	
                <li> 		 		
                    <i>src/app/<strong>globals.css</strong></i> 	 	
                </li> 	 	
                <li> 		 		
                    <i>src/app/<strong>page.module.css</strong></i> 	
                </li>  
            </ul>
            <p>Clean up <i>src/app/<strong>layout.tsx</strong></i> to get something like this :</p>
            <CodeSnippet language="tsx" code={code1}/>
            <p>Edit <i>src/app/<strong>page.tsx</strong></i> to get the most minimalist code to start with like this :</p>
            <CodeSnippet language="tsx" code={code2}/>
            <p>Run the following command to start the application and to see if everything works fine :</p>
            <CommandSnippet>npm run dev</CommandSnippet>
        </Guide>
	);
}