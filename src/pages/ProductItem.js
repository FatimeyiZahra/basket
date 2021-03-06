import React from "react";

const ProductItem = () => {
  return (
    <div>
      <div className="container bootdey">
        <div className="col-md-12">
          <section className="panel pt-5">
            <div className="panel-body d-flex">
              <div className="col-md-6">
                <div className="pro-img-details">
                  <img
                    src="https://via.placeholder.com/550x380/FFB6C1/000000"
                    alt=""
                  />
                </div>
                <div className="pro-img-list">
                  <a href="!#">
                    <img
                      src="https://via.placeholder.com/115x100/87CEFA/000000"
                      alt=""
                    />
                  </a>
                  <a href="!#">
                    <img
                      src="https://via.placeholder.com/115x100/FF7F50/000000"
                      alt=""
                    />
                  </a>
                  <a href="!#">
                    <img
                      src="https://via.placeholder.com/115x100/20B2AA/000000"
                      alt=""
                    />
                  </a>
                  <a href="!#">
                    <img
                      src="https://via.placeholder.com/120x100/20B2AA/000000"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6 px-3">
                <h4 className="pro-d-title">
                  <a href="!#" class="">
                    Leopard Shirt Dress
                  </a>
                </h4>
                <p>
                  Praesent ac condimentum felis. Nulla at nisl orci, at
                  dignissim dolor, The best product descriptions address your
                  ideal buyer directly and personally. The best product
                  descriptions address your ideal buyer directly and personally.
                </p>
                <div className="product_meta">
                  <span className="posted_in">
                    {" "}
                    <strong>Categories:</strong>{" "}
                    <a rel="tag" href="!#">
                      Jackets
                    </a>
                    ,{" "}
                    <a rel="tag" href="!#">
                      Men
                    </a>
                    ,{" "}
                    <a rel="tag" href="!#">
                      Shirts
                    </a>
                    ,{" "}
                    <a rel="tag" href="!#">
                      T-shirt
                    </a>
                    .
                  </span>
                  <span class="tagged_as">
                    <strong>Tags:</strong>{" "}
                    <a rel="tag" href="!#">
                      mens
                    </a>
                    ,{" "}
                    <a rel="tag" href="!#">
                      womens
                    </a>
                    .
                  </span>
                </div>
                <div className="m-bot15">
                  {" "}
                  <strong>Price : </strong> <span class="amount-old">$544</span>{" "}
                  <span className="pro-price"> $300.00</span>
                </div>
                <div class="form-group">
                  <label>Quantity</label>
                  <input
                    type="quantiy"
                    placeholder="1"
                    class="form-control quantity"
                  />
                </div>
                <p>
                  <button className="btn btn-round btn-danger" type="button">
                    <i class="fa fa-shopping-cart"></i> Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
