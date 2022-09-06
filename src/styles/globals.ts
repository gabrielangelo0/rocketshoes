import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body, input, button {
        font-family: ${({ theme }) => theme.fonts.roboto};
        background: ${({ theme }) => theme.colors['background']};
    }
`;
