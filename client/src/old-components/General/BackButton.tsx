import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MetaContext from '../../MetaContext';

type BackButtonProps = {
    path: string;
    label: string;
}


const BackButton = (props: BackButtonProps) => {

    const { darkMode } = useContext(MetaContext);

    return (
        <Link to = { props.path } >
            <Button darkMode = { darkMode }>
                <FaArrowLeft /> { props.label }
            </Button>
        </Link>
    )

}

export default BackButton

const Button = styled.button<{ darkMode: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    background-color: transparent;
    color: ${ props => props.darkMode ? "grey" : "black" };
    font-size: 12px;
    border: none;
`