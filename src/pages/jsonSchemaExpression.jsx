import React from 'react';
import { SchemaForm, FormButtonGroup, Submit } from '@formily/next';
import { Input } from '@formily/next-components';

export default () => {
  return (
    <SchemaForm
      components={{
        Input,
      }}
      onSubmit={console.log}
      schema={{
        type: 'object',
        properties: {
          name: {
            title: '{{customTitle}}',
            'x-component': 'Input',
          },
        },
      }}
      // 通过 expressionScope 注入上下文
      expressionScope={{
        customTitle: '姓名',
      }}
    >
      <FormButtonGroup>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </SchemaForm>
  );
};
