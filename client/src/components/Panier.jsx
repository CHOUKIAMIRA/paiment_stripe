import React from "react";
import { useSelector } from "react-redux";
import axios from "axios"
export default function Panier() {
    const panier=useSelector(state=>state.productreducer.panier)
    console.log(panier)
    const handelcheckout = async()=>{
      try {
        const res= await axios.post("http://localhost:8000/api/create-checkout-session",{panier})
      console.log(res)
if (res.status===200){
  window.location.href=res.data.url //= use navigate 
}
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
      <section className="py-20 bg-light overflow-hidden">
        <div className="container">
          <div className="p-8 p-lg-20 bg-white">
            <h2 className="mb-8 mb-md-20">Your cart</h2>
            <div className="row align-items-center">
              <div className="col-12 col-xl-8 mb-8 mb-xl-0">
                <div className="d-none d-lg-flex row">
                  <div className="col-12 col-lg-6">
                    <h4
                      className="mb-6 text-secondary"
                      style={{ fontSize: 16 }}
                    >
                      Description
                    </h4>
                  </div>
                  <div className="col-12 col-lg-2">
                    <h4
                      className="mb-6 text-secondary"
                      style={{ fontSize: 16 }}
                    >
                      Price
                    </h4>
                  </div>
                  <div className="col-12 col-lg-2 text-center">
                    <h4
                      className="mb-6 text-secondary"
                      style={{ fontSize: 16 }}
                    >
                      Quantity
                    </h4>
                  </div>
                  <div className="col-12 col-lg-2 text-end">
                    <h4
                      className="mb-6 text-secondary"
                      style={{ fontSize: 16 }}
                    >
                      Subtotal
                    </h4>
                  </div>
                </div>
                <div className="mb-12 py-6 border-top border-bottom">
                {panier.map(e=>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 mb-6 mb-md-0">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-4 mb-3">
                          <div
                            className="d-flex align-items-center justify-content-center bg-light"
                            style={{ width: 96, height: 128 }}
                          >
                            <img
                              className="img-fluid"
                              style={{ objectFit: "contain" }}
                              src={e.product.image}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <h3 className="mb-2 lead fw-bold">
                            {e.product.title}
                          </h3>
                          <p className="mb-0 text-secondary">
                            {e.product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-2">
                      <p className="mb-0 lead fw-bold text-info">{e.product.price}</p>
                      <span className="small text-secondary text-decoration-line-through">
                       
                      </span>
                    </div>
                    <div className="col-auto col-md-2">
                      <div className="d-inline-flex align-items-center px-4 fw-bold text-secondary border rounded-2">
                        <button className="btn px-0 py-2">
                          <svg
                            width={12}
                            height={2}
                            viewBox="0 0 12 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x={12}
                                width={2}
                                height={12}
                                transform="rotate(90 12 0)"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </button>
                        <input
                          className="form-control px-2 py-4 text-center text-md-end border-0"
                          style={{ width: 48 }}
                          type="number"
                          placeholder={e.quantity}
                        />
                        <button className="btn px-0 py-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x={5}
                                width={2}
                                height={12}
                                fill="currentColor"
                              />
                              <rect
                                x={12}
                                y={5}
                                width={2}
                                height={12}
                                transform="rotate(90 12 5)"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-auto col-md-2 text-end">
                      <p className="lead fw-bold text-info">{e.product.price*e.quantity}</p>
                    </div>
                  </div>)}
                </div>
                <div className="d-flex flex-wrap flex-md-nowrap align-items-center mb-lg-n4">
                  <span className="flex-shrink-0 me-12 mb-4 mb-lg-0 fw-bold">
                    Apply discount code:
                  </span>
                  <input
                    className="form-control me-6 mb-4 mb-lg-0 px-8 py-4 fw-bold border"
                    type="text"
                    placeholder="SUMMER30X"
                  />
                  <a className="flex-shrink-0 btn btn-sm btn-dark" href="#">
                    Apply
                  </a>
                </div>
              </div>
              <div className="col-12 col-xl-4">
                <div className="p-6 p-md-12 bg-info">
                  <h3 className="mb-6 text-white">Cart totals</h3>
                  <div className="d-flex mb-8 align-items-center justify-content-between pb-5 border-bottom border-info-light">
                    <span className="text-light">Subtotal</span>
                    <span className="lead fw-bold text-white">$89.67</span>
                  </div>
                  <h4 className="mb-2 lead fw-bold text-white">Shipping</h4>
                  <div className="d-flex mb-2 justify-content-between align-items-center">
                    <span className="text-light">Next day</span>
                    <span className="lead fw-bold text-white">$11.00</span>
                  </div>
                  <div className="d-flex mb-10 justify-content-between align-items-center">
                    <span className="text-light">
                      Shipping to United States
                    </span>
                    <span className="lead fw-bold text-white">-</span>
                  </div>
                  <div className="d-flex mb-10 justify-content-between align-items-center">
                    <span className="lead fw-bold text-white">Order total</span>
                    <span className="lead fw-bold text-white">$100.67</span>
                  </div>
                  <button className="btn btn-primary w-100 text-uppercase" onClick={handelcheckout}>
                    Go to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
