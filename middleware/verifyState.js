const verifyState = () => {
    return (req, res, next) => {
      // do some stuff
      req.code = stateAbbr
      next()
    }
  }