const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2000px",
};

export const darkTheme = {
  header: "rgb(25, 29, 36)",
  input: "#4e5369",
  body: "#364052",
  text: "white",
  button: "#222",
  card: "#333",
  border: "1px solid rgb(166, 173, 187)",
  cardFontColor: "rgb(166, 173, 187)",
  cardBorder: "1px solid #222;",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width:${size.mobile}) and (max-width:${size.tablet})`,
  laptop: `( min-width :${size.tablet}) and (max-width:${size.laptop})`,
  desktop: `( min-width :${size.desktop}) `,
};

export const whiteTheme = {
  header: "white",
  input: "#dcdee6",
  body: "white",
  text: "black",
  button: "#555",
  card: "rgb(243, 244, 246)",
  border: "1px solid black",
  cardFontColor: "black",
  cardBorder: "1px solid rgb(229, 231, 235)",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width:${size.mobile}) and (max-width:${size.tablet})`,
  laptop: `( min-width :${size.tablet}) and (max-width:${size.laptop})`,
  desktop: `( min-width :${size.desktop}) `,
};
