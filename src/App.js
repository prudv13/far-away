import './index.css';

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo(){
  return (
    <div>
      <h1>🌴 Far Away 💼</h1>
    </div>
  );
}

function Form(){
  return (
    <div className='add-form'>
      <h3>What do you need for your 😍 trip ?</h3>
    </div>
  );
}

function PackingList(){
  return (
    <div className='list'>
      Packing List
    </div>
  );
}

function Stats(){
  return (
    <footer className='stats'>
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
