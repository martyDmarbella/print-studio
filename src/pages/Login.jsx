import React from 'react';

const Login = () => {
  return <div>
    <section class="py-5 bg-light">
      <div class="container py-4">
        <div class="row">
          <div class="col-lg-9 order-2 order-lg-1">
            <h1>Customer zone</h1>
          </div>
          <div class="col-lg-3 text-end order-1 order-lg-2">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb py-4 justify-content-lg-end mb-0">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">Customer zone</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-5">
      <div class="container py-4">
        <div class="row gy-5 gx-5">
          <div class="col-lg-6">
            <div class="bg-light rounded-pill px-4 py-3">
              <h5 class="mb-0">Login</h5>
            </div>
            <div class="p-4"> 
              <p class="lead">Already our customer?</p>
              <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <hr class="border-bottom border-gray-6" />
              <form action="customer-orders.html" method="get">
                <div class="mb-3">
                  <label class="form-label" for="email">Email</label>
                  <input class="form-control" id="email" type="text" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="password">Password</label>
                  <input class="form-control" id="password" type="password" />
                </div>
                <div class="text-center">
                  <button class="btn btn-primary" type="submit"><i class="fas fa-sign-in-alt me-2"></i>Log in</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bg-light rounded-pill px-4 py-3">
              <h5 class="mb-0">New account</h5>
            </div>
            <div class="p-4"> 
              <p class="lead">Not our registered customer yet?</p>
              <p class="text-muted">With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
              <p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
              <hr class="border-bottom border-gray-6" />
              <form action="customer-orders.html" method="get">
                <div class="mb-3">
                  <label class="form-label" for="name">Name</label>
                  <input class="form-control" id="name" type="text" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="reg_email">Email</label>
                  <input class="form-control" id="reg_email" type="text" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="reg_password">Password</label>
                  <input class="form-control" id="reg_password" type="password" />
                </div>
                <div class="text-center">
                  <button class="btn btn-primary" type="submit"><i class="fas fa-user me-2"></i>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default Login;
