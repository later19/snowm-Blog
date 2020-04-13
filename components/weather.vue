<template>
  <div class="weather">
      <div id="container"></div>
      <!-- <div class="weatherimg">
          <img src="~/static/tianqiicon_qingtian_heiye.png" alt="">
      </div> -->
      <div class="weathermain">
          <p>城市：{{this.cityinfo}}</p>
          <p>天气：{{this.container}}</p>
          <p>温度：{{this.temperature}}</p>
          <p>风向：{{this.wind}}</p>
          <p>风力：{{this.power}}</p>
          <p>空气湿度：{{this.humidity}}</p>
          <div class="lately">
          <p>最近4天天气情况</p>
          <p id="forecast"></p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'weather',
  data() {
    return {
      cityinfo:'',
      container:'',
      temperature:'',
      wind:'',
      power:'',
      humidity:''
    };
  },
  mounted(){
    this.initmap();
  },
  created(){},
  methods:{
    initmap() {
      let map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.486409,39.921489],
        zoom: 12
      });
      let that=this;
      let citysearch = new AMap.CitySearch();
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          if (result && result.city && result.bounds) {
            that.cityinfo = result.city;
            AMap.plugin('AMap.Weather', function () {
              let weather = new AMap.Weather();
              //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
              weather.getLive(that.cityinfo, function (err, data) {
                if (!err) {
                  that.container= data.weather ;
                  that.temperature= data.temperature + '℃';
                  that.wind= data.windDirection ;
                  that.power= data.windPower+ ' 级';
                  that.humidity= data.humidity ;
                //   let marker = new AMap.Marker({map: map, position: map.getCenter()});
                //   let infoWin = new AMap.InfoWindow({
                //     content: '<div class="info" style="position:inherit;margin-bottom:0;">'+str.join('')+'</div><div class="sharp"></div>',
                //     isCustom:true,
                //     offset: new AMap.Pixel(0, -37)
                //   });
                //   infoWin.open(map, marker.getPosition());
                //   marker.on('mouseover', function () {
                //     infoWin.open(map, marker.getPosition());
                //   });
                }
              });
              //未来4天天气预报
              weather.getForecast(that.cityinfo, function (err, data) {
                if (err) {return;}
                let str = [];
                for (let i = 0,dayWeather; i < data.forecasts.length; i++) {
                  dayWeather = data.forecasts[i];
                  str.push(dayWeather.date+' <span class="weather">'+dayWeather.dayWeather+'</span> '+ dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
                }
                document.getElementById('forecast').innerHTML = str.join('<br>');
              });
            });
          }
        } else {
          this.cityinfo = result.info;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.weather {
    .weatherimg{
        img{
            width: 36px;
            cursor: pointer;
        }
    }
    .weathermain{
        min-width: 220px;
        padding-top: 10px;
        border-radius: 20px;
        // background-image: url('../static/bg_301d.png');
        color: #fff;
        font-size: 15px;
        line-height: 26px;
        background-color: rgba(83, 58, 58, 0.5);
        p{
            padding-left:26px;
        }
        .lately{
            font-size: 13px;
            border-top:1px solid rgb(71, 69, 69) ;
            padding-bottom: 10px;
        }
    }
}
</style>
