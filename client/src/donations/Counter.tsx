import { animate } from "framer-motion";
import { FC, useEffect, useRef } from "react";

type CounterProps = { from: number; to: number };

const Counter: FC<CounterProps> = ({ from, to }) => {
  const nodeRef= useRef<HTMLDivElement>();

  useEffect(() => {
    const node: any = nodeRef?.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
};

export default Counter;
