import { Request, Response, NextFunction } from "express";
import { ghostapiController } from '../controller/ghostapiController';


export class Routes {
    private ghostapi: ghostapiController = new ghostapiController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ghostapi/:id').delete(this.ghostapi.GpDelete);
app.route('/ghostapi/get/search').get(this.ghostapi.GpSearch);
app.route('/ghostapi/get/update').put(this.ghostapi.GpSearchForUpdate);
app.route('/ghostapi').put(this.ghostapi.GpUpdate);
app.route('/ghostapi/:id').get(this.ghostapi.GpGetNounById);
app.route('/ghostapi').get(this.ghostapi.GpGetAllValues);
app.route('/ghostapi').post(this.ghostapi.GpCreate);
     }

}