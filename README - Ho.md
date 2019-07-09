# README - Ho

> ##  SideBar

* vuetify - Navigation drawers 사용

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

* SideBar와 Main 화면과의 비율 - xs1:xs11
* mini:true
  * 사이드바 토글 적용