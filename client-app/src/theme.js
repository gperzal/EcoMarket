// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        brand: {
            primary: {
                50: "#e6eef7",
                100: "#b3cce8",
                200: "#80aad9",
                300: "#4d88ca",
                400: "#33639f",
                500: "#2d5990",
                600: "#264e80",
                700: "#1f4270",
                800: "#183760",
                900: "#112b50",
            },
            secondary: {
                50: "#fff4e6",
                100: "#fde2bf",
                200: "#fcd199",
                300: "#fbbf72",
                400: "#f59e3c",
                500: "#dc8e36",
                600: "#c27e2f",
                700: "#a96e29",
                800: "#8f5e22",
                900: "#764e1c",
            },
        },
    },
    styles: {
        global: {
            body: {
                bg: "white",
                color: "gray.800",
                _dark: {
                    bg: "gray.900",
                    color: "gray.100",
                },
            },
        },
    },
});

export default theme;
