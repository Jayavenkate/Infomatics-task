import { Paper, styled } from "@mui/material";
export const CardDiv = styled(Paper)({
  width: "792px",
  height: "1072px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  borderRadius: "34px",
});

export const TitleDiv = styled("div")({
  width: "692px",
  height: "143px",
});
export const BoxDiv = styled("div")({
  backgroundColor: "#d9d9d9",
  height: "788px",
  width: "692px",
});

export const Title = styled("p")({
  fontFamily: "IBM Plex Sans",
  color: "#000000",
  fontSize: "55px",
  fontWeight: 400,
  lineHeight: "72px",
  margin: 0,
});

export const Description = styled("p")({
  fontFamily: "IBM Plex Sans",
  color: "#000000",
  fontSize: "30px",
  fontWeight: 400,
  lineHeight: "50px",
  margin: 0,
});
