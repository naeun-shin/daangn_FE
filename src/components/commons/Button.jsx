import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Modal from './MainModal';

const Button = () => {
  const [isCircle, setIsCircle] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsCircle(true);
      } else {
        setIsCircle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowModal(!showModal);
    // 모달이 표시될 때 body 스크롤을 방지
    document.body.style.overflow = showModal ? 'auto' : 'hidden';
  };

  return (
    <>
      <WritingButton
        isCircle={isCircle}
        isClicked={isClicked}
        onClick={handleClick}
      >
        {isClicked ? 'X' : isCircle ? '+' : '+ 글쓰기'}
      </WritingButton>
      {showModal && <Modal />}
    </>
  );
};

export default Button;

const WritingButton = styled.button`
  width: 130px;
  height: 60px;
  background-color: #fa7014;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  position: fixed;
  right: 30px;
  bottom: 150px;
  z-index: 1000;
  transition: all 0.2s ease;

  ${({ isCircle }) =>
    isCircle &&
    css`
      width: 60px;
      height: 60px;
      border-radius: 50%;
    `}

  ${({ isClicked }) =>
    isClicked &&
    css`
      width: 60px;
      height: 60px;
      background-color: #fff;
      color: #000;
      border-radius:;
    `}
`;
