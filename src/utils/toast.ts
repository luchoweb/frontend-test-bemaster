import { ToastOptions, toast } from "react-toastify";

interface Props {
  type: string;
  message: string;
}

export const showToast = ({ type, message }: Props) => {
  const options: ToastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  switch (type) {
    case "error":
      toast.error(message, options);
      break;

    case "success":
      toast.success(message, options);
      break;
  
    default:
      toast.info(message, options);
      break;
  }
}