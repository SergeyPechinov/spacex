import {TLaunch} from './api/launch';
import {TLaunchpad} from './api/launchpad';
import {TRocket} from './api/rocket';

export type TMain = {
  launches: TLaunch[],
  launchpads: TLaunchpad[],
  rockets: TRocket[]
}