import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

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

const schema = yup.object().shape({
  username: yup
    .string()
    .required('No username provided.')
    .min(2, 'Username is too short - should be 2 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const { register, handleSubmit, errors } = useForm({
  //   validationSchema: schema,
  // });
  // const onSubmit = (data: any) => console.log(data);

  return (
    <div className="container">
      <Row>
        <Col span={12} offset={6}>
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
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
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
        </Col>
      </Row>
    </div>
  );
};

export default Login;
