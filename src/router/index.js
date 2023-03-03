import Profile from "../pages/Profile";
import MapPage from "../pages/MapPage";
import Timer from "../pages/Timer";

export const routes = [
    { path: '/', element: <Profile/>, exact: true },
    { path: '/profile', element: <Profile/>, exact: true },
    { path: '/map', element: <MapPage />, exact: true },
    { path: '/timer', element: <Timer/>, exact: true }
]