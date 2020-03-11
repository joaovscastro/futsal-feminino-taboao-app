import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
  profilenav: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.usuario;
        break;
      }
      case '@user/UPDATE_PROFILE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.usuario;
        draft.loading = false;
        draft.profilenav = true;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.loading = false;
        draft.profilenav = false;
        break;
      }
      default:
    }
  });
}
