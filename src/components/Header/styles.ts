import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    margin: 0 auto;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    max-width: 90rem;
    
    > div {
        display: flex;
        align-items: center;
        padding: 2rem 0;
        background: none;

        ul {
            margin: 0 auto;

            display: flex;
            text-transform: uppercase;
            font-weight: 700;

            li {
                cursor: pointer;
                > div {
                    background: #fff;
                    display: flex;
                    align-items: center;
                    padding: 0.1rem;
                    gap: 1rem;

                    input {
                        background: none;
                        border: none;

                        &:focus {
                            outline: none;
                            border: none;
                        }
                    }
                }
            }
        }
        ul:nth-child(2) {
            gap: 90px;
        }
    }

    @media (max-width: 768px) {
        > div {
                background: rgba(196, 196, 196, 0.8);
                padding: 1rem 0;
            }
        ul:nth-child(2) {
            display: none;
        }
    }
`;