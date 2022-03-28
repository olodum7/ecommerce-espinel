import React from 'react'
import loader from "../../images/ui/yeaah_loader.gif";

const Loader = () => {
  return (
    <div className="loader">
    <div>
    <img
      src={loader}
      alt="Cargando ..."
      className="img-fluid"
    />
    </div>
  </div>
  )
}

export default Loader