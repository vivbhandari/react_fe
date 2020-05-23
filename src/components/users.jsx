import React, { Component } from "react";
import httpService from "../services/httpService";

const usersUrl = `${httpService.serverUrl}/api/users`;

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    try {
      const { data: users } = await httpService.get(usersUrl);
      console.log(users);
      this.setState({ users });
    } catch (ex) {}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm header">Id</div>
          <div className="col-sm header">Name</div>
          <div className="col-sm header">Role</div>
        </div>
        {this.state.users.map((user) => (
          <div className="row">
            <div className="col-sm">
              <a className="nav-link" href={"/user/" + user.id}>
                {user.id}
              </a>
            </div>
            <div className="col-sm">{user.name}</div>
            <div className="col-sm">{user.role}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
