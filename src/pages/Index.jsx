import React from 'react';
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  SchemaMarkupField as Field,
} from '@formily/next';
import { Input, Select } from '@formily/next-components';

// schools是从服务端获取的数据
export default ({
  schools = [
    { label: '东大', value: 'SEU' },
    { label: '南大', value: 'NJU' },
  ],
}) => (
  <SchemaForm
    components={{ Input, Select }}
    labelCol={7}
    wrapperCol={12}
    onSubmit={console.log}
  >
    {/* JSX Schema的Field中必须有x-component属性 */}
    <Field title='学校' name='school' enum={schools} x-component='Select' />
    <Field title='姓名' name='name' x-component='Input' />
    <FormButtonGroup offset={7}>
      <Submit>提交</Submit>
    </FormButtonGroup>
  </SchemaForm>
);
