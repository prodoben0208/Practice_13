import React from "react";
import styled from "styled-components";



const Header = (props) => {
  return(
    <HeaderBox>
    <UserMenu>
      <LineMenu>
        <Login style={{ color: "#5f0080" }}>회원가입</Login>
        <Login>로그인</Login>
      </LineMenu>
    </UserMenu>
    <Gnb>
      <Category>
        전체 카테고리
      </Category>
      <Tools>
        <input
          style={{
            width: "166px",
            height: "36px",
            padding: "0 60px 0 14px",
            border: "1px solid #f7f7f6",
            borderRadius: "18px",
            backgroundColor: "#f7f7f7",
            fontWeight: "400",
            fontSize: "12px",
            color: "#666",
            lineHeight: "16px",
          }}
          placeholder="search"
        />
        
      </Tools>
    </Gnb>
  </HeaderBox>
);
}

export default Header;


 


const HeaderBox = styled.div`
  width: auto;
  height: auto;
`;

const UserMenu = styled.div`
  position: relative;
  width: 1050px;
  height: 37px;
  margin: 0 auto;
`;

const LineMenu = styled.div`
  float: right;
  height: 37px;
  padding: 0 22px 0 10px;
  line-height: 35px;
  white-space: nowrap;
`;

const Login = styled.div`
  float: left;
  height: 37px;
  padding: 0 22px 0 10px;
  line-height: 35px;
  white-space: nowrap;
  font-weight: 400;
  font-size: 12px;
`;


//네비게이션 전체 감싸는 태그
const Gnb = styled.div`
  width: 1050px;
  letter-spacing: -0.3px;
  height: 56px;
  margin: 0 auto;
`;

//전체 카테고리 <- 호버하면 밑에 아이템 박스 나올 수 있도록
const Category = styled.div`
  float: left;
  font-weight: 700;
  width: 360px;
  height: 40px;
  padding: 16px 0px 0px;
`;
// 검색창/카트/지도 전체 묶어주는
const Tools = styled.div`
  position: relative;
  width: 360px;
  float: right;
  height: 40px;
  padding: 6px 0px 0px;
`;

