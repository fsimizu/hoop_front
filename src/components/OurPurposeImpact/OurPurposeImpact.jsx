import React from 'react'
import "./ourPurposeImpact.css"

const OurPurposeImpact = () => {
  return (
    <>
      <section id='ourPurpose' className="row purpose">
        <div className="col-12 col-md-6 contPurpose">
          <h2 className='section__header'>Our purpose</h2>
          <p className="text-main">From 2012 up until now, HOOP has supported more than 230 families. 120 students are receiving english and/or coding classes, the average attendance to the classes is 80%.</p>
          <p className="text-main">99 families are receiving psychological support by our mental health team made of 6 members.</p>
          <p className="text-main">Over the years, more than 400 volunteers, national & international, have helped us in our projects and we have launched 2 social companies enabling 25 to get trained in professional knitting and receive an additional income.</p>
        </div>
        <div className="col-12 col-md-6 imgPurpose">
          <iframe width="530" height="315" src="https://www.youtube.com/embed/pOmbGOzIygI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </section>
      <section id='ourImpact' className="row impact">
        <div className="col-12 col-md-6 imgImpact">
          <iframe width="530" height="315" src="https://www.youtube.com/embed/axkhCK__cVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="col-12 col-md-6 contImpact">
          <h2 className='section__header'>Our impact</h2>

          <p className="text-main">From 2012 up until now, HOOP has supported more than 230 families. 120 students are receiving english and/or coding classes, the average attendance to the classes is 80%.</p>

          <p className="text-main">99 families are receiving psychological support by our mental health team made of 6 members.</p>

          <p className="text-main">Over the years, more than 400 volunteers, national & international, have helped us in our projects and we have launched 2 social companies enabling 25 to get trained in professional knitting and receive an additional income.</p>
        </div>
      </section>
    </>
  )
}

export default OurPurposeImpact