import styled from "styled-components";

export const NavigationTwoContainer = styled.nav`
    max-width: 400px;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.secondary};
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
`;

export const NavTwoOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
    position: relative;
    width: 100%;

    .NavTwoBtn {
        text-transform: uppercase;
        background-color: transparent;
        border: none;
        width: 122px;
        height: 200px;
        background-color: ${({theme}) => theme.primary};
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 45px;

        span {
            font-size: 34px;
            font-weight: 200;
            margin-bottom: 1rem;
        }
    }
    .nav__welcome {
        font-family: 'Montserrat', sans-serif;
        color: ${({theme}) => theme.white};
        text-align: center;
        text-transform: uppercase;

        .nav__welcome__date {
            font-size: 93px;
            font-weight: 300;
        }
        .nav__welcome__txt {
            p {
                font-size: 48px;
                font-weight: 300;

                &:last-child {
                    font-size: 26px;
                    font-weight: 200;
                }
            }
        }
    }
    .nav__welcome__bottom {
        height: 122px;
        max-width: 350px;
        width: 100%;
        position: absolute;
        bottom: 80px;
        left: 0;
        background-color: ${({theme}) => theme.primary};
        box-shadow: 0px 5px 7px #00000029;
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        display: flex;
        justify-content: end;
        align-items: center;
        
        p {
            text-transform: uppercase;
            margin-right: 70px;
        }
    }
`;

export const NavTwoTwo = styled.div`

`;