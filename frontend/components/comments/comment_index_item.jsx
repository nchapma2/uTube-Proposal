import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className='comment-item'>
        <img className='comment-avatar'
          src={this.props.comment.author_avatar} />
        <div className='comment-div'>
          <div className='comment-header'>
            <Link className='user-link'
              to={`/api/users/${this.props.comment.author_id}`}>
              {this.props.comment.author}
            </Link>
            <div className='timestamp-comment'>{this.props.comment.posted}</div>
          </div>
          <div className='comment-body'>{this.props.comment.body}</div>
          <div className='comment-footer'>
            <img
              className='like-symbol' src="https://s3.amazonaws.com/ividz-dev/thumbsup.png" />
          </div>
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
