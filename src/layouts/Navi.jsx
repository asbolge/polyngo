import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi({ isAuthenticated,handleSignOut,kullaniciAdi,setLevel,falseCount,trueCount,userPoints }) {


    
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as={Link} to='/'
                        className='fs-5 fw-bolder fst-italic'
                        name='PolynGo'
                    // active={activeItem === 'home'}
                    // onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn userPoints={userPoints} falseCount={falseCount} trueCount={trueCount} setLevel={setLevel} handleSignOut={handleSignOut} kullaniciAdi={kullaniciAdi} /> : <SignedOut  />}

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
