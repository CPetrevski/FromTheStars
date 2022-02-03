import React from 'react';
import { Icon } from '@iconify/react';
import locationIconFire from '@iconify/icons-mdi/fire-alert';


const locationMarker = ({ lat, lng, onClick }) => {

  return (
      <div className='location-marker' onClick={onClick}>
          <Icon icon={locationIconFire} className='location-icon-fire' />
      </div>
  )
};

export default locationMarker;
