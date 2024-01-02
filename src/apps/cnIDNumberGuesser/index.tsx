import React from "react";
// @ts-expect-error ts-migrate(2305) FIXME: Module '"mdui"' has no exported member 'alert'.
import { snackbar, alert as mduiAlert } from "mdui";
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/socket.io-client` if it ex... Remove this comment to see the full error message
import io from "socket.io-client";
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/qrcode` if it exists or ad... Remove this comment to see the full error message
import saveFile from "../../utils/fileSaver";
import { FileInput } from "mdui-in-react";
import { Input, Button } from "mdui-in-react";

// import React, { useState } from "react";
// import "./style.css"; // 确保你的样式文件在正确的路径

const App = () => {
  const [idInput, setIdInput] = useState("");
  const [result, setResult] = useState("");

  const isIDFormatValid = (id) => {
    const regex = /^[0-9*]{17}[0-9Xx*]$/;
    return regex.test(id);
  };

  const checkIDChecksum = (id) => {
    const factors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const remainders = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let sum = 0;

    for (let i = 0; i < 17; i++) {
      sum += parseInt(id[i]) * factors[i];
    }

    const remainder = sum % 11;
    return id[17].toUpperCase() === remainders[remainder];
  };

  const isIDValid = (id) => {
    if (!isIDFormatValid(id)) return false;
    return checkIDChecksum(id);
  };

  const guessID = (id) => {
    let possibleIDs = [''];
    for (let i = 0; i < id.length; i++) {
      let newPossibleIDs = [];
      if (id[i] === '*') {
        for (let j = 0; j < possibleIDs.length; j++) {
          for (let digit = 0; digit <= 9; digit++) {
            newPossibleIDs.push(possibleIDs[j] + digit.toString());
          }
        }
      } else {
        for (let j = 0; j < possibleIDs.length; j++) {
          newPossibleIDs.push(possibleIDs[j] + id[i]);
        }
      }
      possibleIDs = newPossibleIDs;
    }

    return possibleIDs.filter(isIDValid);
  };

  const validateAndGuessID = () => {
    if (!isIDFormatValid(idInput)) {
      setResult('身份证号码格式不正确。');
      return;
    }

    if (isIDValid(idInput)) {
      setResult('有效的身份证号码。');
    } else {
      const guessedIDs = guessID(idInput);
      if (guessedIDs.length > 0) {
        setResult('可能的有效身份证号码: ' + guessedIDs.join(', '));
      } else {
        setResult('未找到有效的身份证号码。');
      }
    }
  };

  const downloadResults = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'guessedIDs.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h1>GuessID</h1>
      <input
        type="text"
        id="idInput"
        placeholder="请输入身份ID"
        value={idInput}
        onChange={(e) => setIdInput(e.target.value)}
      />
      <button onClick={validateAndGuessID}>GuessID</button>
      <button onClick={downloadResults}>Download</button>
      <p id="result">{result}</p>
    </div>
  );
};

export default App;
