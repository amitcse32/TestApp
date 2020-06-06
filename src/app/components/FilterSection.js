import React, { Component } from "react";
import { category } from "../data/DataSource";
import FilterItem from "./FilterItem";
export default class FilterSection extends Component {
  renderFilters() {
    let categoryArray = [];
    category.map((item,index) => {
      categoryArray.push(<FilterItem selectedItem={this.props.selectedCategoryId} item={item} onItemClick={(id)=>{this.props.onCategorySelected(id)}} />);
    });
    return categoryArray;
  }

  render() {
    return (
      <div class="tabsHeading">
        <ul>{this.renderFilters()}</ul>
      </div>
    );
  }
}
