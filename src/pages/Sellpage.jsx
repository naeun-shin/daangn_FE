import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaCamera } from 'react-icons/fa';

const SellPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  // 제품설명
  const [description, setDescription] =
    useState('');
  // 거래 유형 선택
  const [transactionType, setTransactionType] =
    useState('');

  const TransactionTypeChange = (type) => {
    setTransactionType(type);
    if (type === '나눔하기') {
      setPrice('');
    }
  };
  // 가격 제안
  const [offers, setOffers] = useState(false);

  // 이미지 업로드
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(
      URL.createObjectURL(e.target.files[0]),
    );
  };

  return (
    <Container>
      <Header>내 물건 팔기</Header>
      <Form>
        <ImageUploadContainer>
          {!image && (
            <ImageInputLabel>
              <FaCamera
                size={30}
                color="#9a9a9a"
              />
              <ImageInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ImageInputLabel>
          )}
          {image && (
            <UploadedImage
              src={image}
              alt="업로드된 이미지"
            />
          )}
        </ImageUploadContainer>
        <Label>제목</Label>
        <Input
          placeholder="제목"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
        <Transaction>
          <Label>거래 방식</Label>
          <div>
            <SellButton
              type="button"
              selected={
                transactionType === '판매하기'
              }
              onClick={() =>
                TransactionTypeChange('판매하기')
              }
            >
              판매하기
            </SellButton>
            <SellButton
              type="button"
              selected={
                transactionType === '나눔하기'
              }
              onClick={() =>
                TransactionTypeChange('나눔하기')
              }
            >
              나눔하기
            </SellButton>
          </div>
          <Input
            placeholder="₩ 가격을 입력해 주세요."
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            // 나눔하기 선택 시 비활성화
            disabled={
              transactionType === '나눔하기'
            }
          />
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={offers}
              onChange={(e) =>
                setOffers(e.target.checked)
              }
            />
            <CheckboxLabel>
              가격 제안 받기
            </CheckboxLabel>
          </CheckboxContainer>
        </Transaction>
        <Label>자세한 설명</Label>
        <Textarea
          placeholder="제품 상태, 사용감 등을 구매자가 잘 이해할 수 있도록 자세히 설명해주세요."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
        <Button size="small">
          자주 쓰는 문구
        </Button>
        <Label>거래 희망 장소</Label>
        <Input placeholder="위치 추가" />
        <Button>작성완료</Button>
      </Form>
    </Container>
  );
};

export default SellPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 60px; // 푸터 수정되면 삭제하기
  background: #fff;
`;

const Header = styled.h1`
  font-size: 20px;
  width: 430px;
  height: 40px;
  color: #333;
  border-bottom: 1px solid #000;
  text-align: center;
`;

const ImageUploadContainer = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #9a9a9a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ImageInputLabel = styled.label`
  cursor: pointer;
`;

const ImageInput = styled.input`
  display: none;
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${({ disabled }) =>
    disabled ? '#bbbbbb' : '#fff'};
`;

const Textarea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  height: 100px;
`;

const Button = styled.button`
  padding: 15px 25px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #fa7014;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 25px;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          background-color: #eee;
          color: #000;
          width: 120px;
          font-size: 14px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
          padding: 0;
        `;
    }
  }}
`;

const Transaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SellButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 30px;
  color: ${({ selected }) =>
    selected ? '#fff' : '#000'};
  background-color: ${({ selected }) =>
    selected ? '#4d4d4d' : '#fff'};
  border: ${({ selected }) =>
    selected ? 'none' : '1px solid #4d4d4d'};

  &:first-child {
    margin: 10px 10px 20px 0;
  }

  &:hover {
    background-color: #2d2d2d;
    color: #eee;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label``;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-top: 15px;
  margin-bottom: 10px;
`;
