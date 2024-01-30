import React from "react";
import "./art-generator.scss";
import art_gen_card1 from "@images/model1.svg";
import art_gen_card2 from "@images/model2.svg";
import art_gen_card3 from "@images/model3.svg";
import art_gen_card4 from "@images/model4.svg";
import art_gen_card5 from "@images/model5.svg";
import art_gen_card6 from "@images/model6.svg";
import art_gen_card7 from "@images/model7.svg";
import art_gen_card8 from "@images/model8.svg";
import art_gen_card9 from "@images/model9.svg";

export default function ArtModal() {
  return (
    <>
      <div
        className="modal fade art_modal"
        id="modalsModel"
        tabindex="-1"
        aria-labelledby="modalsModelLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalsModelLabel">
                Models
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
                  <input type="text" placeholder="Search" className="text-white"/>
                </form>
              </div>
              <div className="model_cards">
                <div className="model_cards_wrapper">
                  <div className="row g-1">
                    <div className="col-4">
                      <img
                        src={art_gen_card1}
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
                        src={art_gen_card3}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card4}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card5}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card6}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card7}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card8}
                        className="w-100"
                        alt="search"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art_gen_card9}
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
