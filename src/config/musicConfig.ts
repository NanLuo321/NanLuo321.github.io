import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表，"hybrid" 同时加载本地和在线音乐
	mode: "hybrid",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "7065130302",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "使一颗心免于哀伤",
				artist: "知更鸟 / HOYO-MiX / Chevy",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "爱错 (Live)",
				artist: "Live版",
				url: "/assets/music/爱错（Live）版.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "每当我",
				artist: "未知",
				url: "/assets/music/每当我.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "SO TIRED",
				artist: "未知",
				url: "/assets/music/SO TIRED.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "I GOT LOVE",
				artist: "未知",
				url: "/assets/music/I GOT LOVE.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "海屿你",
				artist: "未知",
				url: "/assets/music/海屿你.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "还是会想你",
				artist: "未知",
				url: "/assets/music/还是会想你.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
		],
	},
};
