export const onToggleModal = (isOpen: boolean, ref: HTMLDivElement) => {
  console.log("isOpen :>> ", isOpen);
  if (isOpen) {
    ref.classList.remove("show");
    ref.classList.add("hidden");
    // ref.addEventListener("animationend", () => {
    //   ref.classList.remove("hidden");
    // });
  } else {
    ref.classList.remove("hidden");
    ref.classList.add("show");
  }
};

export const handleToggleModal = (
  ref: { current: HTMLDivElement | null },
  isOpen: boolean | false,
  className: string
) => {
  if (ref.current) {
    return onToggleModal(isOpen, ref.current);
  } else {
    return;
  }
};
