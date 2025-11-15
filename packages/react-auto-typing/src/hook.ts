import { useReducer, useRef, useMemo } from "react";
import { getAnimationInterval } from "./utils.js";


export type TextState = {
  text: string;
}

export type TextAction =
  | {
    type: "push";
    nextChar: string;
  }
  | {
    type: "pop"
  };


/**
 * Helps updating the reducer's state
 * @param action push or pop. If push is selected, a character has to be indicated.
 */
const textReducerCb = (state: TextState, action: TextAction) => {
  const newState = { ...state };
  if (action.type === "push") {
    newState.text += action.nextChar;
  }
  else if (action.type === "pop") {
    newState.text = newState.text.substring(0, newState.text.length - 1);
  }

  return newState;
}


export type TextAnimationParams = {
  target: string;
  duration: number;
};

export function useTextAnimation({ target, duration }: TextAnimationParams) {
  const [textState, textDispatch] = useReducer(textReducerCb, { text: "" });
  const textAnimationTimeout = useRef<NodeJS.Timeout | null>(null);

  /**
   * When the user executes this callback
   * the animation is stopped.
   */
  const textAnimationKiller = () => {
    if (textAnimationTimeout.current != null) {
      clearInterval(textAnimationTimeout.current);
      textAnimationTimeout.current = null;
    }
  }

  /**
   * When the user executes this callback
   * it first checks if there is an active
   * animation in whose case, kills the previous one.
   */
  const textAnimationPlayer = useMemo(() => {
    return (onanimationdone?: () => void) => {
      if (textAnimationTimeout.current == null) {
        const animation = getAnimationInterval({ textState, textDispatch, target, duration, onanimationdone });
        if (animation != null)
          textAnimationTimeout.current = animation;
      }
    }
  }, [target, duration]);

  return [textState, textAnimationPlayer, textAnimationKiller] as const;
}


