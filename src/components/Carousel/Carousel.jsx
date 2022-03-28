import { useEffect } from "react";
import useFireStore from "../../hooks/useFireStore";
import comingSoon from "../../images/ui/yeaah_destacado_coming_soon.png";

const Carousel = () => {
  const { proximamente, getComingSoon } = useFireStore();

  useEffect(() => {
    getComingSoon();
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide d-none d-md-block"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {proximamente &&
          proximamente.map((item) => (
            <div
              id={item.id}
              key={item.id} className={
                item.id === 0 ? "carousel-item active" : "carousel-item"
              }
            >
              <img
                src={item.pictureURL}
                className="d-block w-100"
                alt={item.alt}
              />
              <div className="slider-contenedor">
                <div className="slide-rotulo">
                  <div className="row">
                    <div>
                      <img
                        src={comingSoon}
                        alt="Coming Soon"
                        className="img-fluid icono-coming-soon"
                      />
                    </div>
                    <div className="destino-coming-soon">
                      <h5>Cooming soon</h5>
                      <h3>{item.title}</h3>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
