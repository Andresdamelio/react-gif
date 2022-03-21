import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const [shoValidation, setShoValidation] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
      setShoValidation(false);
    } else {
      setShoValidation(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs...'
        value={inputValue}
        onChange={handleInputChange}
      />
      {shoValidation && inputValue.trim().length < 3 && (
        <span className='error'>Debes ingresar al menos dos caracteres</span>
      )}
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;
