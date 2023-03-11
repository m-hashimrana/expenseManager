import './components/style.css';
import ExoenseForm from './components/ExoenseForm';

function App() {
	const saveHandler = () => {};
	return (
		<div className='App'>
			<h1>My Expenses</h1>
			<ExoenseForm onSaveForm={saveHandler} />
		</div>
	);
}

export default App;
