"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54067],{807478:(e,t,n)=>{n.r(t),n.d(t,{data:()=>s});const s=JSON.parse('{"key":"v-6a0f30c7","path":"/devices/J1.html","title":"Ubisys J1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Ubisys J1 control via MQTT","description":"Integrate your Ubisys J1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Configuring Inputs","slug":"configuring-inputs","link":"#configuring-inputs","children":[]},{"level":3,"title":"Configuration of device attributes","slug":"configuration-of-device-attributes","link":"#configuration-of-device-attributes","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]},{"level":3,"title":"Home Assistant cover features when using MQTT discovery","slug":"home-assistant-cover-features-when-using-mqtt-discovery","link":"#home-assistant-cover-features-when-using-mqtt-discovery","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1690130373000},"filePathRelative":"devices/J1.md"}')},354647:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var s=n(166252);const a=(0,s._)("h1",{id:"ubisys-j1",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ubisys-j1","aria-hidden":"true"},"#"),(0,s.Uk)(" Ubisys J1")],-1),o=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th")])],-1),i=(0,s._)("tr",null,[(0,s._)("td",null,"Model"),(0,s._)("td",null,"J1")],-1),l=(0,s._)("td",null,"Vendor",-1),r=(0,s._)("tr",null,[(0,s._)("td",null,"Description"),(0,s._)("td",null,"Shutter control J1")],-1),c=(0,s._)("tr",null,[(0,s._)("td",null,"Exposes"),(0,s._)("td",null,"cover (state, position, tilt), power, energy, linkquality")],-1),p=(0,s._)("tr",null,[(0,s._)("td",null,"Picture"),(0,s._)("td",null,[(0,s._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/J1.jpg",alt:"Ubisys J1"})])],-1),u=(0,s._)("h2",{id:"notes",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,s.Uk)(" Notes")],-1),d=(0,s._)("h3",{id:"configuring-inputs",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#configuring-inputs","aria-hidden":"true"},"#"),(0,s.Uk)(" Configuring Inputs")],-1),h=(0,s.uE)('<h3 id="configuration-of-device-attributes" tabindex="-1"><a class="header-anchor" href="#configuration-of-device-attributes" aria-hidden="true">#</a> Configuration of device attributes</h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_j1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;windowCoveringType&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;configStatus&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedOpenLimitLiftCm&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedClosedLimitLiftCm&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedOpenLimitTiltDdegree&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedClosedLimitTiltDdegree&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;turnaroundGuardTime&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;liftToTiltTransitionSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;liftToTiltTransitionSteps2&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps2&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;additionalSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;inactivePowerThreshold&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;startupSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps2&quot;</span><span class="token operator">:</span> xxx\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),m={href:"https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf",target:"_blank",rel:"noopener noreferrer"},v=(0,s.uE)('<p>As an alternative to the attributes listed above, the following properties may be used for convenience:</p><ul><li><code>open_to_closed_s</code>: corresponds to <code>totalSteps</code>, but takes value in seconds instead of in full AC waves</li><li><code>closed_to_open_s</code>: ditto for <code>totalSteps2</code>,</li><li><code>lift_to_tilt_transition_ms</code>: sets both <code>liftToTiltTransitionSteps</code> and <code>liftToTiltTransitionSteps2</code> (they shall both be equal according to ubisys manual), but takes value in <em>milli</em>seconds instead of in full AC waves</li><li><code>steps_per_second</code>: factor to be used for conversion, defaults to 50 full AC waves per second if not provided</li></ul><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/get/configure_j1</code> the values of the configuration attributes can also be read back from the device and be printed to the normal Zigbee2MQTT log.</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><p>By publishing <code>{&quot;configure_j1&quot;: {&quot;calibrate&quot;: 1}}</code> to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> the device can also be calibrated after installation to support more advanced positioning features (i.e. go to lift percentage / go to tilt percentage). This can be combined with setting attributes as shown above, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_j1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;calibrate&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;windowCoveringType&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;lift_to_tilt_transition_ms&quot;</span><span class="token operator">:</span> <span class="token number">1600</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),k={href:"https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf",target:"_blank",rel:"noopener noreferrer"},b={id:"home-assistant-cover-features-when-using-mqtt-discovery",tabindex:"-1"},g=(0,s._)("a",{class:"header-anchor",href:"#home-assistant-cover-features-when-using-mqtt-discovery","aria-hidden":"true"},"#",-1),f=(0,s.uE)('<p>The cover will be offered to Home Assistant as supporting lift and tilt by default, but for covers with reduced functionality this can be passed along to Home Assistant by disabling some of the topics in <code>configuration.yaml</code>, for example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">&#39;0x001fee0000001234&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> cover_not_supporting_tilt\n    <span class="token key atrule">homeassistant</span><span class="token punctuation">:</span>\n        <span class="token key atrule">tilt_command_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">&#39;0x001fee0000001234&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> cover_supporting_neither_lift_nor_tilt\n    <span class="token key atrule">homeassistant</span><span class="token punctuation">:</span>\n        <span class="token key atrule">set_position_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">set_position_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">position_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">position_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_command_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),y=(0,s._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,s.Uk)(" OTA updates")],-1),_=(0,s._)("h2",{id:"options",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,s.Uk)(" Options")],-1),q=(0,s.uE)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>. To change the tilt publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tilt&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),w={},x=(0,n(983744).Z)(w,[["render",function(e,t){const n=(0,s.up)("RouterLink"),w=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.kq)(" !!!! "),(0,s.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,s.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,s.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,s.kq)(" !!!! "),a,(0,s._)("table",null,[o,(0,s._)("tbody",null,[i,(0,s._)("tr",null,[l,(0,s._)("td",null,[(0,s.Wm)(n,{to:"/supported-devices/#v=Ubisys"},{default:(0,s.w5)((()=>[(0,s.Uk)("Ubisys")])),_:1})])]),r,c,p])]),(0,s.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,d,(0,s._)("p",null,[(0,s.Uk)("In case the inputs need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as "),(0,s.Wm)(n,{to:"/devices/C4.html#configuring-inputs"},{default:(0,s.w5)((()=>[(0,s.Uk)("it is being done for the ubisys C4")])),_:1}),(0,s.Uk)(".")]),h,(0,s._)("p",null,[(0,s.Uk)("For further details on these attributes please take a look at the "),(0,s._)("a",m,[(0,s.Uk)("ubisys J1 technical reference manual"),(0,s.Wm)(w)]),(0,s.Uk)(', chapter "7.2.5. Window Covering Cluster (Server)".')]),v,(0,s._)("p",null,[(0,s.Uk)("The calibration procedure will move the shutter up and down several times and the current stage of the calibration process will again be logged to the normal Zigbee2MQTT log for the user to get some feedback. For details on the calibration procedure please again take a look at the "),(0,s._)("a",k,[(0,s.Uk)("ubisys J1 technical reference manual"),(0,s.Wm)(w)]),(0,s.Uk)(', chapter "7.2.5.1. Calibration". Please note that tilt transition steps cannot be determined automatically and must therefore be configured manually for the device to also support "go to tilt percentage". One possibility to determine the correct value is to take a video of the blinds moving from 0 to 100 percent tilt and then getting the exact timing from the video by playing it slow motion.')]),(0,s._)("h3",b,[g,(0,s.Uk)(" Home Assistant cover features when using "),(0,s.Wm)(n,{to:"/guide/usage/integrations/home_assistant.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("MQTT discovery")])),_:1})]),f,(0,s.kq)(" Notes END: Do not edit below this line "),y,(0,s._)("p",null,[(0,s.Uk)("This device supports OTA updates, for more information see "),(0,s.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("OTA updates")])),_:1}),(0,s.Uk)(".")]),_,(0,s._)("p",null,[(0,s._)("em",null,[(0,s.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.w5)((()=>[(0,s.Uk)("How to use device type specific configuration")])),_:1})])]),q])}]])}}]);