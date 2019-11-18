import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthService from './AuthService';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.match.params.email || '',
      password: '',
      message: ''
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login = e => {
    e.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };
    AuthService.login(credentials).then(res => {
      if (res.status === 200) {
        localStorage.setItem('jwt', JSON.stringify(res.data.token));
        this.props.history.push('/market');
      } else {
        this.setState({ message: res.data.message });
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.history.push('/register');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Container maxWidth='sm' style={styles.wrapper}>
        <form>
          <Typography variant='h4' style={styles.notification}>
            {this.state.message}
          </Typography>
          <TextField
            type='text'
            label='EMAIL'
            fullWidth
            margin='normal'
            name='email'
            value={this.state.email}
            onChange={this.onChange}
          />

          <TextField
            type='password'
            label='PASSWORD'
            fullWidth
            margin='normal'
            name='password'
            value={this.state.password}
            onChange={this.onChange}
          />

          <Button
            variant='contained'
            color='primary'
            onClick={this.login}
            style={styles.button}>
            Login
          </Button>
          <Button variant='outlined' color='primary' onClick={this.register}>
            Register
          </Button>
        </form>
      </Container>
    );
  }
}

const styles = {
  wrapper: {
    height: '100%',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  notification: {
    display: 'flex',
    justifyContent: 'center',
    color: '#dc3545'
  },
  button: {
    marginRight: '1rem'
  }
};

export default LoginComponent;
