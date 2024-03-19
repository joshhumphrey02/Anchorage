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
import Details from "./screens/account/Details";
import CustomerOrders from "./screens/account/CustomerOrders";
import SavedItems from "./screens/account/SavedItems";
import Reviews from "./screens/account/Reviews";
import RecentlyViewed from "./screens/account/RecentlyViewed";
import InviteFriends from "./screens/account/InviteFriends";
import Settings from "./screens/account/Settings";
import Others from "./screens/account/Others";

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
				path: "/account",
				element: <Details />,
			},
			{
				path: "orders",
				element: <CustomerOrders />,
			},
			{
				path: "saved-items",
				element: <SavedItems />,
			},
			{
				path: "reviews",
				element: <Reviews />,
			},
			{
				path: "recent-view",
				element: <RecentlyViewed />,
			},
			{
				path: "invite-friends",
				element: <InviteFriends />,
			},
			{
				path: "setting",
				element: <Settings />,
			},
			{
				path: "/account/:category",
				element: <Others />,
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
	// if ("serviceWorker" in navigator) {
	// 	window.addEventListener("load", () => {
	// 		navigator.serviceWorker
	// 			.register("/ServiceWorker.js")
	// 			.then((registration) => {
	// 				console.log(
	// 					"ServiceWorker registration successful with scope: ",
	// 					registration.scope
	// 				);
	// 			})
	// 			.catch((error) => {
	// 				console.log("ServiceWorker registration failed: ", error);
	// 			});
	// 	});
	// }
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
