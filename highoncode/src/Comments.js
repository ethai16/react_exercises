import React from 'react';
// import PropTypes from 'prop-types';

class Comments extends React.Component {

    comments = [
        {
        content: 'This is the content for one',
        likes: 3,
        comments: 5
        },
        {
        content: 'This is the content for two',
        likes: 13,
        comments: 15 
        }
    ]

    render() {
        const comment = this.comments.map((comment)=>{
            return <div>
                        {comment.content}
                        <br/>
                        {comment.likes}{' '}{comment.comments}
                    </div>
        })
        return (
            <div>
                {comment}
            </div>
        );
    }
}


// Comments.propTypes = {
    
// };

export default Comments
