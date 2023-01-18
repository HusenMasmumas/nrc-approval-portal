import { Card, Col, Row } from "antd";

import React from "react";

const Dashboard = () => {
  return (
    <div className="font-poppins">
      <Card>
        <Row gutter={[0, 20]}>
          <Col span={24} className="mt-16">
            <div className=" font-poppins">User</div>
            <div className="">User</div>
          </Col>
          <Col span={24}></Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;
