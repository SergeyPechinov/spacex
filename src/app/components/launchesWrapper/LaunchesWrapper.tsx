import React from 'react';
import './LaunchesWrapper.scss';
import {TLaunchesWrapper} from '../../types/launchesWrapper';
import LaunchItem from '../launchItem/LaunchItem';

const LaunchesWrapper: React.FC<TLaunchesWrapper> = ({ launches }) => {
  return (
    <div className='LaunchesWrapper'>
      {launches.map(launch => {
        return (
          <LaunchItem
            key={launch.id}
            title={launch.title}
            description={launch.description}
            image={launch.image}
            date_unix={launch.date_unix}/>
        )
      })}
    </div>
  )
};

export default LaunchesWrapper;