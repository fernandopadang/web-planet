import Styled from "styled-components";

interface StarModel {
  isActive?: boolean;
}

export const Section = Styled.section`
  h1 {
    font-size: 36px;
    text-align: center;
    margin-top: 16px;
    @media screen and (max-width: 767px) {
      margin-top: 36px;
    }
  }
  .margin-top-1 {
    margin-top: 16px;
  }
  .margin-top-2 {
    margin-top: 32px;
  }
  .margin-top-3 {
    margin-top: 48px;
  }
  .margin-right-1 {
    margin-right: 8px;
  }
  .hyperModalContentWrapper___1o7Ug {
    width: fit-content;
    height: fit-content;
  }
`;

export const Poster = Styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 50vh;
  cursor: pointer;
  border-radius: 4px;
`;

export const Terrain = Styled.h5`
  margin-top: 16px;
  font-size: 18px;
  text-align: center;
`;

export const Plot = Styled.h2`
  font-size: 14px;
  margin-top: 32px;
  text-align: justify;
`;

export const IconTimer = Styled.img`
  height: 20px;
  margin-right: 12px;
`;

export const Star = Styled.div<StarModel>`
  background: ${(props: StarModel) => props.isActive ? "rgb(255, 212, 28)" : "gray"};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: 18px;
  width: 18px;
`;

export const ColName = Styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const ColValue = Styled.span`
  font-size: 14px;
  font-weight: 400;
`;