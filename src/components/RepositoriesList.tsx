import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';

const RepositoriesList: React.FC = () => {

  const [input, setInput] = useState('');
  const { searchRepositories } = useActions();
  const state = useSelector((state) => {
    return state
  })

  console.log(state)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(input)

  }

  let content = '';


  return (<div>
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e)=>{setInput(e.target.value)} } />
      <button>Search</button>
    </form>
    <div>
      {content}
    </div>
  </div>);
};

export default RepositoriesList;