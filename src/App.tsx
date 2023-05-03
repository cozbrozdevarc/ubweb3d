import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import OrderForm from './pages/Order';
import Terms from './pages/Terms'


const App = () => {

	return (
			
		<Router>

			<Routes>

				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About/>} />
				<Route path='/order' element={<OrderForm/>} />
				<Route path='/terms' element={<Terms/>} />


			</Routes>
		</Router>
	);
}

export default App;
