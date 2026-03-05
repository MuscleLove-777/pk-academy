const LEVEL2_DATA = {
    id: 2,
    title: "吸収と分布",
    icon: "💉",
    description: "薬物の吸収メカニズムとバイオアベイラビリティ、体内分布の原理を学ぶ",
    modules: [
        {
            id: 201,
            title: "薬物の吸収メカニズム",
            duration: "15分",
            content: `<h2>薬物の吸収メカニズム</h2>
                <p>薬物の吸収とは、投与部位から<strong>全身循環（体循環）</strong>へ薬物が移行する過程です。経口投与の場合、消化管粘膜を通過する際の膜透過メカニズムが吸収の鍵となります。</p>

                <h3>主要な膜透過メカニズム</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>受動拡散（Passive Diffusion）</h4>
                        <p>最も一般的な吸収メカニズム。薬物は濃度勾配に従い、高濃度側から低濃度側へ細胞膜を透過する。エネルギーを必要とせず、飽和しない。脂溶性が高く、分子量が小さい非イオン型分子ほど透過しやすい（Fickの法則に従う）。</p>
                    </div>
                    <div class="card">
                        <h4>促進拡散（Facilitated Diffusion）</h4>
                        <p>膜上のトランスポーター（輸送体）を介して、濃度勾配に従い透過する。エネルギーは不要だが、トランスポーターが関与するため<strong>飽和性</strong>を示す。グルコーストランスポーター（GLUT）などが例。</p>
                    </div>
                    <div class="card">
                        <h4>能動輸送（Active Transport）</h4>
                        <p>ATPなどのエネルギーを消費して、濃度勾配に逆らって薬物を輸送する。飽和性があり、特異的な基質認識を持つ。OATP、OCT、PEPTなどの取り込みトランスポーターが関与。</p>
                    </div>
                </div>

                <h3>膜透過と Henderson-Hasselbalch の式</h3>
                <p>多くの薬物は弱酸性または弱塩基性の化合物であり、pH によってイオン型と非イオン型の比率が変わります。<strong>非イオン型のみが脂質二重膜を効率的に透過</strong>するため、消化管内のpHは吸収に大きく影響します。</p>
                <div class="highlight-box">
                    <p><strong>Henderson-Hasselbalch の式（簡略版）：</strong></p>
                    <p>弱酸性薬物：非イオン型/イオン型 = 10<sup>(pKa - pH)</sup></p>
                    <p>弱塩基性薬物：非イオン型/イオン型 = 10<sup>(pH - pKa)</sup></p>
                    <p>つまり、弱酸性薬物はpHが低い（酸性の）環境で非イオン型が増え吸収されやすく、弱塩基性薬物はpHが高い（塩基性の）環境で非イオン型が増え吸収されやすい。</p>
                </div>

                <h3>BCSクラス分類（Biopharmaceutics Classification System）</h3>
                <p>薬物を<strong>溶解性（Solubility）</strong>と<strong>膜透過性（Permeability）</strong>の2軸で4つに分類するシステムです。経口吸収の予測やバイオウェーバー申請に活用されます。</p>
                <table>
                    <tr><th>BCSクラス</th><th>溶解性</th><th>膜透過性</th><th>吸収の特徴</th><th>代表例</th></tr>
                    <tr><td><strong>Class I</strong></td><td>高</td><td>高</td><td>速やかに溶解・吸収。最も理想的</td><td>メトプロロール、プロプラノロール</td></tr>
                    <tr><td><strong>Class II</strong></td><td>低</td><td>高</td><td>溶解が律速。製剤技術で改善可能</td><td>ケトコナゾール、イブプロフェン</td></tr>
                    <tr><td><strong>Class III</strong></td><td>高</td><td>低</td><td>膜透過が律速。吸収率が変動しやすい</td><td>シメチジン、アテノロール</td></tr>
                    <tr><td><strong>Class IV</strong></td><td>低</td><td>低</td><td>溶解も透過も不良。経口投与に不向き</td><td>フロセミド、ヒドロクロロチアジド</td></tr>
                </table>

                <h3>吸収に影響する因子</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>消化管内pH</strong>胃（pH 1-3）と小腸（pH 5-7）ではpHが異なり、薬物のイオン化状態が変化する。弱酸性薬物は胃で、弱塩基性薬物は小腸で吸収されやすい。ただし、小腸は表面積が圧倒的に大きいため、多くの薬物の主要な吸収部位は小腸である。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>食事の影響</strong>食事は胃排出速度、消化管pH、胆汁酸分泌に影響する。高脂肪食で吸収が増加する薬物（脂溶性薬物）もあれば、食事により吸収が低下する薬物もある。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>胃排出速度</strong>胃排出が速いと薬物が早く小腸に到達し、吸収が促進される。胃排出は食事、薬物（メトクロプラミドは促進、オピオイドは遅延）、体位などに影響される。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>P-糖タンパク質（P-gp）</strong>消化管上皮の管腔側に発現する排出トランスポーター。吸収された薬物を管腔側に排出し、吸収を低下させる。ジゴキシン、シクロスポリンなどが基質。</div>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "薬物の消化管吸収において、最も一般的な膜透過メカニズムはどれか？",
                    options: [
                        "能動輸送",
                        "受動拡散",
                        "エンドサイトーシス",
                        "促進拡散"
                    ],
                    answer: 1,
                    explanation: "受動拡散（Passive Diffusion）は、大部分の薬物の消化管吸収における主要なメカニズムです。濃度勾配に従い、エネルギーを必要とせず、飽和しないのが特徴です。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "BCS Class IIの薬物の吸収を律速する因子はどれか？",
                    options: [
                        "膜透過性",
                        "溶解性",
                        "タンパク結合",
                        "代謝速度"
                    ],
                    answer: 1,
                    explanation: "BCS Class IIの薬物は「低溶解性・高膜透過性」であるため、溶解が律速段階となります。製剤技術（微粉化、固体分散体、脂質製剤など）により溶解性を改善することで吸収を向上させることが可能です。"
                },
                {
                    id: "q201_3",
                    type: "fill",
                    question: "消化管上皮に発現し、吸収された薬物を管腔側に排出するトランスポーターは＿＿＿である。",
                    answer: "P-gp",
                    explanation: "P-gp（P-糖タンパク質、P-glycoprotein、MDR1、ABCB1とも呼ばれる）は、消化管上皮細胞の管腔側膜に発現する排出トランスポーターです。多くの薬物を管腔側に排出し、経口バイオアベイラビリティを低下させます。"
                }
            ]
        },
        {
            id: 202,
            title: "バイオアベイラビリティ",
            duration: "15分",
            content: `<h2>バイオアベイラビリティ（Bioavailability; F）</h2>
                <p>バイオアベイラビリティ（F）とは、投与された薬物のうち<strong>全身循環に到達する割合（未変化体）</strong>を指します。薬物の有効性を評価し、投与設計を行う上で最も重要なPKパラメータの一つです。</p>

                <h3>バイオアベイラビリティの定義と計算</h3>
                <div class="highlight-box">
                    <p><strong>絶対的バイオアベイラビリティ（F）の計算式：</strong></p>
                    <p>F = (AUC<sub>経口</sub> × Dose<sub>IV</sub>) / (AUC<sub>IV</sub> × Dose<sub>経口</sub>) × 100%</p>
                    <p>静脈内投与（F=100%）を基準として、経口投与後の全身曝露量を比較する。</p>
                </div>

                <h3>絶対的 vs 相対的バイオアベイラビリティ</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>絶対的バイオアベイラビリティ</h4>
                        <p>IV投与（F=100%）を基準として算出。薬物が全身循環に到達する真の割合を示す。IV投与のデータが必要。</p>
                        <p><strong>F = AUC<sub>test</sub> / AUC<sub>IV</sub></strong>（用量補正済み）</p>
                    </div>
                    <div class="card">
                        <h4>相対的バイオアベイラビリティ</h4>
                        <p>既存の経口製剤（先発品など）を基準として算出。後発品と先発品の比較（生物学的同等性試験）に使用される。</p>
                        <p><strong>F<sub>rel</sub> = AUC<sub>test</sub> / AUC<sub>reference</sub></strong>（用量補正済み）</p>
                    </div>
                </div>

                <h3>初回通過効果（First-Pass Effect）</h3>
                <p>経口投与された薬物は、全身循環に到達する前に消化管壁や肝臓で代謝を受けます。この最初の通過時の代謝損失を<strong>初回通過効果</strong>といいます。</p>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>消化管管腔内での損失</strong>胃酸や消化酵素による分解、溶解不良、不完全な吸収。吸収率 = fa（fraction absorbed）</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>腸管壁での代謝（Gut Wall Metabolism）</strong>腸管上皮細胞内のCYP3A4やUGTなどによる代謝。腸管壁通過率 = fg</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>肝初回通過代謝（Hepatic First-Pass）</strong>門脈を経て肝臓に到達した薬物が、全身循環に入る前に肝臓で代謝される。肝通過率 = fh</div>
                    </div>
                </div>

                <h3>F = fa × fg × fh の概念</h3>
                <div class="highlight-box">
                    <p><strong>経口バイオアベイラビリティの決定因子：</strong></p>
                    <p><strong>F = fa × fg × fh</strong></p>
                    <p>fa: 消化管からの吸収率（fraction absorbed）</p>
                    <p>fg: 腸管壁代謝を免れる割合（fraction escaping gut wall metabolism）</p>
                    <p>fh: 肝初回通過代謝を免れる割合（fraction escaping hepatic metabolism）= 1 - 肝抽出率（Eh）</p>
                    <p>各段階で薬物が失われるため、最終的なFはこれらの積となる。</p>
                </div>

                <h3>Fに影響する因子</h3>
                <table>
                    <tr><th>因子</th><th>影響</th><th>例</th></tr>
                    <tr><td>薬物の溶解性・安定性</td><td>faに影響。溶解が不良だと吸収が低下</td><td>BCS Class II薬物</td></tr>
                    <tr><td>腸管P-gp・CYP3A4</td><td>fa・fgに影響。排出や腸管代謝でFが低下</td><td>シクロスポリン、ミダゾラム</td></tr>
                    <tr><td>肝代謝能（CYP活性）</td><td>fhに影響。高い肝抽出率→低いF</td><td>プロプラノロール（F≈26%）</td></tr>
                    <tr><td>肝血流量</td><td>高抽出率薬物のfhに影響</td><td>リドカイン（経口F非常に低い）</td></tr>
                    <tr><td>食事</td><td>fa, fgに影響。脂質で吸収増加する場合も</td><td>グリセオフルビン（高脂肪食でF増加）</td></tr>
                    <tr><td>薬物相互作用</td><td>CYP阻害→fh増加→F上昇</td><td>グレープフルーツジュース×CYP3A4基質</td></tr>
                </table>

                <h3>各投与経路のバイオアベイラビリティ比較</h3>
                <table>
                    <tr><th>投与経路</th><th>典型的なF</th><th>初回通過効果</th></tr>
                    <tr><td>静脈内（IV）</td><td>100%（定義）</td><td>なし</td></tr>
                    <tr><td>筋肉内（IM）</td><td>75〜100%</td><td>なし</td></tr>
                    <tr><td>皮下（SC）</td><td>75〜100%</td><td>なし</td></tr>
                    <tr><td>舌下（SL）</td><td>薬物により異なる（高め）</td><td>回避</td></tr>
                    <tr><td>経口（PO）</td><td>5〜100%（大きく変動）</td><td>あり</td></tr>
                    <tr><td>直腸（PR）</td><td>30〜80%</td><td>部分的</td></tr>
                    <tr><td>経皮（TD）</td><td>低〜中程度</td><td>回避</td></tr>
                </table>`,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "経口バイオアベイラビリティ（F）を構成する因子として正しい式はどれか？",
                    options: [
                        "F = fa + fg + fh",
                        "F = fa × fg × fh",
                        "F = fa / (fg × fh)",
                        "F = (fa × fg) + fh"
                    ],
                    answer: 1,
                    explanation: "経口バイオアベイラビリティは F = fa × fg × fh で計算されます。fa（吸収率）、fg（腸管壁通過率）、fh（肝通過率）の各段階での損失を掛け合わせるため、積で表されます。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "初回通過効果に関与しない臓器はどれか？",
                    options: [
                        "肝臓",
                        "腸管壁",
                        "腎臓",
                        "消化管管腔"
                    ],
                    answer: 2,
                    explanation: "初回通過効果は、経口投与された薬物が全身循環に達する前に受ける代謝で、消化管管腔・腸管壁・肝臓が関与します。腎臓は全身循環後の排泄に関わりますが、初回通過効果には直接関与しません。"
                },
                {
                    id: "q202_3",
                    type: "fill",
                    question: "絶対的バイオアベイラビリティの算出基準となる投与経路は＿＿投与（アルファベット2文字）である。",
                    answer: "IV",
                    explanation: "絶対的バイオアベイラビリティは、静脈内（IV）投与を基準（F=100%）として算出します。IV投与では薬物が直接血液に入るため吸収過程や初回通過効果がなく、投与量が全て全身循環に到達します。"
                }
            ]
        },
        {
            id: 203,
            title: "薬物の分布",
            duration: "15分",
            content: `<h2>薬物の分布</h2>
                <p>分布（Distribution）とは、血液循環系に到達した薬物が<strong>血液中から組織・臓器へ移行する</strong>過程です。薬物の効果発現部位への到達と、血中濃度の変化に密接に関連します。</p>

                <h3>分布の原理</h3>
                <p>薬物は血液に乗って全身を循環し、各臓器・組織へ移行します。移行の程度は以下の因子に依存します。</p>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>血流量（臓器血流速度）</strong>血流が豊富な臓器（心臓、肝臓、腎臓、脳）には速やかに分布する（灌流律速）。血流が少ない組織（脂肪、骨、靱帯）への分布は遅い。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>膜透過性</strong>脂溶性の高い薬物は細胞膜を容易に通過して組織に移行する。イオン型や高分子は膜を透過しにくい。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>組織結合性</strong>薬物が組織成分（タンパク質、脂質、核酸など）に結合すると、その組織に蓄積する。脂溶性薬物は脂肪組織に蓄積しやすい。</div>
                    </div>
                </div>

                <h3>分布容積（Vd）の概念</h3>
                <p>分布容積（Volume of Distribution; Vd）は、薬物が体内にどの程度広く分布するかを示す<strong>見かけの容積</strong>パラメータです。</p>
                <div class="highlight-box">
                    <p><strong>分布容積の定義と計算式：</strong></p>
                    <p><strong>Vd = Dose / C<sub>0</sub></strong></p>
                    <p>Dose: 投与量（静脈内投与の場合）</p>
                    <p>C<sub>0</sub>: 投与直後の血漿中薬物濃度（分布平衡前の外挿値）</p>
                    <p>Vdは「体内の薬物総量が血漿中と同じ濃度で均一に分布したと仮定した場合の容積」であり、実際の体液量とは必ずしも一致しない。</p>
                </div>

                <h3>Vd値の解釈</h3>
                <table>
                    <tr><th>Vd値の範囲</th><th>解釈</th><th>分布の特徴</th><th>代表例</th></tr>
                    <tr><td><strong>小さい（3〜5 L）</strong></td><td>血漿量に近い</td><td>主に血漿中に留まる。血漿タンパクに強く結合する薬物</td><td>ワルファリン（約8 L）、ヘパリン</td></tr>
                    <tr><td><strong>中程度（10〜20 L）</strong></td><td>細胞外液量に近い</td><td>血漿と組織間液に分布。水溶性薬物</td><td>アミノグリコシド系（約18 L）</td></tr>
                    <tr><td><strong>大きい（40 L以上）</strong></td><td>総体液量を超える</td><td>組織に広く分布・蓄積。脂溶性が高い薬物</td><td>ジゴキシン（約500 L）、クロロキン（約15,000 L）</td></tr>
                </table>
                <p>Vdが体液量（約42 L）を大きく超える場合、薬物が組織に高濃度で蓄積していることを意味します。これは「見かけの」容積であり、物理的な空間を表すものではありません。</p>

                <h3>組織分布に影響する因子</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>血流量</h4>
                        <p>肝臓、腎臓、心臓、脳など血流が豊富な臓器へは速やかに分布する。安静時の心拍出量の約75%がこれらの臓器に供給される。脂肪や骨は血流が少なく分布が遅い。</p>
                    </div>
                    <div class="card">
                        <h4>膜透過性</h4>
                        <p>分子量、脂溶性（logP）、イオン化状態が膜透過に影響する。毛細血管壁の構造（有窓型、連続型、洞様血管）により透過性が異なる。</p>
                    </div>
                    <div class="card">
                        <h4>組織結合</h4>
                        <p>薬物が組織中のタンパク質や脂質に結合すると、見かけ上のVdが増大する。脂溶性薬物は脂肪組織に蓄積し、蓄積が作用の遷延や毒性の原因となることがある。</p>
                    </div>
                </div>

                <h3>血液脳関門（Blood-Brain Barrier; BBB）</h3>
                <p>BBBは脳毛細血管の内皮細胞間がタイトジャンクションで密に結合した構造で、<strong>脂溶性の高い小分子のみが透過</strong>できます。これにより中枢神経系は有害物質から保護されますが、中枢作用薬の設計上の課題にもなります。</p>
                <div class="highlight-box">
                    <p><strong>BBBを透過しやすい薬物の特徴：</strong>脂溶性が高い（logP > 1）、分子量が小さい（< 400-500 Da）、水素結合の数が少ない、非イオン型が多い。逆にP-gpがBBBの内皮細胞に発現し、透過した薬物を脳外に排出する働きもある。</p>
                </div>`,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "分布容積（Vd）の計算式として正しいものはどれか？（静脈内投与の場合）",
                    options: [
                        "Vd = C0 / Dose",
                        "Vd = Dose / C0",
                        "Vd = AUC / Dose",
                        "Vd = Dose × C0"
                    ],
                    answer: 1,
                    explanation: "Vd = Dose / C0 です。投与量（Dose）を投与直後の血漿中濃度（C0）で割ることで求められます。Vdが大きいほど薬物が組織に広く分布していることを示します。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "Vdが非常に大きい（例：500 L以上）薬物について、正しい解釈はどれか？",
                    options: [
                        "薬物は主に血漿中に留まっている",
                        "薬物は細胞外液にのみ分布している",
                        "薬物は組織に広く分布・蓄積している",
                        "薬物はすべて尿中に排泄されている"
                    ],
                    answer: 2,
                    explanation: "Vdが総体液量（約42 L）を大きく超える場合、薬物が組織に高濃度で蓄積していることを意味します。血漿中濃度は低くても、組織中に大量の薬物が存在しています。"
                },
                {
                    id: "q203_3",
                    type: "fill",
                    question: "脳への薬物移行を制限する構造を＿＿＿＿＿（アルファベット3文字の略称）という。",
                    answer: "BBB",
                    explanation: "BBB（Blood-Brain Barrier; 血液脳関門）は、脳毛細血管の内皮細胞間がタイトジャンクションで密着した構造で、脂溶性の高い小分子のみを透過させ、有害物質から中枢神経系を保護しています。"
                }
            ]
        },
        {
            id: 204,
            title: "血漿タンパク結合",
            duration: "12分",
            content: `<h2>血漿タンパク結合（Plasma Protein Binding）</h2>
                <p>血液中の薬物は、<strong>血漿タンパク質に結合した結合型</strong>と<strong>結合していない遊離型（free form）</strong>のバランスで存在します。遊離型の割合は薬効発現や分布に直接影響する重要な因子です。</p>

                <h3>タンパク結合の原理</h3>
                <p>薬物と血漿タンパク質の結合は<strong>可逆的</strong>で、結合と解離の平衡状態にあります。結合は非共有結合（イオン結合、疎水性相互作用、水素結合、ファンデルワールス力）によるもので、飽和性を示します。</p>
                <div class="highlight-box">
                    <p><strong>遊離型分率（fu）：</strong>fu = 遊離型濃度 / 総濃度</p>
                    <p><strong>結合率 = 1 - fu</strong>（通常 % で表す）</p>
                    <p>例：fu = 0.01 の場合、結合率 = 99%（遊離型はわずか1%）</p>
                </div>

                <h3>主要な結合タンパク質</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>アルブミン（HSA）</h4>
                        <p>血漿中最も豊富なタンパク質（35-50 g/L）。<strong>主に酸性薬物</strong>と結合する。ワルファリン、フェニトイン、ジアゼパムなどが高い結合率を示す。Site I（ワルファリンサイト）とSite II（ジアゼパムサイト）の主要な結合部位がある。</p>
                    </div>
                    <div class="card">
                        <h4>α1-酸性糖タンパク質（AAG）</h4>
                        <p>血漿中濃度はアルブミンより低い（0.4-1.0 g/L）が、<strong>主に塩基性薬物</strong>と結合する。リドカイン、プロプラノロール、キニジンなどが結合。ストレス、炎症、手術後に血中濃度が上昇（急性相反応蛋白）。</p>
                    </div>
                </div>

                <h3>結合率と遊離型の関係</h3>
                <table>
                    <tr><th>パラメータ</th><th>結合型薬物</th><th>遊離型薬物</th></tr>
                    <tr><td>薬理作用</td><td>不活性（受容体に結合できない）</td><td><strong>活性（薬効を発揮）</strong></td></tr>
                    <tr><td>組織分布</td><td>血管外に移行しにくい</td><td>組織に自由に分布</td></tr>
                    <tr><td>代謝・排泄</td><td>直接は代謝・排泄されない</td><td>代謝酵素の基質となり、糸球体濾過される</td></tr>
                    <tr><td>役割</td><td>薬物の貯蔵庫（リザーバー）</td><td>薬効を発現する実体</td></tr>
                </table>

                <h3>タンパク結合の臨床的意義</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>遊離型のみが薬効を示す</strong>薬物が受容体に結合して効果を発揮するためには、遊離型（非結合型）である必要がある。結合型は分子サイズが大きく、血管外へ移行しにくいため、直接的な薬効を発揮しない。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>遊離型のみが代謝・排泄される</strong>肝臓の代謝酵素は遊離型を基質とし、腎糸球体は遊離型のみを濾過する。したがって、結合率はクリアランスにも影響を与える（ただし高抽出率薬物では肝血流律速のため影響は限定的）。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>TDMにおける注意</strong>通常のTDMでは総濃度（結合型+遊離型）を測定する。結合率が変動する状況（低アルブミン血症、薬物相互作用）では、総濃度が正常でも遊離型濃度が変化している可能性がある。</div>
                    </div>
                </div>

                <h3>タンパク結合置換相互作用</h3>
                <p>2つの薬物が同一のタンパク結合部位を競合する場合、一方の薬物が他方を結合部位から<strong>置換（displacement）</strong>することがあります。置換された薬物の遊離型濃度は一時的に上昇します。</p>
                <div class="highlight-box">
                    <p><strong>臨床的重要性の再評価：</strong>かつてタンパク結合置換は重大な薬物相互作用の原因と考えられていましたが、現在では多くの場合、遊離型濃度の上昇は一過性であり、分布容積の増大とクリアランスの増加により速やかに新しい定常状態に達することが知られています。ただし、<strong>治療域が狭く、Vdが小さく、クリアランスが低い薬物</strong>（ワルファリン、フェニトインなど）では臨床的に注意が必要です。</p>
                </div>

                <h3>低アルブミン血症での影響</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>原因</h4>
                        <p>肝硬変（合成能低下）、ネフローゼ症候群（尿中喪失）、重症患者（異化亢進）、高齢者（合成能低下）、栄養不良など</p>
                    </div>
                    <div class="card">
                        <h4>影響</h4>
                        <p>アルブミン結合薬物の遊離型分率（fu）が増大。総濃度が低くても遊離型濃度は正常〜上昇していることがある。フェニトインでは遊離型濃度の測定やWinter-Tozer式による補正が臨床で用いられる。</p>
                    </div>
                </div>

                <table>
                    <tr><th>薬物</th><th>主な結合タンパク</th><th>結合率</th><th>臨床的注意点</th></tr>
                    <tr><td>ワルファリン</td><td>アルブミン</td><td>約99%</td><td>置換相互作用で出血リスク増大の可能性</td></tr>
                    <tr><td>フェニトイン</td><td>アルブミン</td><td>約90%</td><td>低アルブミン時は遊離型濃度測定が推奨</td></tr>
                    <tr><td>ジアゼパム</td><td>アルブミン</td><td>約98%</td><td>肝疾患で遊離型増加→鎮静作用増強</td></tr>
                    <tr><td>リドカイン</td><td>AAG</td><td>約70%</td><td>術後AAG上昇→結合率増加→遊離型低下</td></tr>
                    <tr><td>プロプラノロール</td><td>AAG</td><td>約90%</td><td>炎症でAAG変動→効果変動の可能性</td></tr>
                </table>`,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "血漿中で酸性薬物と主に結合するタンパク質はどれか？",
                    options: [
                        "α1-酸性糖タンパク質（AAG）",
                        "アルブミン（HSA）",
                        "グロブリン",
                        "フィブリノーゲン"
                    ],
                    answer: 1,
                    explanation: "アルブミン（HSA）は血漿中に最も豊富に存在するタンパク質で、主に酸性薬物と結合します。ワルファリンやフェニトインなどが代表例です。一方、塩基性薬物は主にα1-酸性糖タンパク質（AAG）と結合します。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "薬物の血漿タンパク結合に関する記述で正しいものはどれか？",
                    options: [
                        "結合型薬物が受容体に結合して薬効を発揮する",
                        "タンパク結合は不可逆的である",
                        "遊離型（非結合型）のみが薬効を示す",
                        "結合率が高いほど薬効が強い"
                    ],
                    answer: 2,
                    explanation: "遊離型（非結合型）のみが受容体に結合して薬効を発揮し、組織に分布し、代謝・排泄されます。タンパク結合は可逆的であり、結合型は薬物のリザーバー（貯蔵庫）として機能します。"
                },
                {
                    id: "q204_3",
                    type: "fill",
                    question: "遊離型分率（fu）が0.02の薬物の血漿タンパク結合率は＿＿%である。",
                    answer: "98",
                    explanation: "結合率 = 1 - fu = 1 - 0.02 = 0.98 = 98% です。fuが0.02ということは、総濃度のうちわずか2%が遊離型として存在し、残り98%がタンパク質に結合していることを意味します。"
                }
            ]
        }
    ]
};
