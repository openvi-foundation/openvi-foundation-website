import OpenVue from 'openvue/config';
import { themeConfig } from './openvue-theme.js';

export default (app) => {
    app.use(OpenVue, { theme: themeConfig });
};
