import Styled from 'styled-components';

export const SectionCard = Styled.section`
  background: white;
  cursor: default;
  border-radius: 8px;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  height: 100%;
  width: 100%;
  display: flex;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const Poster = Styled.img`
  max-height: 150px;
  max-width: 101px;
  display: inline-block;
  border-radius: 8px 0 0 8px;
  object-fit: cover;
`;

export const Description = Styled.div`
  margin: 8px 0 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  td, th {
    text-align: left;
  }
`;

export const Star = Styled.div`
  background: rgb(255, 212, 28);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: 18px;
  width: 18px;
`;