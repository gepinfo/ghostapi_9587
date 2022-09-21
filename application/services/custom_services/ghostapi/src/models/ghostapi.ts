
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ghostapiSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   posts: String,
   likes: String,
   comments: String,
   shares: String
})

const ghostapiModel = mongoose.model('ghostapi', ghostapiSchema, 'ghostapi');
export default ghostapiModel;
