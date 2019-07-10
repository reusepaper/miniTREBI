import Api from "@/services/Api";

const BASE_URL = "https://lab.ssafy.com/api/v4";
//주호형토큰 : JhrVysFYyLEMemc7jNZw
//만섭 토큰 : 3c6c61JdzKhVTxdNonYa
export default {
  getRepos(userName) {
    return Api(BASE_URL).get(
      `/users/${userName}/projects?private_token=JhrVysFYyLEMemc7jNZw`
    );
  },
  getCommits(fullName) {
    let d = new Date();
    d.setMonth(d.getMonth() - 1);

    return Api(BASE_URL).get(
      `/projects/${fullName}/repository/commits?private_token=JhrVysFYyLEMemc7jNZw`
    );
  }
};
