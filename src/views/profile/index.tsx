import { Button, Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="  mt-28">
      <Card>
        <Row align="middle">
          <Col span={12} className="text-center ">
            {t("userName")} : TEST
          </Col>
          <Col span={12} className="text-center ">
            {t("password")} : TEST
          </Col>
          <Col span={24} className="  mt-10">
            <div className=" text-center align-middle">
              {" "}
              <Button
                onClick={() => {
                  localStorage.clear();
                  navigate("/login", { replace: true });
                }}
              >
                {t("logout")}
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Profile;
