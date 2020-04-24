import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { logInSuccess, signFailure } from './actions';

export function* logIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, dev } = response.data;

    yield put(logInSuccess(token, dev));

    history.push('/home');
  } catch (err) {
    toast.error('Authentication failed, check your Email and Password');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, techs } = payload;

    yield call(api.post, 'devs', {
      name,
      email,
      password,
      techs,
    });

    history.push('/logIn');
  } catch (err) {
    toast.error('Sign up failed, check you data');

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/LOG_IN_REQUEST', logIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
