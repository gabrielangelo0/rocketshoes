import styled from "styled-components";

export const TitleSectionContainer = styled.div`
padding: 7rem 0.5rem;

display: flex;
flex-direction: column;
justify-content: space-between;
order: 0;

@media (max-width: 768px) {
    order: 1;
    padding-top: 2rem;
        h1 {
        font-size: 2.8rem;
        }
}
`;