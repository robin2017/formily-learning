import React, { useEffect, useState } from 'react';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  LifeCycleTypes,
  Submit,
} from '@formily/next';

import { Input, Select } from '@formily/next-components';

const components = {
  Input,
  Select,
};

export default () => {
  return (
    <SchemaForm
      labelCol={5}
      wrapperCol={14}
      components={components}
      effects={($, { setFieldState }) => {
        // 在 effects 中使用$订阅生命周期,第一个参数为生命周期类型
        // Form则没有第二个参数，Field则有第二个参数
        $(LifeCycleTypes.ON_FORM_INIT).subscribe(() => {
          setFieldState('aa', (state) => {
            state.value = 321;
          });
        });
        $(LifeCycleTypes.ON_FIELD_CHANGE, 'aa').subscribe((fieldState) => {
          setFieldState('bb', (state) => {
            state.visible = fieldState.value === 123;
          });
        });
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
      </FormButtonGroup>
    </SchemaForm>
  );
};
