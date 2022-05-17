import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements Resolve<any> {
  constructor(private api:ApiService){}
 resolve(){
return this.api.getEmployee();
 }

}
