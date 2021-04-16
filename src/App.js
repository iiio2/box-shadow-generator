import { useState } from 'react';

function App() {
  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('black');
  return (
    <div className='container'>
      <div className='controls my-4'>
        <div>
          <label htmlFor='horizontal'>Horizontal Height</label>
          <input
            type='range'
            min='-100'
            max='100'
            value={hori}
            onChange={(e) => setHori(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='Vertical'>Vertical Height</label>
          <input
            type='range'
            min='-100'
            max='100'
            value={veri}
            onChange={(e) => setVeri(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='Blur'>Blur</label>
          <input
            type='range'
            min='5'
            max='100'
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='color'>Color</label>
          <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <div className='output'>
        <div
          className='box'
          style={{ boxShadow: `${hori}px ${veri}px ${blur}px ${color}` }}
        ></div>
      </div>
      <p className='lead mt-5 text-center'>
        {' '}
        Box-Shadow: {hori}px {veri}px {blur}px {color}px{' '}
      </p>
    </div>
  );
}

export default App;
