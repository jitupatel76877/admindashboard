"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import GoogleMapPolygon from "../components/Googlemapdiv";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <main className="content">
        <div className="container">
          <div className="row"></div>
          <h1 className="h3 mb-3">Dashboard</h1>
          <div className="row">
            <div className="col-12 col-sm-6 col-xxl-3 d-flex">
              <div className="card illustration flex-fill m-1 my-sm-2">
                <div className="card-body p-0 d-flex flex-fill">
                  <div className="row g-0 w-100">
                    <div className="col-6">
                      <div className="illustration-text p-3 m-1">
                        <h4 className="illustration-text">Welcome Back, Chris!</h4>
                        <p className="mb-0">AppStack Dashboard</p>
                      </div>
                    </div>
                    <div className="col-6 align-self-end text-end">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xxl-3 d-flex">
              <div className="card flex-fill m-1 my-sm-2">
                <div className="card-body py-4">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h3 className="mb-2">$ 24.300</h3>
                      <p className="mb-2">Total Earnings</p>
                      <div className="mb-0">
                        <span className="badge badge-subtle-success me-2">
                          {" "}
                          +5.35%{" "}
                        </span>
                      </div>
                    </div>
                    <div className="d-inline-block ms-3">
                      <div className="stat">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="dollar-sign"
                          className="lucide lucide-dollar-sign align-middle text-success"
                        >
                          <line x1="12" x2="12" y1="2" y2="22"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xxl-3 d-flex">
              <div className="card flex-fill m-1 my-sm-2">
                <div className="card-body py-4">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h3 className="mb-2">43</h3>
                      <p className="mb-2">Pending Orders</p>
                      <div className="mb-0">
                        <span className="badge badge-subtle-danger me-2">
                          {" "}
                          -4.25%{" "}
                        </span>
                      </div>
                    </div>
                    <div className="d-inline-block ms-3">
                      <div className="stat">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="shopping-bag"
                          className="lucide lucide-shopping-bag align-middle text-danger"
                        >
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                          <path d="M3 6h18"></path>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xxl-3 d-flex">
              <div className="card flex-fill m-1 my-sm-2">
                <div className="card-body py-4">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h3 className="mb-2">$ 18.700</h3>
                      <p className="mb-2">Total Revenue</p>
                      <div className="mb-0">
                        <span className="badge badge-subtle-success me-2">
                          {" "}
                          +8.65%{" "}
                        </span>
                      </div>
                    </div>
                    <div className="d-inline-block ms-3">
                      <div className="stat">
                                             </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         

          <div className="row">
            <div className="col-12 col-lg-8 d-flex">
              <div className="card flex-fill w-100 m-3">
                <div className="card-header">
                  <div className="card-actions float-end">
                    <div className="dropdown position-relative">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                      ></a>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">Sales / Revenue</h5>
                </div>
                <div className="card-body d-flex w-100">
                  <div className="align-self-center chart chart-lg">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className=""></div>
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className=""></div>
                      </div>
                    </div>
                    <canvas
                      id="chartjs-dashboard-bar"
                      width="852"
                      height="525"
                      className="chartjs-render-monitor"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex">
              <div className="card flex-fill w-100 m-3">
                <div className="card-header">
                  <h5 className="card-title mb-0">Overview</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-start"></div>

                  <div className="d-flex align-items-start"></div>

                  <div className="d-flex align-items-start"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
