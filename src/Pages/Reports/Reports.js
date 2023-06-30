import React from "react";
import { Typography } from "antd";
import "./Reports.scss";

const { Text, Title } = Typography;

const Reports = () => {
  return (
    <>
      <div className="Orders">
        <Title level={4}>
          <Text type="success"> گزارشات </Text>
        </Title>
      </div>
    </>
  );
};

export default Reports;
