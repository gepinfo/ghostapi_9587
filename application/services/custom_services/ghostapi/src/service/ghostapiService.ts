import { Request, Response } from 'express';
import {ghostapiDao} from '../dao/ghostapiDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let ghostapi = new ghostapiDao();

export class ghostapiService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ghostapiService.ts: GpDelete')
     let  ghostapiId = req.params.id;
     ghostapi.GpDelete(ghostapiId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ghostapiService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ghostapiService.ts: GpSearch')
     let  ghostapiData = req.query;
     ghostapi.GpSearch(ghostapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ghostapiService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ghostapiService.ts: GpSearchForUpdate')
     let  ghostapiData = req.body;
     ghostapi.GpSearchForUpdate(ghostapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ghostapiService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ghostapiService.ts: GpUpdate')
     let  ghostapiData = req.body;
     ghostapi.GpUpdate(ghostapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ghostapiService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ghostapiService.ts: GpGetNounById')
     let  ghostapiId = req.params.id;
     ghostapi.GpGetNounById(ghostapiId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ghostapiService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ghostapiService.ts: GpGetAllValues')
     
     ghostapi.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ghostapiService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ghostapiService.ts: GpCreate')
     let  ghostapiData = req.body;
     ghostapi.GpCreate(ghostapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ghostapiService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}