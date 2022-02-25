import React, { useEffect } from "react";
import { Carousel } from "antd";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getCarouselAction());
  }, []);

  /* const renderImg = () => {
    return arrImg.splice(0, 3)?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              style={{ width: "100%", opacity: "0" }}
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  }; */
  return (
  <section className="my-carousel">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./img/hero-2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./img/hero-3.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
  </div>

  
</section>

  );
}
