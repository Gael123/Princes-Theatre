
import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default () => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">Prince's theatre</Menu.Item>
        <p> Welcome to Princes Theatre ,your home of unlimited Classical movies</p>
    </Menu>
  </Header>
);
