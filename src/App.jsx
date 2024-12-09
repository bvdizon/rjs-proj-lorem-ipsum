import { useState } from 'react';
import text from './data.js';
import { nanoid } from 'nanoid';

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphs(text.slice(0, count));
  };

  console.log(paragraphs);

  return (
    <section className='section-center'>
      <h4>My Lorem Ipsum Generator</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'># of paragraphs: </label>
        <input
          type='number'
          min='1'
          step='1'
          max='8'
          id='amount'
          name='amount'
          // defaultValue={count}
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button type='submit' className='btn'>
          Generate!
        </button>
      </form>

      <article className='lorem-text'>
        {paragraphs.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
