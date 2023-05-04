function CustomerAddresses() {
    return(
        <>
         <div className="search-panel d-none" id="searchPanel">
      <div className="search-panel-inner p-4">
        <div className="seach-panel-close">
          <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
            <svg className="svg-icon text-white mt-1">
              <use href="#close-1"> </use>
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
            <h1>Your addresses</h1>
          </div>
          <div className="col-lg-3 text-end order-1 order-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb py-4 justify-content-lg-end mb-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Your addresses</li>
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
            <div className="bg-light text-center p-4 rounded-top-lg border border-bottom-0"><a className="d-inline-block" href="#"><img className="img-fluid rounded-circle img-thumbnail p-2 mb-3" src="https://d19m59y37dris4.cloudfront.net/hub/2-0/img/person-3.28271a04.jpg" width="150" alt="..." /></a>
              <h5>Julie Machallova</h5>
              <p className="text-muted text-small">Ostrava, Czech republic</p>
            </div>
            <nav className="list-group"><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-orders.html"><span className="fw-normal text-sm text-dark py-1">
                  <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                    <use href="#shopping-bag-1"> </use>
                  </svg>Orders</span><small className="badge rounded-pill bg-primary">5</small></a><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-account.html"><span className="fw-normal text-sm text-dark py-1">
                  <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                    <use href="#user-1"> </use>
                  </svg>Profile</span></a><a className="active list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0" href="customer-addresses.html" aria-current="true"><span className="fw-normal text-sm py-1">
                  <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                    <use href="#map-marker-1"> </use>
                  </svg>Addresses</span></a><a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-login.html"><span className="fw-normal text-sm text-dark py-1">
                  <svg className="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                    <use href="#key-1"> </use>
                  </svg>Log out</span></a>
            </nav>
          </div>
          <div className="col-lg-8 col-xl-9 gx-5">
            <form action="#">
              
              <div className="bg-light rounded-pill px-4 py-3">
                <h5 className="mb-0">Invoice address                    </h5>
              </div>
              <div className="row gy-3 py-5">
                <div className="col-md-6">
                  <label className="form-label" for="firstname">First Name</label>
                  <input className="form-control" id="firstname" type="text" name="first-name" placeholder="Enter you first name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" for="lastname">Last Name</label>
                  <input className="form-control" id="lastname" type="text" name="last-name" placeholder="Enter your last name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" for="email">Email Address</label>
                  <input className="form-control" id="email" type="email" name="email" placeholder="enter your email address" /> 
                </div>
                <div className="col-md-6">
                  <label className="form-label" for="street">Street</label>
                  <input className="form-control" id="street" type="text" name="address" placeholder="Your street name" />
                </div>
                <div className="col-md-3">
                  <label className="form-label" for="city">City</label>
                  <input className="form-control" id="city" type="text" name="city" placeholder="Your city" />
                </div>
                <div className="col-md-3">
                  <label className="form-label" for="zip">ZIP</label>
                  <input className="form-control" id="zip" type="text" name="zip" placeholder="ZIP code" />
                </div>
                <div className="col-md-3">
                  <label className="form-label" for="state">State</label>
                  <input className="form-control" id="state" type="text" name="state" placeholder="Your state" /> 
                </div>
                <div className="col-md-3">
                  <label className="form-label" for="country">Country</label>
                  <input className="form-control" id="country" type="text" name="country" placeholder="Your country" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" for="phone-number">Phone Number</label>
                  <input className="form-control" id="phone-number" type="tel" name="phone-number" placeholder="Your phone number" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" for="company">Company</label>
                  <input className="form-control" id="company" type="text" name="company" placeholder="Your company name" />
                </div>
                <div className="col-12 pt-3">
                  <div className="form-check">
                    <input className="form-check-input" id="another-address" type="checkbox" data-bs-toggle="collapse" role="button" aria-expanded="false" data-bs-target="#shippingAddress" />
                    <label className="form-check-label" for="another-address">Use different shipping address</label>
                  </div>
                </div>
              </div>

              <div className="collapse" id="shippingAddress">
                <div className="bg-light rounded-pill px-4 py-3">
                  <h5 className="mb-0">Shipping address</h5>
                </div>
                <div className="row gy-3 py-5">
                  <div className="col-md-6">
                    <label className="form-label" for="shipping_firstname">First Name</label>
                    <input className="form-control" id="shipping_firstname" type="text" name="shipping_first-name" placeholder="Enter you first name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="shipping_lastname">Last Name</label>
                    <input className="form-control" id="shipping_lastname" type="text" name="shipping_last-name" placeholder="Enter your last name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="shipping_email">Email Address</label>
                    <input className="form-control" id="shipping_email" type="email" name="shipping_email" placeholder="enter your email address" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="shipping_street">Street</label>
                    <input className="form-control" id="shipping_street" type="text" name="shipping_address" placeholder="Your street name" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" for="shipping_city">City</label>
                    <input className="form-control" id="shipping_city" type="text" name="shipping_city" placeholder="Your city" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" for="shipping_zip">ZIP</label>
                    <input className="form-control" id="shipping_zip" type="text" name="shipping_zip" placeholder="ZIP code" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" for="shipping_state">State</label>
                    <input className="form-control" id="shipping_state" type="text" name="shipping_state" placeholder="Your state" />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" for="shipping_country">Country</label>
                    <input className="form-control" id="shipping_country" type="text" name="shipping_country" placeholder="Your country" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="shipping_phone-number">Phone Number</label>
                    <input className="form-control" id="shipping_phone-number" type="tel" name="shipping_phone-number" placeholder="Your phone number" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="shipping_company">Company</label>
                    <input className="form-control" id="shipping_company" type="text" name="shipping_company" placeholder="Your company name" />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <button className="btn btn-primary px-5" type="submit"><i className="fas fa-save me-2"></i>Save changes</button>
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

export default CustomerAddresses;