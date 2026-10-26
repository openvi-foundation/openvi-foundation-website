import Aura from '@openvue/themes/aura';

export const themeConfig = {
    preset: Aura,
    options: {
        darkModeSelector: '[data-theme="dark"]'
    }
};

export const components = ['button', 'card', 'chip', 'tag', 'message', 'panel'];
