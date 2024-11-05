import React from "react";

import { eduText } from "../constants";

const Edu = () => {
    return (
        <section id="edu">
            <div className="edu__inner">
                <h2 className="edu__title">Education <em>교육</em></h2>
                <div className="edu__desc">
                  {eduText.map((edu, key) =>(
                    <div key={key}>
                        <span>{key+1}.</span>
                        <h3>{edu.title}</h3>
                        <p>{edu.desc}</p>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    );
};

export default Edu;