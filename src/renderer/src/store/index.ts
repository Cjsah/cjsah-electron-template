// export const useUserStore = defineStore(
//   'account',
//   () => {
//     const token = ref('');
//     const expireTime = ref(0);
//     const userId = ref(0);
//     const userName = ref('');
//     const permission = ref(0);
//     const requireChangePwd = ref(false);
//
//     function setUser(form: LoginRes) {
//       token.value = form.token;
//       expireTime.value = form.expire_time;
//       userId.value = form.uid;
//       userName.value = form.name;
//       requireChangePwd.value = form.require_change_pwd;
//     }
//
//     function updateToken(form: TokenRes) {
//       token.value = form.token;
//       expireTime.value = form.expire_time;
//     }
//
//     function isLogin() {
//       return token.value.length > 0;
//     }
//
//     function pwdChanged() {
//       requireChangePwd.value = false;
//     }
//
//     function isRoot() {
//       return userId.value == 1;
//     }
//
//     function reset() {
//       token.value = '';
//       expireTime.value = 0;
//       userId.value = 0;
//       userName.value = '';
//       permission.value = 0;
//       requireChangePwd.value = false;
//     }
//
//     return {
//       token,
//       userId,
//       userName,
//       permission,
//       expireTime,
//       requireChangePwd,
//       setUser,
//       updateToken,
//       isLogin,
//       pwdChanged,
//       isRoot,
//       reset
//     };
//   },
//   {
//     persist: true
//   }
// );
