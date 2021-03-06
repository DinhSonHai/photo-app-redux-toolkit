import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
}

SelectField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  options: [],
}

function SelectField(props) {
  const {
    field, form,
    options, label, placeholder, disabled
  } = props;

  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find(option => option.value === value)

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    }

    field.onChange(changeEvent);
  }

  return (
    <FormGroup>
      { label && <Label for={name}>{label}</Label> }
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}

        options={options}
        isDisabled={disabled}
        placeholder={placeholder}

        className={showError ? 'is-invalid' : ''}
      />

    <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

export default SelectField;