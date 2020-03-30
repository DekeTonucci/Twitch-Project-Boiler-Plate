import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const background = {
  backgroundImage: 'linear-gradient(127deg, #e0c3fc 0%, #8ec5fc 100%)'
};

class Login extends Component {
  state = {
    currentUser: null
  };

  async componentDidMount() {
    const data = await axios.get(`/auth/current_user`);
    console.log({ data });
    this.setState((prevState) => ({ currentUser: data }));
  }

  renderLoginOrRedirect() {
    if (this.state.currentUser) {
      return (
        <div className='flex items-center justify-center h-screen'>
          <div
            className='text-white font-bold rounded-lg border shadow-lg py-5 px-20'
            style={{ backgroundColor: 'rgba(255,255,255,.25)' }}
          >
            <h1
              className='text-center text-2xl font-bold mb-10'
              style={{ color: '#6441A4' }}
            >
              Application Name
            </h1>

            <a href='/auth/twitch' className='mr-5 text-center btn'>
              <p
                className=' text-white text-center font-bold rounded-lg border shadow-lg p-5'
                style={{ backgroundColor: '#6441A4' }}
              >
                <FontAwesomeIcon icon={faTwitch} /> Login w/ Twitch
              </p>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className='flex items-center justify-center h-screen'>
          <div
            className='text-white font-bold rounded-lg border shadow-lg py-5 px-20'
            style={{ backgroundColor: 'rgba(255,255,255,.25)' }}
          >
            <h1
              className='text-center text-2xl font-bold mb-10'
              style={{ color: '#6441A4' }}
            >
              Application Name
            </h1>

            <a href='/auth/twitch' className='mr-5 text-center btn'>
              <p
                className=' text-white text-center font-bold rounded-lg border shadow-lg p-5'
                style={{ backgroundColor: '#6441A4' }}
              >
                You are already logged in!
              </p>
            </a>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='h-screen font-sans login bg-cover' style={background}>
        {this.renderLoginOrRedirect()}
      </div>
    );
  }
}
export default Login;
