import React from "react";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import InputBox from "app/view/widgets/InputBox";
import Button from "app/view/widgets/Button";

const LogInView: React.FunctionComponent<RouteComponentProps> = (props) => {
  const goSignUpView = () => {
    props.history.push(`/signup`);
  };

  return (
    <LogInViewWrapper>
      <LogInViewContainer>
        <HeaderTxt>로그인</HeaderTxt>
        <InputBox placeholderTxt={"아이디"} />
        <InputBox placeholderTxt={"비밀번호"} />
        <PasswordFind>비밀번호 찾기</PasswordFind>
        <Button isEnable buttonName={"PRIMARY"} buttonText={"로그인"} />
        <Button
          isEnable
          buttonName={"SECONDARY"}
          buttonText={"회원가입"}
          onClick={goSignUpView}
        />
      </LogInViewContainer>
      <CopyrightBox>
        <CompanyInfo>CherGround Inc. All rights reserved.</CompanyInfo>
      </CopyrightBox>
    </LogInViewWrapper>
  );
};

const LogInViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogInViewContainer = styled.div`
  width: 420px;
  height: fit-content;
  margin-top: 136px;
`;

const HeaderTxt = styled.p`
  height: 31px;
  font-family: NanumSquare;
  font-size: 28px;
  color: #1f263e;
  text-align: center;
  margin: 0 0 40px 0;
`;

const PasswordFind = styled.p`
  margin: 12px 0 32px 0;
  font-family: NanumSquare_acR;
  font-size: 14px;
  text-decoration: underline;
  text-align: right;
  color: #1f263e;
`;

const CopyrightBox = styled.div`
  width: 100%;
  height: 52px;
  border-top: 1px solid #eeeeee;
  background-color: #ffffff;
  margin-top: auto;
`;

const CompanyInfo = styled.p`
  font-family: NanumSquare;
  font-weight: 300;
  font-size: 12px;
  color: #7a7f8e;
  margin: 20px 0 19px 128px;
`;

export default withRouter(LogInView);
