import { store } from "react-notifications-component";

export const showSuccessToast = (message, header = "Success") => {
  store.addNotification({
    title: header,
    message: message,
    type: "success",
    container: "top-right",
    insert: "top",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
    },
  });
};

export const showErrorToast = (message, header = "Error") => {
  store.addNotification({
    title: header,
    message: message,
    type: "danger",
    container: "top-right",
    insert: "top",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
    },
  });
};
