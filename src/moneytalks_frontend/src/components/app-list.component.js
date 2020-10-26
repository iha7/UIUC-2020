import React, { Component } from "react";
import AppDataService from "../services/app.service";
import { Link } from "react-router-dom";

export default class AppList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveData = this.setActiveData.bind(this);
    this.removeAllData = this.removeAllData.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      data: [],
      currentData: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveData() {
    AppDataService.getAll()
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveData();
    this.setState({
      currentData: null,
      currentIndex: -1
    });
  }

  setActiveData(data, index) {
    this.setState({
      currentData: data,
      currentIndex: index
    });
  }

  removeAllData() {
    AppDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    AppDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, data, currentData, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Data List</h4>

          <ul className="list-group">
            {data &&
              data.map((data, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveData(data, index)}
                  key={index}
                >
                  {data.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllData}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentData ? (
            <div>
              <h4>Data information</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentData.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentData.description}
              </div>
              <div>
                <label>
                  <strong>Status: Published</strong>
                </label>{" "}
                {/* {currentData.published ? "Published" : "Pending"} */}
              </div>

              
              {/* <Link
                to={"/home/" + currentData.id}
                className="badge badge-warning"
              >
                Edit
              </Link> */}
              
            </div>
          ) : (
            <div>
              <br />
              <p>Click add to add data</p>
            </div>
          )}
        </div>
      </div>
    );// ...
  }
}