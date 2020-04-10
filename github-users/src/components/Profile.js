import React from "react";

const Profile = (props) => {
    console.log(props);
    return <h1>hello {props.attrs.login}</h1>;
};

export default Profile;
