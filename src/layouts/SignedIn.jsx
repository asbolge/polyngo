import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import _ from 'lodash';
import { Icon } from 'semantic-ui-react'

export default function SignedIn({ handleSignOut, kullaniciAdi, setLevel, trueCount, falseCount,userPoints }) {

    const navigate = useNavigate();

    const stateOptions = [
        {
            value: "life",
            key: 0
        },
        {
            value: "beginner",
            key: 1
        },
        {
            value: "elementary",
            key: 2
        },
        {
            value: "intermediate",
            key: 3
        },
        {
            value: "upper",
            key: 4
        },
        {
            value: "advanced",
            key: 5
        }
    ];

    const handleDropdownChange = (event, data) => {
        // Seçilen değerin key özelliğini al ve setLevel fonksiyonu ile güncelle
        const selectedLevelKey = data.options.find(option => option.value === data.value)?.key;
        setLevel(selectedLevelKey);
        navigate('/content', { replace: true });
    };

    // stateOptions içindeki value'ları alarak yeni bir dizi oluştur
    const dropdownOptions = stateOptions.map(option => ({
        key: option.key,
        text: option.value,
        value: option.value,
    }));

    return (
        <div className='flex items-center'>
            <Dropdown
                className='h-[20px]'
                placeholder='life'
                selection
                options={dropdownOptions}
                onChange={handleDropdownChange}
            />
            <div className='flex align-center items-center'>
                {/* <p className='text-white m-2' >True: {trueCount}</p>
                <p className='text-white m-2' >False: {falseCount}</p> */}
                <p className='text-white ml-4 text-lg font-bold italic' >Points : {userPoints} </p>
            </div>

            <Menu.Item>
                {/* <Image avatar spaced="right" src="./images/Default-avatar.jpg"></Image> */}
                <Dropdown className='ml-5 text-lg font-extrabold' pointing="top right" text={kullaniciAdi}>
                    <Dropdown.Menu>
                        {/* <Dropdown.Item as={Link} to='/profile' text="Profile" icon="user" /> */}
                        <Dropdown.Item as={Link} to='/leaderboard' text="Leaderboard" icon="list ol" />
                        <Dropdown.Item onClick={handleSignOut} as={Link} to='/' text="Sign Out" icon="sign out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    );
}
