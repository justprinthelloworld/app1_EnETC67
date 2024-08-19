import React, { Component } from 'react'
export default class Button extends Component {
    showAlert(msg) {
        alert(msg)
    }

    onclickButtonOK = () => {
        this.showAlert('Hello')
    }

    render() {
        return <button onClick={this.onclickButtonOK}>OK</button>
    }
}