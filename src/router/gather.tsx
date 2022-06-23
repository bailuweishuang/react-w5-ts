import home from './home';
import services from './services';
import synergy from './synergy';
import { ServicesP } from './index';

const gatherList: Array<ServicesP> = [...home, ...services, ...synergy];
export default gatherList;
