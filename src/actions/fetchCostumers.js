import { FETCH_CUSTOMERS } from '../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { url_customers } from '../api/urls';

export const fetchCostumers = createAction(FETCH_CUSTOMERS, apiGet( url_customers ) );
