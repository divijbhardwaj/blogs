class DateUtil{
  constructor() {
    this.mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  }
  getMonth(date, options = {}) {
    const d = new Date(date);
    const {small} = options;
    if(small) {
      return this.mS[d.getMonth()];
    }
    return this.mL[d.getMonth()];
  }
}

export default {
  DATE: new DateUtil()
}