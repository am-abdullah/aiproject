import React from "react";
import "./art-generator.scss";
import art_gen_card2 from "@images/art-gen-card2.png";
export default function ArtStyles() {
  return (
    <>
      <div
        className="modal fade"
        id="stylesModel"
        tabindex="-1"
        aria-labelledby="stylesModelLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-scrollable">
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
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card2}
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
