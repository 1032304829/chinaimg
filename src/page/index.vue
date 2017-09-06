<template>
  <div class="index-wrapper">
       <div class="time-axis">
            <div id="timeswrapper">
                <ul class="time-content" id="timecontent" v-bind:style="{ width: timeWidth + 'px' }">
                    <li class="time-txt" v-for="(item, index) in timeaxis" @click="_timeshow(index)">
                       <p class="time-year">{{timeaxis[index].year}}</p>
                       <i class="clock-icon icon-time"></i>
                       <span class="clock-pointer"></span>
                       <span class="icon-slide"></span>
                    </li>
                </ul>
            </div>
            <div class="time-line"></div>
       </div>
       <div class="img-wrapper">
            <div class="img-content clearfix">
               <div class="img-txt">
                   <span class="img-new active">最新</span>
                   <span class="img-gz">关注</span>
               </div>
               <div class="img-icon">
                    <span class="icon-blie" @click="_waterhide()"></span>
                    <span class="icon-slue" @click="_watershow()"></span>
               </div>
            </div>
            <Vwaterfall :Loadshow = "Loadshow" :items = "items" v-show="watershow"></Vwaterfall>
            <!-- <div class="img-container" id="container" v-show="watershow">
                <div class="box" v-for="(item, index) in items">
                    <div class="boximg">
                        <img :src="items[index].src">
                    </div>
                </div>
            </div> -->
            <div class="img-row" v-show="waterhide">
                 <ul>
                   <li v-for="(item, index) in items">
                      <img :src="items[index].src">
                   </li>
                 </ul>
            </div>
       </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import Vwaterfall from 'components/waterfall/waterfall.vue';
  export default{
      data () {
        return {
          timeshow: false,
          watershow: true,
          waterhide: false,
          Loadshow: false,
          items: [],
          timeWidth: '',
          timeaxis: [
            {
              'year': '1971',
              'imgsrc': [
                  {'src': '/static/images/a.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/b.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '309', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/a.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/b.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1972',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1973',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1974',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1975',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1976',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1977',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1978',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1979',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1980',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1981',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1982',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1983',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1984',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1985',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1986',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1987',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1988',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1989',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1990',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1991',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1992',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1993',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1994',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1995',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1996',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1997',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1998',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            },
            {
              'year': '1999',
              'imgsrc': [
                  {'src': '/static/images/c.jpg', 'height': '329', 'width': '370'},
                  {'src': '/static/images/d.jpg', 'height': '509', 'width': '370'},
                  {'src': '/static/images/e.jpg', 'height': '400', 'width': '370'},
                  {'src': '/static/images/f.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/g.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/h.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/i.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/j.jpg', 'height': '230', 'width': '370'},
                  {'src': '/static/images/k.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/l.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/m.jpg', 'height': '199', 'width': '370'},
                  {'src': '/static/images/n.jpg', 'height': '219', 'width': '370'},
                  {'src': '/static/images/o.jpg', 'height': '230', 'width': '370'}
               ]
            }
          ]
        };
      },
      created () {
        this.timeWidth = this.timeaxis.length * 110;
        this.$nextTick(() => {
          this._initScroll();
          this.timeScroll.on('scroll', (pos) => {
          });
          window.addEventListener('scroll', () => {
            var scrollLoad = this.scrollLoad();
             if (scrollLoad) {
                this.Loadshow = true;
                setTimeout(() => {
                    this.Loadshow = false;
                    dataIndex = dataIndex + 10;
                    for (var i = dataIndex; i < dataIndex + 10; i++) {
                          this.items.push(this.timeaxis[0].imgsrc[i]);
                    }
                    this.imgLocation('container', 'box');
                }, 2000);
             }
           });
        });
        var dataIndex = 0;
        for (var j = dataIndex; j < dataIndex + 10; j++) {
          this.items.push(this.timeaxis[0].imgsrc[j]);
        }
      },
      mounted () {
        setTimeout(() => {
          this._timeshow(0);
        }, 100);
      },
      methods: {
        _initScroll () {
          this.timeScroll = new BScroll(document.getElementById('timeswrapper'), {
            click: true,
            scrollX: true,
            probeType: 3
          });
        },
        _watershow () {
          this.watershow = true;
          this.waterhide = false;
        },
        _waterhide () {
          this.watershow = false;
          this.waterhide = true;
        },
        _timeshow (index) {
          this.watershow = true;
          this.waterhide = false;
          this.items = [];
          var dataIndex = 0;
          for (var j = dataIndex; j < dataIndex + 10; j++) {
            this.items.push(this.timeaxis[index].imgsrc[j]);
          }
          this.imgLocation('container', 'box');
          let timeList = document.getElementById('timeswrapper').getElementsByClassName('time-txt');
          for (var i = 0; i < timeList.length; i++) {
            timeList[i].className = 'time-txt';
            if (i === index) {
              timeList[index].className = 'time-txt active';
            }
          }
          this.timeScroll.scrollToElement(timeList[index - 4], 300);
        },
        scrollLoad () {
            var scrollTop = 0;
            var clientHeight = 0;
            var scrollHeight = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
            }
            scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            console.log(scrollTop, clientHeight, scrollHeight);
            if (scrollTop + clientHeight === scrollHeight) {
                return true;
            } else {
                return false;
            }
        },
        imgLocation (parent, content) {
            var dparent = document.getElementById(parent);
            var dcontent = this.getChildElement(dparent, content);
            var decWidth = this.getWidth(dparent, dcontent);
            this.minImageLocation(decWidth, dcontent);
        },
        getChildElement (parent, content) {
            var contentArray = [];
            var allContent = parent.getElementsByClassName('box');
            for (var i = 0; i < allContent.length; i++) {
                contentArray.push(allContent[i]);
            }
            return contentArray;
        },
        getWidth (dparent, dcontent) {
            var imgWidth = dcontent[0].offsetWidth;
            var winWidth = 1200;
            var numWidth = Math.floor(winWidth / imgWidth);
            dparent.style.cssText += 'width:' + imgWidth * numWidth + 'px;margin:0 auto;height:' + document.body.scrollHeight + ';';
            return numWidth;
        },
        minImageLocation (decWidth, dcontent) {
            var boxHeightArray = [];
            for (var i = 0; i < dcontent.length; i++) {
              if (i < decWidth) {
                boxHeightArray[i] = dcontent[i].offsetHeight;
                dcontent[i].style.position = 'absolute';
                dcontent[i].style.top = 0 + 'px';
                dcontent[i].style.left = i * dcontent[1].offsetWidth + 'px';
              } else {
                var minHeight = Math.min.apply(null, boxHeightArray);
                var minIndex = this.getMinHeight(boxHeightArray, minHeight);
                dcontent[i].style.position = 'absolute';
                dcontent[i].style.top = minHeight + 'px';
                dcontent[i].style.left = dcontent[minIndex].offsetLeft + 'px';
                boxHeightArray[minIndex] += dcontent[i].offsetHeight;
              }
            }
        },
        getMinHeight (boxHeightArray, minHeight) {
            for (var i in boxHeightArray) {
              if (boxHeightArray[i] === minHeight) {
                return i;
              }
            }
        }
      },
      components: {
         Vwaterfall
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.index-wrapper
  width: 1200px
  margin: 0 auto
  .time-axis
    width: 1100px
    margin: 0 auto
    height: 98px
    position: relative
    overflow: hidden
    .time-line
      border-bottom: 1px solid rgba(234,234,234,1)
      position: absolute
      width: 100%
      left: 0
      bottom: 8px
    .time-content
      height: 90px
      position: relative
      z-index: 9
      .time-txt
        cursor: pointer
        width: 110px
        height: 90px
        text-align: center
        position: relative
        float: left
        &.active
          .time-year
            padding-top: 10px
            color: rgba(63,81,181,1)
            font-size: 18px
          .clock-icon
            display: inline-block
            font-size: 36px
            margin: 10px 0
            border-radius: 50%
            color: rgba(63,81,181,1)
          .clock-pointer
            display: none
          .icon-slide
            display: inline-block
            width: 16px
            position: absolute
            bottom: -8px
            left: 50%
            margin-left: -8px
            z-index: 9
            color: rgba(189,189,189,1)
        .time-year
          font-size: 14px
          color: rgba(117,117,117,1)
          padding-top: 40px
        .clock-pointer
          display: inline-block
          width: 16px
          height: 16px
          background: rgba(234,234,234,1)
          border-radius: 50%
          position: absolute
          bottom: -8px
          left: 50%
          margin-left: -8px
          z-index: 9
        .clock-icon
          display: none
        .icon-slide
          display: none
  .img-wrapper
    .img-content
      margin: 80px 15px 20px
      .img-txt
        float: left
        .img-new
          font-size: 20px
          color: rgba(117,117,117,1)
          margin-right: 40px
          cursor: pointer
          &.active
            font-weight: 700
            color: rgba(0,0,0,1)
        .img-gz
          font-size: 20px
          color: rgba(117,117,117,1)
          cursor: pointer
          &.active
            font-weight: 700
            color: rgba(0,0,0,1)
      .img-icon
        float: right
        .icon-blie
          font-size: 30px
          cursor: pointer
          margin-right: 30px
        .icon-slue
          font-size: 30px
          cursor: pointer
    .img-row
     ul
       li
         margin-bottom: 20px
         img
           width: 100%
</style>
