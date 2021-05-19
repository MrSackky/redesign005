<template>
<v-container>
  <div class="d-flex align-center justify-center pa-4 mx-auto">
        <Logo/>
  </div>
  <v-card class="mx-auto" max-width="1200" color="#81C784">
    <v-list-item three-line>
      <v-list-item-content>
        <h1 class="d-flex align-center justify-center pa-4 mx-auto">เมนู</h1>
        <v-card class="mx-auto" max-width="1200">
          <v-list-item three-line>
            <v-list-item-content>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    ข้อมูลพื้นฐาน
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>โครงสร้าง</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>ข้อมูลผู้บริหาร</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>อำนาจหน้าที่</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>แผนยุทธศาสตร์</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>ข้อมูลติดต่อ</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>กฎหมายที่เกี่ยวข้อง</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>social network</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>Q&A</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>ข่าวประชาสัมพันธ์</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    การดำเนินงาน
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>แผนดำเนินงานประจำปี</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>เทศบัญญัติงบประมาณรายจ่ายประจำปี 2563</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>รายงานผลการดำเนินประจำปี</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>คู่มือหรือมาตรฐานการให้บริการ</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>ข้อมูลเชิงสถิติการให้บริการ</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>รายงานผลการสำรวจความพึงพอใจการให้บริการ</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>E-Service</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    แผนการใช้จ่ายงบประมาณประจำปี
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>แผนการใช้จ่ายงบประมาณประจำปี</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>เทศบัญญัติงบประมาณรายจ่ายประจำปี 2563</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>รายงานผลการใช้จ่ายงบประมาณประจำปี</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    การจัดซื้อจัดจ้างหรือการจัดหาพัสดุ
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>แผนการจัดซื้อจัดจ้างหรือแผนการจัดหาพัสดุ</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>ประกาศต่างๆเกี่ยวกับการจัดซื้อจัดจ้างหรือการจัดหาพัสดุ</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>สรุปผลการจัดซื้อจัดจ้างหรือการจัดหาพัสดุรายเดือน</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>รายงานผลการจัดซื้อจัดจ้างหรือการจัดหาพัสดุประจำปี</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    การบริหารและพัฒนาทรัพยากรบุคคล
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>นโยบายการบริหารทรัพยากรบุคคล</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>การดำเนินการตามนโยบายการบริหารทรัพยากรบุคคล</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>หลักเกณฑ์การบริหารปและพัฒนาทรัพยากรบุคคล</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>รายงานผลการบริหารและพัฒนาทรัพยากรบุคคลประจำปี</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    การจัดการเรื่องการร้องเรียนการทุจริต
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>แนวปฏิบัติการจัดการเรื่องร้องเรียนการทุจริต</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>ช่องทางแจ้งเรื่องร้องเรียนการทุจริต</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>ข้อมูลเชิงสถิติเรื่องร้องเรียนการทุจริตประจำปี</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    การเปิดโอกาสให้เกิดการมีส่วนร่วม
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>ช่องทางรับฟังความคิดเห็น</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>การเปิดโอกาสให้เกิดการมีส่วนร่วม</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    เจตจำนงสุจริตของผู้บริหาร
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>เจตจำนงสุจริตของผู้บริหาร</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>การมีส่วนร่วมของผู้บริหาร</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>การประเมินความเสี่ยงการทุจริตประจำปี</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>การดำเนินการเพื่อจัดการความเสี่ยงการทุจริต</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>การเสริมสร้างวัฒนธรรมองค์กร</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>แผนปฏิบัติการป้องกันการทุจริต</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>รายงานการกำกับติดตามการดำเนินการป้องกันการทุจริตประจำปี รอบ 6 เดือน</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>รายงานผลการดำเนินการป้องกันการทุจริตประจำปี</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    มาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>มาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>การดำเนินการตามมาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    ศูนย์ช่วยเหลือประชาชน
                  </v-btn>
                </template>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    สถานที่ท่องเที่ยวในท้องถิ่นตำบลหนองไม้งาม
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>วัดขุนเขาพินิจ</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    ผังบุคลากร
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>แผนภูมิโครงกสร้างการแบ่งส่วนราชการตามแผนอัตรากำลัง 3 ปี</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>สำนักปลัด</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>กองคลัง</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>กองสาธารณสุขและสิ่งแวดล้อม</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>กองสวัสดิการสังคม</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>กองการศึกษา</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>กองช่าง</li></a></v-col
                  >
                  <v-col
                    ><a href=""><li>หน่วยตรวจสอบ</li></a></v-col
                  >
                </v-list>
              </v-menu>
              <v-menu :offset-x="offset">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="but mb-3"
                    outlined
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    งานเลือกตั้ง
                  </v-btn>
                </template>
                <v-list>
                  <v-col
                    ><a href=""><li>คณะกรรมการการเลือกตั้งประจำเทศบาลตำบลหนองไม้งาม</li></a></v-col
                  >
                </v-list>
              </v-menu>
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
  }
}
</script>
