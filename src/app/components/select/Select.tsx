import React from 'react';
import './Select.scss';
import {TSelect} from '../../types/select';
import {SELECT_DEFAULT} from '../../../consts';

const Select: React.FC<TSelect> = ({title, options, callback}) => {
  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    callback(event.target.value);
  }

  return (
    <div className='Select'>
      <p className='Select__Title'>{title}</p>
      <select
        className='Select__Item'
        onChange={handlerSelect}>
        {/* Значение по умолчанию */}
        <option value={SELECT_DEFAULT}>No selected</option>
        {/* Передаваемые значения */}
        {options.map(option => {
          return <option key={option.id} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}

export default Select;