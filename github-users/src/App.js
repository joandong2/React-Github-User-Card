import React from "react";
import "./App.css";
import Profile from "./components/Profile.js";
import Header from "./components/Header.js";
import { Container } from "reactstrap";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "joandong2",
            data: [],
            repos: [],
            followers: [],
        };
    }

    componentDidMount() {
        Promise.all([
            fetch(`https://api.github.com/users/${this.state.user}`),
            fetch(`https://api.github.com/users/${this.state.user}/repos`),
            fetch(`https://api.github.com/users/${this.state.user}/followers`),
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

    keyHandler = (key) => {
        //console.log(key);
        this.setState({ user: key });
    };

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevState.user);
        //console.log(this.state.user);

        if (prevState.user != this.state.user) {
            Promise.all([
                fetch(`https://api.github.com/users/${this.state.user}`),
                fetch(`https://api.github.com/users/${this.state.user}/repos`),
                fetch(
                    `https://api.github.com/users/${this.state.user}/followers`
                ),
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
    }

    render() {
        //console.log(this.state.key);
        return (
            <div className="App">
                <Header getKey={this.keyHandler} />
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
