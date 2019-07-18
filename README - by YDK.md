# README - by YDK

## Google translation function

### - java script CDN 입력

- ```html
  <script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'ko', includedLanguages: 'en,ja,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  ```

  - 자신이 번역하조가 하는 언어를 자유롭게 조절 가능

- ```html
  <v-toolbar-items><div id="google_translate_element"></div></v-toolbar-items>
  ```

  - 원하는 위치에 추가



## Nodemailer

1.  
   ```bash
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

   ![mailer2](img/mailer2.PNG)

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



## 페이지 레이아웃 재설정

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

    

