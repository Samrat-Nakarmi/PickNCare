import { Route, Routes } from "react-router";
import React, { Suspense } from "react";
import "./App.css";

function App() {
  const Landing = React.lazy(() => import("@/pages/Landing/Landing"));
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
