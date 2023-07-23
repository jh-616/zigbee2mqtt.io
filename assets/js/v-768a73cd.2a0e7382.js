"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34268],{183386:(e,n,i)=>{i.r(n),i.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-768a73cd","path":"/guide/usage/pairing_devices.html","title":"Allowing devices to join","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":3,"title":"Frontend (recommended)","slug":"frontend-recommended","link":"#frontend-recommended","children":[]},{"level":3,"title":"MQTT (recommended)","slug":"mqtt-recommended","link":"#mqtt-recommended","children":[]},{"level":3,"title":"Configuration.yaml (not recommended)","slug":"configuration-yaml-not-recommended","link":"#configuration-yaml-not-recommended","children":[]},{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}],"git":{"updatedTime":1690130373000},"filePathRelative":"guide/usage/pairing_devices.md"}')},353240:(e,n,i)=>{i.r(n),i.d(n,{default:()=>h});var t=i(166252);const a=(0,t.uE)('<h1 id="allowing-devices-to-join" tabindex="-1"><a class="header-anchor" href="#allowing-devices-to-join" aria-hidden="true">#</a> Allowing devices to join</h1><p>To allow devices to join the network joining has to be permitted. There are various ways to do this:</p><h3 id="frontend-recommended" tabindex="-1"><a class="header-anchor" href="#frontend-recommended" aria-hidden="true">#</a> Frontend (recommended)</h3><p>Enabling joining via the frontend ensures that joining is disabled automatically after 255 seconds. The joining button can be found in the right top.</p><h3 id="mqtt-recommended" tabindex="-1"><a class="header-anchor" href="#mqtt-recommended" aria-hidden="true">#</a> MQTT (recommended)</h3>',5),d=(0,t._)("code",null,"zigbee2mqtt/bridge/request/permit_join",-1),o=(0,t._)("code",null,"time",-1),r=(0,t._)("h3",{id:"configuration-yaml-not-recommended",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#configuration-yaml-not-recommended","aria-hidden":"true"},"#"),(0,t.Uk)(" Configuration.yaml (not recommended)")],-1),l=(0,t._)("p",null,[(0,t.Uk)("By setting "),(0,t._)("code",null,"permit_join: true"),(0,t.Uk)(" in your "),(0,t._)("code",null,"configuration.yaml"),(0,t.Uk)(" the joining will automatically be enabled when starting Zigbee2MQTT. Joining is "),(0,t._)("strong",null,"not"),(0,t.Uk)(" automatically disabled.")],-1),c=(0,t._)("h2",{id:"pairing",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,t.Uk)(" Pairing")],-1),s=(0,t._)("p",null,"If no instructions are available, the device can probably be paired by factory resetting it.",-1),m=(0,t._)("p",null,"Once you see something similar to below in the log your device is paired.",-1),u=(0,t._)("div",{class:"language-text line-numbers-mode","data-ext":"text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired\n")]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"})])],-1),g={},h=(0,i(983744).Z)(g,[["render",function(e,n){const i=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[a,(0,t._)("p",null,[(0,t.Uk)("The "),d,(0,t.Uk)(" MQTT topic can be used to enable joining. It is recommended to provide a value for "),o,(0,t.Uk)(" to ensure joining is automatically disabled. See "),(0,t.Wm)(i,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-permit-join"},{default:(0,t.w5)((()=>[(0,t.Uk)("MQTT topic and messages")])),_:1}),(0,t.Uk)(" for more information.")]),r,l,c,(0,t._)("p",null,[(0,t.Uk)("First check if the device page ("),(0,t.Wm)(i,{to:"/supported-devices/"},{default:(0,t.w5)((()=>[(0,t.Uk)("Supported devices")])),_:1}),(0,t.Uk)(", click on the model number) contains instructions on how to pair your device.")]),s,m,u])}]])}}]);