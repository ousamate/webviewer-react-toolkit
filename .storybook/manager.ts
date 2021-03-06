import { addons } from '@storybook/addons';

// Google Analytics ID
// @ts-ignore
window.STORYBOOK_GA_ID = 'UA-6566170-4';

addons.setConfig({
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,

  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,

  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: true,

  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'right',

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,

  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: true,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedPanel: undefined,

  previewTabs: {
    // the order of the tabs is configured by the order here
    canvas: { title: 'Playground' },
    'storybook/docs/panel': { title: 'Info' },
  },
});
