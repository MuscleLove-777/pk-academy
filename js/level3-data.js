const LEVEL3_DATA = {
    id: 3,
    title: "代謝と排泄",
    icon: "⚗️",
    description: "薬物代謝酵素と代謝反応、腎排泄・胆汁排泄のメカニズムを理解する",
    modules: [
        {
            id: 301,
            title: "薬物代謝の基礎",
            duration: "15分",
            content: `<h2>薬物代謝の基礎</h2>
                <p>薬物代謝（Drug Metabolism）とは、体内に取り込まれた薬物が酵素の作用により<strong>化学的に変換される過程</strong>です。代謝の主な目的は、脂溶性の高い薬物をより<strong>水溶性の高い代謝物</strong>に変換し、腎臓や胆汁を通じて体外へ排泄しやすくすることです。</p>

                <h3>代謝の主要な目的</h3>
                <div class="highlight-box">
                    <p><strong>核心ポイント：</strong>脂溶性の薬物はそのままでは尿細管で再吸収されてしまい、体内に長く留まる。代謝により水溶性を高めることで、腎排泄を促進し、薬物の体内からの消失を加速させる。代謝は薬物の「不活化」だけでなく、プロドラッグの「活性化」にも関わる。</p>
                </div>

                <h3>Phase I 反応（第I相反応）</h3>
                <p>Phase I 反応は、薬物分子に<strong>官能基を導入または露出</strong>させる反応です。主にシトクロムP450（CYP450）酵素系が触媒します。</p>
                <table>
                    <tr><th>反応の種類</th><th>概要</th><th>代表例</th></tr>
                    <tr><td><strong>酸化</strong></td><td>最も一般的なPhase I反応。CYP450が主に触媒</td><td>水酸化、N-脱メチル化、O-脱メチル化、脱アミノ化</td></tr>
                    <tr><td><strong>還元</strong></td><td>ニトロ基やカルボニル基の還元</td><td>クロラムフェニコールのニトロ基還元</td></tr>
                    <tr><td><strong>加水分解</strong></td><td>エステルやアミド結合の切断</td><td>プロカインのエステル加水分解、リドカインのアミド加水分解</td></tr>
                </table>

                <div class="card-grid">
                    <div class="card">
                        <h4>CYP450酵素系</h4>
                        <p>肝臓の小胞体（ミクロソーム）に存在するヘムタンパク質の酵素ファミリー。薬物の<strong>酸化的代謝の約75%</strong>を担当する。NADPH-CYP還元酵素と共に電子伝達系を構成し、分子状酸素を活性化して基質を酸化する。</p>
                    </div>
                    <div class="card">
                        <h4>代表的なPhase I 酸化反応</h4>
                        <p><strong>水酸化：</strong>芳香環や脂肪族に-OHを導入。<strong>N-脱メチル化：</strong>N-CH3からCH3を除去。<strong>O-脱メチル化：</strong>O-CH3からCH3を除去してOHを露出。いずれもCYP450が触媒する。</p>
                    </div>
                </div>

                <h3>Phase II 反応（第II相反応 / 抱合反応）</h3>
                <p>Phase II 反応は、薬物またはPhase I代謝物に<strong>内因性の水溶性分子を結合（抱合）</strong>させる反応です。これにより分子量と水溶性が大きく増加し、排泄が促進されます。</p>
                <table>
                    <tr><th>抱合反応</th><th>酵素</th><th>供与体</th><th>特徴</th></tr>
                    <tr><td><strong>グルクロン酸抱合</strong></td><td>UGT（UDP-グルクロノシルトランスフェラーゼ）</td><td>UDP-グルクロン酸</td><td>最も一般的な抱合反応。胆汁排泄と腸肝循環に関与</td></tr>
                    <tr><td><strong>硫酸抱合</strong></td><td>SULT（スルホトランスフェラーゼ）</td><td>PAPS</td><td>低用量では主要だが、高用量で飽和しやすい</td></tr>
                    <tr><td><strong>グルタチオン抱合</strong></td><td>GST（グルタチオンS-トランスフェラーゼ）</td><td>グルタチオン（GSH）</td><td>反応性代謝物の解毒に重要。アセトアミノフェン中毒と関連</td></tr>
                    <tr><td><strong>アセチル化</strong></td><td>NAT（N-アセチルトランスフェラーゼ）</td><td>アセチルCoA</td><td>遺伝的多型（slow/rapid acetylator）が臨床的に重要</td></tr>
                </table>

                <h3>Phase I → Phase II の連続的代謝</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>Phase I（官能基化）</strong>CYP450等により薬物に-OH、-NH2、-COOHなどの官能基が導入される。これにより次の抱合反応の「足場」が形成される。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>Phase II（抱合）</strong>Phase Iで導入された官能基に、グルクロン酸や硫酸などの水溶性分子が結合する。分子量と極性が大幅に増加する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>排泄</strong>水溶性が高まった抱合体は、腎臓（尿中）または肝臓（胆汁中）から効率的に排泄される。一部の薬物はPhase Iを経ずに直接Phase IIを受けることもある（例：モルヒネのグルクロン酸抱合）。</div>
                    </div>
                </div>

                <h3>代謝の主要臓器</h3>
                <div class="highlight-box">
                    <p><strong>肝臓が最も重要な代謝臓器。</strong>CYP450酵素が最も豊富に発現し、初回通過効果の主因となる。他に腸管（CYP3A4が発現し、経口薬の初回通過代謝に寄与）、腎臓、肺、血漿（エステラーゼによる加水分解）も代謝に関与する。</p>
                </div>`,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "薬物代謝の主な目的として最も適切なものはどれか？",
                    options: [
                        "薬物の薬理活性を増強する",
                        "薬物の脂溶性を高めて組織移行性を向上させる",
                        "薬物の水溶性を高めて体外への排泄を促進する",
                        "薬物のタンパク結合率を低下させる"
                    ],
                    answer: 2,
                    explanation: "薬物代謝の主な目的は、脂溶性の薬物をより水溶性の高い代謝物に変換し、腎臓や胆汁を通じた排泄を促進することです。代謝により薬理活性が失われることが多いですが、一部のプロドラッグでは活性化が起こります。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "Phase I反応に含まれないものはどれか？",
                    options: [
                        "酸化",
                        "還元",
                        "グルクロン酸抱合",
                        "加水分解"
                    ],
                    answer: 2,
                    explanation: "グルクロン酸抱合はPhase II反応（抱合反応）に分類されます。Phase I反応は酸化・還元・加水分解の3つが代表的で、主にCYP450酵素系が関与します。"
                },
                {
                    id: "q301_3",
                    type: "fill",
                    question: "Phase II反応の中で最も一般的な抱合反応は＿＿＿抱合である。",
                    answer: "グルクロン酸",
                    explanation: "グルクロン酸抱合はUGT（UDP-グルクロノシルトランスフェラーゼ）により触媒される最も一般的なPhase II反応です。分子量と水溶性を大幅に増加させ、腎排泄や胆汁排泄を促進します。"
                }
            ]
        },
        {
            id: 302,
            title: "CYP酵素と薬物相互作用",
            duration: "15分",
            content: `<h2>CYP酵素と薬物相互作用</h2>
                <p>シトクロムP450（CYP450）酵素は、薬物代謝において最も重要な酵素ファミリーです。薬物間相互作用の多くはCYP酵素の阻害や誘導を介して生じるため、臨床における重要性は極めて高いです。</p>

                <h3>CYP450酵素ファミリーの概要</h3>
                <div class="highlight-box">
                    <p><strong>CYPの命名法：</strong>CYP（シトクロムP450）+ <strong>ファミリー番号</strong>（アラビア数字）+ <strong>サブファミリー文字</strong>（アルファベット）+ <strong>個別酵素番号</strong>（アラビア数字）。例：CYP3A4 = ファミリー3、サブファミリーA、酵素4。ヒトでは57種のCYP遺伝子が同定されているが、薬物代謝に関与するのは主に10数種である。</p>
                </div>

                <h3>主要なCYPアイソフォームと代謝寄与率</h3>
                <table>
                    <tr><th>CYP酵素</th><th>薬物代謝への寄与</th><th>代表的基質</th><th>臨床的特徴</th></tr>
                    <tr><td><strong>CYP3A4</strong></td><td>約50%</td><td>ミダゾラム、シクロスポリン、ニフェジピン、シンバスタチン、タクロリムス</td><td>最も重要。肝臓と小腸に発現。基質特異性が広い</td></tr>
                    <tr><td><strong>CYP2D6</strong></td><td>約25%</td><td>コデイン、メトプロロール、デキストロメトルファン、タモキシフェン</td><td>遺伝的多型が顕著（PM, IM, EM, UM）</td></tr>
                    <tr><td><strong>CYP2C9</strong></td><td>約10%</td><td>ワルファリン（S体）、フェニトイン、ジクロフェナク、ロサルタン</td><td>遺伝的多型あり（*2, *3）</td></tr>
                    <tr><td><strong>CYP2C19</strong></td><td>約5%</td><td>オメプラゾール、クロピドグレル、ジアゼパム、ボリコナゾール</td><td>遺伝的多型あり。日本人でPMが約20%</td></tr>
                    <tr><td><strong>CYP1A2</strong></td><td>約5%</td><td>テオフィリン、カフェイン、クロザピン、フルボキサミン</td><td>喫煙による誘導。食品（グレープフルーツ以外）の影響</td></tr>
                </table>

                <h3>酵素誘導（Enzyme Induction）</h3>
                <p>特定の薬物や食品成分がCYP酵素の発現量を<strong>増加</strong>させる現象です。転写レベルでの遺伝子発現の亢進によるもので、効果発現には数日〜2週間を要します。</p>
                <div class="card-grid">
                    <div class="card">
                        <h4>誘導の結果</h4>
                        <p>CYP酵素量が増加し、基質薬物の代謝が<strong>促進</strong>される。その結果、基質薬物の<strong>血中濃度が低下</strong>し、治療効果が減弱する可能性がある。プロドラッグの場合は活性代謝物が増加する。</p>
                    </div>
                    <div class="card">
                        <h4>代表的な酵素誘導薬</h4>
                        <p><strong>リファンピシン：</strong>CYP3A4, 2C9, 2C19等の強力な誘導薬。併用薬の血中濃度を大幅に低下させる。<strong>カルバマゼピン：</strong>CYP3A4誘導。<strong>フェノバルビタール：</strong>複数のCYPを誘導。<strong>セイヨウオトギリソウ：</strong>CYP3A4誘導（健康食品との相互作用に注意）。</p>
                    </div>
                </div>

                <h3>酵素阻害（Enzyme Inhibition）</h3>
                <p>特定の薬物がCYP酵素の活性を<strong>低下</strong>させる現象です。競合阻害（可逆的）と不可逆阻害（mechanism-based inhibition）があります。酵素誘導と異なり、<strong>速やかに（投与直後から）</strong>発現します。</p>
                <div class="card-grid">
                    <div class="card">
                        <h4>阻害の結果</h4>
                        <p>基質薬物の代謝が<strong>抑制</strong>され、<strong>血中濃度が上昇</strong>する。これにより副作用や毒性のリスクが増大する。プロドラッグの場合は活性代謝物が減少し、効果が減弱する。</p>
                    </div>
                    <div class="card">
                        <h4>代表的な酵素阻害薬</h4>
                        <p><strong>ケトコナゾール / イトラコナゾール：</strong>CYP3A4の強力な阻害薬。<strong>エリスロマイシン / クラリスロマイシン：</strong>CYP3A4阻害。<strong>フルコナゾール：</strong>CYP2C9, 2C19阻害。<strong>パロキセチン / フルオキセチン：</strong>CYP2D6阻害。<strong>グレープフルーツジュース：</strong>小腸のCYP3A4を不可逆的に阻害。</p>
                    </div>
                </div>

                <h3>薬物相互作用の臨床例</h3>
                <table>
                    <tr><th>併用</th><th>メカニズム</th><th>臨床的影響</th></tr>
                    <tr><td>シンバスタチン + イトラコナゾール</td><td>CYP3A4阻害</td><td>スタチン血中濃度上昇 → 横紋筋融解症リスク</td></tr>
                    <tr><td>ワルファリン + リファンピシン</td><td>CYP2C9誘導</td><td>ワルファリン血中濃度低下 → 抗凝固効果減弱</td></tr>
                    <tr><td>シクロスポリン + グレープフルーツ</td><td>腸管CYP3A4阻害</td><td>シクロスポリン血中濃度上昇 → 腎毒性リスク</td></tr>
                    <tr><td>コデイン + パロキセチン</td><td>CYP2D6阻害</td><td>モルヒネへの変換阻害 → 鎮痛効果減弱</td></tr>
                </table>`,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "薬物代謝において最も多くの薬物を代謝するCYP酵素はどれか？",
                    options: [
                        "CYP1A2",
                        "CYP2D6",
                        "CYP3A4",
                        "CYP2C9"
                    ],
                    answer: 2,
                    explanation: "CYP3A4は薬物代謝全体の約50%を担当する最も重要なCYP酵素です。肝臓と小腸に豊富に発現し、基質特異性が非常に広いのが特徴です。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "リファンピシンがCYP3A4の基質薬物に与える影響として正しいものはどれか？",
                    options: [
                        "基質薬物の代謝を阻害し、血中濃度を上昇させる",
                        "基質薬物の吸収を阻害し、血中濃度を低下させる",
                        "CYP3A4を誘導し、基質薬物の代謝を促進して血中濃度を低下させる",
                        "CYP3A4のタンパク結合を変化させる"
                    ],
                    answer: 2,
                    explanation: "リファンピシンはCYP3A4の強力な酵素誘導薬です。CYP3A4の発現量を増加させることにより、基質薬物の代謝が促進され、血中濃度が低下します。これにより併用薬の治療効果が減弱する可能性があります。"
                },
                {
                    id: "q302_3",
                    type: "fill",
                    question: "CYP2D6は薬物代謝の約25%を担い、遺伝的＿＿＿が顕著で、PM（poor metabolizer）からUM（ultra-rapid metabolizer）まで個人差が大きい。",
                    answer: "多型",
                    explanation: "CYP2D6は遺伝的多型（genetic polymorphism）が顕著な酵素です。PM（poor metabolizer: 代謝能低下）、IM（intermediate metabolizer）、EM（extensive metabolizer: 通常）、UM（ultra-rapid metabolizer: 代謝能亢進）に分類され、薬物の効果や副作用に大きな個人差をもたらします。"
                }
            ]
        },
        {
            id: 303,
            title: "腎排泄のメカニズム",
            duration: "15分",
            content: `<h2>腎排泄のメカニズム</h2>
                <p>腎臓は薬物排泄において最も重要な臓器の一つです。薬物およびその代謝物は、腎臓の<strong>ネフロン</strong>における3つの基本プロセスを経て尿中に排泄されます。</p>

                <h3>腎排泄の3つのプロセス</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>糸球体ろ過（Glomerular Filtration）</strong>糸球体の毛細血管から、分子量の小さい物質が非選択的にボーマン嚢へろ過される。タンパク結合型の薬物はろ過されず、<strong>遊離型（非結合型）のみ</strong>がろ過される。ろ過速度の指標がGFR（糸球体ろ過量、正常値：約120 mL/min）。受動的な過程でエネルギーを必要としない。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>尿細管分泌（Tubular Secretion）</strong>近位尿細管において、血液中の薬物が<strong>能動輸送</strong>により尿細管腔内へ分泌される。有機アニオントランスポーター（OAT1/OAT3）と有機カチオントランスポーター（OCT2）が主に関与する。タンパク結合型も含めて分泌されうるため、糸球体ろ過を補完する。飽和性があり、薬物間で競合が生じる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>尿細管再吸収（Tubular Reabsorption）</strong>遠位尿細管〜集合管で、尿細管腔内の薬物が血液側に<strong>受動拡散</strong>により再吸収される。脂溶性が高く非イオン型の薬物ほど再吸収されやすい。尿のpHにより非イオン型の割合が変化するため、<strong>pH依存的</strong>である。</div>
                    </div>
                </div>

                <h3>腎クリアランス（CLr）</h3>
                <div class="highlight-box">
                    <p><strong>腎クリアランスの計算概念：</strong></p>
                    <p>CLr = (fu × GFR) + 分泌速度 - 再吸収速度</p>
                    <p>fu: 非結合型分率、GFR: 糸球体ろ過量（約120 mL/min）</p>
                    <p>CLr > fu × GFR の場合 → 尿細管分泌が関与（ペニシリン等）</p>
                    <p>CLr < fu × GFR の場合 → 尿細管再吸収が関与（グルコース等）</p>
                    <p>CLr = fu × GFR の場合 → 糸球体ろ過のみ（イヌリン等）</p>
                </div>

                <h3>尿pH操作による排泄促進</h3>
                <p>薬物中毒時に尿のpHを操作することで、尿細管再吸収を抑制し排泄を促進できます。原理は、イオン型分子は脂質膜を透過しにくく再吸収されないことに基づきます。</p>
                <table>
                    <tr><th>薬物の性質</th><th>尿pH操作</th><th>方法</th><th>代表例</th></tr>
                    <tr><td><strong>酸性薬物</strong></td><td>尿をアルカリ化</td><td>炭酸水素ナトリウム投与</td><td>サリチル酸（アスピリン中毒）、バルビツール酸系</td></tr>
                    <tr><td><strong>塩基性薬物</strong></td><td>尿を酸性化</td><td>塩化アンモニウム投与</td><td>アンフェタミン（実臨床ではあまり行われない）</td></tr>
                </table>

                <h3>腎機能の評価</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>クレアチニンクリアランス（CLcr）</h4>
                        <p>腎機能の代表的な指標。血清クレアチニン値から<strong>Cockcroft-Gault式</strong>で推算する。<br>CLcr = (140 - 年齢) × 体重 / (72 × 血清Cr) [×0.85 女性]<br>薬物の投与量調整に広く使用される。</p>
                    </div>
                    <div class="card">
                        <h4>推算GFR（eGFR）</h4>
                        <p>日本ではJSN（日本腎臓学会）の<strong>eGFR推算式</strong>が標準。<br>eGFR = 194 × Cr<sup>-1.094</sup> × 年齢<sup>-0.287</sup> [×0.739 女性]<br>CKD（慢性腎臓病）のステージ分類に使用される。</p>
                    </div>
                </div>

                <h3>腎機能低下時の投与量調整</h3>
                <div class="highlight-box">
                    <p><strong>腎排泄型薬物</strong>は腎機能低下時に血中濃度が上昇し、副作用リスクが増大する。対応策：(1) 1回投与量の減量、(2) 投与間隔の延長、(3) その両方の組み合わせ。代表的な腎排泄型薬物：アミノグリコシド系抗菌薬、バンコマイシン、ジゴキシン、リチウム、メトホルミン。</p>
                </div>`,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "糸球体ろ過に関する記述として正しいものはどれか？",
                    options: [
                        "タンパク結合型の薬物も効率よくろ過される",
                        "能動輸送によりエネルギーを消費して行われる",
                        "遊離型（非結合型）の薬物のみがろ過される",
                        "尿細管分泌と同じトランスポーターを使用する"
                    ],
                    answer: 2,
                    explanation: "糸球体ろ過は受動的な過程であり、タンパク質に結合していない遊離型（非結合型）の薬物のみがろ過されます。タンパク結合型は分子量が大きいため糸球体を通過できません。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "サリチル酸中毒の治療で尿排泄を促進するために行う処置はどれか？",
                    options: [
                        "尿を酸性化する",
                        "尿をアルカリ化する",
                        "タンパク結合を増加させる",
                        "GFRを低下させる"
                    ],
                    answer: 1,
                    explanation: "サリチル酸は酸性薬物であるため、尿をアルカリ化（炭酸水素ナトリウム投与）することでイオン型の割合が増加し、尿細管での再吸収が抑制されて排泄が促進されます。"
                },
                {
                    id: "q303_3",
                    type: "fill",
                    question: "近位尿細管での薬物分泌に関与する有機アニオントランスポーターは＿＿＿（アルファベットで）である。",
                    answer: "OAT",
                    explanation: "OAT（Organic Anion Transporter）は近位尿細管に発現する有機アニオントランスポーターで、主にOAT1とOAT3が薬物の尿細管分泌に関与します。有機カチオンにはOCT（Organic Cation Transporter）が関与します。"
                }
            ]
        },
        {
            id: 304,
            title: "胆汁排泄と腸肝循環",
            duration: "12分",
            content: `<h2>胆汁排泄と腸肝循環</h2>
                <p>薬物の排泄経路は腎排泄だけではありません。<strong>胆汁排泄</strong>は、特に分子量が大きく極性の高い薬物や抱合体の重要な排泄経路です。さらに、胆汁排泄された薬物が腸管で再吸収される<strong>腸肝循環</strong>は、薬物動態に大きな影響を及ぼします。</p>

                <h3>胆汁排泄の特徴</h3>
                <div class="highlight-box">
                    <p><strong>胆汁排泄されやすい薬物の条件：</strong>(1) 分子量が比較的大きい（一般に500以上）、(2) 極性が高い（水溶性のある分子）、(3) 抱合体（特にグルクロン酸抱合体）であること。肝細胞の管側膜（胆管側）に存在するトランスポーターが能動的に薬物を胆汁中に排泄する。</p>
                </div>

                <h3>胆汁排泄に関わるトランスポーター</h3>
                <table>
                    <tr><th>トランスポーター</th><th>別名</th><th>基質</th><th>特徴</th></tr>
                    <tr><td><strong>MRP2</strong></td><td>ABCC2</td><td>グルクロン酸抱合体、グルタチオン抱合体</td><td>抱合代謝物の胆汁排泄に最も重要</td></tr>
                    <tr><td><strong>BSEP</strong></td><td>ABCB11</td><td>胆汁酸</td><td>胆汁酸の排泄に特異的。阻害で胆汁うっ滞</td></tr>
                    <tr><td><strong>P-gp</strong></td><td>ABCB1/MDR1</td><td>脂溶性・陽性荷電薬物</td><td>消化管、腎臓にも発現する排出トランスポーター</td></tr>
                    <tr><td><strong>BCRP</strong></td><td>ABCG2</td><td>硫酸抱合体、一部の薬物</td><td>肝臓・腸管・腎臓に発現</td></tr>
                </table>

                <h3>腸肝循環（Enterohepatic Circulation）の仕組み</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>肝臓での抱合と胆汁排泄</strong>薬物は肝臓でグルクロン酸抱合などのPhase II代謝を受け、抱合体としてトランスポーターを介して胆汁中に排泄される。胆汁は胆嚢に貯蔵された後、食事刺激により十二指腸に分泌される。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>腸管での脱抱合</strong>腸内細菌が産生する<strong>β-グルクロニダーゼ</strong>が抱合体を加水分解し、グルクロン酸を切り離す（脱抱合）。これにより、元の脂溶性の薬物（アグリコン）が遊離する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>腸管からの再吸収</strong>脱抱合により再び脂溶性を取り戻した薬物は、腸管粘膜から受動拡散により再吸収される。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>門脈を経て肝臓に帰還</strong>再吸収された薬物は門脈血を通じて肝臓に戻り、再び全身循環に入る。この循環が繰り返されることで、薬物の体内滞留時間が延長する。</div>
                    </div>
                </div>

                <h3>腸肝循環の臨床的影響</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>血中濃度のダブルピーク</h4>
                        <p>腸肝循環を受ける薬物では、血中濃度-時間曲線に<strong>2つのピーク</strong>が観察されることがある。最初のピークは吸収によるもの、2番目のピークは腸肝循環による再吸収で生じる。</p>
                    </div>
                    <div class="card">
                        <h4>消失の遅延</h4>
                        <p>腸肝循環により薬物が体内を繰り返し循環するため、<strong>見かけの半減期が延長</strong>する。AUCも増大し、薬効持続時間が長くなることがある。抗菌薬による腸内細菌への影響で腸肝循環が変化する場合もある。</p>
                    </div>
                </div>

                <h3>腸肝循環を受ける代表的な薬物</h3>
                <table>
                    <tr><th>薬物</th><th>特徴</th></tr>
                    <tr><td><strong>モルヒネ</strong></td><td>グルクロン酸抱合体（M3G, M6G）が胆汁排泄され、腸管で脱抱合後に再吸収</td></tr>
                    <tr><td><strong>ジゴキシン</strong></td><td>胆汁中に未変化体として排泄され、腸管から再吸収される</td></tr>
                    <tr><td><strong>エストロゲン（経口避妊薬）</strong></td><td>抗菌薬により腸内細菌叢が撹乱されると腸肝循環が低下し、避妊効果が減弱する可能性がある</td></tr>
                    <tr><td><strong>インドメタシン</strong></td><td>グルクロン酸抱合体の腸肝循環により消失が遅延</td></tr>
                    <tr><td><strong>ミコフェノール酸</strong></td><td>腸肝循環によるダブルピーク現象が特徴的</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>臨床上の注意：</strong>抗菌薬の併用は腸内細菌叢を変化させ、β-グルクロニダーゼ活性が低下する。これにより腸肝循環を受ける薬物の再吸収が減少し、予期しない血中濃度の低下が生じることがある。経口避妊薬との併用で避妊失敗のリスクが報告されている。</p>
                </div>`,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "胆汁排泄されやすい薬物の特徴として正しいものはどれか？",
                    options: [
                        "分子量が小さく脂溶性が高い",
                        "分子量が比較的大きく（500以上）、極性が高い抱合体",
                        "遊離型の割合が高い塩基性薬物",
                        "水溶性が極めて低い未変化体"
                    ],
                    answer: 1,
                    explanation: "胆汁排泄されやすい条件は、(1) 分子量が比較的大きい（一般に500以上）、(2) 極性が高い、(3) 抱合体（特にグルクロン酸抱合体）であることです。肝細胞の管側膜のトランスポーターにより能動的に排泄されます。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "腸肝循環において、腸管でグルクロン酸抱合体を脱抱合する酵素はどれか？",
                    options: [
                        "CYP3A4",
                        "UGT",
                        "β-グルクロニダーゼ",
                        "エステラーゼ"
                    ],
                    answer: 2,
                    explanation: "腸内細菌が産生するβ-グルクロニダーゼが、グルクロン酸抱合体を加水分解（脱抱合）します。これにより脂溶性の元の薬物が遊離し、腸管から再吸収されて腸肝循環が成立します。"
                },
                {
                    id: "q304_3",
                    type: "fill",
                    question: "腸肝循環を受ける薬物の血中濃度-時間曲線では、＿＿＿ピーク現象が観察されることがある。",
                    answer: "ダブル",
                    explanation: "腸肝循環を受ける薬物では、最初のピーク（通常の吸収による）と2番目のピーク（腸肝循環による再吸収による）が観察されるダブルピーク現象が特徴的です。ミコフェノール酸などで典型的に見られます。"
                }
            ]
        }
    ]
};
