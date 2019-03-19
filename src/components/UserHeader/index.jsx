import React from 'react'
import {UserName, Wrapper} from './styled'

const UserHeader = ({user}) => {
    return (
        <Wrapper>
            <UserName>
                {user.name}
            </UserName>
            <span> - {user.email}</span>
        </Wrapper>
    )

}

export default UserHeader