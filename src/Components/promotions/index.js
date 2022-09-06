import { Box, Slide } from "@mui/material";
import { MessageText, SliderPromotion } from "../../styles/sliderpromotions";
import { useEffect, useState, useRef } from "react";
const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit our store",
  "free shipment on purchase of 2000 and above",
];

export default function SliderPromotions() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <SliderPromotion ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{ enter: 500, exit: 100 }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </SliderPromotion>
  );
}
