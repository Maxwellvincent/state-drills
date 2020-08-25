import React, { Component } from 'react'

export default class RouletteGun extends Component {
  static defaultProps = {
    catLives: 9
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
    catLives: this.props.catLives
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 2)

      if(randomChamber === 2) {
        let livesleft = this.state.catLives;
        this.setState({
          catLives: livesleft - 1
        })
      }

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  renderDisplay() {
    const { chamber, spinningTheChamber,catLives } = this.state
    // const { catLives } = this.props
    if (spinningTheChamber) {
      return 'Cat is currently falling!! ....'
    } else if (chamber === 1 ) {
      return `Landed on feet! Kitty still has ${this.state.catLives} lives`;
    } else if (chamber === 2) {
      // need to subtract 1 from the catlives and assigne it to the state;
      // let livesleft = catLives - 1;
      // this.setState({
      //   catLives: livesleft
      // })
      return `Uh oh, used up a life! Kitty has ${this.state.catLives} lives left.`;
    } else {
      return `Click to decide kitty's fate!`;
    }
  }

  render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Kitty had an accident!
        </button>
      </div>
    )
  }
}
