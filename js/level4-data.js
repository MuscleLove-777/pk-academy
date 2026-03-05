const LEVEL4_DATA = {
    id: 4,
    title: "PKパラメータと解析",
    icon: "📐",
    description: "AUC・Cmax・半減期など主要PKパラメータの計算法、コンパートメントモデル、反復投与設計、PBPKモデルまで体系的に学ぶ",
    modules: [
        {
            id: 401,
            title: "主要PKパラメータ",
            duration: "15分",
            content: `<h2>主要PKパラメータ</h2>
                <p>薬物動態学では、血中濃度-時間曲線（Concentration-Time Profile）から得られる各種パラメータを用いて、薬物の体内動態を定量的に評価します。これらのPKパラメータは、<strong>用量設計、製剤評価、生物学的同等性試験</strong>において中心的な役割を果たします。</p>

                <h3>血中濃度-時間曲線の読み方</h3>
                <div class="highlight-box">
                    <p><strong>横軸：</strong>投与後の時間（hours）。<strong>縦軸：</strong>血漿中薬物濃度（ng/mL, μg/mL等）。経口投与後の曲線は、吸収相（濃度上昇）→ ピーク → 消失相（濃度下降）の3段階を示す。静脈内投与では吸収相がなく、投与直後から消失相が始まる。</p>
                </div>

                <h3>主要パラメータの定義</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>AUC（Area Under the Curve / 曲線下面積）</h4>
                        <p>血中濃度-時間曲線と時間軸で囲まれた面積。<strong>全身曝露量（systemic exposure）</strong>の指標。AUCが大きいほど薬物への曝露が多い。単位は ng・h/mL 等。AUC<sub>0-t</sub>（0から最終測定時間まで）とAUC<sub>0-∞</sub>（無限大まで外挿）がある。</p>
                    </div>
                    <div class="card">
                        <h4>Cmax（最高血中濃度）</h4>
                        <p>血中濃度の<strong>最大値</strong>。有効性（治療域に到達するか）および安全性（中毒域に達しないか）の両面で重要な指標。製剤間比較や生物学的同等性試験の評価項目となる。</p>
                    </div>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <h4>Tmax（最高血中濃度到達時間）</h4>
                        <p>薬物投与後、血中濃度がCmaxに達するまでの時間。<strong>吸収速度の指標</strong>。Tmaxが短いほど吸収が速い。作用発現の速さと関連する。経口投与における製剤特性を反映する。</p>
                    </div>
                    <div class="card">
                        <h4>消失半減期（t<sub>1/2</sub>）</h4>
                        <p>血中濃度が<strong>半分に低下するのに要する時間</strong>。投与間隔の設定に直結する最も重要なパラメータの一つ。1次速度過程に従う場合、半減期は濃度によらず一定である。</p>
                    </div>
                </div>

                <h3>消失半減期の計算</h3>
                <div class="highlight-box">
                    <p><strong>半減期の基本式：</strong></p>
                    <p>t<sub>1/2</sub> = 0.693 / k<sub>e</sub></p>
                    <p>k<sub>e</sub>: 消失速度定数（elimination rate constant）。片対数グラフの消失相の傾きから求められる。</p>
                    <p><strong>クリアランスと分布容積との関係：</strong></p>
                    <p>t<sub>1/2</sub> = 0.693 × V<sub>d</sub> / CL</p>
                    <p>半減期はV<sub>d</sub>（分布容積）とCL（クリアランス）の両方に依存する。CLが大きいほど、またV<sub>d</sub>が小さいほど半減期は短くなる。</p>
                </div>

                <h3>半減期の臨床的意義</h3>
                <table>
                    <tr><th>半減期の経過数</th><th>残存濃度</th><th>臨床的意義</th></tr>
                    <tr><td>1 t<sub>1/2</sub></td><td>50%</td><td>濃度が半減</td></tr>
                    <tr><td>2 t<sub>1/2</sub></td><td>25%</td><td>4分の1に低下</td></tr>
                    <tr><td>3 t<sub>1/2</sub></td><td>12.5%</td><td>おおよそ消失</td></tr>
                    <tr><td>4 t<sub>1/2</sub></td><td>6.25%</td><td>ほぼ体内から消失</td></tr>
                    <tr><td>5 t<sub>1/2</sub></td><td>3.125%</td><td>実質的に完全消失（約97%消失）</td></tr>
                </table>

                <h3>各パラメータの臨床的意義まとめ</h3>
                <table>
                    <tr><th>パラメータ</th><th>意味</th><th>主な用途</th></tr>
                    <tr><td><strong>AUC</strong></td><td>全身曝露量</td><td>生物学的同等性（BE）評価、用量比例性の検討、薬物相互作用評価</td></tr>
                    <tr><td><strong>Cmax</strong></td><td>最高血中濃度</td><td>安全性評価、BE評価、有効治療域との比較</td></tr>
                    <tr><td><strong>Tmax</strong></td><td>吸収速度の指標</td><td>製剤比較、速効性評価、食事影響評価</td></tr>
                    <tr><td><strong>t<sub>1/2</sub></strong></td><td>消失の速さ</td><td>投与間隔の設定、定常状態到達時間の予測、薬物残留期間の推定</td></tr>
                </table>`,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "AUC（曲線下面積）が示す薬物動態学的な意味として最も適切なものはどれか？",
                    options: ["薬物の最高血中濃度","薬物の全身曝露量（systemic exposure）","薬物の吸収速度","薬物の排泄速度"],
                    answer: 1,
                    explanation: "AUCは血中濃度-時間曲線の下の面積であり、薬物の全身曝露量（systemic exposure）の指標です。生物学的同等性試験、用量比例性の検討、薬物相互作用の評価などに使用されます。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "反復投与において、薬物が体内からほぼ完全に消失する（約97%消失）のに必要な半減期の回数はいくつか？",
                    options: ["2回","3回","5回","10回"],
                    answer: 2,
                    explanation: "半減期5回で薬物の約97%（= 1 - 0.5^5 = 1 - 0.03125）が消失します。同様に、反復投与で定常状態に達するのも約5半減期を要します。これは投与間隔の設定や休薬期間の決定に重要な指針です。"
                },
                {
                    id: "q401_3",
                    type: "fill",
                    question: "消失半減期の計算式は t1/2 = 0.693 / ＿＿ である。",
                    answer: "ke",
                    explanation: "t1/2 = 0.693 / ke（keは消失速度定数 elimination rate constant）です。0.693はln(2)の値で、1次速度過程において濃度が半分になる条件から導出されます。keは片対数グラフの消失相の傾きから求められます。"
                }
            ]
        },
        {
            id: 402,
            title: "クリアランスと分布容積",
            duration: "15分",
            content: `<h2>クリアランスと分布容積</h2>
                <p>クリアランス（CL）と分布容積（V<sub>d</sub>）は、薬物動態学における最も基本的な<strong>一次パラメータ（primary parameters）</strong>です。半減期はこれら2つのパラメータから派生する二次パラメータであり、CLとV<sub>d</sub>を理解することが定量的PKの基盤となります。</p>

                <h3>クリアランス（CL）の定義</h3>
                <div class="highlight-box">
                    <p><strong>クリアランス =「単位時間あたりに薬物が完全に除去される血漿の体積」</strong></p>
                    <p>単位は mL/min または L/h。薬物の体からの除去効率を表す。CLは体内からの薬物除去能力の指標であり、「薬物がどのくらい速く体から消えるか」を示す。</p>
                </div>

                <h3>全身クリアランスの構成</h3>
                <p>全身クリアランス（CL<sub>total</sub>）は、各臓器のクリアランスの総和です。</p>
                <table>
                    <tr><th>構成要素</th><th>記号</th><th>内容</th></tr>
                    <tr><td><strong>肝クリアランス</strong></td><td>CL<sub>H</sub></td><td>肝臓での代謝と胆汁排泄。多くの薬物で最大の寄与</td></tr>
                    <tr><td><strong>腎クリアランス</strong></td><td>CL<sub>R</sub></td><td>糸球体ろ過、尿細管分泌、尿細管再吸収の総合</td></tr>
                    <tr><td><strong>その他</strong></td><td>CL<sub>other</sub></td><td>肺、腸管、血漿エステラーゼ等による代謝</td></tr>
                </table>
                <p><strong>CL<sub>total</sub> = CL<sub>H</sub> + CL<sub>R</sub> + CL<sub>other</sub></strong></p>

                <h3>クリアランスの計算</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>静脈内投与（IV）の場合</h4>
                        <p><strong>CL = Dose / AUC<sub>0-∞</sub></strong></p>
                        <p>静脈内投与では薬物が100%全身循環に到達する（F = 1）ため、投与量をAUCで割るだけで算出できる。</p>
                    </div>
                    <div class="card">
                        <h4>経口投与（PO）の場合</h4>
                        <p><strong>CL/F = Dose / AUC<sub>0-∞</sub></strong></p>
                        <p>経口投与ではバイオアベイラビリティ（F）を考慮する必要があるため、見かけのクリアランス（CL/F）が得られる。Fが既知であれば CL = F × Dose / AUC で算出可能。</p>
                    </div>
                </div>

                <h3>肝クリアランスの分類</h3>
                <p>肝クリアランスは、肝血流量（Q<sub>H</sub> ≈ 1500 mL/min）と肝抽出率（E<sub>H</sub>）の関係で大きく2つに分類されます。</p>
                <table>
                    <tr><th>分類</th><th>肝抽出率</th><th>律速因子</th><th>特徴</th><th>代表薬</th></tr>
                    <tr><td><strong>高抽出率薬物</strong></td><td>E<sub>H</sub> > 0.7</td><td>肝血流量（CL<sub>H</sub> ≈ Q<sub>H</sub>）</td><td>血流律速。肝血流の変化で代謝が変動。初回通過効果が大きい</td><td>リドカイン、プロプラノロール、モルヒネ、ベラパミル</td></tr>
                    <tr><td><strong>低抽出率薬物</strong></td><td>E<sub>H</sub> < 0.3</td><td>酵素活性と遊離型分率（CL<sub>H</sub> ≈ f<sub>u</sub> × CL<sub>int</sub>）</td><td>酵素律速。酵素誘導/阻害やタンパク結合の変化で代謝が変動</td><td>ワルファリン、ジアゼパム、フェニトイン、テオフィリン</td></tr>
                </table>

                <h3>分布容積の復習と応用</h3>
                <p>分布容積（V<sub>d</sub>）は、薬物が体内に均一に分布したと仮定した場合の「見かけの容積」です。</p>
                <div class="highlight-box">
                    <p><strong>V<sub>d</sub> = 体内薬物量 / 血漿中濃度</strong></p>
                    <p>V<sub>d</sub>が大きいほど組織への分布が広範。V<sub>d</sub>が体液量を超える場合は、薬物が組織に広く分布していることを意味する（実際の体積ではなく「見かけ」の値）。負荷投与量（loading dose）の計算に使用：<strong>Loading Dose = V<sub>d</sub> × 目標濃度</strong></p>
                </div>

                <h3>定常状態（Steady State）の概念</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>定常状態とは</h4>
                        <p>反復投与や持続点滴において、<strong>投与速度 = 消失速度</strong>となった状態。体内薬物量が一定に保たれる。定常状態到達には約<strong>5半減期</strong>を要する。</p>
                    </div>
                    <div class="card">
                        <h4>定常状態濃度（Css）</h4>
                        <p>持続点滴時の定常状態濃度：<strong>Css = 投与速度（R<sub>0</sub>）/ CL</strong><br>反復経口投与時の平均定常状態濃度：<strong>Css,avg = F × Dose / (CL × τ)</strong><br>τ: 投与間隔</p>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "クリアランス（CL）の定義として最も正確なものはどれか？",
                    options: ["薬物が体内から完全に消失するまでの時間","単位時間あたりに薬物が完全に除去される血漿の体積","薬物が分布する組織の体積","薬物が代謝される速度定数"],
                    answer: 1,
                    explanation: "クリアランスは「単位時間あたりに薬物が完全に除去される血漿の体積」と定義されます（単位：mL/min, L/h）。薬物除去効率の指標であり、半減期とは異なり「消失にかかる時間」ではありません。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "肝抽出率が高い薬物（E > 0.7）の肝クリアランスに最も影響する因子はどれか？",
                    options: ["タンパク結合率の変動","肝代謝酵素の阻害","肝血流量の変動","腎機能の変化"],
                    answer: 2,
                    explanation: "高抽出率薬物の肝クリアランスは肝血流量に律速されます（CLH ≈ QH）。つまり、うっ血性心不全や肝硬変などで肝血流が低下すると、クリアランスが大きく影響を受けます。一方、低抽出率薬物は酵素活性とタンパク結合に依存します。"
                },
                {
                    id: "q402_3",
                    type: "fill",
                    question: "持続静脈点滴時の定常状態濃度（Css）は、投与速度を＿＿＿で割って求められる。",
                    answer: "CL",
                    explanation: "Css = R0（投与速度）/ CL（クリアランス）で求められます。CLが大きいほど定常状態濃度は低くなり、より速い投与速度が必要になります。定常状態に到達するまでには約5半減期を要します。"
                }
            ]
        },
        {
            id: 403,
            title: "線形・非線形薬物動態",
            duration: "15分",
            content: `<h2>線形・非線形薬物動態</h2>
                <p>薬物動態が<strong>線形</strong>か<strong>非線形</strong>かは、用量設計と臨床管理において極めて重要な概念です。大部分の薬物は治療用量域で線形動態を示しますが、一部の重要な薬物は非線形動態を示し、特別な注意が必要です。</p>

                <h3>線形薬物動態（1次速度過程）</h3>
                <div class="highlight-box">
                    <p><strong>線形動態の核心：</strong>薬物の消失速度がその時点の濃度に<strong>比例</strong>する。- dC/dt = k<sub>e</sub> × C。消失速度定数（k<sub>e</sub>）と半減期は用量に依存せず一定。AUCは用量に比例して増加する。用量を2倍にすれば血中濃度も2倍になる（比例関係）。</p>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <h4>線形動態の特徴</h4>
                        <p>(1) AUCが投与量に比例して増加<br>(2) 半減期が投与量によらず一定<br>(3) 消失速度が濃度に比例<br>(4) クリアランスが一定<br>(5) <strong>重ね合わせの原理</strong>が成立する</p>
                    </div>
                    <div class="card">
                        <h4>臨床的利点</h4>
                        <p>線形動態を示す薬物では、用量調整が直感的で予測可能。ある用量でのPKデータから、他の用量での血中濃度を容易に予測できる。大部分の薬物は治療用量域で線形動態に従う。</p>
                    </div>
                </div>

                <h3>非線形薬物動態</h3>
                <p>投与量やその時点の濃度に対して、PKパラメータが一定でなくなる動態です。主に<strong>代謝酵素の飽和</strong>や<strong>トランスポーターの飽和</strong>が原因です。</p>

                <h3>Michaelis-Menten型動態</h3>
                <div class="highlight-box">
                    <p><strong>代謝速度の式：</strong></p>
                    <p>v = V<sub>max</sub> × C / (K<sub>m</sub> + C)</p>
                    <p><strong>V<sub>max</sub>：</strong>最大代謝速度。酵素が完全に飽和した時の最大反応速度。</p>
                    <p><strong>K<sub>m</sub>：</strong>Michaelis定数。代謝速度がV<sub>max</sub>の半分になる濃度。K<sub>m</sub>が小さいほど酵素の親和性が高い。</p>
                    <p>C ≪ K<sub>m</sub> のとき → v ≈ (V<sub>max</sub>/K<sub>m</sub>) × C（1次速度、線形）</p>
                    <p>C ≫ K<sub>m</sub> のとき → v ≈ V<sub>max</sub>（0次速度、非線形、飽和状態）</p>
                </div>

                <h3>非線形動態を示す代表的薬物</h3>
                <table>
                    <tr><th>薬物</th><th>非線形の原因</th><th>臨床的影響</th></tr>
                    <tr><td><strong>フェニトイン</strong></td><td>CYP2C9/2C19の飽和</td><td>治療域付近で代謝が飽和。用量のわずかな増加で血中濃度が急激に上昇し中毒域に達する危険性が高い。TDM必須</td></tr>
                    <tr><td><strong>エタノール</strong></td><td>ADH（アルコール脱水素酵素）の飽和</td><td>血中濃度が一定速度で直線的に低下する（0次消失）。体重70kgで約7-10 g/h</td></tr>
                    <tr><td><strong>サリチル酸（高用量時）</strong></td><td>グリシン抱合の飽和</td><td>高用量で消失が遅延し蓄積する</td></tr>
                    <tr><td><strong>テオフィリン（高濃度時）</strong></td><td>CYP1A2の飽和</td><td>高濃度域で見かけの半減期が延長</td></tr>
                </table>

                <h3>線形と非線形の見分け方</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>用量比例性試験</strong>異なる用量でのAUCを比較する。AUCが用量に比例して増加すれば線形、比例関係から逸脱すれば非線形の可能性がある。AUC/Doseが一定かどうかで判定する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>半減期の用量依存性</strong>異なる用量で半減期を比較する。線形動態では半減期は一定だが、非線形動態（代謝飽和型）では用量増加に伴い見かけの半減期が延長する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>クリアランスの用量依存性</strong>CLが用量によらず一定であれば線形動態。用量増加に伴いCLが低下（代謝飽和）またはCLが増加（吸収の飽和）する場合は非線形動態。</div>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>臨床上の注意（フェニトイン）：</strong>フェニトインの治療域（10-20 μg/mL）付近ではすでに代謝酵素が飽和に近い状態にある。1日用量を300 mgから350 mgにわずか50 mg増量しただけで、血中濃度が10 μg/mLから25 μg/mL以上に跳ね上がることがある。TDM（治療薬物モニタリング）に基づく慎重な用量調整が不可欠である。</p>
                </div>`,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "線形薬物動態の特徴として正しいものはどれか？",
                    options: ["半減期が用量に依存して変化する","AUCが用量に比例して増加する","クリアランスが用量増加とともに低下する","代謝速度が一定（0次速度）である"],
                    answer: 1,
                    explanation: "線形薬物動態では、AUCは用量に比例して増加します。これは消失速度が濃度に比例する（1次速度過程）ためです。半減期とクリアランスは用量によらず一定であり、用量の予測が容易です。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "非線形薬物動態を示す薬物として最も代表的で、臨床上TDMが必須とされるものはどれか？",
                    options: ["アモキシシリン","フェニトイン","メトホルミン","アトルバスタチン"],
                    answer: 1,
                    explanation: "フェニトインは治療域付近でCYP2C9/2C19が飽和し、非線形動態を示す代表的薬物です。用量のわずかな増加で血中濃度が急激に上昇するため、TDMに基づく用量調整が必須です。"
                },
                {
                    id: "q403_3",
                    type: "fill",
                    question: "Michaelis-Menten型動態において、代謝速度がVmaxの半分になる濃度を＿＿＿と呼ぶ。",
                    answer: "Km",
                    explanation: "Km（Michaelis定数、ミカエリス定数）は、代謝速度がVmaxの半分（Vmax/2）になる薬物濃度です。Kmが小さいほど酵素の基質に対する親和性が高いことを意味します。C ≪ Kmで線形（1次）、C ≫ Kmで非線形（0次）の動態を示します。"
                }
            ]
        },
        {
            id: 404,
            title: "コンパートメントモデル",
            duration: "15分",
            content: `<h2>コンパートメントモデル</h2>
                <p>コンパートメントモデルは、体内の薬物動態を<strong>数学的に記述するためのモデル</strong>です。体を1つまたは複数の「箱（コンパートメント）」に見立て、薱物の移動を速度定数で表します。薬物動態データの解析と予測に広く使用されています。</p>

                <h3>1-コンパートメントモデル</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>モデルの仮定</h4>
                        <p>体全体を<strong>1つの均一な箱</strong>と仮定する。投与された薬物は瞬時に体内全体に均一に分布し、血漿中濃度が全身の薬物濃度を代表するとみなす。最も単純なモデル。</p>
                    </div>
                    <div class="card">
                        <h4>適用条件</h4>
                        <p>分布が非常に速い薬物や、分布相が無視できる薬物に適用される。血漿と組織間の平衡が速やかに達成される場合に妥当。水溶性の高い薬物に多い。</p>
                    </div>
                </div>

                <h3>1-コンパートメントモデル: 急速静注後</h3>
                <div class="highlight-box">
                    <p><strong>血中濃度の時間変化：</strong></p>
                    <p>C(t) = C<sub>0</sub> × e<sup>(-k<sub>e</sub> × t)</sup></p>
                    <p>C<sub>0</sub>: 投与直後の血中濃度（= Dose / V<sub>d</sub>）</p>
                    <p>k<sub>e</sub>: 消失速度定数</p>
                    <p><strong>片対数グラフ：</strong>ln C(t) = ln C<sub>0</sub> - k<sub>e</sub> × t となり、片対数グラフ上では<strong>直線</strong>（傾き = -k<sub>e</sub>）を示す。傾きからk<sub>e</sub>を、y切片からC<sub>0</sub>を求められる。</p>
                </div>

                <h3>2-コンパートメントモデル</h3>
                <p>体を<strong>2つのコンパートメント</strong>に分けて記述するモデルです。多くの薬物は1-コンパートメントモデルでは不十分で、このモデルが必要になります。</p>
                <table>
                    <tr><th>コンパートメント</th><th>構成</th><th>特徴</th></tr>
                    <tr><td><strong>中心コンパートメント</strong></td><td>血漿、心臓、肺、肝臓、腎臓など血流の豊富な臓器</td><td>薬物が速やかに分布する領域。血漿中濃度はこのコンパートメントの濃度を反映</td></tr>
                    <tr><td><strong>末梢コンパートメント</strong></td><td>筋肉、脂肪、皮膚、骨など血流が少ない組織</td><td>薬物の分布が遅い領域。中心コンパートメントとの間で平衡に時間を要する</td></tr>
                </table>

                <h3>2-コンパートメントモデルの2つの相</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">α</div>
                        <div class="step-content"><strong>α相（分布相 / Distribution Phase）</strong>急速静注後の初期に観察される急激な血中濃度低下。薬物が中心コンパートメントから末梢コンパートメントへ移行する過程を反映する。速度定数αは分布と消失の両方を含む。片対数グラフでは急な傾きとして現れる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">β</div>
                        <div class="step-content"><strong>β相（消失相 / Elimination Phase）</strong>分布平衡後に観察される緩やかな血中濃度低下。中心・末梢両コンパートメント間で薬物が平衡に達した後の、主に消失（代謝・排泄）を反映する相。消失半減期の計算にはβ相の傾きを使用する。片対数グラフでは緩やかな傾きとして現れる。</div>
                    </div>
                </div>

                <h3>2-コンパートメントモデルの血中濃度式</h3>
                <div class="highlight-box">
                    <p><strong>急速静注後の血中濃度：</strong></p>
                    <p>C(t) = A × e<sup>(-α × t)</sup> + B × e<sup>(-β × t)</sup></p>
                    <p>A, B: 係数（y切片）。α: 分布相の速度定数（α > β）。β: 消失相の速度定数。</p>
                    <p>片対数グラフでは<strong>バイエクスポネンシャル（二重指数関数）曲線</strong>となり、2本の直線成分に分離できる（残差法/feathering法）。</p>
                </div>

                <h3>モデル選択の基準</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>1-コンパートメントを選ぶ場合</h4>
                        <p>片対数グラフで血中濃度が<strong>単一の直線</strong>で低下する場合。分布が速く、分布相が実質的に観察されない場合。データの簡便な解析が求められる場合。パラメータ数が少なく、データが限られた状況に適する。</p>
                    </div>
                    <div class="card">
                        <h4>2-コンパートメントを選ぶ場合</h4>
                        <p>片対数グラフで<strong>2本の直線成分（二相性の低下）</strong>が明らかに観察される場合。脂溶性が高く組織への分布が遅い薬物。AIC（赤池情報量基準）やBICなどの統計的基準でモデル適合度を比較する。</p>
                    </div>
                </div>

                <h3>ノンコンパートメント解析（NCA）</h3>
                <p>NCA（Non-Compartmental Analysis）は、特定のコンパートメントモデルを仮定せずにPKパラメータを算出する手法です。</p>
                <table>
                    <tr><th>特徴</th><th>内容</th></tr>
                    <tr><td><strong>原理</strong></td><td>統計的モーメント理論に基づき、AUCやAUMC（曲線下モーメント面積）から各パラメータを算出</td></tr>
                    <tr><td><strong>AUCの計算</strong></td><td>台形法（linear trapezoidal法、log-linear trapezoidal法）を使用</td></tr>
                    <tr><td><strong>MRT</strong></td><td>平均滞留時間 = AUMC / AUC。薬物が体内に滞留する平均時間</td></tr>
                    <tr><td><strong>利点</strong></td><td>モデル仮定が不要で頑健。BE試験や臨床薬物動態試験の標準的解析法</td></tr>
                    <tr><td><strong>制限</strong></td><td>濃度の予測やシミュレーションには不向き。モデルベースの解析が必要な場合もある</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>まとめ：</strong>コンパートメントモデル解析はPKの数学的理解に不可欠である一方、実臨床やBE試験ではNCAが標準的に使用される。PopPK（母集団薬物動態）解析ではコンパートメントモデルが基盤となる。目的に応じた適切な解析手法の選択が重要である。</p>
                </div>`,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "1-コンパートメントモデルで急速静注後の血中濃度を片対数グラフにプロットした場合の曲線形状はどれか？",
                    options: ["放物線","直線","S字曲線","二重指数関数曲線"],
                    answer: 1,
                    explanation: "1-コンパートメントモデルでは C(t) = C0 × e^(-ke×t) であり、片対数グラフ上では ln C(t) = ln C0 - ke × t となるため、直線を示します。傾きは -ke（消失速度定数）です。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "2-コンパートメントモデルにおいて、β相が反映する過程はどれか？",
                    options: ["薬物の吸収過程","中心コンパートメントから末梢コンパートメントへの分布","分布平衡後の消失（代謝・排泄）","タンパク結合の平衡化"],
                    answer: 2,
                    explanation: "β相（消失相）は、中心・末梢コンパートメント間で分布平衡に達した後の、主に代謝と排泄による薬物消失を反映します。α相（分布相）が中心から末梢への分布を、β相が消失を主に反映します。"
                },
                {
                    id: "q404_3",
                    type: "fill",
                    question: "特定のコンパートメントモデルを仮定せずにPKパラメータを算出する解析手法を＿＿＿解析（略称NCA）という。",
                    answer: "ノンコンパートメント",
                    explanation: "NCA（Non-Compartmental Analysis、ノンコンパートメント解析）は、統計的モーメント理論に基づきAUCやAUMCからPKパラメータを算出する手法です。モデル仮定が不要で頑健であり、生物学的同等性試験や臨床薬物動態試験の標準的解析法として広く使用されています。"
                }
            ]
        },
        {
            id: 405,
            title: "AUCの計算法",
            duration: "15分",
            content: `<h2>AUCの計算法</h2>
                <p>AUC（Area Under the Curve、曲線下面積）は薬物の全身曝露量を表す最も重要なPKパラメータの一つです。生物学的同等性（BE）試験、用量比例性の検討、薬物相互作用の評価において中核的な役割を果たします。AUCの正確な算出には、適切な計算法の選択が不可欠です。本モジュールでは、台形法によるAUCの計算法、AUCの外挿、およびAUMC・MRTの概念を学びます。</p>

                <h3>線形台形法（Linear Trapezoidal Rule）</h3>
                <div class="highlight-box">
                    <p><strong>計算式：</strong></p>
                    <p>AUC<sub>ti→ti+1</sub> = (C<sub>i</sub> + C<sub>i+1</sub>) / 2 × (t<sub>i+1</sub> - t<sub>i</sub>)</p>
                    <p>各測定時点間の面積を台形として計算し、全区間の合計が AUC<sub>0-t</sub> となる。</p>
                    <p><strong>AUC<sub>0-t</sub> = Σ [(C<sub>i</sub> + C<sub>i+1</sub>) / 2 × (t<sub>i+1</sub> - t<sub>i</sub>)]</strong></p>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h4>利点</h4>
                        <p>計算が簡便で直感的に理解しやすい。吸収相（濃度上昇期）において精度が高い。規制当局のガイドラインでも広く認められている標準的な方法である。</p>
                    </div>
                    <div class="card">
                        <h4>欠点</h4>
                        <p>消失相（濃度下降期）では濃度が指数関数的に低下するため、直線近似では実際の曲線より面積を<strong>過大評価</strong>する傾向がある。特にサンプリング間隔が長い場合に誤差が大きくなる。</p>
                    </div>
                </div>

                <h3>対数台形法（Log-Linear Trapezoidal Rule）</h3>
                <div class="highlight-box">
                    <p><strong>計算式：</strong></p>
                    <p>AUC<sub>ti→ti+1</sub> = (C<sub>i</sub> - C<sub>i+1</sub>) / (ln C<sub>i</sub> - ln C<sub>i+1</sub>) × (t<sub>i+1</sub> - t<sub>i</sub>)</p>
                    <p>濃度の対数変換を用いて台形面積を計算する方法。消失相では薬物濃度が指数関数的（片対数グラフで直線的）に低下するため、対数台形法の方が実際の曲線をより正確に近似できる。</p>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h4>利点</h4>
                        <p>消失相（concentrationが単調減少する区間）での精度が線形台形法より高い。1次速度過程（指数関数的減少）に対して理論的に正確な計算法である。</p>
                    </div>
                    <div class="card">
                        <h4>欠点</h4>
                        <p>吸収相（濃度上昇期）では精度が低下する可能性がある。C<sub>i</sub> = C<sub>i+1</sub> の場合（同じ濃度）、分母が0になるため計算不能となる。この場合は線形台形法にフォールバックする必要がある。</p>
                    </div>
                </div>

                <h3>線形-対数台形法（Linear-Log Trapezoidal Rule）</h3>
                <div class="highlight-box">
                    <p><strong>最も推奨される方法：</strong></p>
                    <p>吸収相（濃度上昇期、C<sub>i+1</sub> ≥ C<sub>i</sub>）では<strong>線形台形法</strong>を使用し、消失相（濃度下降期、C<sub>i+1</sub> < C<sub>i</sub>）では<strong>対数台形法</strong>を使用する組み合わせ法。</p>
                    <p>各区間の特性に最適な計算法を適用するため、全体として最も正確なAUC推定が得られる。FDAガイダンスやEMAガイドライン、日本のBEガイドラインでもこの方法が推奨されている。多くのPK解析ソフトウェア（Phoenix WinNonlin, NONMEM等）でデフォルト設定として採用されている。</p>
                </div>

                <h3>台形法の比較</h3>
                <table>
                    <tr><th>計算法</th><th>吸収相での精度</th><th>消失相での精度</th><th>推奨度</th></tr>
                    <tr><td><strong>線形台形法</strong></td><td>高い</td><td>やや低い（過大評価）</td><td>簡便だが消失相に注意</td></tr>
                    <tr><td><strong>対数台形法</strong></td><td>やや低い</td><td>高い</td><td>消失相のみに適用が望ましい</td></tr>
                    <tr><td><strong>線形-対数台形法</strong></td><td>高い</td><td>高い</td><td>最も推奨される標準法</td></tr>
                </table>

                <h3>AUC<sub>0-t</sub> と AUC<sub>0-∞</sub> の違い</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>AUC<sub>0-t</sub>（部分AUC）</h4>
                        <p>投与時点（t=0）から最終測定可能時点（t<sub>last</sub>）までのAUC。台形法で直接計算される実測値。測定データの範囲内での曝露量を示す。最終測定時点以降の曝露量は含まれない。</p>
                    </div>
                    <div class="card">
                        <h4>AUC<sub>0-∞</sub>（全AUC）</h4>
                        <p>投与時点から無限大時間までのAUC。AUC<sub>0-t</sub> に最終測定時点以降の残余面積を加えたもの。<strong>AUC<sub>0-∞</sub> = AUC<sub>0-t</sub> + C<sub>last</sub> / λ<sub>z</sub></strong></p>
                        <p>λ<sub>z</sub>: 終末消失相の速度定数（= k<sub>e</sub>）。クリアランスの算出には AUC<sub>0-∞</sub> を使用する。</p>
                    </div>
                </div>

                <h3>AUCの外挿と許容範囲</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>外挿部分の計算</strong>最終測定可能濃度（C<sub>last</sub>）から無限大までの残余面積を C<sub>last</sub> / λ<sub>z</sub> で計算する。λ<sub>z</sub> は消失相の最低3点以上の濃度データを用いた片対数回帰の傾きから算出する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>外挿割合の算出</strong>外挿割合（%AUC<sub>extrap</sub>）= (AUC<sub>0-∞</sub> - AUC<sub>0-t</sub>) / AUC<sub>0-∞</sub> × 100。この値が大きいほど、AUC<sub>0-∞</sub> の推定精度が低くなる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>許容範囲</strong>一般に外挿割合は<strong>20%以内</strong>が許容される（多くのガイドラインの基準）。外挿割合が20%を超える場合は、サンプリング期間が不十分であった可能性があり、データの信頼性に注意が必要。BE試験では外挿が大きいと結果の解釈に影響しうる。</div>
                    </div>
                </div>

                <h3>AUMCと平均滞留時間（MRT）</h3>
                <div class="highlight-box">
                    <p><strong>AUMC（Area Under the first Moment Curve）：</strong></p>
                    <p>AUMC = ∫<sub>0</sub><sup>∞</sup> t × C(t) dt</p>
                    <p>血中濃度に時間を乗じた値の曲線下面積。統計的モーメント理論における1次モーメントに相当する。AUCと同様に台形法で算出可能（ただしC<sub>i</sub>の代わりに t<sub>i</sub>×C<sub>i</sub> を使用）。</p>
                </div>
                <div class="highlight-box">
                    <p><strong>MRT（Mean Residence Time、平均滞留時間）：</strong></p>
                    <p><strong>MRT = AUMC / AUC</strong></p>
                    <p>薬物分子が体内に滞留する<strong>平均時間</strong>。半減期と類似した概念だが、より正確に薬物の体内滞留を反映する。1-コンパートメントモデルでは MRT = 1/k<sub>e</sub> = t<sub>1/2</sub>/0.693 の関係がある。経口投与の場合は MAT（Mean Absorption Time）= MRT<sub>po</sub> - MRT<sub>iv</sub> で吸収に要する平均時間を推定できる。</p>
                </div>

                <h3>計算例</h3>
                <table>
                    <tr><th>時間 (h)</th><th>血中濃度 (ng/mL)</th><th>区間AUC (ng・h/mL)</th><th>計算法</th></tr>
                    <tr><td>0</td><td>0</td><td>-</td><td>-</td></tr>
                    <tr><td>1</td><td>80</td><td>(0+80)/2 × 1 = 40</td><td>線形（吸収相）</td></tr>
                    <tr><td>2</td><td>150</td><td>(80+150)/2 × 1 = 115</td><td>線形（吸収相）</td></tr>
                    <tr><td>4</td><td>120</td><td>対数台形法で計算</td><td>対数（消失相）</td></tr>
                    <tr><td>8</td><td>60</td><td>対数台形法で計算</td><td>対数（消失相）</td></tr>
                    <tr><td>12</td><td>30</td><td>対数台形法で計算</td><td>対数（消失相）</td></tr>
                </table>
                <p>このように線形-対数台形法では、各区間で濃度が上昇しているか下降しているかに応じて適切な台形法を自動的に選択する。</p>`,
            quiz: [
                {
                    id: "q405_1",
                    type: "choice",
                    question: "AUCの計算において、吸収相では線形台形法を、消失相では対数台形法を用いる方法を何と呼ぶか？",
                    options: ["線形台形法（Linear Trapezoidal Rule）","対数台形法（Log-Linear Trapezoidal Rule）","線形-対数台形法（Linear-Log Trapezoidal Rule）","Simpson法（Simpson's Rule）"],
                    answer: 2,
                    explanation: "線形-対数台形法（Linear-Log Trapezoidal Rule）は、吸収相（濃度上昇期）では線形台形法を、消失相（濃度下降期）では対数台形法を使用する組み合わせ法です。各区間の特性に最適な計算法を適用するため、最も正確なAUC推定が得られ、FDAやEMAのガイドラインでも推奨されています。"
                },
                {
                    id: "q405_2",
                    type: "choice",
                    question: "AUC0-∞の外挿割合（%AUCextrap）の一般的な許容上限として正しいものはどれか？",
                    options: ["5%以内","10%以内","20%以内","50%以内"],
                    answer: 2,
                    explanation: "AUC0-∞の外挿割合は一般に20%以内が許容範囲とされています。外挿割合が20%を超える場合は、サンプリング期間が不十分であった可能性があり、AUC0-∞の推定精度が低くなります。BE試験では外挿が大きいと結果の信頼性に影響しうるため、十分な採血時間の設定が重要です。"
                },
                {
                    id: "q405_3",
                    type: "fill",
                    question: "平均滞留時間（MRT）は ＿＿＿ / AUC で求められる。",
                    answer: "AUMC",
                    explanation: "MRT（Mean Residence Time、平均滞留時間）= AUMC / AUC です。AUMCは血中濃度に時間を乗じた値の曲線下面積（∫t×C dt）であり、統計的モーメント理論の1次モーメントに相当します。MRTは薬物分子が体内に滞留する平均時間を表し、ノンコンパートメント解析における重要なパラメータです。"
                }
            ]
        },
        {
            id: 406,
            title: "バイオアベイラビリティの定量的評価",
            duration: "15分",
            content: `<h2>バイオアベイラビリティの定量的評価</h2>
                <p>バイオアベイラビリティ（Bioavailability, BA）は、投与された薬物が<strong>全身循環に到達する割合と速度</strong>を表す指標です。経口投与された薬物は、消化管での溶解、膜透過、腸管代謝、肝初回通過効果など多くの関門を通過する必要があり、これらの過程での損失がバイオアベイラビリティを決定します。本モジュールでは、BAの定量的評価法、影響因子、およびBCS分類との関連を学びます。</p>

                <h3>バイオアベイラビリティ（F値）の定義</h3>
                <div class="highlight-box">
                    <p><strong>バイオアベイラビリティ（F）</strong>= 投与薬物のうち全身循環に未変化体として到達する割合</p>
                    <p>静脈内（IV）投与では薬物が100%全身循環に入るため、F = 1（100%）と定義される。経口投与のFは 0 < F ≤ 1 の範囲をとる。Fが高いほど、投与された薬物が効率よく全身循環に到達していることを意味する。</p>
                </div>

                <h3>絶対的バイオアベイラビリティ（Absolute Bioavailability）</h3>
                <div class="highlight-box">
                    <p><strong>計算式：</strong></p>
                    <p><strong>F = (AUC<sub>po</sub> × Dose<sub>iv</sub>) / (AUC<sub>iv</sub> × Dose<sub>po</sub>)</strong></p>
                    <p>経口投与（po）と静脈内投与（iv）のAUCを用量で補正して比較する方法。IV投与のデータが<strong>必須</strong>であるため、IV製剤が存在しない薬物では算出できない。クロスオーバーデザインで同一被験者に両投与経路を実施して求める。</p>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h4>絶対的BAの解釈</h4>
                        <p>F = 1.0（100%）: 経口投与でも全量が全身循環に到達。F = 0.5（50%）: 投与量の半分が全身循環に到達。F < 0.1（10%未満）: 著しく低いBA、経口投与が困難な場合がある。</p>
                    </div>
                    <div class="card">
                        <h4>代表的な薬物のF値</h4>
                        <p>ジゴキシン: F ≈ 0.7-0.8。プロプラノロール: F ≈ 0.25（初回通過効果大）。シクロスポリン: F ≈ 0.3（製剤により異なる）。メトホルミン: F ≈ 0.5-0.6。アムロジピン: F ≈ 0.64。</p>
                    </div>
                </div>

                <h3>相対的バイオアベイラビリティ（Relative Bioavailability）</h3>
                <div class="highlight-box">
                    <p><strong>計算式：</strong></p>
                    <p><strong>F<sub>rel</sub> = (AUC<sub>test</sub> × Dose<sub>ref</sub>) / (AUC<sub>ref</sub> × Dose<sub>test</sub>)</strong></p>
                    <p>標準製剤（reference）に対する試験製剤（test）のバイオアベイラビリティの比。同一投与経路の製剤間比較に使用される。<strong>生物学的同等性（BE）試験</strong>の基本概念であり、ジェネリック医薬品の承認に不可欠。IV投与データは不要で、経口製剤同士の比較が可能。</p>
                </div>

                <h3>バイオアベイラビリティに影響する要因</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>初回通過効果（First-Pass Effect）</strong>経口投与された薬物が全身循環に到達する前に、腸管壁および肝臓で代謝を受けること。肝抽出率の高い薬物（プロプラノロール、リドカイン、モルヒネ等）は初回通過効果が大きく、経口BAが著しく低下する。F = f<sub>a</sub> × f<sub>g</sub> × f<sub>h</sub>（f<sub>a</sub>: 吸収率、f<sub>g</sub>: 腸管回避率、f<sub>h</sub>: 肝回避率）。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>溶解性（Solubility）</strong>薬物が消化管液中で溶解しなければ吸収されない。難溶性薬物はBAが低くなる傾向がある。製剤技術（微粒子化、固体分散体、ナノ製剤等）で溶解性を改善しBAを向上させることが可能。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>膜透過性（Permeability）</strong>消化管上皮細胞の脂質二重膜を透過する能力。受動拡散（脂溶性が高いほど有利）と能動輸送（トランスポーター介在）がある。Lipinski's Rule of 5 が経口吸収性の目安となる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>P-糖タンパク質（P-gp）による排出</strong>腸管上皮細胞のP-gp（ABCB1）は、細胞内に入った薬物を管腔側に排出するエフラックスポンプ。P-gp基質（ジゴキシン、シクロスポリン等）はBAが低下する。P-gp阻害薬との併用でBAが上昇する場合がある（薬物相互作用）。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">5</div>
                        <div class="step-content"><strong>腸管代謝（Intestinal Metabolism）</strong>小腸上皮細胞に発現するCYP3A4による代謝。CYP3A4基質（シクロスポリン、ミダゾラム等）は腸管壁でも代謝を受け、BAが低下する。グレープフルーツジュースによる腸管CYP3A4阻害は、一部の薬物のBAを上昇させる。</div>
                    </div>
                </div>

                <h3>BCS分類（Biopharmaceutics Classification System）</h3>
                <p>BCS分類は、薬物の<strong>水溶性</strong>と<strong>膜透過性</strong>に基づいて薬物を4つのクラスに分類するシステムです。1995年にAmidonらによって提唱され、医薬品の経口吸収性の予測とバイオウェーバーの判断基準として広く使用されています。</p>
                <table>
                    <tr><th>BCSクラス</th><th>溶解性</th><th>透過性</th><th>特徴</th><th>代表薬</th></tr>
                    <tr><td><strong>Class I</strong></td><td>高い</td><td>高い</td><td>溶解も透過も良好。BAは一般に高い。バイオウェーバーの対象</td><td>メトプロロール、プロプラノロール、カフェイン</td></tr>
                    <tr><td><strong>Class II</strong></td><td>低い</td><td>高い</td><td>溶解が律速段階。製剤技術による溶解性改善がBA向上に有効</td><td>ニフェジピン、カルバマゼピン、イブプロフェン</td></tr>
                    <tr><td><strong>Class III</strong></td><td>高い</td><td>低い</td><td>透過が律速段階。吸収促進剤の使用やプロドラッグ化が検討される</td><td>アテノロール、メトホルミン、ラニチジン</td></tr>
                    <tr><td><strong>Class IV</strong></td><td>低い</td><td>低い</td><td>溶解・透過ともに不良。経口投与に課題が多い。特殊な製剤技術が必要</td><td>タキソール、フロセミド（境界）</td></tr>
                </table>

                <h3>バイオウェーバー（BE試験免除）</h3>
                <div class="highlight-box">
                    <p><strong>バイオウェーバーとは：</strong>in vivoのBE試験を行わずに、in vitro溶出試験のデータのみで生物学的同等性を判断できる制度。</p>
                    <p><strong>適用条件（BCSクラスI）：</strong></p>
                    <p>(1) BCSクラスI（高溶解性・高透過性）に該当すること</p>
                    <p>(2) 速放性製剤（immediate release）であること</p>
                    <p>(3) pH 1.0, 4.5, 6.8 の3条件で30分以内に85%以上が溶出すること（速やかに溶出する製剤）</p>
                    <p>(4) 添加剤が吸収に影響しないこと</p>
                    <p>(5) 治療域の狭い薬物（NTI drugs）でないこと</p>
                    <p>FDAでは一部のBCSクラスIII薬物についてもバイオウェーバーを認めている。日本では「後発医薬品の生物学的同等性試験ガイドライン」においてバイオウェーバーの規定がある。</p>
                </div>

                <h3>食事の影響とバイオアベイラビリティ</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>高脂肪食の影響</h4>
                        <p>高脂肪食（約800-1000 kcal、脂質50%）の摂取は薬物のBAに大きく影響する場合がある。脂溶性薬物では、胆汁酸分泌の促進によりミセル形成が増加し、溶解性が向上してBAが上昇する。一方、食事により胃排出速度が遅延し、Tmaxが延長する場合もある。</p>
                    </div>
                    <div class="card">
                        <h4>食事影響試験の意義</h4>
                        <p>新薬の開発では、FDAのガイダンスに基づき<strong>食事影響試験（Food Effect Study）</strong>を実施する。空腹時と食後（高脂肪食後）の2条件でPKを比較するクロスオーバー試験。食事によりAUCやCmaxが有意に変化する場合、用法に食事に関する規定が追加される。</p>
                    </div>
                </div>
                <table>
                    <tr><th>影響パターン</th><th>メカニズム</th><th>例</th></tr>
                    <tr><td><strong>BA上昇</strong></td><td>溶解性向上、胆汁分泌促進</td><td>グリセオフルビン、イトラコナゾール（カプセル）</td></tr>
                    <tr><td><strong>BA低下</strong></td><td>キレート形成、吸着</td><td>テトラサイクリン系（Ca, Mg, Feとキレート）、ビスホスホネート</td></tr>
                    <tr><td><strong>吸収遅延（AUC不変）</strong></td><td>胃排出遅延</td><td>多くの薬物でTmaxが延長しCmaxが低下するがAUCは不変</td></tr>
                    <tr><td><strong>影響なし</strong></td><td>溶解性・透過性ともに十分</td><td>BCSクラスI速放性製剤の多く</td></tr>
                </table>`,
            quiz: [
                {
                    id: "q406_1",
                    type: "choice",
                    question: "絶対的バイオアベイラビリティ（F）の算出式として正しいものはどれか？",
                    options: ["F = AUCpo / AUCiv","F = (AUCpo × Doseiv) / (AUCiv × Dosepo)","F = (AUCtest × Doseref) / (AUCref × Dosetest)","F = Cmax,po / Cmax,iv"],
                    answer: 1,
                    explanation: "絶対的バイオアベイラビリティは F = (AUCpo × Doseiv) / (AUCiv × Dosepo) で算出します。経口投与とIV投与のAUCを用量で補正して比較します。単純なAUCの比（AUCpo/AUCiv）では、用量が異なる場合に正確な値が得られません。"
                },
                {
                    id: "q406_2",
                    type: "choice",
                    question: "BCS分類においてバイオウェーバー（BE試験免除）の主な対象となるクラスはどれか？",
                    options: ["Class I（高溶解性・高透過性）","Class II（低溶解性・高透過性）","Class III（高溶解性・低透過性）","Class IV（低溶解性・低透過性）"],
                    answer: 0,
                    explanation: "バイオウェーバーの主な対象はBCSクラスI（高溶解性・高透過性）の速放性製剤です。溶解性と透過性がともに高いため、in vitro溶出試験のデータのみで生物学的同等性を判断できるとされています。pH 1.0, 4.5, 6.8で30分以内に85%以上溶出することなどが条件です。"
                },
                {
                    id: "q406_3",
                    type: "fill",
                    question: "経口投与された薬物が全身循環に到達する前に腸管壁や肝臓で代謝を受けることを＿＿＿効果と呼ぶ。",
                    answer: "初回通過",
                    explanation: "初回通過効果（First-Pass Effect）は、経口投与された薬物が消化管から吸収された後、門脈を経由して肝臓を通過する際に代謝を受ける現象です。肝抽出率の高い薬物（プロプラノロール、リドカイン、モルヒネ等）では初回通過効果が大きく、経口バイオアベイラビリティが著しく低下します。"
                }
            ]
        },
        {
            id: 407,
            title: "反復投与の薬物動態",
            duration: "15分",
            content: `<h2>反復投与の薬物動態（Multiple Dosing Pharmacokinetics）</h2>
                <p>臨床で使用される薬物の大部分は、治療効果を持続させるために<strong>反復投与（multiple dosing）</strong>されます。単回投与では血中濃度は一時的に上昇した後に消失しますが、反復投与では薬物が体内に蓄積し、やがて<strong>定常状態（steady state）</strong>に到達します。本モジュールでは、反復投与における薬物蓄積の原理と定常状態の血中濃度予測を学びます。</p>

                <h3>反復投与の必要性</h3>
                <div class="highlight-box">
                    <p><strong>なぜ反復投与が必要か：</strong>多くの疾患の治療では、血中濃度を<strong>最小有効濃度（MEC）以上</strong>かつ<strong>最小中毒濃度（MTC）未満</strong>の治療域（therapeutic window）に維持し続ける必要があります。単回投与では濃度が速やかに低下し治療域を下回るため、一定間隔で繰り返し投与（反復投与）を行い、血中濃度を治療域内に維持します。</p>
                </div>

                <h3>蓄積の原理</h3>
                <p>反復投与を行うと、前回投与分の薬物が体内に残存している状態で次の投与が行われるため、体内薬物量は徐々に増加（蓄積）します。</p>
                <div class="card-grid">
                    <div class="card">
                        <h4>蓄積が起こる条件</h4>
                        <p>投与間隔（τ）内に前回投与分が完全に消失しない場合、すなわち<strong>τ < 完全消失時間（約5×t<sub>1/2</sub>）</strong>のとき蓄積が起こります。投与間隔が半減期に比べて短いほど蓄積は大きくなります。逆にτが十分に長い（τ ≫ t<sub>1/2</sub>）場合は、各投与時にほぼ完全に消失しているため蓄積は起こりません。</p>
                    </div>
                    <div class="card">
                        <h4>蓄積の平衡</h4>
                        <p>蓄積は無限に続くわけではありません。体内薬物量が増えるにつれて消失速度も増加し（1次速度過程では消失速度 = k<sub>e</sub> × 体内薬物量）、やがて<strong>1回投与量による増加分 = 投与間隔中の消失量</strong>となる平衡点に達します。これが定常状態です。</p>
                    </div>
                </div>

                <h3>蓄積係数（Accumulation Factor）</h3>
                <div class="highlight-box">
                    <p><strong>蓄積係数の定義と計算式：</strong></p>
                    <p>R = 1 / (1 - e<sup>(-k<sub>e</sub> × τ)</sup>)</p>
                    <p>R: 蓄積係数（accumulation factor）。定常状態の血中濃度が単回投与時の何倍になるかを示す。</p>
                    <p>k<sub>e</sub>: 消失速度定数 = 0.693 / t<sub>1/2</sub></p>
                    <p>τ: 投与間隔（dosing interval）</p>
                    <p><strong>特別な場合：</strong>τ = t<sub>1/2</sub> のとき、R = 1/(1 - e<sup>(-0.693)</sup>) = 1/(1 - 0.5) = <strong>2.0</strong></p>
                    <p>すなわち、投与間隔が半減期と等しい場合、定常状態の血中濃度（ピーク）は単回投与時の約2倍になります。</p>
                </div>

                <h3>蓄積係数の具体例</h3>
                <table>
                    <tr><th>投与間隔(τ)と半減期(t<sub>1/2</sub>)の関係</th><th>τ / t<sub>1/2</sub></th><th>蓄積係数 R</th><th>解釈</th></tr>
                    <tr><td>τ = 0.5 × t<sub>1/2</sub></td><td>0.5</td><td>3.41</td><td>蓄積大。頻回投与</td></tr>
                    <tr><td>τ = t<sub>1/2</sub></td><td>1.0</td><td>2.00</td><td>中程度の蓄積</td></tr>
                    <tr><td>τ = 2 × t<sub>1/2</sub></td><td>2.0</td><td>1.33</td><td>軽度の蓄積</td></tr>
                    <tr><td>τ = 3 × t<sub>1/2</sub></td><td>3.0</td><td>1.14</td><td>ほぼ蓄積なし</td></tr>
                    <tr><td>τ = 5 × t<sub>1/2</sub></td><td>5.0</td><td>1.03</td><td>蓄積なし（各投与独立）</td></tr>
                </table>

                <h3>定常状態（Steady State）の概念</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>定常状態とは</h4>
                        <p>反復投与を継続すると、やがて<strong>投与速度（input rate）= 消失速度（elimination rate）</strong>の平衡状態に到達します。この状態では、各投与間隔における血中濃度の変動パターンが毎回同一となります。定常状態では体内薬物量の平均値が一定に保たれます。</p>
                    </div>
                    <div class="card">
                        <h4>定常状態到達時間</h4>
                        <p>定常状態に到達するまでの時間は<strong>半減期のみに依存</strong>し、投与量や投与間隔には依存しません。<br>
                        ・3半減期で定常状態の約<strong>87.5%</strong>に到達<br>
                        ・4半減期で約<strong>93.75%</strong>に到達<br>
                        ・<strong>5半減期で約97%に到達</strong>（実務上、定常状態とみなす）<br>
                        例：t<sub>1/2</sub> = 6時間の薬物 → 約30時間で定常状態に到達</p>
                    </div>
                </div>

                <h3>定常状態における血中濃度の変動</h3>
                <p>反復経口投与時の定常状態では、各投与間隔内で血中濃度がCmax,ssとCmin,ssの間を変動します。</p>
                <div class="highlight-box">
                    <p><strong>主要な計算式（1-コンパートメントモデル、急速吸収を仮定）：</strong></p>
                    <p><strong>最高血中濃度（定常状態）：</strong></p>
                    <p>C<sub>max,ss</sub> = (F × Dose / V<sub>d</sub>) × 1 / (1 - e<sup>(-k<sub>e</sub> × τ)</sup>)</p>
                    <p><strong>最低血中濃度（定常状態）：</strong></p>
                    <p>C<sub>min,ss</sub> = C<sub>max,ss</sub> × e<sup>(-k<sub>e</sub> × τ)</sup></p>
                    <p><strong>平均血中濃度（定常状態）：</strong></p>
                    <p>C<sub>avg,ss</sub> = F × Dose / (CL × τ)</p>
                    <p>F: バイオアベイラビリティ、Dose: 1回投与量、V<sub>d</sub>: 分布容積、CL: クリアランス、τ: 投与間隔</p>
                </div>

                <h3>変動幅（Fluctuation）</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>変動幅の定義</h4>
                        <p>定常状態における血中濃度の変動の大きさを定量的に評価する指標です。</p>
                        <p><strong>%Fluctuation = (C<sub>max,ss</sub> - C<sub>min,ss</sub>) / C<sub>avg,ss</sub> × 100</strong></p>
                        <p>変動幅が大きい場合、ピーク時に中毒域に近づいたり、トラフ時に有効濃度を下回る危険性があります。</p>
                    </div>
                    <div class="card">
                        <h4>変動幅を小さくする方法</h4>
                        <p>・投与間隔を短くする（τを小さく）<br>
                        ・1回量を減らし投与回数を増やす（同じ1日量でも分割投与）<br>
                        ・徐放性製剤を使用する<br>
                        ・持続点滴に切り替える（理論上、変動ゼロ）</p>
                    </div>
                </div>

                <h3>投与間隔と蓄積の関係</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>τ < t<sub>1/2</sub> の場合（蓄積大）</strong>投与間隔が半減期より短い場合、前回投与分の多くが残存した状態で次の投与が行われるため、蓄積が大きくなります。定常状態の血中濃度は単回投与時より大幅に高くなりますが、変動幅は比較的小さくなります。例：半減期12時間の薬物を6時間ごとに投与 → R = 3.41。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>τ = t<sub>1/2</sub> の場合（中程度の蓄積）</strong>最も一般的な投与設計の目安です。蓄積係数R ≈ 2.0となり、定常状態のピーク濃度は単回投与時の約2倍になります。多くの薬物でτ ≈ t<sub>1/2</sub>が投与間隔の出発点として選択されます。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>τ > t<sub>1/2</sub> の場合（蓄積小）</strong>投与間隔が半減期より長い場合、蓄積は小さくなります。ただし、変動幅は大きくなり、トラフ時に有効濃度を下回る可能性が高くなります。治療域が広い薬物（安全性の高い薬物）に適しています。</div>
                    </div>
                </div>

                <h3>計算例：テオフィリンの反復経口投与</h3>
                <div class="highlight-box">
                    <p><strong>条件：</strong>テオフィリン 200 mgを8時間ごとに経口投与（1日3回）</p>
                    <p>F = 1.0、V<sub>d</sub> = 35 L、CL = 2.8 L/h、t<sub>1/2</sub> = 8.7時間、k<sub>e</sub> = 0.693/8.7 = 0.080 h<sup>-1</sup></p>
                    <p><strong>計算：</strong></p>
                    <p>蓄積係数 R = 1/(1 - e<sup>(-0.080 × 8)</sup>) = 1/(1 - e<sup>(-0.64)</sup>) = 1/(1 - 0.527) = <strong>2.11</strong></p>
                    <p>C<sub>max,ss</sub> = (1.0 × 200/35) × 2.11 = 5.71 × 2.11 = <strong>12.1 μg/mL</strong></p>
                    <p>C<sub>min,ss</sub> = 12.1 × e<sup>(-0.080 × 8)</sup> = 12.1 × 0.527 = <strong>6.4 μg/mL</strong></p>
                    <p>C<sub>avg,ss</sub> = 1.0 × 200/(2.8 × 8) = <strong>8.9 μg/mL</strong></p>
                    <p>%Fluctuation = (12.1 - 6.4)/8.9 × 100 = <strong>64%</strong></p>
                    <p>テオフィリンの治療域は5-20 μg/mLであるため、この投与設計は治療域内に収まっています。</p>
                </div>`,
            quiz: [
                {
                    id: "q407_1",
                    type: "choice",
                    question: "反復投与において定常状態に到達するのに要する時間に最も影響する因子はどれか？",
                    options: ["投与量（Dose）","投与間隔（τ）","消失半減期（t1/2）","バイオアベイラビリティ（F）"],
                    answer: 2,
                    explanation: "定常状態到達時間は消失半減期のみに依存し、約5半減期で定常状態の97%に到達します。投与量や投与間隔を変更しても、定常状態到達までの時間は変わりません。投与量は定常状態の「濃度レベル」に影響しますが、到達「時間」には影響しません。"
                },
                {
                    id: "q407_2",
                    type: "choice",
                    question: "半減期8時間の薬物を8時間ごとに反復投与した場合の蓄積係数（R）として最も近い値はどれか？",
                    options: ["1.0","1.5","2.0","3.4"],
                    answer: 2,
                    explanation: "τ = t1/2 のとき、蓄積係数 R = 1/(1 - e^(-0.693)) = 1/(1 - 0.5) = 2.0 となります。すなわち、定常状態のピーク濃度は単回投与時の約2倍になります。これは反復投与の基本的な原則です。"
                },
                {
                    id: "q407_3",
                    type: "fill",
                    question: "反復投与の定常状態における平均血中濃度（Cavg,ss）の計算式は Cavg,ss = F × Dose / (＿＿＿ × τ) である。",
                    answer: "CL",
                    explanation: "Cavg,ss = F × Dose / (CL × τ) で計算されます。CLはクリアランス、τは投与間隔です。この式から、平均定常状態濃度はクリアランスに反比例し、投与量に比例することがわかります。腎機能や肝機能の低下でCLが減少すると、同じ用量でもCavg,ssが上昇します。"
                }
            ]
        },
        {
            id: 408,
            title: "投与設計の実践",
            duration: "15分",
            content: `<h2>投与設計の実践（Dosage Regimen Design）</h2>
                <p>投与設計（dosage regimen design）とは、個々の患者に対して<strong>最適な投与量、投与間隔、投与経路</strong>を決定するプロセスです。目標は、血中濃度を治療域（therapeutic window）内に維持し、有効性を最大化しつつ副作用を最小化することです。本モジュールでは、負荷投与量・維持投与量の計算、持続点滴の設計、腎・肝機能低下時の投与調整を学びます。</p>

                <h3>投与設計の基本原則</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>目標濃度の設定</h4>
                        <p>まず薬物の<strong>治療域（therapeutic window）</strong>を把握します。治療域とはMEC（最小有効濃度）からMTC（最小中毒濃度）までの範囲です。一般に目標濃度（C<sub>target</sub>）は治療域の中央付近に設定します。治療域が狭い薬物（バンコマイシン、アミノグリコシド、ジゴキシン等）では特に精密な投与設計が求められます。</p>
                    </div>
                    <div class="card">
                        <h4>患者因子の評価</h4>
                        <p>投与設計に必要な患者情報：<br>
                        ・体重、年齢、性別、体表面積<br>
                        ・腎機能（SCr、eGFR、CCr）<br>
                        ・肝機能（Child-Pugh分類）<br>
                        ・併用薬（相互作用の有無）<br>
                        ・病態（肥満、浮腫、脱水、熱傷等）<br>
                        これらの因子がPKパラメータ（CL、V<sub>d</sub>）に影響を与えます。</p>
                    </div>
                </div>

                <h3>負荷投与量（Loading Dose: LD）</h3>
                <div class="highlight-box">
                    <p><strong>負荷投与量の目的と計算式：</strong></p>
                    <p>半減期が長い薬物では、定常状態到達に長時間（5 × t<sub>1/2</sub>）を要します。治療開始時に速やかに治療域の血中濃度に到達させるために、初回に通常より多い量を投与します。これが<strong>負荷投与量（loading dose）</strong>です。</p>
                    <p><strong>LD = V<sub>d</sub> × C<sub>target</sub> / F</strong></p>
                    <p>V<sub>d</sub>: 分布容積、C<sub>target</sub>: 目標血中濃度、F: バイオアベイラビリティ</p>
                    <p>静脈内投与（F = 1）の場合：<strong>LD = V<sub>d</sub> × C<sub>target</sub></strong></p>
                    <p><strong>注意：</strong>負荷投与量は分布容積（V<sub>d</sub>）に依存し、クリアランスには依存しません。したがって、腎機能低下患者でも負荷投与量は通常変更不要です（V<sub>d</sub>が変化しない限り）。</p>
                </div>

                <h3>維持投与量（Maintenance Dose: MD）</h3>
                <div class="highlight-box">
                    <p><strong>維持投与量の目的と計算式：</strong></p>
                    <p>負荷投与後、定常状態の血中濃度を維持するために投与間隔ごとに投与する量です。維持投与量は、投与間隔中に消失する薬物量を補充する量に等しくなります。</p>
                    <p><strong>MD = CL × C<sub>ss</sub> × τ / F</strong></p>
                    <p>CL: クリアランス、C<sub>ss</sub>: 目標定常状態濃度（C<sub>avg,ss</sub>）、τ: 投与間隔、F: バイオアベイラビリティ</p>
                    <p>あるいは、消失量からの計算：<strong>MD = LD × (1 - e<sup>(-k<sub>e</sub> × τ)</sup>)</strong></p>
                    <p><strong>注意：</strong>維持投与量はクリアランス（CL）に依存します。腎機能や肝機能低下時にはCLが減少するため、維持投与量の減量が必要です。</p>
                </div>

                <h3>投与間隔（τ）の選択</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>基本原則：τ ≈ t<sub>1/2</sub></strong>多くの薬物で投与間隔を半減期とほぼ等しく設定します。この場合、蓄積係数R ≈ 2.0で、定常状態の変動幅も適度です。ただし、服薬コンプライアンスや実用性の観点から、6時間、8時間、12時間、24時間間隔に丸められることが多いです。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>治療域の幅による調整</strong>治療域が広い薬物（例：アモキシシリン）では投与間隔を長めに設定可能（τ > t<sub>1/2</sub>）。服薬回数が減りアドヒアランスが向上します。一方、治療域が狭い薬物（例：テオフィリン）では投与間隔を短くするか、徐放性製剤を使用して変動幅を抑えます。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>濃度依存性 vs 時間依存性の殺菌効果</strong>アミノグリコシド系（濃度依存性）はCmax/MICが重要 → 1日1回高用量投与。β-ラクタム系（時間依存性）はT>MIC（MICを超える時間割合）が重要 → 頻回投与または持続点滴。抗菌薬ではPK/PD理論に基づく投与設計が標準です。</div>
                    </div>
                </div>

                <h3>持続静脈点滴の投与設計</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>点滴速度の計算</h4>
                        <p>持続静脈点滴（continuous IV infusion）で目標定常状態濃度を得るための投与速度：</p>
                        <p><strong>R<sub>0</sub> = CL × C<sub>ss,target</sub></strong></p>
                        <p>R<sub>0</sub>: 点滴速度（mg/h）<br>
                        例：CL = 5 L/h、C<sub>ss,target</sub> = 10 mg/L → R<sub>0</sub> = 5 × 10 = 50 mg/h</p>
                        <p>定常状態到達には約5半減期を要します。</p>
                    </div>
                    <div class="card">
                        <h4>点滴 + 負荷投与の組み合わせ</h4>
                        <p>持続点滴のみでは定常状態到達に時間がかかるため、緊急性がある場合は<strong>負荷投与（ボーラス投与）と持続点滴を組み合わせ</strong>ます。</p>
                        <p>LD = V<sub>d</sub> × C<sub>ss,target</sub>（ボーラス投与）<br>
                        + R<sub>0</sub> = CL × C<sub>ss,target</sub>（持続点滴）</p>
                        <p>ボーラスで速やかに目標濃度に到達させ、持続点滴でその濃度を維持します。リドカイン、テオフィリン等の投与で用いられます。</p>
                    </div>
                </div>

                <h3>腎機能低下時の投与調整</h3>
                <p>腎排泄型薬物では、腎機能低下に伴いクリアランスが減少するため、投与量の調整が必要です。</p>
                <div class="highlight-box">
                    <p><strong>Giusti-Hayton法（投与量調整法）：</strong></p>
                    <p>まず腎機能正常時のクリアランスに対する腎機能低下時の比率を算出します。</p>
                    <p><strong>Q = 1 - f<sub>e</sub> × (1 - KF)</strong></p>
                    <p>Q: 用量補正係数、f<sub>e</sub>: 腎排泄率（尿中未変化体排泄率）、KF: 腎機能の残存割合（= 患者のCCr / 正常CCr）</p>
                    <p>この補正係数Qを用いて、2つの方法で投与調整ができます：</p>
                    <p><strong>方法1（用量減量法）：</strong>投与間隔は一定のまま、投与量を減量<br>
                    調整後投与量 = 通常投与量 × Q</p>
                    <p><strong>方法2（間隔延長法）：</strong>投与量は一定のまま、投与間隔を延長<br>
                    調整後投与間隔 = 通常投与間隔 / Q</p>
                </div>

                <table>
                    <tr><th>調整方法</th><th>特徴</th><th>適する薬物</th></tr>
                    <tr><td><strong>用量減量法</strong></td><td>血中濃度の変動幅が小さくなる。一定間隔で投与するため服薬管理が容易</td><td>治療域が狭い薬物（バンコマイシン等）</td></tr>
                    <tr><td><strong>間隔延長法</strong></td><td>Cmaxは維持される。1日の投与回数が減り負担軽減</td><td>濃度依存性の抗菌薬（アミノグリコシド系）</td></tr>
                </table>

                <h3>肝機能低下時の投与調整</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>Child-Pugh分類</h4>
                        <p>肝機能障害の重症度を評価する指標。脳症、腹水、ビリルビン、アルブミン、PTの5項目をスコア化します。</p>
                        <p>・Grade A（5-6点）：軽度 → 通常量〜減量不要のことが多い<br>
                        ・Grade B（7-9点）：中等度 → 25-50%の減量を考慮<br>
                        ・Grade C（10-15点）：重度 → 50%以上の減量、または使用回避</p>
                    </div>
                    <div class="card">
                        <h4>肝代謝型薬物の注意点</h4>
                        <p>腎機能と異なり、肝機能を正確に定量化する簡便な指標がないため、投与調整は経験的になりがちです。<br>
                        ・肝血流律速（高抽出率）薬物：肝硬変での門脈シャントによりFが上昇 → 経口投与量の減量<br>
                        ・酵素律速（低抽出率）薬物：代謝酵素活性低下でCLが減少 → 維持投与量の減量<br>
                        ・アルブミン低下時：遊離型分率が上昇 → 高度にタンパク結合する薬物で注意</p>
                    </div>
                </div>

                <h3>計算例：バンコマイシンの投与設計</h3>
                <div class="highlight-box">
                    <p><strong>症例：</strong>60歳男性、体重70 kg、SCr 1.0 mg/dL、MRSA感染症。バンコマイシンの目標トラフ値：15-20 μg/mL（AUC/MIC ≥ 400 を目指す）。</p>
                    <p><strong>PKパラメータの推定：</strong></p>
                    <p>CCr（Cockcroft-Gault式）= (140 - 60) × 70 / (72 × 1.0) = <strong>77.8 mL/min</strong></p>
                    <p>CL = 0.689 × CCr + 3.66 = 0.689 × 77.8 + 3.66 = <strong>57.3 mL/min ≈ 3.44 L/h</strong></p>
                    <p>V<sub>d</sub> = 0.7 L/kg × 70 = <strong>49 L</strong></p>
                    <p>k<sub>e</sub> = CL/V<sub>d</sub> = 3.44/49 = <strong>0.070 h<sup>-1</sup></strong></p>
                    <p>t<sub>1/2</sub> = 0.693/0.070 = <strong>9.9時間</strong></p>
                    <p><strong>投与設計（τ = 12時間として）：</strong></p>
                    <p>C<sub>avg,ss</sub>の目標 = 約20 μg/mL として</p>
                    <p>MD = CL × C<sub>avg,ss</sub> × τ / F = 3.44 × 20 × 12 / 1.0 = <strong>825.6 mg ≈ 750〜1000 mg</strong></p>
                    <p>→ バンコマイシン 1000 mg を12時間ごとに点滴静注が妥当な初期投与設計</p>
                    <p>負荷投与量：LD = V<sub>d</sub> × C<sub>target</sub> = 49 × 25 = 1225 mg ≈ <strong>1250 mg</strong>（初回のみ）</p>
                    <p><strong>※ 投与開始後48-72時間でトラフ値を測定し、TDMに基づいて用量調整を行います。</strong></p>
                </div>

                <h3>計算例：ゲンタマイシンの1日1回投与</h3>
                <div class="highlight-box">
                    <p><strong>症例：</strong>50歳女性、体重60 kg、腎機能正常（CCr 90 mL/min）、グラム陰性桿菌感染症。</p>
                    <p><strong>PKパラメータ：</strong></p>
                    <p>V<sub>d</sub> = 0.25 L/kg × 60 = <strong>15 L</strong></p>
                    <p>t<sub>1/2</sub> = 2.5時間、k<sub>e</sub> = 0.693/2.5 = <strong>0.277 h<sup>-1</sup></strong></p>
                    <p><strong>1日1回投与（Extended-interval dosing）の設計：</strong></p>
                    <p>目標Cmax = 16-20 μg/mL（Cmax/MIC ≥ 8-10を目標）</p>
                    <p>投与量 = 5-7 mg/kg/日 = 5 × 60 = <strong>300 mg を24時間ごと</strong></p>
                    <p>予測Cmax = Dose/V<sub>d</sub> = 300/15 = <strong>20 μg/mL</strong></p>
                    <p>24時間後のCmin = 20 × e<sup>(-0.277 × 24)</sup> = 20 × 0.0013 = <strong>0.026 μg/mL</strong>（十分低い → 腎毒性リスク低減）</p>
                    <p>アミノグリコシドは濃度依存性殺菌効果を示し、高いCmax/MICが有効性の指標です。1日1回高用量投与により、高いピーク濃度と十分な無薬物時間を確保します。</p>
                </div>`,
            quiz: [
                {
                    id: "q408_1",
                    type: "choice",
                    question: "負荷投与量（Loading Dose）の計算に必要なPKパラメータはどれか？",
                    options: ["クリアランス（CL）と投与間隔（τ）","分布容積（Vd）と目標濃度（Ctarget）","消失速度定数（ke）と半減期（t1/2）","AUCとバイオアベイラビリティ（F）"],
                    answer: 1,
                    explanation: "負荷投与量は LD = Vd × Ctarget / F で計算されます。速やかに目標濃度に到達させるため、体内の「容積」を薬物で「満たす」のに必要な量を求めます。CLは定常状態の維持（維持投与量）に関係しますが、負荷投与量には影響しません。腎機能低下時でもVdが変化しなければLDの変更は不要です。"
                },
                {
                    id: "q408_2",
                    type: "choice",
                    question: "腎機能低下時の投与調整（Giusti-Hayton法）において、用量補正係数Qの計算式として正しいものはどれか？",
                    options: ["Q = fe × KF","Q = 1 - fe × (1 - KF)","Q = CL × fe / KF","Q = KF / (1 - fe)"],
                    answer: 1,
                    explanation: "Giusti-Hayton法の用量補正係数は Q = 1 - fe × (1 - KF) で計算されます。feは腎排泄率、KFは腎機能の残存割合（= 患者CCr / 正常CCr）です。この式は、腎排泄率が高く（feが大きい）腎機能低下が大きい（KFが小さい）ほどQが小さくなり、より大きな用量調整が必要であることを示しています。"
                },
                {
                    id: "q408_3",
                    type: "fill",
                    question: "持続静脈点滴で目標定常状態濃度（Css）を得るための投与速度（R0）の計算式は R0 = ＿＿＿ × Css である。",
                    answer: "CL",
                    explanation: "R0 = CL × Css,target で計算されます。持続点滴の定常状態では投与速度 = 消失速度が成立し、消失速度 = CL × Css であるため、R0 = CL × Css となります。CLが大きい患者では、同じ定常状態濃度を得るために、より速い点滴速度が必要です。"
                }
            ]
        },
        {
            id: 409,
            title: "速度過程の数学的基礎",
            duration: "15分",
            content: `<h2>速度過程の数学的基礎</h2>
                <p>薬物動態学は、薬物の体内での吸収・分布・代謝・排泄（ADME）を<strong>数学的に記述し予測する学問</strong>です。その根幹をなすのが「速度過程（Rate Process）」の概念であり、薬物の消失や吸収がどのような速度則に従うかを理解することは、PKパラメータの導出、用量設計、TDMのすべてに不可欠です。ここでは、最も基本的な<strong>0次速度過程</strong>と<strong>1次速度過程</strong>の数学を体系的に学びます。</p>

                <h3>0次速度過程（Zero-Order Kinetics）</h3>
                <div class="highlight-box">
                    <p><strong>定義：</strong>薬物の消失速度が濃度に依存せず、<strong>一定（定数）</strong>である速度過程。</p>
                    <p><strong>微分方程式：</strong>dC/dt = −k<sub>0</sub></p>
                    <p>k<sub>0</sub>: 0次速度定数（単位：concentration/time、例 μg/mL/h、またはmass/time、例 mg/h）</p>
                </div>

                <h3>0次速度過程の濃度式の導出</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>微分方程式の設定</strong>dC/dt = −k<sub>0</sub>（消失速度が定数）</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>両辺を積分</strong>∫dC = ∫(−k<sub>0</sub>)dt → C(t) = −k<sub>0</sub> × t + 定数</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>初期条件の適用</strong>t = 0 のとき C = C<sub>0</sub> → 定数 = C<sub>0</sub></div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>最終的な濃度式</strong>C(t) = C<sub>0</sub> − k<sub>0</sub> × t（直線的に減少する）</div>
                    </div>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <h4>0次速度過程の半減期</h4>
                        <p>C(t<sub>1/2</sub>) = C<sub>0</sub>/2 を濃度式に代入すると：<br>
                        C<sub>0</sub>/2 = C<sub>0</sub> − k<sub>0</sub> × t<sub>1/2</sub><br>
                        <strong>t<sub>1/2</sub> = C<sub>0</sub> / (2k<sub>0</sub>)</strong><br>
                        半減期が初期濃度C<sub>0</sub>に依存する。濃度が高いほど半減期が長くなる。これが0次速度過程の大きな特徴であり、臨床上の注意点となる。</p>
                    </div>
                    <div class="card">
                        <h4>0次速度過程のグラフ</h4>
                        <p><strong>普通グラフ（C vs t）：</strong>直線（傾き = −k<sub>0</sub>、y切片 = C<sub>0</sub>）<br>
                        <strong>片対数グラフ（ln C vs t）：</strong>下に凸の曲線（直線にならない）<br>
                        普通グラフで直線になることが0次速度過程の判別ポイントである。</p>
                    </div>
                </div>

                <h3>0次速度過程の臨床例</h3>
                <table>
                    <tr><th>薬物・状況</th><th>メカニズム</th><th>臨床的特徴</th></tr>
                    <tr><td><strong>エタノール</strong></td><td>ADH（アルコール脱水素酵素）が飽和</td><td>血中濃度が一定速度（約7〜10 g/h、体重70 kg）で直線的に低下する。濃度によらず毎時間ほぼ同量が代謝される</td></tr>
                    <tr><td><strong>フェニトイン（飽和時）</strong></td><td>CYP2C9/2C19が治療域付近で飽和</td><td>治療域付近で0次に近い消失を示す。わずかな用量増加で血中濃度が急上昇し中毒域に達する危険性がある</td></tr>
                    <tr><td><strong>0次速度の点滴投与</strong></td><td>一定速度R<sub>0</sub>（mg/h）で持続注入</td><td>投与速度R<sub>0</sub>が一定であり体内への薬物入力が0次過程。定常状態ではCss = R<sub>0</sub> / CLとなる</td></tr>
                </table>

                <h3>1次速度過程（First-Order Kinetics）</h3>
                <div class="highlight-box">
                    <p><strong>定義：</strong>薬物の消失速度が、その時点の<strong>濃度に比例</strong>する速度過程。大部分の薬物が治療用量域で従う最も一般的な速度過程。</p>
                    <p><strong>微分方程式：</strong>dC/dt = −k<sub>e</sub> × C</p>
                    <p>k<sub>e</sub>: 1次消失速度定数（単位：time<sup>−1</sup>、例 h<sup>−1</sup>）。「単位時間あたりに消失する薬物の<strong>割合</strong>」を意味する。</p>
                </div>

                <h3>1次速度過程の濃度式の導出（変数分離法）</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>微分方程式の設定</strong>dC/dt = −k<sub>e</sub> × C</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>変数分離</strong>dC/C = −k<sub>e</sub> dt（濃度Cを左辺、時間tを右辺に分離する）</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>両辺を積分</strong>∫(1/C)dC = ∫(−k<sub>e</sub>)dt → ln C(t) = −k<sub>e</sub> × t + 定数</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>初期条件の適用</strong>t = 0 のとき C = C<sub>0</sub> → 定数 = ln C<sub>0</sub></div>
                    </div>
                    <div class="step">
                        <div class="step-num">5</div>
                        <div class="step-content"><strong>対数形と指数形</strong>ln C(t) = ln C<sub>0</sub> − k<sub>e</sub> × t → <strong>C(t) = C<sub>0</sub> × e<sup>(−k<sub>e</sub> × t)</sup></strong>（指数関数的に減少）</div>
                    </div>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <h4>1次速度過程の半減期</h4>
                        <p>C(t<sub>1/2</sub>) = C<sub>0</sub>/2 を対数形に代入：<br>
                        ln(C<sub>0</sub>/2) = ln C<sub>0</sub> − k<sub>e</sub> × t<sub>1/2</sub><br>
                        −ln 2 = −k<sub>e</sub> × t<sub>1/2</sub><br>
                        <strong>t<sub>1/2</sub> = ln 2 / k<sub>e</sub> = 0.693 / k<sub>e</sub></strong><br>
                        半減期が濃度に依存しない（常に一定）。これが1次速度過程の最大の特徴。</p>
                    </div>
                    <div class="card">
                        <h4>1次速度過程のグラフ</h4>
                        <p><strong>普通グラフ（C vs t）：</strong>指数関数的な減衰曲線（上に凸）<br>
                        <strong>片対数グラフ（ln C vs t）：</strong>直線（傾き = −k<sub>e</sub>、y切片 = ln C<sub>0</sub>）<br>
                        片対数グラフで直線になることが1次速度過程の判別ポイント。</p>
                    </div>
                </div>

                <h3>片対数プロットの読み方</h3>
                <div class="highlight-box">
                    <p><strong>自然対数プロット（ln C vs t）の場合：</strong></p>
                    <p>傾き = −k<sub>e</sub>、y切片 = ln C<sub>0</sub></p>
                    <p><strong>常用対数プロット（log C vs t）の場合：</strong></p>
                    <p>傾き = −k<sub>e</sub> / 2.303、y切片 = log C<sub>0</sub></p>
                    <p>（ln C = 2.303 × log C の関係を用いて変換）</p>
                    <p><strong>傾きからk<sub>e</sub>を求める手順：</strong>片対数グラフの消失相の直線部分から任意の2点(t<sub>1</sub>, C<sub>1</sub>)と(t<sub>2</sub>, C<sub>2</sub>)を読み取り、k<sub>e</sub> = (ln C<sub>1</sub> − ln C<sub>2</sub>) / (t<sub>2</sub> − t<sub>1</sub>) で算出する。得られたk<sub>e</sub>から t<sub>1/2</sub> = 0.693/k<sub>e</sub> で半減期を求める。</p>
                </div>

                <h3>速度定数の単位と意味</h3>
                <table>
                    <tr><th>速度定数</th><th>単位</th><th>意味</th><th>具体例</th></tr>
                    <tr><td><strong>k<sub>e</sub>（1次）</strong></td><td>time<sup>−1</sup>（例：h<sup>−1</sup>）</td><td>単位時間あたりに消失する薬物の「割合」</td><td>k<sub>e</sub> = 0.1 h<sup>−1</sup> → 毎時10%が消失</td></tr>
                    <tr><td><strong>k<sub>0</sub>（0次）</strong></td><td>mass/time または conc/time（例：mg/h, μg/mL/h）</td><td>単位時間あたりに消失する薬物の「絶対量」</td><td>k<sub>0</sub> = 10 mg/h → 毎時10 mgが消失</td></tr>
                </table>

                <h3>0次速度過程と1次速度過程の比較</h3>
                <table>
                    <tr><th>特徴</th><th>0次速度過程</th><th>1次速度過程</th></tr>
                    <tr><td><strong>消失速度</strong></td><td>一定（濃度に依存しない）</td><td>濃度に比例</td></tr>
                    <tr><td><strong>微分方程式</strong></td><td>dC/dt = −k<sub>0</sub></td><td>dC/dt = −k<sub>e</sub> × C</td></tr>
                    <tr><td><strong>濃度式</strong></td><td>C(t) = C<sub>0</sub> − k<sub>0</sub>t</td><td>C(t) = C<sub>0</sub> × e<sup>−k<sub>e</sub>t</sup></td></tr>
                    <tr><td><strong>半減期</strong></td><td>t<sub>1/2</sub> = C<sub>0</sub>/(2k<sub>0</sub>)（濃度依存）</td><td>t<sub>1/2</sub> = 0.693/k<sub>e</sub>（一定）</td></tr>
                    <tr><td><strong>普通グラフ</strong></td><td>直線</td><td>指数減衰曲線</td></tr>
                    <tr><td><strong>片対数グラフ</strong></td><td>下に凸の曲線</td><td>直線</td></tr>
                    <tr><td><strong>速度定数の単位</strong></td><td>conc/time or mass/time</td><td>time<sup>−1</sup></td></tr>
                    <tr><td><strong>臨床例</strong></td><td>エタノール、飽和時のフェニトイン</td><td>大部分の薬物（治療用量域）</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>重要ポイント：</strong>臨床上、大部分の薬物は治療用量域で1次速度過程に従う。0次速度過程は代謝酵素の飽和（Michaelis-Menten型動態でC ≫ K<sub>m</sub>の場合）や持続点滴投与などの限定的な状況で出現する。速度過程の区別は、適切な用量設計と安全な投与計画の基盤であり、片対数グラフでの直線性の確認が最も実践的な判別法である。</p>
                </div>`,
            quiz: [
                {
                    id: "q409_1",
                    type: "choice",
                    question: "0次速度過程の半減期に関する記述として正しいものはどれか？",
                    options: ["半減期は常に一定で濃度に依存しない","半減期は初期濃度に依存し、濃度が高いほど長くなる","半減期は消失速度定数keのみで決まる","半減期は分布容積に反比例する"],
                    answer: 1,
                    explanation: "0次速度過程の半減期は t1/2 = C0/(2k0) で求められ、初期濃度C0に依存します。濃度が高いほど半減期が長くなります。これは1次速度過程（t1/2 = 0.693/ke、濃度に依存しない）との大きな違いです。エタノールの代謝で臨床的にも観察される現象です。"
                },
                {
                    id: "q409_2",
                    type: "choice",
                    question: "1次速度過程に従う薬物の血中濃度データを片対数グラフ（ln C vs t）にプロットした場合、得られる直線の傾きは何を表すか？",
                    options: ["−k0（0次速度定数の負値）","−ke（消失速度定数の負値）","−ke/2.303","ln C0（初期濃度の自然対数）"],
                    answer: 1,
                    explanation: "1次速度過程では ln C(t) = ln C0 − ke × t が成り立ち、自然対数プロット（ln C vs t）の傾きは −ke です。なお、常用対数プロット（log C vs t）の場合は傾きが −ke/2.303 となります。y切片は ln C0 です。"
                },
                {
                    id: "q409_3",
                    type: "fill",
                    question: "1次速度過程において、変数分離法で微分方程式 dC/dt = −ke × C を積分すると、濃度の時間変化は C(t) = C0 × e^(−ke × t) となり、半減期は t1/2 = ＿＿＿ / ke で求められる。",
                    answer: "0.693",
                    explanation: "1次速度過程の半減期は t1/2 = 0.693/ke です。0.693は ln 2（自然対数の2）の値であり、濃度が半分になる条件 C0/2 = C0 × e^(−ke × t1/2) から ln 2 = ke × t1/2 として導出されます。"
                }
            ]
        },
        {
            id: 410,
            title: "吸収速度の解析",
            duration: "15分",
            content: `<h2>吸収速度の解析</h2>
                <p>経口投与された薬物が全身循環に到達するまでの<strong>吸収速度（Absorption Rate）</strong>は、薬効の発現速度、Cmax、Tmaxに直接影響する重要な薬物動態パラメータです。吸収速度の定量的評価は、製剤設計、生物学的同等性評価、徐放性製剤の開発において中核的な役割を果たします。本モジュールでは、吸収速度定数（k<sub>a</sub>）の意義と主要な解析手法を学びます。</p>

                <h3>吸収速度定数（ka）の意義</h3>
                <div class="highlight-box">
                    <p><strong>1次吸収モデル：</strong>経口投与後の吸収過程が1次速度過程に従うと仮定する最も一般的なモデル。</p>
                    <p>消化管内薬物量の減少速度：dX<sub>GI</sub>/dt = −k<sub>a</sub> × X<sub>GI</sub></p>
                    <p>k<sub>a</sub>: 吸収速度定数（単位：h<sup>−1</sup>）。消化管から全身循環への薬物移行速度を表す。</p>
                    <p><strong>吸収半減期：</strong>t<sub>1/2,abs</sub> = 0.693 / k<sub>a</sub>（消化管内の薬物が半分吸収されるのに要する時間）</p>
                    <p>通常、吸収は消失より速い（k<sub>a</sub> > k<sub>e</sub>）ため、吸収半減期は消失半減期より短い。</p>
                </div>

                <h3>1-コンパートメントモデル経口投与の式</h3>
                <div class="highlight-box">
                    <p><strong>Bateman関数（バートマン関数）：</strong></p>
                    <p>C(t) = [F × Dose × k<sub>a</sub>] / [V<sub>d</sub> × (k<sub>a</sub> − k<sub>e</sub>)] × [e<sup>−k<sub>e</sub>×t</sup> − e<sup>−k<sub>a</sub>×t</sup>]</p>
                    <p>F: バイオアベイラビリティ、Dose: 投与量、V<sub>d</sub>: 分布容積</p>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <h4>Bateman関数の特徴</h4>
                        <p>2つの指数関数項の差として表される。e<sup>−k<sub>e</sub>×t</sup>は消失を、e<sup>−k<sub>a</sub>×t</sup>は吸収の完了を反映する。投与直後（t = 0）ではC = 0（両指数項が等しい）。時間経過とともにe<sup>−k<sub>a</sub>×t</sup>がまず減衰し（吸収完了）、その後e<sup>−k<sub>e</sub>×t</sup>が残り消失相を形成する。</p>
                    </div>
                    <div class="card">
                        <h4>血中濃度曲線の形状</h4>
                        <p>吸収相：濃度が急速に上昇（k<sub>a</sub>が支配的）。Cmaxに到達：吸収速度 = 消失速度の時点。消失相：吸収が完了し、主に消失のみが進行。片対数グラフの消失相の傾きからk<sub>e</sub>を求め、残差法でk<sub>a</sub>を求める。</p>
                    </div>
                </div>

                <h3>残差法（Method of Residuals / Residual Method）</h3>
                <p>残差法は、経口投与後の血中濃度データからk<sub>a</sub>を求める古典的かつ基本的な手法です。片対数グラフを用いたグラフ的手法（feathering法とも呼ばれる）で、薬物動態学の基礎として極めて重要です。</p>

                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>消失相の直線を決定する</strong>片対数グラフ上で、吸収完了後の消失相（通常Tmax以降の後半のデータ点）に直線を当てはめる。この直線の傾きが−k<sub>e</sub>（自然対数の場合）であり、k<sub>e</sub>を算出する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>消失相の直線をt = 0に外挿する</strong>消失相の直線をt = 0まで延長し、y切片の値を求める。これは Bateman関数の係数 A = F × Dose × k<sub>a</sub> / [V<sub>d</sub> × (k<sub>a</sub> − k<sub>e</sub>)] に相当する。外挿値をC'(t)とする。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>残差（Residual）を計算する</strong>吸収相の各時点において、外挿直線上の値 C'(t) と実測値 C(t) の差を求める。残差 = C'(t) − C(t)。この残差はe<sup>−k<sub>a</sub>×t</sup>に比例する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>残差を片対数グラフにプロットする</strong>残差を片対数グラフ上にプロットすると直線が得られる。この直線の傾きが−k<sub>a</sub>であり、k<sub>a</sub>を算出する。t<sub>1/2,abs</sub> = 0.693/k<sub>a</sub> で吸収半減期も求められる。</div>
                    </div>
                </div>

                <div class="highlight-box">
                    <p><strong>残差法の適用条件：</strong>k<sub>a</sub> > k<sub>e</sub> であること（通常の薬物で成立）。1-コンパートメントモデルに従うこと。吸収が1次速度過程に従うこと。k<sub>a</sub> ≈ k<sub>e</sub> の場合は精度が低下し、k<sub>a</sub> < k<sub>e</sub>（フリップフロップ動態）の場合は解釈に注意が必要となる。</p>
                </div>

                <h3>Wagner-Nelson法</h3>
                <p>Wagner-Nelson法は、コンパートメントモデルの詳細な仮定に依存せずに、<strong>吸収率（fraction absorbed）を時間の関数として求める</strong>ことができる手法です。1-コンパートメントモデルの仮定のみを必要とします。</p>

                <div class="highlight-box">
                    <p><strong>Wagner-Nelson式：</strong></p>
                    <p>吸収率 A<sub>b</sub>(t) / A<sub>b</sub>(∞) = [C(t) + k<sub>e</sub> × AUC<sub>0→t</sub>] / [k<sub>e</sub> × AUC<sub>0→∞</sub>]</p>
                    <p><strong>A<sub>b</sub>(t)：</strong>時刻tまでに吸収された薬物量</p>
                    <p><strong>A<sub>b</sub>(∞)：</strong>最終的に吸収された総薬物量</p>
                    <p><strong>C(t)：</strong>時刻tの血中濃度（体内に現存する薬物を反映）</p>
                    <p><strong>k<sub>e</sub> × AUC<sub>0→t</sub>：</strong>時刻tまでに消失した薬物を反映</p>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <h4>Wagner-Nelson法の利点</h4>
                        <p>吸収速度過程が1次かどうかを仮定する必要がない。吸収の全過程（0%→100%）を時間の関数として可視化できる。吸収率 vs 時間のプロットから吸収のパターン（1次、0次、複合過程）を推定できる。1次吸収の場合、ln[1 − A<sub>b</sub>(t)/A<sub>b</sub>(∞)] vs t のプロットの傾きからk<sub>a</sub>を求められる。</p>
                    </div>
                    <div class="card">
                        <h4>Wagner-Nelson法の制限</h4>
                        <p>1-コンパートメントモデルの仮定（体内での速やかな分布平衡）は必要。k<sub>e</sub>の正確な推定が前提（通常はIV投与データまたは経口投与の消失相から求める）。AUC<sub>0→∞</sub>の正確な算出が必要。2-コンパートメントモデルの薬物にはLoo-Riegelman法を用いる。</p>
                    </div>
                </div>

                <h3>フリップフロップ動態（Flip-Flop Kinetics）</h3>
                <p>通常、吸収は消失より速い（k<sub>a</sub> > k<sub>e</sub>）ため、消失相の傾きはk<sub>e</sub>を反映します。しかし、<strong>k<sub>a</sub> < k<sub>e</sub>（吸収が消失より遅い）</strong>場合、この関係が逆転します。</p>

                <div class="highlight-box">
                    <p><strong>フリップフロップ動態の特徴：</strong></p>
                    <p>消失相の見かけの傾きがk<sub>a</sub>を反映する（通常と逆、k<sub>e</sub>ではなくk<sub>a</sub>）。Bateman関数では、より小さい速度定数が終末相を支配するため、k<sub>a</sub> < k<sub>e</sub> の場合は吸収速度定数が消失相の傾きに現れる。残差法で得られる2つの速度定数の帰属が逆転する。</p>
                </div>

                <table>
                    <tr><th>項目</th><th>通常の動態（k<sub>a</sub> > k<sub>e</sub>）</th><th>フリップフロップ動態（k<sub>a</sub> < k<sub>e</sub>）</th></tr>
                    <tr><td><strong>消失相の傾き</strong></td><td>k<sub>e</sub>を反映</td><td>k<sub>a</sub>を反映</td></tr>
                    <tr><td><strong>残差の傾き</strong></td><td>k<sub>a</sub>を反映</td><td>k<sub>e</sub>を反映</td></tr>
                    <tr><td><strong>観察される状況</strong></td><td>通常の即放性製剤</td><td>徐放性製剤、経皮吸収製剤、筋注デポ製剤</td></tr>
                    <tr><td><strong>鑑別法</strong></td><td>−</td><td>IV投与データとの比較でk<sub>e</sub>を独立に決定する</td></tr>
                </table>

                <div class="card-grid">
                    <div class="card">
                        <h4>フリップフロップの臨床的意義</h4>
                        <p>徐放性製剤では薬物の放出が律速段階となり、吸収がゆっくり進むため k<sub>a</sub> < k<sub>e</sub> となりやすい。このため、消失相が薬物自体の消失ではなく製剤からの放出速度を反映する。半減期が見かけ上延長される。</p>
                    </div>
                    <div class="card">
                        <h4>フリップフロップの判別</h4>
                        <p>経口投与データのみからは通常の動態との区別が困難。必ずIV投与（またはIR製剤）のデータからk<sub>e</sub>を独立に決定し、経口投与の消失相の速度定数と比較する必要がある。消失相の速度定数がIVで求めたk<sub>e</sub>と異なれば、フリップフロップを疑う。</p>
                    </div>
                </div>

                <h3>Tmaxの計算</h3>
                <div class="highlight-box">
                    <p><strong>1-コンパートメントモデル・1次吸収における Tmax の式：</strong></p>
                    <p>T<sub>max</sub> = ln(k<sub>a</sub>/k<sub>e</sub>) / (k<sub>a</sub> − k<sub>e</sub>)</p>
                    <p>Tmaxは吸収速度 = 消失速度となる時点。k<sub>a</sub>とk<sub>e</sub>のみで決まり、投与量には依存しない（線形動態の場合）。</p>
                    <p><strong>計算例：</strong>k<sub>a</sub> = 1.5 h<sup>−1</sup>、k<sub>e</sub> = 0.3 h<sup>−1</sup> の場合</p>
                    <p>T<sub>max</sub> = ln(1.5/0.3) / (1.5 − 0.3) = ln(5) / 1.2 = 1.609 / 1.2 ≈ 1.34 時間</p>
                    <p>k<sub>a</sub>が大きいほど（吸収が速いほど）Tmaxは短くなり、薬効発現が速くなる。</p>
                </div>

                <div class="highlight-box">
                    <p><strong>まとめ：</strong>吸収速度の解析は、製剤評価と臨床薬物動態の理解に不可欠である。残差法はk<sub>a</sub>を求める基本手法であり、Wagner-Nelson法はより柔軟な吸収速度解析を可能にする。フリップフロップ動態の存在を認識し、徐放性製剤の評価ではIVデータとの比較による適切な速度定数の帰属が重要である。</p>
                </div>`,
            quiz: [
                {
                    id: "q410_1",
                    type: "choice",
                    question: "残差法（Method of Residuals）において、消失相の直線をt=0に外挿した値と実測値の差（残差）を片対数プロットした場合、その直線の傾きは何を反映するか？",
                    options: ["消失速度定数 ke","吸収速度定数 ka","分布速度定数 k12","Michaelis定数 Km"],
                    answer: 1,
                    explanation: "残差法では、消失相の直線の傾きからkeを求めた後、吸収相の各時点における外挿値と実測値の差（残差）を片対数プロットします。残差はe^(−ka×t)に比例するため、この直線の傾きは−kaを反映し、kaを求めることができます（ka > keの場合）。"
                },
                {
                    id: "q410_2",
                    type: "choice",
                    question: "フリップフロップ動態（ka < ke）に関する記述として正しいものはどれか？",
                    options: ["消失相の傾きが通常通りkeを反映する","即放性製剤で最もよく観察される","消失相の傾きがkaを反映し、見かけの半減期が延長する","IV投与データなしで容易に判別できる"],
                    answer: 2,
                    explanation: "フリップフロップ動態ではka < keのため、Bateman関数においてより小さい速度定数であるkaが終末相を支配します。その結果、消失相の傾きがkaを反映し、見かけの半減期が延長します。徐放性製剤や経皮吸収製剤で観察され、判別にはIV投与データとの比較が必要です。"
                },
                {
                    id: "q410_3",
                    type: "fill",
                    question: "1-コンパートメントモデル・1次吸収モデルにおいて、Tmaxの計算式は Tmax = ln(ka/ke) / (＿＿＿) である。",
                    answer: "ka − ke",
                    explanation: "Tmaxは吸収速度と消失速度が等しくなる時点であり、Tmax = ln(ka/ke) / (ka − ke) で求められます。この式からTmaxはkaとkeのみで決まり、投与量には依存しません（線形動態の場合）。kaが大きいほどTmaxは短くなります。"
                }
            ]
        },
        {
            id: 411,
            title: "PBPKモデル入門",
            duration: "15分",
            content: `<h2>PBPKモデル入門</h2>
                <p>PBPK（Physiologically Based Pharmacokinetic）モデルは、ヒトや動物の<strong>生理学的構造を忠実に反映</strong>した薬物動態モデルです。従来のコンパートメントモデルが経験的なデータフィッティングに基づくのに対し、PBPKモデルは臓器・組織の解剖学的・生理学的情報と薬物の物理化学的性質を組み合わせ、<strong>機構的（mechanistic）に薬物の体内動態を予測</strong>します。近年、医薬品開発や規制科学において不可欠なツールとなっています。</p>

                <h3>PBPKモデルとは</h3>
                <div class="highlight-box">
                    <p><strong>定義：</strong>PBPKモデルとは、体内の各臓器・組織を個別のコンパートメントとして表現し、それぞれの臓器血流量（Q）、組織容積（V）、組織-血漿間分配係数（Kp）などの生理学的パラメータを用いて、薬物の吸収・分布・代謝・排泄（ADME）を定量的に記述する数理モデルである。</p>
                </div>
                <p>PBPKモデルの最大の特徴は、モデルパラメータに<strong>生理学的意味がある</strong>点です。これにより、異種間スケーリング（動物からヒトへの外挿）や特殊集団（小児、高齢者、妊婦、臓器障害患者）への外挿が理論的に可能となります。</p>

                <h3>従来のコンパートメントモデルとの違い</h3>
                <table>
                    <tr><th>特徴</th><th>従来のコンパートメントモデル</th><th>PBPKモデル</th></tr>
                    <tr><td><strong>アプローチ</strong></td><td>経験的（empirical）：データに曲線をフィッティング</td><td>機構的（mechanistic）：生理学に基づき構築</td></tr>
                    <tr><td><strong>コンパートメント</strong></td><td>1〜3個の抽象的コンパートメント（中心・末梢）</td><td>臓器ごとに個別のコンパートメント（肝、腎、肺、脳、筋肉、脂肪等）</td></tr>
                    <tr><td><strong>パラメータの意味</strong></td><td>数学的パラメータ（k12, k21等）で生理学的意味は限定的</td><td>臓器血流量、臓器重量、酵素発現量など生理学的に解釈可能</td></tr>
                    <tr><td><strong>必要データ</strong></td><td>臨床PK実測データが必須</td><td>in vitroデータ＋生理学的パラメータで構築可能</td></tr>
                    <tr><td><strong>外挿性</strong></td><td>低い（同一条件下のみ有効）</td><td>高い（集団間・種間外挿が可能）</td></tr>
                    <tr><td><strong>複雑さ</strong></td><td>低い（ODE数個）</td><td>高い（数十本のODE）</td></tr>
                    <tr><td><strong>主な用途</strong></td><td>PK解析、投与設計、母集団PK</td><td>DDI予測、FIH予測、特殊集団外挿、規制申請</td></tr>
                </table>

                <h3>PBPKモデルの基本構造</h3>
                <p>PBPKモデルでは、体内を複数の臓器・組織コンパートメントに分割し、それらを血流（動脈血・静脈血）で連結します。典型的なモデルには以下の臓器が含まれます。</p>
                <div class="card-grid">
                    <div class="card">
                        <h4>含まれる主な臓器</h4>
                        <p>肝臓、腎臓、肺、心臓、脳、筋肉、脂肪、皮膚、骨、脾臓、消化管（胃・小腸・大腸）、動脈血、静脈血。各臓器は血流量Q<sub>i</sub>、組織容積V<sub>i</sub>、分配係数Kp<sub>i</sub>で特徴づけられる。</p>
                    </div>
                    <div class="card">
                        <h4>基本構造の概念</h4>
                        <p>動脈血 → 各臓器（並列配置）→ 静脈血 → 肺 → 動脈血のループ。各臓器への薬物供給は臓器血流量に比例する。臓器での代謝・排泄がある場合は該当臓器からの消失項を追加する。</p>
                    </div>
                </div>

                <h3>臓器モデルの種類</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>血流律速モデル（Well-stirred / Perfusion-limited model）</h4>
                        <p>臓器内の薬物濃度が<strong>瞬時に均一</strong>になると仮定。膜透過が十分速い薬物に適用。多くの低分子薬物はこのモデルで記述可能。臓器からの流出濃度は臓器内遊離型濃度と平衡にある。</p>
                        <p>dC<sub>tissue</sub>/dt = (Q<sub>i</sub>/V<sub>i</sub>) × (C<sub>art</sub> - C<sub>tissue</sub>/Kp<sub>i</sub>)</p>
                    </div>
                    <div class="card">
                        <h4>膜律速モデル（Permeability-limited model）</h4>
                        <p>臓器の<strong>細胞膜透過が律速段階</strong>となる場合に使用。各臓器を血管側（vascular）と細胞内側（intracellular）の2つのサブコンパートメントに分割。高分子薬物やトランスポーター基質の記述に必要。</p>
                        <p>膜透過クリアランス（PS: Permeability-Surface area product）がパラメータとして追加される。</p>
                    </div>
                </div>

                <h3>組織分配係数（Kp）</h3>
                <div class="highlight-box">
                    <p><strong>定義：</strong>Kp（tissue-to-plasma partition coefficient）は、定常状態における組織中薬物濃度と血漿中薬物濃度の比。Kp = C<sub>tissue,ss</sub> / C<sub>plasma,ss</sub></p>
                    <p>Kpは臓器ごとに異なり、薬物の脂溶性、イオン化度、タンパク結合率によって決まる。</p>
                </div>
                <p>Kpの予測には以下の代表的な手法が用いられます。</p>
                <table>
                    <tr><th>予測手法</th><th>概要</th><th>特徴</th></tr>
                    <tr><td><strong>Rodgers &amp; Rowland法</strong></td><td>薬物のイオン化状態を考慮し、組織構成成分（中性脂質、リン脂質、水分、タンパク質）への分配を個別に計算</td><td>塩基性薬物のリン脂質膜への結合を適切に反映。現在最も広く使用される</td></tr>
                    <tr><td><strong>Poulin &amp; Theil法</strong></td><td>組織の脂質・水分組成比と薬物のlogPから分配を予測</td><td>比較的シンプルで初期の手法。中性薬物への適用に適する</td></tr>
                    <tr><td><strong>Berezhkovskiy法</strong></td><td>遊離型分率ベースの補正を導入</td><td>タンパク結合率が高い薬物への精度向上</td></tr>
                </table>

                <h3>PBPKモデルに必要な入力パラメータ</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>薬物パラメータ（Drug-specific）</h4>
                        <p><strong>物理化学的性質：</strong>分子量（MW）、logP / logD（脂溶性）、pKa（解離定数）、水溶解度、血漿タンパク結合率（fu,p）</p>
                        <p><strong>In vitro ADME データ：</strong>Caco-2透過係数（膜透過性）、ミクロソーム/ヘパトサイトでの代謝安定性（CLint）、CYP寄与率、トランスポーター基質/阻害データ</p>
                    </div>
                    <div class="card">
                        <h4>生理学的パラメータ（System-specific）</h4>
                        <p><strong>解剖学的データ：</strong>各臓器の重量・容積、臓器血流量、組織組成（脂質・水分・タンパク質比率）</p>
                        <p><strong>生化学的データ：</strong>CYP酵素発現量（pmol/mg protein）、トランスポーター発現量、GFR（糸球体ろ過量）、胆汁流量</p>
                        <p>これらのパラメータは年齢・性別・人種・疾患状態によって変動し、特殊集団のシミュレーションに活用される。</p>
                    </div>
                </div>

                <h3>PBPKモデルの主な活用場面</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>初回ヒト投与量（FIH dose）の予測</strong>動物のin vivoデータとヒトのin vitro代謝データを組み合わせて、ヒトでの血中濃度推移を予測。安全かつ有効な初回投与量を科学的根拠に基づき設定する。NOAEL（無毒性量）からのallometric scalingに加え、PBPKによる予測を併用することで信頼性が向上する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>薬物相互作用（DDI）の予測</strong>CYP阻害・誘導のin vitroデータをPBPKモデルに組み込み、併用時の血中濃度変動を定量的にシミュレーション。FDA・EMAのDDIガイダンスでは、PBPKモデルによるDDI予測が臨床試験の免除根拠として認められている。例：CYP3A4基質とケトコナゾール併用時のAUC変化比の予測。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>特殊集団への外挿</strong>小児（臓器重量・酵素成熟度の変化）、妊婦（血流量・GFR増加、タンパク結合変化）、高齢者（臓器機能低下）、肝障害患者（肝血流低下、酵素活性低下）など、生理学的パラメータを集団特性に合わせて変更することで、各集団での血中濃度を予測する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>食事影響・製剤変更の予測</strong>消化管のPBPKモデル（ACAT: Advanced Compartmental Absorption and Transit model等）を用いて、食事による胃腸管環境の変化（pH、胆汁酸、胃内容排出時間）が吸収に及ぼす影響をシミュレーション。製剤変更時のBE予測にも活用される。</div>
                    </div>
                </div>

                <h3>規制科学での活用</h3>
                <table>
                    <tr><th>規制当局</th><th>ガイダンス・対応状況</th></tr>
                    <tr><td><strong>FDA（米国）</strong></td><td>2018年に「Physiologically Based Pharmacokinetic Analyses — Format and Content」ガイダンスを発出。DDI予測、小児用量設定、肝腎障害患者への用量調節のエビデンスとしてPBPK解析の申請を受理。2020年時点で100件以上のNDA/BLAでPBPK解析が提出されている。</td></tr>
                    <tr><td><strong>EMA（欧州）</strong></td><td>PBPKに関する qualification opinion を発出。DDIに関するガイドラインでPBPKモデルの活用を推奨。モデルの検証（verification）プロセスを重視。</td></tr>
                    <tr><td><strong>PMDA（日本）</strong></td><td>医薬品開発におけるPBPKの活用について、DDI予測や小児外挿におけるPBPK解析結果を審査資料として受理。日本人の生理学的パラメータを反映したモデル構築が重要。</td></tr>
                </table>
                <div class="highlight-box">
                    <p><strong>規制申請でのポイント：</strong>PBPKモデルを規制申請に使用する際は、(1) モデルの妥当性検証（既知の臨床データでの再現性確認）、(2) 感度分析（キーパラメータの影響評価）、(3) 不確実性の評価、が求められる。モデルの構築・検証・適用の全プロセスを文書化する必要がある。</p>
                </div>

                <h3>主要なPBPKソフトウェア</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>Simcyp（Certara社）</h4>
                        <p>最も広く使用される商用PBPKプラットフォーム。豊富な集団データベース（北欧、中国、日本人等）を内蔵。DDI予測、小児外挿に強み。仮想臨床試験シミュレーションが可能。FDAへの申請で最も多く使用されている。</p>
                    </div>
                    <div class="card">
                        <h4>GastroPlus（Simulations Plus社）</h4>
                        <p>消化管吸収モデル（ACAT）に強みを持つ。製剤設計や食事影響の予測に特に有用。PBPKモジュールも搭載し、全身動態のシミュレーションが可能。BCS分類に基づく吸収予測に優れる。</p>
                    </div>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h4>PK-Sim / MoBi（Open Systems Pharmacology）</h4>
                        <p>オープンソースのPBPKプラットフォーム。無料で利用可能。R言語との連携（OSPSuite.R）が可能。モデルの透明性が高く、学術研究に適する。欧州を中心に規制申請での使用も増加。</p>
                    </div>
                    <div class="card">
                        <h4>その他のツール</h4>
                        <p><strong>MATLAB / SimBiology：</strong>カスタムモデル構築に柔軟性が高い。<strong>R / mrgsolve：</strong>オープンソースでODEベースのモデリング。<strong>Berkeley Madonna：</strong>教育目的に適したODEソルバー。</p>
                    </div>
                </div>

                <h3>PBPKモデルの限界と課題</h3>
                <div class="highlight-box">
                    <p><strong>注意すべき限界：</strong></p>
                    <p>(1) <strong>In vitro-in vivo外挿（IVIVE）の不確実性：</strong>in vitroで測定した代謝データが必ずしもin vivoを正確に反映しない場合がある。特にCLintのスケーリングファクター選択が結果に大きく影響する。</p>
                    <p>(2) <strong>トランスポーターの定量的予測の困難さ：</strong>トランスポーター発現量のin vitro-in vivoスケーリングは代謝酵素より不確実性が高い。</p>
                    <p>(3) <strong>パラメータの不確実性の累積：</strong>多数のパラメータを使用するため、個々のパラメータの不確実性が累積する可能性がある。感度分析による影響評価が重要。</p>
                </div>`,
            quiz: [
                {
                    id: "q411_1",
                    type: "choice",
                    question: "PBPKモデルと従来のコンパートメントモデルの違いとして最も適切なものはどれか？",
                    options: ["PBPKモデルは臨床PKデータがなければ構築できない","PBPKモデルは生理学的パラメータに基づき臓器ごとにコンパートメントを設定する","従来モデルの方が異種間外挿に優れている","PBPKモデルはパラメータ数が少なくシンプルである"],
                    answer: 1,
                    explanation: "PBPKモデルは各臓器を個別のコンパートメントとして表現し、臓器血流量・組織容積・分配係数などの生理学的パラメータを使用します。これにより、in vitroデータと生理学的情報からモデルを構築でき（臨床データなしでも予測可能）、異種間・集団間外挿にも優れています。"
                },
                {
                    id: "q411_2",
                    type: "choice",
                    question: "PBPKモデルにおける組織分配係数（Kp）の予測法として、塩基性薬物のリン脂質膜への結合を考慮し、現在最も広く使用されている手法はどれか？",
                    options: ["Poulin & Theil法","Berezhkovskiy法","Rodgers & Rowland法","Allometric scaling法"],
                    answer: 2,
                    explanation: "Rodgers & Rowland法は、薬物のイオン化状態（酸性・塩基性・中性）を考慮し、組織構成成分（中性脂質、リン脂質、水分、タンパク質）への分配を個別に計算する手法です。特に塩基性薬物のリン脂質膜への結合を適切に反映でき、現在PBPKモデリングで最も広く使用されています。"
                },
                {
                    id: "q411_3",
                    type: "fill",
                    question: "PBPKモデルにおいて、臓器内の薬物濃度が瞬時に均一になると仮定するモデルを＿＿＿モデル（英語ではWell-stirred model）と呼ぶ。",
                    answer: "血流律速",
                    explanation: "血流律速モデル（Well-stirred model / Perfusion-limited model）は、臓器内の薬物濃度が瞬時に均一になると仮定します。膜透過が十分速い低分子薬物に適用されます。一方、膜透過が律速となる場合はPermeability-limited model（膜律速モデル）を使用し、臓器を血管側と細胞内側の2つのサブコンパートメントに分割します。"
                }
            ]
        },
        {
            id: 412,
            title: "PKデータ解釈の総合演習",
            duration: "20分",
            content: `<h2>PKデータ解釈の総合演習</h2>
                <p>この演習モジュールでは、Level 4で学んだ<strong>全ての概念を統合的に活用</strong>し、実践的なPKデータの解析・解釈を行います。主要PKパラメータの算出、クリアランスと分布容積の関係、コンパートメントモデル解析、母集団PKの考え方を応用して、臨床シナリオに基づくケーススタディに取り組みましょう。</p>

                <h3>ケーススタディ1: 静脈内投与後のPKパラメータ算出</h3>
                <div class="highlight-box">
                    <p><strong>症例：</strong>新規抗菌薬Xを健康成人被験者（体重70 kg）に500 mg静脈内ボーラス投与した。以下の血漿中濃度データが得られた。</p>
                </div>
                <table>
                    <tr><th>時間 (h)</th><th>血漿中濃度 (μg/mL)</th><th>ln(濃度)</th></tr>
                    <tr><td>0.5</td><td>18.0</td><td>2.890</td></tr>
                    <tr><td>1</td><td>16.2</td><td>2.785</td></tr>
                    <tr><td>2</td><td>13.1</td><td>2.573</td></tr>
                    <tr><td>4</td><td>8.6</td><td>2.152</td></tr>
                    <tr><td>6</td><td>5.6</td><td>1.723</td></tr>
                    <tr><td>8</td><td>3.7</td><td>1.308</td></tr>
                    <tr><td>12</td><td>1.6</td><td>0.470</td></tr>
                    <tr><td>24</td><td>0.1</td><td>-2.303</td></tr>
                </table>

                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>消失速度定数（ke）の算出</strong>片対数プロットでln(C)を時間に対してプロットすると直線になる。2点を選んで傾きを求める。例えば t=1 (ln C=2.785) と t=8 (ln C=1.308) を使用すると、ke = -(1.308 - 2.785)/(8 - 1) = -(-1.477)/7 = <strong>0.211 h<sup>-1</sup></strong></div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>消失半減期（t1/2）の算出</strong>t<sub>1/2</sub> = 0.693 / k<sub>e</sub> = 0.693 / 0.211 = <strong>3.28 h（約3.3時間）</strong></div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>初期濃度（C0）の推定</strong>回帰直線を t=0 に外挿する。ln(C<sub>0</sub>) = ln(C<sub>t</sub>) + k<sub>e</sub> × t = 2.785 + 0.211 × 1 = 2.996。C<sub>0</sub> = e<sup>2.996</sup> = <strong>20.0 μg/mL</strong></div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>分布容積（Vd）の算出</strong>V<sub>d</sub> = Dose / C<sub>0</sub> = 500 mg / 20.0 μg/mL = 500 mg / 20.0 mg/L = <strong>25.0 L</strong>（体重あたり 25.0/70 = 0.36 L/kg）。これは細胞外液量に近い値で、主に細胞外液に分布する薬物と考えられる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">5</div>
                        <div class="step-content"><strong>全身クリアランス（CL）の算出</strong>CL = k<sub>e</sub> × V<sub>d</sub> = 0.211 h<sup>-1</sup> × 25.0 L = <strong>5.28 L/h</strong>（= 88 mL/min）。あるいは CL = Dose / AUC<sub>0-∞</sub> で求めることもできる。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">6</div>
                        <div class="step-content"><strong>AUC0-∞ の算出</strong>1コンパートメントモデルでは AUC<sub>0-∞</sub> = C<sub>0</sub> / k<sub>e</sub> = 20.0 / 0.211 = <strong>94.8 μg·h/mL</strong>。検算：CL = Dose / AUC = 500 mg / 94.8 mg·h/L = 5.27 L/h（上記CLと一致）。</div>
                    </div>
                </div>

                <h3>ケーススタディ2: 経口投与後のデータ解析</h3>
                <div class="highlight-box">
                    <p><strong>症例：</strong>同じ薬物Xの経口錠剤500 mgを別の被験者（体重70 kg）に投与した。以下のデータが得られた。</p>
                </div>
                <table>
                    <tr><th>時間 (h)</th><th>血漿中濃度 (μg/mL)</th></tr>
                    <tr><td>0</td><td>0</td></tr>
                    <tr><td>0.5</td><td>3.8</td></tr>
                    <tr><td>1</td><td>7.2</td></tr>
                    <tr><td>1.5</td><td>9.5</td></tr>
                    <tr><td>2</td><td>10.8</td></tr>
                    <tr><td>3</td><td>10.2</td></tr>
                    <tr><td>4</td><td>8.1</td></tr>
                    <tr><td>6</td><td>4.9</td></tr>
                    <tr><td>8</td><td>2.8</td></tr>
                    <tr><td>12</td><td>0.9</td></tr>
                    <tr><td>24</td><td>0.05</td></tr>
                </table>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>CmaxとTmaxの読み取り</strong>表から最高濃度を読み取る。<strong>Cmax = 10.8 μg/mL</strong>（t = 2 h時点）、<strong>Tmax = 2 h</strong>。実際の臨床試験では、サンプリング間隔をより細かくしてCmax・Tmaxの精度を上げることがある。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>AUCの台形法（Trapezoidal rule）による計算</strong>隣接する2時点間を台形として面積を計算し合計する。AUC<sub>t1-t2</sub> = (C<sub>1</sub> + C<sub>2</sub>) / 2 × (t<sub>2</sub> - t<sub>1</sub>)。各区間：(0-0.5) = 0.95, (0.5-1) = 2.75, (1-1.5) = 4.18, (1.5-2) = 5.08, (2-3) = 10.50, (3-4) = 9.15, (4-6) = 13.00, (6-8) = 7.70, (8-12) = 7.40, (12-24) = 5.70。AUC<sub>0-24h</sub> = <strong>66.4 μg·h/mL</strong>。最終相の外挿 AUC<sub>24-∞</sub> = C<sub>last</sub>/k<sub>e</sub> = 0.05/0.211 = 0.24。AUC<sub>0-∞</sub> ≈ <strong>66.6 μg·h/mL</strong></div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>バイオアベイラビリティ（F）の算出</strong>F = (AUC<sub>PO</sub> × Dose<sub>IV</sub>) / (AUC<sub>IV</sub> × Dose<sub>PO</sub>)。同用量（500 mg）投与のため、F = AUC<sub>PO</sub> / AUC<sub>IV</sub> = 66.6 / 94.8 = <strong>0.70（70%）</strong>。約30%が初回通過効果等で失われていることを意味する。</div>
                    </div>
                </div>

                <h3>ケーススタディ3: 反復投与の投与設計</h3>
                <div class="highlight-box">
                    <p><strong>症例：</strong>65歳男性、体重65 kg、腎機能正常（eGFR 85 mL/min/1.73m<sup>2</sup>）。感染症治療のため薬物Xを使用する。治療域は<strong>Cmin &ge; 2.0 μg/mL</strong>（有効濃度下限）、<strong>Cmax &le; 15.0 μg/mL</strong>（安全濃度上限）。PKパラメータ：t<sub>1/2</sub> = 3.3 h, V<sub>d</sub> = 25 L, CL = 5.3 L/h, F = 0.70。</p>
                </div>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>投与間隔（τ）の設定</strong>一般的に投与間隔は 1〜3 半減期が推奨される。t<sub>1/2</sub> = 3.3 h なので、τ = 6 h（約2半減期）を選択。1日4回投与（q6h）。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>維持投与量の計算</strong>目標平均定常状態濃度を Css,avg = 5 μg/mL と設定。Dose = (Css,avg × CL × τ) / F = (5 × 5.3 × 6) / 0.70 = 159 / 0.70 = <strong>227 mg ≈ 250 mg（q6h）</strong>（製剤規格に合わせて端数を調整）</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>定常状態Cmax,ssとCmin,ssの予測</strong>蓄積係数 R = 1 / (1 - e<sup>-ke×τ</sup>) = 1 / (1 - e<sup>-0.211×6</sup>) = 1 / (1 - 0.283) = 1 / 0.717 = <strong>1.40</strong>。単回投与のCmaxを 10.8 μg/mL（250 mg補正で 10.8 × 250/500 = 5.4 μg/mL）とすると、Cmax,ss = R × Cmax（単回）= 1.40 × 5.4 = <strong>7.6 μg/mL</strong>。Cmin,ss = Cmax,ss × e<sup>-ke×τ</sup> = 7.6 × e<sup>-0.211×6</sup> = 7.6 × 0.283 = <strong>2.2 μg/mL</strong></div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>治療域内の確認</strong>Cmax,ss = 7.6 μg/mL &le; 15.0 μg/mL（安全域内 ✓）、Cmin,ss = 2.2 μg/mL &ge; 2.0 μg/mL（有効域内 ✓）。この投与設計は治療域内に維持される。定常状態到達時間 ≈ 5 × t<sub>1/2</sub> = 5 × 3.3 = <strong>16.5時間（約17時間後）</strong></div>
                    </div>
                    <div class="step">
                        <div class="step-num">5</div>
                        <div class="step-content"><strong>負荷投与量（Loading Dose）の検討</strong>定常状態到達まで約17時間かかるため、速やかに有効濃度に達する必要がある場合は負荷投与を検討する。LD = (V<sub>d</sub> × Css,avg) / F = (25 × 5) / 0.70 = <strong>179 mg ≈ 250 mg</strong>（1回目の投与量を倍量とする方法も臨床では一般的）。初回投与を500 mgとし、以後250 mg q6hとする投与設計も選択肢となる。</div>
                    </div>
                </div>

                <h3>ケーススタディ4: 非線形動態の判別</h3>
                <div class="highlight-box">
                    <p><strong>症例：</strong>新規薬物Yの第I相用量漸増試験（single ascending dose study）において、以下のAUCデータが得られた。線形動態か非線形動態かを判別せよ。</p>
                </div>
                <table>
                    <tr><th>投与量 (mg)</th><th>AUC<sub>0-∞</sub> (ng·h/mL)</th><th>用量正規化AUC (AUC/Dose) (ng·h/mL/mg)</th><th>CL/F (L/h)</th></tr>
                    <tr><td>50</td><td>520</td><td>10.4</td><td>96.2</td></tr>
                    <tr><td>100</td><td>1,080</td><td>10.8</td><td>92.6</td></tr>
                    <tr><td>200</td><td>3,500</td><td>17.5</td><td>57.1</td></tr>
                    <tr><td>400</td><td>12,800</td><td>32.0</td><td>31.3</td></tr>
                    <tr><td>800</td><td>58,000</td><td>72.5</td><td>13.8</td></tr>
                </table>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>用量正規化AUC（AUC/Dose）の比較</strong>線形動態であれば、AUC/Doseは用量によらず一定となる。上表では50 mg（10.4）→ 100 mg（10.8）はほぼ一定だが、200 mg以上でAUC/Doseが<strong>用量依存的に増加</strong>している。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>CL/Fの変動</strong>線形動態ではCL/Fは一定。200 mg以上でCL/Fが<strong>用量増加に伴い低下</strong>しており、見かけのクリアランスが減少している。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>判定と考察</strong>50〜100 mgでは線形動態を示すが、200 mg以上で<strong>非線形動態（Michaelis-Menten型飽和動態）</strong>が認められる。AUCが用量比以上に増加し、CL/Fが低下するパターンは、<strong>代謝酵素の飽和</strong>（Vmaxへの接近）を示唆する。用量設定にあたっては、非線形領域での予測困難性と蓄積リスクに注意が必要。</div>
                    </div>
                </div>

                <h3>PKパラメータ間の関係マップ</h3>
                <p>主要なPKパラメータは互いに密接に関連しています。以下にその関係を整理します。</p>
                <table>
                    <tr><th>関係式</th><th>意味</th><th>臨床的意義</th></tr>
                    <tr><td><strong>t<sub>1/2</sub> = 0.693 × V<sub>d</sub> / CL</strong></td><td>半減期はVdとCLの比で決まる</td><td>CLが低下 → t<sub>1/2</sub>延長。Vdが増大 → t<sub>1/2</sub>延長</td></tr>
                    <tr><td><strong>k<sub>e</sub> = CL / V<sub>d</sub></strong></td><td>消失速度定数はCLとVdの比</td><td>keから半減期を算出：t<sub>1/2</sub> = 0.693 / k<sub>e</sub></td></tr>
                    <tr><td><strong>AUC = Dose / CL</strong>（IV時）</td><td>AUCはDoseとCLで決まる</td><td>CL一定なら AUC は Dose に比例（線形動態）</td></tr>
                    <tr><td><strong>AUC = F × Dose / CL</strong>（PO時）</td><td>経口ではFが加わる</td><td>F低下 → AUC低下 → 曝露量不足の可能性</td></tr>
                    <tr><td><strong>Css = R<sub>0</sub> / CL</strong></td><td>持続点滴の定常状態濃度</td><td>点滴速度（R<sub>0</sub>）とCLで目標濃度を設定</td></tr>
                    <tr><td><strong>Css,avg = F × Dose / (CL × τ)</strong></td><td>反復経口投与の平均定常状態濃度</td><td>Dose、τ、CL、Fから定常状態を予測</td></tr>
                    <tr><td><strong>LD = V<sub>d</sub> × C<sub>target</sub></strong></td><td>負荷投与量はVdと目標濃度の積</td><td>速やかに治療濃度に到達させたい場合に使用</td></tr>
                    <tr><td><strong>R = 1 / (1 - e<sup>-ke×τ</sup>)</strong></td><td>蓄積係数</td><td>反復投与での蓄積の程度を予測</td></tr>
                </table>

                <h3>よくある間違いと注意点</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>単位の不統一</h4>
                        <p>最も多いミス。Doseが mg、濃度が μg/mL の場合、μg/mL = mg/L であることを確認。VdをL単位で求める場合、Dose(mg) / C<sub>0</sub>(mg/L) = V<sub>d</sub>(L)。計算前に全ての単位を統一すること。</p>
                    </div>
                    <div class="card">
                        <h4>経口投与でのF忘れ</h4>
                        <p>経口投与データからCL = Dose/AUC とするとCL/F（見かけのクリアランス）が得られる。真のCLを求めるにはFが必要。同様にVd/Fと真のVdを混同しない。</p>
                    </div>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h4>半減期 = 消失能力ではない</h4>
                        <p>t<sub>1/2</sub> = 0.693 × V<sub>d</sub> / CL であるため、半減期が延長しても原因はCL低下かVd増大のどちらか（または両方）。半減期だけを見て「代謝能が変化した」と判断するのは誤り。必ずCLとVdに分けて評価する。</p>
                    </div>
                    <div class="card">
                        <h4>台形法の適用範囲</h4>
                        <p>線形台形法は吸収相で過大評価、対数台形法は消失相で適切。実務では吸収相に線形台形法、消失相に対数台形法を適用する<strong>線形対数台形法（linear-log trapezoidal method）</strong>が推奨される。Cmaxの前後で使い分ける。</p>
                    </div>
                </div>
                <div class="highlight-box">
                    <p><strong>計算のチェックポイント：</strong></p>
                    <p>(1) 単位は全て統一されているか？ (2) IV vs PO で Fの考慮は適切か？ (3) 半減期の変動をCLとVdに分解して評価しているか？ (4) AUC計算で適切な台形法を選択しているか？ (5) 非線形動態の可能性を確認したか（用量正規化AUCの用量依存性）？ (6) 定常状態到達に必要な時間（約5 × t<sub>1/2</sub>）を考慮しているか？</p>
                </div>`,
            quiz: [
                {
                    id: "q412_1",
                    type: "choice",
                    question: "薬物Xを500 mg静脈内投与し、AUC0-∞ = 94.8 μg·h/mLが得られた。同じ薬物を500 mg経口投与した際のAUC0-∞が66.6 μg·h/mLであった場合、バイオアベイラビリティ（F）はいくらか？",
                    options: ["0.50（50%）","0.60（60%）","0.70（70%）","0.80（80%）"],
                    answer: 2,
                    explanation: "同用量投与の場合、F = AUC(PO) / AUC(IV) = 66.6 / 94.8 = 0.702 ≈ 0.70（70%）。異なる用量での投与であれば、F = (AUC_PO × Dose_IV) / (AUC_IV × Dose_PO) で補正が必要です。F = 70% は約30%が初回通過効果等で全身循環に到達しないことを意味します。"
                },
                {
                    id: "q412_2",
                    type: "choice",
                    question: "用量漸増試験で用量正規化AUC（AUC/Dose）が用量増加に伴い増大し、見かけのクリアランス（CL/F）が低下するパターンが認められた。この所見が示唆する薬物動態学的メカニズムとして最も適切なものはどれか？",
                    options: ["吸収率の用量依存的低下","腎排泄トランスポーターの飽和","代謝酵素の飽和（Michaelis-Menten型動態）","血漿タンパク結合率の増加"],
                    answer: 2,
                    explanation: "AUC/Doseの用量依存的な増大とCL/Fの低下は、代謝酵素の飽和を示唆します。代謝がMichaelis-Menten型動態に従う場合、用量がKmを超えると代謝速度がVmaxに近づき、見かけのクリアランスが低下します。結果として、AUCが用量に対して超比例的（supra-proportional）に増加します。"
                },
                {
                    id: "q412_3",
                    type: "fill",
                    question: "消失速度定数 ke = 0.211 h⁻¹ の薬物の消失半減期は、0.693 / 0.211 = 約＿＿＿時間である。",
                    answer: "3.3",
                    explanation: "t1/2 = 0.693 / ke = 0.693 / 0.211 = 3.28 h ≈ 3.3時間。0.693はln(2)の値であり、1次速度過程で濃度が半減する条件から導かれます。この半減期から、定常状態到達には約5半減期（≈16.5時間）が必要であること、また体内からほぼ完全に消失するにも約5半減期を要することがわかります。"
                }
            ]
        }
    ]
};
