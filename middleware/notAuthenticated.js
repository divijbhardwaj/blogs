export default function ({ store, redirect, from, route }) {
  store.dispatch('auth/getToken');
  if (store.getters['auth/token']) {
    return redirect(from.path === route.path? '/' : from);
  }
}