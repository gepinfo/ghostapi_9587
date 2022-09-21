import * as mongoose from 'mongoose';
import ghostapiModel from '../models/ghostapi';
import { CustomLogger } from '../config/Logger'


export class ghostapiDao {
    private ghostapi = ghostapiModel;
    constructor() { }
    
    public async GpDelete(ghostapiId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ghostapiDao.ts: GpDelete');

    

    
    
    
    this.ghostapi.findByIdAndRemove(ghostapiId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ghostapiDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(ghostapiData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ghostapiDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(ghostapiData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.ghostapi.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ghostapiDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(ghostapiData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ghostapiDao.ts: GpSearchForUpdate');

    

    
    
    
    this.ghostapi.findOneAndUpdate({ _id: ghostapiData._id }, ghostapiData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ghostapiDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(ghostapiData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ghostapiDao.ts: GpUpdate');

    

    
    
    
    this.ghostapi.findOneAndUpdate({ _id: ghostapiData._id }, ghostapiData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ghostapiDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(ghostapiId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ghostapiDao.ts: GpGetNounById');

    

    
    
    
    this.ghostapi.findById(ghostapiId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ghostapiDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into ghostapiDao.ts: GpGetAllValues');

    

    
    
    
    this.ghostapi.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ghostapiDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(ghostapiData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ghostapiDao.ts: GpCreate');

    let temp = new ghostapiModel(ghostapiData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ghostapiDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}