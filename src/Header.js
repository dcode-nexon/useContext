import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

function Header() {
	const login = useContext(LoginContext);
	console.log(login);

	return (
		<header>
			<h1>LOGO</h1>

			<div>{login.Login ? <p>홍길동님 반갑습니다.</p> : <p>회원가입</p>}</div>
		</header>
	);
}

export default Header;
