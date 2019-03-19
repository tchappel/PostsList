import React from 'react'
import { fetchPostsAndUsers } from "../../redux/actions"
import {connect} from 'react-redux'
import {Card, Avatar} from 'antd'
import UserHeader from '../UserHeader'
import {PostTitle, PostBody} from './styled'

class PostCardsList extends React.PureComponent {

    renderList = () => {
        return this.props.posts.map(post => (
            <Card
                style={{width: 600, margin: '15px auto'}}
                key={post.id}
            >
                <Card.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                    title={<PostTitle>{post.title}</PostTitle>}
                    description={<PostBody>{post.body}</PostBody>}
                />
                {
                    this.props.users.find(user => user.id === post.userId) &&
                    <UserHeader user={this.props.users.find(user => user.id === post.userId)}/>
                }
            </Card>
        ))
    }

    render() {
        if (!this.props.posts.length) return null
        return this.renderList()
    }

    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostCardsList)

