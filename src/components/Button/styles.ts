import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    padding: 2rem 5rem;

    border: none;
    background: ${({ theme }) => theme.colors['button']};
    color: white;
    text-transform: uppercase;

    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes["subtitle-m"]};

    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.colors["button-hover"]};
    }
`;