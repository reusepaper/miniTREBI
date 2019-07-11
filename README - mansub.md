# README - mansub

> ## Footer 

 * vuetify	

   Footer는 [vuetify 공식 사이트](<https://vuetifyjs.com/en/components/footer>)에서 사용.

* fontawesome

  github Icon은 [fontawesome](<https://fontawesome.com/icons?d=gallery&q=github>)에서 사용. 

  * fontawesome CDN

    ```javascript
    script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
    ```

* navigator

  아래와 같이 위도 경도를 요청할 수 있음.   

  보안 문제 때문에 **https**와 같은 곳에서 사용가능.

  ```javascript
  navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const log = position.coords.longitude;
          });
  ```

  

* openweatherMap 

  [공식사이트](<https://openweathermap.org/api>)에서 회원가입하고나서 APIKEY발급 

  * 요청 주소 

    lat, lon, APPKEY 필요. 위에서 얻은 위도 경도를 입력해주면 날씨 정보 받을 수 있음. 

    ```javascript
    http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&APPID=${APPKEY}
    ```

  

  * response Data

    fetch를 사용해서 데이터를 요청했으며 **then**을 사용해서 데이터를 처리함.  

    온도는 절대온도이기 때문에 -273.15 해야함.  

    

    ```
    getWeather: function(lat, log) {
          // open weather map
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&APPID=${APPKEY}`
          )
            .then(response => response.json())
            .then(json => {
              this.weather = json.weather[0].main;
              this.temp = Math.floor(json.main.temp - 273.15);
              if (json.name === "Taejŏn-gwangyŏksi") {
                this.place = "대전광역시";
              }
              /*eslint-disable*/
              console.log(this.weather);
              // console.log(this.temp, this.place, this.weather);
            });
    ```



***





> ## Gitlab Graph



[github](https://github.com/chromatixau/gitlab-network-graph)을 참고해서 따라했음.  

위 github 프로젝트를 실행해서 만든 index.html 을 프로젝트에 직접 넣어서 사용했음.  



***



> ## Gitlab API

* Repository

  gitlab Private Repository를 가져오기 위해서는 [personaltoken](<https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html>)를 발급받아서 사용해야함.  

  **${userName}** 에 **gitlab id** 를 입력하면 됨. 

  ```
  https://lab.ssafy.com/api/v4/users/${userName}/projects?private_token=프라이빗토큰
  ```

* Commits 

  **${fullName}**에 repository id를 넣어야함. 

  **Master Branch**이외에는 커밋이 한개만 불러지는 이슈가 있음. 

  ```
  https://lab.ssafy.com/api/v4/projects/${fullName}/repository/commits?private_token=
  ```

  