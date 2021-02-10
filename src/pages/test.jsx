import { useEffect } from 'react';

import React, { useEffect } from 'react';
import { Field } from '@alifd/next';
export default () => {
  const field = Field.useField();
  useEffect(() => {
    // 默认值
    field.setValues({ name: 'robin' });
  }, []);
  return (
    <Form field={field}>
      <Form.Item label='姓名'>
        <Input name='name' />
      </Form.Item>
    </Form>
  );
};
