import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo 
        title="Finish Frontend Simplified"
        paragraph="Code along with Frontend Simplified step by step"
         />
        <Todo 
        title="Finish Interwiew Section"
        paragraph="Finish every interwiew question in the next 6 weeks."
         />
        <Todo 
        title="Land $100k Job"
        paragraph="Apply to 100 jobs."
         />
      </div>
      <Modal
      question="Can you confirm?"
       />
    </div>
  );
}

export default App;
