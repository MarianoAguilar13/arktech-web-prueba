import styled from "styled-components";

export const Title = styled.h1`
  color: black;
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  font-family: var(--poppins);
`;

export const TitleHero = styled(Title)`
  font-size: 56px;
  color: whitesmoke;
`;

export const Subtitle = styled.h3`
  color: black;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  font-family: var(--poppins);
`;

export const TitleCardTechnologies = styled.h3`
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: var(--poppins);
  margin: 0;
  padding: 0;
`;

export const SubtitleWine = styled(Subtitle)`
  color: var(--wine);
`;

export const TextExtraLarge = styled.p`
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: var(--poppins);
`;

export const TextLarge = styled.p`
  color: black;
  font-size: 20px;
  font-family: var(--poppins);
`;

export const TextLargeWhite = styled(TextLarge)`
  color: whitesmoke;
`;

export const TextLargeBold = styled(TextLarge)`
  font-weight: 700;
`;

export const TextNormal = styled.p`
  color: black;
  font-size: 16px;
  font-family: var(--poppins);
`;

export const TextWhite = styled(TextNormal)`
  color: whitesmoke;
`;

export const TextNormalBold = styled(TextNormal)`
  font-weight: 700;
`;

export const TextMini = styled.p`
  color: black;
  font-size: 12px;
  font-family: var(--poppins);
`;
