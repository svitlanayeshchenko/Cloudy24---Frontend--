import './ModalWindow.css';
import appModalStore from '../AppModalStore';
import React, { Component } from 'react';


class ModalWindow extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.unsubModalWindowVisibleChange = appModalStore.subscribe(
            () => {
                this.forceUpdate();
            },
            state => state.modalWindowVisible);
    }

    clickHandler(e) {
        e.preventDefault();
        appModalStore.getState().setmodalWindowVisible(false);
    }

    render() {

        if (appModalStore.getState().modalWindowVisible) {
            return (
                <div className="grayArea" onClick={this.clickHandler}>
                    <div className="grayAreaMessage" onClick={this.clickHandler}>
                        Наш менеджер<br />зателефонує Вам<br />через 30 секунд
                    </div>
                </div>
            )
        } return (
            <div className="grayArea grayArea-not-visible">
                <div className="grayAreaMessage" >
                    Наш менеджер передзвонить Вам через 30 сек
                </div>
            </div>
        )
    }
}

export default ModalWindow;