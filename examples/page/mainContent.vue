<template>
  <y-section class="docs">
    <y-aside width="200px" style="overflow: hidden;position: relative">
      <y-scroll>
        <div class="side-nav">
          <ul>
            <li class="nav-item" v-for="n in navs" :key="n.name">
              <a :href="n.path">{{ n.name }}</a>
              <div class="nav-group" v-if="n.children && n.children.length > 0">
                <template v-for="nc in n.children">
                  <div class="nav-group__title" v-if="nc.title" :key="nc.title">{{ nc.title}}</div>
                  <ul class="pure-menu-list" style="height: auto;" v-for="g in nc.group" :key="g.name">
                    <li class="nav-item"><a :href="'#' + g.path">{{ g.name }}</a></li>
                  </ul>
                </template>
              </div>
            </li>
          </ul>
        </div>
      </y-scroll>
    </y-aside>
    <y-main style="overflow: hidden">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </y-main>
  </y-section>
</template>

<script>
  import navs from './side-nav'

  export default {
    name: 'MainContent',
    data () {
      return {
        navs: navs
      }
    },
    mounted () {
      this.navs = navs
    }
  }
</script>

<style scoped>
  .side-nav {
    width: 100%;
    /*height: 100%;*/
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0px;
    box-sizing: border-box;
    padding-bottom: 150px;
  }
  .side-nav ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
    height: 100%;
  }
  .side-nav>ul {
    /*border-right: 1px solid #eee;*/
  }
  .side-nav li {
    list-style: none;
  }
  .side-nav .nav-item a {
    text-align: left;
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: .15s ease-out;
    font-weight: 700;
  }
  .side-nav .nav-group__title {
    text-align: left;
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }
  .side-nav .nav-item .nav-item a {
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
  }
</style>
