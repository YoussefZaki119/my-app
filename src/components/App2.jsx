import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Main from "./main/Main";
import Card from "./Card";
import Matches from "../matches.js";
import MatchCreation from "./MatchCreation.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


function App2() {
    function createMatch(Matches) {
        return (
          <Card
            key={Matches.id}
            team1={Matches.team1}
            team2={Matches.team2}
            date={Matches.date}
            time={Matches.time}
            image_url1={Matches.image_url1}
            image_url2={Matches.image_url2}
            venue={Matches.venue}
            mainRefree={Matches.mainRefree}
            linesmen={Matches.linesmen}
      
          />
        );}
    
    const [isRegistered, setIsRegistered] = useState(true);

    function notRegistered() {
        setIsRegistered(false);
    }

    function registered() {
        setIsRegistered(true);
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div className="App">
                {isRegistered ? (
                    <Login onChecked={notRegistered} />
                ) : (
                    <Register onChecked={registered} />
                )}
            </div>,
        },
        {
            path: "main",
            element: <Main />

        },
        {
           path:"matches",
           element: <div>
           <Main />
           {Matches.map(createMatch)} 
           </div>
        },
        {
            path:"manager",
           element: <div>
           <MatchCreation/>
           </div>
        }

    ]);

    return (
        <RouterProvider router={router} />

    );
}

export default App2;