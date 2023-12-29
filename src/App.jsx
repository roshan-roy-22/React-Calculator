import { useState } from "react";
import "./App.css";

function App() {
  const [acc, setAcc] = useState("");
  const [total, setTotal] = useState("");
  function ClearAll() {
    setTotal("");
    setAcc("");
  }
  function AddNumber(num) {
    if (total.length <= 8) {
      setTotal(total + num);
    }
  }
  // console.log(total.split(""));
  function AddAction(sinal) {
    if (total == "") {
      return;
    } else if (total.split("")[total.length - 1] == ".") {
      setAcc(acc + total + "0" + ` ${sinal} `);
      setTotal("");
    } else {
      setAcc(acc + total + ` ${sinal} `);
      setTotal("");
    }
  }

  function AddDot() {
    if (total.length == 0) {
      setTotal("0.");
    } else if (total.split("")[total.length - 1] == ".") {
      return;
    } else {
      setTotal(total + ".");
    }
  }
  function Result() {
    // Combine accumulated expression and current total into a string
    var result = String(acc + total)
      .replace("÷", "/")
      .replace("x", "*");

    // Evaluate the mathematical expression using eval()
    result = String(eval(result)).substring(0, 9);

    // Set the calculated result as the new total and reset the accumulated expression
    setTotal(result);
    setAcc("");
  }

   // Function to remove the last character from a string
   function removeLastCharacter(str) {
    return str.slice(0, -1);
}


function RemoveLastCharacter() {
    setTotal(removeLastCharacter(total));
}

  return (
    <div className="calculator bg-[#121212]">
      <div className="visor">
        <div className="acc">{acc}</div>
        <div className="total">{total}</div>
      </div>
      <div className="content">
        <input
          type="button"
          className="button act bg-[#212121]"
          value="CE"
          onClick={() => setTotal("")}
        />
        <input
          type="button"
          className="button act bg-[#212121]"
          value="C"
          onClick={() => ClearAll()}
        />
        <input type="button" className="button action" value="←" onClick={RemoveLastCharacter} />
        <input
          type="button"
          className="button act bg-[#212121]"
          value="÷"
          onClick={() => AddAction("÷")}
        />
       
        <input
          type="button"
          className="button bg-[#535353]"
          value="7"
          onClick={() => AddNumber("7")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="8"
          onClick={() => AddNumber("8")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="9"
          onClick={() => AddNumber("9")}
        />
         <input
          type="button"
          className="button act bg-[#212121]"
          value="x"
          onClick={() => AddAction("x")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="4"
          onClick={() => AddNumber("4")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="5"
          onClick={() => AddNumber("5")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="6"
          onClick={() => AddNumber("6")}
        />
         <input
          type="button"
          className="button act bg-[#212121]"
          value="-"
          onClick={() => AddAction("-")}
        />
       
        <input
          type="button"
          className="button bg-[#535353]"
          value="1"
          onClick={() => AddNumber("1")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="2"
          onClick={() => AddNumber("2")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="3"
          onClick={() => AddNumber("3")}
        />
         <input
          type="button"
          className="button act bg-[#212121]"
          value="+"
          onClick={() => AddAction("+")}
        />
        <input
          type="button"
          className="button zero bg-[#535353]"
          value="0"
          onClick={() => AddNumber("0")}
        />
        <input
          type="button"
          className="button bg-[#535353]"
          value="."
          onClick={() => AddDot()}
        />
        <input
          type="button"
          className="button equal bg-[#1db954]"
          value="="
          onClick={() => Result()}
        />
      </div>
    </div>
  );
}

export default App;
