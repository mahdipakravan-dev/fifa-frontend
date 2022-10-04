export class AuthenticationHelper {
  static instance: AuthenticationHelper;

  static get getInstance() {
    if (!AuthenticationHelper.instance)
      AuthenticationHelper.instance = new AuthenticationHelper();
    return AuthenticationHelper.instance;
  }

  afterLogin() {}

  afterRegister() {}
}
