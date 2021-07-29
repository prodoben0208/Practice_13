import React from "react";
import styled from "styled-components";

const Button = (props) => {
    
  const { _onClick,  children, margin, width } = props;


  const styles = {
    margin: margin,
    width: width,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #8DA482;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

export default Button;