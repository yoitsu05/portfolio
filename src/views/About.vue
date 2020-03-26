<template>
  <v-container
    id="about"
    tag="section"
  >
    <v-layout row>
      <v-flex xs12>
        <base-subheading>About me</base-subheading>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
      align-center
      justify-start
    >
      <v-flex
        xs12
        md6
      >
        <v-avatar
          size="350"
        >
          <img src="@/assets/face-icon.png">
        </v-avatar>
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <h2>スキルセット</h2>
        <h4>Frontend</h4>
        <p>
          HTML,CSS,JavaScript,jQuery,Bootstrap,Vue.js,Vuex,Vuetify
        </p>
        <h4>Backend</h4>
        <p>
          Node.js, Express,
          Java, SpringFramework, MyBatis, Jersey,
          Python, flask, Keras,
          Golang
        </p>
        <h4>DevOps</h4>
        <p>
          Scrum, AWS, GCP, Docker, MySQL, PostgreSQL, Jenkins, Gradle
        </p>
        <h4>SoftSkill</h4>
        <p>
          Negotiation, Adaptability, Facilitation, Teaching, Coaching
        </p>
        <h2>職務経歴</h2>
        <p>新規事業開発（企画〜）： 1.5年</p>
        <p>仮想通貨案件（PoC〜総合テスト）： 2年</p>
        <p>金融系大規模開発案件（基本設計〜総合テスト）： 3年</p>
        <h2>資格</h2>
        <p>
          認定スクラムマスター(CSM), データベーススペシャリスト, セキュリティスペシャリスト, 統計検定2級, 応用情報技術者, 基本情報技術者
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
