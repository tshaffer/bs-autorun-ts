// /** @module Model:base */

// import {
//   Reducer,
//   combineReducers
// } from 'redux';
// import { isNil } from 'lodash';
// import { BsUiModelState } from '../type';
// import {
//   BSUIMODEL_BATCH,
//   BsUiModelBaseAction,
//   BsUiModelBatchAction,
// } from './baseAction';
// import {
//   templateReducer,
//   isValidTemplateState,
// } from './template';

// // -----------------------------------------------------------------------
// // Defaults
// // -----------------------------------------------------------------------

// // none

// // -----------------------------------------------------------------------
// // Reducers
// // -----------------------------------------------------------------------

// export type BsUiReducer = Reducer<BsUiModelState>;
// const enableBatching = (
//     reduce: (state: BsUiModelState, action: BsUiModelBaseAction | BsUiModelBatchAction) => BsUiModelState,
// ): BsUiReducer => {
//   return function batchingReducer(
//     state: BsUiModelState,
//     action: BsUiModelBaseAction | BsUiModelBatchAction,
//   ): BsUiModelState {
//     switch (action.type) {
//       case BSUIMODEL_BATCH:
//         return (action as BsUiModelBatchAction).payload.reduce(batchingReducer, state);
//       default:
//         return reduce(state, action);
//     }
//   };
// };

// export const bsUiModelReducer: BsUiReducer = enableBatching(combineReducers<BsUiModelState>({
//   template: templateReducer,
// }));

// // -----------------------------------------------------------------------
// // Validators
// // -----------------------------------------------------------------------

// export const isValidBsUiModelState = (state: any): boolean => {
//   return !isNil(state)
//     && state.hasOwnProperty('template') && isValidTemplateState(state.template);
// };

// export const isValidBsUiModelStateShallow = (state: any): boolean => {
//   return !isNil(state)
//     && state.hasOwnProperty('template');
// };

/** @module Model:base */

import {
  Reducer,
  combineReducers
} from 'redux';
import { isNil } from 'lodash';
import { BsPpModelState } from '../type';
import {
  BsPpModelBaseAction,
} from './baseAction';
import { hsmReducer } from './hsm';
import { presentationDataReducer } from './presentation';
import { playbackReducer } from './playback';
import { dataFeedReducer, isValidDataFeedState } from './dataFeed';

// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export type BsUiReducer = Reducer<BsPpModelState>;

/** @internal */
/** @private */
export const enableBatching = (
  reduce: (state: BsPpModelState, action: BsPpModelBaseAction ) => BsPpModelState,
): BsUiReducer => {
  return function batchingReducer(
    // TEDTODO
    // state: BsPpModelState,
    // action: BsPpModelBaseAction,
    state: any,
    action: any,
  ): BsPpModelState {
    switch (action.type) {
      default:
        return reduce(state, action);
    }
  };
};

export const bsPpReducer = enableBatching(combineReducers<BsPpModelState>({
  hsmState: hsmReducer,
  presentationData: presentationDataReducer,
  playback: playbackReducer,
  arDataFeeds: dataFeedReducer,
}));

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

/** @internal */
/** @private */
// TEDTODO - requires further development
export function isValidBsPpModelState(state: any): boolean {
  return !isNil(state)
  && state.hasOwnProperty('arDataFeeds') && isValidDataFeedState(state.arDataFeeds);

}

/** @internal */
/** @private */
// TEDTODO - requires further development
export function isValidBsPpModelStateShallow(state: any): boolean {
  return !isNil(state);
}