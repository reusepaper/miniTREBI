# README - Ho

> ## SideBar

- vuetify - Navigation drawers 사용

```html
<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    stateless
    fixed
    style="margin-top: 50px;"
  >
      <!-- stateless : 모든 자동 상태 기능(크기변화, 모바일, 라우트)을 제거하고 서랍의 상태를 수동으로 제어 -->
      <!-- fixed : 요소의 위치를 고정 -->
      <!-- style="margin-top : 50px" : navbar와 겹침 해결 -->
      
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
```

```javascript
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>
```

- SideBar와 Main 화면과의 비율 - xs1:xs11
- mini:true
  - 사이드바 토글 적용



> ## Firebase Hosting

1. Firebase Cli 설치

   ```bash
   npm install -g firebase-tools
   ```

2. Firebase 로그인

   ```bash
   firebase login
   ```

3. Firebase 초기화

   ```bash
   firebase init
   ```

   1. ![firebase_hsosting1](img/firebase_hsosting1.PNG)

      - Y 로 Firebase init을 진행

   2. ![firebase_hsosting2](img/firebase_hsosting2.PNG)

      - 사용할 서비스를 선택
        - Firestore
          - Firestore 관련 서비스를 사용하면서 선택하지 않을 시 firestore.rules 관련 오류 발생
          - Firebase 에서도 Firestore를 시작 해 주어야 한다.
        - Hosting
        - Storage
          - Storage를 사용하면서 선택을 하지 않을 시 storage.rules 관련 오류 발생
          - Firebase 에서도 Storage 를 시작 해 주어야 한다.

   3. ![firebase_hsosting3](img/firebase_hsosting3.PNG)

      ![firebase_hsosting4](img/firebase_hsosting4.PNG)

      ![firebase_hsosting5](img/firebase_hsosting5.PNG)

      - ### Hosting Setup의 `Public directory`에 주의 하자

        - build 된 app의 `index.html` 이 존재하는 `dist` 폴더로 지정한다.

   4. ![firebase_hsosting6](img/firebase_hsosting6.PNG)

      - `npm run build` 
        - build 명령어

   5. ![firebase_hsosting7](img/firebase_hsosting7.PNG)

      - `firebase deploy`
        - 배포 명령어



> ## Firebase Function

### Page log view - Firebase Function 기능을 사용하여 function log 로 page log 작성

1. Firebase 초기화

   ```bash
   firebase init
   ```

2. ![firebase_function1](img/firebase_function1.PNG)

   - Fireabse Function 초기화

3. ![firebase_function2](img/firebase_function2.PNG)

   - Functnion Setup

4. ![firebase_function3](img/firebase_function3.PNG)

   - functions 폴더 및 초기화 완료

5. Function 작성

   - Function 은 functions 폴더 안의 index.js 에 작성한다.

6. Function deploy

   - 배포 작업을 통해 function을 배포

   ![firebase_function4](img/firebase_function4.PNG)

   - 배포된 function

   ![firebase_function5](img/firebase_function5.PNG)

   - 배포된 function의 각각의 url 접속 시 log 기록이 작성 됨

   ![firebase_function6](img/firebase_function6.PNG)

7. Function 동작

   - 웹 페이지가 랜더링 or 페이지 로드 버튼을 클릭 시 function url로 요청을 보내어 function이 동작하도록 설정

   ![firebase_function7](img/firebase_function7.PNG)





> ## Firebase Function 요청 시 발생하는 CORS Error 해결

- axios 요청을 보낼시 CORS Error 발생

  ```
  XMLHttpRequest cannot load <~~~~ URL ~~~~> 
  No 'Access-Control-Allow-Origin' header is present on the requested resource.
  Origin '<~~~~ URL ~~~~>' is therefore not allowed access.
  ```

  - 웹 어플리케이션 보안 모델에서 중요한 개념 중 하나인 `동일 출처 정책 (Same-Origin Policy)`에 의하여 `자바스크립트(XMLHttpRequest)` 로 다른 웹페이지에 접근할때는 같은 출처 (same origin) 의 페이지에서만 접근이 가능하다.

  - 같은 출처라는 것은 `프로토콜`, `호스트`, `포트` 가 같다는 것을 의미한다. 즉 웹페이지의 스크립트는 그 페이지와 같은 서버에 있는 주소로만 `ajax` 요청을 할 수 있다.

  - *<u>해결 방법</u>

    1. 웹 브라우저 실행시 외부 요청을 허용하는 옵션을 사용
       - 크롬같은 웹브라우저들은 실행시 커맨드라인 옵션을 통해서 도메인 요청가능 여부를 확인하는 동작을 무시하게 할 수 있다.
       - 크롬의 경우: --disable-web-security 옵션을 추가하여 크롬실행
    2. 외부 요청을 가능하게 해주는 플러그인 설치
       - 서버에 받은 요청의 응답에 특정 `header(Access-Control-Allow-Origin: *)`만 추가하면 웹브라우저가 요청이 가능한 사이트로 인색해서 요청이 가능하다.

    ------

    - 1, 2 번 방식은 웹 브라우저 사용자가 사용하는 브라우저를 직접 셋팅하는 방식으로 개발자라면 활용해 볼 수 있겠지만, 일반 사용자가 사용해야 하는 웹페이질면 적용이 불가능하다고 보면 된다.

    3. `JSONP` 방식으로 요청
       - 웹 브라우저에 css나 js 같은 리소스 파일들은 동시출처 정책에 영향을 받지 않고 로딩이 가능하다. 이런 점을 응용해서 외부 서버에서 js 파일을 읽듯이 요청한 결과를 json으로 바꿔주는 방법이다.
       - 단점은 리소스 파일을 GET 메소드로 읽어오기 때문에 GET 방식의 API만 요청이 가능하다.

- 서버에서 `CORS(Cross-Origin Resource Sharing)` 요청 핸들링 하기

  - 서버로 날라온 preflight 요청을 처리하여 웹 브라우저에서 실제 요청을 날릴 수 있도록 해준다.
  - 모든 외부 도메인에서 모든 요청을 허용할 경우 처리
    1. preflight 요청을 받기 위해 OPTIONS 메서드의 요청을 받아서 컨트롤 해야 한다.
    2. 모든 요청의 응답에 아래 header를 추가한다.
       - Access-Control-Allow-Origin: *
       - Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
       - Access-Control-Allow-Max-Age : 3600
       - Access-Control-Allow-Header: Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization
    3. 외부 도메인 요청을 선별적으로 허용할 경우
       - Request header (클라이언트의 요청 헤더)
         - Origin : 요청을 보내는 페이지의 출처(도메인)
         - Access-Control-request-Method: 실제 요청하려는 메소드
         - Access-Control-Request-Header: 실제 요청에 포함되어 있는 헤더 이름
       - Response headers(서버에서 응답 헤더)
         - Access-Control-Allow-Origin : 요청을 허용하는 출처. '*' 이면 모든곳에 공개되어 있음을 의미
         - Access-Control-Allow-Credentials: 클라이언트 요청이 쿠키를 통해서 자격 증명을 해야 하는 경우에 true. true를 응답으로 받은 클라이언트는 실제 요청시 서버에서 정의된 규격의 인증값이 담긴 쿠키를 같이 보내야 한다.
         - Access-Control-Expose-Header: 클라이언트 요청에 포함되어도 되는 사용자의 정의 헤더
         - Access-Control-Max-Age: 클라이언트에서 preflight 의 요청 결과를 저장할 기간을 지정. 클라이언트에서 preflight 요청의 결과를 저장하고 있을 시간. 해당 시간동안은 preflight요청을 다시 하지 않게 됨
         - Access-Control-Allow-Methods: 요청을 허용하는 메소드. 기본값은 GET, POST. 이 헤더가 없으면 GET과 POST 요청만 가능.
         - Access-Control-Allow-Headers: 요청을 허용하는 헤더

------

- Firebase 에서 구현

  1. functions 폴더에서 cors 모듈 설치

     ```bash
     (function 폴더에서)
     npm install cors
     ```

  2. index.js 수정

     ```javascript
     // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
     const functions = require("firebase-functions");
     
     // cosrt import
     const cors = require("cors")({
       origin: true
     });
     
     
     // The Firebase Admin SDK to access the Firebase Realtime Database.
     const admin = require("firebase-admin");
     admin.initializeApp(functions.config().firebase);
     
     exports.home = functions.https.onRequest((request, response) => {
       // import한 corst를 사용하여 요청
         cors(request, response, () => {
         response.status(200).send("home");
       });
     });
     
     ```

  3. firebase.json 수정

     ```python
     # firebase.json
     
     {
     "hosting": {
         "public": "dist",
         "ignore": [
           "firebase.json",
           "**/.*",
           "**/node_modules/**"
         ],
         
         # header에 Access-Control-Allow-Origi(요청을 허용하는 출처. '*' 이면 모든곳에 공개되어 있음을 의미) 설정을 추가해 준다.
         "headers": [
           {
             "source": "**",
             "headers": [
               {
                 "key": "Access-Control-Allow-Origin",
                 "value": "*"
               }
             ]
           }
         ]
       }
     }
     
     ```

     





> ## SPA routing 404 on refresh issue 해결

- 일반적으로 SPA 에서 새로고침 시 404 error 발생
- vue의 경우 router에서 자동으로 설정되어 발생하지 않지만 firebase로 hosting 한 경우 설정을 해 주어야 404error이 발생하지 않음
- firebase.json 수정

```python
# firebase.json
{
"hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    
    # rewrites (새로고침) 에 대한 설정을 추가해 준다.
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
  }
}
```





> ## Https 보안 문제 해결

* https에서 http로 응답을 받을 때 https 보안문제 발생
* 응답을 https 로 받아야 한다.





> ## Weather 지역 이름 출력 _ Google Geocoding

![google_geocoding](img/google_geocoding.PNG)

```javascript
// WMFooter.vue
<script>
    //(-- 중략 -- )
methods: {
    getPosition: function() {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const log = position.coords.longitude;
        this.getWeather(lat, log);
          
          // 지역 정보를 가져오는 getLocation 함수를 추가
        this.getLocation(lat, log);
      });
    },
```

```javascript
// getLocation
// getPosition 함수에서 받아온 lat, log 를 google Geocoding API 에 요청하여 지역 정보를 json으로 받아옴

getLocation: function(lat, log) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${log}&key=AIzaSyC1x8tesUWMdo3VoAH3zpj56H2qw47PF4k`
      )
        .then(response => response.json())
        .then(
          json =>
            (this.place = json.results[0].address_components[3].short_name)
        );
    }
```





> ## Console Error 해결

#### 1. v-jumbotron warning해결

```javascript
[Vuetify] 'v-jumbotron' is deprecated, use 'v-responsive' instead
```

`v-jumbotron` 을 `v-responsive`로 변경



#### 2. `network.bundle.js` not define error

* gitlab graph 구현에 사용된 `newtwork.bundle.js` 의 함수에서  not define 발생
* 정의되지 않은 함수를 수정하여 해결

