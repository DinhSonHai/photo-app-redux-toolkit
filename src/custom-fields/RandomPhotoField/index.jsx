import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label, Input } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
}

RandomPhotoField.defaultProps = {
  label: '',
}

function RandomPhotoField(props) {
  const {
    field, form,
    label
  } = props;

  const { name, value, onBlur } = field;

  const handleImageUrlChange = (newImageUrl) => {
    // Cập nhật tương ứng field trong form có giá trị name thuộc tính newImageUrl, trigger update form
    // form sẽ re-render lại
    form.setFieldValue(name, newImageUrl);
  }

  return (
    <FormGroup>
      { label && <Label for={name}>{label}</Label> }

      <RandomPhoto 
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomBlurChange={onBlur}
      />
    </FormGroup>
  )
}

export default RandomPhotoField;