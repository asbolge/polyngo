import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

export default function ProfilePage() {

    return (
        <div>
        <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Username'
                        placeholder='username...'
                    />
                </Form.Group>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='joe@schmoe.com'
                />
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-password'
                        control={Input}
                        label='Password'
                        type='password'
                        placeholder='Password'
                    />
                    <Form.Field
                        id='form-input-control-confirm-password'
                        control={Input}
                        type='password'
                        label='Confirm Password'
                        placeholder='Confirm Password'
                    />
                </Form.Group>
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Save'
                />
            </Form>
        </div>
    )
}