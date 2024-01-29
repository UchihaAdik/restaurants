import React from 'react';
import { useParams } from 'react-router-dom';
import ApiList from '../../apiComonents';
import { leftbarlink } from '../../Layout/LeftNavBar/leftbarlink';


function FoodMenu() {
  const { dataType } = useParams();

  return (
    <div className='foodMenu'>
      <div className='foodMenu__topConteiner'>
      </div>
      <ApiList  dataType={dataType} />
    </div>
  );
}

export default FoodMenu;