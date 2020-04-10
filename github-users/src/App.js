import React from "react";
import "./App.css";
import Profile from "./components/Profile.js";
import { Container } from "reactstrap";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            repos: [],
            followers: [],
        };
    }

    componentDidMount() {
        Promise.all([
            fetch("https://api.github.com/users/joandong2"),
            fetch("https://api.github.com/users/joandong2/repos"),
            fetch("https://api.github.com/users/joandong2/followers"),
        ])
            .then(([res1, res2, res3]) =>
                Promise.all([res1.json(), res2.json(), res3.json()])
            )
            .then(([data1, data2, data3]) =>
                this.setState({
                    data: data1,
                    repos: data2,
                    followers: data3,
                })
            );
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Profile
                        attrs={this.state.data}
                        repos={this.state.repos}
                        followers={this.state.followers}
                        // following={this.state.following}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
