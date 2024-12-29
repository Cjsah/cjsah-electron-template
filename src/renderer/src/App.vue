<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import Cjsah from '@renderer/assets/Cjsah.svg?component';
import { Page } from '@renderer/router/page';
import { WindowSize } from '@renderer/config';
// import Versions from '@renderer/views/components/Versions.vue';

// const ipcHandle = () => window.electron.ipcRenderer.send('ping');
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-container>
      <el-aside class="side">
        <cjsah class="icon" />
        <el-menu router class="menu">
          <el-menu-item
            v-for="(page, index) in Page.getPages()"
            :key="index"
            :index="page.path"
            class="item"
            :class="page.position">
            <el-icon class="icon" size="24"><component :is="page.icon" /></el-icon>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">header</el-header>
        <el-main class="main">
          <el-scrollbar :height="WindowSize.height - 60">
            <router-view />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
  <!--  <Versions />-->
</template>
<style lang="scss" scoped>
.side {
  background-color: aqua;
  width: 80px;
  height: 100vh;

  .icon {
    margin: 8px;
  }

  .menu {
    --el-menu-bg-color: transparent;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    height: calc(100vh - 45px);

    .item {
      width: 63px;
      margin: 8px;
      justify-content: center;
      padding: 0;
      height: 63px;
      border-radius: 12px;

      .icon {
        margin: 0;
      }

      &.is-active {
        transition: background-color var(--el-transition-duration);
        color: unset;
        background-color: var(--el-menu-hover-bg-color);
      }

      &.top {
        align-self: flex-start;
      }

      &.bottom {
        align-self: flex-end;
      }
    }
  }
}

.header {
  background-color: aquamarine;
  width: calc(100vw - 80px);
}

.main {
  background-color: cadetblue;
  --el-main-padding: 0;
}
</style>
