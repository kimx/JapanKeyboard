class popupController {
    Words: Array<WordDto>;
    InputWord: string = "";
    HkType: HkTypes = HkTypes.H;
    HistoryWords: Array<string>;
    constructor(private $scope: ng.IScope) {
        this.Words = [];
        this.AddHiragana();
        this.AddHiraganaLower();
        this.AddHiraganaZo();
        this.AddHiraganaYo();
        this.AddKatakana();
        this.AddKatakanaLower();
        this.AddKatakanaZo();
        this.AddKatakanaYo();
        this.AddSpecial();
    }

    Init() {
        this.HistoryWords = [];
        chrome.storage.local.get("tabUrl", function (item: any) {
            if (item != null) {
                var tab: any = $('[href="' + item.tabUrl + '"]');
                tab.tab('show');
            }
        });

        chrome.storage.local.get("mainInput", (item: any) => {
            if (item != null) {
                // $('#mainInput').val(item.mainInput)
                if (item.mainInput) {
                    this.InputWord = item.mainInput;
                    angular.forEach(this.Words, (value, index) => {
                        value.Selected = this.InputWord.indexOf(value.Text) > -1;
                    });
                }
                this.$scope.$apply();
            }
        });

        chrome.storage.local.get("hkType", (item: any) => {
            if (item.hkType) {
                this.HkType = item.hkType;
                this.$scope.$apply();
            }
        });

        chrome.storage.local.get("HistoryWords", (item: any) => {
            if (item.HistoryWords) {
                this.HistoryWords = item.HistoryWords;
                if (this.HistoryWords == undefined)
                    this.HistoryWords = [];
                this.$scope.$apply();

            }
        });

        document.addEventListener('copy', function (e: any) {
            var textToPutOnClipboard = $('#mainInput').val();
            e.clipboardData.setData('text/plain', textToPutOnClipboard);
            e.preventDefault();
        });

        // $("[locale-id='hkType']").html(chrome.i18n.getMessage("hkType"));
        var localeElms = $("[locale-id]");
        $.each(localeElms, (i, elm) => {
            var name = $(elm).attr("locale-id");
            var value = chrome.i18n.getMessage(name);
            $(elm).html(value);
        });
        console.log(chrome.i18n.getUILanguage());
    }
    Clear() {
        this.InputWord = "";
        this.InputChanged();
    }


    AddHiragana() {
        this.AddWord(110, "a", "あ", HkTypes.H, WordTypes.Pure, [510, 210]);
        this.AddWord(111, "i", "い", HkTypes.H, WordTypes.Pure, [511, 211]);
        this.AddWord(112, "u", "う", HkTypes.H, WordTypes.Pure, [512, 212]);
        this.AddWord(113, "e", "え", HkTypes.H, WordTypes.Pure, [513, 213]);
        this.AddWord(114, "o", "お", HkTypes.H, WordTypes.Pure, [514, 214]);
        this.AddWord(120, "ka", "か", HkTypes.H, WordTypes.Pure, [520, 310, 220]);
        this.AddWord(121, "ki", "き", HkTypes.H, WordTypes.Pure, [521, 311,]);
        this.AddWord(122, "ku", "く", HkTypes.H, WordTypes.Pure, [522, 312,]);
        this.AddWord(123, "ke", "け", HkTypes.H, WordTypes.Pure, [523, 313, 223]);
        this.AddWord(124, "ko", "こ", HkTypes.H, WordTypes.Pure, [524, 314,]);
        this.AddWord(130, "sa", "さ", HkTypes.H, WordTypes.Pure, [530, 315,]);
        this.AddWord(131, "si", "し", HkTypes.H, WordTypes.Pure, [531, 316,]);
        this.AddWord(132, "su", "す", HkTypes.H, WordTypes.Pure, [532, 317,]);
        this.AddWord(133, "se", "せ", HkTypes.H, WordTypes.Pure, [533, 318,]);
        this.AddWord(134, "so", "そ", HkTypes.H, WordTypes.Pure, [534, 319,]);
        this.AddWord(140, "ta", "た", HkTypes.H, WordTypes.Pure, [540, 320,]);
        this.AddWord(141, "chi", "ち", HkTypes.H, WordTypes.Pure, [541, 321,]);
        this.AddWord(142, "tu", "つ", HkTypes.H, WordTypes.Pure, [542, 322, 242]);
        this.AddWord(143, "te", "て", HkTypes.H, WordTypes.Pure, [543, 323,]);
        this.AddWord(144, "to", "と", HkTypes.H, WordTypes.Pure, [544, 324,]);
        this.AddWord(150, "na", "な", HkTypes.H, WordTypes.Pure, [550,]);
        this.AddWord(151, "ni", "に", HkTypes.H, WordTypes.Pure, [551,]);
        this.AddWord(152, "nu", "ぬ", HkTypes.H, WordTypes.Pure, [552,]);
        this.AddWord(153, "ne", "ね", HkTypes.H, WordTypes.Pure, [553,]);
        this.AddWord(154, "no", "の", HkTypes.H, WordTypes.Pure, [554,]);
        this.AddWord(160, "ha", "は", HkTypes.H, WordTypes.Pure, [560, 325, 330,]);
        this.AddWord(161, "hi", "ひ", HkTypes.H, WordTypes.Pure, [561, 326, 331,]);
        this.AddWord(162, "hu", "ふ", HkTypes.H, WordTypes.Pure, [562, 327, 332,]);
        this.AddWord(163, "he", "へ", HkTypes.H, WordTypes.Pure, [563, 328, 333,]);
        this.AddWord(164, "ho", "ほ", HkTypes.H, WordTypes.Pure, [564, 329, 334,]);
        this.AddWord(170, "ma", "ま", HkTypes.H, WordTypes.Pure, [570,]);
        this.AddWord(171, "mi", "み", HkTypes.H, WordTypes.Pure, [571,]);
        this.AddWord(172, "mu", "む", HkTypes.H, WordTypes.Pure, [572,]);
        this.AddWord(173, "me", "め", HkTypes.H, WordTypes.Pure, [573,]);
        this.AddWord(174, "mo", "も", HkTypes.H, WordTypes.Pure, [574,]);
        this.AddWord(190, "ya", "や", HkTypes.H, WordTypes.Pure, [590, 290]);
        this.AddWord(0, "i", "い", HkTypes.H, WordTypes.Pure, []);
        this.AddWord(191, "yu", "ゆ", HkTypes.H, WordTypes.Pure, [591, 291]);
        this.AddWord(0, "e", "え", HkTypes.H, WordTypes.Pure, []);
        this.AddWord(192, "yo", "よ", HkTypes.H, WordTypes.Pure, [592, 292]);
        this.AddWord(180, "ra", "ら", HkTypes.H, WordTypes.Pure, [580]);
        this.AddWord(181, "ri", "り", HkTypes.H, WordTypes.Pure, [581]);
        this.AddWord(182, "ru", "る", HkTypes.H, WordTypes.Pure, [582]);
        this.AddWord(183, "re", "れ", HkTypes.H, WordTypes.Pure, [583]);
        this.AddWord(184, "ro", "ろ", HkTypes.H, WordTypes.Pure, [584]);
        this.AddWord(193, "wa", "わ", HkTypes.H, WordTypes.Pure, [593]);
        this.AddWord(194, "wo", "を", HkTypes.H, WordTypes.Pure, [594]);
        this.AddWord(195, "n", "ん", HkTypes.H, WordTypes.Pure, [595]);

    }

    AddHiraganaLower() {
        this.AddWord(210, "a", "ぁ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(211, "i", "ぃ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(212, "u", "ぅ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(213, "e", "ぇ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(214, "o", "ぉ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(220, "ka", "ヵ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(223, "ke", "ヶ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(242, "tu", "っ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(290, "ya", "ゃ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(291, "yu", "ゅ", HkTypes.H, WordTypes.PureLower, []);
        this.AddWord(292, "yo", "ょ", HkTypes.H, WordTypes.PureLower, []);

    }

    AddHiraganaZo() {
        this.AddWord(310, "ga", "が", HkTypes.H, WordTypes.Zo, [710]);
        this.AddWord(311, "gi", "ぎ", HkTypes.H, WordTypes.Zo, [711]);
        this.AddWord(312, "gu", "ぐ", HkTypes.H, WordTypes.Zo, [712]);
        this.AddWord(313, "ge", "げ", HkTypes.H, WordTypes.Zo, [713]);
        this.AddWord(314, "go", "ご", HkTypes.H, WordTypes.Zo, [714]);
        this.AddWord(315, "za", "ざ", HkTypes.H, WordTypes.Zo, [715]);
        this.AddWord(316, "ji", "じ", HkTypes.H, WordTypes.Zo, [716]);
        this.AddWord(317, "zu", "ず", HkTypes.H, WordTypes.Zo, [717]);
        this.AddWord(318, "ze", "ぜ", HkTypes.H, WordTypes.Zo, [718]);
        this.AddWord(319, "zo", "ぞ", HkTypes.H, WordTypes.Zo, [719]);
        this.AddWord(320, "da", "だ", HkTypes.H, WordTypes.Zo, [720]);
        this.AddWord(321, "ji", "ぢ", HkTypes.H, WordTypes.Zo, [721]);
        this.AddWord(322, "zu", "づ", HkTypes.H, WordTypes.Zo, [722]);
        this.AddWord(323, "de", "で", HkTypes.H, WordTypes.Zo, [723]);
        this.AddWord(324, "do", "ど", HkTypes.H, WordTypes.Zo, [724]);
        this.AddWord(325, "ba", "ば", HkTypes.H, WordTypes.Zo, [725]);
        this.AddWord(326, "bi", "び", HkTypes.H, WordTypes.Zo, [726]);
        this.AddWord(327, "bu", "ぶ", HkTypes.H, WordTypes.Zo, [727]);
        this.AddWord(328, "be", "べ", HkTypes.H, WordTypes.Zo, [728]);
        this.AddWord(329, "bo", "ぼ", HkTypes.H, WordTypes.Zo, [729]);
        this.AddWord(330, "pa", "ぱ", HkTypes.H, WordTypes.Zo, [730]);
        this.AddWord(331, "pi", "ぴ", HkTypes.H, WordTypes.Zo, [731]);
        this.AddWord(332, "pu", "ぷ", HkTypes.H, WordTypes.Zo, [732]);
        this.AddWord(333, "pe", "ぺ", HkTypes.H, WordTypes.Zo, [733]);
        this.AddWord(334, "po", "ぽ", HkTypes.H, WordTypes.Zo, [734]);

    }

    AddHiraganaYo() {
        this.AddWord(410, "kya", "きゃ", HkTypes.H, WordTypes.Yo, [810]);
        this.AddWord(411, "kyu", "きゅ", HkTypes.H, WordTypes.Yo, [811]);
        this.AddWord(412, "kyo", "きょ", HkTypes.H, WordTypes.Yo, [812]);
        this.AddWord(413, "gya", "ぎゃ", HkTypes.H, WordTypes.Yo, [813]);
        this.AddWord(414, "gyu", "ぎゅ", HkTypes.H, WordTypes.Yo, [814]);
        this.AddWord(415, "gyo", "ぎょ", HkTypes.H, WordTypes.Yo, [815]);
        this.AddWord(416, "sha", "しゃ", HkTypes.H, WordTypes.Yo, [816]);
        this.AddWord(417, "shu", "しゅ", HkTypes.H, WordTypes.Yo, [817]);
        this.AddWord(418, "sho", "しょ", HkTypes.H, WordTypes.Yo, [818]);
        this.AddWord(419, "ja", "じゃ", HkTypes.H, WordTypes.Yo, [819]);
        this.AddWord(420, "ju", "じゅ", HkTypes.H, WordTypes.Yo, [820]);
        this.AddWord(421, "jo", "じょ", HkTypes.H, WordTypes.Yo, [821]);
        this.AddWord(422, "cha", "ちゃ", HkTypes.H, WordTypes.Yo, [822]);
        this.AddWord(423, "chu", "ちゅ", HkTypes.H, WordTypes.Yo, [823]);
        this.AddWord(424, "cho", "ちょ", HkTypes.H, WordTypes.Yo, [824]);
        this.AddWord(425, "nya", "にゃ", HkTypes.H, WordTypes.Yo, [825]);
        this.AddWord(426, "nyu", "にゅ", HkTypes.H, WordTypes.Yo, [826]);
        this.AddWord(427, "nyo", "にょ", HkTypes.H, WordTypes.Yo, [827]);
        this.AddWord(428, "hya", "ひゃ", HkTypes.H, WordTypes.Yo, [828]);
        this.AddWord(429, "hyu", "ひゅ", HkTypes.H, WordTypes.Yo, [829]);
        this.AddWord(430, "hyo", "ひょ", HkTypes.H, WordTypes.Yo, [830]);
        this.AddWord(431, "bya", "びゃ", HkTypes.H, WordTypes.Yo, [831]);
        this.AddWord(432, "byu", "びゅ", HkTypes.H, WordTypes.Yo, [832]);
        this.AddWord(433, "byo", "びょ", HkTypes.H, WordTypes.Yo, [833]);
        this.AddWord(434, "pya", "ぴゃ", HkTypes.H, WordTypes.Yo, [834]);
        this.AddWord(435, "pyu", "ぴゅ", HkTypes.H, WordTypes.Yo, [835]);
        this.AddWord(436, "pyo", "ぴょ", HkTypes.H, WordTypes.Yo, [836]);
        this.AddWord(437, "mya", "みゃ", HkTypes.H, WordTypes.Yo, [837]);
        this.AddWord(438, "myu", "みゅ", HkTypes.H, WordTypes.Yo, [838]);
        this.AddWord(439, "myo", "みょ", HkTypes.H, WordTypes.Yo, [839]);
        this.AddWord(440, "rya", "りゃ", HkTypes.H, WordTypes.Yo, [840]);
        this.AddWord(441, "ryu", "りゅ", HkTypes.H, WordTypes.Yo, [841]);
        this.AddWord(442, "ryo", "りょ", HkTypes.H, WordTypes.Yo, [842]);


    }

    AddKatakana() {
        this.AddWord(510, "a", "ア", HkTypes.K, WordTypes.Pure, [110, 610]);
        this.AddWord(511, "i", "イ", HkTypes.K, WordTypes.Pure, [111, 611]);
        this.AddWord(512, "u", "ウ", HkTypes.K, WordTypes.Pure, [112, 612]);
        this.AddWord(513, "e", "エ", HkTypes.K, WordTypes.Pure, [113, 613]);
        this.AddWord(514, "o", "オ", HkTypes.K, WordTypes.Pure, [114, , 614]);
        this.AddWord(520, "ka", "カ", HkTypes.K, WordTypes.Pure, [120, 710, 620]);
        this.AddWord(521, "ki", "キ", HkTypes.K, WordTypes.Pure, [121, 711,]);
        this.AddWord(522, "ku", "ク", HkTypes.K, WordTypes.Pure, [122, 712,]);
        this.AddWord(523, "ke", "ケ", HkTypes.K, WordTypes.Pure, [123, 713, 623]);
        this.AddWord(524, "ko", "コ", HkTypes.K, WordTypes.Pure, [124, 714,]);
        this.AddWord(530, "sa", "サ", HkTypes.K, WordTypes.Pure, [130, 715,]);
        this.AddWord(531, "si", "シ", HkTypes.K, WordTypes.Pure, [131, 716,]);
        this.AddWord(532, "su", "ス", HkTypes.K, WordTypes.Pure, [132, 717,]);
        this.AddWord(533, "se", "セ", HkTypes.K, WordTypes.Pure, [133, 718,]);
        this.AddWord(534, "so", "ソ", HkTypes.K, WordTypes.Pure, [134, 719,]);
        this.AddWord(540, "ta", "タ", HkTypes.K, WordTypes.Pure, [140, 720,]);
        this.AddWord(541, "chi", "チ", HkTypes.K, WordTypes.Pure, [141, 721,]);
        this.AddWord(542, "tu", "ツ", HkTypes.K, WordTypes.Pure, [142, 722, 642]);
        this.AddWord(543, "te", "テ", HkTypes.K, WordTypes.Pure, [143, 723,]);
        this.AddWord(544, "to", "ト", HkTypes.K, WordTypes.Pure, [144, 724,]);
        this.AddWord(550, "na", "ナ", HkTypes.K, WordTypes.Pure, [150,]);
        this.AddWord(551, "ni", "ニ", HkTypes.K, WordTypes.Pure, [151,]);
        this.AddWord(552, "nu", "ヌ", HkTypes.K, WordTypes.Pure, [152,]);
        this.AddWord(553, "ne", "ネ", HkTypes.K, WordTypes.Pure, [153,]);
        this.AddWord(554, "no", "ノ", HkTypes.K, WordTypes.Pure, [154,]);
        this.AddWord(560, "ha", "ハ", HkTypes.K, WordTypes.Pure, [160, 725, 730,]);
        this.AddWord(561, "hi", "ヒ", HkTypes.K, WordTypes.Pure, [161, 726, 731,]);
        this.AddWord(562, "hu", "フ", HkTypes.K, WordTypes.Pure, [162, 727, 732,]);
        this.AddWord(563, "he", "ヘ", HkTypes.K, WordTypes.Pure, [163, 728, 733,]);
        this.AddWord(564, "ho", "ホ", HkTypes.K, WordTypes.Pure, [164, 729, 734]);
        this.AddWord(570, "ma", "マ", HkTypes.K, WordTypes.Pure, [170,]);
        this.AddWord(571, "mi", "ミ", HkTypes.K, WordTypes.Pure, [171,]);
        this.AddWord(572, "mu", "ム", HkTypes.K, WordTypes.Pure, [172,]);
        this.AddWord(573, "me", "メ", HkTypes.K, WordTypes.Pure, [173,]);
        this.AddWord(574, "mo", "モ", HkTypes.K, WordTypes.Pure, [174,]);
        this.AddWord(590, "ya", "ヤ", HkTypes.K, WordTypes.Pure, [190, 690]);
        this.AddWord(0, "i", "イ", HkTypes.K, WordTypes.Pure, []);
        this.AddWord(590, "ya", "ヤ", HkTypes.K, WordTypes.Pure, [191, 691]);
        this.AddWord(0, "e", "エ", HkTypes.K, WordTypes.Pure, []);
        this.AddWord(592, "yo", "ヨ", HkTypes.K, WordTypes.Pure, [192, 692]);
        this.AddWord(580, "ra", "ラ", HkTypes.K, WordTypes.Pure, [180]);
        this.AddWord(581, "ri", "リ", HkTypes.K, WordTypes.Pure, [181]);
        this.AddWord(582, "ru", "ル", HkTypes.K, WordTypes.Pure, [182]);
        this.AddWord(583, "re", "レ", HkTypes.K, WordTypes.Pure, [183]);
        this.AddWord(584, "ro", "ロ", HkTypes.K, WordTypes.Pure, [184]);
        this.AddWord(593, "wa", "ワ", HkTypes.K, WordTypes.Pure, [193]);
        this.AddWord(594, "n", "ヲ", HkTypes.K, WordTypes.Pure, [195]);
        this.AddWord(595, "wo", "ン", HkTypes.K, WordTypes.Pure, [194]);


    }

    AddKatakanaLower() {
        this.AddWord(610, "a", "ァ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(611, "i", "ィ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(612, "u", "ゥ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(613, "e", "ェ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(614, "o", "ォ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(620, "ka", "ヵ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(623, "ke", "ヶ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(642, "tu", "ッ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(690, "ya", "ャ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(691, "yu", "ュ", HkTypes.K, WordTypes.PureLower, []);
        this.AddWord(692, "yo", "ョ", HkTypes.K, WordTypes.PureLower, []);

    }

    AddKatakanaZo() {
        this.AddWord(710, "ga", "ガ", HkTypes.K, WordTypes.Zo, [310]);
        this.AddWord(711, "gi", "ギ", HkTypes.K, WordTypes.Zo, [311]);
        this.AddWord(712, "gu", "グ", HkTypes.K, WordTypes.Zo, [312]);
        this.AddWord(713, "ge", "ゲ", HkTypes.K, WordTypes.Zo, [313]);
        this.AddWord(714, "go", "ゴ", HkTypes.K, WordTypes.Zo, [314]);
        this.AddWord(715, "za", "ザ", HkTypes.K, WordTypes.Zo, [315]);
        this.AddWord(716, "ji", "ジ", HkTypes.K, WordTypes.Zo, [316]);
        this.AddWord(717, "zu", "ズ", HkTypes.K, WordTypes.Zo, [317]);
        this.AddWord(718, "ze", "ゼ", HkTypes.K, WordTypes.Zo, [318]);
        this.AddWord(719, "zo", "ゾ", HkTypes.K, WordTypes.Zo, [319]);
        this.AddWord(720, "da", "ダ", HkTypes.K, WordTypes.Zo, [320]);
        this.AddWord(721, "ji", "ジ", HkTypes.K, WordTypes.Zo, [321]);
        this.AddWord(722, "zu", "ズ", HkTypes.K, WordTypes.Zo, [322]);
        this.AddWord(723, "de", "デ", HkTypes.K, WordTypes.Zo, [323]);
        this.AddWord(724, "do", "ド", HkTypes.K, WordTypes.Zo, [324]);
        this.AddWord(725, "ba", "バ", HkTypes.K, WordTypes.Zo, [325]);
        this.AddWord(726, "bi", "ビ", HkTypes.K, WordTypes.Zo, [326]);
        this.AddWord(727, "bu", "ブ", HkTypes.K, WordTypes.Zo, [327]);
        this.AddWord(728, "be", "ベ", HkTypes.K, WordTypes.Zo, [328]);
        this.AddWord(729, "bo", "ボ", HkTypes.K, WordTypes.Zo, [329]);
        this.AddWord(730, "pa", "パ", HkTypes.K, WordTypes.Zo, [330]);
        this.AddWord(731, "pi", "ピ", HkTypes.K, WordTypes.Zo, [331]);
        this.AddWord(732, "pu", "プ", HkTypes.K, WordTypes.Zo, [332]);
        this.AddWord(733, "pe", "ペ", HkTypes.K, WordTypes.Zo, [333]);
        this.AddWord(734, "po", "ポ", HkTypes.K, WordTypes.Zo, [334]);
    }

    AddKatakanaYo() {
        this.AddWord(810, "kya", "キャ", HkTypes.K, WordTypes.Yo, [410]);
        this.AddWord(811, "kyu", "キュ", HkTypes.K, WordTypes.Yo, [411]);
        this.AddWord(812, "kyo", "キョ", HkTypes.K, WordTypes.Yo, [412]);
        this.AddWord(813, "gya", "ギャ", HkTypes.K, WordTypes.Yo, [413]);
        this.AddWord(814, "gyu", "ギュ", HkTypes.K, WordTypes.Yo, [414]);
        this.AddWord(815, "gyo", "ギョ", HkTypes.K, WordTypes.Yo, [415]);
        this.AddWord(816, "sha", "シャ", HkTypes.K, WordTypes.Yo, [416]);
        this.AddWord(817, "shu", "シュ", HkTypes.K, WordTypes.Yo, [417]);
        this.AddWord(818, "sho", "ショ", HkTypes.K, WordTypes.Yo, [418]);
        this.AddWord(819, "ja", "ジャ", HkTypes.K, WordTypes.Yo, [419]);
        this.AddWord(820, "ju", "ジュ", HkTypes.K, WordTypes.Yo, [420]);
        this.AddWord(821, "jo", "ジョ", HkTypes.K, WordTypes.Yo, [421]);
        this.AddWord(822, "cha", "チャ", HkTypes.K, WordTypes.Yo, [422]);
        this.AddWord(823, "chu", "チュ", HkTypes.K, WordTypes.Yo, [423]);
        this.AddWord(824, "cho", "チョ", HkTypes.K, WordTypes.Yo, [424]);
        this.AddWord(825, "nya", "ニャ", HkTypes.K, WordTypes.Yo, [425]);
        this.AddWord(826, "nyu", "ニュ", HkTypes.K, WordTypes.Yo, [426]);
        this.AddWord(827, "nyo", "ニョ", HkTypes.K, WordTypes.Yo, [427]);
        this.AddWord(828, "hya", "ヒャ", HkTypes.K, WordTypes.Yo, [428]);
        this.AddWord(829, "hyu", "ヒュ", HkTypes.K, WordTypes.Yo, [429]);
        this.AddWord(830, "hyo", "ヒョ", HkTypes.K, WordTypes.Yo, [430]);
        this.AddWord(831, "bya", "ビャ", HkTypes.K, WordTypes.Yo, [431]);
        this.AddWord(832, "byu", "ビュ", HkTypes.K, WordTypes.Yo, [432]);
        this.AddWord(833, "byo", "ビョ", HkTypes.K, WordTypes.Yo, [433]);
        this.AddWord(834, "pya", "ピャ", HkTypes.K, WordTypes.Yo, [434]);
        this.AddWord(835, "pyu", "ピュ", HkTypes.K, WordTypes.Yo, [435]);
        this.AddWord(836, "pyo", "ピョ", HkTypes.K, WordTypes.Yo, [436]);
        this.AddWord(837, "mya", "ミャ", HkTypes.K, WordTypes.Yo, [437]);
        this.AddWord(838, "myu", "ミュ", HkTypes.K, WordTypes.Yo, [438]);
        this.AddWord(839, "myo", "ミョ", HkTypes.K, WordTypes.Yo, [439]);
        this.AddWord(840, "rya", "リャ", HkTypes.K, WordTypes.Yo, [440]);
        this.AddWord(841, "ryu", "リュ", HkTypes.K, WordTypes.Yo, [441]);
        this.AddWord(842, "ryo", "リョ", HkTypes.K, WordTypes.Yo, [442]);

    }
    //ー,々(omaji)
    AddSpecial() {
        this.AddWord(910, "ii", "ー", HkTypes.K, WordTypes.Special, null);
        this.AddWord(911, "omaji", "々", HkTypes.H, WordTypes.Special, null);


    }

    AddWord(id: number, proun: string, text: string, hkType: HkTypes, wordType: WordTypes, relations: Array<number> = []): WordDto {
        var item = { Id: id, Pronun: proun, Text: text, WordType: wordType, Relations: relations, HkType: hkType, Descript: "", Selected: false };
        this.Words.push(item);
        if (wordType == WordTypes.PureLower)
            item.Descript = chrome.i18n.getMessage("lower");//"小寫";
        else if (wordType == WordTypes.Zo)
            item.Descript = chrome.i18n.getMessage("dakuYoOn");//"半全濁音";
        else if (wordType == WordTypes.Pure || wordType == WordTypes.Yo) {
            if (hkType == HkTypes.H)
                item.Descript = chrome.i18n.getMessage("hkType0");//"平假名";
            else
                item.Descript = chrome.i18n.getMessage("hkType1");// "片假名";
        }
        return item;
    }

    AppendInput(input: WordDto) {
        this.InputWord = `${this.InputWord}${input.Text}`;
        this.InputChanged();
    }

    //---Retrieve
    RetrieveData(wordType: WordTypes) {
        var result = this.Words.filter(o => o.HkType == this.HkType && o.WordType == wordType);
        return result;
    }

    GetRelations(item: WordDto) {
        var array = [];
        angular.forEach(item.Relations, (value, key) => {
            var find = this.Words.filter(w => w.Id == value)[0];
            array.push(find);
        });
        return array;
    }

    Translate() {
        this.AddToHistory();
        var value = encodeURI(this.InputWord);
        var lang = chrome.i18n.getUILanguage();
        if (lang.substr(0, 3) == "en-")
            lang = "en";

        var url = `https://translate.google.com.tw/#ja/${lang}/${value}`;
        window.open(url);

    }
    KeepTab(tabUrl: string) {
        chrome.storage.local.set({ "tabUrl": tabUrl });
    }
    KeepHkType(hkType: number) {
        chrome.storage.local.set({ "hkType": hkType });
    }
    InputChanged() {
        chrome.storage.local.set({ "mainInput": this.InputWord });
        angular.forEach(this.Words, (value, index) => {
            value.Selected = this.InputWord.indexOf(value.Text) > -1;
        });
    }
    Copy() {
        this.AddToHistory();
        document.execCommand('copy');
    }

    HistoryToInput(h: string) {
        this.InputWord = this.InputWord + h;
    }
    HistoryClear() {
        this.HistoryWords = [];
        chrome.storage.local.set({ "HistoryWords": this.HistoryWords });
    }
    HistoryMax = 20;
    private AddToHistory() {
        this.RemoveItem(this.HistoryWords, this.InputWord);
        this.HistoryWords.reverse();
        this.HistoryWords.push(this.InputWord);
        this.HistoryWords.reverse();

        if (this.HistoryWords.length > this.HistoryMax) {
            this.HistoryWords.splice(this.HistoryMax, this.HistoryWords.length - this.HistoryMax);
        }

        chrome.storage.local.set({ "HistoryWords": this.HistoryWords });
    }
    private RemoveItem(items: Array<any>, item: any) {
        var index = items.indexOf(item);
        if (index == -1)
            return;
        items.splice(index, 1);
    }

}

class popup {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.RegisterEvent();
        });

        //document.addEventListener('unload', () => {
        //    window.location.href = 'http://www.google.com.tw';
        //});
    }

    private RegisterEvent() {
        $("[jk-button]").on("click", (e) => {
            var value = $(e.target).attr("jk-button");
            console.log(value);
            console.log(value.toLowerCase());
        });

        var app = angular.module('app', []);
        app.controller("popupController", ['$scope', popupController]);
        //var controller = app.controller("popupController");
        //console.log("controller");
        //console.log(controller);
    }
}



interface WordDto {
    Id: number;
    Pronun: string;
    Text: string;
    HkType: HkTypes;
    WordType: WordTypes;
    Relations: Array<number>;
    Descript: string;
    Selected: boolean;
}

enum HkTypes {
    H = 0,
    K = 1,
}

enum WordTypes {
    Pure = 100,
    PureLower = 200,
    Zo = 300,
    Yo = 400,
    Special = 500,
}

new popup();
