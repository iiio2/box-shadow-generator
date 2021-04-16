import { useState } from 'react';

function App() {
  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('black');
  const [check, setCheck] = useState(false);
  return (
    <div className='container'>
      <div className='controls my-4'>
        <div className='units'>
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
          <div>
            <div className='custom-control custom-switch'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitch1'
                value={check}
                onChange={() => setCheck(!check)}
              />
              <label className='custom-control-label' htmlFor='customSwitch1'>
                {check ? 'Inset' : 'Outset'}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='output'>
        <div
          className='box'
          style={{
            boxShadow: `${
              check ? 'inset' : ''
            } ${hori}px ${veri}px ${blur}px ${color}`,
          }}
        >
          <p className='lead mt-5 text-center'>
            {' '}
            Box-Shadow: {check ? 'Inset' : ''} {hori}px {veri}px {blur}px{' '}
            {color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
