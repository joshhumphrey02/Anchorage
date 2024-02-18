import { Provider } from "react-redux";
import { ThemeProvider } from "./components/theme/theme-provider";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./screens/home/Home";
import Category from "./screens/category/Category";
import Product from "./screens/product/Product";
import Search from "./screens/search/Search";
import Cart from "./screens/cart/Cart";
import Login from "./screens/login/login";
import Register from "./screens/registeration/Register";
import Account from "./screens/account/Account";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Home />,
	},
	{
		path: "/account",
		errorElement: <ErrorPage />,
		element: <Account />,
		children: [
			{
				path: ":ACategory",
				errorElement: <ErrorPage />,
				element: <Account />,
			},
		],
	},
	{
		path: "/collection",
		errorElement: <ErrorPage />,
		element: <Search />,
	},
	{
		path: "/cart",
		errorElement: <ErrorPage />,
		element: <Cart />,
	},
	{
		path: "/login",
		errorElement: <ErrorPage />,
		element: <Login />,
	},
	{
		path: "/register",
		errorElement: <ErrorPage />,
		element: <Register />,
	},
	{
		path: "/:category",
		errorElement: <ErrorPage />,
		element: <Category />,
	},
	{
		path: "/p/:product",
		errorElement: <ErrorPage />,
		element: <Product />,
	},
]);

function App() {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker
				.register("/ServiceWorker.js")
				.then((registration) => {
					console.log(
						"ServiceWorker registration successful with scope: ",
						registration.scope
					);
				})
				.catch((error) => {
					console.log("ServiceWorker registration failed: ", error);
				});
		});
	}
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Provider store={store}>
				<Toaster position="top-right" reverseOrder={true} />
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	);
}

export default App;

// const customerInfo = useAppSelector((state) => state.user);
// const dispatch = useAppDispatch();
