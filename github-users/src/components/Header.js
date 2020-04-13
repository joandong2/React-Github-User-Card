import React from "react";
import { Row, Col } from "reactstrap";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
        };
    }

    onChangeHandler = (e) => {
        // workaround with state being one step behind
        // this.setState({ key: e.target.value }, () => {
        //     console.log(this.state.key);
        // });
        this.setState({ key: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.getKey(this.state.key);
    };

    render() {
        return (
            <div className="header">
                <Row>
                    <Col sm="2">
                        <form
                            className="form-inline"
                            onSubmit={this.submitHandler}
                        >
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                name="search"
                                placeholder="username..."
                                value={this.state.key}
                                onChange={this.onChangeHandler}
                            />
                            <button className="btn btn-primary btn-sm">
                                Search
                            </button>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
