import React from "react";
import { Typography } from "antd";
import "./Orders.scss";

const { Text, Title } = Typography;

const Orders = () => {
  return (
    <>
      <div className="Orders">
        <Title level={4}>
          <Text type="success"> سفارش ها</Text>
        </Title>
      </div>
    </>
  );
};

export default Orders;
