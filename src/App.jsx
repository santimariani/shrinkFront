import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Home from "./routes/Home";
import AddUser, {action as addUserAction } from "./routes/AddUser";
import Users, {loader as userLoader} from "./routes/Users";
import SingleUser, {loader as singleUserLoader} from './routes/SingleUser';
// import AddUrl, {action as addUrlAction } from "./routes/AddUrl";
// import Urls, {loader as urlLoader} from "./routes/Urls";
// import SingleUrl, {loader as singleUrlLoader} from './routes/SingleUrl';

const router = createBrowserRouter([{
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/users',
      element: <Users />,
      loader: userLoader,
    },
    {
      path: '/users/:id',
      element: <SingleUser />,
      loader: singleUserLoader,
    },
    {
      path: '/users/add',
      element: <AddUser/>,
      action: addUserAction
    }
  ], 
}])

function App() {
  return <RouterProvider router={router} />
}

export default App
