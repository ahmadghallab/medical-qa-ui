import React from 'react';
import { Button, Form, Input, Row, Space } from 'antd';
import { BranchModel } from 'models/Branch';

interface Props {
  defaultValues?: BranchModel;
  handleSubmit: Function;
  loading: boolean;
}

const BranchForm: React.FC<Props> = ({
  defaultValues,
  handleSubmit,
  loading,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    handleSubmit(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      name='branchForm'
      initialValues={defaultValues}
      onFinish={onFinish}
      layout='vertical'
      form={form}
    >
      <div style={{ maxWidth: 250, margin: '30px auto 50px' }}>
        <Form.Item
          label='Branch name'
          name='name'
          rules={[{ required: true, message: 'Please input name' }]}
        >
          <Input placeholder='Input branch name' size='large' />
        </Form.Item>
      </div>
      <Row justify='end'>
        <Space>
          <Button type='text' onClick={onReset} htmlType='button' size='large'>
            Reset
          </Button>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            size='large'
          >
            Save
          </Button>
        </Space>
      </Row>
    </Form>
  );
};

export default BranchForm;
