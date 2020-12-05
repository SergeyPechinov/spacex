import React, {useEffect, useState, useCallback} from 'react';
import './Main.scss';
import Select from '../../components/select/Select';
import LaunchesWrapper from "../../components/launchesWrapper/LaunchesWrapper";
import {SELECT_DEFAULT} from '../../../consts';
import {TOption} from '../../types/select';
import {TMain} from '../../types/main';
import {TLaunch} from '../../types/api/launch';
import {TLaunchpad} from '../../types/api/launchpad';
import {TRocket} from '../../types/api/rocket';
import {TLaunchItem} from '../../types/launchItem';

const launchesToData = (array: TLaunch[]): TLaunchItem[] => {
  const data: TLaunchItem[] = [];

  array.forEach(item => {
    data.push({
      id: item.id,
      title: item.name,
      description: item.details,
      image: item.links.patch.small,
      date_unix: item.date_unix
    });
  });

  return data;
}

const launchpadsToOptions = (array: TLaunchpad[]) => {
  const options: TOption[] = [];

  array.forEach((item: TLaunchpad) => {
    options.push({
      id: item.id,
      label: item.full_name,
      value: item.id
    });
  });

  return options;
};

const rocketsToOptions = (array: TRocket[]) => {
  const options: TOption[] = [];

  array.forEach((item: TRocket) => {
    options.push({
      id: item.id,
      label: item.name,
      value: item.id
    });
  });

  return options;
}

const Main: React.FC<TMain> = ({launches, launchpads, rockets}) => {
  const [dataLaunches, setDataLaunches] = useState<TLaunchItem[]>(launchesToData(launches));
  const [optionsLaunches] = useState<TOption[]>(launchpadsToOptions(launchpads));
  const [optionsRockets] = useState<TOption[]>(rocketsToOptions(rockets));

  const [selectedLaunchpad, setSelectedLaunchpad] = useState<string>(SELECT_DEFAULT);
  const [selectedRocket, setSelectedRocket] = useState<string>(SELECT_DEFAULT);

  const callCetDataLaunches = useCallback(() => {
    const newDataLaunches = launches.filter(item => {
      return (
        (selectedLaunchpad === SELECT_DEFAULT ? true : selectedLaunchpad === item.launchpad) &&
        (selectedRocket === SELECT_DEFAULT ? true : selectedRocket === item.rocket)
      )
    });
    setDataLaunches(launchesToData(newDataLaunches));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLaunchpad, selectedRocket]);

  useEffect(() => {
    callCetDataLaunches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLaunchpad, selectedRocket]);

  return (
    <section className='Main'>
      <h1 className='Main__Title'>Launches</h1>
      <div className='Main__Selects'>
        <Select
          title='Launch Site'
          options={optionsLaunches}
          callback={setSelectedLaunchpad}/>
        <Select
          title='Rocket'
          options={optionsRockets}
          callback={setSelectedRocket}/>
      </div>
      <LaunchesWrapper launches={dataLaunches}/>
    </section>
  )
}

export default Main;