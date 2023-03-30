import './UnderConstruction.css';
import React from 'react';

function UnderConstruction(props) {
  return (
    <div className="under-construction">
      <div className="under-construction-section">
        <div className="under-construction-section-top">
          Розділ "{props.section}" тимчасово недоступний
        </div>
        <div className="under-construction-section-loader">
          <span className="section-loader-top"></span>
          <span className="section-loader-bottom"></span>
        </div>
        <div className="under-construction-section-bottom">
          Ми натхненно працюємо над розробкою нового функціоналу,<br />
          щоб найближчим часом порадувати вас<br /> новими можливостями та цікавими фічами!
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
