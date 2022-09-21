import { Request, Response } from 'express';
import { ghostapiService } from '../service/ghostapiService';
import { CustomLogger } from '../config/Logger'
let ghostapi = new ghostapiService();

export class ghostapiController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
ghostapi.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ghostapiController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ghostapiController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
ghostapi.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ghostapiController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ghostapiController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
ghostapi.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ghostapiController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ghostapiController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
ghostapi.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ghostapiController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ghostapiController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
ghostapi.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ghostapiController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ghostapiController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
ghostapi.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ghostapiController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ghostapiController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
ghostapi.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ghostapiController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ghostapiController.ts: GpCreate');
    })}


}