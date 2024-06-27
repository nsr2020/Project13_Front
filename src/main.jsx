import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MovieProvider from "./providers/MovieProvider.jsx";
import MoviesProvider from "./providers/MoviesProvider.jsx";
import MoviesSearchProvider from "./providers/MoviesSearchProvider.jsx";
import PlatformsProvider from "./providers/PlatformsProvider.jsx";
import MenuProvider from "./providers/MenuProvider.jsx";
import TrailerProvider from "./providers/TrailerProvider.jsx";
import UserProvider from "./providers/UserProvider.jsx";
import StartPageProvider from "./providers/StartPageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider>
    <StartPageProvider>
			<PlatformsProvider>
				<MoviesProvider>
					<MoviesSearchProvider>
						<MenuProvider>
							<MovieProvider>
								<TrailerProvider>
                  <UserProvider>
									<App />
                  </UserProvider>
								</TrailerProvider>
							</MovieProvider>
						</MenuProvider>
					</MoviesSearchProvider>
				</MoviesProvider>
			</PlatformsProvider>
      </StartPageProvider>
		</ChakraProvider>
	</BrowserRouter>
);
