import styled from "styled-components";

export const NavigationOneContainer = styled.nav`
    background-color: ${({theme}) => theme.primary};
    max-width: 122px;
    width: 100%;
    /* height: 553px; */
    position: absolute;
    top: 0;
    left: 8.85%;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    padding: 4.93rem 1rem 10.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .navOne__btn {
        background-color: transparent;
        border: none;
    }

    ul {
        margin-top: 4.62rem;

        li {
            margin-bottom: 2.81rem;

            &:last-child {
                margin-bottom: 0;
            }

            a {

                svg {
                    width: 36px;
                    height: 36px;
                    color: ${({theme}) => theme.secondary};
                }
            }
        }
    }
`;