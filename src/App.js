import React from "react";

import "antd/dist/antd.css";

import { Search, DataTable } from "./components";

function App() {
  return (
    <div style={container}>
      <Search />
      <DataTable />
    </div>
  );
}

const container = {
  backgroundColor: "#fcfce3",
  padding: "10px 20px 0",
}

export default App;
