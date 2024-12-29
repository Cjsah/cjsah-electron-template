import { reactive } from 'vue';
import { addResizeEvent } from '@renderer/event';

export const WindowSize = reactive({
  width: window.innerWidth,
  height: window.innerHeight
});

addResizeEvent('main-config', () => {
  WindowSize.width = window.innerWidth;
  WindowSize.height = window.innerHeight;
});
