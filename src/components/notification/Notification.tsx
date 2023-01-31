import { data } from "./data";
import { notification } from "antd";
interface INotification {
  message?: string;
  description?: any;
  type?: string;
  onClick?: () => void;
  delay?: number;
  custom?: boolean;
  method?: string;
}
export const openNotification = ({
  method = "POST_SUCCESS",
  message = "",
  description = "",
  onClick,
  type = "",
  delay = 0,

  custom = false,
}: INotification) => {
  if (custom)
    setTimeout(() => {
      //@ts-ignore
      notification[type]({
        placement: "topRight",
        top: 170,
        message: message,
        description: description,
        onClick: () => {
          onClick && onClick();
        },
      });
    }, delay);
  else {
    setTimeout(() => {
      //@ts-ignore

      notification[data[method]["type"]]({
        placement: "topRight",
        top: 170,
        message: data[method]["message"],
        description: !!message ? message : "",
      });
    }, delay);
  }
};
