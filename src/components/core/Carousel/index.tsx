import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flex from "../Flex";

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};
