import React from 'react';
import { Button, Form, Input, Row, Space } from 'antd';
import { QuestionModel } from 'models/Question';

interface Props {
  defaultValues?: QuestionModel;
  handleSubmit: Function;
  loading: boolean;
}

const QuestionForm: React.FC<Props> = ({
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
      name='questionForm'
      initialValues={defaultValues}
      onFinish={onFinish}
      layout='vertical'
      form={form}
    >
      <div style={{ maxWidth: 500, margin: '30px auto 50px' }}>
        <Form.Item
          label='Question'
          name='question'
          rules={[{ required: true, message: 'Please input question' }]}
        >
          <Input.TextArea rows={3} placeholder='Input question' size='large' />
        </Form.Item>
        <Form.Item
          label='Answer'
          name='answer'
          rules={[{ required: true, message: 'Please input answer' }]}
        >
          <Input.TextArea rows={3} placeholder='Input answer' size='large' />
        </Form.Item>
        <Form.Item label='Reference' name='reference'>
          <Input.TextArea rows={2} placeholder='Input reference' size='large' />
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

export default QuestionForm;
