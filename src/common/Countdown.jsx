import React, { Component } from 'react';

class CountdownTimer extends Component {
  state = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  }

  componentDidMount() {
    setInterval(() => {
      let date = +new Date(this.props.date)
      let difference = date - +new Date();

      if (date < new Date()) {
        this.setState({ timer: 0 });
      } else {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / (1000)) % 60);
        this.setState({
          hours: hours > 9 ? hours : `0${hours}`,
          minutes: minutes > 9 ? minutes : `0${minutes}`,
          seconds: seconds > 9 ? seconds : `0${seconds}`,
          days
        })
      }
    }, 1000)
  }

  render() {
    const {days, hours, minutes, seconds} = this.state;
    return ( 
      <p>{ days } : { hours } : { minutes } : { seconds }</p>
    );
  }
}

export default CountdownTimer;