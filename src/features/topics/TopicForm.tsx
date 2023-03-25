import React from 'react';
import { Button, Form, Input, Row, Space } from 'antd';
import { TopicModel } from 'models/Topic';

interface Props {
  defaultValues?: TopicModel;
  handleSubmit: Function;
  loading: boolean;
}

const TopicForm: React.FC<Props> = ({
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
      name='topicForm'
      initialValues={defaultValues}
      onFinish={onFinish}
      layout='vertical'
      form={form}
    >
      <div style={{ maxWidth: 250, margin: '30px auto 50px' }}>
        <Form.Item
          label='Topic name'
          name='name'
          rules={[{ required: true, message: 'Please input name' }]}
        >
          <Input placeholder='Input topic name' size='large' />
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

export default TopicForm;
