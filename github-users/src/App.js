import React from "react";
import "./App.css";
import Profile from "./components/Profile.js";
import { Container } from "reactstrap";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            myData: [],
            myFollowers: [],
        };
    }

    componentDidMount() {
        Promise.all([
            fetch("https://api.github.com/users/joandong2"),
            fetch("https://api.github.com/users/joandong2/followers"),
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) =>
                this.setState({
                    myData: data1,
                    myFollowers: data2,
                })
            );
    }

    render() {
        console.log(this.state.myData);
        return (
            <div className="App">
                <Container>
                    <Profile attrs={this.state.myData} />
                </Container>
            </div>
        );
    }
}

export default App;
