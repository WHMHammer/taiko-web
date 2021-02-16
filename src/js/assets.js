var assets = {
	"js": [
		"lib/md5.min.js",
		"loadsong.js",
		"parseosu.js",
		"titlescreen.js",
		"scoresheet.js",
		"songselect.js",
		"keyboard.js",
		"gameinput.js",
		"game.js",
		"controller.js",
		"circle.js",
		"view.js",
		"mekadon.js",
		"gamepad.js",
		"tutorial.js",
		"soundbuffer.js",
		"p2.js",
		"canvasasset.js",
		"viewassets.js",
		"gamerules.js",
		"canvasdraw.js",
		"canvastest.js",
		"canvascache.js",
		"parsetja.js",
		"autoscore.js",
		"about.js",
		"debug.js",
		"session.js",
		"importsongs.js",
		"logo.js",
		"settings.js",
		"scorestorage.js",
		"account.js",
		"lyrics.js",
		"customsongs.js",
		"abstractfile.js"
	],
	"css": [
		"main.css",
		"titlescreen.css",
		"loadsong.css",
		"game.css",
		"debug.css",
		"songbg.css",
		"view.css"
	],
	"assetsCss": [
		"img/img.css"
	],
	"img": [
		"title-screen.png",
		"notes.png",
		"notes_drumroll.png",
		"notes_hit.png",
		"notes_explosion.png",
		"balloon.png",
		"taiko.png",
		"dancing-don.gif",
		"bg-pattern-1.png",
		"difficulty.png",
		"don_anim_normal_a.png",
		"don_anim_normal_b1.png",
		"don_anim_normal_b2.png",
		"don_anim_10combo_a.png",
		"don_anim_10combo_b1.png",
		"don_anim_10combo_b2.png",
		"don_anim_gogo_a.png",
		"don_anim_gogo_b1.png",
		"don_anim_gogo_b2.png",
		"don_anim_gogostart_a.png",
		"don_anim_gogostart_b1.png",
		"don_anim_gogostart_b2.png",
		"don_anim_clear_a.png",
		"don_anim_clear_b1.png",
		"don_anim_clear_b2.png",
		"fire_anim.png",
		"fireworks_anim.png",
		"bg_genre_def.png",
		"bg_score_p1.png",
		"bg_score_p2.png",
		"bg_settings.png",
		"bg_pause.png",
		"badge_auto.png",
		"touch_pause.png",
		"touch_fullscreen.png",
		"mimizu.png",
		"results_flowers.png",
		"results_mikoshi.png",
		"results_tetsuohana.png",
		"results_tetsuohana2.png",
		"settings_gamepad.png"
	],
	"audioSfx": [
		"se_pause.ogg",
		"se_calibration.ogg",

		"v_results.ogg",
		"v_sanka.ogg",
		"v_songsel.ogg",
		"v_start.ogg",
		"v_title.ogg"
	],
	"audioSfxLR": [
		"neiro_1_don.ogg",
		"neiro_1_ka.ogg",
		"se_cancel.ogg",
		"se_don.ogg",
		"se_ka.ogg",
		"se_jump.ogg",

		"se_balloon.ogg",
		"se_gameclear.ogg",
		"se_gamefail.ogg",
		"se_gamefullcombo.ogg",
		"se_results_countup.ogg",
		"se_results_crown.ogg",

		"v_fullcombo.ogg",
		"v_renda.ogg",
		"v_results_fullcombo.ogg",
		"v_results_fullcombo2.ogg"
	],
	"audioSfxLoud": [
		"v_diffsel.ogg"
	],
	"audioMusic": [
		"bgm_songsel.mp3",
		"bgm_result.mp3",
		"bgm_setsume.mp3",
		"bgm_settings.mp3"
	],
	"fonts": {
		"Kozuka": "Kozuka.otf",
		"TnT": "TnT.ttf"
	},
	"views": [
		"game.html",
		"loadsong.html",
		"songselect.html",
		"titlescreen.html",
		"tutorial.html",
		"about.html",
		"debug.html",
		"session.html",
		"settings.html",
		"account.html",
		"login.html",
		"customsongs.html"
	],

	"songs": [],
	"songsDefault": [],
	"sounds": {},
	"image": {},
	"pages": {},
	"categories": [
		{
			"id": 1,
			"title": "Pop",
			"title_lang": {
				"ja": "J-POP",
				"en": "Pop",
				"cn": "流行音乐",
				"tw": "流行音樂",
				"ko": "POP"
			},
			"songSkin": {
				"sort": 1,
				"background": "#219fbb",
				"border": [
					"#7ec3d3",
					"#0b6773"
				],
				"outline": "#005058",
				"infoFill": "#004d68",
				"bg_img": "bg_genre_0.png"
			},
			"aliases": null
		}, {
			"id": 2,
			"title": "Anime",
			"title_lang": {
				"ja": "アニメ",
				"en": "Anime",
				"cn": "卡通动画音乐",
				"tw": "卡通動畫音樂",
				"ko": "애니메이션"
			},
			"songSkin": {
				"sort": 2,
				"background": "#ff9700",
				"border": [
					"#ffdb8c",
					"#e75500"
				],
				"outline": "#9c4100",
				"infoFill": "#9c4002",
				"bg_img": "bg_genre_1.png"
			},
			"aliases": null
		}, {
			"id": 3,
			"title": "VOCALOID™ Music",
			"title_lang": {
				"ja": "ボーカロイド™曲",
				"en": "VOCALOID™ Music"
			},
			"songSkin": {
				"sort": 3,
				"background": "#def2ef",
				"border": [
					"#f7fbff",
					"#79919f"
				],
				"outline": "#5a6584",
				"infoFill": "#546184",
				"bg_img": "bg_genre_2.png"
			},
			"aliases": [
				"ボーカロイド曲",
				"ボーカロイド",
				"vocaloid music",
				"vocaloid"
			]
		}, {
			"id": 4,
			"title": "Variety",
			"title_lang": {
				"ja": "バラエティ",
				"en": "Variety",
				"cn": "综合音乐",
				"tw": "綜合音樂",
				"ko": "버라이어티"
			},
			"songSkin": {
				"sort": 4,
				"background": "#8fd321",
				"border": [
					"#f7fbff",
					"#587d0b"
				],
				"outline": "#374c00",
				"infoFill": "#3c6800",
				"bg_img": "bg_genre_3.png"
			},
			"aliases": [
				"バラエティー",
				"どうよう",
				"童謡・民謡",
				"children",
				"children/folk",
				"children-folk"
			]
		}, {
			"id": 5,
			"title": "Classical",
			"title_lang": {
				"ja": "クラシック",
				"en": "Classical",
				"cn": "古典音乐",
				"tw": "古典音樂",
				"ko": "클래식"
			},
			"songSkin": {
				"sort": 5,
				"background": "#d1a016",
				"border": [
					"#e7cf6b",
					"#9a6b00"
				],
				"outline": "#734d00",
				"infoFill": "#865800",
				"bg_img": "bg_genre_4.png"
			},
			"aliases": [
				"クラッシック",
				"classic"
			]
		}, {
			"id": 6,
			"title": "Game Music",
			"title_lang": {
				"ja": "ゲームミュージック",
				"en": "Game Music",
				"cn": "游戏音乐",
				"tw": "遊戲音樂",
				"ko": "게임"
			},
			"songSkin": {
				"sort": 6,
				"background": "#9c72c0",
				"border": [
					"#bda2ce",
					"#63407e"
				],
				"outline": "#4b1c74",
				"infoFill": "#4f2886",
				"bg_img": "bg_genre_5.png"
			},
			"aliases": null
		}, {
			"id": 7,
			"title": "NAMCO Original",
			"title_lang": {
				"ja": "ナムコオリジナル",
				"en": "NAMCO Original",
				"cn": "NAMCO原创音乐",
				"tw": "NAMCO原創音樂",
				"ko": "남코 오리지널"
			},
			"songSkin": {
				"sort": 7,
				"background": "#ff5716",
				"border": [
					"#ffa66b",
					"#b53000"
				],
				"outline": "#941c00",
				"infoFill": "#961e00",
				"bg_img": "bg_genre_6.png"
			},
			"aliases": null
		}, {
			"title": "default",
			"songSkin": {
				"background": "#ececec",
				"border": ["#fbfbfb", "#8b8b8b"],
				"outline": "#656565",
				"infoFill": "#656565"
			}
		}
	]
}

var gameConfig = {
	"songs_baseurl": "/songs/",
	"assets_baseurl": "https://taiko.uk/taiko/assets-201202-p1/",
	"email": null,
	"custom_js": "",
	"_version": {
		"commit": null,
		"commit_short": "",
		"version": null,
		"url": "https://github.com/WHMHammer/taiko-web-docker"
	}
}
