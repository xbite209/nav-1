import React from "react";

import "./App.css";
import ArrayLink from "../src/components/ArrayLink";
// import GithubCorner from "../src/components/GithubCorner"
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Footer from "../src/components/Footer";
// import SideBar from "../src/components/SideBar"
import * as Read from "./data/links/read";
import * as Tool from "./data/links/tool";
const App: React.FC = () => {
  interface OptionValue {
    label: string;
    value: string;
    title?: string;
  }
  interface OptionsValue {
    [key: string]: Array<OptionValue>;
  }
  const Links: OptionsValue = { ...Read, ...Tool };
  let links_el = Object.keys(Links).map(name => {
    return <ArrayLink key={name} title={name} links={Links[name]} />;
  });

  let options: Array<OptionValue> = [];
  for (let link in Links) {
    options = options.concat(Links[link]);
  }

  // const Cateogries = Object.keys(Links)
  return (
    <div>
      <div className="App" id="layout">
        {/* <div id="menu">
          <SideBar cateogries={Cateogries}></SideBar>
        </div> */}
        <Header />
        <div id="main">
          <div style={{ marginBottom: "30px" }}>
            <Search options={options} />
          </div>
          <div style={{ margin: "0px 100px" }}>{links_el}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
