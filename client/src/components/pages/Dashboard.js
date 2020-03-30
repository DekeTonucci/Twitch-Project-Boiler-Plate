import React, { Component } from 'react';
import axios from 'axios';

const background = {
  backgroundImage: 'linear-gradient(127deg, #e0c3fc 0%, #8ec5fc 100%)'
};

class Login extends Component {
  state = {
    currentUser: null
  };
  async componentDidMount() {
    const { data: currentUser } = await axios.get(`/auth/current_user`);
    console.log({ currentUser });
    this.setState((prevState) => ({ currentUser }));
  }

  renderDashboard() {
    if (this.state.currentUser) {
      return <h1>Welcome, {this.state.currentUser.displayName}</h1>;
    } else {
      return (
        <h1>
          Please{' '}
          <a style={{ color: '#6441A4' }} href='/'>
            login
          </a>
        </h1>
      );
    }
  }

  render() {
    return (
      <div className='h-screen font-sans login bg-cover' style={background}>
        <div className='flex items-center justify-center h-screen'>
          <div
            className='text-white font-bold rounded-lg border shadow-lg py-5 px-20'
            style={{ backgroundColor: 'rgba(255,255,255,.25)' }}
          >
            {this.renderDashboard()}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
