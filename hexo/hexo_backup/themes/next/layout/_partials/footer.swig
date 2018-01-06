<div class="copyright">{#
#}{% set current = date(Date.now(), "YYYY") %}{#
#}&copy; {% if theme.footer.since and theme.footer.since != current %}{{ theme.footer.since }} &mdash; {% endif %}{#
#}<span itemprop="copyrightYear">{{ current }}</span>
  <span class="with-love">
    <i class="fa fa-{{ theme.footer.icon }}"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ theme.footer.copyright || config.author }}</span>

  {% if theme.post_wordcount.totalcount %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-area-chart"></i>
    </span>
    {% if theme.post_wordcount.item_text %}
      <span class="post-meta-item-text">{{ __('post.totalcount') }}&#58;</span>
    {% endif %}
    <span title="{{ __('post.totalcount') }}">{#
    #}{{ totalcount(site, '0,0.0a') }}{#
  #}</span>
  {% endif %}
</div>

{% if theme.footer.powered %}
  <div class="powered-by">{#
  #}{{ __('footer.powered', '<a class="theme-link" target="_blank" href="https://hexo.io">Hexo</a>') }}{#
#}</div>
{% endif %}

{% if theme.footer.powered and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{% endif %}

{% if theme.footer.theme.enable %}
  <div class="theme-info">{#
  #}{{ __('footer.theme') }} &mdash; {#
  #}<a class="theme-link" target="_blank" href="https://github.com/iissnan/hexo-theme-next">{#
    #}NexT.{{ theme.scheme }}{#
  #}</a>{% if theme.footer.theme.version %} v{{ theme.version }}{% endif %}{#
#}</div>
{% endif %}

{% if theme.footer.custom_text %}
  <div class="footer-custom">{#
  #}{{ theme.footer.custom_text }}{#
#}</div>
{% endif %}

<h5>
  <span id="busuanzi_container_site_uv">
    本站访客数<span id="busuanzi_value_site_uv"></span>人次
  </span>
</h5>

<div class="links-of-author">
  {% if theme.social %}
    {% for name, link in theme.social %}
      <span class="links-of-author-item">
        <a href="{{ link.split('||')[0] | trim }}" target="_blank" title="{{ name }}" style="margin: 0 auto">
          {% if theme.social_icons.enable %}
            <i class="fa fa-fw fa-{{ link.split('||')[1] | trim | default('globe') }}"></i>{#
        #}{% endif %}{#
          #}{% if not theme.social_icons.icons_only %}{#
            #}{{ name }}{#
          #}{% endif %}{#
      #}</a>
      </span>
    {% endfor %}
  {% endif %}
</div>

<script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>

<script defer>
  // use sw
  var opensw = location.hostname === 'zhouyu1993.github.io'
  if (opensw) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        // sw version
        var v = '2018010701'

        navigator.serviceWorker.register('/service-worker.js?v=' + v, {
          scope: '/'
        }).then(function (registration) {
          // register success
          console.log('ServiceWorker registration successful with scope:', registration.scope)

          // update sw
          if (localStorage.getItem('zhouyu1993.github.io-sw-v') !== v) {
           registration.update().then(function () {
              localStorage.setItem('zhouyu1993.github.io-sw-v', v)
           })
         }
        }).catch((err) => {
          // register failure
          console.log('ServiceWorker registration failed:', err)
        })
      })
    }
  }
</script>
