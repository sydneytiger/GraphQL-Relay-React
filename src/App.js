import { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import './App.css';

const RepoNameQuery = graphql`query AppRepoNameQuery($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
    name
    languages(first: 10) {
      nodes {
        name
      }
    }
  }
}`

// Immediately load the query as app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(
  RelayEnvironment, 
  RepoNameQuery, 
  {
    name:"Todo-app",
    owner: "sydneytiger"
  })

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
const App = ({ preloadedQuery }) => {
  const {repository: {name, languages: {nodes}}} = usePreloadedQuery(RepoNameQuery, preloadedQuery)
  console.log(nodes);
  return (
    <div className="App">
      <header className="App-header">
        <p>{`Respository: ${name}`}</p>
        {nodes && nodes.length && nodes.map(language => <li>{language.name}</li>)}
      </header>
    </div>
  );
}

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
const AppRoot = props => {
  return(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}


export default AppRoot;
