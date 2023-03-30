import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import styled from "styled-components";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_container">
                    <p>
                        <a href="#home">Home</a>
                    </p>
                    <p>
                        <a href="/OSCE">OSCE</a>
                    </p>
                    <div style={{ display: "flex", flexFlow: "column" }}>
                        <ComeingSoon> Coming Soon</ComeingSoon>
                        <div style={{ textDecoration: "line-through" }}>
                            <p>MedBook</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexFlow: "column" }}>
                        <ComeingSoon> Coming Soon</ComeingSoon>
                        <div style={{ textDecoration: "line-through" }}>
                            {" "}
                            <p>Qbank</p>{" "}
                        </div>
                    </div>

                    <div style={{ display: "flex", flexFlow: "column" }}>
                        <ComeingSoon> Coming Soon</ComeingSoon>
                        <div style={{ textDecoration: "line-through" }}>
                            {" "}
                            <p>Anatomy</p>{" "}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button>Sign up</button>
            </div> */}
            <div className="gpt3__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p>
                                <a href="#home">Home</a>
                            </p>
                            <p>
                                <a href="/OSCE">OSCE</a>
                            </p>
                            <div style={{ textDecoration: "line-through" }}>
                                <p>MedBook</p>
                            </div>
                            <ComeingSoon> Coming Soon</ComeingSoon>
                            <div style={{ textDecoration: "line-through" }}>
                                {" "}
                                <p>Qbank</p>{" "}
                            </div>
                            <ComeingSoon> Coming Soon</ComeingSoon>
                            <div style={{ textDecoration: "line-through" }}>
                                {" "}
                                <p>Anatomy</p>{" "}
                            </div>
                            <ComeingSoon> Coming Soon</ComeingSoon>
                        </div>
                        {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

const ComeingSoon = styled.div`
    vertical-align: super;
    justify-contents: center;
    margin-top: -14px;
    font-size: 10px;
    margin-left: 15px;
`;
