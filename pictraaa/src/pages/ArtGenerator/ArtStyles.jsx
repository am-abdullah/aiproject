import React from "react";
import "./art-generator.scss";
import img1 from "@images/style1.svg";
import img2 from "@images/style2.svg";
import img3 from "@images/style3.svg";
import img4 from "@images/style4.svg";
import img5 from "@images/style5.svg";
import img6 from "@images/style6.svg";
import img7 from "@images/style7.svg";
import img8 from "@images/style8.svg";
import img9 from "@images/style9.svg";
import img10 from "@images/style10.svg";
import img11 from "@images/style11.svg";
import img12 from "@images/style12.svg";
export default function ArtStyles() {
  return (
    <>
      <div
        className="modal fade art_modal"
        id="stylesModel"
        tabindex="-1"
        aria-labelledby="stylesModelLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="stylesModelLabel">
                Art Styles
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="model_search_form">
                <form action="">
                  <input type="text" placeholder="Search" />
                </form>
              </div>
              <div className="model_cards">
                <div className="model_cards_wrapper">
                  <div className="row g-1">
                    <div className="col-4">
                      <img
                        src={img1}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img3}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img4}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img5}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img6}
                        className="w-100"
                        alt="search"
                      />
                    </div>

                    <div className="col-4">
                      <img
                        src={img7}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img8}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img9}
                        className="w-100"
                        alt="search"
                      />
                    </div>

                    <div className="col-4">
                      <img
                        src={img10}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img11}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={img12}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
