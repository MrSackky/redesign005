<template>
<v-container>
    <div class="d-flex align-center justify-center pa-4 mx-auto">
        <Logo/>
    </div>
      <v-card class="mx-auto" max-width="1200" color="#81C784">
        <v-list-item three-line>
          <v-list-item-content>
          <div class="d-flex align-center justify-center pa-4 mx-auto">
           <h1>ติดต่อเรา</h1>
          </div>
              <v-card class="mx-auto" max-width="1200">
        <v-list-item three-line>
          <v-list-item-content>
  <v-form v-model="valid">
    <v-container>
        <v-row cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="ชื่อ"
            required
          ></v-text-field>
        </v-row>

        <v-row cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="20"
            label="นามสกุล"
            required
          ></v-text-field>
        </v-row>

        <v-row cols="12" md="4">
          <v-text-field
            v-model="numbercardid"
            :rules="numbercardidRules"
            :counter="13"
            label="หมายเลขบัตรประชาชน 13 หลัก"
            required
          ></v-text-field>
        </v-row>

        <v-row cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-row>

        <v-row cols="12" md="4">
          <v-text-field
            v-model="numberphone"
            :rules="numberphoneRules"
            :counter="10"
            label="หมายเลขโทรศัพท์"
            required
          ></v-text-field>
        </v-row>

        <v-row cols="12" md="100">
          <v-text-field
            v-model="material"
            :rules="materialRules"
            :counter="1000"
            label="รายละเอียด"
            required
          ></v-text-field>
        </v-row>
                      <div class="text-center mt-3">
                        <v-btn rounded color="#81C784" dark @click="main">ส่งข้อความ</v-btn>
                      </div>
    </v-container>
  </v-form>
        </v-list-item-content>
      </v-list-item>
    </v-card>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'กรุณาระบุชื่อ',
      v => v.length <= 20 || 'กรุณาระบุชื่อไม่เกิน 20 ตัวอักษร'
    ],
    numbercardid: '',
    numbercardidRules: [
      v => !!v || 'กรุณาระบุหมายเลขบัตรประชาชน 13 หลัก',
      v => v.length <= 13 || 'กรุณาระบุหมายเลขบัตรประชาชน 13 หลัก'
    ],
    email: '',
    emailRules: [
      v => !!v || 'กรุณาระบุอีเมล',
      v => /.+@.+/.test(v) || 'อีเมลไม่ถูกต้อง'
    ],
    numberphone: '',
    numberphoneRules: [
      v => !!v || 'กรุณาระบุเบอร์โทรศัพท์',
      v => v.length <= 10 || 'กรุณาระบุเบอร์โทรศัพท์ไม่เกิน 10 หลัก'
    ],
    material: '',
    materialRules: [
      v => !!v || 'กรุณาระบุเรื่องที่ต้องการแจ้ง',
      v => v.length <= 250 || 'เนื้อหาต้องไม่เกิน 1000 ตัวอักษร'
    ]
  })
}
</script>
