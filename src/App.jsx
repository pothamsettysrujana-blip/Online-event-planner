import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Signup from "./Signup";
import Home from "./Home";
import Events from "./Events";
import Register from "./Register";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import Logout from "./Logout";
import RSVPConfirmation from "./RSVPConfirmation";
import ProtectedRouter from "./ProtectedRouter";
import Participants from "./Participants";

import "./App.css";

function App() {
  const [participants, setParticipants] = useState([]);
  return (
    <BrowserRouter>
      <Routes>

        {/* First Page */}
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRouter>
              <Events />
            </ProtectedRouter>
          }
        />

        <Route
          path="/register"
          element={
            <ProtectedRouter>
              <Register
                participants={participants}
                setParticipants={setParticipants}
              />
            </ProtectedRouter>

          }
        />

        <Route
          path="/participants"
          element={
            <ProtectedRouter>
              <Participants participants={participants} />
            </ProtectedRouter>
          }
        />



        <Route
          path="/gallery"
          element={
            <ProtectedRouter>
              <Gallery />
            </ProtectedRouter>
          }
        />

        <Route
          path="/faq"
          element={
            <ProtectedRouter>
              <FAQ />
            </ProtectedRouter>
          }
        />

        <Route
          path="/logout"
          element={
            <ProtectedRouter>
              <Logout />
            </ProtectedRouter>
          }
        />

        <Route
          path="/confirmation"
          element={
            <ProtectedRouter>
              <RSVPConfirmation />
            </ProtectedRouter>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;