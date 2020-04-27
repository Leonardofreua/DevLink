export function logInRequest(email, password) {
  return {
    type: '@auth/LOG_IN_REQUEST',
    payload: { email, password },
  };
}

export function logInSuccess(token, dev) {
  return {
    type: '@auth/LOG_IN_SUCCESS',
    payload: { token, dev },
  };
}

export function signUpRequest(name, email, password, techs) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, techs },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function forgotPasswordRequest(email) {
  return {
    type: '@auth/FORGOT_PASSWORD_REQUEST',
    payload: { email },
  };
}
