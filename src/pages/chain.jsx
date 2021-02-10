import React, { useEffect, useState } from 'react';

import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  FormEffectHooks,
  Submit,
  Reset,
} from '@formily/next'; // 或者 @formily/next
import Printer from '@formily/printer';
import { merge } from 'rxjs';
import { Input, Select } from '@formily/next-components'; // 或者@formily/next-components

const components = {
  Input,
  Select,
};

const { onFieldValueChange$, onFieldInit$ } = FormEffectHooks;

export default () => {
  return (
    <SchemaForm
      labelCol={5}
      wrapperCol={14}
      components={components}
      effects={({ setFieldState }) => {
        merge(onFieldValueChange$('aa'), onFieldInit$('aa')).subscribe(
          (fieldState) => {
            setFieldState('bb', (state) => {
              state.visible = fieldState.value === 123;
            });
          }
        );
      }}
    >
      <Field
        type='string'
        title='AA'
        enum={[
          { label: '123', value: 123 },
          { label: '321', value: 321 },
        ]}
        name='aa'
        x-component='Select'
      />
      <Field type='string' title='BB' name='bb' x-component='Input' />
      <FormButtonGroup offset={5}>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  );
};
