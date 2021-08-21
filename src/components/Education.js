import { EducationBlock } from "./EducationBlock";

export const Education = ()=>
    (
        <div className="h-1/3 border-t-2 border-gray-normal">
            <h1 className="anton text-3xl mt-4">EDUCATION</h1>
            <div className="flex flex-wrap">
                <EducationBlock 
                title="COMMUNICATION" 
                degree="BACHELORS DEGREE" 
                institution="OLD DOMINION UNIVERSITY" 
                location="NORFORK" 
                career="Human Communication"/>
                <EducationBlock 
                title="PHOTOGRAPHY" 
                degree="MASTERS DEGREE" 
                institution="OLD DOMINION UNIVERSITY" 
                location="NORFORK" 
                career="Free Art Photography"/>
            </div>
        </div>

    )