import { Subtitle } from "../General/Subtitle"
import { Title } from "../General/Title"
import anatomy from '../../images/anatomy.png';
import { useContext } from "react";
import MetaContext from "../../MetaContext";

export const AnatomyPage = () => {

    const { darkMode } = useContext(MetaContext);

    return (
        <>

            <Title darkMode = { darkMode }> Anatomy </Title>

            <Subtitle darkMode = { darkMode }> Just a placeholder </Subtitle>

            {/* ------------------------------ biodigital iframe ------------------------------ */}
            <div style = {{ height: "500px" }}>
                <div style = {{ textAlign: "center" }}><img src = { anatomy } width = "80%" ></img></div>
            </div>

        </>
    )
}