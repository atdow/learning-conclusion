<!--
 * @Author: atdow
 * @Date: 2021-06-18 16:01:43
 * @LastEditors: null
 * @LastEditTime: 2021-06-30 18:26:20
 * @Description: file description
-->
<template>
  <div class="test-component">
    <VirtualScrollMilestoneTable
      :data="milestoneData"
      :loading="loading"
      :contentHeight="660"
      title="相关药物"
    >
      <div slot="contentSlot" slot-scope="{ record }" class="content-slot">
        <template v-if="record.event">
          <i
            :class="[
              'dot',
              {
                research: record.event
                  ? record.event.status == '在研'
                    ? true
                    : false
                  : false,
              },
            ]"
          ></i>
          <div class="text-content">
            <p v-text="record.event ? record.event.title : ''"></p>
            <p>
              <span v-text="record.event ? record.event.label : ''"></span>
              <span>({{ record.event ? record.event.phase : "" }})</span>
            </p>
          </div>
        </template>
      </div>
      <div slot="footSlot" class="footSlot">
        <ul>
          <li>
            <i class="dot approved"></i>
            <span>上市</span>
          </li>
          <li>
            <i class="dot research"></i>
            <span>在研</span>
          </li>
        </ul>
      </div>
    </VirtualScrollMilestoneTable>
  </div>
</template>

<script>
import VirtualScrollMilestoneTable from "@/components/VirtualScrollMilestoneTable";
import { milestoneDataFormat } from "@/utils/util";
export default {
  name: "ListView",
  computed: {},
  mounted() {
    this.milestoneData = milestoneDataFormat(this.milestoneData2);
    //this.milestoneData = milestoneDataFormat([]);
  },

  data() {
    return {
      loading: false,
      milestoneData2: [
        [
          {
            date: 1970,
            event: {
              label: "HRA PHARMA",
              phase: "批准上市",
              status: "上市",
              title: "米托坦",
            },
          },
        ],
        [
          {
            date: 1973,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "博来霉素",
            },
          },
        ],
        [
          {
            date: 1974,
            event: {
              label: "辉瑞制药",
              phase: "批准上市",
              status: "上市",
              title: "盐酸多柔比星",
            },
          },
        ],
        [
          {
            date: 1976,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "洛莫司汀",
            },
          },
        ],
        [
          {
            date: 1977,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "卡莫司汀",
            },
          },
          {
            date: 1977,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "枸橼酸他莫昔芬",
            },
          },
        ],
        [
          {
            date: 1978,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "顺铂",
            },
          },
        ],
        [
          {
            date: 1983,
            event: {
              label: "葛兰素史克",
              phase: "批准上市",
              status: "上市",
              title: "盐酸雷尼替丁",
            },
          },
          {
            date: 1983,
            event: {
              label: "CORDEN PHARMA",
              phase: "批准上市",
              status: "上市",
              title: "依托泊苷",
            },
          },
        ],
        [
          {
            date: 1985,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "Leuprolide",
            },
          },
        ],
        [
          {
            date: 1986,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "法莫替丁",
            },
          },
        ],
        [
          {
            date: 1988,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "醋酸奥曲肽",
            },
          },
        ],
        [
          {
            date: 1989,
            event: {
              label: "TERSERA",
              phase: "批准上市",
              status: "上市",
              title: "醋酸戈舍瑞林",
            },
          },
        ],
        [
          {
            date: 1990,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "盐酸伊达比星",
            },
          },
        ],
        [
          {
            date: 1991,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "喷司他丁",
            },
          },
          {
            date: 1991,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "帕米膦酸二钠",
            },
          },
          {
            date: 1991,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "磷酸氟达拉滨",
            },
          },
        ],
        [
          {
            date: 1992,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "紫杉醇",
            },
          },
          {
            date: 1992,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "阿地白介素",
            },
          },
        ],
        [
          {
            date: 1993,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "克拉屈滨",
            },
          },
        ],
        [
          {
            date: 1994,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "酒石酸长春瑞滨",
            },
          },
        ],
        [
          {
            date: 1995,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "兰索拉唑",
            },
          },
          {
            date: 1995,
            event: {
              label: "PINNACLE BIOLOGICS, INC. (Delaware (US))",
              phase: "批准上市",
              status: "上市",
              title: "卟吩姆钠",
            },
          },
          {
            date: 1995,
            event: {
              label: "Avanos Medical, Inc.",
              phase: "批准上市",
              status: "上市",
              title: "多西他赛",
            },
          },
        ],
        [
          {
            date: 1996,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "尼鲁米特",
            },
          },
          {
            date: 1996,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "Topotecan",
            },
          },
          {
            date: 1996,
            event: {
              label: "Orion Corporation",
              phase: "批准上市",
              status: "上市",
              title: "托瑞米芬",
            },
          },
          {
            date: 1996,
            event: {
              label: "罗氏",
              phase: "批准上市",
              status: "上市",
              title: "伊班膦酸",
            },
          },
          {
            date: 1996,
            event: {
              label: "IMMUNOMEDICS",
              phase: "批准上市",
              status: "上市",
              title: "阿西莫单抗",
            },
          },
          {
            date: 1996,
            event: {
              label: "Ion Beam Applications",
              phase: "批准上市",
              status: "上市",
              title: "伊戈伏单抗",
            },
          },
          {
            date: 1996,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "盐酸吉西他滨",
            },
          },
          {
            date: 1996,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "盐酸拓扑替康",
            },
          },
        ],
        [
          {
            date: 1997,
            event: {
              label: "罗氏",
              phase: "批准上市",
              status: "上市",
              title: "促红素β",
            },
          },
          {
            date: 1997,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "利妥昔单抗",
            },
          },
        ],
        [
          {
            date: 1998,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "沙利度胺",
            },
          },
          {
            date: 1998,
            event: {
              label: "KS Biomedix Ltd.",
              phase: "批准上市",
              status: "上市",
              title: "伏妥莫单抗",
            },
          },
          {
            date: 1998,
            event: {
              label: "罗氏",
              phase: "批准上市",
              status: "上市",
              title: "卡培他滨",
            },
          },
          {
            date: 1998,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "曲妥珠单抗",
            },
          },
        ],
        [
          {
            date: 1999,
            event: {
              label: "Bausch Health Companies Inc.Pharmaceuticals",
              phase: "批准上市",
              status: "上市",
              title: "贝沙罗汀",
            },
          },
          {
            date: 1999,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "地尼白介素",
            },
          },
          {
            date: 1999,
            event: {
              label: "Belpharma S.A.",
              phase: "批准上市",
              status: "上市",
              title: "他索纳明",
            },
          },
          {
            date: 1999,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "盐酸表柔比星",
            },
          },
          {
            date: 1999,
            event: {
              label: "美国默克",
              phase: "批准上市",
              status: "上市",
              title: "替莫唑胺",
            },
          },
          {
            date: 1999,
            event: {
              label: "卫材",
              phase: "批准上市",
              status: "上市",
              title: "雷贝拉唑钠",
            },
          },
          {
            date: 1999,
            event: {
              label: "辉瑞",
              phase: "批准上市",
              status: "上市",
              title: "西罗莫司",
            },
          },
          {
            date: 1999,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "ALA",
            },
          },
        ],
        [
          {
            date: 2000,
            event: {
              label: "麒麟控股",
              phase: "批准上市",
              status: "上市",
              title: "干扰素γ1a",
            },
          },
          {
            date: 2000,
            event: {
              label: "辉瑞",
              phase: "批准上市",
              status: "上市",
              title: "泮托拉唑钠",
            },
          },
          {
            date: 2000,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "醋酸亮丙瑞林",
            },
          },
          {
            date: 2000,
            event: {
              label: "美国默克",
              phase: "批准上市",
              status: "上市",
              title: "干扰素IFN-α2b(重组)",
            },
          },
          {
            date: 2000,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "三氧化二砷",
            },
          },
          {
            date: 2000,
            event: {
              label: "VERITY",
              phase: "批准上市",
              status: "上市",
              title: "双羟萘酸曲普瑞林",
            },
          },
        ],
        [
          {
            date: 2001,
            event: {
              label: "阿斯利康",
              phase: "批准上市",
              status: "上市",
              title: "艾司奥美拉唑镁",
            },
          },
          {
            date: 2001,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "唑来膦酸",
            },
          },
          {
            date: 2001,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "Imatinib",
            },
          },
          {
            date: 2001,
            event: {
              label: "Nichi-Iko Pharmaceutical Co., Ltd.",
              phase: "批准上市",
              status: "上市",
              title: "丙丁倍他米松",
            },
          },
          {
            date: 2001,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "甲磺酸伊马替尼",
            },
          },
          {
            date: 2001,
            event: {
              label: "BioMed Technology Holdings Ltd.",
              phase: "批准上市",
              status: "上市",
              title: "替莫泊芬",
            },
          },
          {
            date: 2001,
            event: {
              label: "DOMPE FARMACEUTICI",
              phase: "批准上市",
              status: "上市",
              title: "达依泊汀α",
            },
          },
        ],
        [
          {
            date: 2002,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "替伊莫单抗类似物",
            },
          },
          {
            date: 2002,
            event: {
              label: "阿斯利康",
              phase: "批准上市",
              status: "上市",
              title: "吉非替尼",
            },
          },
          {
            date: 2002,
            event: {
              label: "诺华",
              phase: "临床2期",
              status: "在研",
              title: "埃博霉素B",
            },
          },
          {
            date: 2002,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "奥沙利铂",
            },
          },
          {
            date: 2002,
            event: {
              label: "阿斯利康",
              phase: "批准上市",
              status: "上市",
              title: "氟维司群",
            },
          },
        ],
        [
          {
            date: 2003,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "阿巴瑞克",
            },
          },
          {
            date: 2003,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "硼替佐米",
            },
          },
        ],
        [
          {
            date: 2004,
            event: {
              label: "Y-mAbs Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "[131I]Omburtamab",
            },
          },
          {
            date: 2004,
            event: {
              label: "赛诺菲",
              phase: "临床3期",
              status: "在研",
              title: "Gemcitabine",
            },
          },
          {
            date: 2004,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "阿扎胞苷",
            },
          },
          {
            date: 2004,
            event: {
              label: "DOMPE FARMACEUTICI",
              phase: "批准上市",
              status: "上市",
              title: "Cinacalcet",
            },
          },
          {
            date: 2004,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "贝伐珠单抗",
            },
          },
          {
            date: 2004,
            event: {
              label: "安斯泰来制药",
              phase: "批准上市",
              status: "上市",
              title: "盐酸厄洛替尼",
            },
          },
          {
            date: 2004,
            event: {
              label: "礼来",
              phase: "批准上市",
              status: "上市",
              title: "西妥昔单抗",
            },
          },
        ],
        [
          {
            date: 2005,
            event: {
              label: "NIPPON SHINYAKU",
              phase: "批准上市",
              status: "上市",
              title: "他米巴罗汀",
            },
          },
          {
            date: 2005,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "甲苯磺酸索拉非尼",
            },
          },
          {
            date: 2005,
            event: {
              label: "Medac GmbH",
              phase: "临床3期",
              status: "在研",
              title: "5-氨酮戊酸",
            },
          },
          {
            date: 2005,
            event: {
              label: "新基",
              phase: "批准上市",
              status: "上市",
              title: "来那度胺",
            },
          },
        ],
        [
          {
            date: 2006,
            event: {
              label: "安斯泰来制药",
              phase: "临床3期",
              status: "在研",
              title: "亮丙瑞林",
            },
          },
          {
            date: 2006,
            event: {
              label: "拜耳",
              phase: "批准上市",
              status: "上市",
              title: "索拉非尼",
            },
          },
          {
            date: 2006,
            event: {
              label: "安进",
              phase: "批准上市",
              status: "上市",
              title: "帕尼单抗",
            },
          },
          {
            date: 2006,
            event: {
              label: "辉瑞",
              phase: "批准上市",
              status: "上市",
              title: "苹果酸舒尼替尼",
            },
          },
          {
            date: 2006,
            event: {
              label: "TAIHO ONCOLOGY",
              phase: "临床3期",
              status: "在研",
              title: "S-1",
            },
          },
          {
            date: 2006,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "伏林司他",
            },
          },
        ],
        [
          {
            date: 2007,
            event: {
              label: "Medac GmbH",
              phase: "批准上市",
              status: "上市",
              title: "5-氨酮戊酸盐酸盐",
            },
          },
          {
            date: 2007,
            event: {
              label: "阿斯利康",
              phase: "临床2期",
              status: "在研",
              title: "KU-0059436",
            },
          },
          {
            date: 2007,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "伊沙匹隆",
            },
          },
          {
            date: 2007,
            event: {
              label: "Nidda Healthcare Holding GmbH",
              phase: "批准上市",
              status: "上市",
              title: "促红素ζ",
            },
          },
          {
            date: 2007,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "甲苯磺酸拉帕替尼",
            },
          },
          {
            date: 2007,
            event: {
              label: "Pharma Mar S.A.",
              phase: "批准上市",
              status: "上市",
              title: "曲贝替定",
            },
          },
          {
            date: 2007,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "坦罗莫司",
            },
          },
          {
            date: 2007,
            event: {
              label: "OHARA Pharmaceutical Co., Ltd.",
              phase: "批准上市",
              status: "上市",
              title: "左亚叶酸钙",
            },
          },
        ],
        [
          {
            date: 2008,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "拉帕替尼",
            },
          },
          {
            date: 2008,
            event: {
              label: "美国默克",
              phase: "批准上市",
              status: "上市",
              title: "福沙吡坦",
            },
          },
          {
            date: 2008,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "醋酸地加瑞克",
            },
          },
          {
            date: 2008,
            event: {
              label: "Noventia Pharma Srl",
              phase: "批准上市",
              status: "上市",
              title: "组胺",
            },
          },
          {
            date: 2008,
            event: {
              label: "赛诺菲",
              phase: "批准上市",
              status: "上市",
              title: "普乐沙福",
            },
          },
          {
            date: 2008,
            event: {
              label: "Viralytics",
              phase: "临床1期",
              status: "在研",
              title: "CVA21",
            },
          },
          {
            date: 2008,
            event: {
              label: "罗氏",
              phase: "临床1期",
              status: "在研",
              title: "RO5126766",
            },
          },
          {
            date: 2008,
            event: {
              label: "EXELIXIS",
              phase: "临床1期",
              status: "在研",
              title: "XL888",
            },
          },
        ],
        [
          {
            date: 2009,
            event: {
              label: "诺华",
              phase: "临床3期",
              status: "在研",
              title: "Panobinostat",
            },
          },
          {
            date: 2009,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "依维莫司",
            },
          },
          {
            date: 2009,
            event: {
              label: "武田制药",
              phase: "批准上市",
              status: "上市",
              title: "米法莫肽",
            },
          },
          {
            date: 2009,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "普拉曲沙",
            },
          },
          {
            date: 2009,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "盐酸培唑帕尼",
            },
          },
          {
            date: 2009,
            event: {
              label: "辉凌制药",
              phase: "批准上市",
              status: "上市",
              title: "地加瑞克",
            },
          },
          {
            date: 2009,
            event: {
              label: "Neopharm Ltd.",
              phase: "批准上市",
              status: "上市",
              title: "卡妥索单抗",
            },
          },
          {
            date: 2009,
            event: {
              label: "梯瓦制药",
              phase: "批准上市",
              status: "上市",
              title: "促红素θ",
            },
          },
          {
            date: 2009,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "罗米地辛",
            },
          },
          {
            date: 2009,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "人乳头瘤病毒疫苗(VLP_多价)",
            },
          },
          {
            date: 2009,
            event: {
              label: "SERB SA",
              phase: "批准上市",
              status: "上市",
              title: "磷酸二氨吡啶",
            },
          },
          {
            date: 2009,
            event: {
              label: "皮尔法伯",
              phase: "批准上市",
              status: "上市",
              title: "长春氟宁",
            },
          },
        ],
        [
          {
            date: 2010,
            event: {
              label: "尼普洛株式会社",
              phase: "批准上市",
              status: "上市",
              title: "奥美拉唑钠",
            },
          },
          {
            date: 2010,
            event: {
              label: "Sumitomo Chemical Co., Ltd.",
              phase: "批准上市",
              status: "上市",
              title: "米铂",
            },
          },
          {
            date: 2010,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "培唑帕尼",
            },
          },
          {
            date: 2010,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "甲磺酸艾瑞布林",
            },
          },
          {
            date: 2010,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "溶组织梭菌胶原酶",
            },
          },
          {
            date: 2010,
            event: {
              label: "Laboratorio Elea",
              phase: "临床2期",
              status: "在研",
              title: "Racotumomab",
            },
          },
        ],
        [
          {
            date: 2011,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "磷酸芦可替尼",
            },
          },
          {
            date: 2011,
            event: {
              label: "贝达药业",
              phase: "批准上市",
              status: "上市",
              title: "Icotinib",
            },
          },
          {
            date: 2011,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "克唑替尼",
            },
          },
          {
            date: 2011,
            event: {
              label: "C&P Investors Limited",
              phase: "批准上市",
              status: "上市",
              title: "吉美嘧啶&奥替拉西&替加氟",
            },
          },
          {
            date: 2011,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "维莫非尼",
            },
          },
          {
            date: 2011,
            event: {
              label: "辉瑞",
              phase: "临床2期",
              status: "在研",
              title: "GEDATOLISIB",
            },
          },
          {
            date: 2011,
            event: {
              label: "百时美施贵宝",
              phase: "批准上市",
              status: "上市",
              title: "伊匹单抗",
            },
          },
          {
            date: 2011,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "维布妥昔单抗",
            },
          },
          {
            date: 2011,
            event: {
              label: "卫材",
              phase: "批准上市",
              status: "上市",
              title: "艾瑞布林",
            },
          },
        ],
        [
          {
            date: 2012,
            event: {
              label: "Polynoma LLC",
              phase: "临床3期",
              status: "在研",
              title: "Seviprotimut",
            },
          },
          {
            date: 2012,
            event: {
              label: "罗氏",
              phase: "批准上市",
              status: "上市",
              title: "帕妥珠单抗",
            },
          },
          {
            date: 2012,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "瑞戈非尼",
            },
          },
          {
            date: 2012,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "Ziv-Aflibercept",
            },
          },
          {
            date: 2012,
            event: {
              label: "辉瑞",
              phase: "批准上市",
              status: "上市",
              title: "阿昔替尼",
            },
          },
          {
            date: 2012,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "维莫德吉",
            },
          },
          {
            date: 2012,
            event: {
              label: "爵士制药",
              phase: "临床3期",
              status: "在研",
              title: "CPX-351",
            },
          },
          {
            date: 2012,
            event: {
              label: "诺华",
              phase: "临床2期",
              status: "在研",
              title: "Lacnotuzumab",
            },
          },
          {
            date: 2012,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "Ruxolitinib",
            },
          },
          {
            date: 2012,
            event: {
              label: "礼来",
              phase: "临床2期",
              status: "在研",
              title: "Gandotinib",
            },
          },
          {
            date: 2012,
            event: {
              label: "施维雅",
              phase: "批准上市",
              status: "上市",
              title: "马来酸匹克生琼",
            },
          },
          {
            date: 2012,
            event: {
              label: "安进",
              phase: "批准上市",
              status: "上市",
              title: "卡非佐米",
            },
          },
          {
            date: 2012,
            event: {
              label: "利奥制药",
              phase: "批准上市",
              status: "上市",
              title: "巨大戟醇甲基丁烯酸酯",
            },
          },
        ],
        [
          {
            date: 2013,
            event: {
              label: "勃林格殷格翰",
              phase: "批准上市",
              status: "上市",
              title: "Afatinib",
            },
          },
          {
            date: 2013,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "艾司奥美拉唑锶",
            },
          },
          {
            date: 2013,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "曲美替尼",
            },
          },
          {
            date: 2013,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "马来酸阿法替尼",
            },
          },
          {
            date: 2013,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "甲磺酸达拉非尼",
            },
          },
          {
            date: 2013,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "奥比妥珠单抗",
            },
          },
          {
            date: 2013,
            event: {
              label: "葛兰素史克",
              phase: "临床2期",
              status: "在研",
              title: "Molibresib",
            },
          },
          {
            date: 2013,
            event: {
              label: "Sanpower Group Co., Ltd.",
              phase: "批准上市",
              status: "上市",
              title:
                "Autologous Peripheral-Blood Mononuclear Cells Activated With Prostatic Acid Phosphatase Granulocyte-Macrophage Colony-Stimulating Factor (Sipuleucel-T)",
            },
          },
          {
            date: 2013,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "曲妥珠单抗-美坦新偶联物",
            },
          },
          {
            date: 2013,
            event: {
              label: "安进",
              phase: "临床2期",
              status: "在研",
              title: "AMG 337",
            },
          },
          {
            date: 2013,
            event: {
              label: "INCYTE",
              phase: "批准上市",
              status: "上市",
              title: "Ponatinib",
            },
          },
          {
            date: 2013,
            event: {
              label: "艾伯维",
              phase: "批准上市",
              status: "上市",
              title: "伊布替尼",
            },
          },
          {
            date: 2013,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "泊马度胺",
            },
          },
          {
            date: 2013,
            event: {
              label: "大冢制药",
              phase: "临床1期",
              status: "在研",
              title: "OPB-111077",
            },
          },
        ],
        [
          {
            date: 2014,
            event: {
              label: "吉利德",
              phase: "批准上市",
              status: "上市",
              title: "艾地利西",
            },
          },
          {
            date: 2014,
            event: {
              label: "四川源生生物药业有限公司",
              phase: "其他",
              status: "在研",
              title: "紫杉肽",
            },
          },
          {
            date: 2014,
            event: {
              label: "新基",
              phase: "临床2期",
              status: "在研",
              title: "CC-486",
            },
          },
          {
            date: 2014,
            event: {
              label: "成都法玛基因科技有限公司",
              phase: "临床2期",
              status: "在研",
              title: "腺病毒(重组_溶瘤性;选择性)",
            },
          },
          {
            date: 2014,
            event: {
              label: "阿斯利康",
              phase: "批准上市",
              status: "上市",
              title: "奥拉帕利",
            },
          },
          {
            date: 2014,
            event: {
              label: "豪森药业",
              phase: "临床1期",
              status: "在研",
              title: "盐酸卡呋色替",
            },
          },
          {
            date: 2014,
            event: {
              label: "康哲医药",
              phase: "临床2期",
              status: "在研",
              title: "酪丝缬肽",
            },
          },
          {
            date: 2014,
            event: {
              label: "张江生物医药",
              phase: "临床1期",
              status: "在研",
              title: "长春新碱",
            },
          },
          {
            date: 2014,
            event: {
              label: "北京华世天富生物医药科技有限公司",
              phase: "临床3期",
              status: "在研",
              title: "K-001",
            },
          },
          {
            date: 2014,
            event: {
              label: "诺华",
              phase: "临床2期",
              status: "在研",
              title: "INC280",
            },
          },
          {
            date: 2014,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "贝利司他",
            },
          },
          {
            date: 2014,
            event: {
              label: "一心制药",
              phase: "临床2期",
              status: "在研",
              title: "二盐酸组胺",
            },
          },
          {
            date: 2014,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "色瑞替尼",
            },
          },
          {
            date: 2014,
            event: {
              label: "施维雅",
              phase: "临床2期",
              status: "在研",
              title: "德立替尼",
            },
          },
          {
            date: 2014,
            event: {
              label: "勃林格殷格翰",
              phase: "批准上市",
              status: "上市",
              title: "尼达尼布",
            },
          },
          {
            date: 2014,
            event: {
              label: "Ipsen S.A.",
              phase: "批准上市",
              status: "上市",
              title: "卡博替尼",
            },
          },
          {
            date: 2014,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "甲磺酸阿帕替尼",
            },
          },
          {
            date: 2014,
            event: {
              label: "礼来",
              phase: "批准上市",
              status: "上市",
              title: "雷莫芦单抗",
            },
          },
          {
            date: 2014,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "阿霉素",
            },
          },
          {
            date: 2014,
            event: {
              label: "Oncoethix GmbH",
              phase: "临床1期",
              status: "在研",
              title: "Birabresib",
            },
          },
          {
            date: 2014,
            event: {
              label: "MILLENNIUM PHARMS",
              phase: "临床3期",
              status: "在研",
              title: "MLN-9708",
            },
          },
          {
            date: 2014,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "帕博利珠单抗",
            },
          },
          {
            date: 2014,
            event: {
              label: "合肥合源药业有限公司",
              phase: "临床1期",
              status: "在研",
              title: "盐酸莎巴比星",
            },
          },
          {
            date: 2014,
            event: {
              label: "北京奥源和力生物技术有限公司",
              phase: "临床1期",
              status: "在研",
              title: "GM-CSF单纯疱疹病毒(重组;人)",
            },
          },
          {
            date: 2014,
            event: {
              label: "诺华",
              phase: "临床1/2期",
              status: "在研",
              title: "Nazartinib",
            },
          },
        ],
        [
          {
            date: 2015,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "达妥昔单抗",
            },
          },
          {
            date: 2015,
            event: {
              label: "武田制药",
              phase: "批准上市",
              status: "上市",
              title: "枸橼酸伊沙佐米",
            },
          },
          {
            date: 2015,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "甲磺酸仑伐替尼",
            },
          },
          {
            date: 2015,
            event: {
              label: "重庆惠源医药",
              phase: "临床3期",
              status: "在研",
              title: "Encequidar/paclitaxel",
            },
          },
          {
            date: 2015,
            event: {
              label: "恒瑞医药",
              phase: "批准上市",
              status: "上市",
              title: "Apatinib",
            },
          },
          {
            date: 2015,
            event: {
              label: "上海海欣生物技术有限公司",
              phase: "临床3期",
              status: "在研",
              title: "树突状细胞(抗原致敏的)",
            },
          },
          {
            date: 2015,
            event: {
              label: "OAK PHARMS",
              phase: "临床1期",
              status: "在研",
              title: "Belvarafenib",
            },
          },
          {
            date: 2015,
            event: {
              label: "PTC THERAP",
              phase: "临床1期",
              status: "在研",
              title: "Unesbulin",
            },
          },
          {
            date: 2015,
            event: {
              label: "卫材",
              phase: "临床1期",
              status: "在研",
              title: "E7046",
            },
          },
          {
            date: 2015,
            event: {
              label: "艾力斯医药",
              phase: "临床2期",
              status: "在研",
              title: "甲苯磺酸艾力替尼",
            },
          },
          {
            date: 2015,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "IDH305",
            },
          },
          {
            date: 2015,
            event: {
              label: "Helsinn",
              phase: "批准上市",
              status: "上市",
              title: "奈妥匹坦&帕洛诺司琼",
            },
          },
          {
            date: 2015,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "依妥组单抗",
            },
          },
          {
            date: 2015,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "培美曲塞二钾",
            },
          },
          {
            date: 2015,
            event: {
              label: "葛兰素史克,葛兰素史克,葛兰素史克",
              phase: "临床2期",
              status: "在研",
              title: "GSK2118436",
            },
          },
          {
            date: 2015,
            event: {
              label: "北京华昊中天生物技术有限公司",
              phase: "临床2期",
              status: "在研",
              title: "Depoxythilone",
            },
          },
          {
            date: 2015,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG-330",
            },
          },
          {
            date: 2015,
            event: {
              label: "正大天晴,上海医药",
              phase: "临床1期",
              status: "在研",
              title: "马来酸舒布替尼",
            },
          },
          {
            date: 2015,
            event: {
              label: "成都地奥九泓制药厂",
              phase: "临床1期",
              status: "在研",
              title: "多功能凋亡受体激动剂(DATR)",
            },
          },
          {
            date: 2015,
            event: {
              label: "罗氏",
              phase: "批准上市",
              status: "上市",
              title: "富马酸考美替尼",
            },
          },
          {
            date: 2015,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 894999",
            },
          },
          {
            date: 2015,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "喜诺替康",
            },
          },
          {
            date: 2015,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "HSP-MUC1",
            },
          },
          {
            date: 2015,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "乳酸帕诺司他",
            },
          },
          {
            date: 2015,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "帕博西尼",
            },
          },
          {
            date: 2015,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "美妥珠单抗",
            },
          },
          {
            date: 2015,
            event: {
              label: "Iovance",
              phase: "临床2期",
              status: "在研",
              title: "LifileuceL",
            },
          },
          {
            date: 2015,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "磷酸索尼德吉",
            },
          },
          {
            date: 2015,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Muparfostat",
            },
          },
          {
            date: 2015,
            event: {
              label: "礼来,Fisher Clinical Services Inc.,礼来",
              phase: "临床2期",
              status: "在研",
              title: "LY2157299",
            },
          },
          {
            date: 2015,
            event: {
              label: "罗氏",
              phase: "批准上市",
              status: "上市",
              title: "半富马酸考美替尼",
            },
          },
          {
            date: 2015,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG-224",
            },
          },
          {
            date: 2015,
            event: {
              label: "阿斯利康",
              phase: "批准上市",
              status: "上市",
              title: "甲磺酸奥希替尼",
            },
          },
          {
            date: 2015,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Hemay022",
            },
          },
          {
            date: 2015,
            event: {
              label: "ChemoCentryx",
              phase: "临床1期",
              status: "在研",
              title: "CCX872-B",
            },
          },
          {
            date: 2015,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "达雷妥尤单抗",
            },
          },
          {
            date: 2015,
            event: {
              label: "安进",
              phase: "批准上市",
              status: "上市",
              title: "溶瘤病毒",
            },
          },
          {
            date: 2015,
            event: {
              label: "成都恩多施生物工程技术有限公司",
              phase: "临床2期",
              status: "在研",
              title: "内皮抑素腺病毒(重组;人)",
            },
          },
          {
            date: 2015,
            event: {
              label: "Astex",
              phase: "临床3期",
              status: "在研",
              title: "Guadecitabine",
            },
          },
          {
            date: 2015,
            event: {
              label: "拜耳",
              phase: "临床1期",
              status: "在研",
              title: "BAY1251152",
            },
          },
          {
            date: 2015,
            event: {
              label: "诺华",
              phase: "临床3期",
              status: "在研",
              title: "BKM120",
            },
          },
          {
            date: 2015,
            event: {
              label: "印度太阳药业",
              phase: "批准上市",
              status: "上市",
              title: "二磷酸索尼德吉",
            },
          },
        ],
        [
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MVT-2163",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CGX1321",
            },
          },
          {
            date: 2016,
            event: {
              label: "葛兰素史克",
              phase: "临床1期",
              status: "在研",
              title: "GSK1795091",
            },
          },
          {
            date: 2016,
            event: {
              label: "H3 Biomedicine Inc.",
              phase: "临床1期",
              status: "在研",
              title: "H3B-8800",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Immuncell-LC",
            },
          },
          {
            date: 2016,
            event: {
              label: "CLOVIS ONCOLOGY",
              phase: "临床3期",
              status: "在研",
              title: "Rucaparib",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DTRMWXHS-12",
            },
          },
          {
            date: 2016,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 836880",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Recombinant polio virus vaccine",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "[131I]Apamistamab",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "ALECSAT",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BXQ 350",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "TALIMOGENE",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Cintirorgon",
            },
          },
          {
            date: 2016,
            event: {
              label: "罗氏",
              phase: "临床3期",
              status: "在研",
              title: "阿来替尼",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "OTS 167",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Rilimogene galvacirepvec",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "DCB BO 1301",
            },
          },
          {
            date: 2016,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-63709178",
            },
          },
          {
            date: 2016,
            event: {
              label: "诺华",
              phase: "临床3期",
              status: "在研",
              title: "Spartalizumab",
            },
          },
          {
            date: 2016,
            event: {
              label: "Basilea Pharmaceutica",
              phase: "临床1/2期",
              status: "在研",
              title: "Lisavanbulin",
            },
          },
          {
            date: 2016,
            event: {
              label: "Xencor",
              phase: "临床1期",
              status: "在研",
              title: "Vibecotamab",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Tagrisso",
            },
          },
          {
            date: 2016,
            event: {
              label: "Gamida Cell",
              phase: "临床3期",
              status: "在研",
              title: "Omidubicel",
            },
          },
          {
            date: 2016,
            event: {
              label: "礼来,Fisher Clinical Services Inc.,礼来",
              phase: "临床3期",
              status: "在研",
              title: "LY2835219",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CBL 137",
            },
          },
          {
            date: 2016,
            event: {
              label:
                "先声东元制药,先声药业,江苏先声药物研究有限公司,吉林省博大制药有限责任公司",
              phase: "临床1期",
              status: "在研",
              title: "苹果酸他菲替尼",
            },
          },
          {
            date: 2016,
            event: {
              label: "Fujifilm Pharmaceuticals U.S.A., Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "FF-10502-01",
            },
          },
          {
            date: 2016,
            event: {
              label: "Xencor",
              phase: "临床1期",
              status: "在研",
              title: "Plamotamab",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Tasadenoturev",
            },
          },
          {
            date: 2016,
            event: {
              label: "ACROTECH",
              phase: "临床1期",
              status: "在研",
              title: "Belinostat IV",
            },
          },
          {
            date: 2016,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "依多曲肽",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "hrBMP4",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Nolvadex",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "[68Ga]P15 041",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TK216",
            },
          },
          {
            date: 2016,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "FAZ 053",
            },
          },
          {
            date: 2016,
            event: {
              label: "H3 Biomedicine Inc.",
              phase: "临床1期",
              status: "在研",
              title: "H3B-6527",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "LCL161",
            },
          },
          {
            date: 2016,
            event: {
              label: "AbGenomics B.V.",
              phase: "临床1期",
              status: "在研",
              title: "AbGn 107",
            },
          },
          {
            date: 2016,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "维奈克拉",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LPX EWS/FL1 T1",
            },
          },
          {
            date: 2016,
            event: {
              label: "Ferring Pharmaceuticals",
              phase: "临床3期",
              status: "在研",
              title: "Nadofaragene firadenovec",
            },
          },
          {
            date: 2016,
            event: {
              label: "武汉利元亨药物技术有限公司",
              phase: "未知",
              status: "在研",
              title: "熊果酸纳米",
            },
          },
          {
            date: 2016,
            event: {
              label: "GENENTECH,罗氏制药",
              phase: "临床3期",
              status: "在研",
              title: "MPDL3280A",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Aglatimagene besadenovec",
            },
          },
          {
            date: 2016,
            event: {
              label: "上海再新医药科技有限公司",
              phase: "临床1期",
              status: "在研",
              title: "CM118",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Ontorpacept",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "FLYSYN",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "淋病疫苗",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "OSE 2101",
            },
          },
          {
            date: 2016,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "LSZ 102",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "HER2 cancer vaccine",
            },
          },
          {
            date: 2016,
            event: {
              label: "Xcovery Holding Company LLC.",
              phase: "临床3期",
              status: "在研",
              title: "恩沙替尼",
            },
          },
          {
            date: 2016,
            event: {
              label: "河北森朗生物科技有限公司",
              phase: "临床1/2期",
              status: "在研",
              title: "Senl 1904A",
            },
          },
          {
            date: 2016,
            event: {
              label: "再生元",
              phase: "临床1期",
              status: "在研",
              title: "Fianlimab",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Enoblituzumab",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Mobilised peripheral blood cells",
            },
          },
          {
            date: 2016,
            event: {
              label: "KARYOPHARM THERAPS",
              phase: "临床1/2期",
              status: "在研",
              title: "Eltanexor",
            },
          },
          {
            date: 2016,
            event: {
              label: "Pharmaceutics International, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "普那布林",
            },
          },
          {
            date: 2016,
            event: {
              label: "Intas Pharmaceuticals Limited",
              phase: "批准上市",
              status: "上市",
              title: "帕洛诺司琼",
            },
          },
          {
            date: 2016,
            event: {
              label: "诺华",
              phase: "临床3期",
              status: "在研",
              title: "瑞博西尼",
            },
          },
          {
            date: 2016,
            event: {
              label: "强生,强生",
              phase: "临床3期",
              status: "在研",
              title: "JNJ-56021927",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "FIMEPINOSTAT",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Personalized cellular vaccine",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Olvimulogene nanivacirepvec",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "抗VEGF单克隆抗体(hPV19)",
            },
          },
          {
            date: 2016,
            event: {
              label: "INCYTE",
              phase: "临床1/2期",
              status: "在研",
              title: "INCB059872",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "T细胞替代疗法",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "[177Lu]lilotomab satetraxetan",
            },
          },
          {
            date: 2016,
            event: {
              label: "梯瓦制药",
              phase: "批准上市",
              status: "上市",
              title: "培美曲塞二酸",
            },
          },
          {
            date: 2016,
            event: {
              label: "安斯泰来制药",
              phase: "临床3期",
              status: "在研",
              title: "Gilteritinib",
            },
          },
          {
            date: 2016,
            event: {
              label: "SPECTRUM PHARMS",
              phase: "临床1期",
              status: "在研",
              title: "IGN002",
            },
          },
          {
            date: 2016,
            event: {
              label: "葛兰素史克",
              phase: "临床2期",
              status: "在研",
              title: "Letetresgene autoleucel",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RGX-104",
            },
          },
          {
            date: 2016,
            event: {
              label: "安科生物",
              phase: "临床1期",
              status: "在研",
              title: "抗HER2单克隆抗体(重组;人)",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Rose bengal sodium",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "BMX-001",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SBP 101",
            },
          },
          {
            date: 2016,
            event: {
              label: "Arog Pharmaceuticals, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "CRENOLANIB",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Pidnarulex",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Ivaltinostat",
            },
          },
          {
            date: 2016,
            event: {
              label: "贝达药业",
              phase: "临床1期",
              status: "在研",
              title: "BPI-15086",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "IRX 4204",
            },
          },
          {
            date: 2016,
            event: {
              label: "AGIOS",
              phase: "临床3期",
              status: "在研",
              title: "AG-120",
            },
          },
          {
            date: 2016,
            event: {
              label: "Sumitomo Dainippon Pharma Oncology, Inc",
              phase: "临床3期",
              status: "在研",
              title: "Napabucasin",
            },
          },
          {
            date: 2016,
            event: {
              label: "SynCore Biotechnology Co.,Ltd.",
              phase: "临床3期",
              status: "在研",
              title: "Paclitaxel liposomal",
            },
          },
          {
            date: 2016,
            event: {
              label: "Forma Therapeutics",
              phase: "临床1/2期",
              status: "在研",
              title: "FT-2102",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "K27M peptide",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Conjugated Estrogens&Bazedoxifene",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Vistusertib",
            },
          },
          {
            date: 2016,
            event: {
              label: "SPECTRUM PHARMS",
              phase: "临床2期",
              status: "在研",
              title: "Poziotinib",
            },
          },
          {
            date: 2016,
            event: {
              label: "施维雅",
              phase: "临床1期",
              status: "在研",
              title: "UCART19",
            },
          },
          {
            date: 2016,
            event: {
              label: "罗氏制药",
              phase: "临床3期",
              status: "在研",
              title: "Taselisib",
            },
          },
          {
            date: 2016,
            event: {
              label: "KARYOPHARM THERAPS",
              phase: "临床1期",
              status: "在研",
              title: "ATG 019",
            },
          },
          {
            date: 2016,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "阿替利珠单抗",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Zeaxanthins",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ONCOS 102",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "sEphB4-HSA",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Delolimogene mupadenorepvec",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CLR 131",
            },
          },
          {
            date: 2016,
            event: {
              label: "CLOVIS ONCOLOGY",
              phase: "批准上市",
              status: "上市",
              title: "芦卡帕利樟脑磺酸盐",
            },
          },
          {
            date: 2016,
            event: {
              label: "Fate Therapeutics",
              phase: "临床1/2期",
              status: "在研",
              title: "细胞免疫疗法",
            },
          },
          {
            date: 2016,
            event: {
              label: "GTHX",
              phase: "临床1/2期",
              status: "在研",
              title: "Lerociclib",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "曲氟尿苷&盐酸替吡拉西",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DS 8273",
            },
          },
          {
            date: 2016,
            event: {
              label: "百时美施贵宝",
              phase: "临床1/2期",
              status: "在研",
              title: "BMS-986178",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Merestinib",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "马赛替尼",
            },
          },
          {
            date: 2016,
            event: {
              label: "Advaxis, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "Axalimogene filolisbac",
            },
          },
          {
            date: 2016,
            event: {
              label: "Bellicum Pharmaceuticals",
              phase: "临床1/2期",
              status: "在研",
              title: "BPX 701",
            },
          },
          {
            date: 2016,
            event: {
              label: "德国默克",
              phase: "临床2期",
              status: "在研",
              title: "Tepotinib",
            },
          },
          {
            date: 2016,
            event: {
              label: "礼来",
              phase: "临床2期",
              status: "在研",
              title: "Prexasertib",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Prexigebersen",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MK-8353",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MVT 5873",
            },
          },
          {
            date: 2016,
            event: {
              label: "第一三共",
              phase: "临床1期",
              status: "在研",
              title: "DS 3201b",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Azacitadine",
            },
          },
          {
            date: 2016,
            event: {
              label: "泽璟生物制药",
              phase: "临床3期",
              status: "在研",
              title: "Donafenib",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MV NIS",
            },
          },
          {
            date: 2016,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "Tapotoclax",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "BVAC C",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Poly-ICLC",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NEO PV 01",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "阿霉素脂质体",
            },
          },
          {
            date: 2016,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MPI 5017",
            },
          },
          {
            date: 2016,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "TQ-B3234",
            },
          },
        ],
        [
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DNT cells",
            },
          },
          {
            date: 2017,
            event: {
              label: "拜耳医药保健有限公司",
              phase: "临床3期",
              status: "在研",
              title: "Copanlisib",
            },
          },
          {
            date: 2017,
            event: {
              label: "恒瑞医药",
              phase: "临床3期",
              status: "在研",
              title: "Pyrotinib",
            },
          },
          {
            date: 2017,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG 673",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "P BCMA 101",
            },
          },
          {
            date: 2017,
            event: {
              label: "Moderna",
              phase: "临床1/2期",
              status: "在研",
              title: "mRNA-2416",
            },
          },
          {
            date: 2017,
            event: {
              label: "百时美施贵宝",
              phase: "临床1期",
              status: "在研",
              title: "Lirilumab",
            },
          },
          {
            date: 2017,
            event: {
              label: "百时美施贵宝,百时美施贵宝",
              phase: "临床3期",
              status: "在研",
              title: "MLN2468",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "APL-101",
            },
          },
          {
            date: 2017,
            event: {
              label: "MILLENNIUM PHARMS",
              phase: "临床3期",
              status: "在研",
              title: "Pevonedistat",
            },
          },
          {
            date: 2017,
            event: {
              label: "齐鲁制药",
              phase: "临床2期",
              status: "在研",
              title: "甲苯磺酸赛拉替尼",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "UCART 123",
            },
          },
          {
            date: 2017,
            event: {
              label: "ONCOPEPTIDES AB",
              phase: "临床3期",
              status: "在研",
              title: "Melphalan flufenamide",
            },
          },
          {
            date: 2017,
            event: {
              label: "AnewPharma",
              phase: "临床3期",
              status: "在研",
              title: "CM082",
            },
          },
          {
            date: 2017,
            event: {
              label: "辉瑞",
              phase: "临床1期",
              status: "在研",
              title: "PF 06804103",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PCUR 101",
            },
          },
          {
            date: 2017,
            event: {
              label: "湖南方盛制药股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "迪安替康钠",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "SERABELISIB",
            },
          },
          {
            date: 2017,
            event: {
              label: "Adaptimmune Therapeutics plc",
              phase: "临床1期",
              status: "在研",
              title: "Alpha Fetoprotein T-cell therapies",
            },
          },
          {
            date: 2017,
            event: {
              label: "上海张江生物技术有限公司",
              phase: "临床3期",
              status: "在研",
              title: "抗EGFR单克隆抗体(重组;人鼠嵌合)",
            },
          },
          {
            date: 2017,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "Miptenalimab",
            },
          },
          {
            date: 2017,
            event: {
              label: "葛兰素史克",
              phase: "批准上市",
              status: "上市",
              title: "罗拉吡坦",
            },
          },
          {
            date: 2017,
            event: {
              label: "罗氏",
              phase: "临床2期",
              status: "在研",
              title: "simlukafusp alfa",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "HER2 BATs",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Tirapazamine",
            },
          },
          {
            date: 2017,
            event: {
              label: "Deciphera",
              phase: "临床1/2期",
              status: "在研",
              title: "Vimseltinib",
            },
          },
          {
            date: 2017,
            event: {
              label: "浙江医药",
              phase: "临床1期",
              status: "在研",
              title: "XCCS605B",
            },
          },
          {
            date: 2017,
            event: {
              label: "宝船生物医药,桂林三金药业股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "CDP1[抗EGFR单克隆抗体(重组;人鼠嵌合)]",
            },
          },
          {
            date: 2017,
            event: {
              label: "GENENTECH",
              phase: "临床1期",
              status: "在研",
              title: "Cevostamab",
            },
          },
          {
            date: 2017,
            event: {
              label: "艾伯维",
              phase: "临床1期",
              status: "在研",
              title: "Eftozanermin alfa",
            },
          },
          {
            date: 2017,
            event: {
              label: "嘉和生物药业",
              phase: "临床3期",
              status: "在研",
              title: "GB222",
            },
          },
          {
            date: 2017,
            event: {
              label: "阿斯利康",
              phase: "批准上市",
              status: "上市",
              title: "阿可替尼",
            },
          },
          {
            date: 2017,
            event: {
              label: "Denovo Biopharma LLC",
              phase: "临床3期",
              status: "在研",
              title: "Enzastaurin Hydrochloride",
            },
          },
          {
            date: 2017,
            event: {
              label: "德国默克",
              phase: "临床1期",
              status: "在研",
              title: "M 8891",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD30 CAR-T细胞",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Marizomib",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CivaSheet",
            },
          },
          {
            date: 2017,
            event: {
              label: "百时美施贵宝",
              phase: "临床1/2期",
              status: "在研",
              title: "BMS-986249",
            },
          },
          {
            date: 2017,
            event: {
              label: "第一三共",
              phase: "临床1期",
              status: "在研",
              title: "AB 329",
            },
          },
          {
            date: 2017,
            event: {
              label: "罗氏",
              phase: "临床2期",
              status: "在研",
              title: "Idasanutlin",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CYAD 01",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "二盐酸考泮利司",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "ONC201",
            },
          },
          {
            date: 2017,
            event: {
              label: "Takara Bio Inc.",
              phase: "临床2期",
              status: "在研",
              title: "Canerpaturev",
            },
          },
          {
            date: 2017,
            event: {
              label: "百时美施贵宝",
              phase: "临床1/2期",
              status: "在研",
              title: "BMS-986218",
            },
          },
          {
            date: 2017,
            event: {
              label: "Sumitomo Dainippon Pharma Oncology, Inc",
              phase: "临床2期",
              status: "在研",
              title: "DSP 7888",
            },
          },
          {
            date: 2017,
            event: {
              label: "默克",
              phase: "批准上市",
              status: "上市",
              title: "阿维鲁单抗",
            },
          },
          {
            date: 2017,
            event: {
              label: "MILLENNIUM PHARMS",
              phase: "临床2期",
              status: "在研",
              title: "TAK-659",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Zenocutuzumab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Miransertib",
            },
          },
          {
            date: 2017,
            event: {
              label: "勃林格殷格翰,阿斯利康",
              phase: "临床3期",
              status: "在研",
              title: "曲美木单抗",
            },
          },
          {
            date: 2017,
            event: {
              label: "Amphivena Therapeutics, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "AMV 564",
            },
          },
          {
            date: 2017,
            event: {
              label: "H3 Biomedicine Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "H3B-6545",
            },
          },
          {
            date: 2017,
            event: {
              label: "罗氏",
              phase: "临床1期",
              status: "在研",
              title: "Glofitamab",
            },
          },
          {
            date: 2017,
            event: {
              label: "Mersana",
              phase: "临床1/2期",
              status: "在研",
              title: "Upifitamab rilsodotin",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TTI-101",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Maveropepimut S",
            },
          },
          {
            date: 2017,
            event: {
              label: "百时美施贵宝",
              phase: "临床3期",
              status: "在研",
              title: "Linrodostat",
            },
          },
          {
            date: 2017,
            event: {
              label: "Menarini International Operations Luxembourg S.A.",
              phase: "临床1/2期",
              status: "在研",
              title: "MEN 1703",
            },
          },
          {
            date: 2017,
            event: {
              label: "辉瑞制药",
              phase: "批准上市",
              status: "上市",
              title: "伊珠单抗奥加米星",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "GTB 3550",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "马来酸奈拉替尼",
            },
          },
          {
            date: 2017,
            event: {
              label: "Plexxikon",
              phase: "临床1/2期",
              status: "在研",
              title: "PLX2853",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "TG4010",
            },
          },
          {
            date: 2017,
            event: {
              label: "百时美施贵宝,百时美施贵宝",
              phase: "临床3期",
              status: "在研",
              title: "Ipilimumab&Nivolumab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Anetumab Ravtansine",
            },
          },
          {
            date: 2017,
            event: {
              label: "Fate Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "FATE NK100",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Utomilumab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Cosibelimab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Pafolacianine",
            },
          },
          {
            date: 2017,
            event: {
              label: "百时美施贵宝",
              phase: "临床2期",
              status: "在研",
              title: "Cabiralizumab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "间充质干细胞(异体)",
            },
          },
          {
            date: 2017,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "TNO155",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ACIT 1",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Zelavespib",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Bemcentinib",
            },
          },
          {
            date: 2017,
            event: {
              label: "SPECTRUM PHARMS",
              phase: "临床3期",
              status: "在研",
              title: "Qapzola",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "DC/AML Fusion Vaccine",
            },
          },
          {
            date: 2017,
            event: {
              label: "阿斯利康",
              phase: "临床1/2期",
              status: "在研",
              title: "AZD 5991",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "(vic-)trastuzumab duocarmazine",
            },
          },
          {
            date: 2017,
            event: {
              label: "STEBA Biotech S.A",
              phase: "批准上市",
              status: "上市",
              title: "帕利泊芬二钾",
            },
          },
          {
            date: 2017,
            event: {
              label: "武田制药",
              phase: "批准上市",
              status: "上市",
              title: "Brigatinib",
            },
          },
          {
            date: 2017,
            event: {
              label: "辉瑞制药",
              phase: "批准上市",
              status: "上市",
              title: "培美曲塞氨丁三醇",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "MB 106",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "EGFR CAR-T cell",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "EGFRt/BCMA-41BBz CAR T cell",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Plasmodium immunotherapy for cancer",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "来曲唑&琥珀酸瑞波西利",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SPL 108",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Emavusertib",
            },
          },
          {
            date: 2017,
            event: {
              label: "Advaxis, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "ADXS NEO",
            },
          },
          {
            date: 2017,
            event: {
              label: "诺华",
              phase: "临床2期",
              status: "在研",
              title: "Taminadenant",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "IMC CS4",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "[177Lu]edotreotide",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "KB004",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "KITE 585",
            },
          },
          {
            date: 2017,
            event: {
              label: "海正药业",
              phase: "临床1期",
              status: "在研",
              title: "海博非明",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Pegloprastide",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "阿贝西利",
            },
          },
          {
            date: 2017,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "Pavurutamab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "AZD 2811",
            },
          },
          {
            date: 2017,
            event: {
              label: "Autolus Limited",
              phase: "临床1/2期",
              status: "在研",
              title: "AUTO 3",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Epacadostat",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SF 1126",
            },
          },
          {
            date: 2017,
            event: {
              label: "拜耳",
              phase: "临床3期",
              status: "在研",
              title: "Vilaprisan",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Minnelide",
            },
          },
          {
            date: 2017,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 891065",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Annamycin",
            },
          },
          {
            date: 2017,
            event: {
              label: "Symphogen A/S",
              phase: "临床1期",
              status: "在研",
              title: "Sym021",
            },
          },
          {
            date: 2017,
            event: {
              label: "MILLENNIUM PHARMS",
              phase: "临床1/2期",
              status: "在研",
              title: "Modakafusp alfa",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "司美替尼",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Poly ICLC",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "米哚妥林",
            },
          },
          {
            date: 2017,
            event: {
              label: "葛兰素史克",
              phase: "临床3期",
              status: "在研",
              title: "BNT 113",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Tesetaxel",
            },
          },
          {
            date: 2017,
            event: {
              label: "上海医药",
              phase: "临床1期",
              status: "在研",
              title: "B001",
            },
          },
          {
            date: 2017,
            event: {
              label: "韬略生物,精华制药集团股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "倍他替尼",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "GM-CSF vaccine",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "BLS-ILB-E710c",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MK 2118",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Fecal Microbial Transplant",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Glutaminase Inhibitor CB-839",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MP 0274",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RAK细胞(自体)",
            },
          },
          {
            date: 2017,
            event: {
              label: "一心制药",
              phase: "临床1期",
              status: "在研",
              title: "曲氟尿苷嘧啶",
            },
          },
          {
            date: 2017,
            event: {
              label: "Apexigen, Inc.",
              phase: "临床2期",
              status: "在研",
              title: "Sotigalimab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "V3 P",
            },
          },
          {
            date: 2017,
            event: {
              label: "MILLENNIUM PHARMS",
              phase: "批准上市",
              status: "上市",
              title: "伊沙佐米",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "GI 4000",
            },
          },
          {
            date: 2017,
            event: {
              label: "罗氏",
              phase: "临床1期",
              status: "在研",
              title: "RO6874281",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Alteminostat",
            },
          },
          {
            date: 2017,
            event: {
              label: "Helsinn",
              phase: "批准上市",
              status: "上市",
              title: "氮芥",
            },
          },
          {
            date: 2017,
            event: {
              label: "罗氏",
              phase: "临床3期",
              status: "在研",
              title: "Ipatasertib",
            },
          },
          {
            date: 2017,
            event: {
              label: "深圳宾德生物技术有限公司",
              phase: "临床1/2期",
              status: "在研",
              title: "BinD 19",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "甲磺酸伊那尼布",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "PG 2",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Olinvacimab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "BLEX404",
            },
          },
          {
            date: 2017,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG 757",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Icaritin",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Pexastimogene devacirepvec",
            },
          },
          {
            date: 2017,
            event: {
              label: "新基",
              phase: "临床1/2期",
              status: "在研",
              title: "CC-92480",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Cytokine-Induced Killer Cells",
            },
          },
          {
            date: 2017,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "[177Lu]奥索瑞肽镥",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "IMGN 632",
            },
          },
          {
            date: 2017,
            event: {
              label: "Takara Bio Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "Mipetresgene autoleucel",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "SV BR 1 GM cancer vaccine",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "吉妥珠单抗奥加米星",
            },
          },
          {
            date: 2017,
            event: {
              label: "Iovance",
              phase: "临床2期",
              status: "在研",
              title: "LN-145",
            },
          },
          {
            date: 2017,
            event: {
              label: "海正药业",
              phase: "临床1期",
              status: "在研",
              title: "Firtecan pegol",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "度伐利尤单抗",
            },
          },
          {
            date: 2017,
            event: {
              label: "Ono Pharmaceutical Co., Ltd.",
              phase: "临床1/2期",
              status: "在研",
              title: "ONO-7475",
            },
          },
          {
            date: 2017,
            event: {
              label: "Tesaro, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "Encelimab",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ACTR 707",
            },
          },
          {
            date: 2017,
            event: {
              label: "北京浦润奥生物科技有限责任公司",
              phase: "临床1期",
              status: "在研",
              title: "PLB1003",
            },
          },
          {
            date: 2017,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "甲苯磺酸尼拉帕利",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "B-MAD",
            },
          },
          {
            date: 2017,
            event: {
              label: "ICHNOS",
              phase: "临床1/2期",
              status: "在研",
              title: "ISB 1342",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Tavokinogene telseplasmid",
            },
          },
          {
            date: 2017,
            event: {
              label: "葛兰素史克",
              phase: "批准上市",
              status: "上市",
              title: "尼拉帕利",
            },
          },
          {
            date: 2017,
            event: {
              label: "Adaptimmune Therapeutics plc",
              phase: "临床1期",
              status: "在研",
              title: "Autologous genetically modified MAGE-A4ᶜ¹º³²T cells",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "[89Zr]ipilimumab",
            },
          },
          {
            date: 2017,
            event: {
              label: "Syneos Health, LLC",
              phase: "临床2期",
              status: "在研",
              title: "Suratadenoturev",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Ulocuplumab",
            },
          },
          {
            date: 2017,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG-596",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CAR-T细胞",
            },
          },
          {
            date: 2017,
            event: {
              label: "Fujifilm Pharmaceuticals U.S.A., Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "FF-10101-01",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "甲磺酸奈非那韦",
            },
          },
          {
            date: 2017,
            event: {
              label: "Y-mAbs Therapeutics",
              phase: "临床2/3期",
              status: "在研",
              title: "Omburtamab I-131",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PBF 1129",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Remetinostat",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TG02",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TBX 3400",
            },
          },
          {
            date: 2017,
            event: {
              label: "EUSA Pharma (Netherlands) B.V.",
              phase: "批准上市",
              status: "上市",
              title: "替伏扎尼",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "IM19 CAR-T cell therapy",
            },
          },
          {
            date: 2017,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Dendritic cell-activated cytokine-induced killer cells",
            },
          },
          {
            date: 2017,
            event: {
              label: "ALTEOGEN",
              phase: "临床1期",
              status: "在研",
              title: "ALT-P7",
            },
          },
        ],
        [
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "COMPOUND 2055269",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "V3 MOMMO",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MT 3724",
            },
          },
          {
            date: 2018,
            event: {
              label: "海南越康生物医药有限公司",
              phase: "临床1期",
              status: "在研",
              title: "YK-029A",
            },
          },
          {
            date: 2018,
            event: {
              label: "艾伯维",
              phase: "临床1期",
              status: "在研",
              title: "ABBV-011",
            },
          },
          {
            date: 2018,
            event: {
              label: "百时美施贵宝",
              phase: "临床1/2期",
              status: "在研",
              title: "BMS-986258",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GEM 333",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CT-001 (UM171) expanded cord blood",
            },
          },
          {
            date: 2018,
            event: {
              label: "豪森药业",
              phase: "临床3期",
              status: "在研",
              title: "甲磺酸奥美替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "TG Therapeutics, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "TG1701",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "LHRH Agonist",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CDX 301",
            },
          },
          {
            date: 2018,
            event: {
              label: "百时美施贵宝",
              phase: "临床1期",
              status: "在研",
              title: "BMS-986299",
            },
          },
          {
            date: 2018,
            event: {
              label: "复创医药",
              phase: "临床1期",
              status: "在研",
              title: "FCN-411",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Compound 121564",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TT-00420",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Bisthianostat",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TriMix",
            },
          },
          {
            date: 2018,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "Onametostat",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MK 5890",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Ocoxin-Viusid",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "子宫颈癌疫苗",
            },
          },
          {
            date: 2018,
            event: {
              label: "皮尔法伯",
              phase: "批准上市",
              status: "上市",
              title: "奈拉替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "GENENTECH",
              phase: "临床1期",
              status: "在研",
              title: "DHES0815A",
            },
          },
          {
            date: 2018,
            event: {
              label: "Bavarian Nordic",
              phase: "临床2期",
              status: "在研",
              title: "BN-Brachyury",
            },
          },
          {
            date: 2018,
            event: {
              label: "Aivita Biomedical, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "AV MEL 1",
            },
          },
          {
            date: 2018,
            event: {
              label: "AGIOS",
              phase: "临床1期",
              status: "在研",
              title: "AG 270",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CTL 119",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Autologous dendritic cell vaccine",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "甲苯磺酸他佐帕利",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "SGM 101",
            },
          },
          {
            date: 2018,
            event: {
              label: "Bellicum Pharmaceuticals",
              phase: "临床2/3期",
              status: "在研",
              title: "Rivogenlecleucel",
            },
          },
          {
            date: 2018,
            event: {
              label: "Allist Pharmaceuticals, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "Alflutinib Mesylate",
            },
          },
          {
            date: 2018,
            event: {
              label: "吉利德",
              phase: "批准上市",
              status: "上市",
              title: "阿基仑赛",
            },
          },
          {
            date: 2018,
            event: {
              label:
                "中国人民解放军军事医学科学院生物工程研究所,上海赛伦生物技术股份有限公司",
              phase: "其他",
              status: "在研",
              title: "抗EGFR单克隆抗体(重组;全人源)",
            },
          },
          {
            date: 2018,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-95251",
            },
          },
          {
            date: 2018,
            event: {
              label: "德国默克",
              phase: "临床1/2期",
              status: "在研",
              title: "Peposertib",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "德卫利昔",
            },
          },
          {
            date: 2018,
            event: {
              label: "Onxeo",
              phase: "临床1期",
              status: "在研",
              title: "Etidaligide",
            },
          },
          {
            date: 2018,
            event: {
              label: "浙江特瑞思药业股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "抗CD20单克隆抗体-MMAE偶联剂(重组)",
            },
          },
          {
            date: 2018,
            event: {
              label: "拜耳",
              phase: "临床1期",
              status: "在研",
              title: "Thorium (227Th) anetumab corixetan",
            },
          },
          {
            date: 2018,
            event: {
              label: "AAA",
              phase: "临床1/2期",
              status: "在研",
              title: "[177Lu]PSMA-R2",
            },
          },
          {
            date: 2018,
            event: {
              label: "拜耳",
              phase: "临床1期",
              status: "在研",
              title: "BAY2315497",
            },
          },
          {
            date: 2018,
            event: {
              label: "思路迪药业",
              phase: "临床3期",
              status: "在研",
              title: "Gemcitabine&oxaliplatin",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CCT301 59",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "GB201",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Onivyde",
            },
          },
          {
            date: 2018,
            event: {
              label: "百时美施贵宝",
              phase: "临床2/3期",
              status: "在研",
              title: "Relatlimab",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "抗PD-1单克隆抗体(重组;人源化)",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Zeteletinib",
            },
          },
          {
            date: 2018,
            event: {
              label: "再生元",
              phase: "临床1/2期",
              status: "在研",
              title: "REGN5458",
            },
          },
          {
            date: 2018,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG-427",
            },
          },
          {
            date: 2018,
            event: {
              label: "百奥泰",
              phase: "临床1期",
              status: "在研",
              title: "抗CD20人源化单克隆抗体(重组;Fc糖基化修饰)",
            },
          },
          {
            date: 2018,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床3期",
              status: "在研",
              title: "Anlotinib",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Immune Killer Cells",
            },
          },
          {
            date: 2018,
            event: {
              label: "信达生物,信达生物",
              phase: "临床1期",
              status: "在研",
              title:
                "抗肿瘤坏死因子受体超家族成员4(OX40)单克隆抗体(重组;全人源)",
            },
          },
          {
            date: 2018,
            event: {
              label: "再生元",
              phase: "临床1/2期",
              status: "在研",
              title: "REGN 4018",
            },
          },
          {
            date: 2018,
            event: {
              label: "Green Cross Corporation",
              phase: "临床1/2期",
              status: "在研",
              title: "GC1118",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Avotaciclib",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "硫酸拉罗替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "百时美施贵宝",
              phase: "临床2期",
              status: "在研",
              title: "BMS-986213",
            },
          },
          {
            date: 2018,
            event: {
              label: "Hutchison Medipharma (HK) Investment Limited",
              phase: "批准上市",
              status: "上市",
              title: "呋喹替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "植入用阿霉素",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Imifoplatin",
            },
          },
          {
            date: 2018,
            event: {
              label: "亿腾药业（泰州）有限公司",
              phase: "临床1期",
              status: "在研",
              title: "EOC317",
            },
          },
          {
            date: 2018,
            event: {
              label: "恒瑞医药",
              phase: "临床1/2期",
              status: "在研",
              title: "SHR2554",
            },
          },
          {
            date: 2018,
            event: {
              label: "杭州民生药业有限公司",
              phase: "临床1期",
              status: "在研",
              title: "NL-101",
            },
          },
          {
            date: 2018,
            event: {
              label: "Rhizen Pharmaceuticals SA",
              phase: "临床2期",
              status: "在研",
              title: "Tenalisib",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Ixazomib&Lenalidomide&Dexamethasone",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Arfolitixorin",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Lirametostat",
            },
          },
          {
            date: 2018,
            event: {
              label: "Menarini International Operations Luxembourg S.A.",
              phase: "临床1期",
              status: "在研",
              title: "MEN 1309",
            },
          },
          {
            date: 2018,
            event: {
              label: "海南海灵化学制药有限公司",
              phase: "临床1期",
              status: "在研",
              title: "Hemay102",
            },
          },
          {
            date: 2018,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG 562",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RF-A089",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Zandelisib",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Stenoparib",
            },
          },
          {
            date: 2018,
            event: {
              label: "众生药业",
              phase: "临床1期",
              status: "在研",
              title: "ZSP1602",
            },
          },
          {
            date: 2018,
            event: {
              label: "HELSINN HLTHCARE",
              phase: "临床3期",
              status: "在研",
              title: "Anamorelin",
            },
          },
          {
            date: 2018,
            event: {
              label: "Moderna",
              phase: "临床1期",
              status: "在研",
              title: "mRNA-2752",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "GEN 009",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "DM-CHOC-PEN",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SCB 313",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "rhIL-7-hyFc",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ZKAB001[抗PD-L1单克隆抗体(重组;全人源)]",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "HG146",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "doxorubicin&MNA",
            },
          },
          {
            date: 2018,
            event: {
              label: "GTHX",
              phase: "临床1期",
              status: "在研",
              title: "Rintodestrant",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "TAS 102",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Rituximab&Hyaluronidase Human",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "VT EBV",
            },
          },
          {
            date: 2018,
            event: {
              label: "Juno Therapeutics",
              phase: "临床1/2期",
              status: "在研",
              title: "Orvacabtagene autoleucel",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SKI G 801",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CPI 100",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "FPA144",
            },
          },
          {
            date: 2018,
            event: {
              label: "阿斯利康",
              phase: "临床1期",
              status: "在研",
              title: "AZD1390",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MAX 40279",
            },
          },
          {
            date: 2018,
            event: {
              label: "新基",
              phase: "临床3期",
              status: "在研",
              title: "Idecabtagene vicleucel",
            },
          },
          {
            date: 2018,
            event: {
              label: "再生元",
              phase: "临床3期",
              status: "在研",
              title: "REGN28",
            },
          },
          {
            date: 2018,
            event: {
              label: "扬子江药业",
              phase: "临床1期",
              status: "在研",
              title: "YZJ-0318马来酸盐",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "6MHP",
            },
          },
          {
            date: 2018,
            event: {
              label: "Legend Biotech",
              phase: "临床2期",
              status: "在研",
              title: "Ciltacabtagene autoleucel",
            },
          },
          {
            date: 2018,
            event: {
              label: "交联药物,上海医药",
              phase: "临床1期",
              status: "在研",
              title: "抗HER2单克隆抗体(重组;人源化_组合物)",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GPA TriMAR T cell therapy",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "普克鲁胺",
            },
          },
          {
            date: 2018,
            event: {
              label: "和记黄埔医药",
              phase: "临床3期",
              status: "在研",
              title: "琥珀酸依吡替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "CS1001",
            },
          },
          {
            date: 2018,
            event: {
              label: "武田制药",
              phase: "临床1/2期",
              status: "在研",
              title: "Subasumstat",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Foslinanib",
            },
          },
          {
            date: 2018,
            event: {
              label: "QED Therapeutics",
              phase: "临床3期",
              status: "在研",
              title: "Infigratinib",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "胃癌疫苗",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "淋巴细胞(扩增活化)",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "V3 OVA",
            },
          },
          {
            date: 2018,
            event: {
              label: "卫材",
              phase: "批准上市",
              status: "上市",
              title: "仑伐替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "振东制药",
              phase: "临床1期",
              status: "在研",
              title: "拉洛他赛",
            },
          },
          {
            date: 2018,
            event: {
              label: "Ipsen",
              phase: "临床1/2期",
              status: "在研",
              title: "[177Lu]3BP-227",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Racemetyrosine",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EGFR-TK Inhibitor",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CYAD 101",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NBM BMX",
            },
          },
          {
            date: 2018,
            event: {
              label: "PROGENICS PHARMS",
              phase: "临床3期",
              status: "在研",
              title: "[18F]DCFPyL",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "HPN 424",
            },
          },
          {
            date: 2018,
            event: {
              label: "北京呈诺医学科技有限公司",
              phase: "临床1期",
              status: "在研",
              title: "Anti-mesothelin CAR-NK cell",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ABTL 0812",
            },
          },
          {
            date: 2018,
            event: {
              label: "RADIUS PHARMS",
              phase: "临床3期",
              status: "在研",
              title: "Elacestrant",
            },
          },
          {
            date: 2018,
            event: {
              label: "MacroGenics",
              phase: "临床1期",
              status: "在研",
              title: "MGD019",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RiMO 301",
            },
          },
          {
            date: 2018,
            event: {
              label: "Ayala Pharmaceuticals, Inc.",
              phase: "临床2期",
              status: "在研",
              title: "AL 101",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "左亚叶酸",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "LCAR-B38M CAR-T细胞",
            },
          },
          {
            date: 2018,
            event: {
              label: "MacroGenics",
              phase: "临床1/2期",
              status: "在研",
              title: "MGD007",
            },
          },
          {
            date: 2018,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 905677",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "T-DM1",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "KPG 121",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Ceralasertib",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "帕西妥莫单抗",
            },
          },
          {
            date: 2018,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 907828",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Inbakicept",
            },
          },
          {
            date: 2018,
            event: {
              label: "MediGene AG",
              phase: "临床1/2期",
              status: "在研",
              title: "MDG 1011",
            },
          },
          {
            date: 2018,
            event: {
              label: "LION TCR PTE.LTD.",
              phase: "临床1/2期",
              status: "在研",
              title: "HBV specific TCR redirected T-cell therapy",
            },
          },
          {
            date: 2018,
            event: {
              label: "赛诺菲",
              phase: "临床1/2期",
              status: "在研",
              title: "SAR-440234",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Zorifertinib",
            },
          },
          {
            date: 2018,
            event: {
              label: "安斯泰来制药",
              phase: "临床3期",
              status: "在研",
              title: "Zolbetuximab",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Lenalidomide-Dexamethasone-DLI",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Nidanilimab",
            },
          },
          {
            date: 2018,
            event: {
              label: "Zeria Pharmaceutical",
              phase: "临床3期",
              status: "在研",
              title: "Z 100",
            },
          },
          {
            date: 2018,
            event: {
              label: "Five Prime Therapeutics, Inc.",
              phase: "临床2期",
              status: "在研",
              title: "Bemarituzumab",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Bexmarilimab",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "FS 118",
            },
          },
          {
            date: 2018,
            event: {
              label: "艾伯维",
              phase: "临床2期",
              status: "在研",
              title: "Telisotuzumab vedotin",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "DKN 01",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GZ 17",
            },
          },
          {
            date: 2018,
            event: {
              label: "新基",
              phase: "临床2/3期",
              status: "在研",
              title: "Gene-modified (GM) T cell",
            },
          },
          {
            date: 2018,
            event: {
              label: "浙江博生医药有限公司",
              phase: "临床1期",
              status: "在研",
              title: "ES072",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ZN-c5",
            },
          },
          {
            date: 2018,
            event: {
              label: "Haimen Pharma,再鼎医药",
              phase: "临床1期",
              status: "在研",
              title: "ZL-2302",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "恩考芬尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "北京呈诺医学科技有限公司",
              phase: "临床1期",
              status: "在研",
              title: "PSMA CART-NK cell",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "VSV-IFNβ-NIS",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CA 102 N",
            },
          },
          {
            date: 2018,
            event: {
              label: "RADIOMEDIX",
              phase: "临床1期",
              status: "在研",
              title: "AlphaMedix",
            },
          },
          {
            date: 2018,
            event: {
              label: "南京优科生物医药股份有限公司",
              phase: "临床3期",
              status: "在研",
              title: "GB241[抗CD20单克隆抗体(重组;人鼠嵌合)]",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TTI 622",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Blood-stage infection of P.vivax",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞",
              phase: "批准上市",
              status: "上市",
              title: "贝美替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "HQ",
            },
          },
          {
            date: 2018,
            event: {
              label: "4D Pharma PLC",
              phase: "临床1/2期",
              status: "在研",
              title: "MRx 518",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "伊立替康硫糖酯",
            },
          },
          {
            date: 2018,
            event: {
              label: "Xynomic Pharmaceuticals, Inc.",
              phase: "临床2期",
              status: "在研",
              title: "Abexinostat",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞",
              phase: "临床1期",
              status: "在研",
              title: "PF-06821497",
            },
          },
          {
            date: 2018,
            event: {
              label: "Sumitomo Dainippon Pharma Oncology, Inc",
              phase: "临床1/2期",
              status: "在研",
              title: "DSP 0509",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "INBRX 109",
            },
          },
          {
            date: 2018,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-93269",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "EBV TCR-T细胞",
            },
          },
          {
            date: 2018,
            event: {
              label: "阿斯利康",
              phase: "临床1期",
              status: "在研",
              title: "MEDI 2228",
            },
          },
          {
            date: 2018,
            event: {
              label: "Precision BioSciences, Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "PBCAR 0191",
            },
          },
          {
            date: 2018,
            event: {
              label: "爵士制药",
              phase: "批准上市",
              status: "上市",
              title: "盐酸柔红霉素&阿糖胞苷",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞",
              phase: "临床1期",
              status: "在研",
              title: "PF-06936308",
            },
          },
          {
            date: 2018,
            event: {
              label: "SpringWorks",
              phase: "临床3期",
              status: "在研",
              title: "Nirogacestat",
            },
          },
          {
            date: 2018,
            event: {
              label: "君实生物",
              phase: "批准上市",
              status: "上市",
              title: "特瑞普利单抗",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Varlilumab",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ZN e4",
            },
          },
          {
            date: 2018,
            event: {
              label: "Autolus Limited",
              phase: "临床1/2期",
              status: "在研",
              title: "AUTO 4",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Cavrotolimod",
            },
          },
          {
            date: 2018,
            event: {
              label: "Orion Corporation Orion Pharma",
              phase: "临床1/2期",
              status: "在研",
              title: "ODM 208",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Nanatinostat",
            },
          },
          {
            date: 2018,
            event: {
              label: "BioSyngen Pte Ltd",
              phase: "临床1/2期",
              status: "在研",
              title: "BSG 001",
            },
          },
          {
            date: 2018,
            event: {
              label: "勃林格殷格翰",
              phase: "临床2期",
              status: "在研",
              title: "Xentuzumab",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "艾伏尼布",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "VXM01",
            },
          },
          {
            date: 2018,
            event: {
              label: "再生元",
              phase: "临床1期",
              status: "在研",
              title: "Zirconium",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TAEST 16001",
            },
          },
          {
            date: 2018,
            event: {
              label: "PellePharm, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "Patidegib",
            },
          },
          {
            date: 2018,
            event: {
              label: "百奥泰",
              phase: "临床3期",
              status: "在研",
              title: "BAT8001[抗HER2单克隆抗体-美登素偶联物(重组;人)]",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "[177Lu]vipivotide tetraxetan",
            },
          },
          {
            date: 2018,
            event: {
              label: "JUBILANT DRAXIMAGE",
              phase: "临床2期",
              status: "在研",
              title: "[131I]间碘苄胍",
            },
          },
          {
            date: 2018,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "[131I]碘苄胍",
            },
          },
          {
            date: 2018,
            event: {
              label: "SeaGen, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "SEA BCMA",
            },
          },
          {
            date: 2018,
            event: {
              label: "Antengene Therapeutics Ltd.",
              phase: "临床2期",
              status: "在研",
              title: "Onatasertib",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞制药",
              phase: "批准上市",
              status: "上市",
              title: "达可替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "UV 1",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Tozuleristide",
            },
          },
          {
            date: 2018,
            event: {
              label: "新基",
              phase: "临床3期",
              status: "在研",
              title: "JCAR017",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "VMD 928",
            },
          },
          {
            date: 2018,
            event: {
              label: "Aivita Biomedical, Inc.",
              phase: "临床2期",
              status: "在研",
              title: "AV GBM 1",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "FOR 46",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Seclidemstat",
            },
          },
          {
            date: 2018,
            event: {
              label: "正大天晴,北京赛林泰医药技术有限公司",
              phase: "临床1期",
              status: "在研",
              title: "TQB3456",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "AVX 901",
            },
          },
          {
            date: 2018,
            event: {
              label: "正大制药",
              phase: "批准上市",
              status: "上市",
              title: "盐酸安罗替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "MK-4280",
            },
          },
          {
            date: 2018,
            event: {
              label: "中国科学院上海药物研究所",
              phase: "临床1期",
              status: "在研",
              title: "倍赛诺他",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "AB 110",
            },
          },
          {
            date: 2018,
            event: {
              label: "OBI Pharma, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "Adagloxad simolenin",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DNX-2440",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Fulvestrant&Palbociclib&Goserelin",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CD19 CAR-T细胞(三功能)",
            },
          },
          {
            date: 2018,
            event: {
              label: "嘉和生物药业",
              phase: "临床1期",
              status: "在研",
              title: "抗血管内皮生长因子单克隆抗体(重组;人源化)",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Ilixadencel",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "APVO 436",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "FLOT-A",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TRPH 222",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "MIV 818",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CCS 1477",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MucoLox",
            },
          },
          {
            date: 2018,
            event: {
              label: "海正药业,天广实生物",
              phase: "临床1期",
              status: "在研",
              title: "HS627",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "D-0502",
            },
          },
          {
            date: 2018,
            event: {
              label: "科伦药业",
              phase: "临床3期",
              status: "在研",
              title: "抗表皮生长因子受体(EGFR)单克隆抗体(重组;人鼠嵌合)",
            },
          },
          {
            date: 2018,
            event: {
              label: "Angiochem Inc",
              phase: "临床3期",
              status: "在研",
              title: "Paclitaxel trevatide",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "TG6002",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Aspacytarabine",
            },
          },
          {
            date: 2018,
            event: {
              label: "CORCEPT THERAP",
              phase: "临床1/2期",
              status: "在研",
              title: "Exicorilant",
            },
          },
          {
            date: 2018,
            event: {
              label: "MacroGenics",
              phase: "临床1/2期",
              status: "在研",
              title: "MGC018",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "[68Ga]RM2",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Devimistat",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Daromun",
            },
          },
          {
            date: 2018,
            event: {
              label: "神州细胞工程",
              phase: "临床2期",
              status: "在研",
              title: "抗表皮生长因子受体单克隆抗体(重组;全人源)",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Radspherin",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "[68Ga]P16 093",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "IM21 CAR",
            },
          },
          {
            date: 2018,
            event: {
              label: "四川九章生物化工科技发展有限公司",
              phase: "临床2期",
              status: "在研",
              title: "绿原酸",
            },
          },
          {
            date: 2018,
            event: {
              label: "OBI Pharma, Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "OBI 3424",
            },
          },
          {
            date: 2018,
            event: {
              label: "百济神州",
              phase: "临床2期",
              status: "在研",
              title: "BGB A317",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞",
              phase: "临床3期",
              status: "在研",
              title: "格拉吉布",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "马来酸吡咯替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EDP 1503",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CX 2029",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Matuzumab",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Antiandrogen",
            },
          },
          {
            date: 2018,
            event: {
              label: "勃林格殷格翰",
              phase: "临床2期",
              status: "在研",
              title: "BI 754091",
            },
          },
          {
            date: 2018,
            event: {
              label: "广州誉衡生物科技有限公司",
              phase: "临床2期",
              status: "在研",
              title: "GLS-010",
            },
          },
          {
            date: 2018,
            event: {
              label: "Aadi, LLC",
              phase: "临床2期",
              status: "在研",
              title: "Sirolimus albumin bound",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MK 4830",
            },
          },
          {
            date: 2018,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "Tisagenlecleucel",
            },
          },
          {
            date: 2018,
            event: {
              label: "Endocyte",
              phase: "临床3期",
              status: "在研",
              title: "[177Lu]PSMA-617",
            },
          },
          {
            date: 2018,
            event: {
              label: "INCYTE",
              phase: "临床1期",
              status: "在研",
              title: "INCAGN02390",
            },
          },
          {
            date: 2018,
            event: {
              label: "北京呈诺医学科技有限公司",
              phase: "临床1期",
              status: "在研",
              title: "CD19 CAR NK细胞",
            },
          },
          {
            date: 2018,
            event: {
              label: "东阳光药业",
              phase: "临床1期",
              status: "在研",
              title: "苯磺酸克立福替尼",
            },
          },
          {
            date: 2018,
            event: {
              label: "CSTONE PHARM (HK) HOLDING LIMITED",
              phase: "临床3期",
              status: "在研",
              title: "Sugemalimab",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "INGN 225",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "MB CART20.1",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "STRO 001",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Eftilagimod alpha",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "STRO 002",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "恩替诺特",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Tegavivint",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "DCP 001",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TI 1007",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "GDC-0084",
            },
          },
          {
            date: 2018,
            event: {
              label: "德国默克",
              phase: "临床3期",
              status: "在研",
              title: "M7824",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "IO 102",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "VEGFR/PDGFR Dual Kinase Inhibitor X-82",
            },
          },
          {
            date: 2018,
            event: {
              label: "北京呈诺医学科技有限公司",
              phase: "临床1期",
              status: "在研",
              title: "CD22 CAR NK cell",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RGX 202",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Onvansertib",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Para-Toluenesulfonamide",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞制药",
              phase: "批准上市",
              status: "上市",
              title: "吉妥珠单抗",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Asunercept",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞",
              phase: "临床2期",
              status: "在研",
              title: "Ebvaciclib",
            },
          },
          {
            date: 2018,
            event: {
              label: "辉瑞制药",
              phase: "批准上市",
              status: "上市",
              title: "马来酸格拉德吉",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SGT 53",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Nanosomal Docetaxel",
            },
          },
          {
            date: 2018,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "NZV 930",
            },
          },
          {
            date: 2018,
            event: {
              label: "正大天晴,北京赛林泰医药技术有限公司",
              phase: "临床1期",
              status: "在研",
              title: "TQ-B3233",
            },
          },
          {
            date: 2018,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Uproleselan",
            },
          },
          {
            date: 2018,
            event: {
              label: "拜耳",
              phase: "临床1/2期",
              status: "在研",
              title: "BAY806946",
            },
          },
        ],
        [
          {
            date: 2019,
            event: {
              label: "Precision BioSciences, Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "PBCAR 20A",
            },
          },
          {
            date: 2019,
            event: {
              label: "CSTONE PHARM (HK) HOLDING LIMITED",
              phase: "临床1期",
              status: "在研",
              title: "CS1003单克隆抗体",
            },
          },
          {
            date: 2019,
            event: {
              label: "百时美施贵宝",
              phase: "临床1/2期",
              status: "在研",
              title: "BMS-986288",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Dianhydrogalactitol",
            },
          },
          {
            date: 2019,
            event: {
              label: "正大天晴",
              phase: "临床1期",
              status: "在研",
              title: "TQ-B3804",
            },
          },
          {
            date: 2019,
            event: {
              label: "SeaGen, Inc.",
              phase: "临床2期",
              status: "在研",
              title: "Ladiratuzumab Vedotin",
            },
          },
          {
            date: 2019,
            event: {
              label: "Boryung Pharmaceutical Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "BR 101801",
            },
          },
          {
            date: 2019,
            event: {
              label: "百奥泰",
              phase: "临床2期",
              status: "在研",
              title: "BAT1306[抗PD-1单克隆抗体(重组;人源化)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "AE 37",
            },
          },
          {
            date: 2019,
            event: {
              label: "艾欣达伟医药",
              phase: "临床2期",
              status: "在研",
              title: "AST-3424",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD4 CAR-T细胞",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Hypofractionated WPRT",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ONC-392",
            },
          },
          {
            date: 2019,
            event: {
              label: "天广实生物",
              phase: "临床1期",
              status: "在研",
              title: "MBS301",
            },
          },
          {
            date: 2019,
            event: {
              label: "强生",
              phase: "临床2期",
              status: "在研",
              title: "Cusatuzumab",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SL 279252",
            },
          },
          {
            date: 2019,
            event: {
              label: "KLUS PHARMA INC.",
              phase: "临床1/2期",
              status: "在研",
              title: "SKB264",
            },
          },
          {
            date: 2019,
            event: {
              label: "科济制药",
              phase: "临床1/2期",
              status: "在研",
              title: "CT032[CD19 CAR-T细胞]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD20 CAR-T细胞",
            },
          },
          {
            date: 2019,
            event: {
              label: "赛诺菲",
              phase: "临床3期",
              status: "在研",
              title: "Tusamitamab ravtansine",
            },
          },
          {
            date: 2019,
            event: {
              label: "INNATE PHARMA",
              phase: "临床2期",
              status: "在研",
              title: "Lacutamab",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LBL-007",
            },
          },
          {
            date: 2019,
            event: {
              label: "苏州信诺维医药科技有限公司",
              phase: "临床1期",
              status: "在研",
              title: "XNW 1011",
            },
          },
          {
            date: 2019,
            event: {
              label: "第一三共",
              phase: "临床3期",
              status: "在研",
              title: "DS-8201a",
            },
          },
          {
            date: 2019,
            event: {
              label: "Orion Corporation Orion Pharma",
              phase: "临床1/2期",
              status: "在研",
              title: "ODM-209",
            },
          },
          {
            date: 2019,
            event: {
              label: "诺华",
              phase: "临床2期",
              status: "在研",
              title: "Sabatolimab",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TNB 383B",
            },
          },
          {
            date: 2019,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-61186372",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Gavocabtagene autoleucel",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MyoStrain",
            },
          },
          {
            date: 2019,
            event: {
              label: "武田制药",
              phase: "临床2期",
              status: "在研",
              title: "Mezagitamab",
            },
          },
          {
            date: 2019,
            event: {
              label: "Zenith Epigenetics Ltd.",
              phase: "临床2期",
              status: "在研",
              title: "ZEN003694",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "[177Lu]DOTA-tyr3-OCTREOTATE",
            },
          },
          {
            date: 2019,
            event: {
              label: "信达生物",
              phase: "临床1期",
              status: "在研",
              title: "IBI110",
            },
          },
          {
            date: 2019,
            event: {
              label: "亿一生物医药开发（上海）有限公司",
              phase: "临床1期",
              status: "在研",
              title: "A-319",
            },
          },
          {
            date: 2019,
            event: {
              label: "I-Mab",
              phase: "临床1/2期",
              status: "在研",
              title: "Lemzoparlimab",
            },
          },
          {
            date: 2019,
            event: {
              label: "华兰基因工程有限公司",
              phase: "其他",
              status: "在研",
              title: "WBP299[抗CTLA-4单克隆抗体(重组;全人源)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "AGC Biologics S.p.A.",
              phase: "临床1/2期",
              status: "在研",
              title: "MLM-CAR44.1 T-cells",
            },
          },
          {
            date: 2019,
            event: {
              label: "恒瑞医药,恒瑞医药",
              phase: "临床1期",
              status: "在研",
              title: "SHR-A1201",
            },
          },
          {
            date: 2019,
            event: {
              label: "上海璎黎药业有限公司",
              phase: "临床2期",
              status: "在研",
              title: "Linperlisib",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "glial restricted progenitor cells",
            },
          },
          {
            date: 2019,
            event: {
              label: "Aileron Therapeutics Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "ALRN 6924",
            },
          },
          {
            date: 2019,
            event: {
              label: "Achilles Therapeutics Ltd.",
              phase: "临床1/2期",
              status: "在研",
              title: "ATL 001",
            },
          },
          {
            date: 2019,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "DKY 709",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TRQ 1501",
            },
          },
          {
            date: 2019,
            event: {
              label: "辰欣药业股份有限公司,中国科学院上海药物研究所",
              phase: "临床1期",
              status: "在研",
              title: "CVL218",
            },
          },
          {
            date: 2019,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 1387446",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Geneos Therapeutics",
            },
          },
          {
            date: 2019,
            event: {
              label: "辉瑞",
              phase: "临床1期",
              status: "在研",
              title: "PF 06940434",
            },
          },
          {
            date: 2019,
            event: {
              label: "BLUE EARTH",
              phase: "临床3期",
              status: "在研",
              title: "[18F]rhPSMA",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ARV 110",
            },
          },
          {
            date: 2019,
            event: {
              label: "Agenus Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "AGEN 1181",
            },
          },
          {
            date: 2019,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-67571244",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Talabostat",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "PTC-Pz",
            },
          },
          {
            date: 2019,
            event: {
              label: "荣昌生物",
              phase: "其他",
              status: "在研",
              title: "抗HER3单克隆抗体-MMAE偶联剂(重组;人源化)",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "INXN 2001",
            },
          },
          {
            date: 2019,
            event: {
              label: "AAA",
              phase: "临床1/2期",
              status: "在研",
              title: "[177Lu]NeoB",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Luteinising Hormone Releasing Hormone agonist",
            },
          },
          {
            date: 2019,
            event: {
              label: "CSTONE PHARM (HK) HOLDING LIMITED",
              phase: "临床1/2期",
              status: "在研",
              title: "非索替尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "恒瑞医药",
              phase: "临床1期",
              status: "在研",
              title: "SHR-1501",
            },
          },
          {
            date: 2019,
            event: {
              label: "复星医药",
              phase: "临床1期",
              status: "在研",
              title:
                "FS-1502[抗HER2单克隆抗体-单甲基奥瑞他汀F偶联物(重组;人源化)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "辉瑞制药",
              phase: "批准上市",
              status: "上市",
              title: "他拉唑帕尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CUE 101",
            },
          },
          {
            date: 2019,
            event: {
              label: "再生元",
              phase: "临床1/2期",
              status: "在研",
              title: "REGN5459",
            },
          },
          {
            date: 2019,
            event: {
              label: "赛诺菲",
              phase: "临床2期",
              status: "在研",
              title: "Amcenestrant",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "甲苯磺酸艾贝司他",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GPC3 CAR-T cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "罗氏",
              phase: "临床2/3期",
              status: "在研",
              title: "Inavolisib",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BCMA-CS1 cCAR T cell therapy",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CYAD 02",
            },
          },
          {
            date: 2019,
            event: {
              label: "再生元",
              phase: "临床2期",
              status: "在研",
              title: "Odronextamab",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CYT 0851",
            },
          },
          {
            date: 2019,
            event: {
              label: "兆科（广州）肿瘤药物有限公司",
              phase: "临床3期",
              status: "在研",
              title: "抗PD-L1单克隆抗体(重组;全人源)",
            },
          },
          {
            date: 2019,
            event: {
              label: "强生",
              phase: "临床3期",
              status: "在研",
              title: "JNJ-68284528",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "HPN 536",
            },
          },
          {
            date: 2019,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-99282",
            },
          },
          {
            date: 2019,
            event: {
              label: "ICHNOS",
              phase: "临床1/2期",
              status: "在研",
              title: "HBM 9302",
            },
          },
          {
            date: 2019,
            event: {
              label: "再生元",
              phase: "批准上市",
              status: "上市",
              title: "西普利单抗",
            },
          },
          {
            date: 2019,
            event: {
              label: "TG Therapeutics, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "TG1801",
            },
          },
          {
            date: 2019,
            event: {
              label: "阿斯利康",
              phase: "临床2期",
              status: "在研",
              title: "Imaradenant",
            },
          },
          {
            date: 2019,
            event: {
              label: "新基",
              phase: "临床1/2期",
              status: "在研",
              title: "CC-90010",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "huMNC2",
            },
          },
          {
            date: 2019,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "曲妥珠单抗&透明质酸酶",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BCMA-CD19 cCAR-T cell therapy",
            },
          },
          {
            date: 2019,
            event: {
              label: "罗欣药业",
              phase: "临床1期",
              status: "在研",
              title: "LX-039",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Vopratelimab",
            },
          },
          {
            date: 2019,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "WVT 078",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "HC-1119",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Radgocitabine",
            },
          },
          {
            date: 2019,
            event: {
              label: "Adaptimmune Therapeutics plc",
              phase: "临床2期",
              status: "在研",
              title: "Melanoma-associated antigen A4-specific T-cells",
            },
          },
          {
            date: 2019,
            event: {
              label: "礼来",
              phase: "临床1期",
              status: "在研",
              title: "LY-3475070",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ENB 003",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Murlentamab",
            },
          },
          {
            date: 2019,
            event: {
              label: "绿竹生物制药",
              phase: "临床1期",
              status: "在研",
              title: "K193单克隆抗体",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Bi-specific chimeric antigen receptor T cell therapy",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "111In DOTA h 11B6",
            },
          },
          {
            date: 2019,
            event: {
              label: "拜耳",
              phase: "临床1期",
              status: "在研",
              title: "BAY2701439",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Domatinostat",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Alofanib",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Paxalisib",
            },
          },
          {
            date: 2019,
            event: {
              label: "Alpine Immune Sciences, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "ALPN 202",
            },
          },
          {
            date: 2019,
            event: {
              label: "赛诺菲",
              phase: "临床1期",
              status: "在研",
              title: "SAR-442085",
            },
          },
          {
            date: 2019,
            event: {
              label: "Ascentage Pharma Group Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "Pelcitoclax",
            },
          },
          {
            date: 2019,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-95775",
            },
          },
          {
            date: 2019,
            event: {
              label: "Arcellx, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "Anti B cell maturation antigen-receptor complex T cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "广生堂药业",
              phase: "临床1期",
              status: "在研",
              title: "GST-HG161",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BP 1002",
            },
          },
          {
            date: 2019,
            event: {
              label: "PROGENICS PHARMS",
              phase: "临床2期",
              status: "在研",
              title: "MIP 1095 I",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MILs - NSCLC",
            },
          },
          {
            date: 2019,
            event: {
              label: "IGM Biosciences",
              phase: "临床1期",
              status: "在研",
              title: "IGM-2323",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "KY 1044",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Docetaxel&ritonavir",
            },
          },
          {
            date: 2019,
            event: {
              label: "罗氏",
              phase: "临床1期",
              status: "在研",
              title: "RO7227166",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SER 401",
            },
          },
          {
            date: 2019,
            event: {
              label: "健能隆医药技术（上海）有限公司",
              phase: "临床1期",
              status: "在研",
              title: "抗CD19/CD3双特异性抗体(重组)",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PSMA CART-T cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "贝达药业",
              phase: "临床2/3期",
              status: "在研",
              title: "D-0316",
            },
          },
          {
            date: 2019,
            event: {
              label: "海正药业,天广实生物",
              phase: "临床1期",
              status: "在研",
              title: "HS630[抗HER2单克隆抗体-美登素类偶联物(重组;人源化;DM1)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "VAC 1",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "PD-L1 peptide",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "[225Ac]Lintuzumab",
            },
          },
          {
            date: 2019,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-99712",
            },
          },
          {
            date: 2019,
            event: {
              label: "交联药物,上海医药",
              phase: "临床1期",
              status: "在研",
              title:
                "B003[抗HER2单克隆抗体-美登素类偶联物(重组;人源化;MCC-DM1)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PRGN 3006",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PRGN 3005",
            },
          },
          {
            date: 2019,
            event: {
              label: "CSTONE PHARM (HK) HOLDING LIMITED",
              phase: "临床3期",
              status: "在研",
              title: "CS1003",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "SCT 200",
            },
          },
          {
            date: 2019,
            event: {
              label: "正大天晴",
              phase: "临床3期",
              status: "在研",
              title: "TQB2450",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "锝[99mTc]肼基烟酰胺聚乙二醇双环RGD肽",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "IMP4297",
            },
          },
          {
            date: 2019,
            event: {
              label: "Y-mAbs Therapeutics",
              phase: "临床1/2期",
              status: "在研",
              title: "Nivatrotamab",
            },
          },
          {
            date: 2019,
            event: {
              label: "和誉生物",
              phase: "临床1期",
              status: "在研",
              title: "ABSK021",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CVA 21",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "C-005",
            },
          },
          {
            date: 2019,
            event: {
              label: "康宁杰瑞",
              phase: "临床2期",
              status: "在研",
              title: "KN026",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GPC3-CAR-T cell therapy",
            },
          },
          {
            date: 2019,
            event: {
              label: "Agenus Inc.",
              phase: "临床1期",
              status: "在研",
              title: "AGEN2373",
            },
          },
          {
            date: 2019,
            event: {
              label: "Sorrento Therapeutics",
              phase: "临床2期",
              status: "在研",
              title: "STI-3031",
            },
          },
          {
            date: 2019,
            event: {
              label: "常州千红生化制药股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "QHRD107",
            },
          },
          {
            date: 2019,
            event: {
              label: "再极医药",
              phase: "临床1期",
              status: "在研",
              title: "MAX-40279-01",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Mirvetuximab Soravtansine",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ARV 471",
            },
          },
          {
            date: 2019,
            event: {
              label: "Zymeworks",
              phase: "临床1期",
              status: "在研",
              title: "ZW49",
            },
          },
          {
            date: 2019,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "泽布替尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "诺迈西（上海）医药科技有限公司",
              phase: "临床1/2期",
              status: "在研",
              title: "HH2710",
            },
          },
          {
            date: 2019,
            event: {
              label: "艾伯维",
              phase: "临床1期",
              status: "在研",
              title: "Cofetuzumab pelidotin",
            },
          },
          {
            date: 2019,
            event: {
              label: "上海医药",
              phase: "临床1期",
              status: "在研",
              title: "B 003",
            },
          },
          {
            date: 2019,
            event: {
              label: "Fate Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "FT 516",
            },
          },
          {
            date: 2019,
            event: {
              label: "Allogene Therapeutics, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "ALLO 715",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Tarloxotinib",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SQ 3370",
            },
          },
          {
            date: 2019,
            event: {
              label: "Agenus Inc.",
              phase: "临床2期",
              status: "在研",
              title: "Balstilimab",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "GR1405",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Anti-TnMUC-1 CAR T cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 905681",
            },
          },
          {
            date: 2019,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "YTB323",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "PD-1 blocking antibody",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PV-001-DC",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PV-001-DV",
            },
          },
          {
            date: 2019,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG 160",
            },
          },
          {
            date: 2019,
            event: {
              label: "艾伯维",
              phase: "临床1期",
              status: "在研",
              title: "ABBV 467",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MaaT 033",
            },
          },
          {
            date: 2019,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-63898081",
            },
          },
          {
            date: 2019,
            event: {
              label: "上海美雅珂生物技术有限责任公司",
              phase: "临床1期",
              status: "在研",
              title: "MRG001",
            },
          },
          {
            date: 2019,
            event: {
              label: "罗氏",
              phase: "临床3期",
              status: "在研",
              title: "Polatuzubab Vedotin",
            },
          },
          {
            date: 2019,
            event: {
              label: "Chinook Therapeutics",
              phase: "临床2期",
              status: "在研",
              title: "ADU S100",
            },
          },
          {
            date: 2019,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-67856633",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "haploid allogeneic NK cell therapy",
            },
          },
          {
            date: 2019,
            event: {
              label: "上海明聚生物科技有限公司",
              phase: "临床2期",
              status: "在研",
              title: "Relmacabtagene autoleucel",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "TP-21",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Fadraciclib",
            },
          },
          {
            date: 2019,
            event: {
              label: "广州市香雪制药股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "KX02",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ET140202-T cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "Advaxis, Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "ADXS 503",
            },
          },
          {
            date: 2019,
            event: {
              label: "多禧生物",
              phase: "临床1期",
              status: "在研",
              title: "抗HER2单克隆抗体-Tub114偶联剂(重组;人源化)",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "SNDX 5613",
            },
          },
          {
            date: 2019,
            event: {
              label: "Astex",
              phase: "临床2期",
              status: "在研",
              title: "Cedazuridine/decitabine",
            },
          },
          {
            date: 2019,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 905711",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "MB CART19.1",
            },
          },
          {
            date: 2019,
            event: {
              label: "卫材",
              phase: "临床1期",
              status: "在研",
              title: "E7766",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NBF 006",
            },
          },
          {
            date: 2019,
            event: {
              label: "Sorrento Therapeutics",
              phase: "临床2/3期",
              status: "在研",
              title: "CEA CAR-T细胞",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "SMT 01",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Zr-Df-IAB22M2C",
            },
          },
          {
            date: 2019,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG 420",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "SCT I10A",
            },
          },
          {
            date: 2019,
            event: {
              label: "滨会生物",
              phase: "临床1/2期",
              status: "在研",
              title: "重组人GM-CSF溶瘤II型单纯疱疹病毒(OH2)(Vero细胞)",
            },
          },
          {
            date: 2019,
            event: {
              label: "成都倍特药业有限公司",
              phase: "临床1期",
              status: "在研",
              title: "BT-1053",
            },
          },
          {
            date: 2019,
            event: {
              label: "葛兰素史克",
              phase: "临床2期",
              status: "在研",
              title: "GSK2857916",
            },
          },
          {
            date: 2019,
            event: {
              label: "康宁杰瑞",
              phase: "临床2期",
              status: "在研",
              title: "抗HER2双特异性抗体(重组;人源化)",
            },
          },
          {
            date: 2019,
            event: {
              label: "信达生物",
              phase: "临床1期",
              status: "在研",
              title: "IBI315",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CMN 001",
            },
          },
          {
            date: 2019,
            event: {
              label: "Yiviva Inc.",
              phase: "临床2期",
              status: "在研",
              title: "YIV 906",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PRT 811",
            },
          },
          {
            date: 2019,
            event: {
              label: "武田制药",
              phase: "临床1期",
              status: "在研",
              title: "TAK-169",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "INBRX 106",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "NMS 03592088",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD19 STAR-T细胞",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "DCVAC&OvCa",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Immunopheresis",
            },
          },
          {
            date: 2019,
            event: {
              label: "阿思科力（苏州）生物科技有限公司",
              phase: "临床1/2期",
              status: "在研",
              title: "ROBO1 Specific BiCAR",
            },
          },
          {
            date: 2019,
            event: {
              label: "Bio-Thera Solutions",
              phase: "临床1期",
              status: "在研",
              title: "BAT4306F",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Rezivertinib",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "UCART CS1",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "BCG bladder cancer vaccine",
            },
          },
          {
            date: 2019,
            event: {
              label: "齐鲁制药",
              phase: "临床3期",
              status: "在研",
              title: "WX-0593",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Autologus rapamycin resistant T-cell therapy",
            },
          },
          {
            date: 2019,
            event: {
              label: "FibroGen",
              phase: "临床3期",
              status: "在研",
              title: "Pamrevlumab",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "VE 800",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ABM-1310",
            },
          },
          {
            date: 2019,
            event: {
              label: "Livzon",
              phase: "临床1期",
              status: "在研",
              title: "LZM005[抗HER2单克隆抗体(重组;人源化_结构域II)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "首药控股",
              phase: "临床1期",
              status: "在研",
              title: "CT-3505",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Pexmetinib",
            },
          },
          {
            date: 2019,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床3期",
              status: "在研",
              title: "TQ-B3139",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Oligo Fucoidan",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BNT 115",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "AVA 001",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CXD101",
            },
          },
          {
            date: 2019,
            event: {
              label: "赛诺菲",
              phase: "临床1期",
              status: "在研",
              title: "SAR-441000",
            },
          },
          {
            date: 2019,
            event: {
              label: "阿斯利康",
              phase: "临床1/2期",
              status: "在研",
              title: "AZD 7648",
            },
          },
          {
            date: 2019,
            event: {
              label: "阿思科力（苏州）生物科技有限公司",
              phase: "临床1/2期",
              status: "在研",
              title: "BCMA CAR-NK cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PTX 100",
            },
          },
          {
            date: 2019,
            event: {
              label: "领晟医疗",
              phase: "临床1期",
              status: "在研",
              title: "盐酸领克尼斯",
            },
          },
          {
            date: 2019,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "维汀-珀拉妥珠单抗",
            },
          },
          {
            date: 2019,
            event: {
              label: "阿斯利康",
              phase: "批准上市",
              status: "上市",
              title: "奥希替尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "华健未来",
              phase: "临床1期",
              status: "在研",
              title: "HJ197",
            },
          },
          {
            date: 2019,
            event: {
              label: "MILLENNIUM PHARMS",
              phase: "临床3期",
              status: "在研",
              title: "Mobocertinib",
            },
          },
          {
            date: 2019,
            event: {
              label: "正大天晴,北京赛林泰医药技术有限公司,正大天晴",
              phase: "临床1期",
              status: "在研",
              title: "TQB3455",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD19.t-haNK",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CT053[BCMA CAR-T细胞(全人源)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "[90Y]OTSA 101",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TregGraft",
            },
          },
          {
            date: 2019,
            event: {
              label: "恒瑞医药",
              phase: "批准上市",
              status: "上市",
              title: "卡瑞利珠单抗",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NG 641",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "C-TCR055",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Autologous Multi-lineage Potential Cells",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "OT 82",
            },
          },
          {
            date: 2019,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "TQB3804",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Darovasertib",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BGB 324",
            },
          },
          {
            date: 2019,
            event: {
              label: "Geistlich Pharma AG",
              phase: "临床1/2期",
              status: "在研",
              title: "GP 2250",
            },
          },
          {
            date: 2019,
            event: {
              label: "LAEKNA LIMITED",
              phase: "临床1/2期",
              status: "在研",
              title: "LAE001",
            },
          },
          {
            date: 2019,
            event: {
              label: "礼来",
              phase: "临床1期",
              status: "在研",
              title: "LY3434172",
            },
          },
          {
            date: 2019,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床2期",
              status: "在研",
              title: "TQ-B3101",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Enadenotucirev",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Tumor infiltrating lymphocytes",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PalloV-CC",
            },
          },
          {
            date: 2019,
            event: {
              label: "第一三共",
              phase: "临床2期",
              status: "在研",
              title: "Valemetostat",
            },
          },
          {
            date: 2019,
            event: {
              label: "中国科学院上海药物研究所,上海绿谷制药有限公司",
              phase: "临床2期",
              status: "在研",
              title: "谷美替尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GEM 3 PSCA",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EO 2041",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "SCIB 1",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "DZD9008",
            },
          },
          {
            date: 2019,
            event: {
              label: "贝达药业",
              phase: "临床1期",
              status: "在研",
              title: "BPI-23314",
            },
          },
          {
            date: 2019,
            event: {
              label: "德国默克",
              phase: "临床1期",
              status: "在研",
              title: "M 3258",
            },
          },
          {
            date: 2019,
            event: {
              label: "安斯泰来制药",
              phase: "临床1/2期",
              status: "在研",
              title: "ASP7517",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TY-9591",
            },
          },
          {
            date: 2019,
            event: {
              label: "ADC Therapeutics S.A.",
              phase: "临床2期",
              status: "在研",
              title: "Camidanlumab Tesirine",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "LNS 8801",
            },
          },
          {
            date: 2019,
            event: {
              label: "安斯泰来制药",
              phase: "临床1期",
              status: "在研",
              title: "ASP 9801",
            },
          },
          {
            date: 2019,
            event: {
              label: "天境生物",
              phase: "临床3期",
              status: "在研",
              title: "Felzartamab",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DRI cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CTX 471",
            },
          },
          {
            date: 2019,
            event: {
              label: "诺华",
              phase: "批准上市",
              status: "上市",
              title: "阿吡利塞",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "mRNA-5671",
            },
          },
          {
            date: 2019,
            event: {
              label: "Kura Oncology",
              phase: "临床1/2期",
              status: "在研",
              title: "KO-539",
            },
          },
          {
            date: 2019,
            event: {
              label: "GENENTECH",
              phase: "临床2期",
              status: "在研",
              title: "Autogene cevumeran",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Lorukafusp alfa",
            },
          },
          {
            date: 2019,
            event: {
              label: "勃林格殷格翰",
              phase: "批准上市",
              status: "上市",
              title: "替雷利珠单抗",
            },
          },
          {
            date: 2019,
            event: {
              label: "AOP Orphan Pharmaceuticals AG",
              phase: "批准上市",
              status: "上市",
              title: "Ropeginterferon Alfa-2B",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "RMX3001&DHP107",
            },
          },
          {
            date: 2019,
            event: {
              label: "泽璟生物制药",
              phase: "临床2期",
              status: "在研",
              title: "奥卡替尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SYNB 1891",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CC-122",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "AZD4205",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Belzutifan",
            },
          },
          {
            date: 2019,
            event: {
              label: "上海明聚生物科技有限公司",
              phase: "临床2期",
              status: "在研",
              title: "JWCAR029[CD19 CAR-T细胞]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "抗PD-L1单克隆抗体",
            },
          },
          {
            date: 2019,
            event: {
              label: "Precision BioSciences, Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "PBCAR 269A",
            },
          },
          {
            date: 2019,
            event: {
              label: "葛兰素史克",
              phase: "临床1期",
              status: "在研",
              title: "GSK3745417",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NKG2DL γδ CAR-T cell",
            },
          },
          {
            date: 2019,
            event: {
              label: "江苏苏中药业集团股份有限公司,江苏迈度药物研发有限公司",
              phase: "临床2期",
              status: "在研",
              title: "马来酸苏特替尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "轩竹医药",
              phase: "临床1期",
              status: "在研",
              title: "XZP-3621",
            },
          },
          {
            date: 2019,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "盐酸培达替尼",
            },
          },
          {
            date: 2019,
            event: {
              label: "Abivax S.A.",
              phase: "临床1/2期",
              status: "在研",
              title: "ABX196",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CPI 0209",
            },
          },
          {
            date: 2019,
            event: {
              label: "天广实生物",
              phase: "临床2期",
              status: "在研",
              title: "MIL62[抗CD20单克隆抗体(重组;人源化)]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SEL 120",
            },
          },
          {
            date: 2019,
            event: {
              label: "再生元",
              phase: "临床1/2期",
              status: "在研",
              title: "REGN5093",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "gp96",
            },
          },
          {
            date: 2019,
            event: {
              label: "礼来",
              phase: "临床1期",
              status: "在研",
              title: "AK 01",
            },
          },
          {
            date: 2019,
            event: {
              label: "北京奥源和力生物技术有限公司",
              phase: "临床2期",
              status: "在研",
              title: "OrienX 010",
            },
          },
          {
            date: 2019,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG-199",
            },
          },
          {
            date: 2019,
            event: {
              label: "岸迈生物",
              phase: "临床1/2期",
              status: "在研",
              title: "EMB-01",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MCLA 145",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "PTX-9908",
            },
          },
          {
            date: 2019,
            event: {
              label: "AGIOS",
              phase: "临床3期",
              status: "在研",
              title: "Vorasidenib",
            },
          },
          {
            date: 2019,
            event: {
              label: "OAK PHARMS",
              phase: "临床1/2期",
              status: "在研",
              title: "HM43239",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MK 0482",
            },
          },
          {
            date: 2019,
            event: {
              label: "辉瑞",
              phase: "临床1期",
              status: "在研",
              title: "PF-07062119",
            },
          },
          {
            date: 2019,
            event: {
              label: "Allogene Therapeutics, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "ALLO 501",
            },
          },
          {
            date: 2019,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "塞利尼索",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PRT 543",
            },
          },
          {
            date: 2019,
            event: {
              label: "Adaptimmune Therapeutics plc",
              phase: "临床1期",
              status: "在研",
              title:
                "Melanoma-associated antigen A4-specific T-cells co-expressing CD8 alpha",
            },
          },
          {
            date: 2019,
            event: {
              label: "Affimed,INC",
              phase: "临床2期",
              status: "在研",
              title: "AFM 13",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PD-1抗体单纯疱疹病毒(重组;人)",
            },
          },
          {
            date: 2019,
            event: {
              label: "华兰基因工程有限公司",
              phase: "临床3期",
              status: "在研",
              title: "重组抗淋巴细胞瘤CD20单抗",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BP C2",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SpagoPix",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LR004",
            },
          },
          {
            date: 2019,
            event: {
              label: "礼来",
              phase: "临床1期",
              status: "在研",
              title: "LY3484356",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "HZ-A-018",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "RV 001",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Foxy 5",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Eganelisib",
            },
          },
          {
            date: 2019,
            event: {
              label: "再生元",
              phase: "临床1/2期",
              status: "在研",
              title: "REGN 5678",
            },
          },
          {
            date: 2019,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "Siremadlin",
            },
          },
          {
            date: 2019,
            event: {
              label: "Aprea Therapeutics Inc.",
              phase: "临床2期",
              status: "在研",
              title: "eprenetapopt",
            },
          },
          {
            date: 2019,
            event: {
              label: "奥赛康药业,中国科学院上海药物研究所",
              phase: "临床3期",
              status: "在研",
              title: "Alflutinib",
            },
          },
          {
            date: 2019,
            event: {
              label: "宜明昂科生物医药",
              phase: "临床1期",
              status: "在研",
              title: "IMM01",
            },
          },
          {
            date: 2019,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "德曲妥珠单抗",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "HPN 217",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CPI 818",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "PARP Inhibitor BGB-290",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LVGN6051[单克隆抗体]",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "PDC lung 01",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CD19 TAC-T细胞",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TTX 030",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PSB205",
            },
          },
          {
            date: 2019,
            event: {
              label: "BioNTech",
              phase: "临床1/2期",
              status: "在研",
              title: "BNT 411",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PMD 026",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "AB 205",
            },
          },
          {
            date: 2019,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG-553",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CTT 1403",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EO 2401",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "hTERT-derived peptide vaccine",
            },
          },
          {
            date: 2019,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ChAdOx1 MVA 5T4 vaccine",
            },
          },
        ],
        [
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MDB 401 B",
            },
          },
          {
            date: 2020,
            event: {
              label: "VERASTEM",
              phase: "临床2期",
              status: "在研",
              title: "VS 6766",
            },
          },
          {
            date: 2020,
            event: {
              label: "吉利德",
              phase: "临床1期",
              status: "在研",
              title: "GS 0189",
            },
          },
          {
            date: 2020,
            event: {
              label: "尚健生物",
              phase: "临床1期",
              status: "在研",
              title: "SG 301",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-69086420",
            },
          },
          {
            date: 2020,
            event: {
              label: "SeaGen, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "SEA-CD70",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SRK 181",
            },
          },
          {
            date: 2020,
            event: {
              label: "科济制药",
              phase: "临床1/2期",
              status: "在研",
              title: "CT041[CAR-T细胞(自体)]",
            },
          },
          {
            date: 2020,
            event: {
              label: "信达生物",
              phase: "临床1期",
              status: "在研",
              title: "IBI939",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CD7 CAR-T细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺华",
              phase: "临床3期",
              status: "在研",
              title: "MBG453",
            },
          },
          {
            date: 2020,
            event: {
              label: "青峰药业,上海迪诺",
              phase: "临床2期",
              status: "在研",
              title: "SC 10914",
            },
          },
          {
            date: 2020,
            event: {
              label: "厦门恩成制药有限公司",
              phase: "临床1期",
              status: "在研",
              title: "SOCC-2",
            },
          },
          {
            date: 2020,
            event: {
              label: "天广实生物",
              phase: "临床1期",
              status: "在研",
              title: "MIL 95",
            },
          },
          {
            date: 2020,
            event: {
              label: "ALMIRALL",
              phase: "批准上市",
              status: "上市",
              title: "Tirbanibulin",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "pelareorep",
            },
          },
          {
            date: 2020,
            event: {
              label: "天广实生物",
              phase: "临床1期",
              status: "在研",
              title: "MIL 93",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Dodekin",
            },
          },
          {
            date: 2020,
            event: {
              label: "德国默克",
              phase: "临床1期",
              status: "在研",
              title: "M 6223",
            },
          },
          {
            date: 2020,
            event: {
              label: "正大天晴",
              phase: "临床1期",
              status: "在研",
              title: "TQB 3728",
            },
          },
          {
            date: 2020,
            event: {
              label: "必贝特医药",
              phase: "临床1期",
              status: "在研",
              title: "BEBT-209",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "阿美替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "Asieris Pharmaceuticals (AUS) Pty Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "APL 1501",
            },
          },
          {
            date: 2020,
            event: {
              label: "大冢制药",
              phase: "临床1/2期",
              status: "在研",
              title: "OPC-415",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RSC-1255",
            },
          },
          {
            date: 2020,
            event: {
              label: "第一三共",
              phase: "临床1期",
              status: "在研",
              title: "DS-6157a",
            },
          },
          {
            date: 2020,
            event: {
              label: "细胞治疗集团",
              phase: "临床1期",
              status: "在研",
              title: "Autologous tumor infiltrating lymphocytes",
            },
          },
          {
            date: 2020,
            event: {
              label: "赛诺菲",
              phase: "临床1期",
              status: "在研",
              title: "SAR 442257",
            },
          },
          {
            date: 2020,
            event: {
              label: "悦康药业,领晟医疗",
              phase: "临床1期",
              status: "在研",
              title: "硫酸氢乌莫司他",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NL 201",
            },
          },
          {
            date: 2020,
            event: {
              label: "圣和药业",
              phase: "临床3期",
              status: "在研",
              title: "SH-1028",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RTX 321",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺诚健华",
              phase: "临床1/2期",
              status: "在研",
              title: "MIL 62",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "PD 1",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Dociparstat sodium",
            },
          },
          {
            date: 2020,
            event: {
              label: "葆元生物医药",
              phase: "临床2期",
              status: "在研",
              title: "Taletrectinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "齐鲁制药",
              phase: "临床1期",
              status: "在研",
              title: "QL1706",
            },
          },
          {
            date: 2020,
            event: {
              label: "复创医药",
              phase: "临床2期",
              status: "在研",
              title: "FCN-437",
            },
          },
          {
            date: 2020,
            event: {
              label: "东曜药业有限公司",
              phase: "临床3期",
              status: "在研",
              title: "TAA013",
            },
          },
          {
            date: 2020,
            event: {
              label: "苏州润新生物科技有限公司",
              phase: "临床2期",
              status: "在研",
              title: "RX108",
            },
          },
          {
            date: 2020,
            event: {
              label: "IGM Biosciences",
              phase: "临床1期",
              status: "在研",
              title: "IGM 8444",
            },
          },
          {
            date: 2020,
            event: {
              label: "北京赛林泰医药技术有限公司",
              phase: "临床2期",
              status: "在研",
              title: "CT-1530",
            },
          },
          {
            date: 2020,
            event: {
              label: "Nkarta",
              phase: "临床1期",
              status: "在研",
              title: "NKX 101",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "帕妥珠单抗&曲妥珠单抗&玻璃酸酶",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Anti-natural killer group 2D CAR-T cell",
            },
          },
          {
            date: 2020,
            event: {
              label: "Genmab",
              phase: "临床1/2期",
              status: "在研",
              title: "GEN3009",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "[64Cu]MeCOSar Octreotate",
            },
          },
          {
            date: 2020,
            event: {
              label: "石药集团",
              phase: "临床3期",
              status: "在研",
              title: "Mitoxantrone liposomal",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "huangqi&Guizhi&Baishao&Ganjiang&Dazao",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DZD 2269",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Ferumoxtran-10",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MANA 312",
            },
          },
          {
            date: 2020,
            event: {
              label: "山东博安生物技术有限公司",
              phase: "临床1期",
              status: "在研",
              title: "LY01008",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏",
              phase: "临床1期",
              status: "在研",
              title: "RG 6232",
            },
          },
          {
            date: 2020,
            event: {
              label: "齐鲁制药",
              phase: "临床3期",
              status: "在研",
              title: "QL1203",
            },
          },
          {
            date: 2020,
            event: {
              label: "赛诺菲-安万特,Creapharm Clinical Supplies,Patheon Inc.",
              phase: "临床2期",
              status: "在研",
              title: "SAR439859",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CB 5339",
            },
          },
          {
            date: 2020,
            event: {
              label: "杭州华东医药集团生物医药有限公司",
              phase: "临床1/2期",
              status: "在研",
              title: "OB756",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CDX 1140",
            },
          },
          {
            date: 2020,
            event: {
              label: "Juno Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "CC-95266",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "[131I]SGMIB anti-HER2 monoclonal antibody",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MK 1454",
            },
          },
          {
            date: 2020,
            event: {
              label: "AtlasMedx, Incorporated",
              phase: "临床1/2期",
              status: "在研",
              title: "AMXI 5001",
            },
          },
          {
            date: 2020,
            event: {
              label: "齐鲁制药",
              phase: "临床3期",
              status: "在研",
              title: "抗HER2单克隆抗体(重组;人源化_结构域II)",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BTX A51",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Isa-KRD, KRd",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-74856665",
            },
          },
          {
            date: 2020,
            event: {
              label: "北京合生基因科技有限公司",
              phase: "临床1/2期",
              status: "在研",
              title: "SynOV 1.1",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CD123 CAR-T细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "卫材",
              phase: "临床2期",
              status: "在研",
              title: "E7090",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CX1440",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Praluzatamab ravtansine",
            },
          },
          {
            date: 2020,
            event: {
              label: "Antengene Therapeutics Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "ATG-019",
            },
          },
          {
            date: 2020,
            event: {
              label: "尚德药缘",
              phase: "临床2期",
              status: "在研",
              title: "ACT001",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "NFX 179",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "吉马替康",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "盐酸卡马替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "圣健生物医药",
              phase: "临床2期",
              status: "在研",
              title: "CX13-608",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺迈西（上海）医药科技有限公司",
              phase: "临床2/3期",
              status: "在研",
              title: "AL3810",
            },
          },
          {
            date: 2020,
            event: {
              label: "Adagene Inc.",
              phase: "临床1期",
              status: "在研",
              title: "ADG 126",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GPC3 CAR T",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-70218902",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CYAD 211",
            },
          },
          {
            date: 2020,
            event: {
              label: "SUNSHINE",
              phase: "临床3期",
              status: "在研",
              title: "Larotinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "Shanghai Fosun Pharmaceutical Development Co, Ltd.",
              phase: "临床1/2期",
              status: "在研",
              title: "Foritinib succinate",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "JBH 492",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏",
              phase: "临床3期",
              status: "在研",
              title: "Tiragolumab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GEN2",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "Interleukin 15",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ET140203 T Cells",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "玻璃酸酶&达雷妥尤单抗",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "IO 202",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TNB 486",
            },
          },
          {
            date: 2020,
            event: {
              label: "北京赛林泰医药技术有限公司",
              phase: "临床3期",
              status: "在研",
              title: "Conteltinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "STELLA PHARMA",
              phase: "批准上市",
              status: "上市",
              title: "硼(10B)法仑",
            },
          },
          {
            date: 2020,
            event: {
              label: "朝晖药业",
              phase: "临床1期",
              status: "在研",
              title: "MH048",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Endovion",
            },
          },
          {
            date: 2020,
            event: {
              label: "大冢制药",
              phase: "临床1/2期",
              status: "在研",
              title: "Tolinapant",
            },
          },
          {
            date: 2020,
            event: {
              label: "必贝特医药",
              phase: "临床1期",
              status: "在研",
              title: "BEBT-109",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Galinpepimut-S",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "VB 10.16",
            },
          },
          {
            date: 2020,
            event: {
              label: "葛兰素史克",
              phase: "临床1期",
              status: "在研",
              title: "GSK6097608",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Vactosertib",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Quaratusugene ozeplasmid",
            },
          },
          {
            date: 2020,
            event: {
              label: "海正药业,天广实生物",
              phase: "临床3期",
              status: "在研",
              title: "抗表皮生长因子受体单克隆抗体(重组;人源化)",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏",
              phase: "临床1期",
              status: "在研",
              title: "RO7425781",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "西达珠单抗",
            },
          },
          {
            date: 2020,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "TQB3602",
            },
          },
          {
            date: 2020,
            event: {
              label: "Nektar Therapeutics",
              phase: "临床3期",
              status: "在研",
              title: "NKTR-214",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD79b CAR-T细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "新基",
              phase: "临床2期",
              status: "在研",
              title: "CC-90011",
            },
          },
          {
            date: 2020,
            event: {
              label: "新基",
              phase: "临床1/2期",
              status: "在研",
              title: "CC-90009",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "Nanocolloid",
            },
          },
          {
            date: 2020,
            event: {
              label: "葛兰素史克",
              phase: "临床2期",
              status: "在研",
              title: "Cobolimab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LB 1904",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "AL-8326",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床2期",
              status: "在研",
              title: "Talquetamab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "BA 3011",
            },
          },
          {
            date: 2020,
            event: {
              label: "Xencor",
              phase: "临床1/2期",
              status: "在研",
              title: "Tidutamab",
            },
          },
          {
            date: 2020,
            event: {
              label: "德国默克",
              phase: "临床1/2期",
              status: "在研",
              title: "M 4344",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "普拉替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "多奈哌齐&美金刚",
            },
          },
          {
            date: 2020,
            event: {
              label: "礼来",
              phase: "临床1期",
              status: "在研",
              title: "LY3410738",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "RTX 240",
            },
          },
          {
            date: 2020,
            event: {
              label: "迈博斯生物医药",
              phase: "临床1期",
              status: "在研",
              title: "TST 001",
            },
          },
          {
            date: 2020,
            event: {
              label: "INCYTE",
              phase: "临床1期",
              status: "在研",
              title: "INCB 106385",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "奥布替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "德国默克",
              phase: "临床2期",
              status: "在研",
              title: "Bintrafusp alfa",
            },
          },
          {
            date: 2020,
            event: {
              label: "Aura Biosciences Inc.",
              phase: "临床2期",
              status: "在研",
              title: "Belzupacap sarotalocan",
            },
          },
          {
            date: 2020,
            event: {
              label: "恒瑞医药",
              phase: "临床1期",
              status: "在研",
              title: "SHR-1802",
            },
          },
          {
            date: 2020,
            event: {
              label: "第一三共",
              phase: "临床2期",
              status: "在研",
              title: "Patritumab Deruxtecan",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Hexyl aminolevulinate",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SONALA-001",
            },
          },
          {
            date: 2020,
            event: {
              label: "艾迪药业",
              phase: "临床1期",
              status: "在研",
              title: "ACC010",
            },
          },
          {
            date: 2020,
            event: {
              label: "Mirati Therapeutics",
              phase: "临床3期",
              status: "在研",
              title: "Adagrasib",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "AdNRGM",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "AIP 303",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "IMU 201",
            },
          },
          {
            date: 2020,
            event: {
              label: "安进",
              phase: "临床1期",
              status: "在研",
              title: "AMG 509",
            },
          },
          {
            date: 2020,
            event: {
              label: "泰州迈博太科药业有限公司",
              phase: "临床1期",
              status: "在研",
              title: "CMAB819",
            },
          },
          {
            date: 2020,
            event: {
              label: "Yuhan Corporation",
              phase: "临床3期",
              status: "在研",
              title: "Lazertinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "兰州生物制品",
              phase: "临床1期",
              status: "在研",
              title: "抗CD52单克隆抗体(人源化)",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "氟唑帕利",
            },
          },
          {
            date: 2020,
            event: {
              label: "必贝特医药",
              phase: "临床2期",
              status: "在研",
              title: "BEBT-908",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "Belantamab Mafodotin",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "阿比特龙",
            },
          },
          {
            date: 2020,
            event: {
              label: "新时代药",
              phase: "临床2期",
              status: "在研",
              title: "F 520",
            },
          },
          {
            date: 2020,
            event: {
              label: "阿斯利康",
              phase: "临床3期",
              status: "在研",
              title: "卡帕塞替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "Juno Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "CC-97540",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Monalizumab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "VB11",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD5 CAR-T细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "BMS-936558",
            },
          },
          {
            date: 2020,
            event: {
              label: "Aptose Biosciences Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "Luxeptinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏",
              phase: "批准上市",
              status: "上市",
              title: "帕妥珠单抗&曲妥珠单抗",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "甲磺酸哆希替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "NEXI 001",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "NEXI 002",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "LW-02 column immunopheresis",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "GNOS PV02 + INO 9012",
            },
          },
          {
            date: 2020,
            event: {
              label: "荣昌生物",
              phase: "临床3期",
              status: "在研",
              title: "抗HER2单克隆抗体-MMAE偶联剂(重组;人源化)",
            },
          },
          {
            date: 2020,
            event: {
              label: "赛诺菲-安万特",
              phase: "批准上市",
              status: "上市",
              title: "艾沙妥昔单抗",
            },
          },
          {
            date: 2020,
            event: {
              label: "Sorrento Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "STI-6129",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CD20/CD22 dual Targeted CAR T-cells",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床2期",
              status: "在研",
              title: "Teclistamab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "富马酸奥比特嗪",
            },
          },
          {
            date: 2020,
            event: {
              label: "贝达药业",
              phase: "临床1期",
              status: "在研",
              title: "D0316",
            },
          },
          {
            date: 2020,
            event: {
              label: "Endocyte",
              phase: "临床1期",
              status: "在研",
              title: "[225Ac]PSMA 617",
            },
          },
          {
            date: 2020,
            event: {
              label: "SEATTLE GENETICS",
              phase: "批准上市",
              status: "上市",
              title: "妥卡替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "色普卡替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Birociclib",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Cellgram-DC",
            },
          },
          {
            date: 2020,
            event: {
              label: "Hutchison MediPharma Limited",
              phase: "临床2期",
              status: "在研",
              title: "HMPL-453",
            },
          },
          {
            date: 2020,
            event: {
              label: "Genmab",
              phase: "临床3期",
              status: "在研",
              title: "Epcoritamab",
            },
          },
          {
            date: 2020,
            event: {
              label: "辉瑞",
              phase: "临床2期",
              status: "在研",
              title: "PF 07104091",
            },
          },
          {
            date: 2020,
            event: {
              label: "Ionis Pharmaceuticals",
              phase: "临床1期",
              status: "在研",
              title: "ION 251",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "SNS 301",
            },
          },
          {
            date: 2020,
            event: {
              label: "上海医药",
              phase: "临床1期",
              status: "在研",
              title: "B 002",
            },
          },
          {
            date: 2020,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 1701963",
            },
          },
          {
            date: 2020,
            event: {
              label: "滨会生物",
              phase: "临床1期",
              status: "在研",
              title: "GM-CSF溶瘤II型单纯疱疹病毒(重组;人)",
            },
          },
          {
            date: 2020,
            event: {
              label: "Precision Biotech Taiwan Corp.",
              phase: "临床1/2期",
              status: "在研",
              title: "PB 103",
            },
          },
          {
            date: 2020,
            event: {
              label: "ImmuneOncia Therapeutics,Inc.",
              phase: "临床1期",
              status: "在研",
              title: "IMC 002",
            },
          },
          {
            date: 2020,
            event: {
              label: "Adlai Nortye Biopharma Co., Ltd.",
              phase: "临床3期",
              status: "在研",
              title: "Buparlisib",
            },
          },
          {
            date: 2020,
            event: {
              label: "Aevi Genomic Medicine, LLC",
              phase: "临床1期",
              status: "在研",
              title: "CERC 007",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "TT 11",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Exablate BBBD",
            },
          },
          {
            date: 2020,
            event: {
              label: "BioNTech",
              phase: "临床1/2期",
              status: "在研",
              title: "W pro1",
            },
          },
          {
            date: 2020,
            event: {
              label: "Fate Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "FT 538",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "瑞派替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "溶瘤病毒(重组_M1)",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RP 72",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Amlotinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 764532",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "伊尼妥单抗",
            },
          },
          {
            date: 2020,
            event: {
              label: "Debiopharm",
              phase: "临床3期",
              status: "在研",
              title: "Xevinapant",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RS 0139",
            },
          },
          {
            date: 2020,
            event: {
              label: "Arcus Biosciences, Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "Etrumadenant",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "ADCT-301",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺华",
              phase: "临床3期",
              status: "在研",
              title: "Capmatinib",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "赛妥珠单抗",
            },
          },
          {
            date: 2020,
            event: {
              label: "SeaGen, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "SGN TGT",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "UniCAR02 T CD123",
            },
          },
          {
            date: 2020,
            event: {
              label: "上海美雅珂生物技术有限责任公司",
              phase: "临床2期",
              status: "在研",
              title: "MRG003",
            },
          },
          {
            date: 2020,
            event: {
              label: "Astex",
              phase: "临床1期",
              status: "在研",
              title: "TAS 1553",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "TC 110",
            },
          },
          {
            date: 2020,
            event: {
              label: "Fate Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "FT 596",
            },
          },
          {
            date: 2020,
            event: {
              label: "天境生物",
              phase: "临床2期",
              status: "在研",
              title: "Efineptakin Alfa",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺迈西（上海）医药科技有限公司",
              phase: "临床1期",
              status: "在研",
              title: "HH 2853",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "阿伐替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Pimivalimab",
            },
          },
          {
            date: 2020,
            event: {
              label: "Compugen",
              phase: "临床1期",
              status: "在研",
              title: "COM902",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Flotetuzumab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "PCAR 19B",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "FS 120",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TPST 1495",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "T cell vaccine AlloStim",
            },
          },
          {
            date: 2020,
            event: {
              label: "Nektar Therapeutics",
              phase: "临床1/2期",
              status: "在研",
              title: "NKTR 255",
            },
          },
          {
            date: 2020,
            event: {
              label: "中奇制药",
              phase: "临床1期",
              status: "在研",
              title: "SYHA1807",
            },
          },
          {
            date: 2020,
            event: {
              label: "迈威生物",
              phase: "临床2/3期",
              status: "在研",
              title: "MW 05",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Fosciclopirox",
            },
          },
          {
            date: 2020,
            event: {
              label: "阿斯利康",
              phase: "临床1期",
              status: "在研",
              title: "ION 736",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Triptoreline",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏制药",
              phase: "临床2期",
              status: "在研",
              title: "GDC-9545",
            },
          },
          {
            date: 2020,
            event: {
              label: "Celldex Therapeutics, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "CDX 527",
            },
          },
          {
            date: 2020,
            event: {
              label: "阿斯利康",
              phase: "临床2期",
              status: "在研",
              title: "AZD9833",
            },
          },
          {
            date: 2020,
            event: {
              label: "Menarini International Operations Luxembourg S.A.",
              phase: "临床1/2期",
              status: "在研",
              title: "MEN 1611",
            },
          },
          {
            date: 2020,
            event: {
              label: "恒瑞医药",
              phase: "临床2期",
              status: "在研",
              title: "SHR-1701",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "STP 705",
            },
          },
          {
            date: 2020,
            event: {
              label: "LOXO ONCOLOGY",
              phase: "临床3期",
              status: "在研",
              title: "LOXO-305",
            },
          },
          {
            date: 2020,
            event: {
              label: "SPECTRUM PHARMS",
              phase: "临床2期",
              status: "在研",
              title: "Eflapegrastim",
            },
          },
          {
            date: 2020,
            event: {
              label: "上海赛金生物医药有限公司",
              phase: "临床1期",
              status: "在研",
              title: "KD6001",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "SNK 01",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ART 0380",
            },
          },
          {
            date: 2020,
            event: {
              label: "CRISPR Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "CTX 120",
            },
          },
          {
            date: 2020,
            event: {
              label: "Y-mAbs Therapeutics",
              phase: "批准上市",
              status: "上市",
              title: "Naxitamab",
            },
          },
          {
            date: 2020,
            event: {
              label: "AO GENERIUM",
              phase: "临床1期",
              status: "在研",
              title: "GNR 051",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BCMA Targeted CAR T-cells",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Pemrametostat",
            },
          },
          {
            date: 2020,
            event: {
              label: "CRISPR Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "CD70 CAR-T cell",
            },
          },
          {
            date: 2020,
            event: {
              label: "施维雅",
              phase: "临床1/2期",
              status: "在研",
              title: "S64315",
            },
          },
          {
            date: 2020,
            event: {
              label: "阿斯利康",
              phase: "临床1/2期",
              status: "在研",
              title: "AZD4573",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MK 2140",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "[18F]FC303",
            },
          },
          {
            date: 2020,
            event: {
              label: "信达生物",
              phase: "临床1期",
              status: "在研",
              title: "IBI322",
            },
          },
          {
            date: 2020,
            event: {
              label: "INCYTE",
              phase: "批准上市",
              status: "上市",
              title: "佩米替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "PNT 2002",
            },
          },
          {
            date: 2020,
            event: {
              label: "Astex",
              phase: "临床2/3期",
              status: "在研",
              title: "Cedazuridine&Azacitidine",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "Myo-inositol",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "DF 6002",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "LY3214996",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CT 041",
            },
          },
          {
            date: 2020,
            event: {
              label: "辉瑞",
              phase: "临床2期",
              status: "在研",
              title: "Elranatamab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "BO-112",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ZN d5",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ONCR 177",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "2-Hydroxyoleic acid",
            },
          },
          {
            date: 2020,
            event: {
              label: "GENENTECH",
              phase: "临床1期",
              status: "在研",
              title: "BLYG8824A",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "IBI 322",
            },
          },
          {
            date: 2020,
            event: {
              label: "Mersana",
              phase: "临床1/2期",
              status: "在研",
              title: "XMT-1592",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "HL-085",
            },
          },
          {
            date: 2020,
            event: {
              label: "葛兰素史克",
              phase: "临床1期",
              status: "在研",
              title: "GSK3901961",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GQ1001",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "OMT 111",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CRX 100",
            },
          },
          {
            date: 2020,
            event: {
              label: "葛兰素史克",
              phase: "临床2/3期",
              status: "在研",
              title: "GSK3359609",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "BCMA CAR-T细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "GENENTECH",
              phase: "临床1期",
              status: "在研",
              title: "RO7297089",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Fenretinide",
            },
          },
          {
            date: 2020,
            event: {
              label: "Fate Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "FT 819",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CD22 CAR-T细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TEG 002",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "JMT 101",
            },
          },
          {
            date: 2020,
            event: {
              label: "圣和药业",
              phase: "临床1期",
              status: "在研",
              title: "SH1573",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "TG1042",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PSMA-specific TGF beta-resistant CAR T cell therapy",
            },
          },
          {
            date: 2020,
            event: {
              label: "第一三共",
              phase: "临床2期",
              status: "在研",
              title: "U3 1402",
            },
          },
          {
            date: 2020,
            event: {
              label: "BioNTech",
              phase: "临床2期",
              status: "在研",
              title: "BNT113",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "EP 0057",
            },
          },
          {
            date: 2020,
            event: {
              label: "正大天晴",
              phase: "临床1期",
              status: "在研",
              title: "TQB3473",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "LYT 200",
            },
          },
          {
            date: 2020,
            event: {
              label: "拜耳",
              phase: "批准上市",
              status: "上市",
              title: "[223Ra]chloride",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Fucoidan",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EP 0042",
            },
          },
          {
            date: 2020,
            event: {
              label: "正大天晴",
              phase: "临床1期",
              status: "在研",
              title: "TQB3454",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "JTX 8064",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏",
              phase: "临床2期",
              status: "在研",
              title: "Giredestrant",
            },
          },
          {
            date: 2020,
            event: {
              label: "BioNTech",
              phase: "临床1/2期",
              status: "在研",
              title: "BNT 141",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TAK-940",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "IS 002",
            },
          },
          {
            date: 2020,
            event: {
              label: "SeaGen, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "SGN STNV",
            },
          },
          {
            date: 2020,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床2期",
              status: "在研",
              title: "TQ-B3525",
            },
          },
          {
            date: 2020,
            event: {
              label: "宜明昂科生物医药",
              phase: "临床1期",
              status: "在研",
              title: "IMM0306",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "HPN 328",
            },
          },
          {
            date: 2020,
            event: {
              label: "Mapkure, LLC",
              phase: "临床1期",
              status: "在研",
              title: "BGB-3245",
            },
          },
          {
            date: 2020,
            event: {
              label: "Forma Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "FT 7051",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "NP 137",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GFH009",
            },
          },
          {
            date: 2020,
            event: {
              label: "iTeos Therapeutics",
              phase: "临床1期",
              status: "在研",
              title: "EOS 448",
            },
          },
          {
            date: 2020,
            event: {
              label: "赛诺菲",
              phase: "临床1期",
              status: "在研",
              title: "RMC 4630",
            },
          },
          {
            date: 2020,
            event: {
              label: "Bavarian Nordic",
              phase: "临床1/2期",
              status: "在研",
              title: "TAEK VAC HerBy",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "TY101[抗PD-1单克隆抗体(重组;人源化)]",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Katty focal therapy",
            },
          },
          {
            date: 2020,
            event: {
              label: "开拓药业",
              phase: "临床1期",
              status: "在研",
              title: "迪拓赛替",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "硫酸司美替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ 75348780",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Welgenaleucel",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "[177Lu]DOTA-TATE",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CKD-702",
            },
          },
          {
            date: 2020,
            event: {
              label: "GTHX",
              phase: "临床3期",
              status: "在研",
              title: "Trilaciclib",
            },
          },
          {
            date: 2020,
            event: {
              label: "麓鹏制药",
              phase: "临床1期",
              status: "在研",
              title: "LP-108",
            },
          },
          {
            date: 2020,
            event: {
              label: "轩竹医药",
              phase: "临床1/2期",
              status: "在研",
              title: "XZP-5809-TT1",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "C CAR 088",
            },
          },
          {
            date: 2020,
            event: {
              label: "合源生物科技（天津）有限公司",
              phase: "临床2期",
              status: "在研",
              title: "CD19 CAR-T细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "JAB 8263",
            },
          },
          {
            date: 2020,
            event: {
              label: "浙江医药",
              phase: "临床2/3期",
              status: "在研",
              title: "抗HER2单克隆抗体-AS269偶联剂(重组;人源化)",
            },
          },
          {
            date: 2020,
            event: {
              label: "复创医药,复星医药",
              phase: "临床1/2期",
              status: "在研",
              title: "FCN-159",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "卢比克替定",
            },
          },
          {
            date: 2020,
            event: {
              label: "ALX Oncology Inc.",
              phase: "临床2期",
              status: "在研",
              title: "ALX 148",
            },
          },
          {
            date: 2020,
            event: {
              label: "艾伯维",
              phase: "临床1期",
              status: "在研",
              title: "ABBV 184",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "肿瘤细胞凋亡因子",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Crenolanib苯磺酸盐",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LVGN 7409",
            },
          },
          {
            date: 2020,
            event: {
              label: "再鼎医药",
              phase: "临床3期",
              status: "在研",
              title: "Retifanlimab",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ZX 101A",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NEO-PTC-01",
            },
          },
          {
            date: 2020,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-94676",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "PVX 410",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Human papillomavirus recombinant vaccine nonavalent",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CSTD 002 NK",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Natural killer cell therapy",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PRT 1419",
            },
          },
          {
            date: 2020,
            event: {
              label: "海正药业",
              phase: "临床1期",
              status: "在研",
              title: "HS234",
            },
          },
          {
            date: 2020,
            event: {
              label: "Nektar Therapeutics",
              phase: "临床3期",
              status: "在研",
              title: "Bempegaldesleukin",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "IL3 CAR T-cells",
            },
          },
          {
            date: 2020,
            event: {
              label: "浙江普康生物技术股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "人乳头瘤病毒疫苗(重组疫苗_HPV 16_腺病毒)",
            },
          },
          {
            date: 2020,
            event: {
              label: "康方生物",
              phase: "临床3期",
              status: "在研",
              title: "HX008[抗PD-1单克隆抗体(重组;人源化)]",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SO C101",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "NT 219",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "AB 16B5",
            },
          },
          {
            date: 2020,
            event: {
              label: "荣昌生物",
              phase: "临床3期",
              status: "在研",
              title: "RC48-ADC",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "VV1",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "P PSMA 101",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SY 5609",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LCAR M23",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Solcera",
            },
          },
          {
            date: 2020,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "Tafasitamab",
            },
          },
          {
            date: 2020,
            event: {
              label: "恒瑞医药",
              phase: "临床3期",
              status: "在研",
              title: "Carelizumab",
            },
          },
          {
            date: 2020,
            event: {
              label: "豪森药业",
              phase: "临床1期",
              status: "在研",
              title: "HS-10352",
            },
          },
          {
            date: 2020,
            event: {
              label: "博生吉医药科技",
              phase: "临床1期",
              status: "在研",
              title: "GC 027",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GC 012",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LCAR-BCX cell therapy",
            },
          },
          {
            date: 2020,
            event: {
              label: "三生国健药业",
              phase: "临床2期",
              status: "在研",
              title: "CPGJ602[抗EGFR单克隆抗体(重组;人鼠嵌合)]",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MAK683",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "NT-I7",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "HJ N 001",
            },
          },
          {
            date: 2020,
            event: {
              label: "康方生物科技（开曼）有限公司",
              phase: "临床1期",
              status: "在研",
              title: "AK117",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Sirpiglenastat",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "AIC100 CAR-T Cells",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CNCT19细胞",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "OP 1250",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Breast MRI",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Descartes 011",
            },
          },
          {
            date: 2020,
            event: {
              label: "礼来",
              phase: "临床3期",
              status: "在研",
              title: "LOXO-292",
            },
          },
          {
            date: 2020,
            event: {
              label: "第一三共",
              phase: "批准上市",
              status: "上市",
              title: "Pexidartinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "RIVAL 01",
            },
          },
          {
            date: 2020,
            event: {
              label: "Compugen",
              phase: "临床1/2期",
              status: "在研",
              title: "COM 701",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "YYB 101",
            },
          },
          {
            date: 2020,
            event: {
              label: "鞍石生物",
              phase: "临床1期",
              status: "在研",
              title: "PLB1004",
            },
          },
          {
            date: 2020,
            event: {
              label: "浙江同源康医药股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "TY-302",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Anti-latent membrane protein 1 CAR-T cell therapy",
            },
          },
          {
            date: 2020,
            event: {
              label: "贵州百灵企业集团制药股份有限公司",
              phase: "临床1期",
              status: "在研",
              title: "甲磺酸普依司他",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Pritumumab",
            },
          },
          {
            date: 2020,
            event: {
              label: "红日药业",
              phase: "临床1/2期",
              status: "在研",
              title: "IMMH-010",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "EPI 7386",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床3期",
              status: "在研",
              title: "Cetrelimab",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏制药",
              phase: "临床3期",
              status: "在研",
              title: "GDC-0077",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MIT 001",
            },
          },
          {
            date: 2020,
            event: {
              label: "百利药业",
              phase: "临床1期",
              status: "在研",
              title: "GNC-038四特异性抗体",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "T-Vec",
            },
          },
          {
            date: 2020,
            event: {
              label: "信达生物",
              phase: "临床1/2期",
              status: "在研",
              title: "Letaplimab",
            },
          },
          {
            date: 2020,
            event: {
              label: "江苏迈度药物研发有限公司",
              phase: "临床2期",
              status: "在研",
              title: "克耐替尼",
            },
          },
          {
            date: 2020,
            event: {
              label: "苏州润新生物科技有限公司",
              phase: "临床3期",
              status: "在研",
              title: "Olafertinib",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SRF 388",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ICT01 2588",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "BPI-1178",
            },
          },
          {
            date: 2020,
            event: {
              label: "百济神州",
              phase: "临床1/2期",
              status: "在研",
              title: "BGB 10188",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ALM-488",
            },
          },
          {
            date: 2020,
            event: {
              label: "诺华",
              phase: "临床2期",
              status: "在研",
              title: "Naporafenib",
            },
          },
          {
            date: 2020,
            event: {
              label: "MacroGenics, Inc.",
              phase: "批准上市",
              status: "上市",
              title: "马格妥昔单抗",
            },
          },
          {
            date: 2020,
            event: {
              label: "再生元",
              phase: "临床1/2期",
              status: "在研",
              title: "REGN 5668",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "SL 172154",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "OC 001",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title:
                "[99mTc]niacinamide polyethylene glycol bicyclic RGD peptide",
            },
          },
          {
            date: 2020,
            event: {
              label: "Astex",
              phase: "临床1期",
              status: "在研",
              title: "TAS1440",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "莱古比星",
            },
          },
          {
            date: 2020,
            event: {
              label: "圣和药业",
              phase: "临床2期",
              status: "在研",
              title: "SHC014748M",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EF 009",
            },
          },
          {
            date: 2020,
            event: {
              label: "TILT",
              phase: "临床1期",
              status: "在研",
              title: "TILT 123",
            },
          },
          {
            date: 2020,
            event: {
              label: "强生",
              phase: "临床3期",
              status: "在研",
              title: "JNJ 63723283",
            },
          },
          {
            date: 2020,
            event: {
              label: "第一三共",
              phase: "临床2期",
              status: "在研",
              title: "AB 218",
            },
          },
          {
            date: 2020,
            event: {
              label: "ImmuneOncia Therapeutics,Inc.",
              phase: "临床2期",
              status: "在研",
              title: "IMC-001",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "Plenvu",
            },
          },
          {
            date: 2020,
            event: {
              label: "罗氏",
              phase: "临床1期",
              status: "在研",
              title: "RO7283420",
            },
          },
          {
            date: 2020,
            event: {
              label: "正大天晴",
              phase: "临床2期",
              status: "在研",
              title: "AL 2846",
            },
          },
          {
            date: 2020,
            event: {
              label: "康方生物科技（开曼）有限公司",
              phase: "临床2期",
              status: "在研",
              title: "AK 104",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Ludotadipep",
            },
          },
          {
            date: 2020,
            event: {
              label: "第一三共",
              phase: "临床3期",
              status: "在研",
              title: "Datopotamab Deruxtecan",
            },
          },
          {
            date: 2020,
            event: {
              label: "BIOHAVEN PHARM",
              phase: "临床1/2期",
              status: "在研",
              title: "KP 1237",
            },
          },
          {
            date: 2020,
            event: {
              label: "辉瑞",
              phase: "临床1期",
              status: "在研",
              title: "PF 07265807",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "bintrafusp",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "SX 682",
            },
          },
          {
            date: 2020,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "hP1A8",
            },
          },
        ],
        [
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Ceramide nanoliposomal",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Senaparib",
            },
          },
          {
            date: 2021,
            event: {
              label: "天演药业",
              phase: "临床1/2期",
              status: "在研",
              title: "ADG106",
            },
          },
          {
            date: 2021,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "TQB 3720",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "IM73 CAR-T cell therapy",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ETH-155008",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "NC 318",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MTL CEBPA",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "GRN 300",
            },
          },
          {
            date: 2021,
            event: {
              label: "Hanmi Pharmaceutical Co., Ltd.",
              phase: "临床2期",
              status: "在研",
              title: "FLX 475",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Olaptesed pegol",
            },
          },
          {
            date: 2021,
            event: {
              label: "辰欣药业股份有限公司",
              phase: "未知",
              status: "在研",
              title: "WX390",
            },
          },
          {
            date: 2021,
            event: {
              label: "AVEO Pharmaceuticals, Inc.",
              phase: "批准上市",
              status: "上市",
              title: "盐酸替伏扎尼",
            },
          },
          {
            date: 2021,
            event: {
              label: "石药集团",
              phase: "临床2期",
              status: "在研",
              title: "HA121-28",
            },
          },
          {
            date: 2021,
            event: {
              label: "百利药业",
              phase: "临床1期",
              status: "在研",
              title: "GNC-039",
            },
          },
          {
            date: 2021,
            event: {
              label: "施维雅",
              phase: "临床1/2期",
              status: "在研",
              title: "S 65487",
            },
          },
          {
            date: 2021,
            event: {
              label: "TAIHO ONCOLOGY",
              phase: "临床3期",
              status: "在研",
              title: "曲氟尿苷&替吡嘧啶",
            },
          },
          {
            date: 2021,
            event: {
              label: "Chipscreen Biosciences, Ltd.",
              phase: "临床3期",
              status: "在研",
              title: "西奥罗尼",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "LAVA-051",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "INT230-6",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "DAY 101",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "AloCELYVIR",
            },
          },
          {
            date: 2021,
            event: {
              label: "Ayala Pharmaceuticals, Inc.",
              phase: "临床2/3期",
              status: "在研",
              title: "AL102",
            },
          },
          {
            date: 2021,
            event: {
              label: "Arcus Biosciences, Inc.",
              phase: "临床1期",
              status: "在研",
              title: "AB 308",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "[18F]PSMA 1007",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CM 313",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "BS HH 002",
            },
          },
          {
            date: 2021,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "68 gallium labelled FF58",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MK 1026",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CMG901",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ECT204",
            },
          },
          {
            date: 2021,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "马来酸亮丙瑞林",
            },
          },
          {
            date: 2021,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-96191",
            },
          },
          {
            date: 2021,
            event: {
              label: "Turning Point",
              phase: "临床1/2期",
              status: "在研",
              title: "TPX-0131",
            },
          },
          {
            date: 2021,
            event: {
              label: "第一三共",
              phase: "临床1期",
              status: "在研",
              title: "DS 6000",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "64Cu-SAR-bisPSMA",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ONC206",
            },
          },
          {
            date: 2021,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床2期",
              status: "在研",
              title: "TQB3616",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "FS 222",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "FL 101",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DT2216",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LB 1901",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "bevacizumab&Paclitaxel",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "TL117",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "[177Lu]DOTA-TLX591",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CT0180 Cells",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Descartes 08",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EU101",
            },
          },
          {
            date: 2021,
            event: {
              label: "石药集团",
              phase: "临床2期",
              status: "在研",
              title: "DP303c",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "[18F]meta fluorobenzylguanidine",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2/3期",
              status: "在研",
              title: "Vidutolimod",
            },
          },
          {
            date: 2021,
            event: {
              label: "德国默克",
              phase: "临床1期",
              status: "在研",
              title: "M 1231",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CN1",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "NVG 111",
            },
          },
          {
            date: 2021,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 765049",
            },
          },
          {
            date: 2021,
            event: {
              label: "吉利德",
              phase: "临床1期",
              status: "在研",
              title: "KITE 222",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PRT1419",
            },
          },
          {
            date: 2021,
            event: {
              label: "新基",
              phase: "临床1期",
              status: "在研",
              title: "CC-96673",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "KF-0210",
            },
          },
          {
            date: 2021,
            event: {
              label: "石药集团",
              phase: "临床3期",
              status: "在研",
              title: "SKLB1028",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "cis-diamminedichloroplatinum",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "RXC 004",
            },
          },
          {
            date: 2021,
            event: {
              label: "百济神州",
              phase: "临床1/2期",
              status: "在研",
              title: "BGB-11417",
            },
          },
          {
            date: 2021,
            event: {
              label: "葛兰素史克",
              phase: "批准上市",
              status: "上市",
              title: "Dostarlimab",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "HDP-101",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "MT 6402",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CM 24",
            },
          },
          {
            date: 2021,
            event: {
              label: "博生吉医药科技",
              phase: "临床1期",
              status: "在研",
              title: "CD276 CAR-T cells",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "LM-061",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "MCLA-129",
            },
          },
          {
            date: 2021,
            event: {
              label: "阿斯利康",
              phase: "临床1/2期",
              status: "在研",
              title: "AZD0466",
            },
          },
          {
            date: 2021,
            event: {
              label: "百济神州",
              phase: "临床3期",
              status: "在研",
              title: "Ociperlimab",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "iNeo Vac P01",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "SC 43",
            },
          },
          {
            date: 2021,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "TQB2858",
            },
          },
          {
            date: 2021,
            event: {
              label: "金赛药业",
              phase: "未知",
              status: "在研",
              title: "金妥利珠单抗",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "EXS 21546",
            },
          },
          {
            date: 2021,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "DFF332",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "HC-5404-FU",
            },
          },
          {
            date: 2021,
            event: {
              label: "SeaGen, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "Tisotumab Vedotin",
            },
          },
          {
            date: 2021,
            event: {
              label: "AlaMab Therapeutics, Inc.",
              phase: "临床1/2期",
              status: "在研",
              title: "ALMB-0168",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MB CART2019.1",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MRG002",
            },
          },
          {
            date: 2021,
            event: {
              label: "CASI PHARMS",
              phase: "临床1期",
              status: "在研",
              title: "CID 103",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "[64Cu]DOTA-TLX 592",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Abiraterone decanoate",
            },
          },
          {
            date: 2021,
            event: {
              label: "THERATECHNOLOGIES",
              phase: "临床1期",
              status: "在研",
              title: "TH 1902",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "RPTR 168",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LNK01002",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "GC 4711",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CFT 7455",
            },
          },
          {
            date: 2021,
            event: {
              label: "Chia Tai Tianqing Pharmaceutical Group Co., Ltd.",
              phase: "临床1期",
              status: "在研",
              title: "TQB2928",
            },
          },
          {
            date: 2021,
            event: {
              label: "AVID",
              phase: "临床1期",
              status: "在研",
              title: "[18F]LY3546117",
            },
          },
          {
            date: 2021,
            event: {
              label: "Immvira Pharma Co.,Limited",
              phase: "临床1/2期",
              status: "在研",
              title: "T3011疱疹病毒",
            },
          },
          {
            date: 2021,
            event: {
              label: "勃林格殷格翰",
              phase: "临床1期",
              status: "在研",
              title: "BI 1810631",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "EG 70",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "DVX201",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "ADI 001",
            },
          },
          {
            date: 2021,
            event: {
              label: "海思科医药",
              phase: "临床1期",
              status: "在研",
              title: "HSK29116",
            },
          },
          {
            date: 2021,
            event: {
              label: "拜耳",
              phase: "临床1期",
              status: "在研",
              title: "BAY2666605",
            },
          },
          {
            date: 2021,
            event: {
              label: "岸迈生物",
              phase: "临床1/2期",
              status: "在研",
              title: "EMB 06",
            },
          },
          {
            date: 2021,
            event: {
              label: "TG Therapeutics, Inc.",
              phase: "批准上市",
              status: "上市",
              title: "umbralisib tosylate",
            },
          },
          {
            date: 2021,
            event: {
              label: "信达生物",
              phase: "临床1期",
              status: "在研",
              title: "IBI 319",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "MGTA 145",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "KB 0742",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "UV 2",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "Keynatinib",
            },
          },
          {
            date: 2021,
            event: {
              label: "Allist Pharmaceuticals, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "Furmonertinib",
            },
          },
          {
            date: 2021,
            event: {
              label: "Adaptimmune Therapeutics plc",
              phase: "临床2期",
              status: "在研",
              title: "Autologous genetically modified ADP-A2M4CD8 cells",
            },
          },
          {
            date: 2021,
            event: {
              label: "辉瑞",
              phase: "临床1期",
              status: "在研",
              title: "PF-07257876",
            },
          },
          {
            date: 2021,
            event: {
              label: "恒瑞医药",
              phase: "临床1/2期",
              status: "在研",
              title: "SHR-A1811",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ST 067",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "Loncastuximab tesirine",
            },
          },
          {
            date: 2021,
            event: {
              label: "艾伯维",
              phase: "临床2期",
              status: "在研",
              title: "Giloralimab",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TBX 2400",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Nanoplexed Poly I:C BO-112",
            },
          },
          {
            date: 2021,
            event: {
              label: "诗健生物",
              phase: "临床1/2期",
              status: "在研",
              title: "ESG401",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Hafnium oxide nanoparticles",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "BI 1808",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "NX 2127",
            },
          },
          {
            date: 2021,
            event: {
              label: "强生",
              phase: "临床1期",
              status: "在研",
              title: "JNJ-78278343",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "Intra-arterial LIOX",
            },
          },
          {
            date: 2021,
            event: {
              label: "百时美施贵宝",
              phase: "临床2期",
              status: "在研",
              title: "BMS-986012",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "PBI-200",
            },
          },
          {
            date: 2021,
            event: {
              label: "石药集团",
              phase: "临床2期",
              status: "在研",
              title: "SG001",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "CPI 300",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "VOR33",
            },
          },
          {
            date: 2021,
            event: {
              label: "Genmab",
              phase: "临床1/2期",
              status: "在研",
              title: "GEN 3014",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "HB 0025",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "CB 103",
            },
          },
          {
            date: 2021,
            event: {
              label: "Beijing Dongfang Biotech Co., Ltd.",
              phase: "临床2/3期",
              status: "在研",
              title: "抗VEGFR2单克隆抗体(重组;全人源)",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "LP-168",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床2期",
              status: "在研",
              title: "AMB 051",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "AST-021p",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "BND 22",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床3期",
              status: "在研",
              title: "Vibostolimab",
            },
          },
          {
            date: 2021,
            event: {
              label: "Conjupro Biotherapeutics Inc",
              phase: "临床1/2期",
              status: "在研",
              title: "JMT601",
            },
          },
          {
            date: 2021,
            event: {
              label: "BLUEPRINT MEDICINES",
              phase: "临床1/2期",
              status: "在研",
              title: "BLU-945",
            },
          },
          {
            date: 2021,
            event: {
              label: "罗氏",
              phase: "临床1/2期",
              status: "在研",
              title: "RO7122290",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ES101",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "批准上市",
              status: "上市",
              title: "Huaier Granule",
            },
          },
          {
            date: 2021,
            event: {
              label: "博生吉医药科技",
              phase: "临床1期",
              status: "在研",
              title: "Chimeric antigen receptor modified γδ T cells",
            },
          },
          {
            date: 2021,
            event: {
              label: null,
              phase: "批准上市",
              status: "上市",
              title: "Sotorasib",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "XB 2001",
            },
          },
          {
            date: 2021,
            event: {
              label: "和誉生物",
              phase: "临床1期",
              status: "在研",
              title: "ABSK-011",
            },
          },
          {
            date: 2021,
            event: {
              label: "Arcus Biosciences, Inc.",
              phase: "临床3期",
              status: "在研",
              title: "Zimberelimab",
            },
          },
          {
            date: 2021,
            event: {
              label: "康方生物科技（开曼）有限公司",
              phase: "临床2期",
              status: "在研",
              title: "AK112",
            },
          },
          {
            date: 2021,
            event: {
              label: "Ambrx, Inc.",
              phase: "临床2期",
              status: "在研",
              title: "ARX788",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "CFI 400945",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "OMO-103",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "TNB 585",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "MVC-101",
            },
          },
          {
            date: 2021,
            event: {
              label: "Hutchison MediPharma Limited",
              phase: "临床2期",
              status: "在研",
              title: "HMPL-689",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PCLX-001",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "PD1-PSMA-CART cells",
            },
          },
          {
            date: 2021,
            event: {
              label: "北京华昊中天生物技术有限公司",
              phase: "批准上市",
              status: "上市",
              title: "优替德隆",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "ATX 101",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1期",
              status: "在研",
              title: "Icapamespib",
            },
          },
          {
            date: 2021,
            event: {
              label: "诺华",
              phase: "临床1期",
              status: "在研",
              title: "IAG933",
            },
          },
          {
            date: 2021,
            event: {
              label: "Microbio Co., Ltd.",
              phase: "临床2期",
              status: "在研",
              title: "MS-20",
            },
          },
          {
            date: 2021,
            event: {
              label: "强生",
              phase: "批准上市",
              status: "上市",
              title: "Amivantamab",
            },
          },
          {
            date: 2021,
            event: {
              label: "",
              phase: "临床1/2期",
              status: "在研",
              title: "tigilanol tiglate",
            },
          },
          {
            date: 2021,
            event: {
              label: "KRKA DD NOVO MESTO",
              phase: "批准上市",
              status: "上市",
              title: "盐酸来那度胺",
            },
          },
        ],
      ],
      milestoneData: [],
    };
  },
  components: {
    VirtualScrollMilestoneTable,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "../../style/milestone.less";
.operation {
  // margin-bottom: 20px;
}

/deep/ .related-drug-table .ant-table .ant-table-body .ant-table-tbody {
  tr td {
    font-weight: bold;
  }
}
p {
  margin-top: 0;
}
</style>
