import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./components/Form";
import FormControl from "./components/FormControl";
import Select from "./components/Select";

function App() {
  // const [totalBill, setTotalBill] = useState("");
  // const [tipPercent, setTipPercent] = useState("");
  // const [partySize, setPartySize] = useState("");
  // const [tipAmount, setTipAmount] = useState("0.00");
  // const [totalWithTip, setTotalWithTip] = useState("0.00");
  // const handleInput = (setVal, targetVal) => {
  //   setVal(targetVal);
  // };

  // const calculateTipAndTotal = e => {
  //   e.preventDefault();
  //   let tipFactor = parseFloat(tipPercent) / 100;
  //   if (tipFactor) {
  //     let tipAmount = (totalBill * tipFactor).toFixed(2);
  //     setTipAmount(tipAmount);
  //     let previousTotal = parseFloat(totalBill);
  //     let newTotal = (previousTotal + parseFloat(tipAmount)).toFixed(2);
  //     setTotalWithTip(newTotal);
  //   }
  // };

  // useEffect(() => {
  //   // effect
  //   // return () => {
  //   console.log(totalBill, tipPercent, partySize);

  //   let totalBeforeTip = parseFloat(totalBill);
  //   let tipFactor = parseInt(tipPercent) / 100 + 1;
  //   if (!totalBeforeTip || !tipFactor) {
  //   } else {
  //     let totalAfterTip = totalBeforeTip * tipFactor;
  //     totalAfterTip = totalAfterTip.toFixed(2);
  //     setTotalWithTip(totalAfterTip);
  //   }
  //   // };
  // }, [totalBill, tipPercent, partySize]);

  // const optionData = [
  //   "Select Tip Percentage",
  //   "10%",
  //   "15%",
  //   "20%",
  //   "25%",
  //   "30%"
  // ];

  return (
    <div className="App">
      <header className="App-header">QOMPLX CHALLENGE</header>
      <div class="container-fluid">
        <h1>TIP CALCULATOR</h1>
        <div class="card">
          <div className="card-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
