import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./component/Index"
import {
  Ecommerce, Orders, Calender, Employes, Stacked, Pyramid, Customers,
  Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line
} from "./page"
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          {/* Start themeSettings Item */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button className="text-white p-3 text-xl rounded-full hover:drop-shadow-xl" style={{ background: currentColor }}
                onClick={() => setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* End themeSettings Item */}

          {/* start Sidebar Item */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          {/* End Sidebar Item */}

          {/* Start Navbar item  */}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'} `}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            {/* End Navbar item  */}

            {/* Start Routes Item */}
            <div>
              {themeSettings && (<ThemeSettings />)}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employes />} />
                <Route path="/customers" element={<Customers />} />

                {/* App   */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calender />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            {/* End Routes Item */}
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

