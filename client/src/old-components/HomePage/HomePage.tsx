
import Header from './Header.jsx'
import Header2 from './Header2.jsx'
import Navbar from './Navbar.jsx'
import WhatisGPT3 from './whatisGPT3.jsx'

type HomePageProps = {}

const HomePage = (props: HomePageProps) => {

    return (
        <div>
            
            <div style = {{ padding: "2%", maxWidth: "1400px", margin: "auto"  }}>
                <Navbar/>
                <Header/>
                <hr style = {{ marginBottom: "75px"}}/>
                <Header2/>
                <WhatisGPT3/>
            </div> 

            <div style = {{ height: "50px" }} />
            
        </div>
    );
}

export default HomePage;