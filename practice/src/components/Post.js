import React from "react";
import styled from "styled-components";
import Button from "../elements/Button"

const Post = (props) => {

  // 텍스트 내용 저장하기
  // const [contents, setContents] = React.useState("");

  
  // const changeContents = (e) => {
  //   setContents(e.target.value);
  // };

    return (
    <>
      <PostView>
             <PostBox>
                <Title>Title</Title>
                <Tag>#태그를 입력하세요</Tag>
                 <TextWrite label="게시글 내용" placeholder="게시글 작성" multiLine />
                 <Button>작성하기</Button>
                  </PostBox>


      </PostView>

        </>
  
    );
}

Post.defaultProps = {
  image_url: "https://media.tenor.com/images/015b33630755ed9c1a5da21e93b5a83e/tenor.gif",
  contents: "영화 내용",
  insert_dt: "2021-07-27 12:12:12",
};

export default Post;


const PostView = styled.div`
  height: 1200px;
  margin: 50px auto;
  background-color: #efebe9;
`

const PostBox = styled.div`
  width: 1200px;
  height: 700px;
  margin: 50px auto;
  padding: 50px 50px;
  background-color: #d7ccc8;
`

const Title = styled.div`
  width: 300px;
  height: 50px;
  margin: 12px ;
  padding: 12px;
  background-color: skyblue;
  `
const Tag = styled.div`
  width: 300px;
  height: 50px;
  margin: 12px ;
  padding: 12px;
  background-color: yellow;
`

const TextWrite = styled.div`
  background-color: #efebe9;
  height: 200px;
  width: 200px;
  margin: 50px auto;
`