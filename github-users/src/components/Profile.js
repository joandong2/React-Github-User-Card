import React from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
} from "reactstrap";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import classnames from "classnames";
import User from "./User.js";
import Repo from "./Repo.js";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
        };
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    };

    render() {
        return (
            <Row>
                <Col md="3" className="information">
                    <div>
                        <img
                            src={this.props.attrs.avatar_url}
                            alt={this.props.attrs.name}
                        />
                    </div>
                    <h1>
                        <span>{this.props.attrs.name}</span>
                        <span>{this.props.attrs.login}</span>
                    </h1>
                    <p className="bio">{this.props.attrs.bio}</p>
                    <p>
                        <svg
                            className="bi bi-people-fill"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                clipRule="evenodd"
                            />
                        </svg>{" "}
                        {this.props.attrs.company}
                    </p>
                    <p>
                        <svg
                            className="bi bi-envelope"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
                                clipRule="evenodd"
                            />
                            <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
                        </svg>{" "}
                        <a href="mailto:johnoblenda@gmail.com">
                            johnoblenda@gmail.com
                        </a>
                    </p>
                    <p>
                        <svg
                            className="bi bi-bullseye"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M8 13A5 5 0 108 3a5 5 0 000 10zm0 1A6 6 0 108 2a6 6 0 000 12z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z"
                                clipRule="evenodd"
                            />
                            <path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>{" "}
                        <a href={this.props.attrs.blog}>
                            {this.props.attrs.blog}
                        </a>
                    </p>
                </Col>
                <Col md="9">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({
                                    active: this.state.activeTab === "1",
                                })}
                                onClick={() => {
                                    this.toggle("1");
                                }}
                            >
                                Overview
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({
                                    active: this.state.activeTab === "2",
                                })}
                                onClick={() => {
                                    this.toggle("2");
                                }}
                            >
                                Followers
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <p>Recent Repositories</p>
                            <Row>
                                {this.props.repos.slice(0, 6).map((repo, i) => {
                                    return (
                                        <Col sm="6" key={i}>
                                            <Repo repo={repo} />
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Row>
                                <Col sm="12" className="contribution-section">
                                    <img
                                        src={`http://ghchart.rshah.org/${this.props.attrs.login}`}
                                        alt={this.props.attrs.name}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            {this.props.followers.map((user) => {
                                return (
                                    <Row key={user.login}>
                                        <User user={user} />
                                    </Row>
                                );
                            })}
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        );
    }
}

export default Profile;
