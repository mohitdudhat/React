import React from "react";

const Blog = () => {
  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-30">
            <div className="section-title3">Latest News</div>
            <div className="section-title">
              News <span>&</span> Blog
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="/img/slider/13.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>27</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Weight Lifting</a>
                  </span>
                  <h5>
                    <a href="post.html">What Is A Barbell Complex?</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="/img/slider/9.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>25</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Fitness</a>
                  </span>
                  <h5>
                    <a href="post.html">Upper Body Plyometric Exercises</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="/img/slider/3.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>24</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Training</a>
                  </span>
                  <h5>
                    <a href="post.html">What Is Tempo Training?</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="/img/slider/14.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>23</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Fitness</a>
                  </span>
                  <h5>
                    <a href="post.html">Dumbbell Chest Press Variations</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="/img/slider/2.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>22</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Trainers</a>
                  </span>
                  <h5>
                    <a href="post.html">The Best Online Tools For Trainers</a>
                  </h5>
                </div>
              </div>
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="/img/slider/4.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Apr</span> <i>21</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Fitness</a>
                  </span>
                  <h5>
                    <a href="post.html">Creative Gym Equipment Swaps</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
