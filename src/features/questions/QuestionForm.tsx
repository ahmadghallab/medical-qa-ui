import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Row, Space, theme } from 'antd';
import { QuestionModel } from 'models/Question';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
  BoldOutlined,
  ItalicOutlined,
  OrderedListOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { stateToHTML } from 'draft-js-export-html';

interface Props {
  defaultValues?: QuestionModel;
  handleSubmit: Function;
  loading: boolean;
}

const INLINE_STYLES = [
  { icon: <BoldOutlined />, style: 'BOLD' },
  { icon: <ItalicOutlined />, style: 'ITALIC' },
  { icon: <UnderlineOutlined />, style: 'UNDERLINE' },
];

const BLOCK_TYPES = [
  { icon: <UnorderedListOutlined />, style: 'unordered-list-item' },
  { icon: <OrderedListOutlined />, style: 'ordered-list-item' },
];

const QuestionForm: React.FC<Props> = ({
  defaultValues,
  handleSubmit,
  loading,
}) => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const editor = useRef(null);

  const onFinish = (values: any) => {
    const contentState = editorState.getCurrentContent();
    const content = JSON.stringify(convertToRaw(contentState));
    const html = stateToHTML(contentState);
    handleSubmit({
      question: content,
      question_html: html,
      answer: values.answer,
      reference: values.reference,
    });
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (defaultValues.question) {
      const contentState = convertFromRaw(JSON.parse(defaultValues.question));
      const editorStateOutput = EditorState.createWithContent(contentState);
      setEditorState(editorStateOutput);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const focusEditor = () => {
    editor.current.focus();
  };

  const handleInlineFormat = (newFormat: any) => {
    let nextState = RichUtils.toggleInlineStyle(editorState, newFormat);
    handleEditorChange(nextState);
  };

  const handleBlockFormat = (newFormat: any) => {
    let nextState = RichUtils.toggleBlockType(editorState, newFormat);
    handleEditorChange(nextState);
  };

  const handleEditorChange = (editorState: any) => {
    setEditorState(editorState);
  };

  return (
    <Form
      name='questionForm'
      initialValues={defaultValues}
      onFinish={onFinish}
      layout='vertical'
      form={form}
    >
      <div style={{ maxWidth: 900, margin: '30px auto 50px' }}>
        <div
          style={{
            cursor: 'text',
            backgroundColor: token.colorBgContainer,
            padding: 16,
            borderRadius: token.borderRadiusLG,
            border: `1px solid ${token.colorBorder}`,
            marginBottom: 24,
          }}
          onClick={focusEditor}
        >
          <Space.Compact block style={{ marginBottom: 24 }}>
            {INLINE_STYLES.map((type) => (
              <Button
                icon={type.icon}
                onMouseDown={() => handleInlineFormat(type.style)}
                key={type.style}
                value={type.style}
              />
            ))}
            {BLOCK_TYPES.map((type) => (
              <Button
                icon={type.icon}
                onMouseDown={() => handleBlockFormat(type.style)}
                key={type.style}
                value={type.style}
              />
            ))}
          </Space.Compact>
          <Editor
            ref={editor}
            editorState={editorState}
            onChange={handleEditorChange}
            placeholder='Input question'
          />
        </div>
        <Form.Item
          label='Answer'
          name='answer'
          rules={[{ required: true, message: 'Please input answer' }]}
        >
          <Input.TextArea
            autoSize={{ minRows: 3 }}
            placeholder='Input answer'
            size='large'
          />
        </Form.Item>
        <Form.Item
          label='Reference'
          name='reference'
          rules={[{ required: true, message: 'Please input reference' }]}
        >
          <Input.TextArea
            autoSize={{ minRows: 2 }}
            placeholder='Input reference'
            size='large'
          />
        </Form.Item>
      </div>
      <Row justify='end'>
        <Space>
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
