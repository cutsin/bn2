# A Bignumber.js Wrapper

## Usage

```javascript
import BN from 'bn2'

console.log(new BN().toNumber())
// >> 0

/* toFormat
new ('123456.780').toFormat() >> 123,456.78
new ('123456.780').toFormat('fixed') >> 123,456.780
new ('123456.78').toFormat(1, 'fixed') >> 123,456.7
new ('123456.710').toFormat(1, BN.ROUND_UP, 'fixed') >> 123456.8
*/
```

### Webpack babel-loader conf

```javascript
module.exports = {
	// ...
  module: {
  	// ...
    rules: [
  		// ...
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: function(modulePath) {
          const _path = modulePath.replace(process.cwd() + '/', '')
          const _module = _path.replace('node_modules/', '')
          return /^(src|test)/.test(_path) || /^(bn2|webpack-dev-server\/client)/.test(_module)
        }
      },
	// ...
}
```