# container componet + view component

在这个模式中，每个组件都拆分成两个小组件，每个小组件各自都有清晰的职责

## advayange
通过遵循容器组件与表现组件模式，我们创建了一个不含数据获取逻辑①的可复用组件，可
以将该组件放入风格指南，并传入模拟的坐标数据

## 原组件
```js
class Geolocation extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
    this.handleSuccess = this.handleSuccess.bind(this)
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess)
    }
  } 
  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }
  render() {
    return (
      <div>
        <div>Latitude: {this.state.latitude}</div>
        <div>Longitude: {this.state.longitude}</div>
      </div>
    )
  } 
}
```

## 新的方式 container + view 
```js
// container
class GeolocationContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
    this.handleSuccess = this.handleSuccess.bind(this)
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess)
    }
  } 
  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }

  render() {
    return (
      <Geolocation {...this.state} />
    )
  } 
}

// view
class Geolocation extends React.Component{
  render() {
    return (
      <div>
        <div>Latitude: {this.props.latitude}</div>
        <div>Longitude: {this.props.longitude}</div>
      </div>
    )
  } 
}

// or much simple view
const Geolocation = ({ latitude, longitude }) => (
  <div>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
);
```
