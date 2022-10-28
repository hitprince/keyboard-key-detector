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
            pressedSet: new Set(),
            latestCode: '',
            pressingCode: ''
        }
    };

    render() {
        return <div className="App">
            <header className="App-header">
                按键测试
            </header>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 27,
                                'button-up': this.state.pressedSet.has(27)
                            })}>ESC</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 112,
                                'button-up': this.state.pressedSet.has(112)
                            })}>F1</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 113,
                                'button-up': this.state.pressedSet.has(113)
                            })}>F2</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 114,
                                'button-up': this.state.pressedSet.has(114)
                            })}>F3</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 115,
                                'button-up': this.state.pressedSet.has(115)
                            })}>F4</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 116,
                                'button-up': this.state.pressedSet.has(116)
                            })}>F5</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 117,
                                'button-up': this.state.pressedSet.has(117)
                            })}>F6</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 118,
                                'button-up': this.state.pressedSet.has(118)
                            })}>F7</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 119,
                                'button-up': this.state.pressedSet.has(119)
                            })}>F8</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 120,
                                'button-up': this.state.pressedSet.has(120)
                            })}>F9</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 121,
                                'button-up': this.state.pressedSet.has(121)
                            })}>F10</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 122,
                                'button-up': this.state.pressedSet.has(122)
                            })}>F11</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 123,
                                'button-up': this.state.pressedSet.has(123)
                            })}>F12</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 44,
                                'button-up': this.state.pressedSet.has(44)
                            })}>PrtSc</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 145,
                                'button-up': this.state.pressedSet.has(145)
                            })}>PrtLk</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 19,
                                'button-up': this.state.pressedSet.has(19)
                            })}>Pause</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 173,
                                'button-up': this.state.pressedSet.has(173)
                            })}>静音</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 174,
                                'button-up': this.state.pressedSet.has(174)
                            })}>音量+</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 175,
                                'button-up': this.state.pressedSet.has(175)
                            })}>音量+</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 0,
                                'button-up': this.state.pressedSet.has(0)
                            })}>Cal</Button>


                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 144,
                                'button-up': this.state.pressedSet.has(144)
                            })}>NUM</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 96,
                                'button-up': this.state.pressedSet.has(96)
                            })}>0</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 97,
                                'button-up': this.state.pressedSet.has(97)
                            })}>1</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 98,
                                'button-up': this.state.pressedSet.has(98)
                            })}>2</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 99,
                                'button-up': this.state.pressedSet.has(99)
                            })}>3</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 100,
                                'button-up': this.state.pressedSet.has(100)
                            })}>4</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 101,
                                'button-up': this.state.pressedSet.has(101)
                            })}>5</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 102,
                                'button-up': this.state.pressedSet.has(102)
                            })}>6</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 103,
                                'button-up': this.state.pressedSet.has(103)
                            })}>7</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 104,
                                'button-up': this.state.pressedSet.has(104)
                            })}>8</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 105,
                                'button-up': this.state.pressedSet.has(105)
                            })}>9</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 107,
                                'button-up': this.state.pressedSet.has(107)
                            })}>+</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 109,
                                'button-up': this.state.pressedSet.has(109)
                            })}>-</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 106,
                                'button-up': this.state.pressedSet.has(106)
                            })}>*</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 111,
                                'button-up': this.state.pressedSet.has(111)
                            })}>/</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 110,
                                'button-up': this.state.pressedSet.has(110)
                            })}>.</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 1302,
                                'button-up': this.state.pressedSet.has(1302)
                            })}>Enter</Button>

                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 37,
                                'button-up': this.state.pressedSet.has(37)
                            })}>左</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 38,
                                'button-up': this.state.pressedSet.has(38)
                            })}>上</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 39,
                                'button-up': this.state.pressedSet.has(39)
                            })}>右</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 40,
                                'button-up': this.state.pressedSet.has(40)
                            })}>下</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 45,
                                'button-up': this.state.pressedSet.has(45)
                            })}>INS</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 36,
                                'button-up': this.state.pressedSet.has(36)
                            })}>HOME</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 46,
                                'button-up': this.state.pressedSet.has(46)
                            })}>DEL</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 35,
                                'button-up': this.state.pressedSet.has(35)
                            })}>END</Button>
                    <Button size={"large"} className={classNames({
                        'button-down': this.state.pressingCode === 33,
                        'button-up': this.state.pressedSet.has(33)
                    })}>PAGE
                        UP</Button>
                    <Button size={"large"} className={classNames({
                        'button-down': this.state.pressingCode === 34,
                        'button-up': this.state.pressedSet.has(34)
                    })}>PAGE
                        DOWN</Button>

                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 65,
                                'button-up': this.state.pressedSet.has(65)
                            })}>A</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 66,
                                'button-up': this.state.pressedSet.has(66)
                            })}>B</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 67,
                                'button-up': this.state.pressedSet.has(67)
                            })}>C</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 68,
                                'button-up': this.state.pressedSet.has(68)
                            })}>D</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 69,
                                'button-up': this.state.pressedSet.has(69)
                            })}>E</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 70,
                                'button-up': this.state.pressedSet.has(70)
                            })}>F</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 71,
                                'button-up': this.state.pressedSet.has(71)
                            })}>G</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 72,
                                'button-up': this.state.pressedSet.has(72)
                            })}>H</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 73,
                                'button-up': this.state.pressedSet.has(73)
                            })}>I</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 74,
                                'button-up': this.state.pressedSet.has(74)
                            })}>J</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 75,
                                'button-up': this.state.pressedSet.has(75)
                            })}>K</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 72,
                                'button-up': this.state.pressedSet.has(76)
                            })}>L</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 77,
                                'button-up': this.state.pressedSet.has(77)
                            })}>M</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 78,
                                'button-up': this.state.pressedSet.has(78)
                            })}>N</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 79,
                                'button-up': this.state.pressedSet.has(79)
                            })}>O</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 80,
                                'button-up': this.state.pressedSet.has(80)
                            })}>P</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 81,
                                'button-up': this.state.pressedSet.has(81)
                            })}>Q</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 82,
                                'button-up': this.state.pressedSet.has(82)
                            })}>R</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 83,
                                'button-up': this.state.pressedSet.has(83)
                            })}>S</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 84,
                                'button-up': this.state.pressedSet.has(84)
                            })}>T</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 85,
                                'button-up': this.state.pressedSet.has(85)
                            })}>U</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 86,
                                'button-up': this.state.pressedSet.has(86)
                            })}>V</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 87,
                                'button-up': this.state.pressedSet.has(87)
                            })}>W</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 88,
                                'button-up': this.state.pressedSet.has(88)
                            })}>X</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 89,
                                'button-up': this.state.pressedSet.has(89)
                            })}>Y</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 90,
                                'button-up': this.state.pressedSet.has(90)
                            })}>Z</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 48,
                                'button-up': this.state.pressedSet.has(48)
                            })}>0</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 49,
                                'button-up': this.state.pressedSet.has(49)
                            })}>1</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 50,
                                'button-up': this.state.pressedSet.has(50)
                            })}>2</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 51,
                                'button-up': this.state.pressedSet.has(51)
                            })}>3</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 52,
                                'button-up': this.state.pressedSet.has(52)
                            })}>4</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 53,
                                'button-up': this.state.pressedSet.has(53)
                            })}>5</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 54,
                                'button-up': this.state.pressedSet.has(54)
                            })}>6</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 55,
                                'button-up': this.state.pressedSet.has(55)
                            })}>7</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 56,
                                'button-up': this.state.pressedSet.has(56)
                            })}>8</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 57,
                                'button-up': this.state.pressedSet.has(57)
                            })}>9</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 8,
                                'button-up': this.state.pressedSet.has(8)
                            })}>退格</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 9,
                                'button-up': this.state.pressedSet.has(9)
                            })}>TAB</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 1301,
                                'button-up': this.state.pressedSet.has(1301)
                            })}>Enter</Button>
                    <Button size={"large"} className={classNames({
                        'button-down': this.state.pressingCode === 1600,
                        'button-up': this.state.pressedSet.has(1600)
                    })}>LEFT
                        Shift</Button>
                    <Button size={"large"} className={classNames({
                        'button-down': this.state.pressingCode === 1601,
                        'button-up': this.state.pressedSet.has(1601)
                    })}>RIGHT
                        Shift</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 1700,
                                'button-up': this.state.pressedSet.has(1700)
                            })}>LEFT CTRL</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 1701,
                                'button-up': this.state.pressedSet.has(1701)
                            })}>RIGHT CTRL</Button>
                    <Button size={"large"} className={classNames({
                        'button-down': this.state.pressingCode === 1800,
                        'button-up': this.state.pressedSet.has(1800)
                    })}>LEFT
                        ALT</Button>
                    <Button size={"large"} className={classNames({
                        'button-down': this.state.pressingCode === 1801,
                        'button-up': this.state.pressedSet.has(1801)
                    })}>RIGHT
                        ALT</Button>
                    <Button size={"large"} className={classNames({
                        'button-down': this.state.pressingCode === 20,
                        'button-up': this.state.pressedSet.has(20)
                    })}>CAPE
                        LOK</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 186,
                                'button-up': this.state.pressedSet.has(186)
                            })}>:;</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 187,
                                'button-up': this.state.pressedSet.has(187)
                            })}>+=</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 188,
                                'button-up': this.state.pressedSet.has(188)
                            })}>,&lt;</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 189,
                                'button-up': this.state.pressedSet.has(189)
                            })}>-_</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 190,
                                'button-up': this.state.pressedSet.has(190)
                            })}>&gt;</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 191,
                                'button-up': this.state.pressedSet.has(191)
                            })}>/?</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 192,
                                'button-up': this.state.pressedSet.has(192)
                            })}>`~</Button>

                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 219,
                                'button-up': this.state.pressedSet.has(219)
                            })}>[ &#123;</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 221,
                                'button-up': this.state.pressedSet.has(221)
                            })}>] &#125;</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 220,
                                'button-up': this.state.pressedSet.has(220)
                            })}>|</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 222,
                                'button-up': this.state.pressedSet.has(222)
                            })}> '"</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 9100,
                                'button-up': this.state.pressedSet.has(9100)
                            })}>LEFT WIN</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 9101,
                                'button-up': this.state.pressedSet.has(9101)
                            })}>RIGHT WIN</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 255,
                                'button-up': this.state.pressedSet.has(255)
                            })}>FN</Button>
                    <Button size={"large"}
                            className={classNames({
                                'button-down': this.state.pressingCode === 32,
                                'button-up': this.state.pressedSet.has(32)
                            })}>空格</Button>

                    <Button size={"large"}
                            className={classNames({'button-up': this.state.pressedSet.has(179)})}>停止</Button>

                    <Button size={"large"}
                            className={classNames({'button-up': this.state.pressedSet.has(172)})}>浏览器</Button>

                    <Button size={"large"}
                            className={classNames({'button-up': this.state.pressedSet.has(180)})}>邮件</Button>

                    <Button size={"large"}
                            className={classNames({'button-up': this.state.pressedSet.has(170)})}>搜索</Button>

                    <Button size={"large"}
                            className={classNames({'button-up': this.state.pressedSet.has(171)})}>收藏</Button>

                    当前按下： <div>{this.state.latestCode}</div>

                    <Button onClick={this.clear}>重置</Button>
        </div>
    }

    clear = () => {
        this.setState({
            latestCode: '',
            pressedSet: new Set()
        })
    }
    handleKeyDown = (e) => {
        e.preventDefault()
        let code = this.mapCode(e);
        this.setState({
            pressingCode: code
        })
    }
    mapCode = (e) => {
        let code = e.keyCode;
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
        } else if (code === 17) {
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                code = 1700;
            } else {
                code = 1701;
            }
        } else if (code === 91) {
            if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                code = 9100;
            } else {
                code = 9101;
            }
        }
        return code;
    }
    handleKeyUp = (e) => {
        e.preventDefault()
        let map = this.state.pressedSet;
        let code = this.mapCode(e);
        map.add(code)
        this.setState((preState, props) => ({
            latestCode: e.keyCode,
            pressedSet: map,
            pressingCode: ''
        }))

    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleKeyUp);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyUp);
        document.removeEventListener('keydown', this.handleKeyDown);
    }
}

export default App;
