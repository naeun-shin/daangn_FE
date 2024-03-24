import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();

  const { title, detail, price, imageUrl } =
    location.state || {};

  return (
    <PageContainer>
      <ImageContainer>
        <ProductImage
          src={imageUrl}
          alt="product"
        />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
        <Price>{price}원</Price>
        <DetailButton>상세보기</DetailButton>
      </InfoContainer>
    </PageContainer>
  );
};

export default DetailPage;

const PageContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
`;

const Detail = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

const Price = styled.span`
  font-size: 28px;
  color: #000;
  font-weight: bold;
`;

const DetailButton = styled.button`
  padding: 10px 16px;
  background-color: #5c6bc0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 16px;
`;
