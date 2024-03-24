import React from 'react';
import styled from 'styled-components';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { deleteTradePost } from '../apis/PostItemSale';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, detail, price, imageUrl, id } =
    location.state || {};

  const handleDelete = async () => {
    const result = await deleteTradePost(id);
    console.log('결과:', result);
    if (result.status === 200) {
      console.log('삭제 성공');
      navigate('/home');
    } else {
      console.error('삭제 실패', result.data);
    }
  };

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
        <DeleteButton onClick={handleDelete}>
          삭제하기
        </DeleteButton>
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

const DeleteButton = styled.button`
  padding: 10px 16px;
  background-color: #4d4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 16px;
  margin-left: 8px;
`;
