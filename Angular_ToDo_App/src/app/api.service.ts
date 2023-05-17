import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public readall(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/posts');
  }
  public postdata(tododata: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/posts', tododata, {
      responseType: 'text' as 'json',
    });
  }
  public deletedata(id: any): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/posts/" + id);
  }
  public getdatabyid(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/posts/` + id, {
      responseType: 'text' as 'json',
    });
  }
  public updatedata(id: any, updatedata: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/posts/` + id, updatedata, {responseType: 'text' as 'json',
    });
  }
  public updatedatachecked(id: any, updatedata: boolean): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/posts/`+id,updatedata);
 
  }
}
