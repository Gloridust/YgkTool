import React, { useState } from "react";
import { snackbar, alert as mduiAlert } from "mdui";
// 确保以下模块被正确安装和配置
import io from "socket.io-client";
import saveFile from "../../utils/fileSaver";
import { FileInput, Input, Button } from "mdui-in-react";
import "./style.css"; // 确保样式与 mdui-in-react 组件兼容

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
      mduiAlert('错误', '身份证号码格式不正确');
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
      <Input 
        type="text"
        label="请输入身份ID"
        value={idInput}
        onChange={(e) => setIdInput(e.target.value)}
      />
      <Button raised onClick={validateAndGuessID}>GuessID</Button>
      <Button raised onClick={downloadResults}>Download</Button>
      <p id="result">{result}</p>
    </div>
  );
};

export default App;
