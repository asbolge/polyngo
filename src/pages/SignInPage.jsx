import React from 'react'
import { Form, Input, Button, Grid } from 'semantic-ui-react'

export default function SignInPage({SignIn}) {
    return (
        <div>
            <Grid>
                <Grid.Column className='mx-auto' width={12}>
                    <Form>
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
                        <Form.Field
                            id='form-input-control-password'
                            control={Input}
                            label='Password'
                            type='password'
                            placeholder='Password'
                        />
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Sign In'
                            onClick={SignIn}
                            
                        // label='Label with htmlFor'
                        />
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
