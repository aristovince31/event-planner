import Swal from "sweetalert2";

function triggerToaster(type, message) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: type,
    title: message,
  });
}

function reduceEventName(eventName) {
  if (eventName.length > 10) {
    return eventName.substring(0, 10) + "...";
  }
  return eventName;
}

export { triggerToaster, reduceEventName };
