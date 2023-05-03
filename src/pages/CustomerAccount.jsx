import jaime from "../assets/images/jaime.jpg"
import CustomerAddresses from "./CustomerAddresses";

function CustomerAccount() {
  return (
    <>
      <div className="search-panel d-none" id="searchPanel">
        <div className="search-panel-inner p-4">
          <div className="seach-panel-close">
            <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
              <svg className="svg-icon text-white mt-1">
                <use href="#shopping-bag-1"></use>
              </svg>
            </button>
          </div>
          <form className="w-100" action="#">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="d-flex align-items-center mb-3 border-bottom">
                  <input className="form-control form-control-lg bg-none border-0 shadow-0 rounded-0 px-0" type="text" placeholder="What are you searching for" aria-describedby="button-addon2" />
                  <button className="btn btn-link text-dark shadow-0 px-0 text-decoration-none" id="button-addon2" type="submit"><i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-9 order-2 order-lg-1">
              <h1>Your profile</h1>
            </div>
            <div className="col-lg-3 text-end order-1 order-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb py-4 justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Your profile</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container py-4">
          <div className="row gx-5 gy-5">

            <div className="col-xl-3 col-lg-4">
              <div className="bg-light text-center p-4 rounded-top-lg border border-bottom-0"><a className="d-inline-block" href="#"><img className="img-fluid rounded-circle img-thumbnail p-2 mb-3" src={jaime} width="150" alt="..." /></a>
                <h5>Jaime Yanoc</h5>
                <p className="text-muted text-small">Ostrava, Czech republic</p>
              </div>

              <nav className="list-group"><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-orders.html"><span className="fw-normal text-sm text-dark py-1">
                <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                  <use href="#shopping-bag-1"> </use>
                </svg>Orders</span><small className="badge rounded-pill bg-primary">5</small></a><a className="active list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0" href="customer-account.html" aria-current="true"><span className="fw-normal text-sm py-1">
                  <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                    <use href="#user-1"> </use>
                  </svg>Profile</span></a><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="/customer-addresses"><span className="fw-normal text-sm text-dark py-1">
                    <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                      <use href="#map-marker-1"> </use>
                    </svg>Addresses</span></a><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-login.html"><span className="fw-normal text-sm text-dark py-1">
                      <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                        <use href="#key-1"> </use>
                      </svg>Log out</span></a>
              </nav>

            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="bg-light rounded-pill px-4 py-3 mb-5">
                <h5 className="mb-0">Change password  </h5>
              </div>
              <form className="mb-5">
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <label className="form-label" for="password_old">Old password</label>
                    <input className="form-control" id="password_old" type="password" />
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-sm-6">
                    <label className="form-label" for="password_1">New password</label>
                    <input className="form-control" id="password_1" type="password" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="password_2">Retype new password</label>
                    <input className="form-control" id="password_2" type="password" />
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-primary" type="submit"><i className="fas fa-save me-2"></i>Change password</button>
                  </div>
                </div>

              </form>
              <div className="bg-light rounded-pill px-4 py-3 mb-5">
                <h5 className="mb-0">Personal details</h5>
              </div>
              <form>
                <div className="row gy-3">
                  <div className="col-sm-6">
                    <label className="form-label" for="firstname">Firstname</label>
                    <input className="form-control" id="firstname" type="text" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="lastname">Lastname</label>
                    <input className="form-control" id="lastname" type="text" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="company">Company</label>
                    <input className="form-control" id="company" type="text" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="street">Street</label>
                    <input className="form-control" id="street" type="text" />
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <label className="form-label" for="city">Company</label>
                    <input className="form-control" id="city" type="text" />
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <label className="form-label" for="zip">ZIP</label>
                    <input className="form-control" id="zip" type="text" />
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <label className="form-label" for="state">State</label>
                    <select className="form-control" id="state"></select>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <label className="form-label" for="country">Country</label>
                    <select className="form-check js-country form-control" id="country" name="country">
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
                    <label className="form-label" for="phone">Telephone</label>
                    <input className="form-control" id="phone" type="text" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="email">Email</label>
                    <input className="form-control" id="email" type="email" />
                  </div>
                  <div className="col-sm-12 text-center">
                    <button className="btn btn-primary" type="submit"><i className="fas fa-save me-2"></i>Save changes</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerAccount;