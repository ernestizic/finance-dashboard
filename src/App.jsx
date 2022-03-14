import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import WalletScreen from './screens/Wallet/WalletScreen';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<DashboardScreen />} />
					<Route exact path='/wallet' element={<WalletScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
