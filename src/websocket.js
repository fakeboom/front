import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Ws extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
    window.onunload = () => {
      if (this.socket) {this.socket.close();console.log('shut down!');}
    };
    this.newSocket();
  }

  newSocket() {
    if (!this.props.token) return;
    axios.get('/api/user/news', {headers: {authorization: `JWT ${this.props.token}`}}).then(result => {
      this.props.dispatch({
        type: 'NEWS-GET',
        news: result.data.news
      });
    });

    this.socket = new WebSocket("ws://114.116.68.121/ws/news");
    this.socket.onopen = () => {
      this.socket.send(this.props.token);
    };
    this.socket.onmessage = message => {
      const data = JSON.parse(message.data);
      this.props.dispatch({
        type: 'NEWS-ADD',
        news: {
          state: data.state,
          time: data.time,
          content: data.content,
          record: data.record,
        }
      });
    };
    this.socket.onclose = () => {
      console.log('closed');
      this.socket.close();
    };
  }

  componentDidUpdate() {
    if (this.socket) this.socket.close();
    this.newSocket();
  }

  render() {
    return (
      null
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(Ws);
