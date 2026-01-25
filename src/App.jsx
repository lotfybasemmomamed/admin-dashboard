import {  createTheme, ThemeProvider } from "@mui/material";
import MainDashboard from "./views/dashboard/Dashboard";
import { useState } from "react";
import { getThemeMode } from "./utils/ThemeService";
import { getLanguage } from "./utils/LanguageService";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamPage from "./views/team/TeamPage";
import CantactsPage from "./views/contacts/ContactsPage";
import InvoicePage from "./views/invoices/InvoicesPage";
import AddUser from "./views/adduser/AddUser";
import Calendar from "./views/calendar/Calendar";
import FAQ from "./views/faq/FAQ";

function App() {
  const [mode, setMode] = useState(getThemeMode());
  const [lang, setLang] = useState(getLanguage());
  const direction = lang === "AR" ? "rtl" : "ltr";
  const theme = createTheme({
    direction: direction,
    palette: {
      mode: mode,
    },
    typography: {
      fontFamily: lang === "AR" ? "Tajawal, sans-serif" : "Roboto, sans-serif",
    },
  });
  const cacheRtl = createCache({
    key: direction === "rtl" ? "mui-rtl" : "mui",
    stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div dir={direction}>
            <Routes>
              <Route
                path="/"
                element={
                  <MainDashboard
                    mode={mode}
                    setMode={setMode}
                    lang={lang}
                    setLang={setLang}
                  />
                }
                
              >
                <Route path="team" element={<TeamPage/>}/>
                <Route path="contacts" element={<CantactsPage/>}/>
                <Route path="invoices" element={<InvoicePage/>}/>
                <Route path="adduser" element={<AddUser/>}/>
                <Route path="calendar" element={<Calendar/>}/>
                <Route path="faq" element={<FAQ/>}/>
             </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
