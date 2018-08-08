class Emit {
  constructor() {
    this.calls = [];
  }
  on(evt, fn) {
    let handle = { name: evt, fn: fn };
    this.calls.push(handle);
  }
  destroy() {
    this.calls = [];
  }
  emit(evt) {
    let args = [].slice.call(arguments, 1);
    let match = this.calls.filter(v => v.name == evt);
    match.forEach(v => {
      v["fn"].apply(this, args);
    });
  }
  off(evt) {
    this.calls = this.calls.filter(v => v.name != evt);
  }
  once(evt, fn) {
    this.on(evt, data => {
      this.off(evt);
      fn && fn(data);
    });
  }
}

export default Emit;
