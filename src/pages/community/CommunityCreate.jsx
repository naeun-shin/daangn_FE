import React from "react";
import {
  Container,
  Header,
  CommunityWriteTitle,
  CommunityWriteContent,
  CommunityWriteFooter,
  CommunityWriteBox,
} from "../CommunityStyles";
import { AiOutlinePicture } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { LightBreak } from "../../styles/commonStyles";
import { VscClose } from "react-icons/vsc";

const CommunityCreate = () => {
  return (
    <>
      {/* 헤더 영영 */}
      <Container>
        <Header>
          <VscClose size={26} />
          <div>동네생활 글쓰기</div>
          <button>완료 </button>
        </Header>
      </Container>
      <LightBreak />
      {/* body */}
      <Container>
        <CommunityWriteBox>
          <CommunityWriteTitle placeholder="제목을 입력하세요."></CommunityWriteTitle>
          <CommunityWriteContent placeholder="동네 근처 이웃과 동네에서의 소소한 일상, 정보를 공유해보세요."></CommunityWriteContent>
        </CommunityWriteBox>
      </Container>{" "}
      <LightBreak />
      <Container>
        <CommunityWriteFooter>
          <AiOutlinePicture /> &nbsp; <p>사진</p>
          <BiMap /> &nbsp; <p>장소</p>
        </CommunityWriteFooter>
      </Container>
    </>
  );
};

export default CommunityCreate;
