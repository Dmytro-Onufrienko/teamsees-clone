import { animate } from "framer-motion";
import { FC, LegacyRef, useEffect, useRef } from "react";

type CounterProps = { from: number; to: number };

const Counter: FC<CounterProps> = ({ from, to }) => {
  const nodeRef= useRef<HTMLDivElement>();

  useEffect(() => {
    const node: any = nodeRef?.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = parseInt(value.toFixed(2)).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef as LegacyRef<HTMLParagraphElement> | undefined} />;
};

export default Counter;
