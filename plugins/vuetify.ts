import { createVuetify, ThemeDefinition } from "vuetify";
import { md3 } from "vuetify/blueprints";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const tabNewsTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFF",
    surface: "#FFF",
    primary: "#24292F",
    secondary: "#03DAC6",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    theme: {
      defaultTheme: "tabNewsTheme",
      themes: {
        tabNewsTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
