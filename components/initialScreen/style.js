import styled from "styled-components";

export const InitialScreenContainer = styled.section`
    .animated__div {
        
    }
    background-color: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.white};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    /* reset */
    button {
        all: unset;
        outline: unset;
    }

    .SwitchRoot {
        width: 535px;
        height: 245px;
        background-color: ${({theme}) => theme.primary};
        border-radius: 9999px;
        position: relative;
        box-shadow: 0 2px 10px var(--blackA7);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .SwitchRoot:focus {
        box-shadow: 0 0 0 2px black;
    }
    .SwitchRoot[data-state='checked'] {
        background-color: ${({theme}) => theme.primary};
    }

    .SwitchThumb {
        display: block;
        width: 200px;
        height: 200px;
        background-color: ${({theme}) => theme.secondary};
        border-radius: 9999px;
        box-shadow: 0 2px 2px var(--blackA7);
        transition: transform 100ms;
        transform: translateX(20px);
        will-change: transform;
    }
    .SwitchThumb[data-state='checked'] {
        transform: translateX(310px);
    }

    .Label {
        color: white;
        font-size: 15px;
        line-height: 1;
    }
`;