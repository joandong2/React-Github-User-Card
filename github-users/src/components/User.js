import React from "react";
import { Col } from "reactstrap";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currUser: [],
        };
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.user.login}`)
            .then((res) => res.json())
            .then((user) => {
                this.setState({ currUser: user });
            })
            .catch((err) => {
                console.log("Err: ", err);
            });
    }

    render() {
        return (
            <>
                <Col sm="1">
                    <img
                        src={this.state.currUser.avatar_url}
                        alt={this.state.currUser.login}
                        className="avatar"
                    />
                </Col>
                <Col sm="10" className="user-card">
                    <p>
                        {this.state.currUser.name}{" "}
                        <span>{this.state.currUser.login}</span>
                    </p>
                    <p>{this.state.currUser.bio}</p>
                    <p>
                        <svg
                            className="bi bi-geo-alt"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                        </svg>{" "}
                        {this.state.currUser.location}
                    </p>
                </Col>
                <div className="col-sm-12 border-bottom"></div>
            </>
        );
    }
}

export default User;
