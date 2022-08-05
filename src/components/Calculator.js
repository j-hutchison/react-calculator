import React from "react";
import classes from "./Calculator.module.css";

const Calculator = () => {
	return (
		<form className={classes.calculator}>
			<input
				type="text"
				className={`${classes["tile-1x4"]} ${classes["calculator-input"]}`}
			/>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				7
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				8
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				9
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
			>
				/
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				4
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				5
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				6
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
			>
				X
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				1
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				2
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				3
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
			>
				+
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				.
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				0
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-num"]} ${classes["tile-1x1"]}`}
			>
				=
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-operator"]} ${classes["tile-1x1"]}`}
			>
				-
			</button>
			<button
				className={`${classes["calculator-btn"]} ${classes["calculator-btn-clear"]} ${classes["tile-1x4"]}`}
			>
				Clear
			</button>
		</form>
	);
};

export default Calculator;
