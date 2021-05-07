import { Module } from 'vuex';
import defaultSetting from '@/config';
import settingStateTypes from './types';
import RootStateTypes from '../../types';

const {
  title, fixedHeader, sideBarLogo, showSettings,
} = defaultSetting.default;
// create a new Store Modules.
const settingsModule: Module<settingStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    title,
    fixedHeader,
    sideBarLogo,
    showSettings,
  },
  mutations: {

  },
  actions: {},
};
export default settingsModule;
