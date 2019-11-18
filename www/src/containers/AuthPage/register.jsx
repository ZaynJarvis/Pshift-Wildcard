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
			name: '',
			email: '',
			desc: '',
			password: '',
			message: '',
		};
		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
	}

	login = e => {
		e.preventDefault();
		this.props.history.push('/login');
  };
  
  register = e => {
		e.preventDefault();
		const credentials = { name: this.state.name, email: this.state.email, description: this.state.desc, password: this.state.password };
		AuthService.register(credentials).then(res => {
			if (res.status === 200) {
				this.props.history.push(`/login${this.state.email}`);
			} else {
				this.setState({ message: res.data.message });
			}
		});
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
						label='NAME'
						fullWidth
						margin='normal'
						name='name'
						value={this.state.name}
						onChange={this.onChange}
					/>
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
						type='text'
						label='DESC'
						fullWidth
						margin='normal'
						name='desc'
						value={this.state.desc}
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

					<Button variant='contained' color='primary' onClick={this.register} style={styles.button}>
						Register
					</Button>
          <Button variant='outlined' color='primary' onClick={this.login}>
						Login
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
    justifyContent: 'center',
  },
	notification: {
		display: 'flex',
		justifyContent: 'center',
		color: '#dc3545',
  },
  button: {
    marginRight: '1rem',
  }
};

export default LoginComponent;
