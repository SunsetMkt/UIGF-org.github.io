import{_ as r,Y as s,Z as c,$ as t,a0 as e,a1 as d,a3 as i,A as a}from"./framework-36d4e71d.js";const l={},h=t("h1",{id:"统一可交换祈愿记录标准-v2-2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#统一可交换祈愿记录标准-v2-2","aria-hidden":"true"},"#"),e(" 统一可交换祈愿记录标准 v2.2")],-1),p=t("h2",{id:"前言",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),u=t("p",null,"由于原神的祈愿卡池与记录越来越多，越来越复杂，各个App间进行数据交换的代价越来越大，于是 我们",-1),g={href:"https://github.com/biuuu/genshin-wish-export",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/DGP-Studio/Snap.Genshin",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/Scighost/KeqingNiuza",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/sunfkny/genshin-gacha-export",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/TremblingMoeNew/DodocoTales",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/voderl/genshin-gacha-analyzer",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>（上述名称以字典顺序排序，不代表其他任何意义）<br> 在此一起，制定了此项标准，旨在加强各个原神相关的App间的数据可交换性<br> 如果今后出现了新的需要在各App间交换的数据，我们也会进行规范</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><blockquote><p>在采用此格式时，需要特别注意某些字段名称中可能存在的下划线 <code>_</code> 或空格字符<br> 此格式仅适用于<strong>简体中文</strong>环境</p></blockquote><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> Id</h3><p>原神的祈愿记录物品内包含了一项较为特殊的字段: <code>id</code> ，该值在 1.3版本后加入<br> 所以<strong>先前查询出的物品</strong>若无特殊兼容性修改则不会包含相应的 <code>id</code><br> 导出时</p><ul><li>需要确保每个物品的 <code>id</code> 的有效性。</li><li>推荐从最后一个自带有效 <code>id</code> 的物品开始，向前（相对于时间）依次递减 <code>id</code> 的值,每次递减的值应保持为 <code>1</code></li><li>生成的 <code>id</code> 值不应大于 <code>1612303200000000000</code></li><li>App不应假设所有的 <code>gacha_item</code> 都有有效的 <code>id</code> 值</li><li>App应具有处理 <code>id</code> 字段为 <code>null</code>或 \`\` 空字符串的能力</li></ul><h3 id="gachatype" tabindex="-1"><a class="header-anchor" href="#gachatype" aria-hidden="true">#</a> GachaType</h3><p>祈愿包含了会共享保底与概率的卡池，所以需要一个额外的字段来界定<br> 我们在<code>UIGF</code>的所有格式中注入了<code>uigf_gacha_type</code>字段<br> 在导出到<code>UIGF</code>格式时需要注意添加对应的<code>uigf_gacha_type</code>字段</p><h4 id="uigf-gacha-type-映射关系" tabindex="-1"><a class="header-anchor" href="#uigf-gacha-type-映射关系" aria-hidden="true">#</a> <code>uigf_gacha_type</code> 映射关系</h4><table><thead><tr><th><code>uigf_gacha_type</code></th><th><code>gacha_type</code></th></tr></thead><tbody><tr><td>100</td><td>100</td></tr><tr><td>200</td><td>200</td></tr><tr><td>301</td><td>301|400</td></tr><tr><td>302</td><td>302</td></tr></tbody></table><h2 id="excel-工作簿-workbook-format" tabindex="-1"><a class="header-anchor" href="#excel-工作簿-workbook-format" aria-hidden="true">#</a> Excel 工作簿 (Workbook Format)</h2><blockquote><p>Uniformed Interchangeable GachaLog Format standard of Workbook (UIGF.W)</p></blockquote><h3 id="文件的名称" tabindex="-1"><a class="header-anchor" href="#文件的名称" aria-hidden="true">#</a> 文件的名称</h3><p>我们建议：</p><ul><li>在名称中包含导出数据所属用户的 <code>uid</code></li><li>用户在导出操作发生前应具有修改文件名称的权力</li></ul><h3 id="单元格的格式" tabindex="-1"><a class="header-anchor" href="#单元格的格式" aria-hidden="true">#</a> 单元格的格式</h3><ul><li>在填充单元格内的数据时，应统一转换到String字符串类型后填入</li></ul><h3 id="表名及内容" tabindex="-1"><a class="header-anchor" href="#表名及内容" aria-hidden="true">#</a> 表名及内容</h3><table><thead><tr><th>表名</th><th>内容</th><th>类型</th><th>是否必要</th></tr></thead><tbody><tr><td>统计分析</td><td>统计分析内容等</td><td>任意</td><td>否</td></tr><tr><td>角色活动祈愿</td><td><code>gacha_type</code> : <code>301|400</code> 的祈愿数据</td><td>祈愿表</td><td>否，但是应该导出</td></tr><tr><td>武器活动祈愿</td><td><code>gacha_type</code> : <code>302</code> 的祈愿数据</td><td>祈愿表</td><td>否，但是应该导出</td></tr><tr><td>常驻祈愿</td><td><code>gacha_type</code> : <code>200</code> 的祈愿数据</td><td>祈愿表</td><td>否，但是应该导出</td></tr><tr><td>新手祈愿</td><td><code>gacha_type</code> : <code>100</code> 的祈愿数据</td><td>祈愿表</td><td>否，但是应该导出</td></tr><tr><td>原始数据</td><td>全部祈愿数据</td><td>数据表</td><td><strong>详见下方原始数据表结构说明</strong></td></tr></tbody></table><ul><li>表的顺序可以是任意的</li><li>可以隐藏部分表，防止用户随意篡改数据</li><li>Sheet 的名称应与游戏内祈愿记录页面显示的名称保持一致</li></ul><blockquote><p>App间应依据 <code>原始数据表</code> 的内容，来进行数据互通</p></blockquote><h3 id="祈愿表结构" tabindex="-1"><a class="header-anchor" href="#祈愿表结构" aria-hidden="true">#</a> 祈愿表结构</h3><p>本节内容是为了规范兼容分析类App</p><ul><li>表头对应的内容填充<strong>顺序需要严格按照下方说明</strong>排布</li><li><strong>共享保底的卡池</strong>按祈愿类型 (<code>gacha_type</code>) 区分</li><li>此类 <code>Sheet</code> 存在的目的，是为了便于用户观看与祈愿分析工具的分析</li></ul><table><thead><tr><th>表头</th><th>内容</th><th>是否必要</th></tr></thead><tbody><tr><td>时间</td><td><code>yyyy-MM-dd HH:mm:ss</code> 格式的 <code>time</code> 时间</td><td>是</td></tr><tr><td>名称</td><td><code>name</code>物品名称</td><td>是</td></tr><tr><td>物品类型</td><td><code>item_type</code></td><td>是</td></tr><tr><td>星级</td><td><code>rank_type</code></td><td>是</td></tr><tr><td>祈愿类型</td><td><code>gacha_type</code> 的转义名称</td><td>是，尽管部分工具不会分析此项</td></tr><tr><td>...</td><td>...</td><td>否</td></tr></tbody></table><blockquote><p>如果你认为有必要的话，可以额外增加其他表头，但请确保表头的前几列为上表规范的内容<br> 表内的数据通常按祈愿Id升序或降序排列，分析App不应假设表内的顺序为特定的升序与降序</p></blockquote><h4 id="gacha-type-转义名称" tabindex="-1"><a class="header-anchor" href="#gacha-type-转义名称" aria-hidden="true">#</a> <code>gacha_type</code> 转义名称</h4><table><thead><tr><th>gacha_type</th><th>名称</th></tr></thead><tbody><tr><td>100</td><td>新手祈愿</td></tr><tr><td>200</td><td>常驻祈愿</td></tr><tr><td>301</td><td>角色活动祈愿</td></tr><tr><td>400</td><td>角色活动祈愿-2</td></tr><tr><td>302</td><td>武器活动祈愿</td></tr></tbody></table><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><table><thead><tr><th>时间</th><th>名称</th><th>类别</th><th>星级</th><th>祈愿类型</th><th>...</th></tr></thead><tbody><tr><td>2021-02-17 18:45:09</td><td>以理服人</td><td>武器</td><td>3</td><td>角色活动祈愿-2</td><td>...</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><h3 id="原始数据表结构" tabindex="-1"><a class="header-anchor" href="#原始数据表结构" aria-hidden="true">#</a> 原始数据表结构</h3><p>导出时</p><ul><li>App 在导出时应尽可能询问用户是否应包含原始数据表</li><li>一旦在工作簿内包含了名为 <code>原始数据</code> 的表，即表示支持本格式</li><li>该表内的内容应严格按照本格式所述填充</li><li><strong>表头的顺序需严格按照下表设置</strong>。</li><li>现有的字段采用<strong>字典顺序</strong>递增排序，后续新增的字段依添加的顺序排在后侧。</li><li>若无特殊需求，我们建议导出所有json 数据内包含的字段</li></ul><p>导入时</p><ul><li>强烈建议您编写不依赖于列的顺序位置便可实现导入的程序，以达到最大化的兼容。</li><li>如果省略了其中某些非必要字段的值，请保持表头存在，对应的列则空置。</li></ul><table><thead><tr><th>表头</th><th>是否必要</th></tr></thead><tbody><tr><td><code>count</code></td><td>否，但是建议保留，不排除后续会有<code>count</code>不为1的情况</td></tr><tr><td><code>gacha_type</code></td><td>是</td></tr><tr><td><code>id</code></td><td>是，且大部分App按此字段排序数据</td></tr><tr><td><code>item_id</code></td><td>否，目前官方已经弃用了此字段</td></tr><tr><td><code>item_type</code></td><td>是</td></tr><tr><td><code>lang</code></td><td>否，但建议保留，以便国际化</td></tr><tr><td><code>name</code></td><td>是</td></tr><tr><td><code>rank_type</code></td><td>否，但建议保留，以便分析</td></tr><tr><td><code>time</code></td><td>否，但建议保留，以便分析</td></tr><tr><td><code>uid</code></td><td>否，但建议将选择权交予用户，保留以便分析</td></tr><tr><td><code>uigf_gacha_type</code></td><td>是</td></tr></tbody></table><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h4><table><thead><tr><th>count</th><th>gacha_type</th><th>id</th><th>item_id</th><th>item_type</th><th>lang</th><th>name</th><th>rank_type</th><th>time</th><th>uid</th><th>uigf_gacha_type</th></tr></thead><tbody><tr><td>1</td><td>301</td><td>1613556360008291100</td><td></td><td>武器</td><td>zh-cn</td><td>以理服人</td><td>3</td><td>2021-02-17 18:45:09</td><td>123456789</td><td>301</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><h2 id="json-格式" tabindex="-1"><a class="header-anchor" href="#json-格式" aria-hidden="true">#</a> Json 格式</h2><blockquote><p>Uniformed Interchangeable GachaLog Format standard of Json (UIGF.J)</p></blockquote><p>Json 格式 由于 与从官方接口获取到的格式一致<br> 更便于各App的导入与导出，我们也在此做出规范<br> 该格式应仅用于各App间的数据互通</p><h3 id="导出的格式" tabindex="-1"><a class="header-anchor" href="#导出的格式" aria-hidden="true">#</a> 导出的格式</h3><p>以同值字段提取至上层的思想，我们拟定了以下json格式</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;info&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;000000000&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lang&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;zh-cn&quot;</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;gacha_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;000&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;item_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;以理服人&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;item_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;武器&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rank_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1600099200004770203&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uigf_gacha_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;000&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> <code>info</code></h3><p>除了从 <code>{gacha_item}</code> 中提取的 <code>uid</code>,<code>lang</code>字段，还可以包含我们认可的以下字段</p><table><thead><tr><th>字段名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td><code>export_time</code></td><td>导出时间 : <code>yyyy-MM-dd HH:mm:ss</code></td><td></td></tr><tr><td><code>export_timestamp</code></td><td>导出UNIX时间戳</td><td>v2.2+</td></tr><tr><td><code>export_app</code></td><td>导出此份记录的App名称，详见下方表格</td><td></td></tr><tr><td><code>export_app_version</code></td><td>导出此份记录的App版本号</td><td></td></tr><tr><td><code>uigf_version</code></td><td>所应用的 <code>UIGF</code> 的版本,包含此字段以防 <code>UIGF</code> 出现中断性变更时，App无法处理</td><td></td></tr></tbody></table><h4 id="uigf-version" tabindex="-1"><a class="header-anchor" href="#uigf-version" aria-hidden="true">#</a> <code>uigf_version</code></h4><p>合法值</p><table><thead><tr><th>值</th><th>说明</th><th>兼容</th></tr></thead><tbody><tr><td><code>v2.0</code></td><td>首个正式版本</td><td>v2.0</td></tr><tr><td><code>v2.1</code></td><td>简化了部分语言表述，与 v2.0在数据格式上完全一致</td><td>v2.1 and lower</td></tr><tr><td><code>v2.2</code></td><td>新增 <code>info.export_timestamp</code> 填充 UNIX 时间戳</td><td>v2.2 and lower</td></tr></tbody></table><h4 id="export-app" tabindex="-1"><a class="header-anchor" href="#export-app" aria-hidden="true">#</a> <code>export_app</code></h4><p>未实现导出支持的以 <code>-</code> 代替</p>`,52),v=t("thead",null,[t("tr",null,[t("th",null,"导出 App"),t("th",null,[t("code",null,"export_app"),e(" 的值")])])],-1),q={href:"https://github.com/biuuu/genshin-wish-export",target:"_blank",rel:"noopener noreferrer"},x=t("td",null,[t("code",null,"genshin-wish-export")],-1),G={href:"https://github.com/DGP-Studio/Snap.Genshin",target:"_blank",rel:"noopener noreferrer"},S=t("td",null,[t("code",null,"Snap Genshin")],-1),I={href:"https://gtool.mukapp.top/",target:"_blank",rel:"noopener noreferrer"},A=t("td",null,[t("code",null,"MUKGenshinTool")],-1),U={href:"https://github.com/Scighost/KeqingNiuza",target:"_blank",rel:"noopener noreferrer"},N=t("td",null,"-",-1),w={href:"https://github.com/Scighost/Xunkong",target:"_blank",rel:"noopener noreferrer"},F=t("td",null,[t("code",null,"Xunkong.Desktop")],-1),M={href:"https://github.com/sunfkny/genshin-gacha-export",target:"_blank",rel:"noopener noreferrer"},T=t("td",null,[t("code",null,"genshin-gacha-export")],-1),z={href:"https://github.com/TremblingMoeNew/DodocoTales",target:"_blank",rel:"noopener noreferrer"},D=t("td",null,"-",-1),j={href:"https://github.com/voderl/genshin-gacha-analyzer",target:"_blank",rel:"noopener noreferrer"},H=t("td",null,"-",-1);function K(B,L){const o=a("Badge"),n=a("ExternalLinkIcon");return s(),c("div",null,[h,t("blockquote",null,[t("p",null,[e("Uniformed Interchangeable GachaLog Format standard (UIGF) v2.2 "),d(o,{text:"Current",type:"message"})])]),p,u,t("ul",null,[t("li",null,[t("a",g,[e("biuuu/genshin wish export"),d(n)])]),t("li",null,[t("a",b,[e("DGP Studio/Snap.Genshin"),d(n)])]),t("li",null,[t("a",_,[e("Scighost/KeqingNiuza"),d(n)])]),t("li",null,[t("a",k,[e("sunfkny/genshin gacha export"),d(n)])]),t("li",null,[t("a",m,[e("TremblingMoeNew/DodocoTales"),d(n)])]),t("li",null,[t("a",y,[e("voderl/genshin gacha analyzer"),d(n)])])]),f,t("table",null,[v,t("tbody",null,[t("tr",null,[t("td",null,[t("a",q,[e("biuuu/genshin wish export"),d(n)])]),x]),t("tr",null,[t("td",null,[t("a",G,[e("DGP Studio/Snap.Genshin"),d(n)])]),S]),t("tr",null,[t("td",null,[t("a",I,[e("MUK/应急食品"),d(n)])]),A]),t("tr",null,[t("td",null,[t("a",U,[e("Scighost/KeqingNiuza"),d(n)])]),N]),t("tr",null,[t("td",null,[t("a",w,[e("Scighost/Xunkong"),d(n)])]),F]),t("tr",null,[t("td",null,[t("a",M,[e("sunfkny/genshin gacha export"),d(n)])]),T]),t("tr",null,[t("td",null,[t("a",z,[e("TremblingMoeNew/DodocoTales"),d(n)])]),D]),t("tr",null,[t("td",null,[t("a",j,[e("voderl/genshin gacha analyzer"),d(n)])]),H])])])])}const E=r(l,[["render",K],["__file","UIGF.html.vue"]]);export{E as default};
