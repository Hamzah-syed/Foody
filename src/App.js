import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Theme } from "./theme";
//pages
import Index from "./pages/index";
//layout
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider theme={Theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Footer />
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
