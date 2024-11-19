import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Card from './components/Card/Card';
import DashBoard from './components/DashBoard/DashBoard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';
const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])
  return allTickets ? (
    <div >
      <div style={{ padding:'10px'}} >
      <NavBar />
      </div>
      <DashBoard />
    </div>
  ) : <Loading />
}
export default App