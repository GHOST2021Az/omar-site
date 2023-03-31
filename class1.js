import React, { Component } from 'react';
import "./team.css";

class Alex extends Component {
   state={

   }

   render(){
      return (
        <div>
          <>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.min.css"
              integrity="sha512-W3ZfgmZ5g1rCPFiCbOb+tn7g7sQWOQCB1AkDqrBG1Yp3iDjY9KYFh/k1AWxrt85LX5BRazEAuv+5DV2YZwghag=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            <section className="team-section py-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                      <div className="card-body p-4">
                        <div className="member-profile position-absolute w-100 text-center">
                          <img
                            className="rounded-circle mx-auto d-inline-block shadow-sm"
                            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="card-text pt-1">
                          <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                            sarah Lynch
                          </h5>
                          <div className="mb-3 text-center">
                            english teacher
                          </div>
                          <div></div>
                        </div>
                      </div>
                      {/*//card-body*/}
                      <div className="card-footer theme-bg-primary border-0 text-center">
                        <ul className="social-list list-inline mb-0 mx-auto">
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="linkedin-in"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                />
                              </svg>
                              {/* <i class="fab fa-linkedin-in fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-twitter fa-w-16 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                              </svg>
                              {/* <i class="fab fa-twitter fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-medium fa-w-14 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="medium"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
                                />
                              </svg>
                              {/* <i class="fab fa-medium fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                        </ul>
                        {/*//social-list*/}
                      </div>
                      {/*//card-footer*/}
                    </div>
                    {/*//card*/}
                  </div>
                  {/*//col*/}
                  <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                      <div className="card-body p-4">
                        <div className="member-profile position-absolute w-100 text-center">
                          <img
                            className="rounded-circle mx-auto d-inline-block shadow-sm"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="card-text pt-1">
                          <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                            mike Thomas
                          </h5>
                          <div className="mb-3 text-center">
                            full task developer
                          </div>
                          <div></div>
                        </div>
                      </div>
                      {/*//card-body*/}
                      <div className="card-footer theme-bg-primary border-0 text-center">
                        <ul className="social-list list-inline mb-0 mx-auto">
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="linkedin-in"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                />
                              </svg>
                              {/* <i class="fab fa-linkedin-in fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-twitter fa-w-16 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                              </svg>
                              {/* <i class="fab fa-twitter fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-github fa-w-16 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="github"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                              </svg>
                              {/* <i class="fab fa-github fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                        </ul>
                        {/*//social-list*/}
                      </div>
                      {/*//card-footer*/}
                    </div>
                    {/*//card*/}
                  </div>
                  {/*//col*/}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                      <div className="card-body p-4">
                        <div className="member-profile position-absolute w-100 text-center">
                          <img
                            className="rounded-circle mx-auto d-inline-block shadow-sm"
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="card-text pt-1">
                          <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                            Jean Torres
                          </h5>
                          <div className="mb-3 text-center">Marketing</div>
                          <div>. </div>
                        </div>
                      </div>
                      {/*//card-body*/}
                      <div className="card-footer theme-bg-primary border-0 text-center">
                        <ul className="social-list list-inline mb-0 mx-auto">
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-twitter fa-w-16 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                              </svg>
                              {/* <i class="fab fa-twitter fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-facebook-f fa-w-10 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="facebook-f"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                />
                              </svg>
                              {/* <i class="fab fa-facebook-f fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-instagram fa-w-14 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                              </svg>
                              {/* <i class="fab fa-instagram fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                        </ul>
                        {/*//social-list*/}
                      </div>
                      {/*//card-footer*/}
                    </div>
                    {/*//card*/}
                  </div>
                  {/*//col*/}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                      <div className="card-body p-4">
                        <div className="member-profile position-absolute w-100 text-center">
                          <img
                            className="rounded-circle mx-auto d-inline-block shadow-sm"
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt=""
                          />
                        </div>
                        <div className="card-text pt-1">
                          <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                            Doris Meyer
                          </h5>
                          <div className="mb-3 text-center">graphic design</div>
                          <div></div>
                        </div>
                      </div>
                      {/*//card-body*/}
                      <div className="card-footer theme-bg-primary border-0 text-center">
                        <ul className="social-list list-inline mb-0 mx-auto">
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-twitter fa-w-16 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                              </svg>
                              {/* <i class="fab fa-twitter fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-instagram fa-w-14 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                              </svg>
                              {/* <i class="fab fa-instagram fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                        </ul>
                        {/*//social-list*/}
                      </div>
                      {/*//card-footer*/}
                    </div>
                    {/*//card*/}
                  </div>
                  {/*//col*/}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                      <div className="card-body p-4">
                        <div className="member-profile position-absolute w-100 text-center">
                          <img
                            className="rounded-circle mx-auto d-inline-block shadow-sm"
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                          />
                        </div>
                        <div className="card-text pt-1">
                          <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                            Ronald Reid
                          </h5>
                          <div className="mb-3 text-center">iOS Developer</div>
                          <div></div>
                        </div>
                      </div>
                      {/*//card-body*/}
                      <div className="card-footer theme-bg-primary border-0 text-center">
                        <ul className="social-list list-inline mb-0 mx-auto">
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-twitter fa-w-16 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                              </svg>
                              {/* <i class="fab fa-twitter fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-github fa-w-16 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="github"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                              </svg>
                              {/* <i class="fab fa-github fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark" href="#">
                              <svg
                                className="svg-inline--fa fa-instagram fa-w-14 fa-fw"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                              </svg>
                              {/* <i class="fab fa-instagram fa-fw"></i> Font Awesome fontawesome.com */}
                            </a>
                          </li>
                        </ul>
                        {/*//social-list*/}
                      </div>
                      {/*//card-footer*/}
                    </div>
                    {/*//card*/}
                  </div>
                  {/*//col*/}
                </div>
                {/*//row*/}
              </div>
            </section>
          </>
          
        </div>
      );
   }
}

export default  Alex