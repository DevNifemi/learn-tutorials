export default function activeId(state = null, action) {
    switch (action.type) {
      case 'SET_TUTORIAL_ID':
        return action.payload;
      default:
        return state;
    }
  }