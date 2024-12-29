import { reactive, type Ref, ref } from 'vue';
import request from '@renderer/request';
import { PageBody } from '@renderer/data/types/global';

export default class<T, A> {
  public data: Ref<T[]> = ref([]);

  public readonly pageNum = ref(1);
  public readonly pageSize = ref(20);
  public readonly total = ref(0);
  public readonly loading = ref(false);

  public changePageSize = (size: number) => {
    this.pageSize.value = size;
    this.refresh();
  };

  public changePageNum = (cur: number) => {
    this.pageNum.value = cur;
    this.refresh();
  };

  public refresh = () => {
    this.loading.value = true;
    request
      .get<PageBody<A>>(this.link(this.pageNum.value, this.pageSize.value), page => {
        this.total.value = page.total;
        this.data.value = page.pages.map(it => this.resolve(it));
        this.hooks.forEach(it => it(page));
      })
      .then(() => (this.loading.value = false));
  };

  public reset = () => {
    this.pageNum.value = 1;
    this.pageSize.value = 20;
    this.total.value = 0;
    this.data.value = [];
    this.loading.value = false;
  };

  private link: (pageNum: number, pageSize: number) => string;
  private resolve: (data: A) => T;
  private hooks: ((data: PageBody<A>) => void)[] = [];

  private constructor(link: (pageNum: number, pageSize: number) => string, resolve: (data: A) => T) {
    this.link = link;
    this.resolve = resolve;
  }

  public hook = (...func: ((data: PageBody<A>) => void)[]) => {
    func.forEach(it => this.hooks.push(it));
  };

  // create //

  public static ofMap<T, A>(link: (pageNum: number, pageSize: number) => string, resolve: (data: A) => T) {
    return reactive(new this<T, A>(link, resolve));
  }

  public static of<T>(link: (pageNum: number, pageSize: number) => string) {
    return reactive(new this<T, T>(link, it => it));
  }
}
