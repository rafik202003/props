import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const data=
  {
    id:Math.random(),fullname:"Rafik",Biblio:"My Profile"
  }
  return (
    <div className="App">
     <Profile p={data}/>
    </div>
  );
}

export default App;
