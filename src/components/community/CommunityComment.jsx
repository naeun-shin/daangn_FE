import React, { useState } from 'react';
import {
  CommunityDetailCommentHeader,
  Container,
  CommunityDetailFirstCommentBox,
  CommunityDetailFirstComment,
  CommunityDetailSecondCommentBox,
  CommunityLike,
  Footer,
  FooterLeft,
} from '../../pages/CommunityStyles';
import {
  CommumnityDetailHeaderSub,
  CommunityDetailBox,
  CommunityDetailCnt,
  CommunityDetailContent,
  UserImage,
  UserName,
} from '../../pages/CommunityStyles';
import { GoThumbsup } from 'react-icons/go';
import { Break } from '../../pages/styles/commonStyles';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { HiPaperAirplane } from 'react-icons/hi2';
import { useQuery } from '@tanstack/react-query';
import { getCommunityComment } from '../../apis/communityAxios';

const CommunityComent = ({ communityId }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [page, setPage] = useState(1);
  console.log(communityId);

  // 댓글 데이터 가져오는 custom hook 사용

  const { data: commentData } = useQuery({
    queryKey: ['community', communityId],
    queryFn: () =>
      getCommunityComment(
        communityId,
        isAsc,
        page,
      ),
    // staleTime: 60 * 1000,
  });

  console.log('commentData', commentData);

  const commentList = commentData.data.content;

  console.log('commentList', commentList);

  commentList.map((comment, index) => {
    // 각 comment를 출력하거나 원하는 방식으로 표시
    console.log(`Comment ${index + 1}:`, comment);
    console.log(comment.nickname);
    console.log(comment.commentContent);
  });

  return (
    <div>
      <Container>
        <CommunityDetailCommentHeader>
          <div>댓글 {commentList.length}</div>
          <div>등록순 최신순</div>
        </CommunityDetailCommentHeader>

        {/* 댓글 리스트 렌더링 */}
        {commentList.map((comment, index) => (
          <div key={index}>
            {/* 첫 번째 댓글 */}
            <CommunityDetailFirstCommentBox>
              <CommunityDetailBox>
                <UserImage />
                <CommumnityDetailHeaderSub>
                  <UserName>
                    {comment.nickname}
                  </UserName>
                  <CommunityDetailCnt>
                    {comment.date}
                  </CommunityDetailCnt>
                </CommumnityDetailHeaderSub>
              </CommunityDetailBox>
              <CommunityDetailFirstComment>
                <CommunityDetailContent>
                  {comment.commentContent}
                </CommunityDetailContent>
                <CommunityLike>
                  <div>
                    <GoThumbsup /> 좋아요
                  </div>
                  &nbsp;
                  <div>
                    답글 {comment.replyCount}
                  </div>
                </CommunityLike>
              </CommunityDetailFirstComment>
            </CommunityDetailFirstCommentBox>
          </div>
        ))}
      </Container>

      <Break />

      <Container>
        <Footer>
          <FooterLeft>
            <AiOutlinePicture
              size={22}
              color="gray"
            />
            &nbsp; &nbsp;
            <BiMap size={22} color="gray" />
          </FooterLeft>
          <input placeholder="댓글을 입력해주세요." />
          <div>
            <HiPaperAirplane color="gray" />
          </div>
        </Footer>
      </Container>
    </div>
  );
};

export default CommunityComent;
