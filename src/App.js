import React, { Component } from "react";
import ReactBodymovin from "react-bodymovin";
import animation from "./animation.json";
import "./App.css";
import styled from "styled-components";
import FontFaceObserver from "fontfaceobserver";
const WhiteBackgroundImage = require("./images/white.png");
const MintBackgroundImage = require("./images/mint.png");
const PinkBackgroundImage = require("./images/pink.jpg");
const YellowBackgroundImage = require("./images/yellow.png");
const GreenBackgroundImage = require("./images/green.png");
const PurpleBackgroundImage = require("./images/purple.png");
const DarkYellowBackgroundImage = require("./images/darkYellow.png");

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: animation
};
const AppWrapper = styled.div`
  background: ${props => props.backgroundColor};
`;

const MainWrapper = styled.div`
  background: ${props => props.backgroundColor};
`;

const ButtonWrapper = styled.div`
  background-image: url(${props => props.img});
`;

const ImagePreload = styled.div`
  display: none;
`;

const LoadingWrapper = styled.div`
  display: ${props => props.loading};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWrapper: { backgroundImage: WhiteBackgroundImage },
      buttonBackGround: { background: "#fcfcfc" },
      images: 7,
      fontLoaded: false
    };
    this._changeColor1 = this._changeColor1.bind(this);
    this._changeColor2 = this._changeColor2.bind(this);
    this._changeColor3 = this._changeColor3.bind(this);
    this._changeColor4 = this._changeColor4.bind(this);
    this._changeColor5 = this._changeColor5.bind(this);
    this._changeColor6 = this._changeColor6.bind(this);
    this._changeDefault = this._changeDefault.bind(this);
    this._loadImages = this._loadImages.bind(this);
    const font = new FontFaceObserver("NotoSerif");
    font.load(null, 10000).then(() => {
      this.setState({ fontLoaded: true });
    });
  }
  componentWillMount() {}

  _loadImages() {
    this.setState({ images: this.state.images - 1 });
  }

  _changeColor1() {
    this.setState({
      mainWrapper: { backgroundImage: MintBackgroundImage },
      buttonBackGround: { background: "#B6CFE3" }
    });
  }
  _changeColor2() {
    this.setState({
      mainWrapper: { backgroundImage: PinkBackgroundImage },
      buttonBackGround: { background: "#E68B83" }
    });
  }
  _changeColor3() {
    this.setState({
      mainWrapper: { backgroundImage: YellowBackgroundImage },
      buttonBackGround: { background: "#E8C980" }
    });
  }
  _changeColor4() {
    this.setState({
      mainWrapper: { backgroundImage: GreenBackgroundImage },
      buttonBackGround: { background: "#8CD4D0" }
    });
  }
  _changeColor5() {
    this.setState({
      mainWrapper: {
        backgroundImage: PurpleBackgroundImage
      },
      buttonBackGround: { background: "#C088DB" }
    });
  }
  _changeColor6() {
    this.setState({
      mainWrapper: { backgroundImage: DarkYellowBackgroundImage },
      buttonBackGround: { background: "#E2FAB6" }
    });
  }
  _changeDefault() {
    this.setState({
      mainWrapper: { backgroundImage: WhiteBackgroundImage },
      buttonBackGround: { background: "#cdcdcd" }
    });
  }

  render() {
    const { mainWrapper } = this.state;
    const { buttonBackGround } = this.state;
    const { images } = this.state;
    const { fontLoaded } = this.state;
    return (
      <AppWrapper className="App" backgroundColor={buttonBackGround.background}>
        <LoadingWrapper loading={images !== 0 || fontLoaded ? "flex" : "none"}>
          <ReactBodymovin options={bodymovinOptions} />
        </LoadingWrapper>
        <ImagePreload>
          <img
            alt={"WhiteBackgroundImage"}
            src={WhiteBackgroundImage}
            onLoad={() => {
              this._loadImages();
            }}
          />
          <img
            alt={"MintBackgroundImage"}
            src={MintBackgroundImage}
            onLoad={() => {
              this._loadImages();
            }}
          />
          <img
            alt={"PinkBackgroundImage"}
            src={PinkBackgroundImage}
            onLoad={() => {
              this._loadImages();
            }}
          />
          <img
            alt={"YellowBackgroundImage"}
            src={YellowBackgroundImage}
            onLoad={() => {
              this._loadImages();
            }}
          />
          <img
            alt={"GreenBackgroundImage"}
            src={GreenBackgroundImage}
            onLoad={() => {
              this._loadImages();
            }}
          />
          <img
            alt={"PurpleBackgroundImage"}
            src={PurpleBackgroundImage}
            onLoad={() => {
              this._loadImages();
            }}
          />
          <img
            alt={"DarkYellowBackgroundImage"}
            src={DarkYellowBackgroundImage}
            onLoad={() => {
              this._loadImages();
            }}
          />
        </ImagePreload>
        <MainWrapper
          className={images === 0 && fontLoaded ? "main__wrapper" : "hide"}
          id="mainWrapper"
          backgroundColor={buttonBackGround.background}
        >
          <div className="main">
            <div className="main__column">
              <p className="main__title">한우 축사 관리 홈페이지</p>
              <p className="sub__title">
                실시간 CCTV 스트리밍, 방문자 및 출입차량 자동 감지, 소 승가 자동
                감지 및 알림 서비스 제공
              </p>
              <p className="contact__text">
                가입 문의
                <br />
                대표 : 이상욱
                <br />
                휴대전화 : 010-5386-8735
              </p>
            </div>
            <ButtonWrapper
              className="button__column"
              id="buttonBackground"
              img={mainWrapper.backgroundImage}
            >
              <hr className="hr-text" data-content="서비스 중인 농가" />
              <div className="card">
                <div
                  className="box box1"
                  onMouseOver={() => {
                    this._changeColor1();
                  }}
                  onMouseOut={() => {
                    this._changeDefault();
                  }}
                >
                  <div className="box1__image" />
                  <div className="box__text">횡성군</div>
                  <div className="box__button">
                    <button className="button">
                      <a href="http://hsgcow2019.iptime.org">
                        <span className="link__text">이동하기</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="box box2"
                  onMouseOver={() => {
                    this._changeColor2();
                  }}
                  onMouseOut={() => {
                    this._changeDefault();
                  }}
                >
                  <div className="box2__image" />
                  <div className="box__text">홍천군</div>
                  <button className="button">
                    <a href="http://hsgcow2019.iptime.org">
                      <span className="link__text">이동하기</span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="card">
                <div
                  className="box box3"
                  onMouseOver={() => {
                    this._changeColor3();
                  }}
                  onMouseOut={() => {
                    this._changeDefault();
                  }}
                >
                  <div className="box3__image" />
                  <div className="box__text">평창군</div>
                  <button className="button">
                    <a href="http://hsgcow2019.iptime.org">
                      <span className="link__text">이동하기</span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="card">
                <div
                  className="box box4"
                  onMouseOver={() => {
                    this._changeColor4();
                  }}
                  onMouseOut={() => {
                    this._changeDefault();
                  }}
                >
                  <div className="box4__image" />
                  <div className="box__text">괴산군</div>

                  <button className="button">
                    <a href="http://hsgcow2019.iptime.org">
                      <span className="link__text">이동하기</span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="card">
                <div
                  className="box box5"
                  onMouseOver={() => {
                    this._changeColor5();
                  }}
                  onMouseOut={() => {
                    this._changeDefault();
                  }}
                >
                  <div className="box5__image" />
                  <div className="box__text">용인시</div>

                  <button className="button">
                    <a href="http://hsgcow2019.iptime.org">
                      <span className="link__text">이동하기</span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="card">
                <div
                  className="box box6"
                  onMouseOver={() => {
                    this._changeColor6();
                  }}
                  onMouseOut={() => {
                    this._changeDefault();
                  }}
                >
                  <div className="box6__image" />
                  <div className="box__text">이천시</div>

                  <button className="button">
                    <a href="http://hsgcow2019.iptime.org">
                      <span className="link__text">이동하기</span>
                    </a>
                  </button>
                </div>
              </div>
            </ButtonWrapper>
          </div>
        </MainWrapper>
      </AppWrapper>
    );
  }
}

export default App;
