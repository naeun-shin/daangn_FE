import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <>
      <WritingButton>+&nbsp;글쓰기</WritingButton>
    </>
  );
};

export default Button;

const WritingButton = styled.button`
  width: 130px;
  height: 60px;
  background-color: #fa7014;
  border: 1px solid #fa7014;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  position: fixed;
  right: 30px;
  bottom: 150px;
  z-index: 1000;
`;
