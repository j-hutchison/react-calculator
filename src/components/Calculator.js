import React, { useState } from "react";
import classes from "./Calculator.module.css";

const Calculator = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");
	const [operator, setOperator] = useState("");

	const calculateResult = (e) => {
		e.preventDefault();

		const resultNumberOnly = eval(result + input);
		const operator = e.target.value;

		setOperator(() => {
			return operator;
		});

		setResult(() => result + input + operator);
		setInput(() => resultNumberOnly);
	};

	const handleInputChange = (e) => {
		console.log(e.target.value);
		setInput(() => e.target.value);

		operator !== "" ? setInput(() => "") : setInput(() => e.target.value);
	};

	const handleInputClick = (e) => {
		const inputField = e.target;
		const end = inputField.value.length;

		inputField.setSelectionRange(end, end);
		inputField.focus();
	};

	const handleOperatorClick = (e) => {
		e.preventDefault();
		let newOperator = e.target.value;

		console.log(`Handle click newOperator: ${newOperator}`);

		if (operator !== "=") {
			const resultNumberOnly = eval(result + input);

			setResult(() => {
				return result === ""
					? input + newOperator
					: resultNumberOnly + newOperator;
			});
			setInput(() => resultNumberOnly);
		} else {
			setResult(() => {
				return input + newOperator;
			});
		}
		setOperator(() => {
			return newOperator;
		});
	};

	const handleCalcBtnClick = (e) => {
		e.preventDefault();
		const thisInput = e.target.value;
		console.log(`Hanlde Number Click ${thisInput}`);

		console.log(result);
		console.log(operator);

		if (operator !== "") {
			setInput(() => thisInput);
			setOperator(() => "");
		} else {
			setInput(() => input + thisInput);
		}
	};

	const handleClearBtnClick = (e) => {
		e.preventDefault();

		setOperator(() => "");
		setResult(() => "");
		setInput(() => "");
	};

	return (
		<form className={classes.calculator}>
			<input
				type="text"
				className={`${classes["tile-1x4"]} ${classes["calculator-input-calc"]}`}
				value={result}
				disabled
			/>
			<input
				type="text"
				className={`${classes["tile-1x4"]} ${classes["calculator-input"]}`}
				onChange={handleInputChange}
				onClick={handleInputClick}
				value={input}
				disabled
			/>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="7"
				onClick={handleCalcBtnClick}
			>
				7
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="8"
				onClick={handleCalcBtnClick}
			>
				8
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="9"
				onClick={handleCalcBtnClick}
			>
				9
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
				value="/"
				onClick={handleOperatorClick}
			>
				/
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="4"
				onClick={handleCalcBtnClick}
			>
				4
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="5"
				onClick={handleCalcBtnClick}
			>
				5
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="6"
				onClick={handleCalcBtnClick}
			>
				6
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
				value="*"
				onClick={handleOperatorClick}
			>
				X
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="1"
				onClick={handleCalcBtnClick}
			>
				1
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="2"
				onClick={handleCalcBtnClick}
			>
				2
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="3"
				onClick={handleCalcBtnClick}
			>
				3
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
				value="+"
				onClick={handleOperatorClick}
			>
				+
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="."
				onClick={handleCalcBtnClick}
			>
				.
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="0"
				onClick={handleCalcBtnClick}
			>
				0
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
				value="="
				onClick={calculateResult}
			>
				=
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
				value="-"
				onClick={handleOperatorClick}
			>
				-
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-clear"]} ${classes["tile-1x4"]}`}
				onClick={handleClearBtnClick}
			>
				Clear
			</button>
		</form>
	);
};

export default Calculator;
