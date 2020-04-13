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

    callPromise = (user) => {
        Promise.all([
            fetch(`https://api.github.com/users/${user}`),
            fetch(`https://api.github.com/users/${user}/repos`),
            fetch(`https://api.github.com/users/${user}/followers`),
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
    };

    keyHandler = (key) => {
        //console.log(key);
        this.setState({ user: key });
    };

    componentDidMount() {
        this.callPromise(this.state.user);
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevState.user);
        //console.log(this.state.user);

        if (prevState.user != this.state.user) {
            this.callPromise(this.state.user);
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
