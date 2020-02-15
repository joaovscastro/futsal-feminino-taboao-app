import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// import { Container } from './styles';
import Home from '../Home';

function Main({ profile }) {
  const complete = !profile.user_login === profile.name;
  return <>{complete ? <Text>1</Text> : <Home />}</>;
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Main);
