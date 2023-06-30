import React, { useEffect } from "react";
import { Row, Col, Table, Avatar, Card, Typography, Spin, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { getUsers } from "../../Redux/actions/users";
import moment from "moment";
import "./Home.scss";

const { Title } = Typography;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { userData, loading } = useSelector((state) => {
    return {
      userData: state.usersReducer,
      loading: state.loadingReducer,
    };
  });
  const columns = [
    {
      title: "",
      dataIndex: "img",
      key: "img",
      render: () => (
        <>
          <Avatar size="small" icon={<UserOutlined />} />
        </>
      ),
    },
    {
      title: "نام و نام خانوادگی",
      dataIndex: "name",
      key: "name",
      render: (a, b) => (
        <>
          <span>{b?.firstName}</span> <span>{b?.lastName}</span>
        </>
      ),
    },
    {
      title: "شهر سکونت",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "شغل",
      dataIndex: "job",
      key: "job",
    },
    {
      title: "سن",
      dataIndex: "birthDate",
      key: "abirthDatege",
      render: (a) =>
        moment(Date.now()).format("YYYY") - moment(a).format("YYYY"),
    },
    {
      title: "موجودی حساب",
      dataIndex: "deposit",
      key: "deposit",
    },
  ];

  const series = [
    {
      name: "Net Profit",
      type: "bar",
      data: userData.map((user) => {
        return (
          moment(Date.now()).format("YYYY") -
          moment(user.birthDate).format("YYYY")
        );
      }),
    },
  ];
  const options = {
    chart: {
      type: "bar",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: userData.map((user) => {
        return user.lastName;
      }),
    },
  };

  const totalAeposit = userData
    .map((user) => user.deposit)
    .reduce((a, b) => {
      return a + b;
    }, 0);
  const averageAge =
    userData
      .map((user) => {
        return (
          moment(Date.now()).format("YYYY") -
          moment(user.birthDate).format("YYYY")
        );
      })
      .reduce((a, b) => {
        return a + b;
      }, 0) / userData.length;

  return (
    <>
      <div className="Home">
        <Row>
          <Col span={24}>
            {loading ? (
              <Space size="large" className="spinner">
                <Spin size="large" />
              </Space>
            ) : (
              <Row>
                <Col span={12}>
                  <Card title="موجودی کل">
                    <Title style={{ textAlign: "center" }}>
                      {totalAeposit}
                    </Title>
                  </Card>
                  <Card title="متوسط سن اعضا">
                    <Title style={{ textAlign: "center" }}>{averageAge}</Title>
                  </Card>
                </Col>
                <Col span={12}>
                  <Chart
                    options={options}
                    series={series}
                    width={500}
                    height={350}
                  />
                </Col>
              </Row>
            )}
          </Col>
          <Col span={24}>
            <Table
              dataSource={userData}
              columns={columns}
              pagination={false}
              loading={loading}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
