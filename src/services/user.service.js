import http from "../http-common";
import authHeader from './auth-header';


class UserService {
  getPublicContent() {
    return http.get('test/all');
  }

  getUserBoard() {
    return http.get('test/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return http.get('test/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return http.get('test/admin', { headers: authHeader() });
  }
}
const userService = new UserService();
export default userService;