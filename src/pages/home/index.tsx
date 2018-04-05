import * as React from 'react';

interface WelcomeProbs {
  name: string;
}

/* tslint:disable-next-line:variable-name */
const App: React.SFC<WelcomeProbs> = (probs) => <h1>Hello, {probs.name}</h1>;

export default App;
