import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Interactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClass: 'payButton',
            textClass: 'buttonText',
            coverClass: 'hidden',
            cardClass: 'hidden',
            spinnerClass: 'hidden',
            checkCoverClass: 'hidden',
            checkmarkClass: 'hidden',
            resetButton: 'hidden',
            resetText: 'hidden'
        }
    }

    handleButtonAnimation = () => {
        this.setState({
            buttonClass: 'payButtonAnimate', 
            textClass: 'buttonTextAnimate', 
            coverClass: 'coverAnimation',
            cardClass: 'creditCard',
            spinnerClass: 'spinner',
            checkCoverClass: 'checkCover',
            checkmarkClass: 'checkmark'});
            setTimeout(() => {
                this.setState({
                    resetButton: 'resetButton',
                    resetText: 'resetText'
                })
            }, 4000);
      }

      handleResetButton = () => {
          this.setState({
            resetButton: 'resetButtonAnimate',
            resetText: 'resetTextHidden'
          });
          setTimeout(() => {
            this.setState({
                buttonClass: 'payButton',
                textClass: 'buttonText',
                coverClass: 'hidden',
                cardClass: 'hidden',
                spinnerClass: 'hidden',
                checkCoverClass: 'hidden',
                checkmarkClass: 'hidden'
              })
          }, 1300);
          setTimeout (() => {
              this.setState({
                  resetButton: 'hidden',
                  resetText: 'hidden'
              })
          }, 2000)
      }

    render() {
        return (
            <div className="interactionWrapper">

                <button className={this.state.resetButton} onClick={() => this.handleResetButton()}>
                    <span className={this.state.resetText}>RESET</span>
                </button>

                <button className={this.state.buttonClass} onClick={() => this.handleButtonAnimation()}>
                    <span className={this.state.textClass}>PAY</span>
                    <div className={this.state.coverClass}></div>
                    <div className={this.state.cardClass}></div>
                    <div className={this.state.spinnerClass}></div>
                    <div className={this.state.checkCoverClass}></div>
                    <div className={this.state.checkmarkClass}></div>
                </button>

            </div>
        )
    }
}

export default Interactions;