import { useSelector } from "react-redux";
import { darkTheme, whiteTheme } from "./style/Theme";
import HeaderComponents from "./components/HeaderComponent";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import IndexComponent from "./components/IndexComponent";
import DetailComponent from "./components/DetailComponent";
import FooterComponent from "./components/FooterComponent";
import CartComponent from "./components/CartComponent";
import AllProductComponent from "./components/AllProductComponent";
import ErrorPageComponent from "./components/ErrorPageComponent";
const App: React.FC = () => {
  const theme = useSelector((state: any) => state.theme);

  return (
    <ThemeProvider theme={theme.dark ? darkTheme : whiteTheme}>
      <GlobalStyle />
      <HeaderComponents />
      <main>
        <Routes>
          <Route path="/" element={<IndexComponent />} />
          <Route path="/detail/:id" element={<DetailComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route
            path="/fashion"
            element={
              <AllProductComponent
                title="패션"
                category={["men's clothing", "women's clothing"]}
              />
            }
          />
          <Route
            path="/accessory"
            element={
              <AllProductComponent title="액세서리" category="jewelery" />
            }
          />
          <Route
            path="/digital"
            element={
              <AllProductComponent title="디지털" category="electronics" />
            }
          />
          <Route path="/*" element={<ErrorPageComponent />} />
        </Routes>
      </main>
      <FooterComponent />
    </ThemeProvider>
  );
};

export default App;
