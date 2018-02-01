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
