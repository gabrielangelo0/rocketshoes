import styled from "styled-components";

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    margin: 0 auto;
    max-width: 80rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;