import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const Repo = (props) => {
    return (
        <>
            <Card body>
                <CardTitle>
                    <a
                        href={props.repo.html_url}
                        alt={props.repo.name}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.repo.name}
                    </a>
                </CardTitle>
                <CardText>{props.repo.description}</CardText>
                <p className="language">
                    <svg
                        className="bi bi-circle-fill"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="8" cy="8" r="8" />
                    </svg>
                    {props.repo.language}
                </p>
            </Card>
        </>
    );
};

export default Repo;
