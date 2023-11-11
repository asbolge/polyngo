import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button as={Link} to='/sign-up' primary>Sign Up</Button>
                <Button as={Link} to='/sign-in' grey style={{marginLeft:'0.5em'}} onClick={signIn} >Sign In</Button>
            </Menu.Item>


        </div>
    )
}
