export const EducationBlock = ({title,degree,institution,location,career})=>
    (
        <div>
            <h3>{title}</h3>
            <p>{degree}, <span>{institution}</span>, <span>{location}</span></p>
            <p>{career}</p>
        </div>
    )