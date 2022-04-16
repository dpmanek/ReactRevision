import './App.css';
import Pfc from './Components/Props/functionalComponent';
import Pcc from './Components/Props/classComponent';
import Scc from './Components/State/classComponent';
import Sfc from './Components/State/functionalComponent';
import Navbar from './Components/Navbar/Navbar'
function App() {
	return (
		<div className="App">
		<Navbar/>
			<Pfc name="Deep" age='50'></Pfc>
			<Pfc name="Nirav" age='50'></Pfc>
			<Pfc name="Amisha" age='50'></Pfc>
			<hr />
			<Pcc name="Deep" age='80'></Pcc>
			<Pcc name="Nirav" age='80'></Pcc>
			<Pcc name="Amisha" age='80'></Pcc>
			<hr />
			<Scc></Scc>
			<hr />
			<Sfc></Sfc>
		</div>
	);
}

export default App;
