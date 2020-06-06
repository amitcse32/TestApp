import React, { Component } from "react";
import CourseCard from "./CourseCard";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
export default class CourseSection extends Component {

  renderCoursesList(){
    let courses=[];
    this.props.items.map((item)=>{
      courses.push(<CourseCard item={item} />)
    })
    return courses;
  }

  render() {
    if(this.props.items.length===0){
      return <h1>Course not found for this category</h1>
    }
    return (
      <Carousel
        breakpoints={{
          640: {
            slidesPerPage: 1,
            arrows: false,
          },
          900: {
            slidesPerPage: 2,
            arrows: false,
          },
        }}
        slidesPerScroll={2}
        slidesPerPage={4}
        addArrowClickHandler
        arrowLeft={
          <div class="arrowsSlider">
            <div class="arrow">
              <img src="assets/images/prev.png" alt="" />
            </div>
          </div>
        }
        arrowRight={
          <div class="arrowsSlider">
            <div class="arrow">
              <img src="assets/images/next.png" alt="" />
            </div>
          </div>
        }
      
        arrows
      >
          {this.renderCoursesList()}
        
      </Carousel>
    );
  }
}
