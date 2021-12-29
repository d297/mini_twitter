import React, { Component } from "react";
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";
//import style from "./App.module.css";
import { Button } from "reactstrap";
import { data } from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to learn React",
          important: true,
          id: 1,
        },
        {
          label: "JS is cool programming language",
          important: false,
          id: 2,
        },
        {
          label: "New Year",
          important: false,
          id: 3,
        },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArray = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArray,
      };
    });
  }
  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
