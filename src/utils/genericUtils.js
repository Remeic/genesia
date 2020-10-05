import { toast } from "react-toastify";

export const copyTextToClipboard = (text, postCopyMessage) => {
  navigator.clipboard.writeText(text).then(() => {
    notify(postCopyMessage);
  });
};

export const notify = (message) => {
  toast(message, {
    position: toast.POSITION.BOTTOM_LEFT,
  });
};

export const openLinkInNewTab = (url) => {
  window.open(url, "_blank");
};
