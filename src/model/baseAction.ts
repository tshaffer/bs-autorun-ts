/** @module Model:base */

import {
  Action,
  Dispatch,
  ActionCreator,
} from 'redux';
import { BsUiModelState, BsPpState, BsPpModelState } from '../type';

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const BSUIMODEL_BATCH = 'BSUIMODEL_BATCH';

/** @internal */
/** @private */
export const BSUIMODEL_REHYDRATE = 'BSUIMODEL_REHYDRATE';

/** @internal */
/** @private */
export const BSUIMODEL_RESET = 'BSUIMODEL_RESET';

/** @internal */
/** @private */
export type BsUiModelDispatch = Dispatch<any>;

/** @internal */
/** @private */
export interface BsUiModelBaseAction extends Action {
  type: string;   // override Any - must be a string
  payload: {};
  error?: boolean;
  meta?: {};
}

/** @internal */
/** @private */
export interface BsUiModelAction<T> extends BsUiModelBaseAction {
  payload: T;     // override payload with specific parameter type
}

/** @internal */
/** @private */
export type BsUiModelActionCreator<T> = ActionCreator<BsUiModelAction<T>>;

/** @internal */
/** @private */
export type BsUiModelThunkAction<T> = (
  dispatch: BsUiModelDispatch,
  getState: () => BsUiModelState,
  extraArgument: undefined,
) => T;

/** @internal */
/** @private */
export const bsUiModelBatchAction = (action: BsUiModelBaseAction[]): BsUiModelBatchAction => {
  return {type: BSUIMODEL_BATCH, payload: action};
};

/** @internal */
/** @private */
export interface BsUiModelBatchAction extends Action {
  type: string;
  payload: BsUiModelBaseAction[];
}

/** @internal */
/** @private */
export interface RehydrateBsUiModelParams {
  newBsUiModelState: BsUiModelState;
}

/** @internal */
/** @private */
export type RehydrateBsUiModelAction = BsUiModelAction<RehydrateBsUiModelParams>;
export const bsUiModelRehydrateModel = (bsUiModelState: BsUiModelState): RehydrateBsUiModelAction => {
  return {
    type: BSUIMODEL_REHYDRATE,
    payload: {
      newBsUiModelState: bsUiModelState,
    },
  };
};

/** @internal */
/** @private */
export type ResetBsUiModelAction = BsUiModelAction<null>;
export const bsUiModelResetModel = (): ResetBsUiModelAction => {
  return {
    type: BSUIMODEL_RESET,
    payload: null,
  };
};

/** @module Model:base */

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export interface BsPpModelBaseAction extends Action {
  type: string;   // override Any - must be a string
  payload: {} | null;
  error?: boolean;
  meta?: {};
}

/** @internal */
/** @private */
export interface BsPpModelAction<T> extends BsPpModelBaseAction {
  payload: T;     // override payload with specific parameter type
}

/** @internal */
/** @private */
export type BsPpModelActionCreator<T> = ActionCreator<BsPpModelAction<T>>;
export type BsPpModelThunkAction<T> = (
  dispatch: BsPpDispatch,
  getState: () => BsPpModelState,
  extraArgument: undefined,
) => T;

export interface BsPpBaseAction extends Action {
  type: string;
  payload: {} | null;
  error?: boolean;
  meta?: {};
}

export interface BsPpAction<T> extends BsPpBaseAction {
  payload: T;
}

export type BsPpDispatch = Dispatch<BsPpState>;
export type BsPpVoidThunkAction = any;
// (dispatch: BsPpDispatch, getState: () => BaApUiState, extraArgument: undefined) => void;
export type BsPpStringThunkAction = any;
// (dispatch: BsPpDispatch, getState: () => BaApUiState, extraArgument: undefined) => string;
export type BsPpVoidPromiseThunkAction = any;
// (dispatch: BsPpDispatch, getState: () => BaApUiState, extraArgument: undefined) => Promise<void>;
export type BsPpThunkAction<T> = any;
// (dispatch: BsPpDispatch, getState: () => BaApUiState, extraArgument: undefined) => BsPpAction<T>;
export type BsPpAnyPromiseThunkAction = any;
// (dispatch: BsPpDispatch, getState: () => BaApUiState, extraArgument: undefined) => Promise<any>;

export type BsPpActionCreator<T> = ActionCreator<BsPpAction<T>>;

export interface BsPpModelBatchAction extends Action {
  type: string;
  payload: BsPpBaseAction[];
}
