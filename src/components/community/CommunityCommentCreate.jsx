import React, { useState } from 'react';
import {
  Container,
  Footer,
  FooterLeft,
} from '../../pages/CommunityStyles';
import { AiOutlinePicture } from 'react-icons/ai';
import { HiPaperAirplane } from 'react-icons/hi2';
import { BiMap } from 'react-icons/bi';
import { useMutation } from '@tanstack/react-query';
import { createCommunityComment } from '../../apis/communityAxios';

const CommunityCommentCreate = ({
  communityId,
}) => {
  const [commentContent, setCommentContent] =
    useState('');
  const [parentCommentId, setParentCommetId] =
    useState('');

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
    console.log(e.target.value);
  };

  const commentValue = {
    parentCommentId,
    commentContent,
  };
  const communityCreateCommentMutation =
    useMutation({
      mutationFn: createCommunityComment,
      onSuccess: (response) => {
        console.log(response);
        // 댓글 작성 후 입력창 초기화
        setCommentContent('');
        // 성공적으로 작성됐다는 메시지 등을 추가할 수도 있습니다.
        console.log(
          '댓글이 성공적으로 작성되었습니다.',
        );
      },
      onError: (error) => {
        console.log(error);
      },
    });

  const handleSubmitComment = (e) => {
    e.preventDefault();
    communityCreateCommentMutation.mutate({
      communityId,
      commentValue,
    });
  };

  return (
    <div>
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
          <input
            placeholder="댓글을 입력해주세요."
            onChange={handleCommentContentChange}
            value={commentContent}
          />
          <form>
            <div>
              <HiPaperAirplane
                color="gray"
                onClick={handleSubmitComment}
              />
            </div>
          </form>
        </Footer>
      </Container>
    </div>
  );
};

export default CommunityCommentCreate;
