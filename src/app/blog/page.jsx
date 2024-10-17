"use client";
import Image from "next/image";
import Link from "next/link"; // for internal links
//import css file
import Image1 from "../../../public/hd.jpg"
import "../css/css-dashicons.min.css";
import "../css/mediaelement-mediaelementplayer-legacy.min.css";
import "../css/mediaelement-wp-mediaelement.min.css";

import React from "react";

const BlogPage = () => {
  return (
    <div style={{
        backgroundColor: "hsla(240,93%,5%,1)",
        backgroundImage: `
          radial-gradient(at 52% 81%, hsla(184,100%,8%,1) 0px, transparent 50%),
radial-gradient(at 52% 70%, hsla(187,90%,15%,1) 0px, transparent 50%);
        `,
      }}>
      <div className="page-template page-template-page-blog page-template-page-blog-php page page-id-175 wp-custom-logo">
        <div id="content" className="site-content">
          <section className="section-posts archive-posts js-posts-section">
            <div className="container">
              <h1 className="page-title mb-5 text-center">Blog</h1>

              <div className="row ">
                <div className="col-lg-12">
                  <div className="row archive-posts-row">
                    <div className="col-12 col-md-6 col-lg-12">
                      <article
                        id="post-483"
                        className="post-483 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-best-video-editing-app tag-content-creation tag-creativity tag-go-viral tag-trending-videos tag-trends"
                      >
                        <div className="row d-none d-lg-block">
                          <div className="col-12 post-time">
                            {" "}
                            <time datetime="2024-04-02T13:39:08+00:00">
                              March 31, 2024
                            </time>
                          </div>
                        </div>
                        <div className="row no-gutters archive-posts__padding">
                          <div className="col-lg-7 order-1 order-sm-1 pr-5 article-content-wrap">
                            <div className="archive-posts__header">
                              {" "}
                              <a href="5-tips-to-make-your-reels-tiktok-go-viral-in-2024.html">
                                <h5 className="entry-title mb-4 mt-lg-0">
                                  {" "}
                                  5 tips to make your Reels &amp; TikTok go
                                  viral in 2024
                                </h5>
                              </a>
                            </div>
                            <div className="archive-posts__content pr-5 archive-posts__text mb-5">
                              <p className="m-0">
                                Welcome to the fast-paced world of social media,
                                where trends come and go like the wind. 2023 was
                                a social media year to remember. From
                                Barbie-core painting the globe pink to the
                                advent of the &lsquo;female dinner,&#821;...
                              </p>
                            </div>{" "}
                            <a
                              className="read-more-link"
                              href="5-tips-to-make-your-reels-tiktok-go-viral-in-2024.html"
                            >
                              {" "}
                              Read more
                              <i className="icon icon-arrow-right-long"></i>{" "}
                            </a>
                          </div>
                          <div className="col-lg-5 order-0 order-sm-12">
                            <div className="image-background">
                              {" "}
                              <a
                              href="i-am-not-creativemyth-busters-of-your-creativity.html"
                              className="archive-posts__thumbnail-link"
                            >
                              <Image
                                width="768"
                                height="432"
                                src={Image1}
                                alt="Feature image"
                                title="Feature image"
                                className="img-fluid lazyload"
                              />
                            </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-md-6 col-lg-12">
                      <article
                        id="post-153"
                        className="post-153 post type-post status-publish format-standard has-post-thumbnail hentry category-creative"
                      >
                        <div className="row d-none d-lg-block">
                          <div className="col-12 post-time">
                            {" "}
                            <time datetime="2024-04-02T13:38:27+00:00">
                              March 18, 2024
                            </time>
                          </div>
                        </div>
                        <div className="row no-gutters archive-posts__padding">
                          <div className="col-lg-7 order-1 order-sm-1 pr-5 article-content-wrap">
                            <div className="archive-posts__header">
                              {" "}
                              <a href="4-practical-steps-to-find-and-develop-your-creative-skills.html">
                                <h5 className="entry-title mb-4 mt-lg-0">
                                  {" "}
                                  4 practical steps to find and develop your
                                  creative skills
                                </h5>
                              </a>
                            </div>
                            <div className="archive-posts__content pr-5 archive-posts__text mb-5">
                              <p className="m-0">
                                &ldquo;You have to be born
                                creative!&rdquo;&hellip;somehow it&rsquo;s the
                                way most people think. They say creative people
                                always hide some secrets and do not want to
                                share them. Here&rsquo;s why it can&rsquo;t be
                                true: NASA claims that 98% of children are ...
                              </p>
                            </div>{" "}
                            <a
                              className="read-more-link"
                              href="4-practical-steps-to-find-and-develop-your-creative-skills.html"
                            >
                              Read more{" "}
                              <i className="icon icon-arrow-right-long"></i>{" "}
                            </a>
                          </div>
                          <div className="col-lg-5 order-0 order-sm-12">
                            <div className="image-background">
                              {" "}
                              <a
                              href="i-am-not-creativemyth-busters-of-your-creativity.html"
                              className="archive-posts__thumbnail-link"
                            >
                              <Image
                                width="768"
                                height="432"
                                src={Image1}
                                alt="Feature image"
                                title="Feature image"
                                className="img-fluid lazyload"
                              />
                            </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-md-6 col-lg-12">
                      <article
                        id="post-184"
                        className="post type-post status-publish format-standard has-post-thumbnail hentry category-creative"
                      >
                        <div className="row d-none d-lg-block">
                          <div className="col-12 post-time">
                            <time datetime="2024-04-02T13:38:46+00:00">
                              March 18, 2024
                            </time>
                          </div>
                        </div>

                        <div className="row no-gutters archive-posts__padding">
                          <div className="col-lg-7 article-content-wrap pr-5">
                            <div className="archive-posts__header">
                              <a href="i-am-not-creativemyth-busters-of-your-creativity.html">
                                <h5 className="entry-title mb-4">
                                  &ldquo;I am not creative&rdquo;&hellip;myth
                                  busters of your creativity
                                </h5>
                              </a>
                            </div>

                            <div className="archive-posts__content pr-5 mb-5">
                              <p className="m-0">
                                &ldquo;I can’t draw, I can’t write, and dancing
                                didn’t go very well.&rdquo; Many label
                                themselves as non-creative, but creativity is
                                more than that...
                              </p>
                            </div>

                            <a
                              className="read-more-link"
                              href="i-am-not-creativemyth-busters-of-your-creativity.html"
                            >
                              Read more{" "}
                              <i className="icon icon-arrow-right-long"></i>
                            </a>
                          </div>

                          <div className="col-lg-5">
                            <a
                              href="i-am-not-creativemyth-busters-of-your-creativity.html"
                              className="archive-posts__thumbnail-link"
                            >
                              <Image
                                width="768"
                                height="432"
                                src={Image1}
                                alt="Feature image"
                                title="Feature image"
                                className="img-fluid lazyload"
                              />
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="post-pagination__wrapper col-12 text-center">
                      <div
                        className="post-pagination"
                        data-post-type="post"
                        data-cat-id="all"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>
        {`
        


        `}
      </style>
    </div>
  );
};

export default BlogPage;
