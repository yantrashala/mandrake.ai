import { createSelector } from 'reselect';

/**
 * Direct selector to the apidemoPage state domain
 */
const selectApidemoPageDomain = () => (state) => state.get('apidemo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ApidemoPage
 */

const makeSelectApidemoPage = () => createSelector(
  selectApidemoPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectApidemoPage;
export {
  selectApidemoPageDomain,
};
