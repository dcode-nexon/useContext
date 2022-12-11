import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

function Login() {
	const login = useContext(LoginContext);

	return (
		<article>
			<button onClick={() => login.setLogin(true)}>Login</button>
			<button onClick={() => login.setLogin(false)}>Logout</button>
		</article>
	);
}

export default Login;
