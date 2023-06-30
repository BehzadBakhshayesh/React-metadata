import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Orders from "./Pages/Orders/Orders";
import Customers from "./Pages/Customers/Customers";
import Reports from "./Pages/Reports/Reports";
import NotFound from "./Pages/NotFound/NotFound";
import "./App.scss";

const { Header: AntHeader, Sider, Content } = Layout;

const App = () => {
  return (
    <>
      <main className="App">
        <Layout className="Layout">
          <AntHeader className="Header">
            <Header />
          </AntHeader>
          <Layout>
            <Sider className="Sider">
              <SideBar />
            </Sider>
            <Content className="Content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/customers" component={Customers} />
                <Route exact path="/reports" component={Reports} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </main>
    </>
  );
};

export default App;
