import React from 'react';
import PropTypes from 'prop-types';

import './AddEdit.scss';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';

AddEdit.propTypes = {
  
};

function AddEdit(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={val => console.log(val)} />
      </div>
    </div>
  );
}

export default AddEdit;