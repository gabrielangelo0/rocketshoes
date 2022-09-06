import styled from "styled-components";

    interface TextTitleProps {
        size?: 'title-m' | 'title-x'
        color?: 'text' | 'text-description';
    }

export const TextTitle = styled.h1<TextTitleProps>`
    font-size: ${({ theme, size }) => theme.fontSizes[`${size ?? "title-x"}`]};
    color: ${({ theme, color }) => theme.colors[`${color ?? 'text'}`]};
    font-weight: 700;

    margin-bottom: 1.3rem;
`;

    interface TextRegularProps {
        size?: 'subtitle' | 'regular' | 'placeholder-label';
        color?: 'text' | 'text-description';
    }

export const TextRegular = styled.p<TextRegularProps>`
    font-size: ${({ theme, size }) => theme.fontSizes[`${size ?? "regular"}`]};
    color: ${({ theme, color }) => theme.colors[`${color ?? 'text'}`]};
    font-weight: 700;
`;