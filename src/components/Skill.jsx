import React from "react";

import skill from "../assets/img/skill.png"

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">My Skill <em>스킬</em></h2>
                <div className="skill__desc">
                        <img src={skill}></img>
                </div>
            </div>
        </section>
    );
};

export default Skill;