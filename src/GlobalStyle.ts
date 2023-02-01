import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background-color: ${({ theme }) => theme.color.alabaster}
    }
`;
