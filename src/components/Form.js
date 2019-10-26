import React, { useState } from "react";
import FormControl from "./FormControl";
import Select from "./Select";

const Form = props => {
  const [totalBill, setTotalBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [partySize, setPartySize] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalWithTip, setTotalWithTip] = useState("0.00");

  const handleInput = (setVal, targetVal) => {
    setVal(targetVal);
  };

  const calculateTipAndTotal = e => {
    e.preventDefault();
    let tipFactor = parseFloat(tipPercent) / 100 || 0.0;
    let totalBillAsNumber = parseFloat(totalBill) || 0.0;
    if (isNaN(totalBillAsNumber)) {
      totalBillAsNumber = 0.0;
    }
    totalBillAsNumber.toFixed(2);
    let tipAmount = totalBill * tipFactor;
    if (isNaN(tipAmount)) {
      tipAmount = 0.0;
    }
    tipAmount = tipAmount.toFixed(2);
    if (tipFactor > 0 && totalBillAsNumber > 0) {
      setTipAmount(tipAmount);
      let previousTotal = parseFloat(totalBill);
      let newTotal = (previousTotal + parseFloat(tipAmount)).toFixed(2);
      setTotalWithTip(newTotal);
      console.log(1);
    } else if (tipFactor > 0) {
      setTipAmount(tipAmount);
      setTotalWithTip("0.00");
      console.log(2);
    } else if (totalBillAsNumber) {
      setTipAmount("0.00");
      setTotalWithTip(totalBillAsNumber);
      console.log(3);
    } else {
      setTipAmount("0.00");
      setTotalWithTip("0.00");
      console.log(4);
    }
    console.log("tip factor ", tipFactor);
    console.log("total bil as number", totalBillAsNumber);
    console.log("tip amount", tipAmount);
  };

  const optionData = [
    "Select Tip Percentage",
    "10%",
    "15%",
    "20%",
    "25%",
    "30%"
  ];

  return (
    <form>
      <FormControl
        type="text"
        onChange={e => handleInput(setTotalBill, e.target.value)}
        placeholder="Total Bill"
        value={totalBill}
      />
      <Select
        data={optionData}
        onChange={e => handleInput(setTipPercent, e.target.value)}
        value={tipPercent}
      ></Select>
      <FormControl
        type="text"
        onChange={e => handleInput(setPartySize, e.target.value)}
        placeholder="Party Size"
        value={partySize}
      />
      <div className="btn-container">
        <button
          onClick={e => calculateTipAndTotal(e)}
          className="btn btn-secondary"
        >
          Calculate Tip
        </button>
      </div>
      <div>
        <p>
          <span className="result-label">Tip:</span>
          <span className="result-calculation">${tipAmount}</span>
        </p>
        <p>
          <span className="result-label">Total:</span>
          <span className="result-calculation">${totalWithTip}</span>
        </p>
      </div>
    </form>
  );
};

export default Form;
