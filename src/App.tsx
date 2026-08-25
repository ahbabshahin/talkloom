import react from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/login/Login';
import Signup from './auth/signup/Signup';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			{/* <Route path='/forgot-password' element={<ForgotPassword />} /> */}

			<Route path='/' element={<Navigate to='/login' replace />} />
		</Routes>
	);

}

export default App;
