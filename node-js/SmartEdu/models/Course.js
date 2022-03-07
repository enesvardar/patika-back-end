const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const CoureseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },

  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category'
  },

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }

});

CoureseSchema.pre('validate', function (next) {
  this.slug = slugify(this.name, {
      lower: true,
      strict:true
  });
  next();
});

const Course = mongoose.model('Course', CoureseSchema);
module.exports = Course;
