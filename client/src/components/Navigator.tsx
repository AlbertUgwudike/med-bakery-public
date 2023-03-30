import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MetaContext from "../MetaContext";
import { Logout, Login } from "./HomePage/LoginLogout";
import Navbar from "./HomePage/Navbar";

type NavigatorProps = {
  selection: string;
};



const options = [
  { title: "Home", path: "", av: true },
  { title: "OSCE", path: "/OSCE", av: true },
  // { title: "Data Interpretation", path: "/DataInterpretation", av: true },
  // { title: "Dashboard", path: "/User", av: true },
  // { title: "MedBook", path: "/User", av: false },
  // { title: "QBank", path: "/User", av: false },
];

const Navigator = ({ selection }: NavigatorProps) => {
  const { token, setToken } = useContext(MetaContext);

  return (
    <div> 

    <Container>
      <OptionsContainer>
        {options.map(({ title, path, av }, i) => (
          <OptionLink key={i} to={av ? path : "#"}>
            <Option av={av} selected={title === selection}>
              {title}
            </Option>
          </OptionLink>
        ))}
      </OptionsContainer>
      {token ? <Logout darkMode={true} setToken={setToken} /> : <Login label="Sign Up / Login" />}
    </Container>

    </div>
  );
};

const Container = styled.div`
margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  @media screen and (max-width: 1050px) {
    .gpt3__navbar-links_container {
        display: none;
    }

    .gpt3__navbar-menu {
        display: flex;
    }
}

@media screen and (max-width: 700px) {
    .gpt3__navbar {
        padding: 2rem 4rem;
    }
}

@media screen and (max-width: 550px) {
    .gpt3__navbar {
        padding: 2rem;
    }

    .gpt3__navbar-sign {
        display: none;
    }

    .gpt3__navbar-menu_container {
        top: 20px;
    }

    .gpt3__navbar-menu_container-links-sign {
        display: block;
    }
  
`;

const LogoTitle = styled.div`
  margin: 10px 0;
  h1 {
    font-family: "Jakarta";
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  margin-left: ;
  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
  
`;

const OptionLink = styled(Link)`
  text-decoration: none;
  margin: 0 0px;
`;

const Option = styled.div<{ av: boolean; selected: boolean }>`
  padding: 15px;
  background-color: ${props => (props.selected ? "#031B34" : "none")};
  text-decoration: ${props => (props.av ? "none" : "line-through")};
  color: ${props => (props.selected ? "#white" : "white")};
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);
  font-weight: 500;
    font-size: 18px;
    line-height: 25px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #fad000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  span {
    color: black;
    font-weight: bold;
  }
`;

export default Navigator;
