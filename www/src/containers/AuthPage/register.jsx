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

// import React, { useEffect } from 'react';
// import './index.css';
// import UserContext from '../../context/user/userContext';
// import GigContext from '../../context/gig/gigContext';
// import InsuranceContext from '../../context/insurance/insuranceContext';
// import Image from 'react-graceful-image';
// import users from '../../mock/users';

// export default ({ history }) => {
//   const [currUser, setUser] = React.useState();
//   const { getAllInsurances } = React.useContext(InsuranceContext);
//   const { setUserID } = React.useContext(UserContext);
//   const { getAllGigs } = React.useContext(GigContext);

//   useEffect(() => {
//     getAllInsurances();
//     // eslint-disable-next-line
//   }, []);

//   const click = id => {
//     setUser(id);
//     setUserID(id);
//     getAllGigs(id);
//     setTimeout(() => {
//       history.push('/market');
//     }, 3200);
//   };

//   return (
//     <div className='login-wrapper'>
//       {Object.values(users).map(user => (
//         <div
//           key={user.id}
//           onClick={() => click(user.id)}
//           className={
//             'login-profile ' +
//             user.id +
//             ' ' +
//             (currUser ? (currUser === user.id ? 'active' : 'inactive') : '')
//           }>
//           <Image
//             src={user.image}
//             noLazyLoad='true'
//             alt='...'
//             style={{ objectFit: 'cover' }}></Image>
//         </div>
//       ))}
//     </div>
//   );
// };
