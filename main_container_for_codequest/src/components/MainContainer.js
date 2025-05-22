import React, { useState } from 'react';
import './MainContainer.css';

/**
 * MainContainer component for CodeQuest: Beginner's Challenge
 * 
 * This component serves as the primary container for the application,
 * housing various interactive learning sections including coding challenges,
 * logic puzzles, debugging activities, and learning modules.
 */
const MainContainer = () => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('challenges');

  // Navigation items
  const navItems = [
    { id: 'challenges', label: 'Coding Challenges' },
    { id: 'puzzles', label: 'Logic Puzzles' },
    { id: 'debugging', label: 'Debugging Activities' },
    { id: 'learning', label: 'Learning Modules' }
  ];

  return (
    <div className="main-container">
      <div className="codequest-header">
        <div className="codequest-logo">
          <span className="logo-symbol">{'{ }'}</span>
          <h1>CodeQuest: Beginner's Challenge</h1>
        </div>
        <p className="codequest-tagline">
          Level up your coding skills through interactive challenges and puzzles
        </p>
      </div>

      <div className="section-navigation">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="content-area">
        {activeSection === 'challenges' && (
          <section className="challenges-section">
            <h2>Coding Challenges</h2>
            <div className="section-content">
              <div className="placeholder-card">
                <h3>JavaScript Basics</h3>
                <p>Test your knowledge of JavaScript fundamentals with these beginner-friendly challenges.</p>
                <div className="difficulty">Difficulty: Easy</div>
                <button className="btn">Start Challenge</button>
              </div>
              <div className="placeholder-card">
                <h3>Function Mastery</h3>
                <p>Practice creating and using functions to solve common programming problems.</p>
                <div className="difficulty">Difficulty: Medium</div>
                <button className="btn">Start Challenge</button>
              </div>
              <div className="placeholder-card">
                <h3>Array Operations</h3>
                <p>Learn how to manipulate arrays and use array methods effectively.</p>
                <div className="difficulty">Difficulty: Medium</div>
                <button className="btn">Start Challenge</button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'puzzles' && (
          <section className="puzzles-section">
            <h2>Logic Puzzles</h2>
            <div className="section-content">
              <div className="placeholder-card">
                <h3>Pattern Recognition</h3>
                <p>Identify and complete patterns in sequences of numbers, symbols, or operations.</p>
                <div className="difficulty">Difficulty: Easy</div>
                <button className="btn">Solve Puzzle</button>
              </div>
              <div className="placeholder-card">
                <h3>Algorithmic Thinking</h3>
                <p>Develop step-by-step solutions to solve complex logic problems.</p>
                <div className="difficulty">Difficulty: Hard</div>
                <button className="btn">Solve Puzzle</button>
              </div>
              <div className="placeholder-card">
                <h3>Code Predictions</h3>
                <p>Predict the output of code snippets before running them.</p>
                <div className="difficulty">Difficulty: Medium</div>
                <button className="btn">Solve Puzzle</button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'debugging' && (
          <section className="debugging-section">
            <h2>Debugging Activities</h2>
            <div className="section-content">
              <div className="placeholder-card">
                <h3>Syntax Error Hunt</h3>
                <p>Find and fix syntax errors in code snippets to make them run correctly.</p>
                <div className="difficulty">Difficulty: Easy</div>
                <button className="btn">Start Debugging</button>
              </div>
              <div className="placeholder-card">
                <h3>Logic Error Detection</h3>
                <p>Identify and fix logical errors that cause incorrect outputs.</p>
                <div className="difficulty">Difficulty: Medium</div>
                <button className="btn">Start Debugging</button>
              </div>
              <div className="placeholder-card">
                <h3>Runtime Error Fixing</h3>
                <p>Diagnose and solve errors that occur during program execution.</p>
                <div className="difficulty">Difficulty: Hard</div>
                <button className="btn">Start Debugging</button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'learning' && (
          <section className="learning-section">
            <h2>Learning Modules</h2>
            <div className="section-content">
              <div className="placeholder-card">
                <h3>Programming Fundamentals</h3>
                <p>Learn the core concepts of programming with interactive examples.</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '0%' }}></div>
                </div>
                <button className="btn">Start Learning</button>
              </div>
              <div className="placeholder-card">
                <h3>Data Structures Basics</h3>
                <p>Understand how to use arrays, objects, and other data structures.</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '0%' }}></div>
                </div>
                <button className="btn">Start Learning</button>
              </div>
              <div className="placeholder-card">
                <h3>Algorithmic Thinking</h3>
                <p>Develop your ability to think through problems step by step.</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '0%' }}></div>
                </div>
                <button className="btn">Start Learning</button>
              </div>
            </div>
          </section>
        )}
      </div>

      <footer className="codequest-footer">
        <div className="footer-content">
          <p>CodeQuest: Beginner's Challenge - An interactive learning platform for coding beginners</p>
          <p>Track your progress, earn achievements, and grow your programming skills!</p>
        </div>
      </footer>
    </div>
  );
};

export default MainContainer;
