import React, { Component } from "react";
import FilterSection from "../../components/FilterSection";
import CourseSection from "../../components/CourseSection";
import {courses} from '../../data/DataSource'
export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryId: 1,
    };
  }

  onCategorySelected(id) {
     
    this.setState({
      selectedCategoryId: id,
    });
  }

  scrollLeftButtonClicked() {
    alert("test");
    const artSection = document.getElementById("test");
    alert(artSection);
    artSection.scrollLeft += 200;
  }

  getCoursesByCategory(){
    let coursesList=[];
    courses.map((item)=>{
      if(item.categoryId===this.state.selectedCategoryId ||this.state.selectedCategoryId===6){
        coursesList.push(item)
      }
    })
    return coursesList;
  }

  render() {
    return (
      <div class="areMain">
        <div class="wrap">
          <h1>Learn what fascinates you</h1>
          <FilterSection
            selectedCategoryId={this.state.selectedCategoryId}
            onCategorySelected={(selectedCategoryId) =>
              this.onCategorySelected(selectedCategoryId)
            }
          />
          <div id="test" class="sliderArea">
            <CourseSection items={this.getCoursesByCategory()} />
          </div>
        </div>
      </div>
    );
  }
}
