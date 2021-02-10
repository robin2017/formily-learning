import React from 'react';
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  SchemaMarkupField as Field,
} from '@formily/next';
import { Input } from '@formily/next-components';

export default () => (
  <SchemaForm
    components={{ Input }}
    labelCol={7}
    wrapperCol={12}
    onSubmit={console.log}
  >
    <div style={{ padding: 20, margin: 20, border: '1px solid red' }}>
      这是一个非Field类标签，会被挪到最底部渲染
    </div>
    <Field type='string' title='String' name='string' x-component='Input' />
    <FormButtonGroup offset={7}>
      <Submit>提交</Submit>
    </FormButtonGroup>
  </SchemaForm>
);
