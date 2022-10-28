import logo from './logo.svg';
import './App.css';
import {Button, Row, Col} from "antd";
import React from "react";
import classNames from "classnames";
import ButtonGroup from "antd/es/button/button-group";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressMap: new Set(),
            currentCode: ''
        }
    };

    render() {
        return <div className="App">
            <header className="App-header">
                按键测试
            </header>
            <Row>
                <Col span={24}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(27)})}>ESC</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(112)})}>F1</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(113)})}>F2</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(114)})}>F3</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(115)})}>F4</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(116)})}>F5</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(117)})}>F6</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(118)})}>F7</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(119)})}>F8</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(120)})}>F9</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(121)})}>F10</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(122)})}>F11</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(123)})}>F12</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(1450)})}>PrtSc</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(1451)})}>PrtLk</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(19)})}>Pause</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(173)})}>静音</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(174)})}>音量+</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(175)})}>音量+</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(0)})}>Cal</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>

                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(144)})}>NUM</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(96)})}>0</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(97)})}>1</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(98)})}>2</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(99)})}>3</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(100)})}>4</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(101)})}>5</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(102)})}>6</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(103)})}>7</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(104)})}>8</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(105)})}>9</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(107)})}>+</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(109)})}>-</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(106)})}>*</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(111)})}>/</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(110)})}>.</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(1302)})}>Enter</Button>

                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(37)})}>左</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(38)})}>上</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(39)})}>右</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(40)})}>下</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(45)})}>INS</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(36)})}>HOME</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(46)})}>DEL</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(35)})}>END</Button>
                    <Button size={"large"} className={classNames({'button-press': this.state.pressMap.has(33)})}>PAGE
                        UP</Button>
                    <Button size={"large"} className={classNames({'button-press': this.state.pressMap.has(34)})}>PAGE
                        DOWN</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(65)})}>A</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(66)})}>B</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(67)})}>C</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(68)})}>D</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(69)})}>E</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(70)})}>F</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(71)})}>G</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(72)})}>H</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(73)})}>I</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(74)})}>J</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(75)})}>K</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(76)})}>L</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(77)})}>M</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(78)})}>N</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(79)})}>O</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(80)})}>P</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(81)})}>Q</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(82)})}>R</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(83)})}>S</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(84)})}>T</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(85)})}>U</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(86)})}>V</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(87)})}>W</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(88)})}>X</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(89)})}>Y</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(90)})}>Z</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(48)})}>0</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(49)})}>1</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(50)})}>2</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(51)})}>3</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(52)})}>4</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(53)})}>5</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(54)})}>6</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(55)})}>7</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(56)})}>8</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(57)})}>9</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(8)})}>退格</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(9)})}>TAB</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(1301)})}>Enter</Button>
                    <Button size={"large"} className={classNames({'button-press': this.state.pressMap.has(1600)})}>LEFT
                        Shift</Button>
                    <Button size={"large"} className={classNames({'button-press': this.state.pressMap.has(1601)})}>RIGHT
                        Shift</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(1700)})}>LEFT CTRL</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(1701)})}>RIGHT CTRL</Button>
                    <Button size={"large"} className={classNames({'button-press': this.state.pressMap.has(1800)})}>LEFT
                        ALT</Button>
                    <Button size={"large"} className={classNames({'button-press': this.state.pressMap.has(1801)})}>RIGHT
                        ALT</Button>
                    <Button size={"large"} className={classNames({'button-press': this.state.pressMap.has(20)})}>CAPE
                        LOK</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(186)})}>:;</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(187)})}>+=</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(188)})}>,&lt;</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(189)})}>-_</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(190)})}>&gt;</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(191)})}>/?</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(192)})}>`~</Button>

                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(219)})}>[ &#123;</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(221)})}>] &#125;</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(220)})}>|</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(222)})}> '"</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(9100)})}>LEFT WIN</Button>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(9101)})}>RIGHT WIN</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>

                </Col>
            </Row>
            <Row>

                <Col span={2}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(179)})}>停止</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(172)})}>浏览器</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(180)})}>邮件</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(170)})}>搜索</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"}
                            className={classNames({'button-press': this.state.pressMap.has(171)})}>收藏</Button>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    当前按下： <div>{this.state.currentCode}</div>
                </Col>
                <Col span={8} offset={8}>
                    <Button onClick={this.clear}>重置</Button>
                </Col>
            </Row>


        </div>
    }

    clear = () => {
        this.setState({
            currentCode: '',
            pressMap: new Set()
        })
    }
    handleKewDown = (e) => {
        let map = this.state.pressMap;
        let code = e.keyCode
        if (code === 13) {
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD) {
                code = 1302;
            } else {
                code = 1301;
            }
        } else if (code === 16) {
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                code = 1600;
            } else {
                code = 1601;
            }
        } else if (code === 18) {
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                code = 1800;
            } else {
                code = 1801;
            }
        }else if( code === 17 ){
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                code = 1700;
            } else {
                code = 1701;
            }
        }else if( code === 145 ){
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                code = 1450;
            } else {
                code = 1451;
            }
        }else if( code === 91){
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                code = 9100;
            } else {
                code = 9101;
            }
        }
        map.add(code)
        this.setState((preState, props) => ({
            currentCode: e.keyCode,
            pressMap: map
        }))
        e.preventDefault()
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKewDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKewDown);
    }
}

export default App;
