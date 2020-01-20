import { Alert } from "react-native";
import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions"



export function* signIn({ payload }) {
  console.log(payload)
  try {
    const { username, password } = payload;

    const response = yield call(api.post, '/jwt-auth/v1/token', {
      username,
      password,
    });

    console.log(response)

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    console.log('definiu token')

    const responseUser = yield call(api.get, '/wp/v2/users/me');



    const usuarioData = responseUser.data;

    const responseUserProfile = yield call(api.get, `/buddypress/v1/members/${usuarioData.id}`);

    console.log("passou da api3")

    const usuario = responseUserProfile.data;
    console.log(usuario)

    yield put(signInSuccess(token, user, usuario));


  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}



export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}




export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);