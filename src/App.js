import React from "react";

import { Search, DataTable, Paginator } from "./components";

import "antd/dist/antd.css";

function App() {
  return (
    <div style={container}>
      <Search />
      <DataTable />
      <Paginator />
    </div>
  );
}

const container = {
  backgroundColor: "#fcfce3",
  padding: "10px 20px 0",
}

export default App;
