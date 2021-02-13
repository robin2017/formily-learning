import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  createFormActions,
  FormEffectHooks,
  Submit,
} from '@formily/next';
import { Input, Select } from '@formily/next-components';
const { onFieldValueChange$ } = FormEffectHooks;
const useOneToManyEffects = () => {
  const { setFieldState } = createFormActions();
  onFieldValueChange$('aa').subscribe(({ value }) => {
    setFieldState('*(bb,cc,dd)', (state) => {
      state.visible = value;
    });
  });
};

export default () => {
  return (
    <SchemaForm
      components={{ Input, Select }}
      onSubmit={console.log}
      effects={() => {
        useOneToManyEffects();
      }}
    >
      <Field
        type='string'
        enum={[
          { label: 'visible', value: true },
          { label: 'hidden', value: false },
        ]}
        default={false}
        name='aa'
        title='AA'
        x-component='Select'
      />
      <Field type='string' name='bb' title='BB' x-component='Input' />
      <Field type='string' name='cc' title='CC' x-component='Input' />
      <Field type='string' name='dd' title='DD' x-component='Input' />
      <FormButtonGroup>
        <Submit>查询</Submit>
      </FormButtonGroup>
    </SchemaForm>
  );
};
