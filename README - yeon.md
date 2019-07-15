# Create Post

### CSS

`WMCreatePost.vue` : W3.CSS를 적용한 부분

``` vue
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

### Markdown

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



# Image Upload

`ImgUpLoad.vue` : 글쓰거나 내 정보의 사진을 수정할 때 사용하기 위해 컴포넌트로 생성

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

등록된 이미지가 없을때만 파일 선택 버튼을 보이도록 설정

``` js
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

#### data

이미지가 등록되면 이미지를 저장할 경로가 data()의 image에 저장된다.

#### methods

`removeImage()` : 이미지 삭제를 위한 method

`onFileChange(e)` : 이미지 파일을 삽입하기 위한 method, Imgur API를 사용

* const apiKey : 이 앱의 고유 Key



# Post View

`store.js`

```js
export default new Vuex.Store({
  state: {
    title: '',
    postWriter: '',
    content: '',
    image: ''
  },
  ...
})
```

Post를 불러오기 위해 필요한 것들을 Vuex를 이용해 저장

`WMPostView.vue`

```vue
<template>
  <div style="margin: auto;">
    <p>
      <input class="w3-input w3-border" name="last" type="text" :value="this.$store.state.title" readonly/>
    </p>
    <p>
      작성자 : <input class="w3-input w3-border" style="display:inline; width:90%;" name="last" type="text" :value="this.$store.state.postWriter" readonly/>
    </p>
    <div v-if="this.$store.state.image === ''">
    </div>
    <div v-else>
      <img :src="this.$store.state.image"/>
    </div>
    <div>
      <markdown-it-vue :content="content" :options="options"></markdown-it-vue>
    </div>
  </div>
</template>
```

vuex에 저장한 변수들을 사용하기 위해 `this.$store.state.선언한변수명` 를 이용해 가져온다.

```js
export default {
  ...
  data() {
    return {
      content: this.$store.state.content,
      ...
    }
  }
}
```

script부분에서도 마찬가지로 content 내용을 markdown에 적용시켜서 보여주기 위해 vuex로부터 값을 받아온다.



# Post 

post list에 띄워주기 위한 post component

```vue
<template>
<v-card hover @click="viewPage()">
  <v-img :src="image" height="200px"></v-img>
  <v-card-title primary-title>
    <div>
      <div>{{ title }}</div>
    </div>
  </v-card-title>
</v-card>
</template>
```

vuetify의 v-card를 이용하여 hover 속성을 넣고 클릭하면 post view page로 넘어가도록 설정

post의 list를 보여주는 화면에서는 title과 썸네일 이미지만 출력

```js
export default {
  name: "WMPost",
  props: {
    title: {
      type: String
    },
    postWriter: {
      type: String
    },
    content: {
      type: String
    },
    image: {
      type: String
    }
  },
  ...
  data() {
    return {};
  },
  methods: {
    viewPage() {
      this.$store.state.title = this.title,
      this.$store.state.postWriter = this.postWriter,
      this.$store.state.content = this.content,
      this.$store.state.image = this.image
      this.$router.push("/postview")
    }
  }
};
```

`WMPostlist.vue` 에서 선택한 포스트의 정보를 props로 받아온다.

각 card를 클릭하면 수행되는 viewPage() method는 클릭하는순간 vuex에 현재 눌린 포스트의 정보를 저장하고, 라우터에서 `WMPostView.vue` 컴포넌트를 적용시켜주도록 한다.



# Post List

```js
export default {
  name: "WMPostlist",
  props: {
    limits: { type: Number, default: 4 },
    loadMore: { type: Boolean, default: false }
  },
  data() {
    return {
      posts: []
    };
  },
  components: {
    WMPost
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.posts = await FirebaseService.getPosts();
    },
    loadMorePosts() {
      this.limits += 4;
    }
  }
};
```

limits를 4로 설정해서 처음에 4개의 포스트만 보이도록 설정

컴포넌트로 WMPost를 사용하여 Post들을 보여준다.

mounted상태일 때 getPosts()를 불러와서 post들의 정보를 가져온다. (`async await` 사용-비동기)



```vue
<template>
  <v-layout mt-5 wrap>
    <v-flex v-for="i in posts.length > limits ? limits : posts.length" xs12 sm6 md3>
      <WMPost
        class="ma-3"
        :title="posts[i-1].title"
        :postWriter="posts[i-1].postWriter"
        :content="posts[i-1].content"
        :image="posts[i-1].image"
      ></WMPost>
    </v-flex>
    <v-flex xs12 text-xs-center round my-5 v-if="loadMore">
      <v-btn v-on:click="loadMorePosts">더 보기</v-btn>
    </v-flex>
  </v-layout>
</template>
```

WMPost에서 props로 받기위해 title, postWriter, content, image를 해당하는 포스트의 정보로 바인딩해준다.