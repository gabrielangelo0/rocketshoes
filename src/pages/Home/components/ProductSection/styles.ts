import styled from "styled-components";

export const ProductSectionContainer = styled.section`
    background: ${({ theme }) => theme.colors["main-background"]};
    background-size: contain;
    padding: 1.125rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    order: 0;
`;
export const MainProduct = styled.div`
    margin-top: 10rem;

    @media (max-width: 768px) {
        margin-top: 5rem;
        img {
            width: 100%;
        }
    }
`;
export const OtherImages = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.3rem;
    
    img {
        cursor: pointer;
        transition: 0.4s;
    }

    img:nth-child(2) {
        border-bottom: 5px solid ${({ theme }) => theme.colors.button};
    }

    @media (max-width: 768px) {
        gap: 1rem;
        img {
            width: 100%;
        }
    }
`;