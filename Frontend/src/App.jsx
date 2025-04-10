import './index.css';

function App() {
  return (
    <div >
      <h1>Hello, Tailwind!</h1>
      <p className="text-neutral-gray">
        This is a paragraph styled with <span className='text-accent-purple'>Fira Code</span> and custom theme variables.
      </p>
    </div>
  );
}

export default App;
