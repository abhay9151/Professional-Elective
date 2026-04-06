import React from 'react';
import { useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>About Us</h2>
      <p>This is the About page.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default About;