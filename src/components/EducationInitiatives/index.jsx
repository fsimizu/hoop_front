import React from "react";
import './educationInitiatives.css';

export function EducationInitiatives() {
    return (
        <div className="educationInitiatives__container">
            <h2 className="section__header">Our education initiatives</h2>
            <img className="section__underline" src="/images/underline.svg" alt="" />


            <div className="educationInitiatives__cards justify-content-center">
                <div className="card">
                    <div className="educationInitiatives__card-content overflow-hidden" id="educationInitiatives_card1">
                        <h2>Primary & Secondary education for adults</h2>
                        <div className="educationInitiatives__border">
                            <p>We value education and encourage the mothers in their community to pursue the completion of their education alongside CEBA Micaela Bastidas to ensure better working opportunities.</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="educationInitiatives__card-content overflow-hidden" id="educationInitiatives_card2">
                        <h2>The Coding Kuska project</h2>
                        <div className="educationInitiatives__border">
                        <p>"Kuska" mean together in quechua and through that project, HOOP enables members of the community to learn about programming, so they can broaden their horizons and seek a better future.</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="educationInitiatives__card-content overflow-hidden" id="educationInitiatives_card3">
                        <h2></h2>
                        <div className="educationInitiatives__border">
                        <p>We accompany the children of the community through their school tasks.</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="educationInitiatives__card-content overflow-hidden" id="educationInitiatives_card4">
                        <h2>English with HOOP</h2>

                        <div className="educationInitiatives__border">
                        <p>We offer daily english classes to students aged from 6 to 17 years old that strengthen their knowledge, expose them to new cultures and give them an edge in life.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}