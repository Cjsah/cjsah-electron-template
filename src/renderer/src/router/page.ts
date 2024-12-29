import { DefineComponent } from 'vue';
import TestPage from '@renderer/views/TestPage.vue';
import NotFound from '@renderer/views/NotFound.vue';
import { Search, Warning } from '@element-plus/icons-vue';
import AboutPage from '@renderer/views/AboutPage.vue';

declare type Component = DefineComponent<object, object, any>;

export class Page {
  private static PAGES: Page[] = [];

  readonly path: string;
  readonly name: string;
  readonly component: Component;
  readonly icon?: Component;
  readonly position: 'top' | 'bottom';

  constructor(path: string, name: string, component: Component, icon?: Component, position?: 'top' | 'bottom') {
    this.path = path;
    this.name = name;
    this.component = component;
    this.icon = icon;
    this.position = position ?? 'top';
    Page.PAGES.push(this);
  }

  public static getPages(all: boolean = false): readonly Page[] {
    return all ? Page.PAGES : Page.PAGES.filter(it => it.icon);
  }
}

export const TEST: Page = new Page('/test', '测试页面', TestPage, Search);
export const ABOUT: Page = new Page('/about', '关于', AboutPage, Warning, 'bottom');
export const NOT_FOUND: Page = new Page('/:pathMath(.*)*', '404 Not Found', NotFound);
