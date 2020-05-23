import React, { Component } from "react";
import httpService from "../services/httpService";

const usersUrl = `${httpService.serverUrl}/api/users`;

class User extends Component {
  state = { user: {} };

  async componentDidMount() {
    try {
      const { data: user } = await httpService.get(
        usersUrl + `/${this.props.match.params.id}?includeAddress=true`
      );
      console.log(user);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <div className="badge text-wrap">{JSON.stringify(this.state.user)}</div>
    );
  }
}

export default User;
