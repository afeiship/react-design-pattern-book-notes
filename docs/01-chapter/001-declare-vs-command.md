# 声明式 vs 命令式 
> React 基础

## 声明式编程(对应:命令式)
1. React强大的原因之一，声明式编程
2. 声明式如何工作，原理是什么

## 命令式范例
```js
const map = new goolge.maps.Map(document.getElementById('map'),{
  zoom: 4,
  center: myLatLng
});

const maker = new google.maps.Marker({
  position: myLatLng,
  title: 'Hello'
});

marker.setMap(map);
```


## 对应声明式
```js
<Gmaps zoom={4} center={myLatLng}>
 <Marker position={myLatLng} title="Hello world!" />
</Gmaps> 
```
