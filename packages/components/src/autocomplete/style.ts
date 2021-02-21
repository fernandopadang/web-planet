import Styled from 'styled-components';

export const Section = Styled.div`
  position: relative;
  width: 30%;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const SectionFormSearch = Styled.div`
  height: 32px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  img {
    margin-top: unset;
  }
`;

export const InputSearch = Styled.input`
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 40px;
  margin: 0;
  display: block;
  padding: 8px;
  min-width: 0;
  background: rgb(255,212,28);
  border-radius: 8px 0 0 8px;
  outline: none;
`;

export const ButtonSearch = Styled.button`
  height: 40px;
  flex: 0 0 32px;
  width: 32px;
  border: 1px solid rgb(255,212,28);
  border-radius: 0 8px 8px 0;
  background: white;
  outline: none;
  cursor: pointer;
  img {
    width: 17px;
    height: 17px;
  }
`;

export const SectionBoxList = Styled.ul`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px;
  border: 1px solid rgb(245, 245, 245);
  border-radius: 4px;
  padding: 0px 10px;
  max-height: 230px;
  overflow: auto;
  position: absolute;
  background: rgb(255, 255, 255);
  z-index: 1;
  width: -webkit-fill-available;
`;

export const SectionList = Styled.li`
  list-style: none;
  cursor: pointer;
  padding: 8px 0px;
  border-bottom: 1px solid rgb(245, 245, 245);
  cursor: pointer;
  display: flex;
  img {
    max-height: 60px;
    min-height: 60px;
    max-width: 42px;
    min-width: 42px;
    margin-right: 8px;
    object-fit: cover;
  }
  h4 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h5 {
    text-transform: capitalize;
  }
`;

export const Overlay = Styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
`;