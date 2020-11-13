import React from "react";
import {Link} from "react-router-dom";
import {
    NavbarBrand,
    Navbar,
    Container,
    UncontrolledTooltip
} from "reactstrap";

class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
            color: "navbar-transparent"
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeColor);
    }

    changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            this.setState({
                color: "bg-info"
            });
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            this.setState({
                color: "navbar-transparent"
            });
        }
    };
    onCollapseExited = () => {
        this.setState({
            collapseOut: ""
        });
    };
    render() {
        return (
            <Navbar
                className={"fixed-top " + this.state.color}
                color-on-scroll="100"
                expand="lg"
            >
                <Container>
                    <div className="navbar-translate">
                        <Link to={'/'}>
                            <NavbarBrand
                                to="/"
                                tag={Link}
                                id="navbar-brand"
                            >
                                <span>• Cheap Daddy • </span>
                            </NavbarBrand>
                        </Link>
                        <UncontrolledTooltip placement="bottom" target="navbar-brand">
                            Go to home page
                        </UncontrolledTooltip>
                    </div>
                </Container>
            </Navbar>
        );
    }
}

export default CustomNavbar;
