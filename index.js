module.exports = compose;

function compose(middlewares) {
  middlewares = middlewares.concat();
  return function(ctx, next) {
    function run(index, length) {
      if (index >= length) {
        return next();
      }

      middlewares[index](ctx, run.bind(this, index + 1, length));
    }

    run(0, middlewares.length);
  };
}
