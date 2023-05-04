import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // do something with the form data
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row gy-3">
          <div className="col-sm-6">
            <label className="form-label" for="firstname" required="required" onChange={handleChange}>Firstname</label>
            <input className="form-control" id="firstname" required="required" type="text" />
          </div>
          <div className="col-sm-6">
            <label className="form-label" for="lastname" required="required" onChange={handleChange}>Lastname</label>
            <input className="form-control" id="lastname" required="required" type="text" />
          </div>
          <div className="col-sm-6">
            <label className="form-label" for="company" required="required" onChange={handleChange}>Company</label>
            <input className="form-control" id="company" required="required" type="text" />
          </div>
          <div className="col-sm-6">
            <label className="form-label" for="street" required="required" onChange={handleChange}>Street</label>
            <input className="form-control" id="street" required="required" type="text" />
          </div>
          <div className="col-sm-6 col-md-3">
            <label className="form-label" for="city" required="required" onChange={handleChange}>City</label>
            <input className="form-control" id="city" required="required" type="text" />
          </div>
          <div className="col-sm-6 col-md-3">
            <label className="form-label" for="zip" required="required" onChange={handleChange}>ZIP</label>
            <input className="form-control" id="zip" required="required" type="text" />
          </div>
          <div className="col-sm-6 col-md-3">
            <label className="form-label" htmlFor="state">Region</label>
            <select className="form-control" id="state" onChange={handleChange}>
              <option value="">Select Region</option>
              <option value="Luzon">Luzon</option>
              <option value="Visayas">Visayas</option>
              <option value="Mindanao">Mindanao</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-3">
            <label className="form-label" for="country" required="required" onChange={handleChange}>Country</label>
            <select className="form-check js-country form-control" id="country" required="required" name="country">
              <option value="">Select Province</option>
              <option value="Abra">Abra</option>
              <option value="Agusan del Norte">Agusan del Norte</option>
              <option value="Agusan del Sur">Agusan del Sur</option>
              <option value="Aklan">Aklan</option>
              <option value="Albay">Albay</option>
              <option value="Antique">Antique</option>
              <option value="Apayao">Apayao</option>
              <option value="Aurora">Aurora</option>
              <option value="Basilan">Basilan</option>
              <option value="Bataan">Bataan</option>
              <option value="Batanes">Batanes</option>
              <option value="Batangas">Batangas</option>
              <option value="Benguet">Benguet</option>
              <option value="Biliran">Biliran</option>
              <option value="Bohol">Bohol</option>
              <option value="Bukidnon">Bukidnon</option>
              <option value="Bulacan">Bulacan</option>
              <option value="Cagayan">Cagayan</option>
              <option value="Camarines Norte">Camarines Norte</option>
              <option value="Camarines Sur">Camarines Sur</option>
              <option value="Camiguin">Camiguin</option>
              <option value="Capiz">Capiz</option>
              <option value="Catanduanes">Catanduanes</option>
              <option value="Cavite">Cavite</option>
              <option value="Cebu">Cebu</option>
              <option value="Compostela Valley">Compostela Valley</option>
              <option value="Cotabato">Cotabato</option>
              <option value="Davao del Norte">Davao del Norte</option>
              <option value="Davao del Sur">Davao del Sur</option>
              <option value="Davao Occidental">Davao Occidental</option>
              <option value="Davao Oriental">Davao Oriental</option>
              <option value="Dinagat Islands">Dinagat Islands</option>
              <option value="Eastern Samar">Eastern Samar</option>
              <option value="Guimaras">Guimaras</option>
              <option value="Ifugao">Ifugao</option>
              <option value="Ilocos Norte">Ilocos Norte</option>
              <option value="Ilocos Sur">Ilocos Sur</option>
              <option value="Iloilo">Iloilo</option>
              <option value="Isabela">Isabela</option>
              <option value="Kalinga">Kalinga</option>
              <option value="La Union">La Union</option>
              <option value="Laguna">Laguna</option>
              <option value="Lanao del Norte">Lanao del Norte</option>
              <option value="Lanao del Sur">Lanao del Sur</option>
              <option value="Leyte">Leyte</option>
              <option value="Maguindanao">Maguindanao</option>
              <option value="Marinduque">Marinduque</option>
              <option value="Masbate">Masbate</option>
              <option value="Misamis Occidental">Misamis Occidental</option>
              <option value="Misamis Oriental">Misamis Oriental</option>
              <option value="Mountain Province">Mountain Province</option>
              <option value="Nueva Ecija">Nueva Ecija</option>
              <option value="Nueva Vizcaya">Leyte</option>
              <option value="Occidental Mindoro">Occidental Mindoro</option>
              <option value="Oriental Mindoro">Oriental Mindoro</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label className="form-label" for="phone" required="required" onChange={handleChange}>Telephone</label>
            <input className="form-control" id="phone" required="required" type="text" />
          </div>
          <div className="col-sm-6">
            <label className="form-label" for="email" required="required" onChange={handleChange}>Email</label>
            <input className="form-control" id="email" required="required" type="email" />
          </div>
          <div className="col-sm-12 text-center">
            <button className="btn btn-primary" type="submit"><i className="fas fa-save me-2"></i>Save changes</button>
          </div>
        </div>
      </form>

    </>
  );
}
export default Form;