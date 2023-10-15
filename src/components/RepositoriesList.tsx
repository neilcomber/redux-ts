import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';

const RepositoriesList: React.FC = () => {

  const [input, setInput] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories)

  console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(input)

  }




  return (<div>
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e)=>{setInput(e.target.value)} } />
      <button>Search</button>
    </form>
    <div>
      {loading && <h3>loading...</h3>}
      {error && <h3>{error}</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  </div>);
};

export default RepositoriesList;