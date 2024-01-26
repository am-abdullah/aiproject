import React from "react";
import "./art-generator.scss";
import TopBar from "./TopBar";
import SideBar from "./Sidebar";
import img from "@images/generate_tool_img.png";
export default function FormText() {
  return (
    <>
      <div className="main_wrapper">
        <header className="art_header bg-black">
          <TopBar />
        </header>
        <main>
          <section className="container-fluid token py-0">
            <div className="row h-100">
              <div class="col-9">
                <div class="main_art_wrapper position-relative">
                  <div class="main_img text-center">
                    <img src={img} alt="img" />
                  </div>
                  <div class="generate_form my-5 pt-5">
                    <div class="hero_form">
                      <form action="" class="position-relative">
                        <input
                          type="text"
                          placeholder="A man on mars"
                          class="w-100 p-3"
                        />
                        <button
                          type="submit"
                          class="btn btn-primary position-absolute"
                        >
                          <i class="bi bi-star-fill"></i>
                          Generate
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <SideBar />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
