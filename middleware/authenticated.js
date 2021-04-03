export default function ({ store, redirect }) {
  store.dispatch('auth/getToken');
  if (!store.getters['auth/token']) {
    return redirect('/login');
  }
}