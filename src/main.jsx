import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MoviesSearchProvider from "./providers/MoviesSearchProvider.jsx";
import MenuProvider from "./providers/MenuProvider.jsx";
import FormPostProvider from "./providers/FormPostProvider.jsx";
import FormPutProvider from "./providers/FormPutProvider.jsx";
import MoviesProvider from "./providers/MoviesProvider.jsx";
import MovieProvider from "./providers/MovieProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider>
		<MoviesProvider>
		<MovieProvider>
			<MoviesSearchProvider>
				<MenuProvider>
					<FormPostProvider>
						<FormPutProvider>
							<App />
						</FormPutProvider>
					</FormPostProvider>
				</MenuProvider>
			</MoviesSearchProvider>
			</MovieProvider>
			</MoviesProvider>
		</ChakraProvider>
	</BrowserRouter>
);
