import { useState } from "react";
import "./App.css";

function App() {
  // Counter State
  const [count, setCount] = useState(0);
  const [counterHistory, setCounterHistory] = useState([]);

  // Random Number State
  const [randomNumber, setRandomNumber] = useState("--");
  const [randomHistory, setRandomHistory] = useState([]);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  // Theme State
  const [darkMode, setDarkMode] = useState(false);

  // Add Counter History
  const addCounterHistory = (message) => {
    const time = new Date().toLocaleTimeString();

    setCounterHistory((prev) => [
      {
        message,
        time,
      },
      ...prev,
    ]);
  };

  // Increment
  const increment = () => {
    setCount((prev) => prev + 1);
    addCounterHistory(`Incremented to ${count + 1}`);
  };

  // Decrement
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      addCounterHistory(`Decremented to ${count - 1}`);
    }
  };

  // Reset Counter
  const reset = () => {
    setCount(0);
    addCounterHistory("Reset to 0");
  };

  // Generate Random Number
  const generateRandom = () => {
    const minimum = Number(min);
    const maximum = Number(max);

    if (minimum >= maximum) {
      alert("Minimum number must be smaller than Maximum number!");
      return;
    }

    const random =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    setRandomNumber(random);

    setRandomHistory((prev) => [random, ...prev].slice(0, 5));
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* HEADER */}

      <header className="header">
        <div className="logo">⚛</div>

        <div className="header-content">
          <h1>
            React <span>Counter</span> & Random Number Generator
          </h1>

          <p>Practice useState, Events & Conditional Rendering</p>

          <div className="tech-tags">
            <span>React JS</span>
            <span>useState</span>
            <span>Event Handling</span>
            <span>Conditional Rendering</span>
          </div>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* MAIN */}

      <main className="container">
        <div className="cards">
          {/* COUNTER CARD */}

          <section className="card counter-card">
            <h2>📊 COUNTER</h2>

            <p className="label">Current Count</p>

            <div className="count-number">{count}</div>

            <div className="button-group">
              <button className="increment" onClick={increment}>
                + Increment
              </button>

              <button className="decrement" onClick={decrement}>
                − Decrement
              </button>

              <button className="reset" onClick={reset}>
                ↻ Reset
              </button>
            </div>

            {/* Conditional Rendering */}

            {count === 0 ? (
              <div className="status">
                ✅ Counter is at minimum limit.
              </div>
            ) : (
              <div className="status active">
                🚀 Counter is active!
              </div>
            )}

            {/* COUNTER HISTORY */}

            <div className="history-section">
              <h3>🕘 Counter History</h3>

              {counterHistory.length === 0 ? (
                <p className="empty-history">
                  No history available yet.
                </p>
              ) : (
                <div className="history-list">
                  {counterHistory.map((item, index) => (
                    <div className="history-item" key={index}>
                      <span>{item.message}</span>
                      <small>{item.time}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* RANDOM NUMBER CARD */}

          <section className="card random-card">
            <h2>🎲 RANDOM NUMBER GENERATOR</h2>

            <p className="label">Your Random Number</p>

            <div className="random-number">
              {randomNumber}
            </div>

            <p className="range-title">
              Generate number between
            </p>

            <div className="range-inputs">
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />

              <span>to</span>

              <input
                type="number"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </div>

            <button
              className="generate-btn"
              onClick={generateRandom}
            >
              🎲 Generate Random Number
            </button>

            {/* RANDOM HISTORY */}

            <div className="random-history">
              <h3>🕘 Previous Numbers</h3>

              {randomHistory.length === 0 ? (
                <p className="empty-history">
                  Generate a number to see history.
                </p>
              ) : (
                <div className="number-history">
                  {randomHistory.map((number, index) => (
                    <span key={index}>{number}</span>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* HOW IT WORKS */}

        <section className="how-it-works">
          <h2>🚀 How It Works</h2>

          <div className="works-grid">
            <div>
              <h3>📊 Counter</h3>

              <p>✔ Increase count using + button</p>
              <p>✔ Decrease count using − button</p>
              <p>✔ Reset counter to zero</p>
              <p>✔ View all history in real-time</p>
            </div>

            <div>
              <h3>🎲 Random Number Generator</h3>

              <p>✔ Select minimum and maximum range</p>
              <p>✔ Click generate to get random number</p>
              <p>✔ Get number between selected range</p>
              <p>✔ View previously generated numbers</p>
            </div>
          </div>
        </section>

        {/* KEYBOARD SHORTCUT */}

        <section className="shortcuts">
          <h2>⌨ Keyboard Shortcuts</h2>

          <div className="shortcut-list">
            <div>
              <kbd>+</kbd>
              <span>Increment</span>
            </div>

            <div>
              <kbd>−</kbd>
              <span>Decrement</span>
            </div>

            <div>
              <kbd>R</kbd>
              <span>Reset Counter</span>
            </div>

            <div>
              <kbd>G</kbd>
              <span>Generate Random</span>
            </div>
          </div>
        </section>

        <div className="tip">
          💡 Tip: Use buttons for faster interaction!
        </div>
      </main>

      {/* FOOTER */}

      <footer>
        <div>
          <h3>Built with ❤️ using React JS</h3>

          <p>
            Concepts Used: useState • Events • Conditional Rendering •
            State Management • Dynamic Rendering 
  
          </p>
        </div>

        
      </footer>
    </div>
  );
}

export default App;