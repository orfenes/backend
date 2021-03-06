const restful  = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = ({
  description: { type: String, required: false },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema);
