import Head from "next/head";
import styled from "styled-components";
import "normalize.css";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Wrapper2 = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 150px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const SubImage = styled.img`
  width: 40%;
  top: 60%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
`;
const StyledH2 = styled.h2`
  position: absolute;
  top: 10%;
  left: 50%;
  font-weight: bold;
  font-size: 48px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
const Body = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
const StyledP = styled.p`
  position: absolute;
  top: 20%;
  left: 50%;
  font-weight: bold;
  font-size: 18px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: linear-gradient(transparent 50%, #a8eaff 50%);
`;
const StyledP2 = styled.p`
  z-index: 20;
  position: absolute;
  top: 28%;
  left: 50%;
  font-weight: bold;
  font-size: 18px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
const StyledContents = styled.div`
  width: 30%;
  z-index: 20;
  position: absolute;
  top: 58%;
  left: 58%;
  font-weight: bold;
  font-size: 18x;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  line-height: 50px;
`;
export default function Home() {
  return (
    <>
      <Wrapper>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Body>
          <ImageWrapper>
            <StyledImage src="https://user-images.githubusercontent.com/55383786/105572154-c9623200-5d98-11eb-8ebf-81992c662623.jpg" />
          </ImageWrapper>
          <StyledH2>おとまり会のおたより</StyledH2>
          <StyledP>
            日時:令和（れいわ）:3年8月11日(すいようび)から8月13日(きんようび)
          </StyledP>
          <StyledP2>スケジュール</StyledP2>
          <StyledContents>
            8:30 バスに乗って出発<br></br> 12:00 昼食（持参したお弁当）{" "}
            <br></br> 13:30 冒険<br></br> 16:00 カレー作り<br></br> 18:00 入浴
            <br></br> 19:00 キャンプファイアー <br></br> 21:00 就寝
          </StyledContents>
          <SubImage src="https://user-images.githubusercontent.com/55383786/105571828-8c953b80-5d96-11eb-8500-c796ca080fe4.jpg" />
        </Body>
      </Wrapper>
      <Wrapper2>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Body>
          <ImageWrapper>
            <StyledImage src="https://user-images.githubusercontent.com/55383786/105572154-c9623200-5d98-11eb-8ebf-81992c662623.jpg" />
          </ImageWrapper>
          <StyledH2>Notice of Otomarikai</StyledH2>
          <StyledP>Date: Reiwa: August 11, 3 -August 13</StyledP>
          <StyledP2>Schedule</StyledP2>
          <StyledContents>
            8:30 Depart on the bus
            <br></br> 12:00 Lunch (lunch you brought)
            <br></br> 13:00 adventure
            <br></br> 16:00 Making curry
            <br></br> 18:00 bathing
            <br></br> 19:00 Campfire
            <br></br> 21:00 Going to bed
          </StyledContents>
          <SubImage src="https://user-images.githubusercontent.com/55383786/105571828-8c953b80-5d96-11eb-8500-c796ca080fe4.jpg" />
        </Body>
      </Wrapper2>
      <Wrapper2>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Body>
          <ImageWrapper>
            <StyledImage src="https://user-images.githubusercontent.com/55383786/105572154-c9623200-5d98-11eb-8ebf-81992c662623.jpg" />
          </ImageWrapper>
          <StyledH2>Balita mula sa Otomarikai</StyledH2>
          <StyledP>
            Petsa at oras: Reiwa: Agosto 11 hanggang ika-13, ika-3 taon
          </StyledP>
          <StyledP2>Iskedyul</StyledP2>
          <StyledContents>
            8:30 Umalis sa bus<br></br>
            12:00 Tanghalian (tanghalian na dinala mo) <br></br>
            13:30 Pakikipagsapalaran
            <br></br> 16:00 Paggawa ng kari<br></br> 18:00 naliligo
            <br></br> 19:00 Campfire <br></br> 21:00 Matulog ka na
          </StyledContents>
          <SubImage src="https://user-images.githubusercontent.com/55383786/105571828-8c953b80-5d96-11eb-8500-c796ca080fe4.jpg" />
        </Body>
      </Wrapper2>
    </>
  );
}
