import "../pages/Skills.css";
import "../pages/Overall.css";
import ArtPageImg from "../media/Art_Page.png";
import StardewPageImg from "../media/Stardew_Page.png";
import WebDevPageImg from "../media/PortfolioWebsite.png";
import React, { useState } from 'react';

function Skills() {
    const [image, setImage] = useState(WebDevPageImg); 
    const [description, setDescription] = useState(<p>I am nearly finished with my associates degree in web design & development, starting 
        my batchlors in software engineering in the fall of 2024. I've had a lot of fun learning to write 
        scripts and HTML code for building my own websites and handing both front end and back end development.
            </p>);
    const [title, setTitle] = useState('Web Development');
    const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React', 'Python']);

    const handleButtonClick = (imageUrl, descriptionText, titleText, skillsList) => {
        setImage(imageUrl);
        setDescription(descriptionText);
        setTitle(titleText);
        setSkills(skillsList);
    };

    return (
        <div className='SkillsDisplay' id="skills">
            <div className="SkillsButtons">


                <button className="skills-buttons" onClick={() => {
                    handleButtonClick(
                        WebDevPageImg,
                        <p>I am nearly finished with my associates degree in web design & development, starting 
                            my batchlors in software engineering in the fall of 2024. I've had a lot of fun learning to write 
                            scripts and HTML code for building my own websites and handing both front end and back end development.
                        </p>,
                        'Web Development',
                        ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
                    );
                }}>
                    Web Dev
                </button>



                <button className="skills-buttons" onClick={() => {
                    handleButtonClick(
                        StardewPageImg,
                        <p>I am nearly finished with my associates degree in web design & development, starting 
                            my batchlors in software engineering in the fall of 2024. Attending LCSC has given me a lot 
                            of hands-on experience in the design process, from making wireframes and mockups to writing the 
                            actuall CSS of the site. 
                        </p>,
                        'Web Design',
                        ['Adobe Illustrator', 'Wordpress', 'Graphic Design']
                    );
                }}>
                    Web Design
                </button>




                <button className="skills-buttons" onClick={() => {
                    handleButtonClick(
                        ArtPageImg,
                        <p>I've been doing art since I was a kid and started taking it more sersiously around highschool. 
                        To better showcase my art, I have 
                        <a href="https://sites.google.com/lcmail.lcsc.edu/artportfolio/work?authuser=0" className="ArtLink"> an art portfolio </a>
                        that better showcases my work.</p>,
                        'Art',
                        ['Painting', 'Drawing', 'Digital Art', 'Character Design', 'Traditional Art']
                    );
                }}>
                    Art
                </button>
            </div>





            <div className="Title">{title}</div>

            <div className="SkillContent">
                <div className="SkillsList">
                    <div>{description}</div>

                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <img className="mainImage" alt="Main Image" src={image} style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
}

export default Skills;

