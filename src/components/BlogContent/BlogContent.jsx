import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/certificate.jpg" alt="" />
          <h2>Know Us More</h2>
          <p>
            Our curriculum is another aspect that should excite any learner -
            whether interested in the fundamentals or the cutting-edge. Every
            course goes beyond the pale outlines of textbooks into research
            areas and open-ended questions. The curriculum adheres to the
            well-rounded development goals of NEP 2020. Students get a
            rock-solid grounding in the core subjects, widen their horizons with
            multidisciplinary components, both cores and open electives, from
            Arts, Humanities and the Social Sciences, and prepare for the future
            with the state-of-the-art electives that cover the research areas of
            the faculty. Finally, the focus is most definitely on learning not
            on training to pass exams without gaining any employable or research
            skills.
          </p>
          <br />
          <p>
            Add to all these a university that is consistently ranked in NIRF
            top-10, top-three for research and the best university in India
            according to Nature ranking for research (2020). Not to mention the
            serene and beautiful campus, students from all over India and with
            interests in arts to sciences, 24-hour access to labs and several
            buildings, where else do you get a better chance to explore
            yourselves and your interests, to develop holistically with
            tolerance and understanding of different cultures, we truly liberate
            your minds and expand your horizons. After all, the motto of the
            university is, "सा विद्या या विमुक्तये", the education that
            liberates ...
          </p>
          <br />
          <p>
           
          </p>
          <br />
          <p>
            Ready to take the next step? Feel free to share your thoughts and
            questions in the comments below. Your journey towards academic and
            personal growth begins here!
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea rows="5" placeholder="Your comment"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>

        <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Computer Applications</span>
            <span>21</span>
          </div>
          <div>
            <span>Artifical Intelligence</span>
            <span>28</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>15</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>34</span>
          </div>
          <div>
            <span>Information technology</span>
            <span>42</span>
          </div>
          <div>
            <span>Data Science</span>
            <span>22</span>
          </div>
          <div>
            <span>Deep learning</span>
            <span>30</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
