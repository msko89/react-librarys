import React from 'react';
import '../Sass.scss';

function SassComponent() {
  return (
    <>
      <div>
        <p>Sass</p>
        <p className='font'>Sass</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#'>Test</a>
          </li>
          <li>
            <a href='#'>Test1</a>
          </li>
        </ul>
      </nav>
      <p className='base'>base Style</p>
      <p className='inverse'>base inverse Style</p>
      <br />
      <p className='info'>info</p>
      <p className='alert'>alert</p>
      <p className='success'>success</p>
      <br />
      <p className='message'>message</p>
      <p className='success2'>success2</p>
      <p className='error'>error</p>
      <p className='warning'>warning</p>
      <br />
      <div className='square-av'>message</div>
      <div className='circle-av'>success2</div>
    </>
  );
}

export default SassComponent;
