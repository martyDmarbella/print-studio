import jaime from "../assets/images/jaime.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faUser, faMapMarker, faKey } from '@fortawesome/free-solid-svg-icons';
import CustomerAddresses from "./CustomerAddresses";
import Form from "./Form";

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
              <div className="bg-light text-center p-4 rounded-top-lg border border-bottom-0"><a className="d-inline-block" href="#Profile"><img className="img-fluid rounded-circle img-thumbnail p-2 mb-3" src={jaime} width="150" alt="..." /></a>
                <h5>Jaime Yanoc</h5>
                <p className="text-muted text-small">Cebu, Philippines</p>
              </div>

              <nav className="list-group">
                <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-orders.html">
                <span className="fw-normal text-sm text-dark py-1">
                <FontAwesomeIcon icon={faShoppingBag} /> Orders</span></a>
                <a className="active list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0" href="customer-account.html" aria-current="true">
                <span className="fw-normal text-sm py-1">
                <FontAwesomeIcon icon={faUser} /> Profile</span></a><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="/customer-addresses">
                <span className="fw-normal text-sm text-dark py-1">
                <FontAwesomeIcon icon={faMapMarker} /> Addresses </span></a>
                <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-login.html">
                <span className="fw-normal text-sm text-dark py-1">
                <FontAwesomeIcon icon={faKey} /> Log out</span></a>
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
             <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerAccount;