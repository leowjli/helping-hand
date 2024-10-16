import React from "react";
import { Link } from "react-router-dom";

interface ResCardProps {
    link: string;
    img: string;
    alt: string,
    title: string;
}

const ResCard: React.FC<ResCardProps> = (prop) => {
    return (
        <div className="card">
            <section className="box">
                <Link to={prop.link} className="image featured">
                    <img src={prop.img} alt={prop.alt} />
                    <h2>{prop.title}</h2>
                </Link>
            </section>
        </div>
    );
}

const Resources = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        // Resources
        <section ref={ref}>
            <div className="row">
                <ResCard link={"https://partyrock.aws/u/jgashler/6ojuTDRiH/Community-Care-Map"} img={"../../images/food.png"} alt={"food icon"} title={"Food"} />
                <ResCard link={"https://partyrock.aws/u/jgashler/6ojuTDRiH/Community-Care-Map"} img={"../../images/Shelter.png"} alt={"shelter icon"} title={"Shelter"} />
                <ResCard link={"https://partyrock.aws/u/jgashler/6ojuTDRiH/Community-Care-Map"} img={"../../images/water.png"} alt={"bottled water icon"} title={"Water"} />
                <ResCard link={"https://partyrock.aws/u/jgashler/6ojuTDRiH/Community-Care-Map"} img={"../../images/medicine.png"} alt={"Red Cross icon"} title={"Medical Care"} />
                <ResCard link={"https://partyrock.aws/u/jgashler/6ojuTDRiH/Community-Care-Map"} img={"../../images/other_support.png"} alt={"box with hearts icon"} title={"Volunteer & Donate"} />
                <ResCard link={"https://partyrock.aws/u/jgashler/6ojuTDRiH/Community-Care-Map"} img={"../../images/clothing.png"} alt={"additional resources pants icon"} title={"Additional Resources"} />
            </div>
        </section>
    );
});

export default Resources;