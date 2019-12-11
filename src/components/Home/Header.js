import React, {Component} from "react";
class Header extends Component{
    state={
      menuTriggered:false
    };
    handleClick=()=>{
        this.setState({menuTriggered:!this.state.menuTriggered})
    };
    render() {
        return (
            <>
            <header>
                <div className="sign__menu">
                    <div className="sign__in">Zaloguj</div>
                    <div className="sign__up">Załóż konto</div>
                </div>
                <button onClick={this.handleClick} className={`hamburger--squeeze ${this.state.menuTriggered&&"is-active"}`} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"/>
                        </span>
                </button>
                <nav>
                    <ul>
                        <li>Start</li>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacje i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </header>
                <ul className={`trigger__menu ${this.state.menuTriggered&&"visible"}`}>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacje i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </>
        )
    }
}

export default Header;