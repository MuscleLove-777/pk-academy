const LEVEL6_DATA = {
    id: 6,
    title: "特殊集団と総合演習",
    icon: "🏆",
    description: "小児・高齢者・臓器障害患者の薬物動態の特徴と、全レベルの知識を総合的に確認する",
    modules: [
        {
            id: 601,
            title: "小児・高齢者の薬物動態",
            duration: "15分",
            content: `<h2>小児・高齢者の薬物動態</h2>
                <p>薬物動態は年齢によって大きく変化します。<strong>小児（特に新生児・乳児）</strong>では臓器機能が未成熟であり、<strong>高齢者</strong>では加齢に伴う生理機能の低下が薬物動態に影響を与えます。これらの特殊集団では個別の用量調整が不可欠です。</p>

                <h3>小児の薬物動態</h3>
                <h3>新生児期の特徴</h3>
                <div class="highlight-box">
                    <p><strong>新生児（生後28日未満）のPK特性：</strong></p>
                    <p>1. <strong>代謝酵素の未成熟：</strong>CYP酵素やグルクロン酸抱合酵素の活性が低い。クロラムフェニコールによるGray syndrome はグルクロン酸抱合能の未熟さが原因。</p>
                    <p>2. <strong>腎機能の低下：</strong>GFRは成人の約30%程度。アミノグリコシド系の投与間隔延長が必要。</p>
                    <p>3. <strong>体水分比率が高い：</strong>体重の約75〜80%（成人は約60%）。水溶性薬物のVdが増大。</p>
                    <p>4. <strong>タンパク結合率が低い：</strong>アルブミンの量・結合能が低い。遊離型分率が増加し、効果・毒性が増強される可能性。</p>
                </div>

                <h3>CYP酵素の成熟過程</h3>
                <table>
                    <tr><th>CYP分子種</th><th>発達パターン</th><th>臨床的意義</th></tr>
                    <tr><td><strong>CYP3A7</strong></td><td>胎児期に高発現、生後急速に低下</td><td>胎児期の主要な代謝酵素。生後CYP3A4に置換される</td></tr>
                    <tr><td><strong>CYP3A4</strong></td><td>生後1〜3か月で発現増加、1歳頃に成人レベル</td><td>多くの薬物の代謝に関与。小児期の用量設計に重要</td></tr>
                    <tr><td><strong>CYP1A2</strong></td><td>生後1〜3か月で発現開始、4〜5歳で成熟</td><td>テオフィリン、カフェインの代謝。新生児でのカフェイン半減期延長</td></tr>
                    <tr><td><strong>CYP2D6</strong></td><td>生後すぐに発現、3〜5歳で成人レベル</td><td>コデインなどの代謝に関与</td></tr>
                    <tr><td><strong>UGT1A1</strong></td><td>生後徐々に成熟、3〜6か月で成人の50%</td><td>ビリルビン抱合に重要。新生児黄疸の一因</td></tr>
                </table>

                <h3>小児の投与量計算</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>体表面積法</h4>
                        <p>小児用量 = 成人用量 × (小児の体表面積 / 1.73 m²)</p>
                        <p>CLやVdが体表面積に比例することが多いため、最も信頼性が高い方法の一つ。</p>
                    </div>
                    <div class="card">
                        <h4>Augsberger式</h4>
                        <p>小児用量 = 成人用量 × (4 × 年齢 + 20) / 100</p>
                        <p>年齢のみから簡易に計算できるが、個体差が大きい。目安としての使用が適切。</p>
                    </div>
                    <div class="card">
                        <h4>体重あたりの代謝能</h4>
                        <p>2〜6歳頃は<strong>体重あたりの代謝能が成人より高い</strong>ことがある。体重換算のみでは過少投与になるリスクがあり注意が必要。</p>
                    </div>
                </div>

                <h3>高齢者の薬物動態</h3>
                <table>
                    <tr><th>ADME過程</th><th>加齢変化</th><th>臨床的影響</th></tr>
                    <tr><td><strong>吸収</strong></td><td>胃酸分泌低下、消化管運動低下、血流減少</td><td>大きな変化は少ない（影響は限定的）</td></tr>
                    <tr><td><strong>分布</strong></td><td>体脂肪増加、体水分減少、血漿アルブミン低下</td><td>脂溶性薬物のVd増大（作用延長）、水溶性薬物のVd減少（血中濃度上昇）、遊離型分率増加</td></tr>
                    <tr><td><strong>代謝</strong></td><td>肝血流量減少（約40%低下）、肝重量減少</td><td>Phase I反応（酸化・還元）の低下。Phase II反応（抱合）は比較的保たれる。高抽出率薬物は肝血流低下の影響大</td></tr>
                    <tr><td><strong>排泄</strong></td><td>GFR低下（加齢により約1%/年低下）、腎血流減少</td><td>腎排泄型薬物の蓄積リスク増大。クレアチニンクリアランスに基づく用量調整が必要</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>高齢者におけるポリファーマシーの問題：</strong></p>
                    <p>高齢者は複数の慢性疾患を有することが多く、<strong>多剤併用（ポリファーマシー）</strong>のリスクが高い。一般に6剤以上で薬物有害事象のリスクが増大する。加齢によるPK変化と相まって、薬物相互作用や有害事象の頻度が増加するため、処方の見直し（減処方）と定期的なモニタリングが重要である。</p>
                </div>`,
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "新生児の薬物動態の特徴として正しいものはどれか？",
                    options: [
                        "CYP酵素活性が成人と同等である",
                        "体水分比率が成人より低い",
                        "腎機能（GFR）が成人の約30%程度である",
                        "血漿タンパク結合率が成人より高い"
                    ],
                    answer: 2,
                    explanation: "新生児のGFRは成人の約30%程度と低く、腎排泄型薬物の投与間隔延長が必要です。また、体水分比率は約75〜80%と成人（約60%）より高く、CYP酵素は未成熟、タンパク結合率は低いのが特徴です。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "高齢者の薬物代謝について正しい記述はどれか？",
                    options: [
                        "Phase I反応もPhase II反応も同程度に低下する",
                        "Phase I反応は低下するが、Phase II反応は比較的保たれる",
                        "Phase II反応は低下するが、Phase I反応は比較的保たれる",
                        "代謝能は加齢によってほとんど変化しない"
                    ],
                    answer: 1,
                    explanation: "高齢者では肝血流量と肝重量の減少に伴い、Phase I反応（酸化・還元・加水分解）は低下します。一方、Phase II反応（グルクロン酸抱合、硫酸抱合など）は比較的保たれるとされています。"
                },
                {
                    id: "q601_3",
                    type: "fill",
                    question: "胎児期に高発現し、生後にCYP3A4に置換される胎児期の主要な代謝酵素は＿＿＿＿＿＿である。",
                    answer: "CYP3A7",
                    explanation: "CYP3A7は胎児期の肝臓で高発現する主要な代謝酵素です。出生後に急速に発現が低下し、代わりにCYP3A4が誘導されて成人型の代謝プロファイルへ移行します。"
                }
            ]
        },
        {
            id: 602,
            title: "腎障害・肝障害時の薬物動態",
            duration: "15分",
            content: `<h2>腎障害・肝障害時の薬物動態</h2>
                <p>腎臓と肝臓は薬物の排泄・代謝の主要臓器であり、これらの機能が低下すると薬物の体内動態が大きく変化します。適切な<strong>用量調整</strong>を行わないと、薬物蓄積による重篤な副作用が生じる恐れがあります。</p>

                <h3>腎障害時の薬物動態</h3>
                <h3>腎機能の評価</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>eGFR（推算糸球体濾過量）</h4>
                        <p>血清クレアチニン値、年齢、性別から算出。日本ではJSN-CKDEPIが推奨。CKDのステージ分類に使用。単位：mL/min/1.73m²</p>
                    </div>
                    <div class="card">
                        <h4>Cockcroft-Gault式</h4>
                        <p>CLcr = {(140 - 年齢) × 体重} / (72 × 血清Cr) [女性は × 0.85]</p>
                        <p>薬物の用量調整に広く使用される。実体重を使用し、mL/min単位で算出。</p>
                    </div>
                </div>

                <h3>腎排泄型薬物の用量調整法</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>減量法（Dose Reduction）</h4>
                        <p>投与間隔はそのままで、1回投与量を減量する。<strong>Cmax低下、Cmin維持</strong>。濃度依存型の副作用を避けやすいが、ピーク値が低下するため効果不足のリスクあり。</p>
                    </div>
                    <div class="card">
                        <h4>投与間隔延長法（Interval Extension）</h4>
                        <p>1回投与量はそのままで、投与間隔を延長する。<strong>Cmax維持、Cmin上昇リスク</strong>。ピーク値を維持したい場合に有用（例：アミノグリコシド）。</p>
                    </div>
                </div>

                <h3>透析での薬物除去</h3>
                <div class="highlight-box">
                    <p><strong>透析で除去されやすい薬物の特徴：</strong></p>
                    <p>1. <strong>分子量が小さい</strong>（< 500 Da）：透析膜を通過しやすい</p>
                    <p>2. <strong>タンパク結合率が低い</strong>（< 80%）：遊離型のみが除去される</p>
                    <p>3. <strong>分布容積が小さい</strong>（< 1 L/kg）：血漿中に多く存在し除去効率が高い</p>
                    <p>4. <strong>水溶性が高い</strong>：透析液側への移行が容易</p>
                    <p>透析で大幅に除去される薬物は、透析後に補充投与が必要な場合がある。</p>
                </div>

                <p><strong>尿毒素のタンパク結合置換：</strong>腎不全で蓄積する尿毒素（インドキシル硫酸など）が薬物のタンパク結合部位を競合的に置換し、遊離型薬物濃度が上昇する。フェニトインやワルファリンなどの高タンパク結合薬で臨床的に重要。</p>

                <h3>肝障害時の薬物動態</h3>
                <h3>Child-Pugh分類</h3>
                <table>
                    <tr><th>評価項目</th><th>1点</th><th>2点</th><th>3点</th></tr>
                    <tr><td>脳症</td><td>なし</td><td>軽度（I〜II）</td><td>重度（III〜IV）</td></tr>
                    <tr><td>腹水</td><td>なし</td><td>軽度</td><td>中等度以上</td></tr>
                    <tr><td>血清ビリルビン (mg/dL)</td><td>< 2.0</td><td>2.0〜3.0</td><td>> 3.0</td></tr>
                    <tr><td>血清アルブミン (g/dL)</td><td>> 3.5</td><td>2.8〜3.5</td><td>< 2.8</td></tr>
                    <tr><td>PT延長 (秒)</td><td>< 4</td><td>4〜6</td><td>> 6</td></tr>
                </table>
                <p>合計点数：A（5〜6点：軽度）、B（7〜9点：中等度）、C（10〜15点：重度）</p>

                <h3>肝クリアランスへの影響</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>高抽出率薬物（ER > 0.7）</h4>
                        <p>肝クリアランス ≈ 肝血流量。肝障害時の<strong>肝血流低下</strong>（門脈圧亢進、シャント形成）により大きく影響を受ける。</p>
                        <p>例：リドカイン、プロプラノロール、モルヒネ</p>
                    </div>
                    <div class="card">
                        <h4>低抽出率薬物（ER < 0.3）</h4>
                        <p>肝クリアランス ≈ fu × CLint。<strong>肝固有クリアランス（CLint）の低下</strong>やアルブミン低下による<strong>遊離型分率（fu）増加</strong>の影響を受ける。</p>
                        <p>例：ジアゼパム、ワルファリン、テオフィリン</p>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>肝代謝型薬物の用量調整の難しさ：</strong></p>
                    <p>腎機能にはeGFRやCLcrのような定量的な指標があるが、肝臓の代謝能を正確に定量化する単一の指標はない。Child-Pugh分類は重症度の目安にはなるが、個々の薬物の代謝能を正確に予測することは困難。臨床的には<strong>慎重な用量漸増と注意深いモニタリング</strong>が基本方針となる。</p>
                </div>

                <h3>代表的な薬物の用量調整例</h3>
                <table>
                    <tr><th>薬物</th><th>主な排泄経路</th><th>腎障害時</th><th>肝障害時</th></tr>
                    <tr><td>バンコマイシン</td><td>腎排泄（> 90%）</td><td>CLcrに基づき減量・間隔延長</td><td>通常調整不要</td></tr>
                    <tr><td>ジゴキシン</td><td>腎排泄（60〜80%）</td><td>減量が必要</td><td>通常調整不要</td></tr>
                    <tr><td>ワルファリン</td><td>肝代謝（CYP2C9）</td><td>通常調整不要</td><td>感受性増大、減量</td></tr>
                    <tr><td>ジアゼパム</td><td>肝代謝（CYP3A4/2C19）</td><td>通常調整不要</td><td>半減期延長、減量</td></tr>
                    <tr><td>レボフロキサシン</td><td>腎排泄（> 80%）</td><td>CLcrに基づき減量</td><td>通常調整不要</td></tr>
                    <tr><td>メトホルミン</td><td>腎排泄（ほぼ100%）</td><td>eGFR 30未満は禁忌</td><td>乳酸アシドーシスのリスク</td></tr>
                </table>`,
            quiz: [
                {
                    id: "q602_1",
                    type: "choice",
                    question: "透析で除去されやすい薬物の特徴として正しい組み合わせはどれか？",
                    options: [
                        "分子量大・タンパク結合率低・Vd小",
                        "分子量小・タンパク結合率低・Vd小",
                        "分子量小・タンパク結合率高・Vd大",
                        "分子量大・タンパク結合率高・Vd小"
                    ],
                    answer: 1,
                    explanation: "透析で除去されやすい薬物は、分子量が小さい（透析膜通過容易）、タンパク結合率が低い（遊離型が多い）、分布容積が小さい（血漿中に多く存在）という特徴を持ちます。"
                },
                {
                    id: "q602_2",
                    type: "choice",
                    question: "肝障害時に高抽出率薬物のクリアランスが大きく低下する主な理由はどれか？",
                    options: [
                        "肝固有クリアランス（CLint）の低下",
                        "血漿タンパク結合の変化",
                        "肝血流量の低下",
                        "胆汁排泄の減少"
                    ],
                    answer: 2,
                    explanation: "高抽出率薬物の肝クリアランスは肝血流量に依存します（CL ≈ 肝血流量）。肝障害時には門脈圧亢進やシャント形成により肝血流が低下し、クリアランスが大幅に減少します。"
                },
                {
                    id: "q602_3",
                    type: "fill",
                    question: "肝障害の重症度評価に用いられ、A（軽度）・B（中等度）・C（重度）に分類するスコアリングシステムは＿＿＿＿＿＿＿＿分類である。",
                    answer: "Child-Pugh",
                    explanation: "Child-Pugh分類は、脳症、腹水、血清ビリルビン、血清アルブミン、PT延長の5項目をスコア化し、合計点でA（5〜6点）、B（7〜9点）、C（10〜15点）に分類します。薬物の添付文書でも肝障害時の用量調整基準として広く使用されています。"
                }
            ]
        },
        {
            id: 603,
            title: "創薬における薬物動態",
            duration: "15分",
            content: `<h2>創薬における薬物動態</h2>
                <p>薬物動態は<strong>創薬の全段階</strong>において重要な役割を果たします。非臨床段階でのADME特性の評価からヒトPK予測、臨床開発でのPK/PD解析まで、PKは医薬品開発の成功に不可欠な要素です。</p>

                <h3>創薬段階でのPKの役割</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>リード最適化でのADME評価</strong>候補化合物の段階で、吸収性・代謝安定性・膜透過性などのADME特性をスクリーニングし、PKプロファイルの優れた化合物を選別する。PK特性が不良な化合物は早期に脱落させる（fail fast戦略）。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>前臨床PK試験</strong>動物を用いたin vivo PK試験でヒトPKを予測し、臨床開始用量の設定や安全域の評価に活用する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>臨床PK試験</strong>ヒトでのPKを実測し、用量選択・投与レジメン設計・DDI評価などを行う。</div>
                    </div>
                </div>

                <h3>主要なスクリーニングアッセイ</h3>
                <table>
                    <tr><th>アッセイ</th><th>評価項目</th><th>意義</th></tr>
                    <tr><td><strong>Caco-2透過性試験</strong></td><td>膜透過性（Papp値）</td><td>消化管吸収性の予測。Efflux ratio > 2でP-gp基質の可能性</td></tr>
                    <tr><td><strong>マイクロソーム安定性試験</strong></td><td>代謝安定性（CLint）</td><td>肝初回通過効果の予測。CLint高値は経口BA低下の原因</td></tr>
                    <tr><td><strong>肝細胞安定性試験</strong></td><td>総代謝安定性</td><td>Phase I + Phase II代謝を含む総合的な代謝評価</td></tr>
                    <tr><td><strong>CYP阻害試験</strong></td><td>IC50値</td><td>DDIリスクの早期評価。主要5分子種（1A2, 2C9, 2C19, 2D6, 3A4）</td></tr>
                    <tr><td><strong>CYP誘導試験</strong></td><td>mRNA誘導倍率</td><td>ヒト肝細胞でCYP3A4, 1A2, 2B6の誘導を評価</td></tr>
                    <tr><td><strong>血漿タンパク結合試験</strong></td><td>fu（遊離型分率）</td><td>有効濃度の推定、PK予測に必要</td></tr>
                </table>

                <h3>In vitro - In vivo 外挿（IVIVE）</h3>
                <div class="highlight-box">
                    <p><strong>IVIVEの考え方：</strong></p>
                    <p>In vitro の代謝データ（マイクロソームやヘパトサイトのCLint）から、in vivoでの肝クリアランスを予測する手法。</p>
                    <p>スケーリングファクター（MPPGL: mg microsomal protein per gram of liver、肝重量など）を用いて外挿する。well-stirred modelが最も広く使用される。</p>
                </div>

                <h3>前臨床PK：動物種差とヒト予測</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>動物種差</h4>
                        <p>CYP分子種の発現パターンは動物種により異なる。ラット、イヌ、サルが汎用されるが、どの種がヒトを最もよく反映するかは化合物依存。代謝物プロファイルの種差にも注意が必要。</p>
                    </div>
                    <div class="card">
                        <h4>アロメトリックスケーリング</h4>
                        <p>体重とPKパラメータの間のべき乗則（Y = a × BW<sup>b</sup>）を利用し、複数動物種のデータからヒトPKパラメータを予測する。CLではb ≈ 0.75、Vdではb ≈ 1.0が経験則。</p>
                    </div>
                </div>

                <h3>臨床開発でのPK</h3>
                <table>
                    <tr><th>開発段階</th><th>PK関連試験</th><th>目的</th></tr>
                    <tr><td><strong>Phase I</strong></td><td>単回投与PK（SAD）、反復投与PK（MAD）</td><td>ヒトでのPKパラメータ取得、線形性確認、蓄積性評価</td></tr>
                    <tr><td><strong>Phase I</strong></td><td>食事影響試験</td><td>空腹時・食後でのPK比較。用法設定の根拠</td></tr>
                    <tr><td><strong>Phase I</strong></td><td>DDI試験</td><td>主要CYP阻害薬/誘導薬との相互作用を評価</td></tr>
                    <tr><td><strong>Phase II/III</strong></td><td>PPK解析</td><td>共変量の影響評価、特殊集団での用量調整</td></tr>
                    <tr><td><strong>Phase II/III</strong></td><td>曝露-応答（E-R）解析</td><td>用量-曝露-効果/安全性の関係を定量化</td></tr>
                </table>

                <h3>主要な規制ガイドライン</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>ICH M3</h4>
                        <p>非臨床安全性試験の実施時期に関するガイドライン。臨床試験開始前に必要な毒性試験（GLP準拠）を規定。PK/TK（トキシコキネティクス）データの取得を要求。</p>
                    </div>
                    <div class="card">
                        <h4>ICH E14（QT評価）</h4>
                        <p>QT/QTc間隔延長の臨床評価に関するガイドライン。薬物の心毒性リスク評価。Concentration-QTc解析（曝露-応答アプローチ）の活用が推奨。</p>
                    </div>
                    <div class="card">
                        <h4>ICH M12（DDI）</h4>
                        <p>薬物相互作用試験に関する最新の統合ガイドライン。In vitro DDI試験の判断基準、臨床DDI試験の設計、PBPKモデルの活用について規定。</p>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q603_1",
                    type: "choice",
                    question: "Caco-2透過性試験でefflux ratioが2を超える場合に示唆されるのはどれか？",
                    options: [
                        "高い代謝安定性",
                        "P-gp基質である可能性",
                        "高い血漿タンパク結合率",
                        "CYP3A4による代謝を受ける可能性"
                    ],
                    answer: 1,
                    explanation: "Caco-2試験でのefflux ratio（B→A方向の透過性 / A→B方向の透過性）が2を超える場合、P-gpなどの排出トランスポーターの基質である可能性が示唆されます。これは消化管吸収の低下やDDIのリスクを意味します。"
                },
                {
                    id: "q603_2",
                    type: "choice",
                    question: "アロメトリックスケーリングにおいて、クリアランス（CL）と体重（BW）の関係を表すべき乗指数bの経験的な値はどれか？",
                    options: [
                        "0.25",
                        "0.50",
                        "0.75",
                        "1.00"
                    ],
                    answer: 2,
                    explanation: "アロメトリックスケーリングでは CL = a × BW^b の関係が成り立ち、CLのべき乗指数bは約0.75が経験則として知られています。分布容積（Vd）のbは約1.0、半減期のbは約0.25です。"
                },
                {
                    id: "q603_3",
                    type: "fill",
                    question: "in vitroの代謝データからin vivoでの肝クリアランスを予測する手法を＿＿＿＿と呼ぶ。（アルファベット略称で答えよ）",
                    answer: "IVIVE",
                    explanation: "IVIVE（In Vitro - In Vivo Extrapolation）は、マイクロソームやヘパトサイトのCLintデータに、スケーリングファクター（MPPGL、肝重量など）を乗じてin vivoの肝クリアランスを予測する手法です。"
                }
            ]
        },
        {
            id: 604,
            title: "総合テスト",
            duration: "20分",
            content: `<h2>総合テスト：全レベルの要点まとめ</h2>
                <p>全6レベルで学んだ内容の要点を振り返り、総合的な理解度を確認しましょう。合格ライン：<strong>70%（7問中5問以上正解）</strong></p>

                <div class="card-grid">
                    <div class="card">
                        <h4>Level 1：ADME基礎・PK/PD関係</h4>
                        <p><strong>ADME：</strong>吸収（Absorption）・分布（Distribution）・代謝（Metabolism）・排泄（Excretion）の4過程</p>
                        <p><strong>PK：</strong>「体が薬にすること」＝濃度の時間推移</p>
                        <p><strong>PD：</strong>「薬が体にすること」＝濃度と効果の関係</p>
                        <p><strong>PK/PD統合：</strong>投与量→濃度→効果を予測</p>
                    </div>
                    <div class="card">
                        <h4>Level 2：吸収・BA・分布・タンパク結合</h4>
                        <p><strong>吸収：</strong>受動拡散が主要メカニズム。BCS分類で溶解性・透過性を評価</p>
                        <p><strong>BA：</strong>F = fa × fg × fh（吸収率×消化管利用率×肝利用率）</p>
                        <p><strong>分布：</strong>Vdが大→組織移行性高い。タンパク結合（アルブミン、AAG）</p>
                        <p><strong>遊離型のみ</strong>が薬理活性を発揮</p>
                    </div>
                    <div class="card">
                        <h4>Level 3：Phase I/II代謝・CYP・腎排泄</h4>
                        <p><strong>Phase I：</strong>酸化・還元・加水分解（CYP酵素）</p>
                        <p><strong>Phase II：</strong>グルクロン酸抱合・硫酸抱合・GSH抱合</p>
                        <p><strong>主要CYP：</strong>3A4（全体の約50%）、2D6、2C9、2C19、1A2</p>
                        <p><strong>腎排泄：</strong>糸球体濾過・尿細管分泌・尿細管再吸収</p>
                        <p><strong>腸肝循環：</strong>胆汁排泄→腸管で脱抱合→再吸収</p>
                    </div>
                    <div class="card">
                        <h4>Level 4：PKパラメータ・モデル解析</h4>
                        <p><strong>AUC：</strong>総曝露量。CL = Dose/AUC</p>
                        <p><strong>Cmax/Tmax：</strong>最高血中濃度と到達時間</p>
                        <p><strong>t1/2：</strong>消失半減期 = 0.693/kel</p>
                        <p><strong>CL = Dose×F/AUC、Vd = CL/kel</strong></p>
                        <p><strong>線形PK：</strong>用量比例。<strong>非線形PK：</strong>Michaelis-Menten型（フェニトイン）</p>
                        <p><strong>1-/2-コンパートメントモデル</strong>で体内動態を記述</p>
                    </div>
                    <div class="card">
                        <h4>Level 5：TDM・BE試験・相互作用・PPK</h4>
                        <p><strong>TDM：</strong>治療域の狭い薬物の血中濃度モニタリング</p>
                        <p><strong>BE試験：</strong>90%CIが80-125%で同等性判定</p>
                        <p><strong>DDI：</strong>CYP阻害/誘導、[I]/Ki比で予測</p>
                        <p><strong>PPK：</strong>固定効果(θ)・個体間変動(ω²)・残差変動(σ²)で集団特性を記述</p>
                    </div>
                    <div class="card">
                        <h4>Level 6：小児/高齢者・腎/肝障害・創薬PK</h4>
                        <p><strong>小児：</strong>酵素未成熟、CYP3A7→3A4への移行、体水分比率高い</p>
                        <p><strong>高齢者：</strong>Phase I低下、GFR低下、ポリファーマシー</p>
                        <p><strong>腎障害：</strong>CLcrベースの用量調整（減量法/間隔延長法）</p>
                        <p><strong>肝障害：</strong>Child-Pugh分類、高/低抽出率薬物で影響が異なる</p>
                        <p><strong>創薬PK：</strong>ADME screening→IVIVE→動物PK→臨床PK</p>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q604_1",
                    type: "choice",
                    question: "薬物動態学（PK）における「ADME」のうち「M」が示すものはどれか？",
                    options: [
                        "Monitoring（モニタリング）",
                        "Metabolism（代謝）",
                        "Membrane（膜透過）",
                        "Modification（修飾）"
                    ],
                    answer: 1,
                    explanation: "ADMEはAbsorption（吸収）、Distribution（分布）、Metabolism（代謝）、Excretion（排泄）の頭文字です。Mは代謝（Metabolism）を示し、主に肝臓のCYP酵素などによる薬物の化学的変換を意味します。"
                },
                {
                    id: "q604_2",
                    type: "choice",
                    question: "バイオアベイラビリティ（BA）が最も高くなる投与経路はどれか？",
                    options: [
                        "経口投与",
                        "舌下投与",
                        "静脈内投与",
                        "筋肉内投与"
                    ],
                    answer: 2,
                    explanation: "静脈内投与では薬物が直接全身循環に入るため、BA = 100%（F = 1）です。他の投与経路では吸収過程や初回通過効果によりBAは100%未満となります。"
                },
                {
                    id: "q604_3",
                    type: "choice",
                    question: "CYP酵素のうち、臨床で使用される薬物の代謝に最も大きな割合で関与するのはどれか？",
                    options: [
                        "CYP1A2",
                        "CYP2D6",
                        "CYP2C9",
                        "CYP3A4"
                    ],
                    answer: 3,
                    explanation: "CYP3A4は臨床で使用される薬物の約50%の代謝に関与し、最も重要なCYP分子種です。肝臓および小腸に豊富に発現し、基質特異性が広いのが特徴です。"
                },
                {
                    id: "q604_4",
                    type: "choice",
                    question: "消失半減期（t1/2）が8時間の薬物を反復投与した場合、定常状態に到達するまでの時間として最も適切なのはどれか？",
                    options: [
                        "約8時間",
                        "約16時間",
                        "約32〜40時間",
                        "約80時間"
                    ],
                    answer: 2,
                    explanation: "定常状態到達には半減期の4〜5倍の時間が必要です。t1/2 = 8時間の場合、8 × 4 = 32時間〜8 × 5 = 40時間で定常状態（約94〜97%）に到達します。"
                },
                {
                    id: "q604_5",
                    type: "choice",
                    question: "腎障害患者において、薬物が透析で効率的に除去される条件として正しいものはどれか？",
                    options: [
                        "分子量が大きく、Vdが小さい",
                        "タンパク結合率が高く、水溶性が高い",
                        "分子量が小さく、タンパク結合率が低い",
                        "Vdが大きく、脂溶性が高い"
                    ],
                    answer: 2,
                    explanation: "透析で除去されやすい薬物は、分子量が小さい（透析膜通過容易）、タンパク結合率が低い（遊離型が多い）、Vdが小さい（血漿中に多い）、水溶性が高い（透析液への移行容易）という特徴を持ちます。"
                },
                {
                    id: "q604_6",
                    type: "fill",
                    question: "BE試験において、AUC比およびCmax比の幾何平均比の90%信頼区間が＿＿〜＿＿%の範囲内に収まれば同等と判定される。（数字をハイフンでつないで答えよ）",
                    answer: "80-125",
                    explanation: "BE試験の国際的な標準基準として、対数変換した試験製剤/標準製剤のAUC比およびCmax比の幾何平均比の90%信頼区間が80〜125%の範囲内に収まることが同等性の判定条件です。"
                },
                {
                    id: "q604_7",
                    type: "fill",
                    question: "ポピュレーションPK解析において、集団の典型的なPKパラメータ（CL, Vdなど）の値を＿＿効果と呼ぶ。",
                    answer: "固定",
                    explanation: "PPKにおける固定効果（Fixed Effects; θ）は、集団の典型的なPKパラメータ値を表します。これに対し、ω²で表される個体間変動（ランダム効果）が各患者のパラメータのばらつきを記述します。"
                }
            ]
        }
    ]
};
