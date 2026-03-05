const LEVEL5_DATA = {
    id: 5,
    title: "臨床薬物動態と応用",
    icon: "🏥",
    description: "TDM、生物学的同等性試験、薬物相互作用予測、ポピュレーションPKなど臨床での応用を学ぶ",
    modules: [
        {
            id: 501,
            title: "TDM（治療薬物モニタリング）",
            duration: "15分",
            content: `<h2>TDM（治療薬物モニタリング）</h2>
                <p>TDM（Therapeutic Drug Monitoring）とは、患者の血中薬物濃度を測定し、その結果に基づいて<strong>個々の患者に最適な投与量・投与間隔を設定する</strong>臨床手法です。薬物治療の有効性と安全性を最大化するために不可欠な手段です。</p>

                <h3>TDMの目的</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>有効性の確保</h4>
                        <p>血中濃度が治療域に到達しているかを確認し、効果不十分な場合は増量を検討する。</p>
                    </div>
                    <div class="card">
                        <h4>安全性の確保</h4>
                        <p>血中濃度が中毒域に入っていないかを監視し、副作用・毒性の発現を未然に防ぐ。</p>
                    </div>
                    <div class="card">
                        <h4>個別化医療の実践</h4>
                        <p>患者ごとのPKパラメータの違い（年齢、腎機能、併用薬など）を考慮した投与設計を行う。</p>
                    </div>
                </div>

                <h3>TDMが必要な条件</h3>
                <div class="highlight-box">
                    <p><strong>以下の条件を満たす薬物がTDMの対象となります：</strong></p>
                    <p>1. <strong>治療域が狭い</strong>：有効濃度と中毒濃度の差が小さい</p>
                    <p>2. <strong>薬物動態の個体間変動が大きい</strong>：同じ用量でも患者により血中濃度が大きく異なる</p>
                    <p>3. <strong>濃度と効果/副作用に明確な相関がある</strong>：血中濃度で効果・毒性を予測できる</p>
                    <p>4. <strong>臨床効果の評価が困難</strong>：効果を直接的・迅速に評価しにくい（例：抗てんかん薬の予防効果）</p>
                </div>

                <h3>TDM対象薬物の代表例</h3>
                <table>
                    <tr><th>薬物分類</th><th>代表的薬物</th><th>治療域・目標値</th><th>注意点</th></tr>
                    <tr><td>グリコペプチド系</td><td>バンコマイシン</td><td>AUC/MIC 400-600 μg·h/mL</td><td>従来のトラフ値管理からAUCガイド投与へ移行</td></tr>
                    <tr><td>アミノグリコシド系</td><td>ゲンタマイシン、アミカシン</td><td>ピーク値・トラフ値で管理</td><td>腎毒性・聴覚毒性に注意。1日1回投与法の普及</td></tr>
                    <tr><td>強心配糖体</td><td>ジゴキシン</td><td>0.5〜2.0 ng/mL（心不全では0.5〜0.8）</td><td>腎機能低下・低カリウムで中毒リスク増大</td></tr>
                    <tr><td>キサンチン誘導体</td><td>テオフィリン</td><td>5〜15 μg/mL</td><td>CYP1A2で代謝。喫煙・併用薬の影響大</td></tr>
                    <tr><td>抗てんかん薬</td><td>フェニトイン</td><td>10〜20 μg/mL</td><td>非線形薬物動態（Michaelis-Menten型）</td></tr>
                    <tr><td>抗てんかん薬</td><td>バルプロ酸</td><td>50〜100 μg/mL</td><td>タンパク結合率が濃度依存的に変化</td></tr>
                    <tr><td>免疫抑制薬</td><td>シクロスポリン</td><td>トラフ値 100〜200 ng/mL（移植初期）</td><td>CYP3A4・P-gpの基質。相互作用多い</td></tr>
                    <tr><td>免疫抑制薬</td><td>タクロリムス</td><td>トラフ値 5〜15 ng/mL（臓器・時期により異なる）</td><td>CYP3A5多型の影響が大きい</td></tr>
                </table>

                <h3>採血タイミング</h3>
                <p>TDMの信頼性は適切な<strong>採血タイミング</strong>に依存します。</p>
                <div class="card-grid">
                    <div class="card">
                        <h4>トラフ値（Cmin）</h4>
                        <p><strong>次回投与直前</strong>に採血。最も一般的な採血タイミング。薬物の最低血中濃度を反映し、蓄積や効果の維持を評価する。</p>
                    </div>
                    <div class="card">
                        <h4>ピーク値（Cmax）</h4>
                        <p>投与後一定時間（薬物により異なる）に採血。アミノグリコシド系では<strong>点滴終了30分〜1時間後</strong>に測定し、有効性を評価する。</p>
                    </div>
                    <div class="card">
                        <h4>定常状態到達後</h4>
                        <p>反復投与開始後、<strong>半減期の4〜5倍の時間</strong>が経過してから採血。定常状態に達していないと正確な評価ができない。</p>
                    </div>
                </div>

                <h3>TDMの実施手順</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>初期投与量の設定</strong>患者情報（体重、腎機能、年齢など）と母集団パラメータから初期投与量を計算する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>採血と濃度測定</strong>定常状態到達後に適切なタイミングで採血し、免疫学的測定法やLC-MS/MSなどで血中濃度を測定する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>PKパラメータの推定</strong>測定値とベイズ推定法などを用いて、個々の患者のCLやVdを推定する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>投与量の調整</strong>推定したパラメータに基づき、目標濃度を達成するための最適な投与量・投与間隔を再計算する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">5</div>
                        <div class="step-content"><strong>効果・副作用のモニタリングと再評価</strong>投与量変更後の臨床効果と副作用を評価し、必要に応じて再度TDMを実施する。</div>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q501_1",
                    type: "choice",
                    question: "TDMが必要な条件として適切でないものはどれか？",
                    options: [
                        "治療域が狭い薬物である",
                        "薬物動態の個体間変動が大きい",
                        "薬物の半減期が極めて短い（数分以内）",
                        "臨床効果の評価が困難である"
                    ],
                    answer: 2,
                    explanation: "TDMが必要な条件は、治療域が狭いこと、個体間変動が大きいこと、濃度と効果に相関があること、臨床効果の評価が困難であることです。半減期が極めて短いことはTDMの必要条件ではなく、むしろ採血タイミングの設定が困難となり実施が難しくなります。"
                },
                {
                    id: "q501_2",
                    type: "choice",
                    question: "バンコマイシンのTDMにおいて、現在推奨されている目標指標はどれか？",
                    options: [
                        "トラフ値 15〜20 μg/mL",
                        "ピーク値 30〜40 μg/mL",
                        "AUC/MIC 400〜600 μg·h/mL",
                        "Cmax/MIC > 10"
                    ],
                    answer: 2,
                    explanation: "バンコマイシンのTDMは従来トラフ値管理が行われてきましたが、2020年改訂ガイドラインでは腎毒性軽減と有効性の観点からAUC/MICガイド投与（目標400〜600 μg·h/mL）が推奨されています。"
                },
                {
                    id: "q501_3",
                    type: "fill",
                    question: "反復投与においてTDMの採血は、投与開始から半減期の＿＿〜＿＿倍の時間が経過した定常状態到達後に行うべきである。（数字をハイフンでつないで答えよ）",
                    answer: "4-5",
                    explanation: "定常状態は半減期の4〜5倍の時間で到達します（約94〜97%）。定常状態に達する前に採血しても正確な評価ができないため、この時点以降に採血を行います。"
                }
            ]
        },
        {
            id: 502,
            title: "生物学的同等性試験（BE試験）",
            duration: "15分",
            content: `<h2>生物学的同等性試験（BE試験）</h2>
                <p>生物学的同等性試験（Bioequivalence Study; BE試験）とは、<strong>ジェネリック医薬品（後発医薬品）が先発医薬品と同等の血中濃度推移を示すこと</strong>を証明するための臨床試験です。</p>

                <h3>生物学的同等性の定義</h3>
                <div class="highlight-box">
                    <p><strong>生物学的同等性（Bioequivalence）とは：</strong></p>
                    <p>同一の有効成分を同一量含む2つの製剤が、同一の試験条件下で投与されたとき、<strong>有効成分の生体利用率（バイオアベイラビリティ）に統計学的な有意差がない</strong>ことを意味する。</p>
                </div>

                <h3>BE試験が必要な理由</h3>
                <p>ジェネリック医薬品は先発品と同じ有効成分を含みますが、<strong>添加物・製造工程・結晶形</strong>などが異なる場合があります。これらの製剤学的な違いが薬物の吸収速度や吸収量に影響を与える可能性があるため、BE試験で治療上の同等性を保証する必要があります。</p>

                <h3>BE試験のデザイン</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>2×2クロスオーバーデザイン</h4>
                        <p>最も標準的なデザイン。被験者を2群に分け、各群が<strong>標準製剤（R）</strong>と<strong>試験製剤（T）</strong>を交互に投与される。個体内比較により個体間変動を排除できる。</p>
                    </div>
                    <div class="card">
                        <h4>ウォッシュアウト期間</h4>
                        <p>第1期と第2期の間に、薬物が体内から十分に消失するまでの休薬期間を設ける。通常、<strong>消失半減期の5倍以上</strong>の期間。</p>
                    </div>
                </div>

                <h3>評価パラメータと同等性基準</h3>
                <table>
                    <tr><th>パラメータ</th><th>意味</th><th>評価する特性</th></tr>
                    <tr><td><strong>AUC<sub>0-t</sub></strong></td><td>時間0から最終測定時間までの血中濃度-時間曲線下面積</td><td>吸収の程度（吸収量）</td></tr>
                    <tr><td><strong>AUC<sub>0-∞</sub></strong></td><td>無限大まで外挿したAUC</td><td>吸収の程度（総吸収量）</td></tr>
                    <tr><td><strong>C<sub>max</sub></strong></td><td>最高血中濃度</td><td>吸収の速度</td></tr>
                    <tr><td><strong>T<sub>max</sub></strong></td><td>最高血中濃度到達時間</td><td>参考値（統計的検定の対象としない場合が多い）</td></tr>
                </table>

                <h3>同等性判定基準</h3>
                <div class="highlight-box">
                    <p><strong>同等性基準：</strong></p>
                    <p>試験製剤と標準製剤の<strong>AUC比およびCmax比</strong>の<strong>幾何平均比の90%信頼区間</strong>が<strong>80〜125%</strong>の範囲内に収まること。</p>
                    <p>（対数変換後のデータに対して算出）</p>
                </div>

                <h3>対数変換の理由</h3>
                <p>PKパラメータ（AUC、Cmax）は<strong>対数正規分布</strong>に従うことが知られています。対数変換により正規分布に近似し、統計的な検定が適切に行えます。また、試験製剤/標準製剤の<strong>比の評価</strong>が自然に行えるという利点もあります。</p>

                <h3>食事の影響試験</h3>
                <p>食事は薬物の吸収に大きく影響しうるため、BE試験は通常<strong>空腹時</strong>に実施されます。ただし、空腹時投与が困難な薬物や食事の影響が大きい薬物では<strong>食後条件でのBE試験</strong>も求められます。</p>

                <h3>規制ガイドライン</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>FDA（米国）</h4>
                        <p>「Guidance for Industry: Bioequivalence Studies」に基づく。BCSクラスIの速放性製剤ではバイオウェーバー（BE試験免除）が適用可能。</p>
                    </div>
                    <div class="card">
                        <h4>PMDA（日本）</h4>
                        <p>「後発医薬品の生物学的同等性試験ガイドライン」に準拠。日本独自の溶出試験規格やバイオウェーバー基準あり。</p>
                    </div>
                    <div class="card">
                        <h4>EMA（欧州）</h4>
                        <p>「Guideline on the Investigation of Bioequivalence」に従う。高変動薬物に対する特別なデザイン（レプリケートデザイン）の規定あり。</p>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q502_1",
                    type: "choice",
                    question: "BE試験において、試験製剤と標準製剤の同等性が認められる90%信頼区間の許容範囲はどれか？",
                    options: [
                        "70〜143%",
                        "80〜125%",
                        "85〜115%",
                        "90〜111%"
                    ],
                    answer: 1,
                    explanation: "BE試験の国際的な標準基準として、AUC比およびCmax比の幾何平均比の90%信頼区間が80〜125%の範囲内に収まることが求められます。対数変換後のデータに基づいて算出されます。"
                },
                {
                    id: "q502_2",
                    type: "choice",
                    question: "BE試験で最も一般的に用いられる試験デザインはどれか？",
                    options: [
                        "並行群間デザイン",
                        "2×2クロスオーバーデザイン",
                        "ラテン方格デザイン",
                        "逐次デザイン"
                    ],
                    answer: 1,
                    explanation: "BE試験では2×2クロスオーバーデザインが最も標準的です。被験者が標準製剤と試験製剤の両方を投与されるため、個体内比較が可能となり、個体間変動の影響を排除できます。"
                },
                {
                    id: "q502_3",
                    type: "fill",
                    question: "BE試験のクロスオーバーデザインでは、第1期と第2期の間に薬物を体内から消失させるための＿＿＿＿＿＿期間を設ける。",
                    answer: "ウォッシュアウト",
                    explanation: "ウォッシュアウト期間（washout period）は、前の投与期間の薬物を十分に体外に排泄させるための休薬期間です。通常、消失半減期の5倍以上の期間を設けます。"
                }
            ]
        },
        {
            id: 503,
            title: "薬物相互作用の予測と管理",
            duration: "15分",
            content: `<h2>薬物相互作用の予測と管理</h2>
                <p>薬物相互作用（Drug-Drug Interaction; DDI）とは、複数の薬物を併用した際に、<strong>一方の薬物が他方の薬物動態（PK）や薬力学（PD）に影響を与える</strong>現象です。臨床では有害事象の原因となることが多く、正確な予測と管理が求められます。</p>

                <h3>薬物相互作用の分類</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>PK的相互作用</h4>
                        <p>吸収・分布・代謝・排泄の各段階で起こる相互作用。</p>
                        <p><strong>吸収レベル：</strong>消化管pH変化、キレート形成、P-gp阻害/誘導</p>
                        <p><strong>代謝レベル：</strong>CYP酵素の阻害・誘導（最も臨床的に重要）</p>
                        <p><strong>排泄レベル：</strong>腎尿細管分泌の競合、トランスポーター阻害</p>
                    </div>
                    <div class="card">
                        <h4>PD的相互作用</h4>
                        <p>薬理作用レベルでの相互作用。</p>
                        <p><strong>相加作用：</strong>効果が単純に加算される（1+1=2）</p>
                        <p><strong>相乗作用：</strong>効果が加算以上に増強（1+1>2）</p>
                        <p><strong>拮抗作用：</strong>効果が減弱される（1+1<2）</p>
                    </div>
                </div>

                <h3>CYP阻害による相互作用の予測</h3>
                <table>
                    <tr><th>阻害タイプ</th><th>メカニズム</th><th>特徴</th><th>予測指標</th></tr>
                    <tr><td><strong>可逆的阻害</strong></td><td>阻害薬がCYP活性部位に結合し代謝を競合的に阻害</td><td>阻害薬消失とともに回復</td><td>[I]/Ki比（> 1で臨床的に有意な可能性）</td></tr>
                    <tr><td><strong>不可逆的阻害（MBI）</strong></td><td>代謝活性化された中間体がCYPに共有結合し不活化</td><td>酵素の再合成まで回復しない</td><td>KI, kinact（時間依存性阻害パラメータ）</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>In vitro データからの DDI 予測：</strong></p>
                    <p>[I]/Ki比が重要な指標。[I]は阻害薬の臨床濃度（肝入口での非結合型濃度）、Kiは阻害定数。</p>
                    <p>[I]/Ki > 1：臨床的に有意な相互作用の可能性が高い</p>
                    <p>[I]/Ki = 0.1〜1：臨床試験での確認が推奨</p>
                    <p>[I]/Ki < 0.1：臨床的に有意な相互作用の可能性は低い</p>
                </div>

                <h3>重要な臨床的相互作用の例</h3>
                <table>
                    <tr><th>基質薬</th><th>相互作用薬</th><th>メカニズム</th><th>臨床的影響</th></tr>
                    <tr><td>ワルファリン</td><td>フルコナゾール等（CYP2C9阻害薬）</td><td>S-ワルファリンのCYP2C9による代謝阻害</td><td>PT-INR上昇→出血リスク増大</td></tr>
                    <tr><td>シンバスタチン</td><td>イトラコナゾール、クラリスロマイシン等（CYP3A4阻害薬）</td><td>CYP3A4による代謝阻害</td><td>スタチン血中濃度上昇→横紋筋融解症リスク</td></tr>
                    <tr><td>テオフィリン</td><td>シプロフロキサシン、フルボキサミン等（CYP1A2阻害薬）</td><td>CYP1A2による代謝阻害</td><td>テオフィリン中毒（嘔気、頻脈、痙攣）</td></tr>
                    <tr><td>シクロスポリン</td><td>リファンピシン（CYP3A4誘導薬）</td><td>CYP3A4・P-gpの誘導</td><td>血中濃度低下→移植臓器の拒絶反応</td></tr>
                    <tr><td>メトトレキサート</td><td>NSAIDs</td><td>腎尿細管分泌の競合阻害</td><td>メトトレキサート排泄遅延→骨髄抑制</td></tr>
                </table>

                <h3>トランスポーターを介した相互作用</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>P-糖タンパク質（P-gp）</h4>
                        <p>消化管・肝臓・腎臓・血液脳関門に発現する排出トランスポーター。P-gp阻害（例：ベラパミル、キニジン）によりジゴキシンなどの基質薬の血中濃度が上昇する。</p>
                    </div>
                    <div class="card">
                        <h4>OATP（有機アニオントランスポーターポリペプチド）</h4>
                        <p>肝臓のOATP1B1/1B3はスタチン類などの肝取り込みに重要。シクロスポリンやリファンピシン（単回）によるOATP阻害でスタチンの血中濃度が著しく上昇する。</p>
                    </div>
                </div>

                <h3>相互作用のリスク管理</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>添付文書の確認</strong>「相互作用」の欄（併用禁忌・併用注意）を必ず確認する。「薬物代謝酵素」の項目で代謝に関与するCYP分子種を把握する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>リスクの評価</strong>相互作用の臨床的重要性（AUC変化の大きさ、治療域の狭さ）を評価し、代替薬の選択やモニタリング計画を検討する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>用量調整とモニタリング</strong>併用を避けられない場合は減量や増量を行い、TDMや臨床検査値の定期的なフォローを実施する。</div>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q503_1",
                    type: "choice",
                    question: "ワルファリンとフルコナゾールの相互作用のメカニズムとして正しいものはどれか？",
                    options: [
                        "フルコナゾールがワルファリンの消化管吸収を促進する",
                        "フルコナゾールがCYP2C9を阻害しS-ワルファリンの代謝を抑制する",
                        "フルコナゾールがワルファリンのタンパク結合を置換する",
                        "フルコナゾールがビタミンKの合成を阻害する"
                    ],
                    answer: 1,
                    explanation: "S-ワルファリン（活性体）は主にCYP2C9で代謝されます。フルコナゾールはCYP2C9の強力な阻害薬であり、S-ワルファリンの代謝を阻害することでPT-INRが上昇し、出血リスクが増大します。"
                },
                {
                    id: "q503_2",
                    type: "choice",
                    question: "in vitroデータからDDIの臨床的有意性を予測する際に用いる指標として、[I]/Ki比が使われる。臨床的に有意な相互作用が起こる可能性が高いとされるのはどの条件か？",
                    options: [
                        "[I]/Ki < 0.01",
                        "[I]/Ki = 0.01〜0.1",
                        "[I]/Ki = 0.1〜1",
                        "[I]/Ki > 1"
                    ],
                    answer: 3,
                    explanation: "[I]/Ki > 1の場合、阻害薬の臨床濃度が阻害定数を上回っているため、臨床的に有意なCYP阻害が生じる可能性が高いと判断されます。0.1〜1では臨床試験での確認が推奨されます。"
                },
                {
                    id: "q503_3",
                    type: "fill",
                    question: "肝臓のOATP1B1/1B3を阻害することでスタチン類の血中濃度を上昇させ、横紋筋融解症のリスクを高めうる免疫抑制薬は＿＿＿＿＿＿＿＿である。",
                    answer: "シクロスポリン",
                    explanation: "シクロスポリンは肝臓のOATP1B1/1B3を阻害し、スタチン類の肝取り込みを妨げることで全身血中濃度を大幅に上昇させます。これにより横紋筋融解症のリスクが増大し、一部のスタチンとの併用は禁忌とされています。"
                }
            ]
        },
        {
            id: 504,
            title: "ポピュレーションPK",
            duration: "15分",
            content: `<h2>ポピュレーションPK（母集団薬物動態）</h2>
                <p>ポピュレーションPK（Population Pharmacokinetics; PPK）とは、<strong>患者集団全体の薬物動態パラメータとその変動要因を、統計学的手法を用いて同時に推定する</strong>解析手法です。臨床試験や実臨床のデータから個体間・個体内変動を定量化し、用量調整に活用します。</p>

                <h3>従来のPK解析との違い</h3>
                <div class="card-grid">
                    <div class="card">
                        <h4>従来のPK解析（NCA等）</h4>
                        <p>個々の被験者から密なサンプリング（多数の採血ポイント）が必要。各被験者のPKパラメータを個別に算出し、その後に集団の統計量（平均、SD）を求める。<strong>Two-stage approach</strong>と呼ばれる。</p>
                    </div>
                    <div class="card">
                        <h4>ポピュレーションPK解析</h4>
                        <p>疎なサンプリング（少数の採血ポイント）でも解析可能。集団全体のデータを<strong>同時に解析</strong>し、典型値と変動を推定する。<strong>One-stage approach</strong>。実臨床データ（TDMデータ等）も活用できる。</p>
                    </div>
                </div>

                <h3>PPKの基本概念</h3>
                <table>
                    <tr><th>用語</th><th>記号</th><th>説明</th></tr>
                    <tr><td><strong>固定効果（Fixed Effects）</strong></td><td>θ（シータ）</td><td>集団の典型的なPKパラメータ値（CL, Vdなど）。共変量の効果も含む。</td></tr>
                    <tr><td><strong>個体間変動（Inter-Individual Variability）</strong></td><td>ω²（オメガ二乗）</td><td>患者間でのPKパラメータのばらつき。対数正規分布を仮定することが多い。</td></tr>
                    <tr><td><strong>個体内変動（Residual Variability）</strong></td><td>σ²（シグマ二乗）</td><td>同一個体内での測定値と予測値の誤差。測定誤差やモデルの不完全性を反映。</td></tr>
                </table>

                <div class="highlight-box">
                    <p><strong>PPKの基本モデル式（例：クリアランス）：</strong></p>
                    <p>CL<sub>i</sub> = TV(CL) × exp(η<sub>i</sub>)</p>
                    <p>TV(CL)：集団の典型的クリアランス（θで表現）</p>
                    <p>η<sub>i</sub>：個体iの個体間変動（ω²を分散とする正規分布に従う）</p>
                    <p>Y<sub>ij</sub> = F(CL<sub>i</sub>, ...) × (1 + ε<sub>ij</sub>)：観測値（ε<sub>ij</sub>は残差誤差）</p>
                </div>

                <h3>共変量解析</h3>
                <p>PPKの重要な特長は、PKパラメータの個体間変動を<strong>共変量（患者背景因子）</strong>で説明できることです。</p>
                <div class="card-grid">
                    <div class="card">
                        <h4>人口統計学的要因</h4>
                        <p><strong>体重：</strong>CLやVdとの相関（アロメトリーモデル）</p>
                        <p><strong>年齢：</strong>臓器機能の加齢変化を反映</p>
                        <p><strong>性別：</strong>体組成や酵素発現の違い</p>
                    </div>
                    <div class="card">
                        <h4>臨床検査値</h4>
                        <p><strong>腎機能（eGFR、CLcr）：</strong>腎排泄型薬物のCLに影響</p>
                        <p><strong>肝機能（ALT、AST、ビリルビン）：</strong>肝代謝型薬物のCLに影響</p>
                        <p><strong>アルブミン：</strong>タンパク結合率、分布に影響</p>
                    </div>
                    <div class="card">
                        <h4>遺伝的要因</h4>
                        <p><strong>CYP多型：</strong>CYP2D6（PM, IM, EM, UM）、CYP2C19、CYP3A5多型</p>
                        <p>代謝能の大きな個体差を説明する重要な共変量</p>
                    </div>
                </div>

                <h3>解析ソフトウェア</h3>
                <table>
                    <tr><th>ソフトウェア</th><th>特徴</th></tr>
                    <tr><td><strong>NONMEM</strong></td><td>PPK解析のゴールドスタンダード。混合効果モデルを最尤推定法で解析。規制当局への申請で最も広く使用される。</td></tr>
                    <tr><td><strong>Monolix</strong></td><td>SAEM（確率的近似EM）アルゴリズムを使用。ユーザーフレンドリーなGUI。</td></tr>
                    <tr><td><strong>Phoenix NLME</strong></td><td>Certara社の商用ソフトウェア。NCA解析からPPK解析まで一貫して行える。</td></tr>
                    <tr><td><strong>R (nlmixr2等)</strong></td><td>オープンソース。再現性の高い解析ワークフローを構築可能。</td></tr>
                </table>

                <h3>PPKの活用場面</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-num">1</div>
                        <div class="step-content"><strong>特殊集団の用量調整</strong>小児、高齢者、腎機能低下患者など、十分な臨床データが得られにくい集団での用量設計にPPKモデルが活用される。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">2</div>
                        <div class="step-content"><strong>臨床試験の用量選択</strong>Phase I/IIのPPK解析結果から、Phase IIIの最適用量や用量調整因子を同定する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">3</div>
                        <div class="step-content"><strong>曝露-応答解析</strong>PPKで推定した個別AUCやCmaxと有効性・安全性の関係を評価し、最適な目標曝露量を設定する。</div>
                    </div>
                    <div class="step">
                        <div class="step-num">4</div>
                        <div class="step-content"><strong>ベイズ推定による個別投与設計</strong>PPKの母集団パラメータを事前情報とし、少数の実測濃度データからベイズ推定で個別パラメータを推定。TDMと組み合わせた精密な投与設計が可能。</div>
                    </div>
                </div>`,
            quiz: [
                {
                    id: "q504_1",
                    type: "choice",
                    question: "ポピュレーションPK解析における個体間変動（IIV）を表す記号はどれか？",
                    options: [
                        "θ（シータ）",
                        "ω²（オメガ二乗）",
                        "σ²（シグマ二乗）",
                        "β（ベータ）"
                    ],
                    answer: 1,
                    explanation: "ω²（オメガ二乗）は個体間変動（Inter-Individual Variability; IIV）の分散を表します。θは固定効果（典型値）、σ²は残差変動（個体内変動）を表します。"
                },
                {
                    id: "q504_2",
                    type: "choice",
                    question: "PPK解析で最も広く使用され、規制当局への申請で標準的に用いられるソフトウェアはどれか？",
                    options: [
                        "R (nlmixr2)",
                        "Phoenix NLME",
                        "NONMEM",
                        "SAS"
                    ],
                    answer: 2,
                    explanation: "NONMEM（Nonlinear Mixed Effects Model）はPPK解析のゴールドスタンダードとして最も広く使用されています。FDAやPMDAへの規制申請においても標準的なソフトウェアとして認知されています。"
                },
                {
                    id: "q504_3",
                    type: "fill",
                    question: "PPK解析では、母集団パラメータを事前情報として少数の実測データから個別パラメータを推定する＿＿＿＿推定法がTDMと組み合わせて活用される。",
                    answer: "ベイズ",
                    explanation: "ベイズ推定（Bayesian estimation）は、PPKモデルから得られた母集団パラメータ（事前分布）と患者個人の血中濃度データを統合し、個別のPKパラメータを推定する手法です。少数の採血でも精度の高い推定が可能です。"
                }
            ]
        }
    ]
};
