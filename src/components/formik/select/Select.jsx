/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function SelectInput({
  label, options, id, ...props
}) {
  const [field, meta] = useField(props);
  const [valueOptions, setValueOptions] = useState('');
  const dispatch = useDispatch();
  const opciones = useSelector((state) => state.opciones);

  useEffect(() => {
    if (Array.isArray(opciones)) {
      const opcionesSelect = opciones?.filter((item) => item.id == id);
      if (opcionesSelect.length > 0) {
        setValueOptions(opcionesSelect[0][`${label}`]);
      }
    }
  }, [opciones, id, label]);
  // eslint-disable-next-line arrow-body-style
  async function findAsync(arr, valor) {
    // eslint-disable-next-line no-return-await
    return await arr.find((m) => m.name === valor);
  }
  let opt = [];
  async function handleChange(event) {
    opt = await findAsync(options, event.target.value);
    setValueOptions(event.target.value);
    dispatch(setOpcionesGlobal({ [label]: event.target.value, id: `${id}`, idReg: `${opt.drSimID}` }));
  }
  return (
    <FormControl color="formColor" sx={{ width: { xs: '100%', sm: '70%' } }} variant="filled">
      <InputLabel id={field.name}>{label}</InputLabel>
      <Select
        labelId={field.name}
        id={field.name}
        value={valueOptions}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleChange}
        label={label}
        sx={{ backgroundColor: 'white' }}
      >
        {
          options?.map((option) => (
            <MenuItem key={option.id} name={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))
        }
      </Select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormControl>
  );
}

Select.propTypes = {
  label: PropTypes.string,
}.isRequired;

Select.defaultProps = {
  label: '',
};

export default SelectInput;
