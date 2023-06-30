import React from "react";
import { Typography } from "antd";
import "./Customers.scss";

const { Text, Title } = Typography;

const Customers = () => {
  return (
    <>
      <div className="Customers">
        <Title level={4}>
          <Text type="success"> مشتریان </Text>
        </Title>
      </div>
    </>
  );
};

export default Customers;
