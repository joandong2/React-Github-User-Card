import React from "react";
import { Row, Col } from "reactstrap";

const Profile = (props) => {
    //console.log(props);
    return (
        <Row>
            <Col md="3">
                <div>
                    <img src={props.attrs.avatar_url} alt={props.attrs.name} />
                </div>
                <h1>
                    <span>{props.attrs.name}</span>
                    <span>{props.attrs.login}</span>
                </h1>
                <p>{props.attrs.bio}</p>
                <p>
                    <svg
                        class="bi bi-people-fill"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                            clip-rule="evenodd"
                        />
                    </svg>{" "}
                    {props.attrs.company}
                </p>
                <p>
                    <svg
                        class="bi bi-envelope"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                            clip-rule="evenodd"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
                            clip-rule="evenodd"
                        />
                        <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
                    </svg>{" "}
                    <a href="mailto:johnoblenda@gmail.com">
                        johnoblenda@gmail.com
                    </a>
                </p>
                <p>
                    <svg
                        class="bi bi-bullseye"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                            clip-rule="evenodd"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M8 13A5 5 0 108 3a5 5 0 000 10zm0 1A6 6 0 108 2a6 6 0 000 12z"
                            clip-rule="evenodd"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z"
                            clip-rule="evenodd"
                        />
                        <path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>{" "}
                    <a href={props.attrs.blog}>{props.attrs.blog}</a>
                </p>
            </Col>
            <Col md="9"></Col>
        </Row>
    );
};

export default Profile;
