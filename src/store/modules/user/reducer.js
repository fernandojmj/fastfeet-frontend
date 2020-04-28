import produce from "immer";

const INITTIAL_STATE = {
  profile: null
};

export default function user(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case "@user/UPDATE_PROFILE_SUCCESS":
      return produce(state, draft => {
        draft.profile = action.payload.profile;
      });

    case "@user/UPDATE_PROFILE_FAILURE":
      return produce(state, draft => {});

    case "@auth/SIGN_OUT":
      return produce(state, draft => {
        draft.profile = null;
      });

    default:
      return state;
  }
}
