import React from 'react';

import { Form, FormItem, FormButtonGroup, Submit } from '@formily/next';
import { Input } from '@formily/next-components';

export default () => (
  <Form labelCol={7} wrapperCol={12} onSubmit={console.log}>
    <div style={{ padding: 20, margin: 20, border: '1px solid red' }}>
      Form组件内部可以随便插入UI元素了
    </div>
    <FormItem label='String' name='string' component={Input} />
    <FormButtonGroup offset={7}>
      <Submit>提交</Submit>
    </FormButtonGroup>
  </Form>
);
