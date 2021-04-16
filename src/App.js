import { useState } from 'react';

function App() {
  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  return (
    <div className='container'>
      <div className='controls'>
        <label htmlFor='horizontal'>Horizontal Height</label>
        <input
          type='range'
          min='5'
          max='100'
          value={hori}
          onChange={(e) => setHori(e.target.value)}
        />
        <label htmlFor='Vertical'>Vertical Height</label>
        <input
          type='range'
          min='5'
          max='100'
          value={veri}
          onChange={(e) => setVeri(e.target.value)}
        />
        <label htmlFor='Blur'>Blur</label>
        <input
          type='range'
          min='5'
          max='100'
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label htmlFor='Vertical'></label>
      </div>
      <div className='output'>
        <div className='box'></div>
      </div>
    </div>
  );
}

export default App;
