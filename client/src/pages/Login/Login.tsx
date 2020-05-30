import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   age: yup.number().required().positive().integer(),
// });

// export function Login() {
//   const { register, handleSubmit, errors } = useForm({
//     validationSchema: schema,
//   });
//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         First Name
//         <input type="text" name="firstName" ref={register} />
//       </label>
//       {errors.firstName && <p>{errors.firstName.message}</p>}

//       <label>
//         Age
//         <input type="text" name="age" ref={register} />
//       </label>
//       {errors.age && <p>{errors.age.message}</p>}

//       <input type="submit" />
//     </form>
//   );
// }

import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
