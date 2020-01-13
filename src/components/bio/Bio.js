import React from "react";
import { Link } from "react-router-dom";
import "./Bio.css";
import NavButtonHolder from "../navButtonHolder/NavButtonHolder";

const Bio = props => {
  return (
    <>
      <NavButtonHolder leftButton="portfolio" rightButton="experience" />
      <div className="bio-container line-height">
        <h3>About Me</h3>
        <p>
          Thanks for visiting my website! My name is Andy Roush, and I'm a front
          end software developer.
        </p>
        <p>
          I got my start in coding back in 2016 shortly after my first daughter
          was born. I started with free online courses and began to build simple
          static websites for fun. I realized I needed more than just free
          online courses, so I enrolled in a 6 month coding boot camp at the
          University of California, Irvine.
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
        <h3>Hobbies/Interests</h3>
        <p>Coding (obviously =P)</p>
        <p>Gaming</p>
        <p>Harry Potter</p>
        <p>Retro junk (mostly 80's and 90's)</p>
        <p>Having fun with my kids!</p>
        <p>Cars</p>
        <p>Techmology (no that's not a typo, I just love Ali G skits =D)</p>
        <p>Mugs</p>
      </div>
    </>
  );
};

export default Bio;
