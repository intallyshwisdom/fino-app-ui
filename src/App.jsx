import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinoLogin from "./pages/HomeComponent/FinoLogin";
import { ThemeProvider, useTheme } from "@emotion/react";
import { FinoTheme } from "./theme/FinoTheme";
import { Card } from "@mui/material";
import TopNavbar from "./pages/HomeComponent/TopNavbar";
import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Payments from "./pages/Payments/Payments";

const App = () => {



  // #001d3d

  return (
    <ThemeProvider theme={FinoTheme()}>
     <Card
        elevation={0}
        sx={{
          backgroundColor:"#F1F3F8",
          borderRadius: 0,
          height: "100dvh",
          width: "100dvw",
        }}
      >
        <Routes>
          <Route path="/" element={<FinoLogin />}></Route>
          <Route path="/Layout" element={<Layout />}>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="Payments" element={<Payments />}></Route>
          </Route>
        </Routes>
      </Card>
    </ThemeProvider>
  );
};

export default App;