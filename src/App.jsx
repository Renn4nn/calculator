import { useState } from "react";
import { Button, Container, Box, Screen, ButtonDelete } from "./components";

function App() {
  const [number, setNumber] = useState("0");
  const [number2, setNumber2] = useState();
  const [select, setSelect] = useState("");
  const [result, setResult] = useState();

  const addNumber = (n) => {
    setNumber(prev => prev === "0" ? `${n}` : `${prev}${n}`);
  };

  const options = (o) => {
    if (["+", "-", "x", "/"].includes(o)) {
      setSelect(o);
      setNumber2(number);
      setNumber("0");
      return;
    }

    if (o === "=") {
      const num1 = parseFloat(number2);
      const num2 = parseFloat(number);
      let res = 0;

      if (select === "+") res = num1 + num2;
      else if (select === "-") res = num1 - num2;
      else if (select === "x") res = num1 * num2;
      else if (select === "/") {
        if (num2 === 0) {
          setResult("Divisão por zero");
          return;
        }
        res = num1 / num2;
      } else {
        setResult("Operação inválida");
        return;
      }

      const formatado = parseFloat(res.toFixed(3));
      setResult(formatado);
      setNumber(String(formatado));
      setNumber2();
      setSelect("");
      return;
    }

    if (o === "ce") {
      setNumber("0");
      setResult();
      setNumber2();
      setSelect("");
      console.clear();
      return;
    }

    if (o === ".") {
      if (!number.includes(".")) {
        setNumber(prev => `${prev}.`);
      }
      return;
    }
  };

  return (
    <Container>
      <Box>
        <Screen>
          <p>{result}</p>
          <p>
            {number2} {select} {number}
          </p>
        </Screen>

        <Button onClick={() => addNumber(7)}>7</Button>
        <Button onClick={() => addNumber(8)}>8</Button>
        <Button onClick={() => addNumber(9)}>9</Button>
        <Button onClick={() => options("/")}>/</Button>

        <br />

        <Button onClick={() => addNumber(4)}>4</Button>
        <Button onClick={() => addNumber(5)}>5</Button>
        <Button onClick={() => addNumber(6)}>6</Button>
        <Button onClick={() => options("x")}>X</Button>

        <br />

        <Button onClick={() => addNumber(1)}>1</Button>
        <Button onClick={() => addNumber(2)}>2</Button>
        <Button onClick={() => addNumber(3)}>3</Button>
        <Button onClick={() => options("-")}>-</Button>

        <br />

        <Button onClick={() => addNumber(0)}>0</Button>
        <Button onClick={() => options(".")}>.</Button>
        <Button onClick={() => options("+")}>+</Button>
        <Button onClick={() => options("=")}>=</Button>

        <br />

        <ButtonDelete onClick={() => options("ce")}>CE</ButtonDelete>
      </Box>
    </Container>
  );
}

export default App;
