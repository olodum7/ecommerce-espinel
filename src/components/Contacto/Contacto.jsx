import React from "react";

const Contacto = () => {
  return (
    <div className="container mt-5 mb-5" style={{marginBottom : 15}}>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2 className="form-title">Contacto</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="form-group">
            <label className="form-label" id="nameLabel" for="name"></label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nombre"
              tabindex="1"
            />
          </div>

          <div className="form-group">
            <label className="form-label" id="emailLabel" for="email"></label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Mail"
              tabindex="2"
            />
          </div>

          <div className="form-group">
            <label
              className="form-label"
              id="subjectLabel"
              for="sublect"
            ></label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder="Asunto"
              tabindex="3"
            />
          </div>

          <div className="form-group">
            <label
              className="form-label"
              id="messageLabel"
              for="message"
            ></label>
            <textarea
              rows="6"
              cols="60"
              name="message"
              className="form-control"
              id="message"
              tabindex="4"
              placeholder="Mensaje"
            />
          </div>

          <div className="text-center margin-top-25">
            <button type="submit" className="btn btn-primary col">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
