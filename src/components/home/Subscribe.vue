<template>
  <v-container id="subscribe" tag="section">
    <base-card color="rgba(203, 170, 92, 0.51)" class="pa-4">
      <v-container grid-list-xl pa-0>
        <v-layout wrap>
          <v-flex xs12 md10 offset-md1>
            <base-subheading>Contact</base-subheading>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon class="elevation-4" dark>
                    mdi-email-outline
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>EMAIL</v-list-tile-title>
                <v-list-tile-sub-title>
                  yoitsu05(at)gmail.com ※ (at) は @ に置き換えて下さい．
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon class="elevation-4" dark>
                    mdi-map-marker
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>ADDRESS</v-list-tile-title>
                <v-list-tile-sub-title>
                  神奈川県川崎市
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon class="elevation-4" dark>
                    mdi-phone
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>PHONE</v-list-tile-title>
                <v-list-tile-sub-title>
                  080-3556-XXXX
                </v-list-tile-sub-title>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </base-card>
  </v-container>
</template>
