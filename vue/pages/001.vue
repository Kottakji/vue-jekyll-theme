<template>
    <main-layout>
        <VideoPage
                v-bind:title="title"
                v-bind:date="date"
                v-bind:image="image"
                v-bind:imageClass="imageClass"
        >
            <h2 id="jj-lin">JJ Lin</h2>

            <p>Mijn favoriete Taiwanese zanger. Klik hier voor de <a target="_blank" href="https://www.youtube.com/watch?v=5gtKlxBqxgI">youtube
                clip</a>.
                Onderaan de pagina staat een Nederlandse woordenlijst om Chinees mee te leren.
                Zowel traditioneel als simplified. 加油！</p>

            <h3 id="simplified--traditioneel"><a href="#simplified">Simplified</a> | <a href="#traditional"
                                                                                        style="color: gray;">Traditioneel</a>
            </h3>

            <div class="highlighter-rouge">
                <div class="highlight"><pre class="highlight"><code>很想给你写封信
告诉你这里的天气
昨夜的那一场电影
还有我的心情

很想给你写封信
却只是想想而已
我已经不能肯定
你是不是还会关心

爱与不爱都需要勇气
於是我们都选择了放弃
爱与不爱都需要勇气
於是我们都选择了逃避

或许你不相信
我很满意 这样的结局
或许你不相信
我没有一丝的 埋怨和悔意
虽然你是我的最初
虽然你是我的最终
虽然你是我的唯一

You are my only one ~

You are my one and only one ~

很想给你写封信
告诉你这里的天气
昨夜的那一场电影
还有我的心情 oh ~

很想给你写封信
告诉你这里的天气
我已经不能肯定
你是不是 还会关心 ~

爱与不爱都需要勇气
於是我们都选择了逃避
爱与不爱都需要勇气
於是我们都选择了逃避

或许你不相信
我很满意 这样的结局
或许你不相信
我没有一丝的 埋怨和悔意
虽然你是我的最初
虽然你是我的最终
虽然你是我的唯一

或许你不相信
我很满意 这样的结局
或许你不相信
我没有一丝的 埋怨和悔意
虽然你是我的最初
虽然你是我的最终
虽然你是我的唯一

Ah ~ You are the only one ~

You are my one and only one ~

You are the only one ooo ~
</code></pre>
                </div>
            </div>

            <div class="highlighter-rouge">
                <div class="highlight" style="display: none;"><pre class="highlight"><code>很想給你寫封信
告訴你這裡的天氣
昨夜的那一場電影
還有我的心情

很想給你寫封信
卻只是想想而已
我已經不能肯定
你是不是還會關心

愛與不愛都需要勇氣
於是我們都選擇了放棄
愛與不愛都需要勇氣
於是我們都選擇了逃避

或許你不相信
我很滿意 這樣的結局
或許你不相信
我沒有一絲的 埋怨和悔意
雖然你是我的最初
雖然你是我的最終
雖然你是我的唯一

You are my only one ~

You are my one and only one ~

很想給你寫封信
告訴你這裡的天氣
昨夜的那一場電影
還有我的心情 oh ~

很想給你寫封信
告訴你這裡的天氣
我已經不能肯定
你是不是 還會關心 ~

愛與不愛都需要勇氣
於是我們都選擇了逃避
愛與不愛都需要勇氣
於是我們都選擇了逃避

或許你不相信
我很滿意 這樣的結局
或許你不相信
我沒有一絲的 埋怨和悔意
雖然你是我的最初
雖然你是我的最終
雖然你是我的唯一

或許你不相信
我很滿意 這樣的結局
或許你不相信
我沒有一絲的 埋怨和悔意
雖然你是我的最初
雖然你是我的最終
雖然你是我的唯一

Ah ~ You are the only one ~

You are my one and only one ~

You are the only one ooo ~
</code></pre>
                </div>
            </div>

            <h3 id="de-woordenlijst">De woordenlijst</h3>

            <table>
                <thead>
                <tr>
                    <th>Traditioneel</th>
                    <th>Simplified</th>
                    <th>Pinyin</th>
                    <th>Betekenis</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>很</td>
                    <td>很</td>
                    <td>hen3</td>
                    <td>heel (als in, heel goed, heel snel)</td>
                </tr>
                <tr>
                    <td>想</td>
                    <td>想</td>
                    <td>xiang3</td>
                    <td>denken/geloven/iets willen/iets of iemand missen</td>
                </tr>
                <tr>
                    <td>給</td>
                    <td>给</td>
                    <td>gei3</td>
                    <td>geven/aan/iets doen voor iemand/(grammaticaal gelijk aan 被)/grammaticaal gelijk aan
                        把)/(bijwoord)
                    </td>
                </tr>
                <tr>
                    <td>你</td>
                    <td>你</td>
                    <td>ni3</td>
                    <td>jij (informeel, waar 您[nin2] de beleefde vorm is)</td>
                </tr>
                <tr>
                    <td>寫</td>
                    <td>写</td>
                    <td>xie3</td>
                    <td>schrijven</td>
                </tr>
                <tr>
                    <td>封</td>
                    <td>封</td>
                    <td>feng1</td>
                    <td>envelop/omhulsel/uitreiken/toekennen/stempelen/verzegelen/maatwoord voor gesloten objecten zoals
                        brieven en enveloppen
                    </td>
                </tr>
                <tr>
                    <td>信</td>
                    <td>信</td>
                    <td>xin4</td>
                    <td>brief/mail/MW:封[feng1]/geloven/ergens in geloven</td>
                </tr>
                <tr>
                    <td>告</td>
                    <td>告</td>
                    <td>gao4</td>
                    <td>zeggen/vertellen/aankondigen/aanklagen/iemand aanklagen</td>
                </tr>
                <tr>
                    <td>告訴</td>
                    <td>告诉</td>
                    <td>gao4 su5</td>
                    <td>vertellen/iemand iets laten weten</td>
                </tr>
                <tr>
                    <td>訴</td>
                    <td>诉</td>
                    <td>su4</td>
                    <td>klagen/aanklagen/vertellen</td>
                </tr>
                <tr>
                    <td>這</td>
                    <td>这</td>
                    <td>zhe4</td>
                    <td>dit/deze/(wordt soms uitgesproken als [zhei4] indien het voor een maatwoord komt, vooral in
                        Beijing)
                    </td>
                </tr>
                <tr>
                    <td>這裡</td>
                    <td>这里</td>
                    <td>zhe4 li3</td>
                    <td>hier</td>
                </tr>
                <tr>
                    <td>的</td>
                    <td>的</td>
                    <td>de5</td>
                    <td>van/maakt woorden bezittelijk (我的 [wo3 de5] mijn, 他的 [ta1 de5] zijn/haar)</td>
                </tr>
                <tr>
                    <td>天</td>
                    <td>天</td>
                    <td>tian1</td>
                    <td>dag/lucht/hemel</td>
                </tr>
                <tr>
                    <td>天氣</td>
                    <td>天气</td>
                    <td>tian1 qi4</td>
                    <td>(het) weer</td>
                </tr>
                <tr>
                    <td>氣</td>
                    <td>气</td>
                    <td>qi4</td>
                    <td>gas/lucht/geur/weer/qi (energie)/energie/boos maken/iemand ergeren</td>
                </tr>
                <tr>
                    <td>昨</td>
                    <td>昨</td>
                    <td>zuo2</td>
                    <td>gisteren</td>
                </tr>
                <tr>
                    <td>昨夜</td>
                    <td>昨夜</td>
                    <td>zuo2 ye4</td>
                    <td>gisteravond</td>
                </tr>
                <tr>
                    <td>夜</td>
                    <td>夜</td>
                    <td>ye4</td>
                    <td>avond</td>
                </tr>
                <tr>
                    <td>那</td>
                    <td>那</td>
                    <td>na4</td>
                    <td>dat/die/dan (in dat geval)/wordt vaak als [nei4] uitgesproken, vooral in Beijing</td>
                </tr>
                <tr>
                    <td>一</td>
                    <td>一</td>
                    <td>yi1</td>
                    <td>één/1/enkele/een (partikel)/zodra/alles/geheel/(Kangxi radicaal 1)/wordt ook wel als [yao1]
                        uitgesproken voor duidelijkheid bij het spellen van nummers
                    </td>
                </tr>
                <tr>
                    <td>場</td>
                    <td>场</td>
                    <td>chang3</td>
                    <td>grote plek/toneel/podium/scène (van een toneelstuk)/maatwoord voor sport activiteiten/maatwoord
                        voor aantal examens
                    </td>
                </tr>
                <tr>
                    <td>電</td>
                    <td>电</td>
                    <td>dian4</td>
                    <td>elektriciteit/elektrisch</td>
                </tr>
                <tr>
                    <td>電影</td>
                    <td>电影</td>
                    <td>dian4 ying3</td>
                    <td>film/MW:部[bu4],片[pian4],幕[mu4],場(场)[chang3]</td>
                </tr>
                <tr>
                    <td>影</td>
                    <td>影</td>
                    <td>ying3</td>
                    <td>schaduw/reflectie/film/foto/plaatje</td>
                </tr>
                <tr>
                    <td>還</td>
                    <td>还</td>
                    <td>hai2</td>
                    <td>nog/nog steeds/iets dat nog steeds bezig is/nog meer/redelijk/ook</td>
                </tr>
                <tr>
                    <td>還有</td>
                    <td>还有</td>
                    <td>hai2 you3</td>
                    <td>bovendien/verder nog/ook</td>
                </tr>
                <tr>
                    <td>有</td>
                    <td>有</td>
                    <td>you3</td>
                    <td>hebben/er zijn/zijn</td>
                </tr>
                <tr>
                    <td>我</td>
                    <td>我</td>
                    <td>wo3</td>
                    <td>ik</td>
                </tr>
                <tr>
                    <td>心</td>
                    <td>心</td>
                    <td>xin1</td>
                    <td>hart/geest/intentie/centrum/kern/MW:顆(颗)[ke1],個(个)[ge4]</td>
                </tr>
                <tr>
                    <td>心情</td>
                    <td>心情</td>
                    <td>xin1 qing2</td>
                    <td>humeur/stemming/MW:個(个)[ge4]</td>
                </tr>
                <tr>
                    <td>情</td>
                    <td>情</td>
                    <td>qing2</td>
                    <td>gevoel/emotie/passie/situatie</td>
                </tr>
                <tr>
                    <td>卻</td>
                    <td>却</td>
                    <td>que4</td>
                    <td>maar/hoewel/niettemin</td>
                </tr>
                <tr>
                    <td>只</td>
                    <td>只</td>
                    <td>zhi3</td>
                    <td>alleen/slechts</td>
                </tr>
                <tr>
                    <td>只是</td>
                    <td>只是</td>
                    <td>zhi3 shi4</td>
                    <td>alleen/slechts/eenvoudigweg</td>
                </tr>
                <tr>
                    <td>是</td>
                    <td>是</td>
                    <td>shi4</td>
                    <td>is/zijn/ja/zijn</td>
                </tr>
                <tr>
                    <td>而</td>
                    <td>而</td>
                    <td>er2</td>
                    <td>en/ook/zowel/(toont relatie aan)/(toont verandering van toestand aan)/(toont contrast aan)</td>
                </tr>
                <tr>
                    <td>而已</td>
                    <td>而已</td>
                    <td>er2 yi3</td>
                    <td>dat is alles/niets meer</td>
                </tr>
                <tr>
                    <td>已</td>
                    <td>已</td>
                    <td>yi3</td>
                    <td>nu al/stoppend/dan/daarna</td>
                </tr>
                <tr>
                    <td>已經</td>
                    <td>已经</td>
                    <td>yi3 jing1</td>
                    <td>nu al</td>
                </tr>
                <tr>
                    <td>經</td>
                    <td>经</td>
                    <td>jing1</td>
                    <td>klassiekers/heilig boek/script/er doorheen komen/ondergaan/verdragen/inslag
                        (textiel)/longitude/menstruatie/afkorting voor economie 經濟(经济)[jing1 ji4]
                    </td>
                </tr>
                <tr>
                    <td>不</td>
                    <td>不</td>
                    <td>bu4</td>
                    <td>nee/niet</td>
                </tr>
                <tr>
                    <td>不能</td>
                    <td>不能</td>
                    <td>bu4 neng2</td>
                    <td>kan niet/moet niet/zou niet moeten</td>
                </tr>
                <tr>
                    <td>能</td>
                    <td>能</td>
                    <td>neng2</td>
                    <td>kunnen/in staan zijn om/mogelijk/vermogen/(fysiek) vermogen</td>
                </tr>
                <tr>
                    <td>肯</td>
                    <td>肯</td>
                    <td>ken3</td>
                    <td>instemmen/het eens zijn/toestemmen/ermee instemmen/bereidwillig zijn</td>
                </tr>
                <tr>
                    <td>肯定</td>
                    <td>肯定</td>
                    <td>ken3 ding4</td>
                    <td>ergens zeker van zijn/definitief/zeker zijn/bevestigen</td>
                </tr>
                <tr>
                    <td>定</td>
                    <td>定</td>
                    <td>ding4</td>
                    <td>vastzetten/besluiten/bestellen</td>
                </tr>
                <tr>
                    <td>是不是</td>
                    <td>是不是</td>
                    <td>shi4 bu4 shi4</td>
                    <td>ja of nee/is het zo dat?/waar of niet waar</td>
                </tr>
                <tr>
                    <td>會</td>
                    <td>会</td>
                    <td>hui4</td>
                    <td>kunnen/mogelijk zijn/willend zijn/(grammaticaal woord om de toekomstige vorm aan te
                        geven)/waarschijnlijk/ontmoeten/verzamelen/bijeenbrengen/groep/vereniging/MW:個(个)[ge4]
                    </td>
                </tr>
                <tr>
                    <td>關</td>
                    <td>关</td>
                    <td>guan1</td>
                    <td>(iets) betreffen/ergens over gaan/bergpas/sluiten/uitdoen</td>
                </tr>
                <tr>
                    <td>關心</td>
                    <td>关心</td>
                    <td>guan1 xin1</td>
                    <td>ergens zorgen over maken/ergen om geven</td>
                </tr>
                <tr>
                    <td>心愛</td>
                    <td>心爱</td>
                    <td>xin1 ai4</td>
                    <td>geliefde</td>
                </tr>
                <tr>
                    <td>愛</td>
                    <td>爱</td>
                    <td>ai4</td>
                    <td>liefhebben/houden van/genegenheid/liefde</td>
                </tr>
                <tr>
                    <td>與</td>
                    <td>与</td>
                    <td>yu3</td>
                    <td>en/geven/samen met</td>
                </tr>
                <tr>
                    <td>都</td>
                    <td>都</td>
                    <td>dou1</td>
                    <td>alles/beide/geheel/(om te benadrukken) zelfs/(totaal) niet</td>
                </tr>
                <tr>
                    <td>需</td>
                    <td>需</td>
                    <td>xu1</td>
                    <td>nodig hebben/nodig zijn/willen</td>
                </tr>
                <tr>
                    <td>需要</td>
                    <td>需要</td>
                    <td>xu1 yao4</td>
                    <td>nodig zijn/willen/eisen/vereisen</td>
                </tr>
                <tr>
                    <td>要</td>
                    <td>要</td>
                    <td>yao4</td>
                    <td>willen/moeten/belangrijk/vitaal/vragen naar/gaan (toekomstige vorm)/mogen/waarschijnlijk/als
                    </td>
                </tr>
                <tr>
                    <td>勇</td>
                    <td>勇</td>
                    <td>yong3</td>
                    <td>dapper/moedig</td>
                </tr>
                <tr>
                    <td>勇氣</td>
                    <td>勇气</td>
                    <td>yong3 qi4</td>
                    <td>moedig/dapper</td>
                </tr>
                <tr>
                    <td>於</td>
                    <td>于</td>
                    <td>yu2</td>
                    <td>in/op/bij/van/tot/bij/door/dan</td>
                </tr>
                <tr>
                    <td>於是</td>
                    <td>于是</td>
                    <td>yu2 shi4</td>
                    <td>daarna/dus/zodoende</td>
                </tr>
                <tr>
                    <td>我們</td>
                    <td>我们</td>
                    <td>wo3 men5</td>
                    <td>wij/ons</td>
                </tr>
                <tr>
                    <td>們</td>
                    <td>们</td>
                    <td>men5</td>
                    <td>maakt meervoud van zelfstandige naamwoorden en voornaamwoorden</td>
                </tr>
                <tr>
                    <td>選</td>
                    <td>选</td>
                    <td>xuan3</td>
                    <td>kiezen</td>
                </tr>
                <tr>
                    <td>選擇</td>
                    <td>选择</td>
                    <td>xuan3 ze2</td>
                    <td>kiezen/selecteren</td>
                </tr>
                <tr>
                    <td>擇</td>
                    <td>择</td>
                    <td>ze2</td>
                    <td>kiezen/uitkiezen/elimineren/wordt ook wel als [zhai2] uitgesproken</td>
                </tr>
                <tr>
                    <td>了</td>
                    <td>了</td>
                    <td>le5</td>
                    <td>(grammaticaal partikel dat de voltooide tijd aangeeft)/(grammaticaal partikel dat het vorige
                        deel benadrukt)
                    </td>
                </tr>
                <tr>
                    <td>放</td>
                    <td>放</td>
                    <td>fang4</td>
                    <td>neerzetten/plaatsen/loslaten/afsteken</td>
                </tr>
                <tr>
                    <td>放棄</td>
                    <td>放弃</td>
                    <td>fang4 qi4</td>
                    <td>opgeven</td>
                </tr>
                <tr>
                    <td>棄</td>
                    <td>弃</td>
                    <td>qi4</td>
                    <td>opgeven/achterlaten/weggooien</td>
                </tr>
                <tr>
                    <td>逃</td>
                    <td>逃</td>
                    <td>tao2</td>
                    <td>vluchten/wegrennen</td>
                </tr>
                <tr>
                    <td>逃避</td>
                    <td>逃避</td>
                    <td>tao2 bi4</td>
                    <td>vluchten/ontsnappen/ontwijken</td>
                </tr>
                <tr>
                    <td>避</td>
                    <td>避</td>
                    <td>bi4</td>
                    <td>ontwijken/vermijden/vluchten</td>
                </tr>
                <tr>
                    <td>或</td>
                    <td>或</td>
                    <td>huo4</td>
                    <td>misschien/wellicht/mogelijk/of</td>
                </tr>
                <tr>
                    <td>或許</td>
                    <td>或许</td>
                    <td>huo4 xu3</td>
                    <td>misschien/mogelijk</td>
                </tr>
                <tr>
                    <td>許</td>
                    <td>许</td>
                    <td>xu3</td>
                    <td>toestaan/iets of iemand prijzen/beloven/mogelijk/misschien</td>
                </tr>
                <tr>
                    <td>相</td>
                    <td>相</td>
                    <td>xiang1</td>
                    <td>elkaar/wederzijds</td>
                </tr>
                <tr>
                    <td>相</td>
                    <td>相</td>
                    <td>xiang4</td>
                    <td>uiterlijk/verschijning/voorkomen/portret/foto/minister/(natuurkunde) fase/iemands toekomst
                        uitlezen (bijvoorbeeld uit iemands palm)
                    </td>
                </tr>
                <tr>
                    <td>相信</td>
                    <td>相信</td>
                    <td>xiang1 xin4</td>
                    <td>overtuigd zijn (dat iets waar is)/geloven/iets accepteren als de waarheid</td>
                </tr>
                <tr>
                    <td>滿</td>
                    <td>满</td>
                    <td>man3</td>
                    <td>vullen/vol zijn/gevuld zijn met/tevreden zijn/zeer tevreden zijn/een limit bereiken/zeer</td>
                </tr>
                <tr>
                    <td>滿意</td>
                    <td>满意</td>
                    <td>man3 yi4</td>
                    <td>tevreden zijn/verheugd zijn/naar tevredenheid</td>
                </tr>
                <tr>
                    <td>意</td>
                    <td>意</td>
                    <td>yi4</td>
                    <td>idee/betekenis/gedachte/denken/wens/intentie/anticiperen</td>
                </tr>
                <tr>
                    <td>這樣</td>
                    <td>这样</td>
                    <td>zhe4 yang4</td>
                    <td>zoals (iets)/zoals dit/op deze manier</td>
                </tr>
                <tr>
                    <td>樣</td>
                    <td>样</td>
                    <td>yang4</td>
                    <td>manier/patroon/uiterlijk/vorm/type/soort</td>
                </tr>
                <tr>
                    <td>結</td>
                    <td>结</td>
                    <td>jie2</td>
                    <td>knoop/robuust/vastbinden/knopen/uitchecken (hotel)</td>
                </tr>
                <tr>
                    <td>結局</td>
                    <td>结局</td>
                    <td>jie2 ju2</td>
                    <td>conclusie/einde</td>
                </tr>
                <tr>
                    <td>局</td>
                    <td>局</td>
                    <td>ju2</td>
                    <td>kantoor/situatie/wedstrijd/ronde/set (tennis)</td>
                </tr>
                <tr>
                    <td>沒</td>
                    <td>没</td>
                    <td>mei2</td>
                    <td>geen/niet hebben/niet</td>
                </tr>
                <tr>
                    <td>沒有</td>
                    <td>没有</td>
                    <td>mei2 you3</td>
                    <td>er niet zijn/niet hebben/niet bestaan/niet hoeven</td>
                </tr>
                <tr>
                    <td>絲</td>
                    <td>丝</td>
                    <td>si1</td>
                    <td>zijde/draad</td>
                </tr>
                <tr>
                    <td>埋</td>
                    <td>埋</td>
                    <td>man2</td>
                    <td>de schuld geven</td>
                </tr>
                <tr>
                    <td>埋怨</td>
                    <td>埋怨</td>
                    <td>man2 yuan4</td>
                    <td>klagen (over)/mopperen (over)/de schuld geven</td>
                </tr>
                <tr>
                    <td>怨</td>
                    <td>怨</td>
                    <td>yuan4</td>
                    <td>de schuld geven/klagen</td>
                </tr>
                <tr>
                    <td>和</td>
                    <td>和</td>
                    <td>he2</td>
                    <td>en/samen met/met/som/opsommen/vrede/harmonie/Taiwanese uitspraak[han4] wanneer het ‘en’ of ‘met’
                        beteknt
                    </td>
                </tr>
                <tr>
                    <td>悔</td>
                    <td>悔</td>
                    <td>hui3</td>
                    <td>spijt hebben/betreuren</td>
                </tr>
                <tr>
                    <td>悔意</td>
                    <td>悔意</td>
                    <td>hui3 yi4</td>
                    <td>spijt hebben</td>
                </tr>
                <tr>
                    <td>雖</td>
                    <td>虽</td>
                    <td>sui1</td>
                    <td>alhoewel/desondanks</td>
                </tr>
                <tr>
                    <td>雖然</td>
                    <td>虽然</td>
                    <td>sui1 ran2</td>
                    <td>alhoewel/desondanks</td>
                </tr>
                <tr>
                    <td>然</td>
                    <td>然</td>
                    <td>ran2</td>
                    <td>correct/juist/zo</td>
                </tr>
                <tr>
                    <td>最</td>
                    <td>最</td>
                    <td>zui4</td>
                    <td>meeste/het meeste/-ste (meeste, grootste, beste)</td>
                </tr>
                <tr>
                    <td>最初</td>
                    <td>最初</td>
                    <td>zui4 chu1</td>
                    <td>eerste/primair/origineel/aanvankelijk</td>
                </tr>
                <tr>
                    <td>初</td>
                    <td>初</td>
                    <td>chu1</td>
                    <td>in het begin/begin/eerst/lager/junior/basis</td>
                </tr>
                <tr>
                    <td>最終</td>
                    <td>最终</td>
                    <td>zui4 zhong1</td>
                    <td>laatste/ultieme</td>
                </tr>
                <tr>
                    <td>終</td>
                    <td>终</td>
                    <td>zhong1</td>
                    <td>einde/af hebben/finish</td>
                </tr>
                <tr>
                    <td>唯</td>
                    <td>唯</td>
                    <td>wei2</td>
                    <td>alleen</td>
                </tr>
                <tr>
                    <td>唯一</td>
                    <td>唯一</td>
                    <td>wei2 yi1</td>
                    <td>alleen/enige</td>
                </tr>
                </tbody>
            </table>
        </VideoPage>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VideoPage from "../components/VideoPage.vue";

    export default {
        components: {
            VideoPage,
            MainLayout,
        },
        data() {
            return {
                title: '林俊杰《你是我的唯一》',
                date: '6 mei, 2018',
                image: '/assets/img/background/video_page.jpg',
                imageClass: 'feature-image',
            }
        },
    }
</script>
