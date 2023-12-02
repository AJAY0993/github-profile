import { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import Loader from './Loader'
import List from './List';
import SearchBar from './SearchBar';
import NotFound from './NotFound';
import Box from './Box';
import Main from './Main';
import Hero from './Hero';
function App() {
  const [query, setQuery] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [userRepos, setUserRepos] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Hero>
        <SearchBar query={query} setQuery={setQuery} />
      </Hero>
      <Main query={query}
        setUserInfo={setUserInfo}
        setUserRepos={setUserRepos}
        setLoading={setLoading}>
        {userInfo === '' ? 'type username to search' : loading ? <Loader /> : userInfo.message ? <NotFound /> : <Box query={query} userInfo={userInfo} userRepos={userRepos} setUserRepos={setUserRepos} />}
      </Main>
    </div>
  );
}













export default App;
