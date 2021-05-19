<template>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <div class="d-flex align-center justify-center pa-4 mx-auto">
            <img
        class="mb-4"
        src="https://i.imgur.com/wHOwd90.png"
        alt="center"
        width="150"
        height="150"
      />
            </div>
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 black--text text--accent-3">
                          <p class="font-family: Sofia,sans-serif">เข้าสู่ระบบ</p>
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="อีเมล"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="yellow accent-4"
                          />

                          <v-text-field
                            id="password"
                            label="รหัสผ่าน"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="yellow accent-4"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="yellow accent-4" dark @click="main">เข้าสู่ระบบ</v-btn>
                        <v-btn rounded color="yellow accent-4" dark @click="main">ลืมรหัสผ่าน</v-btn>
                      </div>
                      <br/>
                    </v-col>
                    <v-col cols="12" md="4" class="yellow accent-4">
                      <v-card-text class="black--text mt-12">
                        <h1 class="text-center display-1">สมัครสมาชิก</h1>
                        <h5 class="text-center"></h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">สมัครสมาชิก</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="yellow accent-4">
                      <v-card-text class="black--text mt-12">
                        <h1 class="text-center display-1">กลับไปเข้าสู่ระบบ</h1>
                        <h5 class="text-center"></h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">เข้าสู่ระบบ</v-btn
                        >
                        <br />
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 black--text text--accent-3"
                        >
                          สร้างบัญชี
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4"></h4>
                        <v-form>
                          <v-text-field
                            label="ชื่อ"
                            name="Name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="yellow accent-4"
                          />
                          <v-text-field
                            label="อีเมล"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="yellow accent-4"
                          />
                          <v-text-field
                            id="password"
                            label="รหัสผ่าน"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="yellow accent-4"
                          />
                          <v-text-field
                            id="password"
                            label="ยืนยันรหัสผ่าน"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="yellow accent-4"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="yellow accent-4" dark>ยืนยัน</v-btn
                        >
                      </div>
                      <br />
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
}
</script>
