import React from 'react';
import Select from 'react-select';
import { TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Login = () => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {/* Preferred syntax on most cases. If you need props, pass TextField props to Controller props (forwarded) */}
      <div className="pb2">
        <Controller
          as={TextField}
          name="TextField"
          control={control}
          defaultValue=""
          className="w-100"
        />
      </div>

      {/* Another possibility, any potential props passed to <Checkbox/> will be overrided. SomeName => Checkbox */}
      <div className="pb2">
        <Controller
          as={<Select options={options} />}
          control={control}
          rules={{ required: true }}
          onChange={([selected]) => {
            // Place your logic here
            return selected;
          }}
          name="reactSelect"
          defaultValue={{ value: 'chocolate' }}
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
