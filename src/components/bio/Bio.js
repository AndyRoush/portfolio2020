import React from "react";
import "./Bio.css";
import NavButtonHolder from "../navButtonHolder/NavButtonHolder";

const Bio = props => {
  return (
    <>
      <NavButtonHolder leftButton="Portfolio" rightButton="Experience" />
      <div className="bio-container line-height">
        <h3>About Me</h3>
        <p>
          I got my start back in 2016 shortly after my first daughter was born.
          I started with free online courses and began to build simple static
          websites for fun. I realized I needed more than just free online
          courses, so I enrolled in a 6 month coding boot camp at the University
          of California, Irvine.
        </p>
        <p>
          Going through an intensive 6 month boot camp, working a full and part
          time job and having 2 very young children at home was one of the most
          challenging things I've ever done. If it was easy though, everyone
          would do it right? I knew the outcome would be well worth the
          struggle. So with the unwavering support of my wife, and motivation to
          provide for my family and give my girls the best life possible, I
          pushed through and graduated in July of 2018.
        </p>
        <p>
          Immediately after graduating the boot camp I got a job at UCI as a TA
          for 2 coding boot camp cohorts simultaneously. Starting out my career
          as a TA was great. I got to share my experiences with the students,
          and guide them down the path to success while helping them overcome
          the same struggles I encountered.
        </p>
        <p>
          6 months later I landed my first coding job as a JavaScript developer!
        </p>
        <br />
        <h3>Hobbies/Interests</h3>
        <p>Coding, of course.</p>
        <p>Gaming - PC and retro mostly.</p>
        <p>Retro junk - 80's and 90's stuff.</p>
        <p>
          Movies - Anything documentary, sci-fi, fantasy, or comedy and the
          occasional chick flick.
        </p>
        <p>Spending quality time with my family!</p>
        <p>
          Harry Potter.
        </p>
        <p>Cars.</p>
      </div>
    </>
  );
};

export default Bio;
