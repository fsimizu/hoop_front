import React from "react";
import './heroCommon.css';

export function HeroCommon( {background, title} ) {
    const containerStyle = {
        "--background": `url(${background})`,
      };

    return (
        <div className="heroCommon__container p-5 bg-image" style={containerStyle}>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                        <div className="col-lg-8">
                            <h4 className="mb-3 heroCommon__title">{title}</h4>
                        </div>
                </div>
            </div>
        </div>
)}