import { notification } from "antd";

export const showNotification = (type, text, title, duration = 3, placement = "topRight") => {
  notification[type]({
    message: title,
    description: text,
    duration,
    placement,
  });
};
