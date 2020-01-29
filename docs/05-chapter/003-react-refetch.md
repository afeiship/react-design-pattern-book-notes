# react refetch

- https://github.com/heroku/react-refetch

```js
import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'

class Profile extends Component {
  render() {
    // see below
  }
}

export default connect(props => ({
  userFetch: `/users/${props.userId}`,
  likesFetch: `/users/${props.userId}/likes`
}))(Profile)


// view:
render() {
  const { userFetch, likesFetch } = this.props

  if (userFetch.pending) {
    return <LoadingAnimation/>
  } else if (userFetch.rejected) {
    return <Error error={userFetch.reason}/>
  } else if (userFetch.fulfilled) {
    return <User user={userFetch.value}/>
  }
  // similar for `likesFetch`
}
```
