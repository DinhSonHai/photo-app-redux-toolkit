import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';

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
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

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

      <div className={showError ? 'is-invalid' : ''}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

export default RandomPhotoField;