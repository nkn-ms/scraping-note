import axios from 'axios'

export default {
  namespaced: true,
  state: {
    scrapingData: [],
    detailData: null,
    isLoading: false
  },
  mutations: {
    setScrapingData(state, data) {
      state.scrapingData = data
    },
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setDetailData(state, detailData) {
      state.detailData = detailData
    }
  },
  actions: {
    setScrapingData(context, data) {
      context.commit('setScrapingData', data)
    },
    setDetailData(context, detailData) {
      context.commit('setDetailData', detailData)
    },
    setIsLoading(context, data) {
      context.commit('setIsLoading', data)
    },
    async getScrapingData(context, url) {
      const { data } = await axios.get(url).catch(() => dummy)
      console.log('response', data)
      return data
    }
  }
}

const dummy = {
  data: {
    status: 'error',
    scraping: [
      {
        id: 1,
        title: 'ほろ酔いラプソディー『40.モロヘイヤと鶏もも肉』',
        url: 'https://note.com/godpapa78/n/nf3e5c2ff71b4',
        name: 'ムタラ',
        description:
          '気がつけば9月になってしまった。なんだか例年よりも夏が短く感じたのは、家で過ごす時間が長かったからだろうか。夏の終わりと秋の始まり。冬の終わり…',
        like: 69,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33736034/rectangle_large_type_2_967ff15d19c9b8d089f46c2b79d54162.jpg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 2,
        title: 'フレンドリーな取り立て屋さん　今日も誰かの背中を押す',
        url: 'https://note.com/kitamayu_n45/n/nffdbd6c35fc2',
        name: 'きたみまゆ',
        description:
          '「おい、お前。ちゃんと人生を楽しんでんだろうな」 仕事を終えた私が会社を出てバイト先に向かっていると、背後から声をかけられた。 少しかすれた低い…',
        like: 41,
        eyecatch_src:
          'https://d291vdycu0ht11.cloudfront.net/nuxt/production/img/note_empty.fdddd2e.svg'
      },
      {
        id: 3,
        title: '私の信頼する『MUJIのLED懐中電灯』の話を聞いてほしい　#防災の日',
        url: 'https://note.com/tyari/n/n96382aac36c5',
        name: '山下義弘／ドケットストア店主',
        description:
          '防災の日が訪れるたびに、阪神淡路大震災のことを思い出す。 兵庫県宝塚市に住んでいた私の家は、神戸ほどの被害はなかったものの、それでもタンスが寝…',
        like: 57,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33752428/rectangle_large_type_2_8152ba4434cf66b910f03fdd294053b2.png?fit=bounds&quality=45&width=1280'
      },
      {
        id: 4,
        title: '秘密基地にて羽化する僕は',
        url: 'https://note.com/1109arisa/n/n9b4aa843f610',
        name: 'やすたに　ありさ',
        description:
          '「ねえ、きょう夕ご飯の後に秘密基地で遊んでもいい？」 きゅうりをトントンと細切りにしているお母さんに上目遣いで訊ねてみた。 秘密基地というのは…',
        like: 82,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33743726/rectangle_large_type_2_1b702a09f6d044d58909d8cb38209a9c.jpeg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 5,
        title:
          'インハウスデザイナーがはじめてロゴデザインをした過程をまとめてみた',
        url: 'https://note.com/nozomigallery/n/na6920761e045',
        name: 'おのだ希',
        description:
          'みなさんこんにちは。きなこです😊 普段はカクテルメイクという会社でRICHKAというプロダクトのUI/UX改善を行ったり、会社のデザインまわりの仕事をちょ…',
        like: 33,
        eyecatch_src:
          'https://assets.st-note.com/img/1598921394182-XXfQR1ZFo9.jpg?width=400'
      },
      {
        id: 6,
        title: '当たり前のことを当たり前にする企業になりたい',
        url: 'https://note.com/kinacomori/n/nafdd4900f9ba',
        name: 'きなこ',
        description:
          '先日、お仕事をお願いしているクリエイターさん（友人でもある）が急にこんなことを呟いてくれて、嬉しかった。 しかも最近は、私からの依頼はほとんど…',
        like: 178,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33708551/rectangle_large_type_2_c37fe3e0a336eeffa34ae77126d1ace0.png?fit=bounds&quality=45&width=1280'
      },
      {
        id: 7,
        title:
          'フロントエンドエンジニアがデザインできるようになると何が嬉しそうか',
        url: 'https://note.com/homeandcozy/n/nd8b7af564b38',
        name: 'Ayumi',
        description:
          '今年の春ぐらいから独学でデザインを練習し始めたのだが、そもそもやり始めた自分のモチベーションと、実際やってみて「こういうところがフロントエンド…',
        like: 66,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33439732/rectangle_large_type_2_fe5268a7bdd8e9a7afa13705747e4fa7.jpg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 8,
        title: '旅人が消えたカオサンとアラブ人が消えたアラブ街',
        url: 'https://note.com/seyanote/n/n7b81ec6eb781',
        name: 'seya',
        description:
          '明日から9月。1月下旬に新型コロナウィルスの感染拡大がはじまってから、もう7ヶ月も経つのだ。 タイでは9月末まで非常事態宣言が延長されたが、バンコ…',
        like: 55,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33757984/rectangle_large_type_2_a04904ea2cf3ee89099fba454bf53d6b.jpeg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 9,
        title: 'どんな立場も仕事も「ファン」あって。',
        url: 'https://note.com/naoyaakashi/n/n786891119ac9',
        name: 'Naoya Akashi',
        description:
          '皆さんこんにちは。音楽プロデューサーで作曲家の齊藤耕太郎です。季節の変わり目を感じ始めた8月末。今年はどうも、例年以上に季節以上の何か大きなエ…',
        like: 38,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33733748/rectangle_large_type_2_4ef624f24f7b6a86f7324c0544e82347.jpg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 10,
        title:
          '中高生の自殺が最も多い9月1日に、元不登校児として故郷和歌山の新聞に広告を出しました…',
        url: 'https://note.com/kotarosaito/n/ndd0c64342801',
        name: 'Kotaro Saito / 齊藤 耕太郎',
        description:
          'こんにちは。 『学校は行かなくてもいい』という本を書いています。小幡和輝です。 本日、9月1日発行のわかやま新報さんに新聞広告を掲載しました。 …',
        like: 108,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33579271/rectangle_large_type_2_68895ed11805f120a2ee9755af376cb0.jpg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 11,
        title: '【243】頑張ってるふりをするのも疲れるよな (#8月31日の夜に)',
        url: 'https://note.com/nagomiobata/n/n2664873141b7',
        name: '小幡 和輝 Kazuki Obata',
        description:
          '中学３年、夏の中体連の大会を最後に部活を引退した。 ここまで、部活で全力投球してきたから、そのあとの振る舞い方がわからなかった。ちなみに、全力…',
        like: 312,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33742064/rectangle_large_type_2_d6696a31b96035e8dfd69442cc573203.png?fit=bounds&quality=45&width=1280'
      },
      {
        id: 12,
        title:
          '里親の話から。5歳息子が泣きながら「子どもを好きでいられない大人」について説明して…',
        url: 'https://note.com/yusukef7911/n/n0ba74c25f662',
        name: '深澤佑介/yusuke fukazawa',
        description:
          '今日はRACのオンラインイベントの日だった。首藤くんと真奈さんの言葉が心地よくて、色んな気付きがあった1日だった。 登壇者がまさかの全員34歳で同じ…',
        like: 81,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33704288/rectangle_large_type_2_c15e345188c1bccb7fce8654331aacd3.jpeg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 13,
        title: 'freee役員秘書の日々575',
        url: 'https://note.com/aya_rac/n/n325d13bf128c',
        name: 'Aya',
        description:
          'こんにちは。freeeで役員秘書をしてるLuidaと申します。 Luidaというのは秘書職の役職名で、由来は「ドラクエに登場する仲間キャラクターの予定を管理…',
        like: 99,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33574145/rectangle_large_type_2_e284cf9afac901a543a9dc693b736c02.jpeg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 14,
        title: 'あなたは、あなたが笑う狂気のお陰で生きている',
        url: 'https://note.com/luida_freee/n/nc12e69dc977a',
        name: 'Luida@freee',
        description:
          '仕事は何ですか、と言われ「社会課題の解決のためにあれやこれやと頑張っています」みたいな話をすると、本当に様々な反応を受ける。 適当に相槌を打つ…',
        like: 131,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33477166/rectangle_large_type_2_02edbbb7acf1a6e65f0138ca94207895.png?fit=bounds&quality=45&width=1280'
      },
      {
        id: 15,
        title: 'SWATCHデザインの裏側～使われなかったデザイン供養するよ',
        url: 'https://note.com/teppeiii/n/n5a6d7a4e1ecc',
        name: '鈴木哲平@リディラバ',
        description:
          '2020年8月末から期間限定でカスタマイズできるSWATCH X YOUのデザインに使っていただいています。 もともと2017年末から半年間、SWATCHがやってる上海…',
        like: 176,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33618906/rectangle_large_type_2_d646c34f565fc0a96d259e4c420c293d.png?fit=bounds&quality=45&width=1280'
      },
      {
        id: 16,
        title: '水色の世界',
        url: 'https://note.com/ouma/n/ne44f2ed8d8ce',
        name: 'みじんことオーマ',
        description:
          'ちゃぷちゃぷと水音を立てるちびの表情は、夏の太陽みたいだった。 「おかあさん、みてみて！！」 ぴょんぴょんと弾むような声が、青空の下に響き渡る…',
        like: 48,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33599339/rectangle_large_type_2_ef6dff326e29d652b70edeb58134390c.jpg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 17,
        title: '有意義な時間を過ごさないといけない病',
        url: 'https://note.com/harunomama/n/ncb5e9d263457',
        name: 'はる',
        description:
          'なんか「有意義な時間を過ごさないといけない病」にかかってしまった だらだらゲームしてたり無為にすごしていると、ものすごく罪悪感を感じる 息子を…',
        like: 148,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33241270/rectangle_large_type_2_ef06c983a547bb65bf6ebf4afadb87f6.jpeg?fit=bounds&quality=45&width=1280'
      },
      {
        id: 18,
        title: '初めて入った和菓子屋さんで、何を買いますか？',
        url: 'https://note.com/ichibyo3/n/n6f136ae586f1',
        name: '一秒@マンガ家',
        description:
          'この質問をされて、即座に答えられる人ってどのくらいいらっしゃるんでしょう？ 甘いものが大好きで、出先で通りかかると和菓子屋さんやケーキ屋さんに…',
        like: 159,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33250398/rectangle_large_type_2_6c6e64bd2aa91ee2d9b2c1d1487926a8.png?fit=bounds&quality=45&width=1280'
      },
      {
        id: 19,
        title: 'レトロ可愛い「赤のアリス」が生まれ変わった話。',
        url: 'https://note.com/oyako_kitchen/n/n2020d435fcd8',
        name: '古谷 真知子',
        description:
          '今回は2020年に2月にリリースされた新書体「赤のアリス」という書体について紹介していきます。 1.書体の分類、いくつ知っていますか？ 書体は、骨格…',
        like: 92,
        eyecatch_src:
          'https://assets.st-note.com/production/uploads/images/33488466/rectangle_large_type_2_5bdf71528f6c4bf16d2d4595ee018e02.jpeg?fit=bounds&quality=45&width=1280'
      }
    ]
  }
}
