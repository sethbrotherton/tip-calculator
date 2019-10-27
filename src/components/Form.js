import React, { useState } from "react";
import FormControl from "./FormControl";
import Select from "./Select";
import Results from "./Results";

const Form = props => {
  const [totalBill, setTotalBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [partySize, setPartySize] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalWithTip, setTotalWithTip] = useState("0.00");
  const [totalError, setTotalError] = useState("");
  const [tipError, setTipError] = useState("");
  const [splitIsChecked, setSplitIsChecked] = useState(false);
  const [partyOptions, setPartyOptions] = useState([]);
  const [partyOptionVal, setPartyOptionVal] = useState("");
  const [partyError, setPartyError] = useState("");

  const makeArrayOfNums = num => {
    let arr = ["Select Number of Party"];
    for (let i = 1; i <= num; i++) {
      arr.push(i + " out of " + num);
    }
    setPartyOptions(arr);
    return arr;
  };

  const resetErrors = () => {
    setTotalError("");
    setTipError("");
    setPartyError("");
  };

  const handleInput = (setVal, targetVal) => {
    setVal(targetVal);
  };

  const handleNaNs = val => {
    if (isNaN(val)) {
      val = 0.0;
    }
    return val; //.toFixed(2);
  };

  const isValid = () => {
    resetErrors();
    let totalCopy = totalBill.replace(/,/g, "");
    totalCopy = parseFloat(totalCopy);
    totalCopy = handleNaNs(totalCopy);
    if (
      totalCopy > 0 &&
      (tipPercent.length && tipPercent.indexOf("Select") === -1)
    ) {
      if (partySize > 1 && splitIsChecked) {
        if (!(parseInt(partyOptionVal) > 0)) {
          setPartyError("Please select number of party");
          return false;
        }
      }
      resetErrors();
      return true;
    }
    if (totalCopy <= 0) {
      setTotalError("Please enter valid total amount");
    }
    if (!(tipPercent.length && tipPercent.indexOf("Select") === -1)) {
      setTipError("Please select tip percentage");
    }
    if (partySize > 1 && splitIsChecked) {
      setPartyError("Please select number of party");
    }
    return false;
  };

  const calculateTipAndTotal = e => {
    e.preventDefault();
    if (!isValid()) {
      return false;
    }
    let tipFactor = parseFloat(tipPercent) / 100 || 0.0;
    let totalBillAsNumber = totalBill.replace(/\$/g, "").replace(/,/g, "");
    totalBillAsNumber = parseFloat(totalBillAsNumber) || 0.0;
    let localTotalBill = handleNaNs(totalBillAsNumber);
    totalBillAsNumber = totalBillAsNumber.toFixed(2);
    let tipAmount = totalBillAsNumber * tipFactor;
    tipAmount = handleNaNs(tipAmount);
    tipAmount = tipAmount.toFixed(2);
    if (tipFactor > 0 && totalBillAsNumber > 0) {
      setTipAmount(tipAmount);
      let previousTotal = parseFloat(localTotalBill);
      let newTotal = (previousTotal + parseFloat(tipAmount)).toFixed(2);
      setTotalWithTip(newTotal);
    } else if (tipFactor > 0) {
      setTipAmount(tipAmount);
      setTotalWithTip("0.00");
    } else if (totalBillAsNumber) {
      setTipAmount("0.00");
      setTotalWithTip(totalBillAsNumber);
    } else {
      setTipAmount("0.00");
      setTotalWithTip("0.00");
    }
    if (partySize > 1 && splitIsChecked) {
      let parsedPartySize = parseFloat(partySize);
      let parsedSizeOption = parseFloat(partyOptionVal);
      parsedPartySize = handleNaNs(parsedPartySize);
      parsedSizeOption = handleNaNs(parsedSizeOption);
      let splitTip = ((parsedSizeOption * tipAmount) / parsedPartySize).toFixed(
        2
      );
      let splitTotal = (
        (parsedSizeOption * totalBillAsNumber) /
        parsedPartySize
      ).toFixed(2);
      splitTotal = (parseFloat(splitTip) + parseFloat(splitTotal)).toFixed(2);
      setTipAmount(splitTip);
      setTotalWithTip(splitTotal);
    }
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
        className="form-control"
        type="text"
        onChange={e => handleInput(setTotalBill, e.target.value)}
        placeholder="Total Bill"
        value={totalBill}
        errorMessage={"Please Enter Valid Total Bill"}
        error={totalError}
      >
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
      </FormControl>
      <Select
        data={optionData}
        onChange={e => handleInput(setTipPercent, e.target.value)}
        value={tipPercent}
        error={tipError}
      ></Select>
      <FormControl
        className="form-control"
        type="text"
        onChange={e => {
          handleInput(setPartySize, e.target.value);
          makeArrayOfNums(partySize);
        }}
        placeholder="Party Size"
        value={partySize}
      />
      {partySize > 1 ? (
        <FormControl
          label="Split Check"
          type="checkbox"
          onChange={() => {
            setSplitIsChecked(!splitIsChecked);
            makeArrayOfNums(partySize);
          }}
        />
      ) : null}
      {partySize > 1 && splitIsChecked ? (
        <Select
          data={partyOptions}
          onChange={e => handleInput(setPartyOptionVal, e.target.value)}
          error={partyError}
        />
      ) : null}
      <div className="btn-container">
        <button
          onClick={e => calculateTipAndTotal(e)}
          className="btn btn-secondary"
        >
          Calculate Tip
        </button>
      </div>
      <Results tip={tipAmount} total={totalWithTip} />
    </form>
  );
};

export default Form;
