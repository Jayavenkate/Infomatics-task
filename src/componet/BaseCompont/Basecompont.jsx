import { BoxDiv, CardDiv, Description, Title, TitleDiv } from "./Base.styled";
export const BaseComponet = () => {
  return (
    <CardDiv>
      <TitleDiv>
        <Title>Title</Title>
        <Description>Description</Description>
      </TitleDiv>
      <BoxDiv></BoxDiv>
    </CardDiv>
  );
};
