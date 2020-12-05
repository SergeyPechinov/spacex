import React, {useEffect, useState} from 'react';
import './App.scss';
import {URL_LAUNCHES, URL_LAUNCHPADS, URL_ROCKETS} from '../../../consts';
import Main from '../main/Main';
import {TLaunch} from '../../types/api/launch';
import {TLaunchpad} from '../../types/api/launchpad';
import {TRocket} from '../../types/api/rocket';

export const getApiData = (url: string): object => {
  return fetch(url).then(response => response.json());
}

const App: React.FC = () => {
  const [isLoadData, setIsLoadData] = useState<boolean>(false);
  const [isLoadError, setIsLoadError] = useState<boolean>(false);
  const [launches, setLaunches] = useState<TLaunch[]>([]);
  const [launchpads, setLaunchpads] = useState<TLaunchpad[]>([]);
  const [rockets, setRockets] = useState<TRocket[]>([]);

  useEffect(() => {
    // получает данные с API
    const queries: object[] = [
      getApiData(URL_LAUNCHES),
      getApiData(URL_LAUNCHPADS),
      getApiData(URL_ROCKETS)
    ];

    Promise
      .all(queries)
      .then((response) => {
        const [dataLaunches, dataLaunchpads, dataRockets]: any = response;

        setLaunches(dataLaunches);
        setLaunchpads(dataLaunchpads);
        setRockets(dataRockets);
      })
      .catch(() => {
        setIsLoadError(true);
      })
      .finally(() => {
        setIsLoadData(true);
      });
  }, []);

  return (
    <div className={`App ${(!isLoadData || isLoadError) && 'App--Loading'}`}>
      {
        isLoadData ?
          isLoadError ?
            <p>Loading error</p>
            : <Main
                launches={launches}
                launchpads={launchpads}
                rockets={rockets}/>
          : <p>Loading</p>
      }
    </div>
  );
}

export default App;
