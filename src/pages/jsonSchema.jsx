import React from 'react'
import { SchemaForm, FormButtonGroup, Submit } from '@formily/next'
import { Input } from '@formily/next-components'
import '@alifd/next/dist/next.css'

export default () => {
  return (
    <SchemaForm
      components={{
        Input
      }}
      onSubmit={console.log}
      schema={{
        type: 'object',
        'x-component-props': {
          labelCol: 7,
          wrapperCol: 12
        },
        properties: {
          string: {
            type: 'string',
            title: 'String',
            'x-component': 'Input'
          }
        }
      }}
    >
      <FormButtonGroup offset={7}>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </SchemaForm>
  )
}