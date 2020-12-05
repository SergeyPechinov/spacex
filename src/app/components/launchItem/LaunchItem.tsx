import React, {useState} from 'react';
import './LaunchItem.scss';
import {TLaunchItem} from '../../types/launchItem';
import {IMAGE_DEFAULT} from '../../../consts';

const unixToDate = (timestamp: number): string => {
  const date: Date = new Date(timestamp*1000);
  const getDay: number = date.getDate();
  const getMonth: number = date.getMonth();

  const day: string = getDay > 9 ? getDay.toString() : '0' + getDay;
  const month: string = getMonth > 9 ? getMonth.toString() : '0' + getMonth;
  const year: number = date.getFullYear();
  return `${day}.${month}.${year}`;
}

const LaunchItem: React.FC<TLaunchItem> = ({ title, description, image, date_unix}) => {
  const [date] = useState<string>(unixToDate(date_unix));

    return (
      <section className='LaunchItem'>
          <img className='LaunchItem__Image' src={image ? image : IMAGE_DEFAULT} alt=''/>
          <div className='LaunchItem__Inner'>
              <div className='LaunchItem__Top'>
                  <h2 className='LaunchItem__Title'>{title}</h2>
                  <p className='LaunchItem__Date'>{date}</p>
              </div>
              <p className='LaunchItem__Description'>{description}</p>
          </div>
      </section>
    )
}

export default LaunchItem;