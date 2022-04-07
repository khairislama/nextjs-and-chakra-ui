import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#F5FEE5",
        100: "#E1FBB2",
        200: "#CDF781",
        300: "#B8EE56",
        400: "#A2E032",
        500: "#8AC919",
        600: "#71AB09",
        700: "#578602",
        800: "#3C5E00",
        900: "#203300",
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
