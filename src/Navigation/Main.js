import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import GoogleForm from "../Components/GoogleForm";
import TableauChart from "../Components/TableauChart";

function Main() {
  return (
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/" element={<TableauChart />} />
        <Route path="/form/" element={<GoogleForm />} />
      </Routes>
  );
}

export default Main;