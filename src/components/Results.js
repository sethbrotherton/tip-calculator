import React from "react";

const Results = props => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <p>
        <span className="result-label">Tip:</span>
        <span className="result-calculation">
          ${numberWithCommas(props.tip)}
        </span>
      </p>
      <p>
        <span className="result-label">Total:</span>
        <span className="result-calculation">
          ${numberWithCommas(props.total)}
        </span>
      </p>
    </div>
  );
};

export default Results;
