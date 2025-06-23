"use client";
import Link from "next/link";
import { useSplitText } from "@/hooks/useSplitText";

const Stratagies = () => {
  const textRefs = useSplitText(); // ✅ Using the existing GSAP animation

  return (
    <div className="elementor-widget-container">
      <section className="tp-cate__area fix pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-cate__title-box">
                <h3
                  ref={(el) => {
                    if (el) textRefs.current.push(el);
                  }}
                  className="tp-cate__title mb-40 tp-split__text tp-split__in-right"
                >
                  A good STRATEGY delivers a STORY that builds BRANDS that leave
                  a lasting IMPRESSION.
                </h3>
                <div className="tp-hero__action d-flex align-items-center">
                  <span>
                    <Link
                      className="tp-hero__action-btn"
                      href="/services"
                      rel="nofollow"
                      target="_self"
                    >
                      <span>
                        <svg
                          width="33"
                          height="33"
                          viewBox="0 0 33 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.99996 26.5469L29.4548 7.97636M6.73828 2L31.2851 6.73832L26.5468 31.2852"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </span>
                  <Link href="/services/" rel="nofollow" target="_self">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-cate__dsc-wrap">
                <div className="tp-cate__dsc mb-20">
                  <p>
                    For the better part of the last two decades, RITZ MEDIA
                    WORLD has been building narratives that drive competitive
                    movements. They don’t just influence behaviors but develop
                    lasting habits.
                  </p>
                  <p>
                    We pride ourselves in going out of our way to understand the
                    consumer mindset in every walk of life. This enables us to
                    build campaigns that don’t just speak at them, but we build
                    campaigns that speak to them.
                  </p>
                </div>
                <div className="tp-cate__list-box pt-10">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tp-cate__list">
                        <Link href="#">
                          <i
                            aria-hidden="true"
                            className="fas fa-check-circle"
                          ></i>
                          <span>Brand Identity </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tp-cate__list">
                        <Link href="#">
                          <i
                            aria-hidden="true"
                            className="fas fa-check-circle"
                          ></i>
                          <span>Advertising Design</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tp-cate__list">
                        <Link href="#">
                          <i
                            aria-hidden="true"
                            className="fas fa-check-circle"
                          ></i>
                          <span>Content Marketing </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="tp-cate__list">
                        <Link href="#">
                          <i
                            aria-hidden="true"
                            className="fas fa-check-circle"
                          ></i>
                          <span>Digital Marketing </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stratagies;
