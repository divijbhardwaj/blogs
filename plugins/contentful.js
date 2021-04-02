const contentful = require('contentful');

const config = {
  space: 'rt3kkpldvuz8',
  accessToken: 'IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE'
}

class Contentful {
  constructor() {
    return  contentful.createClient(config);
  }

}

export default(_, inject) => {
  inject('blogs', new Contentful());
}