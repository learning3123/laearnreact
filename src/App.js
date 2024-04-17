import logo from './logo.svg';
import './App.css';
import Layout1 from './cmp/layout1rowcol';
import Layout2 from './cmp/layout2verticalhorizontal';
import Layout3 from './cmp/layout3widthheight';
import CardLayout from './cmp/card';
function App() {
  return (
<>
<h1 className='my-4'>1 row col grid </h1>
<Layout1/>
<h1 className='my-5'>2 flex in row HORIZONTAL VERTICAL</h1>
<Layout2/>
<h1 className='my-5'>3 width height </h1>
<Layout3/>
<h1 className='my-5'>4 Card </h1>
<CardLayout/>
</>
  );
}

export default App;
