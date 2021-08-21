export default [
	{
		name: "自律神器：积分奖手册",
		channel: 4,
		icon: "/icons/tasks.png",
		link: "point_brochure",
		icon_color: "",
		description: "利用多巴胺机制帮助你自律",
	},
	{
		name: "离子方程式配平",
		channel: 4,
		icon: "/icons/lens.png",
		link: "coming",
		icon_color: "teal",
	},
	{
		name: "种子转磁链",
		channel: 4,
		icon: "cloud_download",
		link: "coming",
		icon_color: "deblue-300",
		description: "将种子文件转换为磁力链接",
	},
	{
		name: "文字识别",
		channel: 1,
		icon: "font_download",
		link: "ocr",
		icon_color: "blue-400",
		description: "识别图片中的文字，支持多语言",
	},
	{
		name: "服务协议生成",
		channel: 3,
		icon: "lock",
		link: "policy_generator",
		icon_color: "grey-500",
		description: "生成定制化的服务协议和隐私政策",
	},
	{
		name: "图像识别",
		link: "aic",
		icon: "photo_album",
		icon_color: "blue-500",
		help: "",
		description: "识别图中的物体，支持植物/动物/汽车/菜品等等",
		channel: 1,
	},
	{
		name: "屏幕录制",
		link: "screenrecord",
		icon: "videocam",
		icon_color: "orange-400",
		help: "仅限PC端最新版本的Chrome/Firefox/Opera使用",
		channel: 2,
	},
	{
		name: "UA解析",
		link: "ua",
		icon: "devices",
		icon_color: "teal-300",
		help: "默认为本机UA(UserAgent)",
		channel: 3,
	},
	{
		name: "网络日志抓取",
		link: "console",
		icon: "language",
		icon_color: "indigo-300",
		help: "动态生成的内容可能无法抓取到",
		channel: 3,
	},
	// {
	// 	name: "翻译",
	// 	link: "translate",
	// 	icon: "translate",
	// 	icon_color: "blue-400",
	// 	help: "使用百度翻译引擎",
	// 	channel: 4,
	// },
	{
		name: "日期&时间计算",
		link: "date_calculator",
		icon: "/icons/Google_Calendar_icon_(2020).svg",
		icon_color: "purple-200",
		help: "输入负数可以向前推算",
		description:
			"计算两个日期间隔的天数和时间，或推算几天前后是哪一天，可以算算你活了多久:)",
		channel: 4,
	},
	{
		name: "番茄钟",
		link: "tomato",
		icon: "access_alarm",
		icon_color: "red",
		description:
			"番茄工作法极大地提高了工作的效率，还会有意想不到的成就感。",
		channel: 4,
	},
	{
		name: "跨设备文本互传",
		link: "clipboard",
		icon: "call_split",
		icon_color: "green",
		help: "大文件可能会有很大延迟",
		network: true,
		channel: 4,
	},
	{
		name: "GIF分解",
		link: "gif_lib",
		icon: "collections",
		icon_color: "teal",
		description: "将GIF图片逐帧分解",
		channel: 2,
	},
	{
		name: "二维码生成",
		link: "qrcode",
		icon: "/icons/qrcode.png",
		help: "",
		description: "支持自定义颜色和大小；支持生成WIFI码",
		channel: 2,
	},
	{
		name: "B站封面获取",
		link: "bilibili_cover",
		icon: "photo_size_select_actual",
		icon_color: "pink-300",
		description: "下载Bilibili上的视频和番剧封面",
		help: "番号请使用md开头，例：md425（《某科学的超电磁炮》）；视频请使用av开头，例：av32211954。点击图片地址可以复制",
		channel: 4,
	},
	{
		name: "pornhub风格图片生成",
		link: "fake_pornhub_logo",
		icon: "insert_emoticon",
		icon_color: "orange",
		help: "仅供娱乐，产生任何后果自负",
		channel: 2,
	},
	{
		name: "便签",
		link: "note",
		icon: "/icons/scratchpad.png",
		icon_color: "amber",
		help: "所有内容保存在本地浏览器缓存中，不会上传到服务器。",
		channel: 4,
	},
	{
		name: "manifest生成",
		link: "manifest",
		icon: "settings_applications",
		icon_color: "grey",
		help: "语言类型请自行百度。如美式英语是en-us",
		channel: 3,
	},
	{
		name: "简繁转换",
		link: "sctc",
		icon: "font_download",
		icon_color: "red",
		help: "",
		description: "憂郁的烏龜",
		channel: 4,
	},
	{
		name: "做决定",
		link: "decision",
		icon: "widgets",
		icon_color: "indigo",
		description: "随机选取，选择困难症患者福音",
		help: "",
		channel: 4,
	},
	{
		name: "文本生成",
		link: "text_create",
		icon: "font_download",
		icon_color: "brown-200",
		description: "批量生成有规律的文本，或模板文本，例如营销号文案",
		help: "使用“${}”代表关键字，如“${5}表示首项为5的关键字。暂时只支持统一的公差/公比（其实是因为懒）",
		channel: 4,
	},
	{
		name: "文件树生成",
		link: "folder_tree",
		icon: "folder",
		icon_color: "green-200",
		description: "生成文件夹结构",
		help: "不支持移动端使用；文件数量过多可能会有卡顿",
		channel: 3,
	},
	{
		name: "GIF制作",
		link: "gif",
		icon: "gif",
		icon_color: "light-green",
		help: "过大的视频可能会有卡顿，所有操作均在本地执行，不消耗数据流量",
		channel: 2,
	},
	{
		name: "樱花动漫视频解析",
		link: "imomoe_parse",
		icon: "ondemand_video",
		icon_color: "pink",
		help: "部分番剧无法解析（因为是流视频）",
		channel: 2,
		network: true,
	},
	{
		name: "九格切图",
		link: "img_split",
		icon: "apps",
		icon_color: "blue",
		description: "将图片切成九宫格，在社交媒体发布逼格更高",
		help: "",
		channel: 2,
	},
	{
		name: "正则表达式测试",
		link: "regexp_test",
		icon: "sort_by_alpha",
		icon_color: "green-200",
		description: "测试正则表达式与文本是否匹配",
		help: "",
		channel: 3,
	},
	{
		name: "html转JSX",
		link: "html2jsx",
		icon: "code",
		icon_color: "teal-500",
		help: "不支持部分Html属性，请手动改为小驼峰命名法，所有操作均在本地执行，不消耗数据流量",
		channel: 3,
	},
	{
		name: "mimetype查询",
		link: "mimetype",
		icon: "attachment",
		icon_color: "purple",
		help: "",
		channel: 3,
	},
	{
		name: "运动记分板",
		link: "scoreboard",
		icon: "today",
		icon_color: "lime",
		help: "",
		channel: 4,
	},
	{
		name: "表情制作",
		link: "emoticon",
		icon: "tag_faces",
		icon_color: "yellow",
		help: "",
		channel: 2,
	},
	{
		name: "全能文本转换",
		link: "endecode",
		icon: "wb_auto",
		icon_color: "cyan-200",
		description: "可能是最全的文本转换工具，支持多达7种文本",
		help: "",
		channel: 3,
	},
	{
		name: "图片转base64",
		link: "img2base64",
		icon: "photo",
		icon_color: "green-300",
		help: "图片过大可能有卡顿",
		channel: 2,
	},
	{
		name: "图片&字幕拼接",
		link: "img_mosaic",
		icon: "view_column",
		icon_color: "amber-600",
		help: "图片过大可能会卡顿；拉动阴影部分可调整拼接范围，适合字幕或长图拼接",
		channel: 2,
	},
	{
		name: "化学方程式配平",
		link: "cem",
		icon: "linear_scale",
		icon_color: "blue-600",
		channel: 4,
	},
	{
		name: "云音乐歌单对比",
		link: "songlist",
		icon: "queue_music",
		icon_color: "red-600",
		channel: 4,
		network: true,
	},
	{
		name: "图片压缩",
		link: "img_compress",
		icon: "/icons/finance.png",
		icon_color: "brown-300",
		help: "太小的图片可能没有效果",
		channel: 2,
	},
	{
		name: "词云图制作",
		link: "word_cloud",
		icon: "cloud_circle",
		icon_color: "green-300",
		help: "点击图片可保存图；不写文字大小则为随机大小",
		channel: 2,
	},
	{
		name: "文字转语音",
		link: "tts",
		icon: "mic",
		icon_color: "teal-300",
		help: "一次性最多合成500字符",
		description:
			"将文字转成mp3朗读音频，支持多种声线和速度/音调/音量/自定义",
		channel: 1,
		network: true,
	},
	{
		name: "金额数字大写",
		link: "num2chinese",
		icon: "attach_money",
		icon_color: "yellow-600",
		help: "生成结果仅供参考",
		channel: 4,
	},
	{
		name: "取色器",
		link: "color_picker",
		icon: "colorize",
		icon_color: "amber-800",
		help: "可以通过键盘方向键精准调节",
		channel: 2,
	},
	{
		name: "词典",
		link: "dic_ci",
		icon: "book",
		icon_color: "brown-700",
		help: "生成结果仅供参考",
		channel: 4,
		network: true,
	},
	{
		name: "歇后语查询",
		link: "xiehouyu",
		icon: "book",
		icon_color: "indigo-700",
		help: "输入谜面谜底均可",
		channel: 4,
		network: true,
	},
	{
		name: "成语词典",
		link: "dic_idiom",
		icon: "book",
		icon_color: "orange-700",
		help: "支持缩写哦",
		channel: 4,
		network: true,
	},
	{
		name: "字典",
		link: "dic_word",
		icon: "book",
		icon_color: "red-700",
		help: "暂不支持太简单的字查询",
		description: "我们中国的汉字，落笔成画留下五千年的历史",
		channel: 4,
		network: true,
	},
	{
		name: "js键盘码查询",
		link: "js_keycode",
		icon: "settings_applications",
		icon_color: "yellow",
		channel: 3,
	},
	{ name: "Hello Tool", link: "http://hellotool.htm.kim", channel: 5 },
	{
		name: "精品网站导航",
		link: "https://imyshare.com/?from=ygktool",
		channel: 5,
	},
	{ name: "墨灵音乐", link: "https://yinyue.qugeek.com/", channel: 5 },
];
