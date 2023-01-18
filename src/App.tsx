import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { ValidateMessages } from "rc-field-form/lib/interface";
import { useTranslation } from "react-i18next";
import { HashRouter, useRoutes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { routers } from "routes/router";
import AuthProvider from "./providers/auth";
import thTH from "antd/es/locale/th_TH";
import enUS from "antd/es/locale/en_US";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const route: any[] = routers.map((m) => {
  return {
    ...m,
    children: m?.children?.map((item) => {
      return item;
    }),
  };
});

const App = () => {
  const routes = useRoutes(route);
  return routes;
};

const AppWrapper = () => {
  const { i18n } = useTranslation();
  const validateMessages: ValidateMessages = {
    required: i18n?.language === "th" ? "โปรดกรอกข้อมูล!" : "Please input!",
    types: {
      email:
        i18n?.language === "th"
          ? "โปรดกรอกอีเมลให้ถูกต้อง!"
          : "Please enter a valid email address!",
    },
  };
  return (
    <QueryClientProvider client={client}>
      <ConfigProvider
        locale={i18n?.language === "th" ? thTH : enUS}
        form={{ validateMessages }}
      >
        <RecoilRoot>
          <HashRouter>
            <AuthProvider>
              <App />
            </AuthProvider>
          </HashRouter>
        </RecoilRoot>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
