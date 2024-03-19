import styled from "styled-components";
const Header = styled.div`
  height: 100px;
`;

const GoBack = styled.div`
  height: 100px;
`;
const Container = styled.div`
  padding: 10px;
  width: 410 px;
  border: 1px solid black;
`;

const CommunityContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
`;

const CommunityTitle = styled.div`
  font-size: 18px;
  padding: 5px 0px;
`;

const CommunityContent = styled.div`
  font-size: 14px;
  color: gray;
`;

const CommunityImage = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  float: right;
`;

const CommunityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommunitySubBox = styled.div`
  padding-top: 5px;
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommunitySubBoxLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommunityDetailBox = styled.div`
  display: flex;
  margin: 5px 0px;
  /* border: 1px solid black; */
`;

const CommumnityDetailHeaderSub = styled.div`
  font-size: 12px;
  color: gray;
`;

const CommunityDetailCnt = styled.div``;

const UserImage = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50px;
  margin-right: 5px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;
const CommunityDetailTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CommunityDetailContent = styled.div`
  width: auto;
  height: auto;
  border: 1px solid black;
  padding: 5px 0px;
`;

const CommunityDetailCommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;
const CommunityDetailFirstCommentBox = styled.div`
  padding: 10px;
  border: 1px solid black;
`;

const CommunityLike = styled.div`
  font-size: 12px;
  color: gray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const CommunityDetailFirstComment = styled.div`
  margin: 5px 0px 0px 35px;
  border: 1px solid black;
`;
const CommunityDetailSecondCommentBox = styled.div`
  padding: 10px;
  margin-left: 35px;
  border: 1px solid black;
`;
export {
  Header,
  GoBack,
  Container,
  CommunityTitle,
  CommunityContent,
  CommunityImage,
  CommunityBox,
  CommunitySubBox,
  CommunitySubBoxLeft,
  CommunityContainer,
  CommunityDetailBox,
  CommumnityDetailHeaderSub,
  CommunityDetailCnt,
  CommunityDetailTitle,
  CommunityDetailContent,
  CommunityDetailCommentHeader,
  CommunityDetailFirstCommentBox,
  CommunityDetailFirstComment,
  CommunityDetailSecondCommentBox,
  CommunityLike,
  UserImage,
  UserName,
};
