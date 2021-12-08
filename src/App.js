import './App.css';
import { Fragment } from 'react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Results from './results';
import Income from './income';
import { TaxContext } from './TaxContext';
import { useState } from 'react';

const App = () => {
  const [income, setIncome] = useState(null);
  const [country, setCountry] = useState('Australia');
  const [year, setYear] = useState('2021');

  return (
    <Fragment>
      <Switch>
        <TaxContext.Provider
          value={{
            value: [income, setIncome],
            value2: [country, setCountry],
            value3: [year, setYear],
          }}
        >
          <Route exact path="/" component={Income}></Route>
          <Route exact path="/results" component={Results}></Route>
        </TaxContext.Provider>
      </Switch>
    </Fragment>
  );
};

export default App;
