import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

export default function SignUp() {
    return (
        <div>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                    />
                </Form.Group>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='joe@schmoe.com'
                //   error={{
                //     content: 'Please enter a valid email address',
                //     pointing: 'below',
                //   }}
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
                    content='Sign Up'
                    // label='Label with htmlFor'
                />
            </Form>
        </div>
    )
}
