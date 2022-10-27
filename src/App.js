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
                <Col span={15}>
                    <Row>
                        <Col span={1}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(27)})}>ESC</Button>
                        </Col>
                        <Col span={1}>

                        </Col>
                        <Col span={4}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(112)})}>F1</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(113)})}>F2</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(114)})}>F3</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(115)})}>F4</Button>
                        </Col>
                        <Col span={4}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(116)})}>F5</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(117)})}>F6</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(118)})}>F7</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(119)})}>F8</Button>
                        </Col>
                        <Col span={4}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(120)})}>F9</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(121)})}>F10</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(122)})}>F11</Button>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(123)})}>F12</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={3}>

                </Col>

                <Col span={4}>
                    <Row>
                        <Col span={6}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(173)})}>静音</Button>
                        </Col>
                        <Col span={6}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(174)})}>音量+</Button>
                        </Col>
                        <Col span={6}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(175)})}>音量+</Button>
                        </Col>
                        <Col span={6}>
                            <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(0)})}>Cal</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(0)})}>0</Button>
                    </Row>

                </Col>
            </Row>
            <Row>

            </Row>
            <Row>

            </Row>
            <Row>

                <Col span={2}>
                    <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(179)})}>停止</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(172)})}>浏览器</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(180)})}>邮件</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(170)})}>搜索</Button>
                </Col>
                <Col span={2}>
                    <Button size={"large"} className={classNames({'button-press':this.state.pressMap.has(171)})}>收藏</Button>
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

    clear = ()=>{
        this.setState({
            currentCode: '',
            pressMap: new Set()
        })
    }
    handleKewDown =(e)=>{
        let map = this.state.pressMap;
        map.add(e.keyCode)
        this.setState((preState, props) => ({
            currentCode: e.keyCode,
            pressMap: map
        }))
    }

    componentDidMount() {
        document.addEventListener('keydown',this.handleKewDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown',this.handleKewDown);
    }
}

export default App;
