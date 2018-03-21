import { createStoreDOM } from 'nelreina-web-utils';
import rootReducer from './rootReducer';

const store = createStoreDOM(rootReducer, {});

export default store;
