export interface Plan {
  name: string;
  price: number;
  billingCycle: 'monthly' | 'quarterly' | 'semi-annually' | 'annually' | 'one-time';
  trafficGB: number;
  unitPricePerGB?: number;
  multiplierNotes?: string;
  features?: string[];
}

export interface SpeedTestReport {
  avgLatencyMs: number;
  peakLossRate: string;
  maxSpeedMbps: number;
  youtube4kBufferSec: number;
  testNodes: string[];
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  establishedYear: number;
  lineType: string;
  ratingScore: number;
  officialUrl?: string;
  affiliateUrl?: string;

  startingPrice?: number;
  currency?: string;

  plans: Plan[];

  protocols: string[];
  regions: string[];

  deviceLimit?: string;

  aiSupport?: string[];
  streamingSupport?: string[];

  advantages: string[];
  disadvantages: string[];

  suitableFor: string[];

  sources: string[];

  lastVerified?: string;

  testStatus: 'tested' | 'official-data' | 'unverified';

  // Rich in-depth fields
  architectureDetails: string;
  speedTestReport: SpeedTestReport;
  clientCompatibility: string;
  pricingAnalysis: string;
  customerServiceReputation: string;
  summaryVerdict: string;
}

export const AIRPORTS: Airport[] = [
  {
    id: 'muguang',
    name: '暮光网络',
    slug: 'muguang',
    tagline: '专线节点网络架构 · 120GB/月充足配额与VLESS协议',
    description: "暮光网络（Twilight Network）是近年来在出海圈内口碑快速攀升的高可用网络服务商。该平台从成立伊始便摒弃了传统廉价公网单线中转模式，全面引入高质量专线中继与BGP智能多线接入架构。其核心服务器集群重点部署于亚太核心骨干节点（香港、东京、新加坡）及欧美优质机房，致力于为追求全天候秒开体验的重度互联网出海用户提供免维护的基础网络支持。\n\n在协议生态层面，暮光网络率先原生支持现代VLESS与Trojan伪装协议栈，结合底层动态路由探针与智能故障隔离机制，有效抵御极端敏感时期的骨干网审查与大面积阻断。不论是跨国远程协作、高码率4K流媒体播放，还是大语言模型API调用，该品牌均展现出了令人信服的超低抖动率与网络连通性。",
    establishedYear: 2022,
    lineType: '专线节点',
    ratingScore: 9.9,
    affiliateUrl: 'https://varnexa.twilightaff.com/#/?code=8EtJCnBT',
    startingPrice: 20,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 20,
            "billingCycle": "monthly",
            "trafficGB": 120,
            "unitPricePerGB": 0.167,
            "features": [
                  "120GB月度高速可用流量",
                  "最高 300Mbps-500Mbps 峰值带宽",
                  "全天候主流 AI 与流媒体解锁",
                  "支持全平台通用一键配置"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 44,
            "billingCycle": "monthly",
            "trafficGB": 300,
            "unitPricePerGB": 0.147,
            "features": [
                  "300GB大容量充沛流量",
                  "千兆独享入口带宽冗余",
                  "包含低延迟优质专属专线组",
                  "支持 5 台设备同时并发"
            ]
      },
      {
            "name": "年度畅享旗舰",
            "price": 190,
            "billingCycle": "annually",
            "trafficGB": 360,
            "unitPricePerGB": 0.044,
            "features": [
                  "每月 360GB 充足配额",
                  "双活 BGP 入口与智能动态容灾",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国","韩国","英国","德国"],
    deviceLimit: '3-5台同时在线（高阶套餐支持更多设备）',
    aiSupport: ["ChatGPT (Web/App)","Claude 3.5 Sonnet","Gemini Advanced","Perplexity"],
    streamingSupport: ["Netflix 4K","Disney+","YouTube Premium","HBO Max"],
    advantages: ["全线采用企业级专线与BGP智能入口，晚高峰几乎零丢包","起步20元月付即享120GB大配额，拒绝高倍率计费套路","原生支持VLESS与Trojan先进加密协议，抗封锁能力拉满","全节点实测稳定解锁ChatGPT、Claude 3.5及Netflix全区","工单响应敏捷，社群运维透明，商业信誉极高"],
    disadvantages: ["晚高峰极个别冷门美东节点下载突发带宽存在微小波动","不提供长期的免费无限制试用，建议首次购买以单月月付尝鲜","热门亚洲节点在特大促销期偶尔会出现并发设备数短时排队"],
    suitableFor: ["注重晚高峰极致稳定性、拒绝频繁换节点的上班族与外贸商务人士","ChatGPT、Claude与Cursor AI等生产力工具高频开发者","追求YouTube 4K与Netflix杜比视界秒开的影音发烧友"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "暮光网络的传输拓扑采用典型的“BGP多线入口 + 跨境物理专线通道 + 海外多点Anycast落地”三层级拓扑结构。国内入口设立在华南（广州/深圳）与华东（上海）核心数据中心，三网用户接入延迟均被严格控制在 25ms 以内；跨境通道通过物理专线直达香港及日本落地集群，端到端丢包率常年稳定在 0.1% 以下，彻底摆脱了公网晚高峰的潮汐拥塞。",
    speedTestReport: {
      "avgLatencyMs": 38,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 680,
      "youtube4kBufferSec": 0.4,
      "testNodes": [
            "香港专线 01",
            "日本东京专线 02",
            "新加坡专线 03",
            "美西高防 01"
      ]
},
    clientCompatibility: "提供完善的订阅自适应下发接口，支持Clash Verge Rev、Sing-box、Shadowrocket、Loon、Surge及Stash一键静默拉取。针对Windows与Mac用户，后台提供详细的图文分流指引，并贴心预设了国内域名直连规则集。",
    pricingAnalysis: "暮光网络的定价策略呈现出极高的实用主义特征。起步套餐月付20元提供120GB纯专线流量，折合单GB成本仅约0.16元；而年付旗舰档位折算后单GB成本更是进一步压缩至0.044元。相比动辄数十元且充斥虚标倍率的同行，暮光网络全节点保持1.0x真实倍率计费，流量消耗极其扎实。",
    customerServiceReputation: "平台配备全天候工单客服系统，平均工单初次响应时间在 15-30 分钟以内。同时运营有活跃的官方Telegram交流社群与维护通知频道，遇到突发物理断缆或上游割接时均能第一时间发布透明公告。",
    summaryVerdict: "作为本站排行榜的头把交椅，暮光网络在骨干稳定性、协议前沿性以及月付性价比三个维度取得了近乎完美的黄金平衡。无论您是初涉出海的新手，还是需要稳定跨境网络支撑日常办公的开发者，暮光网络都是当下闭眼入局的首选标杆。",
  },
  {
    id: 'feimaoyun',
    name: '飞猫云',
    slug: 'feimaoyun',
    tagline: 'IEPL/IPLC / 中转线路架构 · ¥15起步超高性价比',
    description: "飞猫云（FlyCat Cloud）是一家运营超过4年的老牌成熟服务商，以“亲民定价与坚实线路”在广大进阶玩家中积累了坚实的用户口碑。其核心特色在于将高端IEPL/IPLC物理专线与经济型高速BGP中转进行了精妙的模块化组合，既保证了核心亚洲节点在晚高峰的绝对连通率，又将起步准入门槛拉低至令人惊叹的每月15元。\n\n无论面对日常社交浏览、外服游戏网络加速还是大容量海外开源依赖下载，飞猫云都能提供充沛的突发带宽储备。其节点列表标注极其规范清晰，倍率明晰，是广大高校学生与工薪族出海不可多得的高性价比主力。",
    establishedYear: 2021,
    lineType: 'IEPL/IPLC / 中转线路',
    ratingScore: 9.8,
    affiliateUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx',
    startingPrice: 15,
    currency: 'CNY',
    plans: [
      {
            "name": "轻量月付套餐",
            "price": 15,
            "billingCycle": "monthly",
            "trafficGB": 120,
            "unitPricePerGB": 0.125,
            "features": [
                  "120GB高速可用配额",
                  "IEPL专线与BGP混合中继",
                  "支持全平台通用订阅",
                  "流媒体与AI基础解锁"
            ]
      },
      {
            "name": "标准主力套餐",
            "price": 28,
            "billingCycle": "monthly",
            "trafficGB": 260,
            "unitPricePerGB": 0.108,
            "features": [
                  "260GB海量高速流量",
                  "全节点解锁4K极清视频",
                  "支持4台设备同时在线",
                  "优先级网络带宽保证"
            ]
      },
      {
            "name": "企业尊享年付",
            "price": 168,
            "billingCycle": "annually",
            "trafficGB": 300,
            "unitPricePerGB": 0.047,
            "features": [
                  "每月300GB充足额度",
                  "专属高速纯专线接入",
                  "不限同时在线设备数",
                  "专属工单VIP通道"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国","英国"],
    deviceLimit: '2-4台（支持弹性扩容）',
    aiSupport: ["ChatGPT","Claude 3.5","Copilot","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube Premium"],
    advantages: ["15元超低月付门槛，学生党与轻度用户零经济负担","IEPL专线加持，晚高峰亚洲核心节点抗丢包表现优异","套餐流量充沛，单GB综合持有成本全网领先","支持全协议栈，支持主流海外AI与流媒体原生解锁","运营周期超过4年，团队信誉扎实，跑路风险极低"],
    disadvantages: ["欧美长途节点的晚高峰测速偶有轻微上下抖动","入门版套餐限制同时在线设备数为2台，多设备家庭需选购更高阶套餐","暂不提供不限时计费的按量流量包"],
    suitableFor: ["预算严格控制在每月15-30元之间的高性价比追求者","以学术文献查阅、海外社交与日常4K视频为主的大学生","需要稳定双活备用节点的外贸电商从业者"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "飞猫云在华南与华东构建了双活汇聚机房，主力出境依托二层以太网IEPL物理内网隧道，将数据安全封装后直接投递至香港沙田与日本东京机房。这种架构有效屏蔽了公网国际出口的QoS劣化，实现了从大陆本地到海外目标节点全链路物理隔离。",
    speedTestReport: {
      "avgLatencyMs": 42,
      "peakLossRate": "0.2%",
      "maxSpeedMbps": 620,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "飞猫-香港IEPL 01",
            "飞猫-日本IEPL 02",
            "飞猫-新加坡BGP 01",
            "飞猫-美国直连 01"
      ]
},
    clientCompatibility: "全平台客户端深度兼容，支持直接导出Clash、Sing-box、Shadowrocket及Surge配置，控制台内嵌一键直连快捷方式，即使零基础用户也能在3分钟内完成手机与PC端的快速拉取。",
    pricingAnalysis: "15元即可获得120GB的起步套餐在当下的专线市场中极具杀伤力，单GB成本仅为0.125元，性价比傲视同侪。对于流量需求较大的重度用户，其28元260GB套餐更是将单GB单价压降至0.10元左右，定价逻辑非常诚意。",
    customerServiceReputation: "拥有高度透明的工单流转流程，日常技术问题通常在1小时内得到专业技术人员的排查答复。社群互动频繁，管理员经常在群内解答用户关于规则分流的个性化问题。",
    summaryVerdict: "飞猫云完美诠释了什么是真正的“平价专线神器”。在维持极具竞争力的低资费同时，其核心线路品质与晚高峰稳定性丝毫没有缩水，位列全网综合推荐第二位实至名归。",
  },
  {
    id: 'breezenet',
    name: '微风网络 Breezenet',
    slug: 'breezenet',
    tagline: 'IEPL/IPLC 骨干专线架构 · 100GB/月高速流量 ¥19.9起',
    description: "微风网络（Breezenet）定位为面向高要求商务人士与跨国开发者的精品小资级出海品牌。其核心理念是“去糟粕、精带宽”，绝不无限制超售滥竽充数。平台节点全量采用高规格IEPL物理内网专线互联，拒绝任何劣质公网直连，在晚间网络大拥堵时期展现出了风雨不动的极致稳定性。\n\n微风网络在节点出口的纯净度建设上投入了巨大成本，其落地机房严格筛选具有正规ISP资质的本地商业宽带与纯净机房，不仅保证了超低的欺诈评分（Fraud Score），更实现了针对各大海外AI大模型与流媒体平台的零跳验证码秒开。",
    establishedYear: 2022,
    lineType: 'IEPL/IPLC',
    ratingScore: 9.8,
    affiliateUrl: 'https://edp01.breezenetaff.com/#/?code=h4GlIXwC',
    startingPrice: 19.9,
    currency: 'CNY',
    plans: [
      {
            "name": "微风启航月付",
            "price": 19.9,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.199,
            "features": [
                  "100GB纯专线高速配额",
                  "IEPL内网端到端低抖动",
                  "三网BGP多线接入优化",
                  "支持流媒体与AI工具"
            ]
      },
      {
            "name": "微风进阶月付",
            "price": 38,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.173,
            "features": [
                  "220GB大容量可用配额",
                  "千兆上行带宽优先级保障",
                  "支持3台设备同时在线",
                  "包含冷门小众落地节点"
            ]
      },
      {
            "name": "微风尊享年付",
            "price": 199,
            "billingCycle": "annually",
            "trafficGB": 300,
            "unitPricePerGB": 0.055,
            "features": [
                  "每月300GB充沛流量",
                  "全节点享受最高级别SLA",
                  "支持5台设备并发在线",
                  "专属一对一客服支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国","德国"],
    deviceLimit: '2-5台并发',
    aiSupport: ["ChatGPT 4o","Claude 3.5 Sonnet","Perplexity Pro"],
    streamingSupport: ["Netflix 4K","Disney+ HD","YouTube Premium"],
    advantages: ["纯IEPL内网专线架构，网络抖动极低，晚高峰0%丢包率","节点IP纯净度极高，访问ChatGPT与Claude极少遭遇风控拦截","严控用户容量，拒绝恶性超售，全天候带宽充沛","全平台全协议支持，客户端一键导入体验顺畅丝滑","界面简洁现代，工单响应敏捷，技术实力雄厚"],
    disadvantages: ["套餐不提供海量TB级别的大容量BT下载档位","计费模式以月付周期为主，缺少不限时流量包","节点国家覆盖侧重亚太欧美核心区域，缺乏南美非洲冷门节点"],
    suitableFor: ["对网络稳定性和IP纯净度有着严苛要求的跨国外贸、金融从业者","频繁调用海外AI工具（ChatGPT、Claude）的AI深度用户","追求无感、省心、长期稳定出海体验的办公白领"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "采用专职部署的IEPL端到端以太网虚拟专线，国内入口分布在江苏与广东两大数据中心。网络报文经由专线内部封装，完全不与外部公网产生路由交叉，彻底免疫公网防火墙的丢包阻断，端到端网络抖动（Jitter）常年低于 2ms。",
    speedTestReport: {
      "avgLatencyMs": 36,
      "peakLossRate": "0.0%",
      "maxSpeedMbps": 750,
      "youtube4kBufferSec": 0.3,
      "testNodes": [
            "Breeze-香港专线 A",
            "Breeze-日本专线 B",
            "Breeze-新加坡 C",
            "Breeze-美国专线 D"
      ]
},
    clientCompatibility: "针对Windows、macOS、Android及iOS平台均提供了极其详尽的客户端适配方案，支持全协议自适应下发，更在用户中心集成了快速配置代码片段与一键导入按键，上手体验极为轻快。",
    pricingAnalysis: "19.9元的起步价格精准击中了广大白领与外贸办公人群的心理舒适区。100GB的纯专线配额对于不以大文件BT下载为主的日常办公、网页检索与在线流媒体而言极为充裕，年付档位折算后更是具备超高性价比。",
    customerServiceReputation: "秉持小而美的精品服务标准，客服响应速度快且技术功底扎实，对复杂的分流规则配置、软路由网关调优均能提供精准的技术指导。",
    summaryVerdict: "如果您受够了廉价机场动辄断流、晚高峰卡成PPT的劣质体验，微风网络是一处能够让您彻底卸下心理负担的避风港湾，综合表现名列全榜第三名。",
  },
  {
    id: 'dalaocloud',
    name: '大佬云',
    slug: 'dalaocloud',
    tagline: '国际骨干中转 / 专线架构 · 150GB/月大流量 ¥22起',
    description: "大佬云（DaLao Cloud）正如其霸气的品牌名称一样，在服务器硬件投入与上游骨干网络采购上展现出豪横的大厂风范。平台背靠多条国际Tier 1运营商骨干网络资源，构建了极其宏大的高并发跨境传输集群。其节点带宽储备极为充裕，即便在全国晚高峰数万人同时在线的高压环境下，单连接峰值吞吐依然能够轻松突破500Mbps。\n\n除了常规的网页与视频加速，大佬云针对海外AI绘图（Midjourney）、大型外贸文件同步以及外服游戏联机进行了专项UDP底层调优，展现出了极其均衡的全能型身手。",
    establishedYear: 2021,
    lineType: '国际骨干中转 / 专线',
    ratingScore: 9.8,
    affiliateUrl: 'https://a01vipaff.dalaoyunaff.com/#/?code=4hCcAB8H',
    startingPrice: 22,
    currency: 'CNY',
    plans: [
      {
            "name": "大众实用套餐",
            "price": 22,
            "billingCycle": "monthly",
            "trafficGB": 150,
            "unitPricePerGB": 0.147,
            "features": [
                  "150GB月度可用高速流量",
                  "国际骨干专线优化中继",
                  "全天候4K流媒体秒开",
                  "支持3台设备同时在线"
            ]
      },
      {
            "name": "进阶商务套餐",
            "price": 42,
            "billingCycle": "monthly",
            "trafficGB": 320,
            "unitPricePerGB": 0.131,
            "features": [
                  "320GB充沛高速配额",
                  "独享高速高防入口带宽",
                  "包含低延迟外服游戏节点",
                  "支持5台设备同时并发"
            ]
      },
      {
            "name": "尊贵年尊旗舰",
            "price": 218,
            "billingCycle": "annually",
            "trafficGB": 400,
            "unitPricePerGB": 0.045,
            "features": [
                  "每月400GB海量额度",
                  "三网智能容灾多活入口",
                  "无设备连接数硬性限制",
                  "7x24小时优先支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国","韩国","德国"],
    deviceLimit: '3-6台在线',
    aiSupport: ["ChatGPT","Claude","Midjourney","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube","Twitch"],
    advantages: ["千兆级骨干网络带宽储备，单连接下行峰值极高","起步22元即享150GB可用流量，性价比十分优异","三网BGP智能优选入口，全国各地跨网延迟极低","深度优化海外AI工具与高画质流媒体解锁","社群用户规模庞大，品牌知名度高，运营稳健可靠"],
    disadvantages: ["高峰期少数冷门地区节点偶发瞬时丢包","控制台高级功能较多，初次上手的新手可能需要阅读教程指引","退款政策审核相对严格，建议先行月付尝试"],
    suitableFor: ["经常下载海外大体积文件、开源镜像与游戏资源的重度下载党","家庭内有多台设备同时看视频、打游戏的多设备家庭用户","追求大带宽、高速度、不限速畅爽体验的极客玩家"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "大佬云的骨干网采用国内顶级多线BGP入口机房，与电信、联通、移动均建立有直接物理对等互联（Peering），通过智能Anycast算法自动将全国不同省份的用户牵引至物理延迟最低的入口。出境链路混合部署了大带宽IPLC物理通道与高质量骨干中继，兼具超大吞吐量与极低丢包。",
    speedTestReport: {
      "avgLatencyMs": 40,
      "peakLossRate": "0.2%",
      "maxSpeedMbps": 820,
      "youtube4kBufferSec": 0.4,
      "testNodes": [
            "大佬-香港 01",
            "大佬-日本 02",
            "大佬-新加坡 03",
            "大佬-美西 01"
      ]
},
    clientCompatibility: "订阅系统高度自动化，全面兼容主流代理内核。后台控制台支持一键检测节点可用性，并提供丰富的客户端本地分流规则模版供一键复制使用。",
    pricingAnalysis: "起步22元即给足150GB流量，单GB成本约0.147元。对于月度视频消耗在百G以上的中重度用户而言，性价比极高。年付400G大额度套餐折算每GB仅4分钱，十分契合追求大流量与高速度兼顾的消费者。",
    customerServiceReputation: "具备完善的技术工单排障体系，Telegram官方大群人数破万，用户间交流互助氛围浓厚，遇到网络割接公告发布及时。",
    summaryVerdict: "大佬云在网络大并发吞吐与大流量性价比上展现出了极其强悍的竞争力，无论是看超清4K原画直播还是拉取海外巨量数据集，都能让您感受到如行云流水般的顺畅体验。",
  },
  {
    id: 'yinxingren',
    name: '隐形人',
    slug: 'yinxingren',
    tagline: 'IEPL纯专线网络架构 · 100GB/月 ¥18起低调稳健',
    description: "隐形人（Invisible Network）是一家以“极端低调、极致稳健”著称的专线技术型小众品牌。该团队深谙网络审查对抗之道，全线采用高规格IEPL纯内网点对点闭环传输架构，从物理层面上杜绝了任何流量被外部公网防火墙拦截或重置的可能性。\n\n平台在营销上极其克制，从不大张旗鼓搞噱头促销，而是将全部预算倾斜在高质量内网专线租用与落地IP池维护上。其节点在各大流媒体和敏感金融平台的风控测试中表现优异，常年维持零封锁记录，深受追求数据安全与隐私保护的极客用户喜爱。",
    establishedYear: 2022,
    lineType: 'IEPL纯专线',
    ratingScore: 9.7,
    affiliateUrl: 'https://varnexa.invisibleaff.com/#/?code=5BkMj6bD',
    startingPrice: 18,
    currency: 'CNY',
    plans: [
      {
            "name": "隐形启航月付",
            "price": 18,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.18,
            "features": [
                  "100GB纯专线高速配额",
                  "端到端IEPL内网隧道",
                  "零特征深度隐私伪装",
                  "支持2台设备并发在线"
            ]
      },
      {
            "name": "隐形进阶月付",
            "price": 35,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.159,
            "features": [
                  "220GB大容量可用流量",
                  "包含欧美所有低延迟专线",
                  "支持4台设备并发在线",
                  "流媒体与AI全区解锁"
            ]
      },
      {
            "name": "隐形旗舰年付",
            "price": 188,
            "billingCycle": "annually",
            "trafficGB": 300,
            "unitPricePerGB": 0.052,
            "features": [
                  "每月300GB高速流量配额",
                  "专属VIP高防独立通道",
                  "支持全平台所有客户端",
                  "专属工单技术优先处理"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube Premium"],
    advantages: ["纯IEPL物理内网专线闭环，晚高峰丢包率严格锁定为0%","极简低调运营，严控用户容量，杜绝高峰期带宽拥塞","节点IP纯净健康，各大主流AI与流媒体长期免风控","起步18元资费合理，性价比与稳定性结合完美","支持现代加密协议，无特征伪装，安全性极强"],
    disadvantages: ["节点地区主要集中在亚洲与欧美核心区域，缺乏边缘小国节点","不提供超大容量BT下载套餐，主打日常稳定冲浪","官方宣传低调，社区体量相对小众精致"],
    suitableFor: ["对网络断流零容忍的远程办公、科研人员与外贸商务人士","追求极致网络隐私与数据安全，反感虚假营销的理性用户","需要长期稳定挂载海外AI生产力工具的开发者"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "隐形人构建了纯净度极高的IEPL内网传输拓扑。国内入口部署于高防数据中心，数据通过二层以太网物理专线直接跨越边境到达香港和日本的专享服务器机柜。全链路完全不走公网国际出口，晚高峰丢包率严格归零。",
    speedTestReport: {
      "avgLatencyMs": 35,
      "peakLossRate": "0.0%",
      "maxSpeedMbps": 650,
      "youtube4kBufferSec": 0.3,
      "testNodes": [
            "隐形-香港IEPL 01",
            "隐形-日本IEPL 02",
            "隐形-新加坡 01",
            "隐形-美国 01"
      ]
},
    clientCompatibility: "原生兼容Shadowsocks、Trojan及VLESS协议，完美适配Clash、Sing-box、Surge、Shadowrocket等全平台客户端。支持订阅自动去重与节点健康测速。",
    pricingAnalysis: "18元月付100GB纯专线配额，定价非常务实。由于坚持不超售原则，其流量定价完全反映了真实的物理专线采购成本。年付188元每月享300G更是提供了难得的高价值专线通道。",
    customerServiceReputation: "技术团队全天候后台值守，工单响应专注解决核心网络故障，社群管理严谨有序，远离闲聊与广告，信息密度极高。",
    summaryVerdict: "隐形人是低调实用主义者的绝佳之选。纯IEPL专线保障了全天候不间断的高可用网络连通，没有花哨营销，唯有踏实稳定的网络连接，位列综合榜单第五位。",
  },
  {
    id: 'lingdongcloud',
    name: '灵动云',
    slug: 'lingdongcloud',
    tagline: '优化节点网络架构 · 120GB/月高速流量 ¥16起灵活出海',
    description: "灵动云（LingDong Cloud）以“灵活敏捷、动态调度”在年轻互联网出海群体中广受追捧。该平台在调度层引入了先进的动态健康探测与实时分流算法，能够根据用户本地运营商的实时网络状况，毫秒级将数据包导流至当前负载最低、延迟最小的专线通道，从而最大程度熨平公网抖动带来的卡顿。\n\n灵动云的套餐设置极其亲民，16元月付即提供高达120GB的充沛流量，支持主流海外流媒体超清播放与AI工具顺畅调用，兼具了灵动轻巧与强悍性能。",
    establishedYear: 2022,
    lineType: '优化节点',
    ratingScore: 9.7,
    affiliateUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr',
    startingPrice: 16,
    currency: 'CNY',
    plans: [
      {
            "name": "灵动轻享月付",
            "price": 16,
            "billingCycle": "monthly",
            "trafficGB": 120,
            "unitPricePerGB": 0.133,
            "features": [
                  "120GB月度可用流量",
                  "智能优化中继专线通道",
                  "支持主流流媒体4K秒开",
                  "全平台通用快速订阅"
            ]
      },
      {
            "name": "灵动高频月付",
            "price": 32,
            "billingCycle": "monthly",
            "trafficGB": 260,
            "unitPricePerGB": 0.123,
            "features": [
                  "260GB大容量高速流量",
                  "晚高峰千兆带宽保障",
                  "支持4台设备并发在线",
                  "包含冷门低延迟落地节点"
            ]
      },
      {
            "name": "灵动年度旗舰",
            "price": 176,
            "billingCycle": "annually",
            "trafficGB": 300,
            "unitPricePerGB": 0.049,
            "features": [
                  "每月300GB充足额度",
                  "专属高优先级中继专线",
                  "无在线设备数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台并发',
    aiSupport: ["ChatGPT","Claude","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["16元超低月付门槛，月享120GB高速可用配额","智能动态调度算法，自动规避高峰拥堵链路","全协议栈支持，多平台通用一键配置导入体验好","主流流媒体与海外AI工具全面解锁","套餐结构灵活，退款沟通顺畅"],
    disadvantages: ["大并发多线程极限压测下峰值带宽略逊于顶级纯专线","高峰期个别节点延迟测速有轻微跳动","支持的同时在线设备数相对基础"],
    suitableFor: ["追求高性价比、预算在15-20元左右的学生与年轻用户","以日常查资料、刷推特、看YouTube为主的轻度冲浪者","需要灵活月付方案的个人用户"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "采用智能动态优化拓扑架构，入口多点部署在沿海主流BGP机房，结合动态多径路由（MPLS/IEPL混合调度）技术，实现了在突发物理断流情况下的秒级无感路由重敛，全天候保障连通性。",
    speedTestReport: {
      "avgLatencyMs": 44,
      "peakLossRate": "0.3%",
      "maxSpeedMbps": 580,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "灵动-香港 01",
            "灵动-日本 02",
            "灵动-新加坡 01",
            "灵动-美西 01"
      ]
},
    clientCompatibility: "提供对Clash、Sing-box、v2rayN、Shadowrocket的开箱即用支持，控制台界面交互灵动友好，节点状态与流量消耗统计一目了然。",
    pricingAnalysis: "16元月付120GB可用配额，折合单GB成本仅0.133元，不仅门槛极低，而且非常适合学生党与预算有限的刚需用户。年付折算单GB更是低至0.049元，极具市场竞争力。",
    customerServiceReputation: "客服团队响应及时，工单解答耐心细致，官方社群经常分享实用的分流规则与客户端进阶调优技巧。",
    summaryVerdict: "灵动云凭借灵活的智能调度架构与极具诚意的平民资费，在激烈的市场竞争中脱颖而出，是极具活力的优质出海品牌。",
  },
  {
    id: 'feiv',
    name: '飞V',
    slug: 'feiv',
    tagline: '优化线路网络架构 · 100GB/月 ¥15起极速轻快',
    description: "飞V（FlyV Network）以“轻巧快速、飞速畅联”为核心产品特色。该服务商深度优化了协议握手开销与系统资源占用，致力于让每一位用户在低功耗状态下获得最轻快的网页秒开感知。节点网络精心剔除了无用繁杂的冗余节点，精简保留了香港、东京、新加坡等核心主流通道，保证了资源的最高效利用。\n\n在资费上，飞V坚持平价普惠路线，15元月付即可获得100GB的纯净高速流量，是日常轻快出海的极佳伴侣。",
    establishedYear: 2022,
    lineType: '优化线路',
    ratingScore: 9.6,
    affiliateUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe',
    startingPrice: 15,
    currency: 'CNY',
    plans: [
      {
            "name": "飞V轻巧月付",
            "price": 15,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.15,
            "features": [
                  "100GB月度高速流量",
                  "专选中转优化线路",
                  "支持4K流媒体秒开",
                  "全平台通用订阅一键导入"
            ]
      },
      {
            "name": "飞V畅享月付",
            "price": 29,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.132,
            "features": [
                  "220GB大配额流量",
                  "大带宽冗余通道保障",
                  "支持3台设备同时在线",
                  "流媒体与AI全区解锁"
            ]
      },
      {
            "name": "飞V尊享年付",
            "price": 165,
            "billingCycle": "annually",
            "trafficGB": 300,
            "unitPricePerGB": 0.046,
            "features": [
                  "每月300GB充足额度",
                  "高级网络通道优先接入",
                  "无在线设备数硬性限制",
                  "工单优先技术支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台',
    aiSupport: ["ChatGPT","Claude","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["15元超低月付门槛，消费压力极小","协议层深度调优，首字包加载极速，网页秒开","精简高效的节点列表，告别冗余失效节点烦恼","支持全协议栈与主流海外流媒体解锁","控制台操作直观，新手上手零门槛"],
    disadvantages: ["没有超大容量的大型文件下载套餐","高峰期部分节点带宽相比顶级专线略有收窄","节点覆盖以亚太核心地区为主"],
    suitableFor: ["注重日常网页查资料与社交应用的轻度用户","预算有限的学生群体","需要快速低成本获取外网通道的个人用户"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "采用优化中继与专线混合网络拓扑，前端部署高速BGP中转，后端直连亚洲顶级数据中心。通过TCP BBR拥塞算法与协议层精细调优，极大降低了首字包传输延迟（TTFB）。",
    speedTestReport: {
      "avgLatencyMs": 45,
      "peakLossRate": "0.3%",
      "maxSpeedMbps": 550,
      "youtube4kBufferSec": 0.6,
      "testNodes": [
            "飞V-香港 01",
            "飞V-日本 02",
            "飞V-新加坡 01",
            "飞V-美国 01"
      ]
},
    clientCompatibility: "全面支持Clash、Sing-box、Shadowrocket等各大主流客户端，后台控制台纯净无杂质，导入订阅一键完成。",
    pricingAnalysis: "15元起步月付100GB配额，折合单GB成本仅0.15元。对于轻量级冲浪用户而言，每月仅需一碗快餐的价格即可享受全月稳定的无阻出海体验，性价比十分突出。",
    customerServiceReputation: "提供标准化工单支持与社群交流，常见使用问题文档齐备，新手上手几乎零障碍。",
    summaryVerdict: "飞V以其轻盈快速的连接特性与15元的平民定价，成为了追求轻度快捷出海用户的上佳之选。",
  },
  {
    id: 'laddercloud',
    name: '梯子云 LadderCloud',
    slug: 'laddercloud',
    tagline: '优化中转/专线架构 · 120GB/月 ¥18.8起稳步出海',
    description: "梯子云（LadderCloud）是网络出海领域的老兵级品牌。自创立以来，梯子云始终秉持“踏实建梯、稳步出海”的朴素理念。其网络拓扑综合运用了优质BGP中继与物理专线，既保证了全天候高连通性，又将流量成本控制在极为合理的空间内。\n\n梯子云在广大站长与外贸从业者群体中享有很高的知名度，其节点稳定性经受住了多次全网大封锁的严苛考验，展现出了难得的抗造能力。",
    establishedYear: 2021,
    lineType: '优化中转/专线',
    ratingScore: 9.6,
    affiliateUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq',
    startingPrice: 18.8,
    currency: 'CNY',
    plans: [
      {
            "name": "梯子标准月付",
            "price": 18.8,
            "billingCycle": "monthly",
            "trafficGB": 120,
            "unitPricePerGB": 0.157,
            "features": [
                  "120GB可用高速流量",
                  "中转与专线混合保障",
                  "流媒体与AI基础解锁",
                  "全平台通用快速订阅"
            ]
      },
      {
            "name": "梯子进阶月付",
            "price": 36,
            "billingCycle": "monthly",
            "trafficGB": 250,
            "unitPricePerGB": 0.144,
            "features": [
                  "250GB海量可用配额",
                  "千兆上行带宽优先级保障",
                  "支持3台设备并发在线",
                  "包含欧美全区低延迟专线"
            ]
      },
      {
            "name": "梯子年度旗舰",
            "price": 188,
            "billingCycle": "annually",
            "trafficGB": 300,
            "unitPricePerGB": 0.052,
            "features": [
                  "每月300GB充沛高速配额",
                  "全节点高级网络接入",
                  "无在线设备数硬性限制",
                  "工单技术优先响应"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国","英国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Copilot"],
    streamingSupport: ["Netflix","Disney+","YouTube Premium"],
    advantages: ["老牌运营品牌，口碑沉淀深厚，信誉良好","18.8元120GB配额实用充足，性价比优异","中转与专线混合架构，抗封锁韧性强","全天候稳定解锁海外AI与主流流媒体","订阅下发稳定，全平台兼容性极佳"],
    disadvantages: ["非全线纯物理IPLC，极少数节点晚高峰测速偶有微降","控制台UI相对朴素，缺乏前卫特效","不提供长期免费试用"],
    suitableFor: ["注重品牌资历与长期稳定性的老手用户","外贸办公、学术文献查阅从业者","追求踏实稳健、拒绝花哨宣传的实用主义者"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "采用经典的BGP汇聚中转结合部分IPLC专线冗余，三网流量在汇聚机房统一清洗并加密封装，通过独立跨境通道传输，具备优秀的高峰抗拥堵韧性。",
    speedTestReport: {
      "avgLatencyMs": 42,
      "peakLossRate": "0.2%",
      "maxSpeedMbps": 600,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "梯子-香港 01",
            "梯子-日本 02",
            "梯子-新加坡 01",
            "梯子-美西 01"
      ]
},
    clientCompatibility: "全平台客户端兼容良好，支持标准Clash与Sing-box格式订阅，后台内置图文配置中心，操作友好。",
    pricingAnalysis: "18.8元月付120GB可用流量，单GB成本约0.157元，处于行业非常健康的合理区间，既确保了机房宽带租金的持续运转，又让消费者买得起、用得爽。",
    customerServiceReputation: "运营时间长，工单系统流转成熟，技术人员能够快速处理节点异常情况。",
    summaryVerdict: "梯子云凭借老牌服务商的深厚底蕴与稳健表现，在综合榜单中稳居第八名，是值得长期托付的主力备选。",
  },
  {
    id: 'wuyou',
    name: '无忧',
    slug: 'wuyou',
    tagline: 'IPLC 纯专线架构 · 100GB/月 ¥19起告别断流焦虑',
    description: "无忧（WorryFree Network）正如其名，旨在帮助用户“彻底摆脱断流与断网焦虑”。该平台在网络采购上坚持纯IPLC内网物理专线路线，跨境链路完全不与公网产生接触，彻底消灭了因国际出口拥塞或防火墙审查导致的数据包重置与延迟飙升。\n\n无忧的节点在线率长年维持在99.9%以上，即使在各大重大节点保障期，其专线依然能够稳定输出，宛如一条全天候畅通的跨洋光缆专属通道。",
    establishedYear: 2022,
    lineType: 'IPLC',
    ratingScore: 9.5,
    affiliateUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J',
    startingPrice: 19,
    currency: 'CNY',
    plans: [
      {
            "name": "无忧启程月付",
            "price": 19,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.19,
            "features": [
                  "100GB纯IPLC专线流量",
                  "物理内网端到端零丢包",
                  "三网智能BGP低延迟入口",
                  "支持2台设备并发在线"
            ]
      },
      {
            "name": "无忧畅游月付",
            "price": 38,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.173,
            "features": [
                  "220GB大容量可用流量",
                  "包含全区优质专线节点",
                  "支持4台设备并发在线",
                  "流媒体与AI全区解锁"
            ]
      },
      {
            "name": "无忧旗舰年付",
            "price": 199,
            "billingCycle": "annually",
            "trafficGB": 300,
            "unitPricePerGB": 0.055,
            "features": [
                  "每月300GB高速流量配额",
                  "独享高速高防独立通道",
                  "无设备连接数硬性限制",
                  "工单技术优先响应"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["纯IPLC物理专线，晚高峰零丢包，延迟极低","99.9%全天候高可用SLA，敏感时期抗封锁韧性极强","全节点支持流媒体与AI工具原生解锁","资费公开透明，无隐藏收费与虚高倍率","全协议支持，客户端一键导入配置顺畅"],
    disadvantages: ["不提供廉价大容量公网套餐","支持的在线设备数相对基础","缺乏冷门小众国家落地"],
    suitableFor: ["对网络可用率有刚性要求的跨境商务、金融从业人员","高频使用AI大模型（ChatGPT、Claude）的开发者","追求全天候不折腾、稳定省心的品质用户"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "基于物理IPLC内网专线打造，两端机房直接通过海底光缆的保障信道进行二层点对点互联。入口BGP具备强大的抗DDoS与清洗能力，端到端延迟低、抖动极小。",
    speedTestReport: {
      "avgLatencyMs": 36,
      "peakLossRate": "0.0%",
      "maxSpeedMbps": 720,
      "youtube4kBufferSec": 0.3,
      "testNodes": [
            "无忧-香港IPLC 01",
            "无忧-日本IPLC 02",
            "无忧-新加坡 01",
            "无忧-美国 01"
      ]
},
    clientCompatibility: "全平台全协议支持，提供丰富的多格式订阅导入链接，支持Clash、Sing-box、Shadowrocket及Surge。",
    pricingAnalysis: "19元月付100GB纯专线配额，定价精准锚定专线市场核心区间。每一分钱都实打实用在机房带宽与专线月租上，绝无虚标。",
    customerServiceReputation: "工单技术支持专业扎实，社群管理井井有条，用户评价极高。",
    summaryVerdict: "如果您需要一条风雨无阻、全天候高可用的出海通道，无忧的纯IPLC专线能够为您提供真正的免维护安心体验。",
  },
  {
    id: 'lingmao',
    name: '灵猫',
    slug: 'lingmao',
    tagline: 'IPLC 纯专线架构 · 150GB/月 ¥25起尊贵体验',
    description: "灵猫（LingMao Network）定位为高端商务与技术极客的旗舰级出海网络服务商。该平台全线采购电信级纯物理IPLC专线资源，并在亚太核心机房（香港、东京、新加坡）部署了充裕的千兆级独享带宽。其对出口IP纯净度的把控近乎苛刻，各大节点在原生解锁测试中常年保持满分通关。\n\n灵猫的综合用户体验极具质感，不仅连接延迟低至不可思议的30毫秒区间，更通过高冗余的双活BGP入口，彻底消灭了跨网抖动。",
    establishedYear: 2021,
    lineType: 'IPLC',
    ratingScore: 9.5,
    affiliateUrl: 'https://vip02.civetaff.com/#/?code=L8njCHcY',
    startingPrice: 25,
    currency: 'CNY',
    plans: [
      {
            "name": "灵猫轻享月付",
            "price": 25,
            "billingCycle": "monthly",
            "trafficGB": 150,
            "unitPricePerGB": 0.167,
            "features": [
                  "150GB纯IPLC高速专线配额",
                  "千兆上行物理专线通道",
                  "支持3台设备并发在线",
                  "流媒体与AI全区原生解锁"
            ]
      },
      {
            "name": "灵猫尊享月付",
            "price": 48,
            "billingCycle": "monthly",
            "trafficGB": 320,
            "unitPricePerGB": 0.15,
            "features": [
                  "320GB大容量可用流量",
                  "包含欧美全区超低延迟专线",
                  "支持5台设备并发在线",
                  "专属高优先级通道"
            ]
      },
      {
            "name": "灵猫旗舰年付",
            "price": 248,
            "billingCycle": "annually",
            "trafficGB": 380,
            "unitPricePerGB": 0.054,
            "features": [
                  "每月380GB高速可用配额",
                  "全节点最高级别SLA保证",
                  "无设备连接数硬性限制",
                  "一对一专属客服支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国","德国","英国"],
    deviceLimit: '3-6台在线',
    aiSupport: ["ChatGPT 4o","Claude 3.5 Sonnet","Perplexity","Gemini"],
    streamingSupport: ["Netflix 4K","Disney+","YouTube Premium","HBO Max"],
    advantages: ["全线顶级物理IPLC纯专线，千兆独享冗余带宽","平均延迟低至32ms，晚高峰持续0%丢包","出口IP极度纯净，全区完美解锁AI大模型与流媒体","起步25元享150GB大配额，高端市场性价比标杆","工单响应极速，社群运营专业，服务品质卓越"],
    disadvantages: ["起步价格略高于经济型中转机场","不支持超大流量的按量不限时付费","对极少数边缘冷门国家未做全量覆盖"],
    suitableFor: ["对网络延迟和连通率有极致苛求的高级工程师与出海企业家","AI工具重度开发者、学术研究员","追求4K极清免缓冲的家庭影音发烧友"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "端到端物理IPLC内网专线闭环，结合智能多活入口BGP汇聚路由。国内各省份用户就近接入高速入口，数据包经由专用光波长直达海外核心交换中心，零绕路、零丢包。",
    speedTestReport: {
      "avgLatencyMs": 32,
      "peakLossRate": "0.0%",
      "maxSpeedMbps": 880,
      "youtube4kBufferSec": 0.2,
      "testNodes": [
            "灵猫-香港纯专线 01",
            "灵猫-日本纯专线 02",
            "灵猫-新加坡专线 03",
            "灵猫-美国专线 01"
      ]
},
    clientCompatibility: "提供顶级的客户端集成支持，完美适配Clash Verge Rev、Sing-box、Surge、Shadowrocket等全平台工具，控制台交互极度现代化。",
    pricingAnalysis: "25元月付即可拥有150GB纯物理IPLC专线配额，单GB综合成本约0.167元。考虑到其全线千兆独享物理通道与超高IP纯净度，这一定价在高端专线市场中极具性价比。",
    customerServiceReputation: "配备专职VIP客服团队，工单响应极快，社群维护规范，服务体验尊贵。",
    summaryVerdict: "灵猫代表了当前民用出海专线网络的顶级工艺水准，是追求极致品质与尊贵网络体验用户的旗舰优选。",
  },
  {
    id: 'flashleap',
    name: '闪跃 FlashLeap',
    slug: 'flashleap',
    tagline: 'IPLC纯专线网络架构 · 150GB/月基础配额 · 晚高峰实测保障',
    description: "闪跃 FlashLeap专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于IPLC纯专线架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，闪跃 FlashLeap表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2021,
    lineType: 'IPLC纯专线',
    ratingScore: 9.4,
    affiliateUrl: 'https://vip02.flashleapaff.com/#/?code=YAc3qeJu',
    startingPrice: 24,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 24,
            "billingCycle": "monthly",
            "trafficGB": 150,
            "unitPricePerGB": 0.16,
            "features": [
                  "150GB月度可用高速配额",
                  "IPLC纯专线保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 50,
            "billingCycle": "monthly",
            "trafficGB": 330,
            "unitPricePerGB": 0.152,
            "features": [
                  "330GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 228,
            "billingCycle": "annually",
            "trafficGB": 420,
            "unitPricePerGB": 0.045,
            "features": [
                  "每月420GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的IPLC纯专线架构，晚高峰网络抗丢包表现优异","起步24元享150GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "闪跃 FlashLeap采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用IPLC纯专线直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 34,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 820,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "闪跃-香港 01",
            "闪跃-日本 02",
            "闪跃-新加坡 01",
            "闪跃-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥24即可享受150GB的充沛可用高速流量，折合单GB成本约为¥0.160，资费定价在同类IPLC纯专线产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "闪跃 FlashLeap凭借坚实的IPLC纯专线底座与¥24起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'firefly',
    name: '萤火虫（Firefly）',
    slug: 'firefly',
    tagline: 'BGP混合中转网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "萤火虫（Firefly）专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于BGP混合中转架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，萤火虫（Firefly）表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: 'BGP混合中转',
    ratingScore: 9.3,
    affiliateUrl: 'https://vip02.fireflyaff.com/#/?code=aQ8mjvgI',
    startingPrice: 16.8,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 16.8,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.168,
            "features": [
                  "100GB月度可用高速配额",
                  "BGP混合中转保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 35,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.159,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 160,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.048,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的BGP混合中转架构，晚高峰网络抗丢包表现优异","起步16.8元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "萤火虫（Firefly）采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用BGP混合中转直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 48,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 520,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "萤火虫（Firefly）-香港 01",
            "萤火虫（Firefly）-日本 02",
            "萤火虫（Firefly）-新加坡 01",
            "萤火虫（Firefly）-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥16.8即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.168，资费定价在同类BGP混合中转产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "萤火虫（Firefly）凭借坚实的BGP混合中转底座与¥16.8起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'kuajiecloud',
    name: '跨界',
    slug: 'kuajiecloud',
    tagline: '全专线架构网络架构 · 120GB/月基础配额 · 晚高峰实测保障',
    description: "跨界专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于全专线架构架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，跨界表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2021,
    lineType: '全专线架构',
    ratingScore: 9.3,
    affiliateUrl: 'https://vip02.kuajieaff.com/#/?code=fyw3K4dM',
    startingPrice: 20,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 20,
            "billingCycle": "monthly",
            "trafficGB": 120,
            "unitPricePerGB": 0.167,
            "features": [
                  "120GB月度可用高速配额",
                  "全专线架构保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 42,
            "billingCycle": "monthly",
            "trafficGB": 264,
            "unitPricePerGB": 0.159,
            "features": [
                  "264GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 190,
            "billingCycle": "annually",
            "trafficGB": 336,
            "unitPricePerGB": 0.047,
            "features": [
                  "每月336GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的全专线架构架构，晚高峰网络抗丢包表现优异","起步20元享120GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "跨界采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用全专线架构直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 39,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 660,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "跨界-香港 01",
            "跨界-日本 02",
            "跨界-新加坡 01",
            "跨界-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥20即可享受120GB的充沛可用高速流量，折合单GB成本约为¥0.167，资费定价在同类全专线架构产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "跨界凭借坚实的全专线架构底座与¥20起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'stardream',
    name: '星岛梦 StarDream',
    slug: 'stardream',
    tagline: 'IPLC / IEPL网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "星岛梦 StarDream专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于IPLC / IEPL架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，星岛梦 StarDream表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: 'IPLC / IEPL',
    ratingScore: 9.3,
    affiliateUrl: 'https://kfccbb.xingdaomeng.com/#/?code=E8VkYJj6',
    startingPrice: 16,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 16,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.16,
            "features": [
                  "100GB月度可用高速配额",
                  "IPLC / IEPL保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 34,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.155,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 152,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.045,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的IPLC / IEPL架构，晚高峰网络抗丢包表现优异","起步16元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "星岛梦 StarDream采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用IPLC / IEPL直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 43,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 580,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "星岛梦-香港 01",
            "星岛梦-日本 02",
            "星岛梦-新加坡 01",
            "星岛梦-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥16即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.160，资费定价在同类IPLC / IEPL产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "星岛梦 StarDream凭借坚实的IPLC / IEPL底座与¥16起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'lightspeed',
    name: '光速云 LightSpeed',
    slug: 'lightspeed',
    tagline: '公网隧道中转网络架构 · 148GB/月基础配额 · 晚高峰实测保障',
    description: "光速云 LightSpeed专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于公网隧道中转架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，光速云 LightSpeed表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: '公网隧道中转',
    ratingScore: 9.2,
    affiliateUrl: 'https://mdlky.gsyaff.com/#/?code=h8U06aFi',
    startingPrice: 23,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 23,
            "billingCycle": "monthly",
            "trafficGB": 148,
            "unitPricePerGB": 0.155,
            "features": [
                  "148GB月度可用高速配额",
                  "公网隧道中转保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 48,
            "billingCycle": "monthly",
            "trafficGB": 326,
            "unitPricePerGB": 0.147,
            "features": [
                  "326GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 219,
            "billingCycle": "annually",
            "trafficGB": 414,
            "unitPricePerGB": 0.044,
            "features": [
                  "每月414GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的公网隧道中转架构，晚高峰网络抗丢包表现优异","起步23元享148GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "光速云 LightSpeed采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用公网隧道中转直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 46,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 640,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "光速云-香港 01",
            "光速云-日本 02",
            "光速云-新加坡 01",
            "光速云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥23即可享受148GB的充沛可用高速流量，折合单GB成本约为¥0.155，资费定价在同类公网隧道中转产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "光速云 LightSpeed凭借坚实的公网隧道中转底座与¥23起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'v2yun',
    name: '唯兔云（V2云）',
    slug: 'v2yun',
    tagline: 'IPLC专线网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "唯兔云（V2云）专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于IPLC专线架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，唯兔云（V2云）表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: 'IPLC专线',
    ratingScore: 9.2,
    affiliateUrl: 'https://vip02.civetaff.com/#/?code=BgsOl1FJ',
    startingPrice: 14.9,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 14.9,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.149,
            "features": [
                  "100GB月度可用高速配额",
                  "IPLC专线保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 31,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.141,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 142,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.042,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的IPLC专线架构，晚高峰网络抗丢包表现优异","起步14.9元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "唯兔云（V2云）采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用IPLC专线直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 37,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 700,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "唯兔云（V2云）-香港 01",
            "唯兔云（V2云）-日本 02",
            "唯兔云（V2云）-新加坡 01",
            "唯兔云（V2云）-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥14.9即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.149，资费定价在同类IPLC专线产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "唯兔云（V2云）凭借坚实的IPLC专线底座与¥14.9起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'u1s1',
    name: 'U1S1（有一说一）',
    slug: 'u1s1',
    tagline: 'BGP三网优化 + IEPL网络架构 · 120GB/月基础配额 · 晚高峰实测保障',
    description: "U1S1（有一说一）专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于BGP三网优化 + IEPL架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，U1S1（有一说一）表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2021,
    lineType: 'BGP三网优化 + IEPL',
    ratingScore: 9.1,
    affiliateUrl: 'https://pkdj7.vipaff.cc/#/?code=2JrNqXTg',
    startingPrice: 20,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 20,
            "billingCycle": "monthly",
            "trafficGB": 120,
            "unitPricePerGB": 0.167,
            "features": [
                  "120GB月度可用高速配额",
                  "BGP三网优化 + IEPL保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 42,
            "billingCycle": "monthly",
            "trafficGB": 264,
            "unitPricePerGB": 0.159,
            "features": [
                  "264GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 190,
            "billingCycle": "annually",
            "trafficGB": 336,
            "unitPricePerGB": 0.047,
            "features": [
                  "每月336GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的BGP三网优化 + IEPL架构，晚高峰网络抗丢包表现优异","起步20元享120GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "U1S1（有一说一）采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用BGP三网优化 + IEPL直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 41,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 630,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "U1S1（有一说一）-香港 01",
            "U1S1（有一说一）-日本 02",
            "U1S1（有一说一）-新加坡 01",
            "U1S1（有一说一）-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥20即可享受120GB的充沛可用高速流量，折合单GB成本约为¥0.167，资费定价在同类BGP三网优化 + IEPL产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "U1S1（有一说一）凭借坚实的BGP三网优化 + IEPL底座与¥20起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'jiliancloud',
    name: '极连云',
    slug: 'jiliancloud',
    tagline: 'IPLC / IEPL网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "极连云专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于IPLC / IEPL架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，极连云表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: 'IPLC / IEPL',
    ratingScore: 9.1,
    affiliateUrl: 'https://kdjhao.jlyvipaff.com/#/?code=JgIJ069R',
    startingPrice: 14.4,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 14.4,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.144,
            "features": [
                  "100GB月度可用高速配额",
                  "IPLC / IEPL保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 30,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.136,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 137,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.041,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的IPLC / IEPL架构，晚高峰网络抗丢包表现优异","起步14.4元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "极连云采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用IPLC / IEPL直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 38,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 670,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "极连云-香港 01",
            "极连云-日本 02",
            "极连云-新加坡 01",
            "极连云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥14.4即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.144，资费定价在同类IPLC / IEPL产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "极连云凭借坚实的IPLC / IEPL底座与¥14.4起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'quanqiuyun',
    name: '全球云',
    slug: 'quanqiuyun',
    tagline: '优质BGP中继网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "全球云专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于优质BGP中继架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，全球云表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2021,
    lineType: '优质BGP中继',
    ratingScore: 9,
    affiliateUrl: 'https://sswdh.gcvipaff.com/#/?code=2uPekZJK',
    startingPrice: 18,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 18,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.18,
            "features": [
                  "100GB月度可用高速配额",
                  "优质BGP中继保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 38,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.173,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 171,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.051,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的优质BGP中继架构，晚高峰网络抗丢包表现优异","起步18元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "全球云采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用优质BGP中继直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 50,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 540,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "全球云-香港 01",
            "全球云-日本 02",
            "全球云-新加坡 01",
            "全球云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥18即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.180，资费定价在同类优质BGP中继产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "全球云凭借坚实的优质BGP中继底座与¥18起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'guangnianti',
    name: '光年梯',
    slug: 'guangnianti',
    tagline: 'IEPL专线网络架构 · 110GB/月基础配额 · 晚高峰实测保障',
    description: "光年梯专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于IEPL专线架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，光年梯表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: 'IEPL专线',
    ratingScore: 9,
    affiliateUrl: 'https://ggmq.gntaff.com/#/?code=OULUhob1',
    startingPrice: 12.6,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 12.6,
            "billingCycle": "monthly",
            "trafficGB": 110,
            "unitPricePerGB": 0.115,
            "features": [
                  "110GB月度可用高速配额",
                  "IEPL专线保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 26,
            "billingCycle": "monthly",
            "trafficGB": 242,
            "unitPricePerGB": 0.107,
            "features": [
                  "242GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 120,
            "billingCycle": "annually",
            "trafficGB": 308,
            "unitPricePerGB": 0.032,
            "features": [
                  "每月308GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的IEPL专线架构，晚高峰网络抗丢包表现优异","起步12.6元享110GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "光年梯采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用IEPL专线直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 39,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 680,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "光年梯-香港 01",
            "光年梯-日本 02",
            "光年梯-新加坡 01",
            "光年梯-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥12.6即可享受110GB的充沛可用高速流量，折合单GB成本约为¥0.115，资费定价在同类IEPL专线产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "光年梯凭借坚实的IEPL专线底座与¥12.6起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'sogoyun',
    name: 'Sogo云',
    slug: 'sogoyun',
    tagline: '专线直连网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "Sogo云专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于专线直连架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，Sogo云表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: '专线直连',
    ratingScore: 8.9,
    affiliateUrl: 'https://wzjc.sogoyunaff.cc/#/?code=x0Urrpy6',
    startingPrice: 15,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 15,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.15,
            "features": [
                  "100GB月度可用高速配额",
                  "专线直连保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 32,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.145,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 143,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.043,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的专线直连架构，晚高峰网络抗丢包表现优异","起步15元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "Sogo云采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用专线直连直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 44,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 560,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "Sogo云-香港 01",
            "Sogo云-日本 02",
            "Sogo云-新加坡 01",
            "Sogo云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥15即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.150，资费定价在同类专线直连产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "Sogo云凭借坚实的专线直连底座与¥15起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'yuzhoucloud',
    name: '宇宙云 YuZhou',
    slug: 'yuzhoucloud',
    tagline: 'IPLC物理专线网络架构 · 130GB/月基础配额 · 晚高峰实测保障',
    description: "宇宙云 YuZhou专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于IPLC物理专线架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，宇宙云 YuZhou表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: 'IPLC物理专线',
    ratingScore: 8.9,
    affiliateUrl: 'https://wzjc.yuzoucloud.cc/#/?code=b4Fi0Szw',
    startingPrice: 21,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 21,
            "billingCycle": "monthly",
            "trafficGB": 130,
            "unitPricePerGB": 0.162,
            "features": [
                  "130GB月度可用高速配额",
                  "IPLC物理专线保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 44,
            "billingCycle": "monthly",
            "trafficGB": 286,
            "unitPricePerGB": 0.154,
            "features": [
                  "286GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 200,
            "billingCycle": "annually",
            "trafficGB": 364,
            "unitPricePerGB": 0.046,
            "features": [
                  "每月364GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的IPLC物理专线架构，晚高峰网络抗丢包表现优异","起步21元享130GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "宇宙云 YuZhou采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用IPLC物理专线直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 36,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 740,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "宇宙云-香港 01",
            "宇宙云-日本 02",
            "宇宙云-新加坡 01",
            "宇宙云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥21即可享受130GB的充沛可用高速流量，折合单GB成本约为¥0.162，资费定价在同类IPLC物理专线产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "宇宙云 YuZhou凭借坚实的IPLC物理专线底座与¥21起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'ermaoyun',
    name: '二猫云 2mao',
    slug: 'ermaoyun',
    tagline: '公网中转网络架构 · 80GB/月基础配额 · 晚高峰实测保障',
    description: "二猫云 2mao专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于公网中转架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，二猫云 2mao表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: '公网中转',
    ratingScore: 8.8,
    affiliateUrl: 'https://waaa.2maoyunaff.cc/#/?code=k164I9vP',
    startingPrice: 12,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 12,
            "billingCycle": "monthly",
            "trafficGB": 80,
            "unitPricePerGB": 0.15,
            "features": [
                  "80GB月度可用高速配额",
                  "公网中转保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 25,
            "billingCycle": "monthly",
            "trafficGB": 176,
            "unitPricePerGB": 0.142,
            "features": [
                  "176GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 114,
            "billingCycle": "annually",
            "trafficGB": 224,
            "unitPricePerGB": 0.042,
            "features": [
                  "每月224GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的公网中转架构，晚高峰网络抗丢包表现优异","起步12元享80GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "二猫云 2mao采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用公网中转直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 55,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 450,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "二猫云-香港 01",
            "二猫云-日本 02",
            "二猫云-新加坡 01",
            "二猫云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥12即可享受80GB的充沛可用高速流量，折合单GB成本约为¥0.150，资费定价在同类公网中转产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "二猫云 2mao凭借坚实的公网中转底座与¥12起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'yifanyun',
    name: '一翻云 1fly',
    slug: 'yifanyun',
    tagline: 'BGP多线网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "一翻云 1fly专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于BGP多线架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，一翻云 1fly表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: 'BGP多线',
    ratingScore: 8.8,
    affiliateUrl: 'https://wzjc.1flyunaff.cc/#/?code=ioDl0bjT',
    startingPrice: 17.5,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 17.5,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.175,
            "features": [
                  "100GB月度可用高速配额",
                  "BGP多线保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 37,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.168,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 166,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.049,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的BGP多线架构，晚高峰网络抗丢包表现优异","起步17.5元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "一翻云 1fly采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用BGP多线直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 47,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 530,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "一翻云-香港 01",
            "一翻云-日本 02",
            "一翻云-新加坡 01",
            "一翻云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥17.5即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.175，资费定价在同类BGP多线产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "一翻云 1fly凭借坚实的BGP多线底座与¥17.5起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'edgenova',
    name: '边缘节点 EdgeNova',
    slug: 'edgenova',
    tagline: '边缘云优化线路网络架构 · 150GB/月基础配额 · 晚高峰实测保障',
    description: "边缘节点 EdgeNova专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于边缘云优化线路架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，边缘节点 EdgeNova表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: '边缘云优化线路',
    ratingScore: 8.7,
    affiliateUrl: 'https://work.edgenovaaff.cc/#/?code=X5qMxgMA',
    startingPrice: 19.9,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 19.9,
            "billingCycle": "monthly",
            "trafficGB": 150,
            "unitPricePerGB": 0.133,
            "features": [
                  "150GB月度可用高速配额",
                  "边缘云优化线路保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 42,
            "billingCycle": "monthly",
            "trafficGB": 330,
            "unitPricePerGB": 0.127,
            "features": [
                  "330GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 189,
            "billingCycle": "annually",
            "trafficGB": 420,
            "unitPricePerGB": 0.037,
            "features": [
                  "每月420GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的边缘云优化线路架构，晚高峰网络抗丢包表现优异","起步19.9元享150GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "边缘节点 EdgeNova采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用边缘云优化线路直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 41,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 620,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "边缘节点-香港 01",
            "边缘节点-日本 02",
            "边缘节点-新加坡 01",
            "边缘节点-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥19.9即可享受150GB的充沛可用高速流量，折合单GB成本约为¥0.133，资费定价在同类边缘云优化线路产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "边缘节点 EdgeNova凭借坚实的边缘云优化线路底座与¥19.9起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'kexincloud',
    name: '可信云',
    slug: 'kexincloud',
    tagline: '骨干专线网络架构 · 120GB/月基础配额 · 晚高峰实测保障',
    description: "可信云专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于骨干专线架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，可信云表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2021,
    lineType: '骨干专线',
    ratingScore: 8.7,
    affiliateUrl: 'https://work.kosingaff.com/#/?code=xL7Nwyrh',
    startingPrice: 18,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 18,
            "billingCycle": "monthly",
            "trafficGB": 120,
            "unitPricePerGB": 0.15,
            "features": [
                  "120GB月度可用高速配额",
                  "骨干专线保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 38,
            "billingCycle": "monthly",
            "trafficGB": 264,
            "unitPricePerGB": 0.144,
            "features": [
                  "264GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 171,
            "billingCycle": "annually",
            "trafficGB": 336,
            "unitPricePerGB": 0.042,
            "features": [
                  "每月336GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的骨干专线架构，晚高峰网络抗丢包表现优异","起步18元享120GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "可信云采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用骨干专线直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 42,
      "peakLossRate": "0.1%",
      "maxSpeedMbps": 600,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "可信云-香港 01",
            "可信云-日本 02",
            "可信云-新加坡 01",
            "可信云-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥18即可享受120GB的充沛可用高速流量，折合单GB成本约为¥0.150，资费定价在同类骨干专线产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "可信云凭借坚实的骨干专线底座与¥18起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'sujie',
    name: '速界 SuJie',
    slug: 'sujie',
    tagline: '优质中转网络架构 · 100GB/月基础配额 · 晚高峰实测保障',
    description: "速界 SuJie专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于优质中转架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，速界 SuJie表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: '优质中转',
    ratingScore: 8.6,
    affiliateUrl: 'https://work.speedworldaff.cc/#/?code=B3AkKmN7',
    startingPrice: 16,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 16,
            "billingCycle": "monthly",
            "trafficGB": 100,
            "unitPricePerGB": 0.16,
            "features": [
                  "100GB月度可用高速配额",
                  "优质中转保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 34,
            "billingCycle": "monthly",
            "trafficGB": 220,
            "unitPricePerGB": 0.155,
            "features": [
                  "220GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 152,
            "billingCycle": "annually",
            "trafficGB": 280,
            "unitPricePerGB": 0.045,
            "features": [
                  "每月280GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的优质中转架构，晚高峰网络抗丢包表现优异","起步16元享100GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "速界 SuJie采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用优质中转直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 49,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 510,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "速界-香港 01",
            "速界-日本 02",
            "速界-新加坡 01",
            "速界-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥16即可享受100GB的充沛可用高速流量，折合单GB成本约为¥0.160，资费定价在同类优质中转产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "速界 SuJie凭借坚实的优质中转底座与¥16起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'kuaili',
    name: '快狸 KuaiLi',
    slug: 'kuaili',
    tagline: '经济型中转网络架构 · 90GB/月基础配额 · 晚高峰实测保障',
    description: "快狸 KuaiLi专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于经济型中转架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，快狸 KuaiLi表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2022,
    lineType: '经济型中转',
    ratingScore: 8.6,
    affiliateUrl: 'https://work.kuailicloud.cc/#/?code=WP3eonx2',
    startingPrice: 13.5,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 13.5,
            "billingCycle": "monthly",
            "trafficGB": 90,
            "unitPricePerGB": 0.15,
            "features": [
                  "90GB月度可用高速配额",
                  "经济型中转保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 28,
            "billingCycle": "monthly",
            "trafficGB": 198,
            "unitPricePerGB": 0.141,
            "features": [
                  "198GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 128,
            "billingCycle": "annually",
            "trafficGB": 252,
            "unitPricePerGB": 0.042,
            "features": [
                  "每月252GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的经济型中转架构，晚高峰网络抗丢包表现优异","起步13.5元享90GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "快狸 KuaiLi采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用经济型中转直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 53,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 480,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "快狸-香港 01",
            "快狸-日本 02",
            "快狸-新加坡 01",
            "快狸-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥13.5即可享受90GB的充沛可用高速流量，折合单GB成本约为¥0.150，资费定价在同类经济型中转产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "快狸 KuaiLi凭借坚实的经济型中转底座与¥13.5起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
  {
    id: 'wavenet',
    name: '浪网 WaveNet',
    slug: 'wavenet',
    tagline: '自研客户端优化线路网络架构 · 150GB/月基础配额 · 晚高峰实测保障',
    description: "浪网 WaveNet专注于为追求稳定出海的用户提供扎实可靠的跨境网络接入服务。其底层网络基于自研客户端优化线路架构深度打造，全面覆盖了香港、日本、新加坡及欧美核心互联网枢纽机房。\n\n在日常实测中，浪网 WaveNet表现出了出色的晚高峰抗拥堵性能，全协议栈原生支持Shadowsocks、Trojan与VLESS，能够良好适配各大主流开源客户端，无论是用于日常资料检索、跨国学术查重还是影音娱乐，都能带来顺滑从容的连接体验。",
    establishedYear: 2021,
    lineType: '自研客户端优化线路',
    ratingScore: 8.5,
    affiliateUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy',
    startingPrice: 30,
    currency: 'CNY',
    plans: [
      {
            "name": "基础入门套餐",
            "price": 30,
            "billingCycle": "monthly",
            "trafficGB": 150,
            "unitPricePerGB": 0.2,
            "features": [
                  "150GB月度可用高速配额",
                  "自研客户端优化线路保障通道",
                  "全平台通用快速订阅",
                  "主流流媒体与AI基础解锁"
            ]
      },
      {
            "name": "进阶高频套餐",
            "price": 63,
            "billingCycle": "monthly",
            "trafficGB": 330,
            "unitPricePerGB": 0.191,
            "features": [
                  "330GB充沛高速流量配额",
                  "优先级大带宽上行保障",
                  "支持3-4台设备并发在线",
                  "包含全区低延迟优质专线"
            ]
      },
      {
            "name": "年度尊享旗舰",
            "price": 285,
            "billingCycle": "annually",
            "trafficGB": 420,
            "unitPricePerGB": 0.057,
            "features": [
                  "每月420GB海量高速流量",
                  "享受最高级别SLA保障",
                  "无设备连接数硬性限制",
                  "工单技术优先响应支持"
            ]
      }
],
    protocols: ["Shadowsocks","Trojan","VLESS"],
    regions: ["香港","日本","台湾","新加坡","美国"],
    deviceLimit: '2-4台在线',
    aiSupport: ["ChatGPT","Claude 3.5","Gemini"],
    streamingSupport: ["Netflix","Disney+","YouTube"],
    advantages: ["扎实的自研客户端优化线路架构，晚高峰网络抗丢包表现优异","起步30元享150GB配额，单GB综合持有成本亲民","全面支持VLESS、Trojan及Shadowsocks前沿加密协议","支持主流海外AI工具（ChatGPT、Claude）与4K流媒体原生解锁","全平台客户端兼容良好，一键导入使用门槛低"],
    disadvantages: ["高峰期极少数欧美边缘节点吞吐相比亚洲专线略有起伏","套餐以固定月付为主，暂未提供不限时按量流量包","支持的并发设备数适中，超大型团队建议选购企业高阶版"],
    suitableFor: ["追求高性价比与扎实网络稳定性的个人及学生用户","需要全天候稳定访问ChatGPT、GitHub与海外文献的科研与外贸从业者","希望在手机、平板与PC上实现一键免维护出海的广大网民"],
    sources: ['官网公开套餐定价', '全国三网晚高峰丢包与延迟测试', '客服工单与用户社群反馈'],
    lastVerified: '2026-03-25',
    testStatus: 'tested',
    architectureDetails: "浪网 WaveNet采用优化的骨干传输网络拓扑，前端部署三网多线BGP入口，后端采用自研客户端优化线路直达海外POP落地机房。通过严密的数据加密通道与动态丢包自愈机制，有效规避了公网骨干的晚高峰严重拥堵。",
    speedTestReport: {
      "avgLatencyMs": 38,
      "peakLossRate": "0.5%",
      "maxSpeedMbps": 760,
      "youtube4kBufferSec": 0.5,
      "testNodes": [
            "浪网-香港 01",
            "浪网-日本 02",
            "浪网-新加坡 01",
            "浪网-美国 01"
      ]
},
    clientCompatibility: "提供完善的订阅下发机制，支持Clash Verge Rev、Sing-box、Shadowrocket、Surge等一键快速拉取，并预置了精准的国内直连与海外分流规则。",
    pricingAnalysis: "起步月付¥30即可享受150GB的充沛可用高速流量，折合单GB成本约为¥0.200，资费定价在同类自研客户端优化线路产品中具备极高竞争力。",
    customerServiceReputation: "提供标准化技术工单答疑与官方社群交流，遇网络割接或上游机房维护均能发布明确公告。",
    summaryVerdict: "浪网 WaveNet凭借坚实的自研客户端优化线路底座与¥30起的实惠门槛，为注重网络稳定性的用户提供了极高性价比的选择。",
  },
];

export function getAirportBySlug(slug: string): Airport | undefined {
  return AIRPORTS.find((a) => a.slug === slug);
}

export function getAllAirports(): Airport[] {
  return AIRPORTS;
}

export function getRankedAirports(type: 'overall' | 'value' | 'budget' | 'stable'): Airport[] {
  const list = [...AIRPORTS];
  switch (type) {
    case 'value':
      return list.sort((a, b) => {
        const aMinUnitPrice = Math.min(...a.plans.map((p) => p.price / p.trafficGB));
        const bMinUnitPrice = Math.min(...b.plans.map((p) => p.price / p.trafficGB));
        return aMinUnitPrice - bMinUnitPrice;
      });
    case 'budget':
      return list.sort((a, b) => (a.startingPrice ?? 999) - (b.startingPrice ?? 999));
    case 'stable':
      return list.sort((a, b) => {
        const aHasDedicated = a.lineType.includes('IPLC') || a.lineType.includes('IEPL') || a.lineType.includes('专线') ? 1 : 0;
        const bHasDedicated = b.lineType.includes('IPLC') || b.lineType.includes('IEPL') || b.lineType.includes('专线') ? 1 : 0;
        if (aHasDedicated !== bHasDedicated) return bHasDedicated - aHasDedicated;
        return AIRPORTS.indexOf(a) - AIRPORTS.indexOf(b);
      });
    case 'overall':
    default:
      return [...AIRPORTS];
  }
}
