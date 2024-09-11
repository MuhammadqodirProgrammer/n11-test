import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
    Routes,

} from "react-router-dom";
import { Navigate, useRouteError } from "react-router"
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import App from "../App";


function ErrorBoundary({ children }) {
    let error = useRouteError();
    console.log(error.message, "binni error");
    return <div className="border border-red-500 ">Dang! Xato yuz berdi. sizni hatoyingiz {error.message}  </div>;
}
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <ErrorBoundary />,
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);


// export const router = createBrowserRouter(
//     // createRoutesFromElements(
//     //         <>
//     //             <Route path='/' element={<Home />} />
//     //             <Route path='/news' element={<News />} >
//     //                 <Route path='/news' element={<Navigate to="uz" />} />
//     //                 <Route path='uz' element={<h2> Uzbekcha yangiliklari  </h2>} />
//     //                 <Route path='world' element={<h2> Jahon yangiliklari  </h2>} />
//     //             </Route>
//     //             <Route path='/users' element={<Users />} />
//     //             <Route path='*' element={<NotFound />} />
//     //         </>
//     // )
//     [
//         {
//             path: "/",
//             element: <Home />,
//             errorElement: <ErrorBoundary />,
//             ErrorBoundary: <h2 className="text-red-500"> Hato chiqti brat  </h2>,
//         },
//         {
//             path: "news",
//             element: <News />,

//             children: [
//                 {
//                     path: "uz",
//                     element: <div> fjakdfjadkfjd  </div>,
//                     index: true,
//                     errorElement: <h2 className="text-red-500"> Hato chiqti brat  </h2>,
//                     ErrorBoundary: <h2 className="text-red-500"> Hato chiqti brat  </h2>,


//                 },
//                 {
//                     path: "world",
//                     element: <h2> Jahon yangilik </h2>
//                 },
//             ]
//         },
//         {
//             path: "users",
//             element: <Users />,
//         },
//     ]


// );

