if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0 = "/static/logo.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const fadeDuration = 400;
  const _sfc_main$7 = {
    __name: "start",
    setup(__props, { expose: __expose }) {
      __expose();
      const isFading = vue.ref(false);
      let displayTimer = null;
      let navTimer = null;
      vue.onMounted(() => {
        displayTimer = setTimeout(() => {
          isFading.value = true;
          navTimer = setTimeout(() => {
            uni.reLaunch({ url: "/pages/carousel/carousel" });
          }, fadeDuration);
        }, 2e3);
      });
      vue.onUnmounted(() => {
        if (displayTimer)
          clearTimeout(displayTimer);
        if (navTimer)
          clearTimeout(navTimer);
      });
      const __returned__ = { isFading, fadeDuration, get displayTimer() {
        return displayTimer;
      }, set displayTimer(v) {
        displayTimer = v;
      }, get navTimer() {
        return navTimer;
      }, set navTimer(v) {
        navTimer = v;
      }, onMounted: vue.onMounted, onUnmounted: vue.onUnmounted, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["start-container", { "fade-out": $setup.isFading }])
      },
      [
        vue.createElementVNode("image", { src: _imports_0 })
      ],
      2
      /* CLASS */
    );
  }
  const PagesStartStart = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "C:/Users/MING/Desktop/rooster/rooster/pages/start/start.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$6 = {
    __name: "login",
    setup(__props, { expose: __expose }) {
      __expose();
      const goHome = () => {
        uni.switchTab({
          url: "/pages/home/home",
          success: () => {
            formatAppLog("log", "at pages/login/login.vue:12", "欢迎登录");
          },
          fail: (e) => {
            formatAppLog("error", "at pages/login/login.vue:15", "跳转失败", e);
          }
        });
      };
      const __returned__ = { goHome };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("text", { onClick: $setup.goHome }, "login")
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "C:/Users/MING/Desktop/rooster/rooster/pages/login/login.vue"]]);
  const _sfc_main$5 = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " register ");
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/MING/Desktop/rooster/rooster/pages/register/register.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " community ");
  }
  const PagesCommunityCommunity = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/MING/Desktop/rooster/rooster/pages/community/community.vue"]]);
  const _sfc_main$3 = {
    __name: "home",
    setup(__props, { expose: __expose }) {
      __expose();
      const onIconClick = (index) => {
        formatAppLog("log", "at pages/home/home.vue:44", "icon clicked:", index);
      };
      const onNewsClick = (index) => {
        formatAppLog("log", "at pages/home/home.vue:50", "news clicked:", index);
      };
      const __returned__ = { onIconClick, onNewsClick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
      vue.createElementVNode("swiper", {
        class: "carousel",
        "indicator-dots": "true",
        autoplay: "true",
        interval: "3000",
        circular: "true"
      }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(3, (i) => {
            return vue.createElementVNode("swiper-item", { key: i }, [
              vue.createElementVNode("image", {
                class: "slide-img",
                mode: "aspectFill",
                src: _imports_0
              })
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "icons" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(6, (n) => {
            return vue.createElementVNode("view", {
              class: "icon-item",
              key: n,
              onClick: ($event) => $setup.onIconClick(n)
            }, [
              vue.createElementVNode("image", {
                class: "icon-img",
                src: _imports_0,
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", { class: "icon-title" }, "logo")
            ], 8, ["onClick"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "news-list" }, [
        vue.createElementVNode("text", { class: "section-title" }, "推文"),
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(6, (i) => {
            return vue.createElementVNode("view", {
              class: "news-item",
              key: "news-" + i,
              onClick: ($event) => $setup.onNewsClick(i)
            }, [
              vue.createElementVNode("image", {
                class: "news-thumb",
                src: _imports_0,
                mode: "aspectFill"
              }),
              vue.createElementVNode("view", { class: "news-body" }, [
                vue.createElementVNode("text", { class: "news-title" }, "测试新闻"),
                vue.createElementVNode("view", { class: "news-footer" }, [
                  vue.createElementVNode("text", { class: "news-author" }, "测试单位"),
                  vue.createElementVNode("view", { class: "news-icons" }, [
                    (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(3, (a) => {
                        return vue.createElementVNode("view", {
                          class: "action-unit",
                          key: "a-" + a
                        }, [
                          vue.createElementVNode("image", {
                            class: "action-icon",
                            src: _imports_0,
                            mode: "aspectFit"
                          }),
                          vue.createElementVNode("text", { class: "action-count" }, "27")
                        ]);
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ])
                ])
              ])
            ], 8, ["onClick"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-07e72d3c"], ["__file", "C:/Users/MING/Desktop/rooster/rooster/pages/home/home.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " my ");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/MING/Desktop/rooster/rooster/pages/my/my.vue"]]);
  const _sfc_main$1 = {
    __name: "carousel",
    setup(__props, { expose: __expose }) {
      __expose();
      const imgs = vue.ref(["/static/logo.png", "/static/logo.png", "/static/logo.png"]);
      const current = vue.ref(0);
      const onChange = (e) => {
        current.value = e.detail.current;
      };
      const goLogin = () => {
        uni.navigateTo({ url: "/pages/login/login" });
      };
      const __returned__ = { imgs, current, onChange, goLogin, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "carousel-wrapper" }, [
      vue.createElementVNode("view", {
        class: "skip",
        onClick: vue.withModifiers($setup.goLogin, ["stop"])
      }, "跳过"),
      vue.createElementVNode(
        "swiper",
        {
          class: "swiper",
          "indicator-dots": "true",
          "indicator-color": "rgba(255,255,255,0.5)",
          "indicator-active-color": "#fff",
          autoplay: "false",
          onChange: $setup.onChange
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.imgs, (img, idx) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", { key: idx }, [
                vue.createElementVNode("image", {
                  class: "slide-image",
                  src: img,
                  mode: "aspectFill"
                }, null, 8, ["src"]),
                idx === $setup.imgs.length - 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "login-button",
                  onClick: vue.withModifiers($setup.goLogin, ["stop"])
                }, "点击登录")) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        32
        /* NEED_HYDRATION */
      )
    ]);
  }
  const PagesCarouselCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/MING/Desktop/rooster/rooster/pages/carousel/carousel.vue"]]);
  __definePage("pages/start/start", PagesStartStart);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/community/community", PagesCommunityCommunity);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/carousel/carousel", PagesCarouselCarousel);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/MING/Desktop/rooster/rooster/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
