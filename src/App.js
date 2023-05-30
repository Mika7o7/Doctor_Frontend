import { GlobalStyles } from "./style/globalStyles";
import { ThemeProvider } from "styled-components";
import { enTheme } from "./style/theme";
import "./style/flaticon.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import OurDoctors from "./pages/OurDoctors/OurDoctors";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import FAQ from "./pages/FAQ/FAQ";
import DoctorsMore from "./pages/DoctorsMore/DoctorsMore";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={enTheme}>
          <GlobalStyles />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='services' element={<Services />} />
              <Route path='ourdoctors' element={<OurDoctors />} />
              <Route path='ourdoctors/:id' element={<DoctorsMore />} />
              <Route path='blog' element={<Blog />} />
              <Route path='contactus' element={<ContactUs />} />
              <Route path='faq' element={<FAQ />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
