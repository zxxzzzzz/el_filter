<template>
  <div>
    <div v-for="text in textList" :key="text.k" class="flex px-12 justify-start w-full mb-4">
      <div class="text-blue-600 w-24 text-left bg-gray-200 flex-shrink-0">{{ text.k }}</div>
      <div>
        <div v-for="c in text.v">{{ c }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, withDefaults } from 'vue';
const props = withDefaults(defineProps<{ visibleKeyList: string[]; content: string }>(), {
  visibleKeyList: () => ['TI', 'AB', 'TI翻译', 'AB翻译', 'CR'],
  content: `
FN Clarivate Analytics Web of Science
VR 1.0
PT J
AU Christou, PA
   Nikiforou, ES
AF Christou, Prokopis A.
   Nikiforou, Elena S.
TI Tourists' perceptions of non-human species in zoos: An animal rights
   perspective
[TI翻译] 我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我
SO INTERNATIONAL JOURNAL OF TOURISM RESEARCH
LA English
DT Article
DE animals; tourists&apos; perceptions; zoos
ID VISITORS; WELFARE; VALUES; WILDLIFE; BEHAVIOR
AB This qualitative study aims to reveal tourists' perceptions of non-human species in zoos while adopting an animal rights perspective. Study findings indicate that tourists are concerned about the well-being of animals that are kept in zoos and conceive that animals in zoos are distressed and "unhappy". Yet, they value the outcome of their zoo experience and interaction with animals, thus continue to visit zoos for leisure/educational purposes. The study's findings enable the conceptualisation of zoos, their societal impact, tourists' concerns about animals kept in zoos and the need of tourism stakeholders to transform zoos.
[AB翻译] 我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我
C1 [Christou, Prokopis A.; Nikiforou, Elena S.] Cyprus Univ Technol, Dept Hotel & Tourism Management, 30 Archbishop Kyprianou Str, CY-3036 Lemesos, Cyprus.
C3 Cyprus University of Technology
RP Christou, PA (通讯作者)，Cyprus Univ Technol, Dept Hotel & Tourism Management, 30 Archbishop Kyprianou Str, CY-3036 Lemesos, Cyprus.
EM prokopis.christou@cut.ac.cy
RI Christou, Prokopis A./AAC-2696-2021
OI Christou, Prokopis A./0000-0001-6628-2619
CR Almeida A, 2017, ANTHROZOOS, V30, P457, DOI 10.1080/08927936.2017.1335108
   Andereck KL, 2005, ANN TOURISM RES, V32, P1056, DOI 10.1016/j.annals.2005.03.001
   Ballantyne R, 2007, ENVIRON EDUC RES, V13, P367, DOI DOI 10.1080/13504620701430604
   Ballantyne R, 2018, TOURISM MANAGE, V64, P190, DOI 10.1016/j.tourman.2017.07.015
   Ballantyne R, 2016, VISIT STUD, V19, P193, DOI 10.1080/10645578.2016.1220185
   Bansiddhi P, 2020, J APPL ANIM WELF SCI, V23, P164, DOI 10.1080/10888705.2019.1569522
   Beardsworth A., 2001, Tourist Studies, V1, P83, DOI 10.1177/146879760100100105
   Bekoff M, 2004, ZYGON, V39, P861, DOI 10.1111/j.1467-9744.2004.00625.x
   Bert F, 2016, EUR J INTEGR MED, V8, P695, DOI 10.1016/j.eujim.2016.05.005
   Bostock S.S.C., 2003, ZOOS ANIMAL RIGHTS
   Broom D. M., 1993, STRESS ANIMAL WELFAR
   Brotherton B., 2015, RES HOSP TOURISM
   Bryman A., 2004, SOCIAL RES METHODS
   Buckley KA, 2020, J SUSTAIN TOUR, V28, P978, DOI 10.1080/09669582.2020.1715992
   Carr N., 2018, TOURISM ANIMAL WELFA
   Carr N, 2017, ANN TOURISM RES, V62, P112, DOI 10.1016/j.annals.2016.10.011
   Carr N, 2016, TOUR MANAG PERSPECT, V20, P70, DOI 10.1016/j.tmp.2016.07.006
   Carr N, 2016, TOURISM MANAGE, V57, P37, DOI 10.1016/j.tourman.2016.05.013
   Catibog-Sinha C., 2008, Journal of Ecotourism, V7, P155, DOI 10.2167/joe0229.0
   CHAMOVE AS, 1988, ZOO BIOL, V7, P359, DOI 10.1002/zoo.1430070407
   Christou P, 2020, J HOSP TOUR MANAG, V42, P210, DOI 10.1016/j.jhtm.2020.01.007
   Christou P, 2019, ANN TOURISM RES, V78, DOI 10.1016/j.annals.2019.102749
   Christou P, 2019, TOURISM MANAGE, V72, P39, DOI 10.1016/j.tourman.2018.11.007
   Christou PA, 2021, INT J TOUR RES, V23, P690, DOI 10.1002/jtr.2435
   Christou PA, 2018, TOURISM MANAGE, V68, P13, DOI 10.1016/j.tourman.2018.02.015
   Cohen E, 2016, TOUR RECREAT RES, V41, P168, DOI 10.1080/02508281.2016.1147211
   Colombo ES, 2016, ANIM WELFARE, V25, P275, DOI 10.7120/09627286.25.2.275
   Cranmer EE, 2020, TOUR MANAG PERSPECT, V35, DOI 10.1016/j.tmp.2020.100672
   Cyprus Statistical Service, 2020, KEY FIG
   Dawkins M, 2012, ANIMAL SUFFERING SCI
   Decrop A., 2004, Qualitative research in tourism: ontologies, epistemologies and methodologies, P156
   Denstadli JM, 2011, ANN TOURISM RES, V38, P920, DOI 10.1016/j.annals.2011.01.005
   Duffy R, 2011, J SUSTAIN TOUR, V19, P589, DOI 10.1080/09669582.2011.566927
   Farmaki A, 2020, ANN TOURISM RES, V80, DOI 10.1016/j.annals.2019.102806
   Fennell DA, 2015, ASPEC TOUR, V67, P27
   Fennell DA, 2013, TOUR RECREAT RES, V38, P325, DOI 10.1080/02508281.2013.11081757
   Filep S, 2017, ANN TOURISM RES, V66, P26, DOI 10.1016/j.annals.2017.05.015
   Font X, 2019, J SUSTAIN TOUR, V27, P118, DOI 10.1080/09669582.2018.1538231
   Francione GL, 2010, LAW CULT HUMANIT, V6, P24, DOI 10.1177/1743872109348989
   Frost W., 2011, ZOOS TOURISM CONSERV, V46
   Gioia DA, 2013, ORGAN RES METHODS, V16, P15, DOI 10.1177/1094428112452151
   Guest G, 2020, PLOS ONE, V15, DOI 10.1371/journal.pone.0232076
   Gusset M, 2011, ZOO BIOL, V30, P566, DOI 10.1002/zoo.20369
   Hamilton, 2007, MICHIGAN LAW REV 1 I, V106, P138
   Hill L, 2020, AUST PSYCHOL, V55, P729, DOI 10.1111/ap.12466
   Hopper LM, 2017, CURR OPIN BEHAV SCI, V16, P100, DOI 10.1016/j.cobeha.2017.04.006
   Hosey G, 2018, ANTHROZOOS, V31, P273, DOI 10.1080/08927936.2018.1455448
   Hughes P, 2001, TOURISM MANAGE, V22, P321, DOI 10.1016/S0261-5177(00)00070-4
   Kompatscher G., 2019, ANIMALS THEIR RELATI, P11, DOI [10.1007/978-3-658-24388-3_2, DOI 10.1007/978-3-658-24388-3_2]
   Krause-Parello CA, 2018, NURS SCI QUART, V31, P239, DOI 10.1177/0894318418774901
   Lee HS, 2015, TOURISM MANAGE, V47, P251, DOI 10.1016/j.tourman.2014.10.006
   Luo JM, 2020, J HOSP TOUR MANAG, V45, P124, DOI 10.1016/j.jhtm.2020.08.005
   Malamud Randy, 1998, READING ZOOS REPRESE
   McClafferty T., 1995, J SCI TEACHER ED, V6, P175, DOI DOI 10.1007/BF02614639
   McConnell A.R., 2016, PSYCHOL FRIENDSHIP, P157, DOI [https://doi.org/10.1093/acprof:oso/9780190222024.001.0001, DOI 10.1093/ACPROF:OSO/9780190222024.001.0001]
   McKercher B, 2016, TOURISM MANAGE, V54, P196, DOI 10.1016/j.tourman.2015.11.008
   Monterrubio C, 2020, TOURISM MANAGE, V77, DOI 10.1016/j.tourman.2019.103983
   Moorhouse T, 2017, J SUSTAIN TOUR, V25, P505, DOI 10.1080/09669582.2016.1223087
   Mynttinen S, 2015, TOURISM MANAGE, V48, P455, DOI 10.1016/j.tourman.2014.12.010
   Palinkas LA, 2015, ADM POLICY MENT HLTH, V42, P533, DOI 10.1007/s10488-013-0528-y
   Parc Zoologique de Paris, 2020, ACT EV
   Patton M.Q., 2002, QUALITATIVE EVALUATI
   Picken F., 2018, QUALITATIVE METHODS, P200
   Poria Y, 2013, TOURISM MANAGE, V35, P272, DOI 10.1016/j.tourman.2012.02.011
   Prebensen NK, 2007, TOURISM MANAGE, V28, P747, DOI 10.1016/j.tourman.2006.05.005
   Reiser D., 2017, WILDLIFE TOURISM ENV, P263
   Sampaio MB, 2020, ETHNOBIOL CONSERV, V9, DOI 10.15451/ec2020-01-9.02-1-32
   SCHWARTZ SH, 1992, ADV EXP SOC PSYCHOL, V25, P1, DOI 10.1016/s0065-2601(08)60281-6
   Schwartz SH, 2012, J PERS SOC PSYCHOL, V103, P663, DOI 10.1037/a0029393
   Sheppard VA, 2019, TOURISM MANAGE, V73, P134, DOI 10.1016/j.tourman.2018.11.017
   Singapore Zoo, 2020, SPLASH SAF SHOW
   Smith LDG, 2012, TOURISM MANAGE, V33, P1502, DOI 10.1016/j.tourman.2012.02.004
   Sneddon J, 2016, ANN TOURISM RES, V57, P234, DOI 10.1016/j.annals.2016.01.006
   Surge, 2020, OFF AN RIGHTS MARCH
   Suri H, 2011, QUAL RES J, V11, P63, DOI 10.3316/QRJ1102063
   Tuli F., 2010, ETHIOPIAN J ED SCI, V6, P97
   Turley SK., 2001, LEISURE STUD, V20, P1, DOI [DOI 10.1080/02614360122877, 10.1080/02614360122877]
   Weaver S., 2016, CREATING GREAT VISIT
   Wijeratne AJC, 2014, TOURISM MANAGE, V42, P149, DOI 10.1016/j.tourman.2013.11.012
   Winter C, 2020, ANN TOURISM RES, V84, DOI 10.1016/j.annals.2020.102989
   Yilmaz K, 2013, EUR J EDUC, V48, P311, DOI 10.1111/ejed.12014
   Zhao SN, 2017, ANN TOURISM RES, V63, P97, DOI 10.1016/j.annals.2017.01.003
NR 82
TC 2
Z9 2
U1 14
U2 38
PU WILEY
PI HOBOKEN
PA 111 RIVER ST, HOBOKEN 07030-5774, NJ USA
SN 1099-2340
EI 1522-1970
J9 INT J TOUR RES
JI Int. J. Tour. Res.
PD JUL
PY 2021
VL 23
IS 4
BP 690
EP 700
DI 10.1002/jtr.2435
EA JAN 2021
PG 11
WC Hospitality, Leisure, Sport & Tourism
WE Social Science Citation Index (SSCI)
SC Social Sciences - Other Topics
GA TM4LX
UT WOS:000612540700001
DA 2023-02-20
ER
`,
});
const format = (str: string) => {
  let tk = '';
  const ob = str.split('\n').reduce((re, cur) => {
    if (cur.startsWith('   ')) {
      if (tk) {
        re[tk] = [...re[tk], cur.slice(3)]
      }
      return re;
    }
    if (cur.startsWith('[')) {
      const k = cur.slice(1, 5);
      const c = cur.slice(7);
      tk = k;
      return { ...re, [k]: [c] };
    }
    const k = cur.slice(0, 2);
    const c = cur.slice(3);
    tk = k;
    return { ...re, [k]: [c] };
  }, {} as { [key: string]: string[] });
  return ob;
};

const textList = computed(() => {
  const ob = format(props.content);
  console.log(ob);
  return Object.keys(ob)
    .filter((k) => props.visibleKeyList.includes(k))
    .map((k) => {
      const v = ob[k];
      return { k, v };
    });
});
</script>
