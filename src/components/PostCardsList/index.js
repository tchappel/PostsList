import React from 'react'
import {fetchPosts} from "../../redux/actions"
import {connect} from 'react-redux'
import {Card, Avatar} from 'antd'

class PostCardsList extends React.PureComponent {

    renderList = () => {
        return this.props.posts.map(it => (
            <Card
                style={{width: 600, margin: '15px auto'}}
                key={it.id}
            >
                <Card.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                    title={it.title}
                    description={it.body}
                />
            </Card>
        ))
    }

    render() {
        if (!this.props.posts.length) return null
        return this.renderList()
    }

    componentDidMount() {
        this.props.fetchPosts()
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchPosts})(PostCardsList)

