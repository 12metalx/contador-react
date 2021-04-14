import ReactDOM from "react-dom";
import Contador from "./Contador";

import "./scss/main.scss";

const button = document.getElementById("init");

ReactDOM.render(<Contador/>,document.getElementById("app"));

