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
          like: false,
        },
        {
          label: "JS is cool programming language",
          important: false,
          id: 2,
          like: false,
        },
        {
          label: "New Year",
          important: false,
          id: 3,
          like: false,
        },
      ],
      term: "",
      filter: "all",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.repeatCode = this.repeatCode.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
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

  repeatCode(param, id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      let newItem = {};

      if (param === "important") {
        newItem = { ...old, important: !old.important };
      } else {
        newItem = { ...old, like: !old.like };
      }

      const newData = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newData,
      };
    });
  }

  onToggleImportant(id) {
    this.repeatCode("important", id);
  }

  onToggleLiked(id) {
    this.repeatCode("liked", id);
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }
  onUpdateSearch(term) {
    this.setState({
      term,
    });
  }
  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }
  onFilterSelect(filter) {
    console.log("!");
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
