import { useState } from "react";

export default function useModal() {
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => {
    setShow(!show);
  };

  return {
    show,
    toggle,
  };
}
