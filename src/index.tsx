import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/styles/animatiom/Theme.styled";
import { GlobalStyles } from "./components/styles/animatiom/GlobalStyles";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<ThemeProvider theme={myTheme}>
		<App />
		<GlobalStyles />
	</ThemeProvider>
);
