import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {
    const [isAuhenticated, setIsAuhenticated] = useState(false)

    function handleSignOut(params) {
        setIsAuhenticated(false)
    }

    function handleSignIn(params) {
        setIsAuhenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as={Link} to='/'
                        className='fs-5 fw-bold'
                        name='PolynGo'
                    // active={activeItem === 'home'}
                    // onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        {isAuhenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}

                        {/* <Menu.Item>
                                    <Button as={Link} to='/sign-up'  primary>Sign Up</Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button as={Link} to='/sign-in' grey>Sign In</Button>
                            </Menu.Item> */}
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}
