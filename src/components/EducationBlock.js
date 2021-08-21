export const EducationBlock = ({title,degree,institution,location,career})=>
    (
        <div className="border border-gray-normal p-2 w-2/5 mt-2 mr-4">
            <h3 className="anton ">{title}</h3>
            <p className="robotoCondensedBold text-sm mt-2">{degree}, <span>{institution}</span>, <span>{location}</span></p>
            <p className="robotoCondensed">{career}</p>
        </div>
    )