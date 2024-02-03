import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
    font-family: "Anzeigen Grotesk T";
    font-weight: 500;
    src: url("https://db.onlinewebfonts.com/t/6556cb6ed2e1262bbcb4d7c097e50335.eot");
    src: url("https://db.onlinewebfonts.com/t/6556cb6ed2e1262bbcb4d7c097e50335.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/6556cb6ed2e1262bbcb4d7c097e50335.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/6556cb6ed2e1262bbcb4d7c097e50335.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/6556cb6ed2e1262bbcb4d7c097e50335.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/6556cb6ed2e1262bbcb4d7c097e50335.svg#Anzeigen Grotesk T")format("svg");
}
@font-face {
    font-family: "Inter";
    src: url("https://db.onlinewebfonts.com/t/120e0ce82c6e82ef6e31c808ae2ebf22.eot");
    src: url("https://db.onlinewebfonts.com/t/120e0ce82c6e82ef6e31c808ae2ebf22.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/120e0ce82c6e82ef6e31c808ae2ebf22.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/120e0ce82c6e82ef6e31c808ae2ebf22.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/120e0ce82c6e82ef6e31c808ae2ebf22.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/120e0ce82c6e82ef6e31c808ae2ebf22.svg#Inter")format("svg");
}
      `}
  />
);

export default Fonts;
