import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import SideBar from "./common/sidebar/SideBar";
import HomeScreen from "./screen/homescreen/HomeScreen";

const { Content } = Layout;

function App() {
  return (
    <div className="app">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar />
          <Layout
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
            className="layout"
          >
            <Content>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
