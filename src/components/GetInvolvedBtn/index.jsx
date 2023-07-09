import React from "react";
import './getInvolvedBtn.css';

export function GetInvolvedBtn() {
  return (
      <div className="getInvolvedBtn__container" id="getInvolvedBtn">
        <img src="/images/getInvolved-btn-left.svg" alt="" />
        <a href="/get-involved" className="btn btn-primary text-main text-grey"><strong>Get involved</strong></a>
        <img src="/images/getInvolved-btn-right.svg" alt="" />
      </div>
  );
}