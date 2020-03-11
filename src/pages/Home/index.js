import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

function Home({ profile, navigation }) {
  function CheckProfile() {
    if (profile.name != profile.description) {
      navigation.navigate('CompleteProfile');
    } else {
      navigation.navigate('Main');
    }
  }

  useEffect(() => {
    CheckProfile();
  });

  return <View />;
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Home);
