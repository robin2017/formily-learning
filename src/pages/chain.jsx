import React, { useEffect, useState } from 'react';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset,
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
        // $为函数:function (type, matcher)
        $('onFieldChange', 'aa').subscribe((fieldState) => {
          console.log('aa field-change:', fieldState);
          setFieldState('bb', (state) => {
            state.visible = fieldState.value === 123;
          });
        });
      }}
    >
      <Field title='AA' enum={aaOptions} name='aa' x-component='Select' />
      <Field title='BB' name='bb' x-component='Input' />
      <FormButtonGroup offset={5}>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  );
};
