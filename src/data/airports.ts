export interface Plan {
  name: string;
  price: number; // in CNY
  billingCycle: 'monthly' | 'quarterly' | 'semi-annually' | 'annually' | 'one-time';
  trafficGB: number; // monthly available GB
  unitPricePerGB?: number; // calculated helper
  multiplierNotes?: string;
  features?: string[];
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  establishedYear: number;
  lineType: string; // e.g. "BGP专线", "IPLC内网专线", "IEPL企业专线", "优质公网中继"
  ratingScore: number; // 0 - 10 rating base
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
}

export const AIRPORTS: Airport[] = [
  {
    id: 'flyingbird',
    name: 'FlyingBird (飞鸟云)',
    slug: 'flyingbird',
    tagline: '高性价比中继与专线混合网络，新手即买即用',
    description:
      'FlyingBird 是一家运营时间较长、主打性价比与稳定折中的中大型机场服务商。采用多地入口 BGP 隧道与 IPLC 专线混合调度架构，节点覆盖港、台、日、美、新等主流地区，提供全平台一键导入支持与流媒体自动解锁服务。',
    establishedYear: 2021,
    lineType: 'BGP隧道中继 + IPLC混合专线',
    ratingScore: 9.2,
    officialUrl: 'https://flyingbird.run',
    affiliateUrl: 'https://flyingbird.run/#/register?code=tizipingce',
    startingPrice: 15,
    currency: 'CNY',
    plans: [
      {
        name: '入门轻量套餐',
        price: 15,
        billingCycle: 'monthly',
        trafficGB: 100,
        unitPricePerGB: 0.15,
        features: ['100GB可用高速流量', '最高 300Mbps 带宽峰值', '支持 3 台设备同时在线', '全天候 AI 与流媒体解锁'],
      },
      {
        name: '进阶高频套餐',
        price: 35,
        billingCycle: 'monthly',
        trafficGB: 300,
        unitPricePerGB: 0.117,
        features: ['300GB可用高速流量', '最高 800Mbps 带宽峰值', '支持 5 台设备同时在线', '包含低延迟 IPLC 专线组'],
      },
      {
        name: '年度畅享套餐',
        price: 360,
        billingCycle: 'annually',
        trafficGB: 500,
        unitPricePerGB: 0.06,
        features: ['每月 500GB 充足流量', '千兆独享入口带宽保障', '无设备连接上限限制', '工单技术优先响应支持'],
      },
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '台湾', '新加坡', '美国', '英国', '德国', '韩国'],
    deviceLimit: '3-5台在线设备（不同套餐有差异）',
    aiSupport: ['ChatGPT (Web/App)', 'Claude 3.5 Sonnet', 'Gemini Advanced', 'Midjourney', 'Perplexity'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube Premium', 'HBO Max', 'Spotify', 'DAZN'],
    advantages: [
      '起步门槛亲民，月付15元起，支持微信/支付宝快捷支付',
      '提供主流客户端一键导入配置，对小白用户友好度高',
      '节点标注明确，原生 IP 针对 OpenAI 与 Netflix 专项优化',
      '高峰期动态调度分流，晚 8-11 点油管 4K 播放流畅度稳定',
    ],
    disadvantages: [
      '非全节点 IPLC 专线，极端恶劣网络管制期偶有波动',
      '不提供免费试用，仅提供基础退款服务窗口',
    ],
    suitableFor: ['预算有限的在校学生', '追求性价比的日常出海用户', '轻中度流媒体与 ChatGPT 使用者'],
    sources: ['官网公开套餐定价', '上海电信/广州联通晚高峰实测日志', '官方 Telegram 频道公告'],
    lastVerified: '2026-03-20',
    testStatus: 'tested',
  },
  {
    id: 'flowercloud',
    name: 'FlowerCloud (花云)',
    slug: 'flowercloud',
    tagline: '高端企业级双程 IPLC 专线，晚高峰无视管制的极致稳定',
    description:
      'FlowerCloud（花云）是业界知名的旗舰级高端机场品牌，全节点架构均采用深圳/上海双端 IPLC/IEPL 企业级内网专线。主打高可用性、极低跨境抖动以及无审查企业内网传输，是商务办公与苛刻网络要求用户的代表性选择。',
    establishedYear: 2020,
    lineType: '企业级双程内网 IPLC / IEPL 专线',
    ratingScore: 9.6,
    officialUrl: 'https://flowercloud.net',
    affiliateUrl: 'https://flowercloud.net/#/register?code=tizipingce',
    startingPrice: 38,
    currency: 'CNY',
    plans: [
      {
        name: 'Air 基础专线',
        price: 38,
        billingCycle: 'monthly',
        trafficGB: 100,
        unitPricePerGB: 0.38,
        features: ['100GB 全内网专线流量', '1000Mbps 端口接入', '不限同时在线设备数', '原生解锁主流地区流媒体'],
      },
      {
        name: 'Pro 旗舰专线',
        price: 68,
        billingCycle: 'monthly',
        trafficGB: 200,
        unitPricePerGB: 0.34,
        features: ['200GB 高速内网专线流量', '双活 BGP 入口与容灾切换', '极低延迟游戏/语音优化', 'AI 与外贸服务原生IP池'],
      },
      {
        name: 'Max 企业豪华',
        price: 138,
        billingCycle: 'monthly',
        trafficGB: 500,
        unitPricePerGB: 0.276,
        features: ['500GB 充沛专用流量', '专属 VIP 独立服务器集群', 'SLA 99.9% 连通率保障', '企业级一对一技术对接'],
      },
    ],
    protocols: ['Shadowsocks', 'ShadowsocksR', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '英国', '德国', '澳大利亚', '加拿大'],
    deviceLimit: '不限制在线设备数（合理个人使用）',
    aiSupport: ['ChatGPT Plus/Team', 'Claude 3.5', 'OpenAI API Direct', 'Copilot', 'Grok 2'],
    streamingSupport: ['Netflix 4K', 'Disney+ Ultra HD', 'YouTube Premium', 'Amazon Prime', 'Hulu', 'AbemaTV'],
    advantages: [
      '全线采用 IPLC/IEPL 物理专线，完全不过 GFW 审查墙，敏感时期依旧坚挺',
      '节点网络抖动低，延迟极低（沪日专线约 26ms，深港专线约 5ms）',
      '官方团队运维实力强悍，节点长期保持 99% 以上的高可用可用率',
      '解除在线设备数量限制，一人多设备使用极为省心',
    ],
    disadvantages: [
      '价格相对较高，单 GB 成本显著高于普通中继机场',
      '未开放按量不限时付费套餐，只支持固定周期订阅',
    ],
    suitableFor: ['跨境电商与跨国外贸商务人士', '对网络抖动要求苛刻的海外远程办公开发者', '追求顶级网络体验的极客用户'],
    sources: ['官网控制台公开发布参数', '多地节点 Ping 与 Traceroute 物理链路抓包测试', '历史封锁期可用性监控'],
    lastVerified: '2026-03-22',
    testStatus: 'tested',
  },
  {
    id: 'tag-internet',
    name: 'TAG Internet (TAG机场)',
    slug: 'tag-internet',
    tagline: '全球 90+ 国家超广地区覆盖，特种流媒体与冷门地域神器',
    description:
      'TAG Internet 是一家老牌一线高端机场，以极其夸张的全球节点覆盖面而闻名。网络骨干采用华为云企业级内网 IPLC 专线，节点分布横跨全球 90 多个国家与地区，是需要冷门地区 IP、跨境账号运营以及跨国业务验证用户的不可替代之选。',
    establishedYear: 2018,
    lineType: '华为云 IPLC 专线 + 独立家宽落地',
    ratingScore: 9.5,
    officialUrl: 'https://tag-vpn.com',
    affiliateUrl: 'https://tag-vpn.com/#/register?code=tizipingce',
    startingPrice: 160,
    currency: 'CNY',
    plans: [
      {
        name: '特惠季付基础版',
        price: 160,
        billingCycle: 'quarterly',
        trafficGB: 250,
        unitPricePerGB: 0.213,
        features: ['每季度 750GB（每月250GB）', '全球 90+ 国家冷门节点全部开放', '最高 1000Mbps 峰值带宽', '流媒体全库原生解锁'],
      },
      {
        name: '畅享年付旗舰版',
        price: 600,
        billingCycle: 'annually',
        trafficGB: 500,
        unitPricePerGB: 0.1,
        features: ['每月 500GB 高速流量', '全球节点无缝漫游', '原生家宽节点定期轮转', '专属 Telegram VIP 社群技术支持'],
      },
    ],
    protocols: ['Shadowsocks'],
    regions: ['香港', '日本', '美国', '新加坡', '台湾', '英国', '阿根廷', '土耳其', '埃及', '南非', '冰岛', '巴西', '印度', '等92个国家'],
    deviceLimit: '套餐内允许绑定最高 10 台客户端同时在线',
    aiSupport: ['ChatGPT 网页与 API 全区', 'Claude 全球节点原生', 'Gemini Pro/Advanced', 'Sora', 'Runway'],
    streamingSupport: ['Netflix 全球区库', 'Disney+', 'HBO Max', 'Spotify 低价区', 'YouTube Premium 低价区', 'DAZN'],
    advantages: [
      '全球节点覆盖数量全行业第一，包含大量南美、中东、非洲、东南亚罕见冷门节点',
      '全线采用华为云 IPLC 优质专线，骨干网络带宽储备充足',
      '针对各大流媒体平台的锁区与会员购买有专属家宽优化节点',
      '运营超过 7 年，信誉稳定，跑路风险趋近于零',
    ],
    disadvantages: [
      '仅提供季付与年付，不支持单月月付订阅，初次尝试成本较高',
      '协议以传统 Shadowsocks 为主，不支持某些新兴小众客户端协议',
    ],
    suitableFor: ['Steam / Spotify / 游戏锁区低价跨区消费者', '海外社媒运营矩阵与跨国营销人员', '需要跨国多国家节点测试的技术团队'],
    sources: ['TAG 官方运维公告', '92个国家节点实际连通率检测脚本', '全国三网晚高峰 BGP 测速报告'],
    lastVerified: '2026-03-18',
    testStatus: 'tested',
  },
  {
    id: 'wgetcloud',
    name: 'WgetCloud (原GaCloud)',
    slug: 'wgetcloud',
    tagline: '自主研发分布式 BGP 调度系统，服务高可用与商用首选',
    description:
      'WgetCloud（前身为 GaCloud）定位高品质商务与极客服务，拥有完全自研的智能后端流量调度系统。通过国内多线 BGP 节点实时探测用户本地运营商，自动择优分配延迟最低的专线隧道入口，在抗网络抖动与多端并发方面表现卓越。',
    establishedYear: 2021,
    lineType: '全自研 BGP 动态智能调度 + 香港/日本 IPLC',
    ratingScore: 9.4,
    officialUrl: 'https://wgetcloud.org',
    affiliateUrl: 'https://wgetcloud.org/#/register?code=tizipingce',
    startingPrice: 49,
    currency: 'CNY',
    plans: [
      {
        name: '基础专线套餐',
        price: 49,
        billingCycle: 'monthly',
        trafficGB: 120,
        unitPricePerGB: 0.408,
        features: ['120GB 专属调度流量', '自适应智能线路切换', '全天候企业级客服', '支持三网智能优化入口'],
      },
      {
        name: '优质进阶套餐',
        price: 79,
        billingCycle: 'monthly',
        trafficGB: 240,
        unitPricePerGB: 0.329,
        features: ['240GB 高速调度流量', '包含独享流媒体解锁节点', '支持 8 台设备并发连接', '企业级防丢包 FEC 算法支持'],
      },
    ],
    protocols: ['Shadowsocks', 'ShadowsocksR', 'Trojan', 'V2Ray'],
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '英国', '德国', '韩国'],
    deviceLimit: '4-8 台设备（按套餐等级分配）',
    aiSupport: ['ChatGPT (官方住宅IP防风控)', 'Claude 3.5', 'Midjourney', 'GitHub Copilot', 'Cursor IDE'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube Premium', 'Amazon Prime', 'Hulu'],
    advantages: [
      '自主研发控制面板与动态流量调度，入口自动容灾，节点故障无感切换',
      '海外出口节点 IP 纯净度高，对于使用 ChatGPT 和海外银行金融账号极少跳验证码',
      '后台支持根据用户网络类型（电信/移动/联通/广电）定制优化路由',
      '提供原生支持多协议订阅，兼容各大客户端版本',
    ],
    disadvantages: [
      '套餐价格整体偏向中高端，无 20 元以下超低价轻量档位',
      '高峰期大流量下载可能受节点公平使用策略（QoS）调控',
    ],
    suitableFor: ['远程开发者与重度 Cursor / GitHub Copilot 依赖者', '海外金融外贸从业者', '对频繁更换订阅节点感到厌倦的稳定型用户'],
    sources: ['WgetCloud 官方技术白皮书', '自研 BGP 调度路由追踪测试', '长周期 SLA 在线监测数据'],
    lastVerified: '2026-03-24',
    testStatus: 'tested',
  },
  {
    id: 'kuaigou',
    name: '快狗云 (KuaiGou Cloud)',
    slug: 'kuaigou',
    tagline: '百兆隧道中继平价代表，9.9元超低门槛备用利器',
    description:
      '快狗云是一家主打极致性价比的平价入门机场，以超低起步价吸引了大量预算有限的用户。采用国内多地公网中继和隧道中转方案，提供丰富的标准节点，适合对价格极其敏感、出海需求以日常刷网页和查资料为主的群体。',
    establishedYear: 2022,
    lineType: '国内优质公网中继隧道',
    ratingScore: 8.5,
    officialUrl: 'https://kuaigou.click',
    affiliateUrl: 'https://kuaigou.click/#/register?code=tizipingce',
    startingPrice: 9.9,
    currency: 'CNY',
    plans: [
      {
        name: '轻量尝鲜套餐',
        price: 9.9,
        billingCycle: 'monthly',
        trafficGB: 100,
        unitPricePerGB: 0.099,
        features: ['100GB 月度中转流量', '最高 200Mbps 带宽限制', '支持 2 台设备在线', '日常查资料与 YouTube 1080P'],
      },
      {
        name: '标准实用套餐',
        price: 19.9,
        billingCycle: 'monthly',
        trafficGB: 260,
        unitPricePerGB: 0.076,
        features: ['260GB 充沛流量', '最高 500Mbps 带宽限制', '支持 4 台设备在线', '基础流媒体与 AI 解锁'],
      },
    ],
    protocols: ['Shadowsocks', 'Vmess', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    deviceLimit: '2-4 台设备同时在线',
    aiSupport: ['ChatGPT 基础网页版 (部分节点受限)'],
    streamingSupport: ['YouTube 4K', 'Netflix (部分港美节点可用)'],
    advantages: [
      '价格极其亲民，月付不到 10 元，学生党与轻度需求者无负担',
      '每 GB 流量单价低至 0.07 元，作为主力梯子的备用节点成本极低',
      '节点支持常见客户端一键订阅，使用简单',
    ],
    disadvantages: [
      '由于采用普通公网中继，敏感管制时期容易出现断流或丢包',
      'ChatGPT 与 Claude 原生解锁成功率不如高阶专线，偶尔遇到 IP 拦截提示',
      '晚高峰 21:00-23:00 热门节点带宽拥挤度较高',
    ],
    suitableFor: ['学生与科研查文献轻度出海用户', '寻找低价备用梯子以防失联的用户', '月预算 10-20 元的平价需求者'],
    sources: ['官网公开套餐说明', '本地联通百兆网络实测', '用户社区反馈整理'],
    lastVerified: '2026-03-12',
    testStatus: 'official-data',
  },
];

// Helper functions for data access
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
      // Sorted by best price per GB of the lowest entry plan
      return list.sort((a, b) => {
        const aMinUnitPrice = Math.min(...a.plans.map((p) => p.price / p.trafficGB));
        const bMinUnitPrice = Math.min(...b.plans.map((p) => p.price / p.trafficGB));
        return aMinUnitPrice - bMinUnitPrice;
      });
    case 'budget':
      // Sorted by lowest starting price
      return list.sort((a, b) => (a.startingPrice ?? 999) - (b.startingPrice ?? 999));
    case 'stable':
      // Filter IPLC/IEPL dedicated lines first, then rating
      return list.sort((a, b) => {
        const aHasDedicated = a.lineType.includes('IPLC') || a.lineType.includes('IEPL') ? 1 : 0;
        const bHasDedicated = b.lineType.includes('IPLC') || b.lineType.includes('IEPL') ? 1 : 0;
        if (aHasDedicated !== bHasDedicated) return bHasDedicated - aHasDedicated;
        return b.ratingScore - a.ratingScore;
      });
    case 'overall':
    default:
      return list.sort((a, b) => b.ratingScore - a.ratingScore);
  }
}
