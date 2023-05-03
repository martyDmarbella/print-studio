function CustomerAccount () {
    return(
        <>
        <div class="search-panel d-none" id="searchPanel">
    <div class="search-panel-inner p-4">
      <div class="seach-panel-close">
        <button class="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
          <svg class="svg-icon text-white mt-1">
            <use xlink:href="#close-1"> </use>
          </svg>
        </button>
      </div>
      <form class="w-100" action="#">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <div class="d-flex align-items-center mb-3 border-bottom">
              <input class="form-control form-control-lg bg-none border-0 shadow-0 rounded-0 px-0" type="text" placeholder="What are you searching for" aria-describedby="button-addon2" />
              <button class="btn btn-link text-dark shadow-0 px-0 text-decoration-none" id="button-addon2" type="submit"><i class="fas fa-search"></i></button>
            </div>
          </div>
        </div>
      </form>
    </div>
    
    </div>
    <section class="py-5 bg-light">
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
          <h1>Your profile</h1>
        </div>
        <div class="col-lg-3 text-end order-1 order-lg-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb py-4 justify-content-lg-end mb-0">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active">Your profile</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    </section>
    <section class="py-5">
    <div class="container py-4">
      <div class="row gx-5 gy-5">
    
        <div class="col-xl-3 col-lg-4">
          <div class="bg-light text-center p-4 rounded-top-lg border border-bottom-0"><a class="d-inline-block" href="#"><img class="img-fluid rounded-circle img-thumbnail p-2 mb-3" src="https://d19m59y37dris4.cloudfront.net/hub/2-0/img/person-3.28271a04.jpg" width="150" alt="..."></a>
            <h5>Julie Machallova</h5>
            <p class="text-muted text-small">Ostrava, Czech republic</p>
          </div>
          <nav class="list-group"><a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-orders.html"><span class="fw-normal text-sm text-dark py-1">
                <svg class="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                  <use xlink:href="#shopping-bag-1"> </use>
                </svg>Orders</span><small class="badge rounded-pill bg-primary">5</small></a><a class="active list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0" href="customer-account.html" aria-current="true"><span class="fw-normal text-sm py-1">
                <svg class="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                  <use xlink:href="#user-1"> </use>
                </svg>Profile</span></a><a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-addresses.html"><span class="fw-normal text-sm text-dark py-1">
                <svg class="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                  <use xlink:href="#map-marker-1"> </use>
                </svg>Addresses</span></a><a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="customer-login.html"><span class="fw-normal text-sm text-dark py-1">
                <svg class="svg-icon me-2 svg-icon-sm svg-icon-heavy">
                  <use xlink:href="#key-1"> </use>
                </svg>Log out</span></a>
          </nav>
        </div>
        <div class="col-lg-8 col-xl-9">
          <div class="bg-light rounded-pill px-4 py-3 mb-5">
            <h5 class="mb-0">Change password  </h5>
          </div>
          <form class="mb-5">
            <div class="row mb-3">
              <div class="col-sm-6">
                <label class="form-label" for="password_old">Old password</label>
                <input class="form-control" id="password_old" type="password" />
              </div>
            </div>
            <div class="row gy-3">
              <div class="col-sm-6">
                <label class="form-label" for="password_1">New password</label>
                <input class="form-control" id="password_1" type="password" />
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="password_2">Retype new password</label>
                <input class="form-control" id="password_2" type="password" />
              </div>
              <div class="col-12 text-center">
                <button class="btn btn-primary" type="submit"><i class="fas fa-save me-2"></i>Change password</button>
              </div>
            </div>
            
          </form>
          <div class="bg-light rounded-pill px-4 py-3 mb-5">
            <h5 class="mb-0">Personal details</h5>
          </div>
          <form>
            <div class="row gy-3">
              <div class="col-sm-6">
                <label class="form-label" for="firstname">Firstname</label>
                <input class="form-control" id="firstname" type="text" />
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="lastname">Lastname</label>
                <input class="form-control" id="lastname" type="text" />
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="company">Company</label>
                <input class="form-control" id="company" type="text" />
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="street">Street</label>
                <input class="form-control" id="street" type="text" />
              </div>
              <div class="col-sm-6 col-md-3">
                <label class="form-label" for="city">Company</label>
                <input class="form-control" id="city" type="text" />
              </div>
              <div class="col-sm-6 col-md-3">
                <label class="form-label" for="zip">ZIP</label>
                <input class="form-control" id="zip" type="text" />
              </div>
              <div class="col-sm-6 col-md-3">
                <label class="form-label" for="state">State</label>
                <select class="form-control" id="state"></select>
              </div>
              <div class="col-sm-6 col-md-3">
                <label class="form-label" for="country">Country</label>
                <select class="form-check js-country" id="country" name="country">
                  <option value="country sample">country sample </option>
                  <option value="country sample">country sample</option>
                  <option value="country sample">country sample</option>
                  <option value="country sample">country sample</option>
                </select>
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="phone">Telephone</label>
                <input class="form-control" id="phone" type="text" />
              </div>
              <div class="col-sm-6">
                <label class="form-label" for="email">Email</label>
                <input class="form-control" id="email" type="email" />
              </div>
              <div class="col-sm-12 text-center">
                <button class="btn btn-primary" type="submit"><i class="fas fa-save me-2"></i>Save changes</button>
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