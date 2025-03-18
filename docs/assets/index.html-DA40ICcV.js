import{_ as s,e as a,f as e,o as t}from"./app-D0w3I5ZU.js";const n={};function l(h,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h4 id="【linux】【docker】ollama服务安装" tabindex="-1"><a class="header-anchor" href="#【linux】【docker】ollama服务安装"><span>【Linux】【Docker】Ollama服务安装</span></a></h4><p><strong>参考</strong>：https://hub.docker.com/r/ollama/ollama</p><h5 id="_2-安装nvidia-容器工具包" tabindex="-1"><a class="header-anchor" href="#_2-安装nvidia-容器工具包"><span>2.安装NVIDIA 容器工具包</span></a></h5><p>https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation</p><h6 id="_2-1-linux-ubuntu" tabindex="-1"><a class="header-anchor" href="#_2-1-linux-ubuntu"><span>2.1.Linux Ubuntu</span></a></h6><p>[【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装](./【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装.md)</p><h5 id="_2-配置-docker-以使用-nvidia-驱动程序" tabindex="-1"><a class="header-anchor" href="#_2-配置-docker-以使用-nvidia-驱动程序"><span>2.配置 Docker 以使用 Nvidia 驱动程序</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nvidia-ctk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> runtime</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> configure</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --runtime=docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-新建宿主机挂载目录" tabindex="-1"><a class="header-anchor" href="#_2-新建宿主机挂载目录"><span>2.新建宿主机挂载目录</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_2-查询docker-hub镜像" tabindex="-1"><a class="header-anchor" href="#_2-查询docker-hub镜像"><span>2.查询docker hub镜像</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> search</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_4-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_4-拉取镜像"><span>4.拉取镜像</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama/ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_5-查看本地镜像" tabindex="-1"><a class="header-anchor" href="#_5-查看本地镜像"><span>5.查看本地镜像</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> images</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_6-运行镜像" tabindex="-1"><a class="header-anchor" href="#_6-运行镜像"><span>6.运行镜像</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --gpus=all</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/ollama:/root/.ollama</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 11434:11434</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ollama/ollama</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 11434:11434</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --gpus=all</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/ollama:/root/.ollama</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> open-webui:/app/backend/data</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> open-webui</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama/ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td>-p</td><td>映射端口</td></tr><tr><td>--gpus</td><td>分配所有可用的 GPU 给容器</td></tr><tr><td>--name</td><td>容器名称</td></tr><tr><td>-v</td><td>卷挂载</td></tr><tr><td>-d</td><td>后台运行</td></tr><tr><td>--restart</td><td>重启策略(当前未设置)</td></tr></tbody></table><h5 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ps</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> images</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logs</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #id</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rm</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #id</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stop</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #name</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const r=s(n,[["render",l],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/blog/4f5zpe3s/","title":"【Linux】【Docker】Ollama服务安装","lang":"zh-CN","frontmatter":{"title":"【Linux】【Docker】Ollama服务安装","toc":true,"tags":["linux","docker","ollma"],"createTime":"2025/03/18 09:00:00","permalink":"/blog/4f5zpe3s/","description":"【Linux】【Docker】Ollama服务安装 参考：https://hub.docker.com/r/ollama/ollama 2.安装NVIDIA 容器工具包 https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#...","head":[["meta",{"property":"og:url","content":"https://notonull.github.io/logic-hub/blog/4f5zpe3s/"}],["meta",{"property":"og:site_name","content":"aGeng 's Blog"}],["meta",{"property":"og:title","content":"【Linux】【Docker】Ollama服务安装"}],["meta",{"property":"og:description","content":"【Linux】【Docker】Ollama服务安装 参考：https://hub.docker.com/r/ollama/ollama 2.安装NVIDIA 容器工具包 https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T07:13:30.000Z"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"ollma"}],["meta",{"property":"article:modified_time","content":"2025-03-18T07:13:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【Linux】【Docker】Ollama服务安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-18T07:13:30.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.84,"words":251},"git":{"updatedTime":1742282010000,"contributors":[{"name":"ronggeng.chen","username":"ronggeng.chen","email":"chen.ronggeng.email@gmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/ronggeng.chen?v=4","url":"https://github.com/ronggeng.chen"}]},"autoDesc":true,"filePathRelative":"部署教程/【Linux】【Docker】Ollama服务安装.md","categoryList":[{"id":"9e37c9","sort":10000,"name":"部署教程"}]}`);export{r as comp,k as data};
