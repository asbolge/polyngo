import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="./images/Default-avatar.jpg"></Image>
                <Dropdown pointing="top right" text='Name Surname'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Profile" icon="user" />
                        <Dropdown.Item text="Stats" icon="chart line" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
