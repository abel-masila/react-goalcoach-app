import createBrowserHistory from 'history/createBrowserHistory'
import queryString from 'query-string';

const history = createBrowserHistory();

history.location.query = queryString.parse(history.location.search);

history.listen(() => {
  history.location.query = queryString.parse(history.location.search);
});

export default history;
