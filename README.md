# webmobile-sub2

## 목차

[TOC]



## 환경 설정

### 1. Vue CLI 설치 및 프로젝트 생성

> Vue CLI 란?
>
> Vue 프로젝트를 손쉽게 만들 수 있게 도와주는 커맨드 라인 도구



##### Vue CLI 설치

* `Vue-cli` 명령어는 Vue Cli 2 버전이고, `@vue/cli`는 vue cli 3 버전이다.
* 만약 vue cli 2 버전이 설치되어 있는 환경에서는 충돌되지 않도록 삭제 후 설치를 진행하도록 한다.



1. `Node.js` 설치

   * [공식홈페이지](https://nodejs.org/ko/) 에서 `LTS` 버전을 설치한다.

2. `yarn` 설치

   ```bash
   npm install -g yarn
   ```

3. `Vue CLI` 설치

   ```bash
   npm install -g @vue/cli
   # or
   yarn global add @vue.cli
   ```



##### 프로젝트 시작하기

* `vue create 프로젝트명` 명령어로 프로젝트를 생성



##### 개발 서버 구동하기

* `npm run serve` 명령어로 프로젝트를 생성



### 2. Vue Router

> [Vue Router 홈페이지 Link](https://router.vuejs.org/kr/installation.html)



##### Vue Router란?

* Vue.js의 공식 라우터.

* Vue.js를 사용한 싱글 페이지 앱을 쉽게 만들 수 있도록 Vue.js의 코어와 긴밀히 통합.
* 장고로 따지자면 urls.py의 역할을 하는 부분이라고 생각된다.



##### Vue Router 설치

* `vue add router` 명령어로 설치가 된다.



### 3. Vuex

> [Vuex 홈페이지 Link](https://vuex.vuejs.org/kr/)

##### Vuux란?

* Vue.js 애플리케이션에 대한 **상태 관리 패턴 + 라이브러리**. 애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며, 예측 가능한 방식으로 상태를 변경할 수 있다.

![vuex](https://vuex.vuejs.org/vuex.png)



##### Vuex설치

* `Vue add vuex` 명령어로 설치



### 3. Vuetify

>[Vuetify 홈페이지 Link](https://vuetifyjs.com/ko/)

##### Vuetify 란?

* Vue 생태계에서 가장 활동적이며 다양한, 완벽한 기능을 갖춘 개발 프레임 워크이다. 쉽게 말해 **vue에서 사용할 수 있는 용이한 UI toolkit**이라고 할 수 있다.
* css에서 사용할 수 있는 부트스트랩과 비슷하다고 생각한다.



##### Vuetify 설치

* `vue add vuetify` 를 통해 설치

* 설치 패키지가 진행되며

  ```bash
  $ ? Choose a preset: (Use arrow keys)
  $ > Default (recommended)
  $   Prototype (rapid development)
  $   Configure (advanced)
  ```

  다음과 같은 선택지가 주어졌을 때 사용자의 취향에 따라 선택해주면 된다. 여기서는 default 값을 이용하기로 했다.





##### Vuetify  사용

* 사용을 용이하게 하기 위해 `main.js`에 import를 해준다.

```js
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

두번째 줄과 네번째 줄을 자리에 각각 위와 아래에 무엇이 들어갔는지 확인하며 잘 넣어준다.<br>2번째 줄은 `import Vue from 'vue'` 아랫줄에, 4번째 즐은 `new Vue({...})` 윗줄에 넣어준다.





## 프로젝트 진행

### 0. 명세 사항

1. 사진첨부 기능 구현
   - writerportfoli에서 사진 첨부 기능 활성화 및 섬네일로 표시되도록 기능을 추가하여야 합니다.
   - unsplash link, imgur 를 활용하여 이미지 배너 이미지를 랜덤(unsplash link) 혹은 본인의 이미지 (imgur)로 선택가능하도록 구현합니다.
2. Gitlab Repository 그래프 구현
   - 웹사이트 git lab 그래프 가시적으로 확인할 수 있도록 구현합니다.
   - 모바일 사이즈에서는 그래프가 비노출 되어야 합니다.
   - Repository 를 클릭시 해당 Repository 페이지로 이동합니다.
   - 본인과 팀원의 Gitlap 계정을 연동하여 여러작업자의 Gitlab 상태를 확인 할 수 있도록 구현합니다.
3. 로그인 기능 구현
   - 페이스북 로그인 기능을 추가 합니다.
   - 단 로그인은 auth를 활용하여 api 로그인 동작만을 확인합니다.
4. 회원가입 기능 구현
   - 회원가입은 사용자의 임의의 메일과 패스워드를 등록할 수 있도록 합니다.
   - 로그인 페이지를 페이지 전환이 아닌 modal pop-up 으로 만들어야 합니다.
5. 날씨 정보 제공
   - 날씨 정보를 제공하는 API를 찾아서 Footer에 연결합니다.
6. 페이지 웹 로그 세팅
   - 페이지 뷰에 대한 로그를 firebase를 통해 확인가능 합니다.
   - 페이지 뷰에 대한 로그는 firebase 프로젝트에서 셋팅하여 확인 할 수 있도록 합니다.
7. 한/영 자동 번역 기능 구현
   - `Translation API`  를 활용하여 한/영 자동번역 기능을 구현합니다.
   - 한영전환 버튼을 만들어 해당 기능의 사용 유무를 선택 할 수 있습니다.
8. 이미지 업로더 컴포터넌트 구현
   - Imgur API 를 사용하여 이미지 업로드 컴포넌트를 구현합니다.
   - 이미지 업로더 컴포넌트의 기능은 해당 사이트의 이미지 관련 기능에 전반적으로 사용됩니다.
9. 웹 UI/UX 변경
   - Vuetify 를 활용하여 페이지 레이아웃을 재설정 합니다.
   - 단, 아래 항목은 포함되어야 합니다.
     - footer에는 해당 프로젝트의 제작 일자와 Git 링크
     - header, main, footer 의 레이아웃
     - header 영역에는 블로그의 제목



### 1. 사진첨부 기능 구현_임연지

* `ImgUpLoad.vue` : 글쓰거나 내 정보의 사진을 수정할 때 사용하기 위해 컴포넌트로 생성

```vue
<template>
  <div>
    <div class="filebox" v-if="!image">
      <label for="uploadFile">파일 선택</label>
      <input type="file" @change="onFileChange" id="uploadFile" />
    </div>
    <div v-else>
      <img :src="image" />
    </div>
  </div>
</template>
```

* 등록된 이미지가 없을때만 파일 선택 버튼을 보이도록 설정

```js
  data() {
    return {
      image: ""
    };
  },
  methods: {
    removeImage() {
      this.image = "";
    },
    onFileChange(e) {
      // file 세팅
      let files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) {
        return;
      }
      const apiUrl = "https://api.imgur.com/3/image";
      const apiKey = "5139c8830e24c39";

      let data = new FormData();
      let content = {
        method: "POST",
        headers: {
          Authorization: "Client-ID " + apiKey,
          Accept: "application/json"
        },
        body: data,
        mimeType: "multipart/form-data"
      };

      data.append("image", files[0]);

      fetch(apiUrl, content)
        .then(response => response.json())
        .then(success => {
          this.image = success.data.link;
          console.log(this.image);
          this.$emit("upLoadImg", this.image);
        })
        .catch();
    }
  }
```

* data
  * 이미지가 등록되면 이미지를 저장할 경로가 data()의 image에 저장된다.

* methods
  * `removeImage()` : 이미지 삭제를 위한 method
  * `onFileChange(e)` : 이미지 파일을 삽입하기 위한 method, Imgur API를 사용

- const apiKey : 이 앱의 고유 Key



### 2. Gitlab Graph_한만섭

* [github](https://github.com/chromatixau/gitlab-network-graph)을 참고해서 따라했음.

* 위 github 프로젝트를 실행해서 만든 index.html 을 프로젝트에 직접 넣어서 사용했는데, 동기화를 해주는 것이 아니라 한번 생성한 그래프를 넣어주는 방식으로 사용했음.

* bash에서 아래 명령어 작성 

```bash
../gitlab-network-graph/scripts/network.sh
```



- git clone을 하고나서 생기는 프로젝트에서 아래의 파일을 webmobile-sub2프로젝트에 넣어줌.

![1563150076745](./img/gitlab01.png)

- 깃랩 그래프 컴포넌트 제작

  ```html
  <div
        class="network-graph"
        data-url=".data/data.json"
        data-commit-url="https///lab.ssafy.com/leeiopd/webmobile-sub2"
      ></div>
    </div>
  ```

![1563150199534](./img/gitlab02.png)





### 3. 로그인 기능 구현_한단비



#### firebase login

##### 1. vue와 firebase 바인딩

[github](<https://github.com/vuejs/vuefire/tree/v1>)

1. 사용할 것은 v1. 사용할 firebase 버전을 5.8로 올린다.

   `index.html`

   ```html
     <!-- Firebase -->
     <script src="https://gstatic.com/firebasejs/5.8.0/firebase.js"></script>
   ```

   ```html
   <!-- VueFire -->
   <script src="https://unpkg.com/vuefire/dist/vuefire.js"></script>
   ```

   ```html
     <!-- firebaseui-web -->
       <script src="https://cdn.firebase.com/libs/firebaseui/4.0.0/firebaseui.js"></script>
       <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/4.0.0/firebaseui.css" />
   ```

   `index.html`

```html
       <script>
         // Initialize Firebase
         // TODO: Replace with your project's customized code snippet
         const config = {
           apiKey: "API_KEY",
           authDomain: "webmobile-sub2-510fa.firebaseapp.com",
           databaseURL: "https://webmobile-sub2.firebaseio.com",
           projectId: "webmobile-sub2-510fa",
         };
         firebase.initializeApp(config);
         const db = firebase.database()
         const auth = firebase.auth()
         const ui = new firebaseui.auth.AuthUI(auth)
       </script>
```

위 두가지를 head 위에 넣는다.





2. 위에 들어갈 내용들은 firebase 프로젝트를 하나 만들고 필요한 부분을 넣어준다.

   ![1562634414663](./img/rain-firebaseProject.png)

3. `SignIn.vue`

   ```html
   <template>
     <div id="firebaseui-auth-container"></div>
   </template>
   ```

   ```js
   <script>
   export default {
     data() {
       return {
         // currentUser를 당장 사용하지는 않지만 이후에 사용할 예정으로 넣어두었다.
         currentUser: {
           uid: "",
           email: "",
           username: ""
         }
       };
     },
     methods: {
       initUI: function() {
         // template에 존재하는 div에 ui.start 명령어를 사용하면 firebaseui가 알아서 그려준다.
         ui.start("#firebaseui-auth-container", {
           // 현재 사용하는 옵션은 이메일 로그인만 사용한다.
           signInoptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
           callbacks: {
             // 로그인이 성공하면,
             signInSuccessWithAuthResult: (authResult, redirectUrl) => {
               // 로그인 정보를 각각의 data에 저장한다.
               this.currentUser.uid = authResult.user.uid;
               this.currentUser.email = authResult.user.email;
               this.currentUser.username = authResult.user.displayName;
               return false;
             }
           }
         });
         
       }
       
     },
     mounted: function() {
       // 현재 로그인한 회원의 정보를 알 수 있는 함수이다. 존재하면 딕셔너리가, 아니면 null값이 나온다.
       auth.onAuthStateChanged((user) =>{
           if (user) {
               this.currentUser.uid = user.uid
               this.currentUser.email = user.email
               this.currentUser.username = user.displayName
           }
           //현재 유저가 존재하지 않으면 로그인창을 보여준다.
           this.initUI()
       })
     }
   };
   </script>
   ```







##### 2. nav bar에 로그인/로그아웃 버튼 만들기

`WMHeader.vue`

```html
<template>
<div class="hide-overflow" style="position: relative;">
    ...
        <!-- 로그인 다이얼로그 활성화 -->
    	<!-- isLogin 변수를 만들어 로그인이 되어있는지를 확인한다. 
				true라면 로그아웃버튼 및 로그아웃 함수를 보여준다. -->
        <v-btn flat color="white" v-if="isLogin" @click="logout">Logout</v-btn>
        <v-btn flat color="white" v-else @click.stop="login_btn = true">Login</v-btn>
          <v-dialog v-model="login_btn" max-width="290">
            <v-card>
              ...

```

`isLogin`변수를 사용하여 true일때에는 logout버튼을, 반대의 경우에는 login 버튼을 나타나게 한다.

```js
<script>
import SignIn from "./SignIn";
export default {
  components: {
    SignIn
  },
  name: "WMHeader",
  data: () => ({
    ...
    isLogin: false
  }),
  methods:{
    showLoginDialog:function(){

    },
    logout: function() {
      this.currentUser = {
          uid: '',
          email: '',
          displayName: ''
      }
      // 로그아웃을 위한 함수는 아래 한줄이면 충분하다.
      auth.signOut()
    }
  },
  mounted: function(){
    // mounted 함수를 통해 현재 로그인이 되어있는지 아닌지 파악한다.
    auth.onAuthStateChanged(user => {
      if (user) this.isLogin=true;
      else this.isLogin=false;
    });
  }
};
</script>

```

`isLogin` 변수를 기본 false로 둔 후, mounted에서 현재 로그인 유저의 정보가 존재할 경우 true로, 아닐 경우 false로 수정한다.





![1562748176924](./img/rain-loginPage.png)

![1562748229409](./img/rain-login.png)





#### facebook login

1. [facebook for developers](<https://developers.facebook.com/>) 페이지에서 새로운 어플리케이션을 만들고 facebook 로그인 설정을 맞춰준다.

   ![1562811473395](./img/rain-facebookLogin.png)

2. firebase authentication의 로그인 방법에서 facebook을 열고 1번의 설정에서 확인할 수 있는 앱 ID와 비밀번호를 등록한다.

   ![1562811617070](./img/rain-facebookLogin2.png)

   아래에 있는 OAuth 리디렉션 주소를 1번의 유효한 OAuth 리디렉션 URI로 등록해준다.

3. `SignIn.vue`

   ```js
     methods: {
       initUI: function() {
         ui.start("#firebaseui-auth-container", {
           signInoptions: [
             firebase.auth.EmailAuthProvider.PROVIDER_ID,
              
               
              // 페이스북 로그인을 위한 provider이다. 
             {
               provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
               // facebook에서 제공받을 정보들이다. 여기서는 기본 프로필과 이메일 정보를 받는다.
               scopes: [
                 'public_profile',
                 'email',
               ],
               customParameters: {
                 // Forces password re-entry.
                 auth_type: 'reauthenticate'
            }
             },
        ],
   ```

   firebase 로그인 `signInoptions`에 제공하는 provider를 facebook으로 추가하고, 받아올 scopes로 email과 프로필을 가져온다.

   ![1562811827288](./img/rain-loginPage2.png)

   ![1562811934013](./img/rain-facebookLoginPage.png)

   다음과 같이 로그인을 할 수 있다.







#### google 로그인

1. `SignIn.vue`

   ```js
     methods: {
       initUI: function() {
         ui.start("#firebaseui-auth-container", {
           signInoptions: [
             firebase.auth.EmailAuthProvider.PROVIDER_ID,
               
             // 구글 로그인을 위한 provider. 제공 방법 및 클라이언트 아이디를 작성하면된다.
             {
               provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
               authMethod: 'https://accounts.google.com',
               clientId: 'xxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
             },
   ```

2. firebase authentication에서 로그인 방법에 google로그인 열기

   ![1562813075283](./img/rain-googleLogin.png)

   여기에서 나온 웹 클라이언트 ID를 1번의 clientId에 넣기







#### sidebar - check isLogin 

`WMsidebar.vue`

```html
          <v-list-tile-content>
              <!-- user_name을 id로 주어 innerText로 변경한다. -->
            <v-list-tile-title><span id="user_name"></span>님 환영합니다!</v-list-tile-title>
            <!-- isLogin 변수를 사용. 로그인시만 글쓰기 버튼이 렌더링되게 만든다. -->
            <v-list-tile-title v-if="isLogin" @click="$router.push('create')" id="create_post_button"><button id="createButton">글쓰기!</button></v-list-tile-title>
          </v-list-tile-content>

```

```js
mounted: function() {
    const userName = document.querySelector('#user_name')
    const createPost = document.querySelector('#create_post')
    auth.onAuthStateChanged(user => {
      if (user) {
        userName.innerText = user.displayName
        this.isLogin = true;

      } else{
        userName.innerText = 'guest'
        this.isLogin = false
      }
    });
  }

```

```css
#createButton{
  border: 1px solid pink;
  padding: 3px;
}
```

- 현재 사용자의 이름을 보여주기 위해 id 태그로 span 태그를 선택. querySelector로 잡아서 innerText로 수정할 수 있게 만들었다.
- 현재 로그인 된 사용자이면 글쓰기 버튼을 보여주고(v-if) 아닌경우에는 랜더링 되지 못하게 만들었다.
- 버튼 클릭시 이동이 잘 구현되지 않아, `v-list-tile-title` 자체에 구현했다.

왼쪽 : 로그인 된 상태. 오른쪽 로그인 안된 상태

![1562909131605](./img/rain-sidebar1.png)![1562909164095](./img/rain-sidebar2.png)



### 4. 사용자 회원가입시(첫 로그인 시) 기본 정보 저장_한단비

1. 함수 생성

   `FirebaseService.js`

   ```js
   const USERS = 'Users'
   ...
   
   export default {
    ...
     getUsers(){
       const usersList = firestore.collection(USERS)
       return usersList
       .get()
       .then((docSnapshots) => {
         return docSnapshots.docs.map((doc) => {
           let data = doc.data()
           return data
         })
       })
     },
     createUser(uid, nickname, profileImg) {
       return firestore.collection(USERS).add({
         uid,
         nickname,
         profileImg,
       })
     },
   }
   
   ```

   - user 정보에 들어갈 uid, 닉네임, 프로필사진을 기본으로 넣는다.

2. `SignIn.vue`

   ```js
   import FirebaseService from "@/services/FirebaseService";
   ...
     methods: {
         ...
       // 비동기. 순서대로 처리하기위해 async 사용.
       async getUsers() {
         // firebase에 저장된 정보를 allUsers에 저장.
         this.allUsers = await FirebaseService.getUsers();
         // 저장된 allUsers를 돌며, 현재 로그인 정보를 체크.
         // this.currentUser.uid 부분은 initUI의 콜백에 존재한다.
         for (let i=0; i<this.allUsers.length; i++){
           // 현재 로그인 유저의 uid와 가입된 user의 uid가 같은것이 있다면 isSignedup 변수를 true로 둔다.
           if(this.currentUser.uid == this.allUsers[i].uid){
             this.isSignedup = await true;
             break;
           }
         }
         // 만약 회원가입 유저(처음 로그인한 유저)라면 firebase에 uid와 username(닉네임), 기본 프로필 이미지를 '' 로 저장한다.
         if(this.isSignedup == false){
           await FirebaseService.createUser(
             this.currentUser.uid,
             this.currentUser.username,
             '',
           );
         }
         await window.location.reload();
       },
   ```

   

   ```js
     methods: {
       initUI: function() {
         ui.start("#firebaseui-auth-container", {
           signInoptions: [
               ...
           callbacks: {
             signInSuccessWithAuthResult: (authResult, redirectUrl) => {
               this.currentUser.uid = authResult.user.uid;
               this.currentUser.email = authResult.user.email;
               this.currentUser.username = authResult.user.displayName;
               // 상단에서 만든 getUsers()를 실행시킨다.
               this.getUsers();
               
               return false;
             }
           }
         });
   ```

   

### 5. 날씨 API 구현_한만섭&이주호

- vuetify

  Footer는 [vuetify 공식 사이트](https://vuetifyjs.com/en/components/footer)에서 사용.

- fontawesome

  github Icon은 [fontawesome](https://fontawesome.com/icons?d=gallery&q=github)에서 사용.

  - fontawesome CDN

    ```javascript
    script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
    ```

- navigator

아래와 같이 위도 경도를 요청할 수 있음.

보안 문제 때문에 **https**와 같은 곳에서 사용가능.

```javascript
navigator.geolocation.getCurrentPosition(position => {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
});
```

- openweatherMap

  [공식사이트](https://openweathermap.org/api)에서 회원가입하고나서 APIKEY발급

  - 요청 주소

    lat, lon, APPKEY 필요. 위에서 얻은 위도 경도를 입력해주면 날씨 정보 받을 수 있음.

    ```javascript
    http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&APPID=${APPKEY}
    ```

- response Data

  fetch를 사용해서 데이터를 요청했으며 **then**을 사용해서 데이터를 처리함.

  온도는 절대온도이기 때문에 -273.15 해야함.  

  ```js
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

  

- animation svg icon

  - [amchart](https://www.amcharts.com/free-animated-svg-weather-icons/) 에서 제공하는 svg파일로 애니메이션 날씨 아이콘을 구성했음.

  ![1563149764141](./img/weathericon.png)



##### Weather 지역 이름 출력 _ Google Geocoding

![google_geocoding](./img/google_geocoding.PNG)

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





### 6. 페이지 웹 로그 셋팅_이주호

> Page log view - Firebase Function 기능을 사용하여 function log 로 page log 작성

1. Firebase 초기화

   ```bash
   firebase init
   ```

2. ![firebase_function1](./img/firebase_function1.PNG)

   - Fireabse Function 초기화

3. ![firebase_function2](./img/firebase_function2.PNG)

   - Functnion Setup

4. ![firebase_function3](./img/firebase_function3.PNG)

   - functions 폴더 및 초기화 완료

5. Function 작성

   - Function 은 functions 폴더 안의 index.js 에 작성한다.

6. Function deploy

   - 배포 작업을 통해 function을 배포

   ![firebase_function4](./img/firebase_function4.PNG)

   - 배포된 function

   ![firebase_function5](./img/firebase_function5.PNG)

   - 배포된 function의 각각의 url 접속 시 log 기록이 작성 됨

   ![firebase_function6](./img/firebase_function6.PNG)

7. Function 동작

   - 웹 페이지가 랜더링 or 페이지 로드 버튼을 클릭 시 function url로 요청을 보내어 function이 동작하도록 설정

   ![firebase_function7](./img/firebase_function7.PNG)





##### Firebase Function 요청 시 발생하는 CORS Error 해결

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

     

### 7. 한/영 자동번역 기능_유동관

##### Google translation function

- java script CDN 입력

  ```html
  <script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'ko', includedLanguages: 'en,ja,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  ```

  

- 자신이 번역하조가 하는 언어를 자유롭게 조절 가능

  ```html
  <v-toolbar-items><div id="google_translate_element"></div></v-toolbar-items>
  ```


* 원하는 위치에 추가



### 8. 이미지 업로더_임연지

* `ImgUpLoad.vue` : 글쓰거나 내 정보의 사진을 수정할 때 사용하기 위해 컴포넌트로 생성

```vue
<template>
  <div>
    <div class="filebox" v-if="!image">
      <label for="uploadFile">파일 선택</label>
      <input type="file" @change="onFileChange" id="uploadFile" />
    </div>
    <div v-else>
      <img :src="image" />
    </div>
  </div>
</template>
```

* 등록된 이미지가 없을때만 파일 선택 버튼을 보이도록 설정

```js
  data() {
    return {
      image: ""
    };
  },
  methods: {
    removeImage() {
      this.image = "";
    },
    onFileChange(e) {
      // file 세팅
      let files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) {
        return;
      }
      const apiUrl = "https://api.imgur.com/3/image";
      const apiKey = "5139c8830e24c39";

      let data = new FormData();
      let content = {
        method: "POST",
        headers: {
          Authorization: "Client-ID " + apiKey,
          Accept: "application/json"
        },
        body: data,
        mimeType: "multipart/form-data"
      };

      data.append("image", files[0]);

      fetch(apiUrl, content)
        .then(response => response.json())
        .then(success => {
          this.image = success.data.link;
          console.log(this.image);
          this.$emit("upLoadImg", this.image);
        })
        .catch();
    }
  }
```

* `data`
  * 이미지가 등록되면 이미지를 저장할 경로가 `data()`의 `image`에 저장된다.

* `methods`
  * `removeImage()` : 이미지 삭제를 위한 `method`
  * `onFileChange(e)` : 이미지 파일을 삽입하기 위한 `method`, `Imgur API`를 사용

- `const apiKey` : 이 앱의 고유 `Key`





### 9. UX/UI 변경_트레비

##### 프로필 사진 변경

`EditProfileModal.vue`

```js
  methods: {
    ...
    saveData() {
      this.currentUser.updateProfile({
        photoURL: this.image
      })
      this.$emit("close");
    }
  }
```

currentUser라는 data를 지정한 후, updateProfile을 하여 이미지url 지정.

```js
  mounted() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.writer = user.displayName;
        this.currentUser = user;
        this.image = user.photoURL;
      }
    });
  },
```

`this.image = user.photoURL;` 를 사용하여 user에 photoURL이 존재하면 this.image에 저장. 









##### 이미지 배너 랜덤이미지

`HJ.vue`

```html
<template>
  <!-- <v-jumbotron :gradient="gradient" src dark> -->
  <v-jumbotron v-bind:style="{ 'background-image': 'url(' + image + ')'  }">
    <v-container fill-height>
      <v-layout align-center>

```

```js
  data: () => ({
    ...
    image: "https://source.unsplash.com/random/1600x900",
    currentUser: null,
    isLogin: false
  }),
      ...
  methods: {
    random: function(){
      let random_id = Math.floor(Math.random() * 1000) + 1;
      this.image = `https://picsum.photos/id/${random_id}/1000/400`;
      console.log(this.image)
    },
    userphoto: function(){
      this.image = this.currentUser.photoURL;
    }
  },
  mounted: function() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  },
```







##### 로딩페이지 구현

`components/LoadingPage.vue`

[로딩 페이지 예제](<https://codepen.io/IBNELARABY1/pen/LOQyjy>) 사용

```html
<template>
  <div class="parent">
    <div class="main">
      <div class="wings"></div>
      <div class="wings"></div>
      <span class="hatch"></span>
      <div class="back">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
```

아래를 css와 js로 채운다.



`router.js`

```js
,
    {
      path: "/loading",
      name: "loading",
      component: Loading
    }
```

loading 추가



`view/Loading.vue`

```html
<template>
  <div>
    <LoadingPage></LoadingPage>
  </div>
</template>
```

```js
<script>
import LoadingPage from "../components/LoadingPage";
export default {
  components: {
    LoadingPage
  },
  mounted: function() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.$store.commit("setUser", user);
        this.$store.commit("setProfileImage", user.photoURL);
        history.go(-1);
      }
    });
  },
};
</script>

```

auth 로그인 체크를 Loading 페이지에서 하게 만든다.



`SignIn.vue`

```js
        credentialHelper: [firebaseui.auth.CredentialHelper.NONE],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            
            window.location.assign("/loading");
            return false;
          },
```

로그인시 페이지를 로딩으로 옮겨버린다.





##### ContactUs - Nodemailer

1. ```bash
   npm install --save express body-parser express-handlebars nodemailer
   npm install -g nodemon
   ```

   명령어를 bash에 입력해주세요 .

   

2. `app.js` 파일 생성 후 코드 입력

   ```js
   const express= require('express');
   const bodyParser = require('body-parser');
   const exphbs = require('express-handlebars');
   const nodemailer = require('nodemailer');
   
   const app = express();
   
   // view engine setup
   app.engine('handlebars',exphbs());
   app.set('view engine','handlebars');
   
   //body parser middleware
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());
   
   app.get('/',(req,res)=>{
       res.send('hello');
   });
   
   app.listen(3000,()=> console.log('Server started...'));
   ```

3. > node app.js 를 bash에 입력하여 결과 확인하기

   ![mailer1](./img/mailer1.PNG)

4. new folder - public 폴더 생성 후 css 파일 추가

5. ```js
   const express= require('express');
   const bodyParser = require('body-parser');
   const exphbs = require('express-handlebars');
   const path = require('path');
   const nodemailer = require('nodemailer');
   
   const app = express();
   
   // view engine setup
   app.engine('handlebars',exphbs());
   app.set('view engine','handlebars');
   
   //static folder
   app.use('/public',express.static(path.join(__dirname,'public')));
   
   //body parser middleware
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());
   
   app.get('/',(req,res)=>{
       res.send('hello');
   });
   
   app.listen(3000,()=> console.log('Server started...'));
   ```

6. > nodemon

   입력하여 서버 실행시키고, views 폴더 생성 및 contact.handlebars 파일 생성

7. ```js
   const express= require('express');
   const bodyParser = require('body-parser');
   const exphbs = require('express-handlebars');
   const path = require('path');
   const nodemailer = require('nodemailer');
   
   const app = express();
   
   // view engine setup
   app.engine('handlebars',exphbs());
   app.set('view engine','handlebars');
   
   //static folder
   app.use('/public',express.static(path.join(__dirname,'public')));
   
   //body parser middleware
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());
   
   app.get('/', (req,res)=>{
       // res.send('hello');
       // 여기 수정
       res.render('contact');
   });
   
   app.listen(3000,()=> console.log('Server started...'));
   ```

8. 실행이 잘 된다면 다행이지만 나같은 경우는 경로 에러가 생겼다. 경로대로 파일구조를 만들어 돌렸더니 실행되었음..

   ![mailer2](./img/mailer2.PNG)

9. ORIGINAL HTML/CSS FORM DOWNLOAD:
   [http://www.traversymedia.com/download...](https://www.youtube.com/redirect?q=http%3A%2F%2Fwww.traversymedia.com%2Fdownloads%2Fresponsiveform.zip&event=video_description&v=nF9g1825mwk&redir_token=Hfz51M6YtVi0febKHl5y3n5U7OF8MTU2Mjk5MzQwNUAxNTYyOTA3MDA1)

   여기에서 폼을 대충 다운로드 받아보자.

10. app.js 수정

    ```js
    const express= require('express');
    const bodyParser = require('body-parser');
    const exphbs = require('express-handlebars');
    const path = require('path');
    const nodemailer = require('nodemailer');
    
    const app = express();
    
    // view engine setup
    app.engine('handlebars',exphbs());
    app.set('view engine','handlebars');
    
    //static folder
    app.use('/public',express.static(path.join(__dirname,'public')));
    
    //body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.get('/', (req,res)=>{
        // res.send('hello');
        // 여기 수정
        res.render('contact');
    });
    
    app.post('/send',(req,res)=>{
        const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name : ${req.body.name}</li>
            <li>Company : ${req.body.company}</li>
            <li>Email : ${req.body.email}</li>
            <li>Phone : ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;
    
        test(output);
    
    });
    
    async function test(output){
        // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service:'naver',
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'dkyou7@naver.com', // generated ethereal user
          pass: '[보내는 메일의 실제 비밀번호]' // generated ethereal password
        }
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"메일링 테스트으" <dkyou7@naver.com>', // sender address
        to: "[보내고자하는 메일주소]", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   alert("보내기 완료!");
    //   return res.render('contact',{msg:"이메일 보내기 완료!"});
    }
    test().catch(console.error);
    
    app.listen(3000,()=> console.log('Server started...'));
    ```

11. main.js 수정

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Acme Web Design</title>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
      <link rel="stylesheet" href="public/css/style.css">
    </head>
    <body>
      <div class="container">
        <h1 class="brand"><span>Acme</span> Web Design</h1>
        <div class="wrapper animated bounceInLeft">
          <div class="company-info">
            <h3>Acme Web Design</h3>
            <ul>
              <li><i class="fa fa-road"></i> 44 Something st</li>
              <li><i class="fa fa-phone"></i> (555) 555-5555</li>
              <li><i class="fa fa-envelope"></i> test@acme.test</li>
            </ul>
          </div>
          <div class="contact">
            <h3>Email Us</h3>
            {{msg}}
            <form method="POST" action="send">
              <p>
                <label>Name</label>
                <input type="text" name="name">
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company">
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email">
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone">
              </p>
              <p class="full">
                <label>Message</label>
                <textarea name="message" rows="5"></textarea>
              </p>
              <p class="full">
                <button type='submit'>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </body>
    </html>
    ```

12. css 수정

    ```css
    *{
      box-sizing: border-box;
    }
    
    body{
      background:#92bde7;
      color:#485e74;
      line-height:1.6;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding:1em;
    }
    
    .container{
      max-width:1170px;
      margin-left:auto;
      margin-right:auto;
      padding:1em;
    }
    
    ul{
      list-style: none;
      padding:0;
    }
    
    .brand{
      text-align: center;
    }
    
    .brand span{
      color:#fff;
    }
    
    .wrapper{
      box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
    }
    
    .wrapper > *{
      padding: 1em;
    }
    
    .company-info{
      background:#c9e6ff;
    }
    
    .company-info h3, .company-info ul{
      text-align: center;
      margin:0 0 1rem 0;
    }
    
    .contact{
      background:#f9feff;
    }
    
    /* FORM STYLES */
    .contact form{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:20px;
    }
    
    .contact form label{
      display:block;
    }
    
    .contact form p{
      margin:0;
    }
    
    .contact form .full{
      grid-column: 1 / 3;
    }
    
    .contact form button, .contact form input, .contact form textarea{
      width:100%;
      padding:1em;
      border:1px solid #c9e6ff;
    }
    
    .contact form button{
      background:#c9e6ff;
      border:0;
      text-transform: uppercase;
    }
    
    .contact form button:hover,.contact form button:focus{
      background:#92bde7;
      color:#fff;
      outline:0;
      transition: background-color 2s ease-out;
    }
    
    /* LARGE SCREENS */
    @media(min-width:700px){
      .wrapper{
        display: grid;
        grid-template-columns: 1fr 2fr;
      }
    
      .wrapper > *{
        padding:2em;
      }
    
      .company-info h3, .company-info ul, .brand{
        text-align: left;
      }
    }
    ```

13. 마지막으로 네이버 smtp 설정을 해제해주면 메일이 보내진다

    - https://proal.tistory.com/76 여기 참고



##### 페이지 레이아웃 재설정

- jumbotron 

  - ```vue
    <template>
      <v-jumbotron :gradient="gradient" src dark>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Team TREBI</h3>
              <span class="subheading">2반 연지 주호 단비 만섭</span>
              <v-menu :close-on-content-click="false" :nudge-width="200" v-model="menu" offset-x>
                <span slot="activator" class="subheading">동관</span>
                <v-card>
                  <v-list>
                    <v-list-tile avatar>
                      <v-list-tile-avatar>
                        <img src="/static/doc-images/john.jpg" alt="YDK" />
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>유동관</v-list-tile-title>
                        <v-list-tile-sub-title>팀 트레비 2조</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                          <v-icon>favorite</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-switch v-model="message" color="purple"></v-switch>
                      </v-list-tile-action>
                      <v-list-tile-title>Enable messages</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-switch v-model="hints" color="purple"></v-switch>
                      </v-list-tile-action>
                      <v-list-tile-title>Enable hints</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="menu = false">Cancel</v-btn>
                    <v-btn color="primary" flat @click="menu = false">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">{{content_msg}}</div>
              <v-btn large color="primary" class="mx-0">See more</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </template>
    
    <script>
    export default {
      data: () => ({
        gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)",
        fav: true,
        menu: false,
        message: false,
        hints: true,
        content_msg:
          "orem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
      })
    };
    </script>
    ```

- card

  - ```vue
    <template>
      <v-layout row wrap>
        <v-flex px-2 py-2 xs12 sm6 md3>
          <v-card class="card-img-1">
            <v-img :src="require('../assets/goubook1.png')" aspect-ratio="1" position="center bottom"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">유동관</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>
    
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 px-2 py-2 md3>
          <v-card class="card-img-1">
            <v-img :src="require('../assets/pikachu.jpg')" aspect-ratio="1" position="center bottom"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">한단비</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>
    
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 px-2 py-2 md3>
          <v-card class="card-img-1">
            <v-img :src="require('../assets/hesee.jpg')" aspect-ratio="1" position="center bottom"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">임연지</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>
    
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 py-2 px-2>
          <v-card class="card-img-1">
            <v-img :src="require('../assets/togepi.jpg')" aspect-ratio="1" position="center bottom"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">이주호</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>
    
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 py-2 px-2>
          <v-card class="card-img-1">
            <v-img :src="require('../assets/jammanbo.jpg')" aspect-ratio="1" position="center bottom"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">한만섭</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>
    
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
    <script>
    export default {
      data() {
        return {
          card_text:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
        };
      }
    };
    </script>
    <style>
    </style>
    
    ```

- contact us

  - > npm install validator

  - ```vue
    <template>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Who?"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        <v-text-field
          v-model="email"
          :error-messages="titleErrors"
          label="title"
          required
          @input="$v.title.$touch()"
          @blur="$v.title.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="content"
          required
          @input="$v.content.$touch()"
          @blur="$v.content.$touch()"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
    
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </template>
    
    <script>
      import { validationMixin } from 'vuelidate'
      import { required, maxLength, email } from 'vuelidate/lib/validators'
    
      export default {
        mixins: [validationMixin],
    
        validations: {
          name: { required, maxLength: maxLength(10) },
          email: { required, email },
          select: { required },
          checkbox: {
            checked (val) {
              return val
            }
          }
        },
    
        data: () => ({
          name: '',
          email: '',
          select: null,
          title:'',
          content:'',
          items: [
            '유동관',
            '임연지',
            '이주호',
            '한단비',
            '한만섭'
          ],
          checkbox: false
        }),
    
        computed: {
          checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
          },
          selectErrors () {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
          },
          nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
          },
          emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
          },
          titleErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
          }
        },
    
        methods: {
          submit () {
            this.$v.$touch()
          },
          clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
          }
        }
      }
    </script>
    ```

    





##### 이미지 업로더 컴포넌트로 분리

- 쉽게 보기 위해 **Style**을 제거한 이미지 업로더 컴포넌트

```vue
//ImgUpload.vue

<template>
  <div>
    <div class="filebox" v-if="!image">
      <label for="uploadFile">파일 선택</label>
      <input type="file" @change="onFileChange" id="uploadFile" />
    </div>
    <div v-else>
      <img :src="image" />
    </div>
  </div>
</template>
```

위 코드를 보면 **파일선택**을 눌러서 **type="file"**인 input의 value가 바뀌게 되면 `@change`를 호출하게 됨.

```vue
//ImgUpload.vue

<script>
export default {
  name: "ImgUpLoad",
  data() {
    return {
      image: ""
    };
  },
  methods: {
    removeImage() {
      this.image = "";
    },
    onFileChange(e) {
      // file 세팅
      let files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) {
        return;
      }
      const apiUrl = "https://api.imgur.com/3/image";
      const apiKey = "5139c8830e24c39";

      let data = new FormData();
      let content = {
        method: "POST",
        headers: {
          Authorization: "Client-ID " + apiKey,
          Accept: "application/json"
        },
        body: data,
        mimeType: "multipart/form-data"
      };

      data.append("image", files[0]);

      fetch(apiUrl, content)
        .then(response => response.json())
        .then(success => {
          this.image = success.data.link;
          console.log(this.image);
          this.$emit("upLoadImg", this.image);
        })
        .catch();
    }
  }
};
</script>
```

위 코드의 대부분은 이미지 업로드를 하고 데이터를 받아오는 동작을하고 있음.

아래쪽을 보면 `this.$emit("upLoadImg", this.image);`라는 코드가 있는데 이것이 상위 컴포넌트에게 이벤트 이름은 **UpLoadImg**이고 argument로는 **this.image**를 갖고 있는 이벤트를 보내게 됨.

```vue
//CreatePostPage.vue

<template>
  (...중략...)
  <ImgUpLoad v-on:upLoadImg="upLoadImg"></ImgUpLoad>
  (...중략...)
</template>
```

위에는 이미지 업로더 컴포넌트를 갖고 있는 게시물 업로드하는 컴포넌트임. 하위 컴포넌트에서 **upLoadImg**라는 이벤트가 발생하면 **UpLoadImg**가 발생할 수 있게 연결해놓는 것임.

하위 컴포넌트가 상위컴포넌트에게 이벤트 발생 알림 -> 상위 컴포넌트는 하위컴포넌트의 이벤트와 연결된 함수 호출.

상위 컴포넌트의 **upLoadImg**함수

- argument로 들어온 image를 자신의 data에 있는 this.image에 넣어줌.

```vue
upLoadImg(image) { console.log("업로드 : ", image); this.image = image; }
```



##### Create Post

* CSS

`WMCreatePost.vue` : W3.CSS를 적용한 부분

```vue
<p>
  <label class="w3-text-blue">
    <b>TITLE</b>
  </label>
  <input class="w3-input w3-border" name="last" type="text" v-model="title" />
</p>
```

`index.html` : W3.CSS를 사용하기 위한 CDN 삽입

```css
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
```

* Markdown

`Markdown-it` 패키지 사용

**WMCreatePost.vue**

```vue
import MarkdownItVue from "../../markdownsrc/markdown-it-vue";
```

`markdownsrc` 안에 있는 vue 파일에 markdown-it 패키지의 여러 기능들을 적용시키는 js파일들과 npm을 import하여 사용

![yeon-1563158428084](img/yeon-1563158428084.png)

```js
data() {
    return {
      title: "",
      postWriter: "",
      content: "# 이곳에 게시글을 작성해보세요! 8-)",
      image: "",
      ...
	  options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          target: "_blank",
          rel: "noopener"
        }
      }
    };
}
```

게시글을 작성하면 `title`, `postWriter`, `content`, `image` 부분에 firebase로 보낼 데이터가 들어가서 return

options 부분은 markdown-it 패키지 사용하기 위한 값을 적용하기 위해 사용

```js
  methods: {
    submit() {
      if (this.title == "") {
        alert("제목을 입력하세요");
      } else if (this.content == "") {
        alert("내용을 입력하세요");
      } else {
        FirebaseService.postPost(
          this.title,
          this.postWriter,
          this.content,
          this.image
        );
        alert("업로드 되었습니다");
        this.title = "";
        this.postWriter = "";
        this.image = "";
        this.content = "";
      }
    }
	...
```

제목이나 내용이 없으면 등록되지않도록 script method추가

