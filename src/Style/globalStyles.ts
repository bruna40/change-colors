import {
    createGlobalStyle,
} from 'styled-components';

type props = {
    theme: {
        background: string;
        button: string;
    };
};

export default createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10rem;
        background-color: ${( props:props ) => props.theme.background};
    };
    button {
        cursor: pointer;
        color: white;
        background-color: ${( props:props ) => props.theme.button};
    };
`;