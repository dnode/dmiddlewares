[![Dependency Status](https://david-dm.org/dnode/dmiddlewares/status.svg)](https://david-dm.org/dnode/dmiddlewares)
[![devDependency Status](https://david-dm.org/dnode/dmiddlewares/dev-status.svg)](https://david-dm.org/dnode/dmiddlewares?type=dev)

# Installation

`npm i --save dmiddlewares`


# Initialisation

```
require('dmiddlewares')(app, [
  async (req, res, next) => {
    next();
  }
]);
```
