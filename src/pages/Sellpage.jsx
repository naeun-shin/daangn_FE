import React, { useState } from 'react';
import styled from 'styled-components';

const SellPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [offers, setOffers] = useState(false);

  return (
    <Container>
      <Header>내 물건 팔기</Header>
      <Form>
        <Label>제목</Label>
        <Input
          placeholder='제목'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Transaction>
          <Label>거래 방식</Label>
          <div>
            <SellButton>판매하기</SellButton>
            <SellButton>나눔하기</SellButton>
          </div>
          <Input
            placeholder='가격을 입력해 주세요.'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <CheckboxContainer>
            <Checkbox
              type='checkbox'
              checked={offers}
              onChange={(e) => setOffers(e.target.checked)}
            />
            <CheckboxLabel>가격 제안 받기</CheckboxLabel>
          </CheckboxContainer>
        </Transaction>
        <Label>자세한 설명</Label>
        <Textarea
          placeholder='제품 상태, 사용감 등을 구매자가 잘 이해할 수 있도록 자세히 설명해주세요.'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
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
`;

const Textarea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  height: 80px;
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
  margin-top: 10px;
  position: sticky;
  bottom: 0;
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
  color: #000;
  background-color: #fff;
  border: 1px solid #4d4d4d;
  border-radius: 20px;
  cursor: pointer;

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
  width: 20px;
  height: 20px;
  margin-right: 5px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label``;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-top: 20px;
  margin-bottom: 5px;
`;
