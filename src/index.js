import React from "react";
// import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

// import App from "./App";
import Canvas from "./canvas";
import Main from "./main";

import "./css/index.css";
import "./css/starwarsintro.css";
import "./css/App.css";
import "./css/lightSaber.css";

// ReactDOM.render(
// 	<React.StrictMode>
// 		{/* <App /> */}
// 		<Canvas />
// 		<Main />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<Canvas />
		<Main />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
