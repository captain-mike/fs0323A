import { environment } from './../../../environments/environment.development';
import { IAccessData } from './interfaces/access-data';
import { HttpClient } from '@angular/common/http';
import { IRegister } from './interfaces/register';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ILogin } from './interfaces/login';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private jwtHelper:JwtHelperService = new JwtHelperService();//ci permette di lavorare facilmente con i jwt

  registerUrl:string = environment.registerUrl;
  loginUrl:string = environment.loginUrl;

  private authSubject = new BehaviorSubject<null | IAccessData>(null);//null è il valore di default, quindi si parte con utente non loggato
  user$ = this.authSubject.asObservable();//contiene dati sull'utente se è loggato
  isLoggedIn$ = this.user$.pipe(map(user => !!user));//serve per la verifica, capta la presenza(o meno) dello user e mi restituisce un bool (false se il subject riceve null)

  autoLogoutTimer:any;//riferimento al timer che slogga l'utente quando il jwt è scaduto

  constructor(
    private http: HttpClient,//per le chiamate http
    private router: Router//per i redirect
  ) {

    this.restoreUser()

   }

  login(data:ILogin){
    return this.http.post<IAccessData>(this.loginUrl, data)
    .pipe(tap(data => {

      this.authSubject.next(data);//invio lo user al subject
      localStorage.setItem('accessData', JSON.stringify(data));//salvo lo user per poterlo recuperare se si ricarica la pagina

      //salvo la data di scadenza del token
      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
      this.autoLogout(expDate);//un metodo per il logout automatico
    }))
  }


  logout(){
    this.authSubject.next(null);//comunico al behaviorsubject che il valore da propagare è null
    localStorage.removeItem('accessData');//elimino i dati salvati in localstorage
    this.router.navigate(['/login'])//redirect al login
  }

  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime();//sottraggo i ms della data attuale da quelli della data del jwt
    this.autoLogoutTimer = setTimeout(() => {//avvio un timer che fa logout allo scadere del tempo
      this.logout()
    }, expMs)
  }

  signUp(data:IRegister){
    return this.http.post<IAccessData>(this.registerUrl, data)
  }


  //metodo che controlla al reload di pagina se l'utente è loggato e se il jwt è scaduto
  restoreUser(){
    const userJson:string|null = localStorage.getItem('accessData');//recupero i dati di accesso
    if(!userJson) return//se i dati non ci sono blocco la funzione

    const accessData:IAccessData = JSON.parse(userJson);//se viene eseguita questa riga significa che i dati ci sono, quindi converto la stringa(che conteneva un json) in oggetto
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return //ora controllo se il token è scaduto, se lo è fermiamo la funzione

    //se nessun return viene eseguito proseguo
    this.authSubject.next(accessData);//invio i dati dell'utente al behaviorsubject
  }





}
