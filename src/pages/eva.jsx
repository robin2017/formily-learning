import React, { useEffect } from 'react';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
} from '@formily/next';
import { Input } from '@alifd/next';

export default () => {
  return (
    <SchemaForm
      initialValues={{ name: 'FirstName' }}
      components={{ Input }}
      onSubmit={console.log}
    >
      <Field name='name' title='Name' x-component='Input' />
      <FormButtonGroup>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </SchemaForm>
  );
};
