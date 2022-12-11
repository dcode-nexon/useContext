import Content from './Content';
import Header from './Header';
import './scss/style.scss';
import { LoginContext } from './context/LoginContext';
import { useState } from 'react';

function App() {
	const [Login, setLogin] = useState(false);

	return (
		<LoginContext.Provider value={{ Login, setLogin }}>
			<main>
				<Header />
				<Content />
			</main>
		</LoginContext.Provider>
	);
}

export default App;
