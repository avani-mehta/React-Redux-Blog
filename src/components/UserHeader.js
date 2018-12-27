//This component is for calling action creator 'FETCH_USER'
import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component{

  componentDidMount() {
    this.props.fetchUser(this.props.userId);//Calling action creator
  }

  render() {
  //Instead of this statement below, we can write as follows:
  //const user = this.props.users.find((user) => user.id === this.props.userId);
  const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => { //ownProps is a reference to props that is gonna go into the component above
  return { user: state.users.find(user => user.id === ownProps.userId) };
}
export default connect(mapStateToProps, { fetchUser })(UserHeader);
