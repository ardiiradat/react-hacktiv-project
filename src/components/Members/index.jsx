import React from "react";
import PropTypes from "prop-types";

export class Members extends React.Component {
  constructor() {
    super();
    this.state = {
      titleMembers: "Bukan Members"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ titleMembers: "Members" });
    }, 1500);
  }

  render() {
    return (
      <React.Fragment>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-10">
              <h2>{this.state.titleMembers}</h2>
            </div>
            <div className="col-md-2">
              <p className="text-right mr-3">See All</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron jumbotron-fluid mx-3 my-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="thumbnail"
                        className="img-thumbnail rounded-circle"
                      />
                    </div>
                    <div className="col-md-10">
                      <h4>Organizers</h4>
                      <p>Adhy Wiranata : 4 Others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Members.propTypes = {};

export default Members;
