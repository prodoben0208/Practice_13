import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Post from "../components/Post";

// 로그인 체크하기
// import {useSelector, useDispatch} from "react-redux";




const PostWrite = (props) => {

  // 텍스트 내용 저장하기
  // const [contents, setContents] = React.useState('');


  // 로그인 확인 메세지

  // const is_login = useSelector((state) => state.user.is_login);
  // const {history} = props;

  // if(!is_login){
  //   return (
  //     <div>
  //       <div>
  //         로그인이 없습니다.
  //       </div>
  //       <div>
  //         로그인 후에만 글을 쓸 수 있어요!
  //       </div>
  //       <Button
  //         _onClick={() => {
  //           history.replace("/login");
  //         }}
  //       >
  //         로그인 하러가기
  //       </Button>
  //     </div>

    return (
    <>
     <Header/>
      <ViewBox>
            <Post/> 
      </ViewBox>
        </>
  
    );
}

PostWrite.defaultProps = {
  image_url: "https://media.tenor.com/images/015b33630755ed9c1a5da21e93b5a83e/tenor.gif",
  contents: "영화 내용",
  insert_dt: "2021-07-27 12:12:12",
};

export default PostWrite;

const ViewBox = styled.div`
  background-color: #fffffb;
`
