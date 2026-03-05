const LEVEL1_DATA = {
    id: 1,
    title: "薬物動態の基礎概念",
    icon: "🧪",
    description: "薬物動態学の基本概念とADMEの全体像を理解する",
    modules: [
        {
            id: 101,
            title: "薬物動態学（PK）とは",
            duration: "15分",
            content: `<h2>薬物動態学（Pharmacokinetics）とは</h2>
                <p>薬物動態学（Pharmacokinetics; PK）とは、<strong>生体が薬物に対して何をするか</strong>を研究する学問です。薬物が体内に投与されてから排泄されるまでの一連の過程――吸収・分布・代謝・排泄（ADME）を定量的に解析します。</p>

                <h3>PKとPDの違い</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>薬物動態学（PK）</h4>
                        <p><strong>「体が薬にすること」</strong></p>
                        <p>薬物の体内での濃度変化を時間経過とともに追跡。吸収・分布・代謝・排泄の各過程を定量的に記述する。</p>
                    </div>
                    <div class="card">
                        <h4>薬力学（PD）</h4>
                        <p><strong>「薬が体にすること」</strong></p>
                        <p>薬物が受容体や標的分子に作用し、薬理効果や副作用を引き起こすメカニズムと効果の強度を研究する。</p>
                    </div>
                </div>

                <h3>PKが重要な理由</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>適切な用量設定</strong>薬物の血中濃度を治療域に維持するための投与量を科学的に決定できる。過少投与による効果不足や過量投与による毒性を回避する基盤となる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>最適な投与間隔の決定</strong>薬物の消失速度（半減期）に基づき、効果を持続させるための投与スケジュールを設計できる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>安全性の確保</strong>血中濃度が中毒域に入らないよう管理し、副作用リスクを最小化する。TDM（治療薬物モニタリング）の科学的基盤となる。</div>
                    </div>
                </div>

                <h3>PK/PD関係の基礎概念</h3>
                <p>PKとPDを統合的に理解することで、<strong>「どの用量を、どの間隔で投与すれば、最適な効果が得られるか」</strong>を予測できます。PK/PD解析は新薬開発において用量選択や投与レジメン設計の根幹をなします。</p>
                <div class="highlight-box">
                    <p><strong>重要ポイント：</strong>PKは「濃度の時間推移」を、PDは「濃度と効果の関係」を扱う。PK/PD統合モデルにより、投与量から効果を予測することが可能になる。</p>
                </div>

                <h3>薬物動態学の歴史と発展</h3>
                <table>
                    <tr><th>年代</th><th>主な進歩</th></tr>
                    <tr><td>1930年代</td><td>Teorellが薬物動態の数学的モデルを初めて提唱</td></tr>
                    <tr><td>1950〜60年代</td><td>コンパートメントモデルの確立、Nelson、Wagner らによる理論体系化</td></tr>
                    <tr><td>1970年代</td><td>ノンコンパートメント解析（NCA）の発展、TDMの臨床応用開始</td></tr>
                    <tr><td>1980〜90年代</td><td>母集団薬物動態（PopPK）解析、NONMEMの普及</td></tr>
                    <tr><td>2000年代以降</td><td>PBPKモデル、モデル情報に基づく創薬（MIDD）、規制科学への応用</td></tr>
                </table>`,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "薬物動態学（PK）が扱う内容として正しいものはどれか？",
                    options: [
                        "薬物が受容体に結合するメカニズム",
                        "薬物の体内での吸収・分布・代謝・排泄の過程",
                        "薬物の化学合成プロセス",
                        "薬物の薬理作用の強度"
                    ],
                    answer: 1,
                    explanation: "PKは「体が薬にすること」を扱い、ADME（吸収・分布・代謝・排泄）の各過程を定量的に解析する学問です。受容体結合や薬理作用の強度はPD（薬力学）の領域です。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "「薬が体にすること」を研究する学問分野はどれか？",
                    options: [
                        "薬物動態学（Pharmacokinetics）",
                        "薬力学（Pharmacodynamics）",
                        "薬剤学（Pharmaceutics）",
                        "毒性学（Toxicology）"
                    ],
                    answer: 1,
                    explanation: "「薬が体にすること」は薬力学（PD）の定義です。一方「体が薬にすること」が薬物動態学（PK）です。この区別はPK/PD理解の基礎となります。"
                },
                {
                    id: "q101_3",
                    type: "fill",
                    question: "PKが臨床で重要な理由の一つとして、薬物の血中濃度を適切な範囲に管理する＿＿＿（アルファベット3文字）が挙げられる。",
                    answer: "TDM",
                    explanation: "TDM（Therapeutic Drug Monitoring; 治療薬物モニタリング）は、血中薬物濃度を測定し、個々の患者に最適な投与設計を行う臨床手法で、PKの知識が基盤となっています。"
                }
            ]
        },
        {
            id: 102,
            title: "ADMEの概要",
            duration: "15分",
            content: `<h2>ADME — 薬物の体内動態の4つのプロセス</h2>
                <p>薬物が体内に入ってから排泄されるまでの過程は、<strong>ADME</strong>の4文字で表されます。これは薬物動態学の中核的フレームワークです。</p>

                <h3>ADMEの全体像</h3>
                <table>
                    <tr><th>プロセス</th><th>英語</th><th>概要</th><th>主要な臓器・部位</th></tr>
                    <tr><td><strong>吸収</strong></td><td>Absorption</td><td>投与部位から血液循環への薬物の移行</td><td>消化管（経口）、肺、皮膚</td></tr>
                    <tr><td><strong>分布</strong></td><td>Distribution</td><td>血液から組織・臓器への薬物の移行</td><td>血漿、組織間液、細胞内</td></tr>
                    <tr><td><strong>代謝</strong></td><td>Metabolism</td><td>薬物の化学的変換（主に不活化）</td><td>肝臓（CYP酵素）、腸管壁</td></tr>
                    <tr><td><strong>排泄</strong></td><td>Excretion</td><td>薬物およびその代謝物の体外への排出</td><td>腎臓、胆汁、肺</td></tr>
                </table>

                <h3>薬物の体内動態の流れ</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>投与（Administration）</strong>薬物が経口、注射、経皮などの経路で体内に投与される。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>吸収（Absorption）</strong>投与部位から血液循環系へ薬物が移行する。経口投与では消化管粘膜を通過し、門脈血中に入る。静脈内投与では吸収過程を経ない。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>分布（Distribution）</strong>血流に乗った薬物が全身の組織・臓器へ移行する。血漿タンパク結合と遊離型のバランスが分布を左右する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>代謝（Metabolism）</strong>主に肝臓で薬物が化学的に変換される。第I相反応（酸化・還元・加水分解）と第II相反応（抱合）がある。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">5</div>
                        <div class="step-content"><strong>排泄（Excretion）</strong>未変化体や代謝物が尿、胆汁、呼気などを通じて体外へ排出される。</div>
                    </div>
                </div>

                <h3>各ADMEプロセスに影響する因子</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>吸収に影響する因子</h4>
                        <p>薬物の溶解性・膜透過性、消化管pH、胃排出速度、食事の影響、トランスポーター（P-gpなど）</p>
                    </div>
                    <div class="card">
                        <h4>分布に影響する因子</h4>
                        <p>血漿タンパク結合率、組織血流量、薬物の脂溶性、血液脳関門（BBB）、胎盤関門、分布容積（Vd）</p>
                    </div>
                    <div class="card">
                        <h4>代謝に影響する因子</h4>
                        <p>CYP酵素の発現量・活性、遺伝的多型、薬物相互作用（阻害・誘導）、肝血流量、肝機能</p>
                    </div>
                    <div class="card">
                        <h4>排泄に影響する因子</h4>
                        <p>腎血流量・GFR、尿細管分泌・再吸収、尿pH、胆汁排泄能、腎機能障害の有無</p>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>重要ポイント：</strong>ADMEの各プロセスは独立ではなく、互いに密接に関連しています。例えば、代謝が速い薬物は血中濃度の低下も速く、分布や効果持続時間に影響します。ADMEを統合的に理解することが、PKの基本です。</p>
                </div>`,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "ADMEの「M」が表すプロセスはどれか？",
                    options: [
                        "Membrane transport（膜輸送）",
                        "Metabolism（代謝）",
                        "Modulation（調節）",
                        "Migration（遊走）"
                    ],
                    answer: 1,
                    explanation: "ADMEはAbsorption（吸収）、Distribution（分布）、Metabolism（代謝）、Excretion（排泄）の頭文字です。Mは Metabolism（代謝）を表し、主に肝臓で行われる薬物の化学的変換を指します。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "薬物の代謝が主に行われる臓器はどれか？",
                    options: [
                        "腎臓",
                        "肝臓",
                        "肺",
                        "脾臓"
                    ],
                    answer: 1,
                    explanation: "薬物代謝は主に肝臓で行われます。肝臓にはCYP450酵素群をはじめとする多数の代謝酵素が豊富に発現しており、第I相反応と第II相反応を担っています。"
                },
                {
                    id: "q102_3",
                    type: "fill",
                    question: "薬物代謝における第I相反応の主要な酵素群は＿＿＿（アルファベット）である。",
                    answer: "CYP450",
                    explanation: "CYP450（チトクロームP450）は肝臓のミクロソーム画分に存在する酸化酵素群で、薬物代謝の第I相反応（酸化・還元・加水分解）の中心的役割を果たします。CYP3A4、CYP2D6、CYP2C9などのサブタイプがあります。"
                }
            ]
        },
        {
            id: 103,
            title: "薬物の投与経路",
            duration: "12分",
            content: `<h2>薬物の投与経路</h2>
                <p>薬物の投与経路は、薬物が体内に入る方法を決定し、<strong>吸収速度、バイオアベイラビリティ、効果発現までの時間</strong>に大きく影響します。臨床では目的に応じて最適な投与経路が選択されます。</p>

                <h3>主要な投与経路</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>経口投与（PO）</h4>
                        <p>最も一般的で簡便な投与経路。消化管から吸収され、門脈を経て肝臓を通過する（初回通過効果を受ける）。患者のコンプライアンスが高いが、吸収に個人差がある。</p>
                    </div>
                    <div class="card">
                        <h4>静脈内投与（IV）</h4>
                        <p>薬物を直接静脈に投与。吸収過程がなく、バイオアベイラビリティは100%。迅速かつ正確な血中濃度の制御が可能。緊急時や正確な用量が必要な場合に使用。</p>
                    </div>
                    <div class="card">
                        <h4>筋肉内投与（IM）</h4>
                        <p>筋肉組織に注射。毛細血管が豊富なため比較的速やかに吸収。水溶液は速く、油性懸濁液はデポ剤として徐放的に吸収される。</p>
                    </div>
                    <div class="card">
                        <h4>皮下投与（SC）</h4>
                        <p>皮下組織に注射。IMよりやや吸収が遅い。インスリンやヘパリンなど自己注射が可能で、持続的な吸収が得られる。</p>
                    </div>
                </div>

                <h3>その他の投与経路</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>経皮投与（Transdermal）</strong>パッチ剤などを用いて皮膚を通して薬物を全身循環に送達する。初回通過効果を回避でき、持続的な薬物放出が可能。例：ニコチンパッチ、フェンタニルパッチ。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>吸入投与（Inhalation）</strong>薬物を気体やエアロゾルとして肺から吸収。肺は表面積が大きく血流も豊富なため、速やかな吸収が得られる。例：喘息治療薬、吸入麻酔薬。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>舌下投与（Sublingual）</strong>舌の下に薬物を置き、口腔粘膜から吸収。門脈を経由しないため初回通過効果を回避。効果発現が速い。例：ニトログリセリン舌下錠。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>直腸投与（Rectal）</strong>坐薬として直腸粘膜から吸収。嘔吐時や意識障害時に有用。下直腸静脈から吸収される分は初回通過効果を部分的に回避できる。</div>
                    </div>
                </div>

                <h3>各投与経路の特徴比較</h3>
                <table>
                    <tr><th>投与経路</th><th>バイオアベイラビリティ</th><th>効果発現速度</th><th>利便性</th><th>初回通過効果</th></tr>
                    <tr><td>経口（PO）</td><td>5〜100%（薬物により異なる）</td><td>30分〜2時間</td><td>◎ 最も簡便</td><td>あり</td></tr>
                    <tr><td>静脈内（IV）</td><td>100%</td><td>即時（秒〜分）</td><td>△ 医療従事者が必要</td><td>なし</td></tr>
                    <tr><td>筋肉内（IM）</td><td>75〜100%</td><td>10〜30分</td><td>△ 注射が必要</td><td>なし</td></tr>
                    <tr><td>皮下（SC）</td><td>75〜100%</td><td>15〜30分</td><td>○ 自己注射可能</td><td>なし</td></tr>
                    <tr><td>舌下（SL）</td><td>高い（薬物による）</td><td>1〜5分</td><td>○ 簡便</td><td>回避</td></tr>
                    <tr><td>経皮（TD）</td><td>低〜中</td><td>数時間</td><td>○ パッチ貼付</td><td>回避</td></tr>
                    <tr><td>吸入（INH）</td><td>高い（局所作用）</td><td>数分</td><td>○ 自己投与可能</td><td>回避</td></tr>
                    <tr><td>直腸（PR）</td><td>30〜80%</td><td>15〜30分</td><td>△ 不快感あり</td><td>部分的回避</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>投与経路の選択基準：</strong>目的（局所か全身か）、必要な効果発現速度、薬物の物理化学的性質（安定性、溶解性）、患者の状態（意識、消化管機能）、コンプライアンス、初回通過効果の影響などを総合的に判断して決定します。</p>
                </div>`,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "バイオアベイラビリティが必ず100%となる投与経路はどれか？",
                    options: [
                        "経口投与",
                        "静脈内投与",
                        "筋肉内投与",
                        "舌下投与"
                    ],
                    answer: 1,
                    explanation: "静脈内投与（IV）では薬物が直接血液循環系に入るため、吸収過程がなく、バイオアベイラビリティは定義上100%です。他の投与経路では吸収過程で薬物の一部が失われる可能性があります。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "初回通過効果を回避できる投与経路の組み合わせとして正しいものはどれか？",
                    options: [
                        "経口投与と筋肉内投与",
                        "舌下投与と経皮投与",
                        "経口投与と舌下投与",
                        "経口投与と直腸投与"
                    ],
                    answer: 1,
                    explanation: "舌下投与は口腔粘膜から直接体循環に吸収され、経皮投与は皮膚から直接体循環に入るため、いずれも門脈経由の初回通過効果を回避できます。経口投与は門脈→肝臓を経由するため初回通過効果を受けます。"
                },
                {
                    id: "q103_3",
                    type: "fill",
                    question: "薬物を直接静脈に投与する方法を＿＿投与（アルファベット2文字）という。",
                    answer: "IV",
                    explanation: "IV（Intravenous）投与は静脈内投与を意味します。薬物が直接血中に入るため、吸収過程を経ずに即座に全身循環に到達し、最も速やかな効果発現が得られます。"
                }
            ]
        },
        {
            id: 104,
            title: "PK/PD関係の基礎",
            duration: "15分",
            content: `<h2>PK/PD関係の基礎</h2>
                <p>PK（薬物動態学）とPD（薬力学）を統合することで、<strong>投与量→血中濃度→効果</strong>の一連の関係を定量的に理解できます。この章では、その基礎となる概念を学びます。</p>

                <h3>血中濃度-時間曲線の基本</h3>
                <p>薬物を投与すると、血中濃度は時間とともに変化します。この変化をプロットしたものが<strong>血中濃度-時間曲線</strong>です。</p>
                <table>
                    <tr><th>パラメータ</th><th>記号</th><th>説明</th></tr>
                    <tr><td>最高血中濃度</td><td>Cmax</td><td>血中濃度の最大値</td></tr>
                    <tr><td>最高血中濃度到達時間</td><td>Tmax</td><td>Cmaxに達するまでの時間</td></tr>
                    <tr><td>血中濃度-時間曲線下面積</td><td>AUC</td><td>薬物への全身曝露量を反映</td></tr>
                    <tr><td>消失半減期</td><td>t1/2</td><td>血中濃度が半分になるまでの時間</td></tr>
                </table>

                <h3>濃度と効果の関係（Emaxモデル）</h3>
                <p>薬物濃度と効果の関係は、多くの場合<strong>Emaxモデル（最大効果モデル）</strong>で記述されます。</p>
                <div class="highlight-box">
                    <p><strong>Emaxモデルの式：</strong>E = Emax × C / (EC50 + C)</p>
                    <p>E: 効果、Emax: 最大効果、C: 薬物濃度、EC50: 最大効果の50%を生じる濃度</p>
                </div>
                <p>濃度が低いとき効果はほぼ直線的に増加し、濃度が高くなると効果は飽和に近づきます（S字型のシグモイド曲線）。</p>

                <h3>治療域（Therapeutic Window）の概念</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>最小有効濃度（MEC）</strong>治療効果が発現する最低限の血中濃度。この濃度以下では十分な薬効が得られない。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>最小中毒濃度（MTC）</strong>毒性・重大な副作用が出現し始める血中濃度。この濃度以上では安全性が損なわれる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>治療域（Therapeutic Window）</strong>MECとMTCの間の濃度範囲。この範囲内に血中濃度を維持することが投与設計の目標となる。</div>
                    </div>
                </div>

                <h3>治療係数（Therapeutic Index）</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>治療係数の定義</h4>
                        <p><strong>TI = TD50 / ED50</strong></p>
                        <p>TD50（50%の対象に毒性が出る用量）をED50（50%の対象に有効な用量）で割った値。TIが大きいほど安全域が広い。</p>
                    </div>
                    <div class="card">
                        <h4>治療係数の実例</h4>
                        <p><strong>TIが小さい（安全域が狭い）薬物：</strong>ワルファリン、ジゴキシン、リチウム、テオフィリン、フェニトイン→ TDMが必要</p>
                        <p><strong>TIが大きい（安全域が広い）薬物：</strong>ペニシリン系抗菌薬など</p>
                    </div>
                </div>

                <h3>用量-反応曲線の基本</h3>
                <p>用量-反応曲線は、投与量と薬理効果の関係を示すグラフです。横軸に用量（対数スケール）、縦軸に反応（%）をプロットすると、一般的にS字型（シグモイド型）の曲線が得られます。</p>
                <table>
                    <tr><th>パラメータ</th><th>説明</th></tr>
                    <tr><td>ED50</td><td>最大効果の50%が得られる用量。薬物の力価（potency）の指標</td></tr>
                    <tr><td>Emax</td><td>その薬物で到達可能な最大効果。薬物の有効性（efficacy）の指標</td></tr>
                    <tr><td>Hill係数（γ）</td><td>用量-反応曲線の傾き。値が大きいほど、狭い濃度範囲で急激に効果が変化する</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>重要ポイント：</strong>治療域の狭い薬物では、わずかな用量や濃度の変化が効果不足や毒性につながるため、TDM（治療薬物モニタリング）による血中濃度管理が極めて重要です。</p>
                </div>`,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "Emaxモデルにおいて、EC50が表すものはどれか？",
                    options: [
                        "薬物の最大効果",
                        "最大効果の50%を生じる濃度",
                        "治療域の上限濃度",
                        "薬物の消失半減期"
                    ],
                    answer: 1,
                    explanation: "EC50（Concentration for 50% of maximal Effect）は、最大効果（Emax）の50%を生じる薬物濃度です。薬物の力価（potency）の指標として用いられます。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "治療域（Therapeutic Window）の定義として正しいものはどれか？",
                    options: [
                        "投与後の血中濃度がゼロになるまでの時間範囲",
                        "最小有効濃度（MEC）と最小中毒濃度（MTC）の間の濃度範囲",
                        "薬物の吸収が行われる時間範囲",
                        "薬物が代謝される濃度範囲"
                    ],
                    answer: 1,
                    explanation: "治療域はMEC（最小有効濃度）からMTC（最小中毒濃度）の間の血中濃度範囲です。この範囲内に血中濃度を維持することで、有効性を確保しつつ毒性を回避できます。"
                },
                {
                    id: "q104_3",
                    type: "fill",
                    question: "治療係数（TI）は＿＿＿ / ED50 で求められる。",
                    answer: "TD50",
                    explanation: "治療係数（Therapeutic Index）= TD50 / ED50 です。TD50は50%の対象に毒性が出る用量、ED50は50%の対象に有効な用量です。TIが大きいほど安全域が広いことを意味します。"
                }
            ]
        }
    ]
};
