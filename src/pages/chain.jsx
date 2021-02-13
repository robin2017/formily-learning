import React from 'react';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  LifeCycleTypes,
} from '@formily/next';
import { Input, Select } from '@formily/next-components';
const components = {
  Input,
  Select,
};
const aaOptions = [
  { label: '123', value: 123 },
  { label: '321', value: 321 },
];

export default () => {
  return (
    <SchemaForm
      onSubmit={console.log}
      labelCol={5}
      wrapperCol={14}
      components={components}
      // 控制显示隐藏
      effects={($, { setFieldState }) => {
        // 初始值
        $(LifeCycleTypes.ON_FORM_INIT).subscribe(() => {
          setFieldState('aa', (state) => {
            state.value = 123;
          });
        });
        // 变化时
        $(LifeCycleTypes.ON_FIELD_CHANGE, 'aa').subscribe((bbState) => {
          setFieldState('bb', (aaState) => {
            aaState.visible = bbState.value === 123;
          });
        });
      }}
    >
      <Field title='AA' enum={aaOptions} name='aa' x-component='Select' />
      <Field title='BB' name='bb' x-component='Input' />
      <FormButtonGroup>
        <Submit>查询</Submit>
      </FormButtonGroup>
    </SchemaForm>
  );
};
