import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, nome, avatarupload, avatarsource } = payload.data;

    if (avatarupload != avatarsource) {
      yield call(api.post, 'wp/v2/m_users/avatar', {
        base64: avatarupload,
      });
    }

    const response = yield call(api.put, `/wp/v2/users/${id}`, {
      name: nome,
      description: nome,
    });

    Alert.alert(
      'Sucesso!',
      'Perfil atualizado com sucesso',

      { cancelable: false }
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
