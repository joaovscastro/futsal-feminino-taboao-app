import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';


export function* updateProfile({ payload }) {

  try {
    const {
      id,
      first_name,
      last_name,
      email,
      password,
      address_1,
      address_2,
      city,
      postcode,
      state, avatarsource, avatarupload, tipo } = payload.data;

    /* const responseAvatar = yield call(imgurApi.post, 'upload',
      {
        "image": avatarupload,
        "type": tipo
      }
    ) */

    const newAvatarResponse = responseAvatar.data
    const avatarUrl = newAvatarResponse.data.link

    const profile = Object.assign(
      {
        last_name: avatarUrl,
        email,
        password,
        billing: {
          last_name,
          first_name,
          address_1,
          address_2,
          city,
          postcode,
          state,
        }
      },
    );

    const response = yield call(api.put, `wc/v3/customers/${id}`, profile);

    Alert.alert(
      'Sucesso!',
      'Perfil atualizado com sucesso',

      { cancelable: false },
    );

    yield put(updateProfileSuccess(response.data));






  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);