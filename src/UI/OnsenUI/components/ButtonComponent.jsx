import React from 'react';
import { Button } from 'react-onsenui';

function ButtonComponent() {
  const handleClick = () => {
    alert('click');
  };

  return (
    <>
      <Button onClick={handleClick} modifier='large--cta'>
        Tap Me
      </Button>
      <br />
      <br />
      <Button disabled={true}>disabled</Button>
      <br />
      <br />
      <Button modifier='outline'>outline</Button>
      <Button modifier='light'>light</Button>
    </>
  );
}

export default ButtonComponent;
