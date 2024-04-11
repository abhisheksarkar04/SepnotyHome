import { Component } from "react";

import Slider from "../Slider/index";

import { MainContainer } from "./styledComponents";

import { SliderCon } from "./styledComponents";

import { Desc } from "./styledComponents";

import { ConsumerCon } from "./styledComponents";

import { Con } from "./styledComponents";

import { CrEle } from "./styledComponents";

import { CRLOGO } from "./styledComponents";

import { TestContainer } from "./styledComponents";

import { Heading } from "./styledComponents";

class Testimonials extends Component {
  render() {
    return (
      <MainContainer>
        <TestContainer>
          <Heading>
            Discover the Impact: Real Stories from CR Consumer Reports
          </Heading>
          <ConsumerCon>
            <CRLOGO>CR</CRLOGO>
            <Con>
              <CrEle>Consumer</CrEle>
              <CrEle>Reports</CrEle>
            </Con>
          </ConsumerCon>
          <Desc>
            Welcome to our testimonials and success stories section, where real
            customers share their experiences and triumphs with CR Consumer
            Reports. Dive in to discover firsthand accounts of how our services
            have made a difference in people's lives.
          </Desc>
        </TestContainer>
        <SliderCon>
          <Slider />
        </SliderCon>
      </MainContainer>
    );
  }
}

export default Testimonials;
