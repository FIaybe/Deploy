"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[591],{6591:(A,p,o)=>{o.r(p),o.d(p,{WelcomeModule:()=>W});var u=o(6895),i=o(4006),l=o(4859),s=o(3546),h=o(4850),a=o(9549),d=o(4144),C=o(3897),c=o(8379),t=o(4650),v=o(9244);function y(n,r){1&n&&(t.TgZ(0,"mat-hint"),t._uU(1,"try : admin"),t.qZA())}function Z(n,r){1&n&&(t.TgZ(0,"mat-hint"),t._uU(1,"try : admin"),t.qZA())}let x=(()=>{class n{constructor(e,m,f){this.formBuilder=e,this.service=m,this.router=f,this.hint=!1,this.login="",this.password="",this.formgroup=this.formBuilder.group({login:["",i.kI.required],password:["",i.kI.required]}),this.formgroup.valueChanges.subscribe({next:g=>{this.login=g.login,this.password=g.password}})}onSubmit(){this.service.login(this.login,this.password).subscribe({next:e=>{console.log(e),this.hint=!1,localStorage.setItem("connected","true"),this.router.navigate(["/"])},error:e=>{this.hint=!0}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(v.D),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:21,vars:3,consts:[[1,"flex"],[3,"formGroup","ngSubmit"],[1,"card"],["appearance","legacy"],["matInput","","placeholder","myFantatsicLogin","formControlName","login"],[4,"ngIf"],["type","password","matInput","","formControlName","password"],["mat-button","","type","submit"]],template:function(e,m){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return m.onSubmit()}),t.TgZ(2,"mat-card",2)(3,"mat-card-title"),t._uU(4,"Connexion"),t.qZA(),t.TgZ(5,"mat-card-content")(6,"p")(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Identifiant"),t.qZA(),t._UZ(10,"input",4),t.YNc(11,y,2,0,"mat-hint",5),t.qZA()(),t.TgZ(12,"p")(13,"mat-form-field",3)(14,"mat-label"),t._uU(15,"Mot de passe"),t.qZA(),t._UZ(16,"input",6),t.YNc(17,Z,2,0,"mat-hint",5),t.qZA()()(),t.TgZ(18,"mat-card-actions")(19,"button",7),t._uU(20,"Se connecter"),t.qZA()()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",m.formgroup),t.xp6(10),t.Q6J("ngIf",m.hint),t.xp6(6),t.Q6J("ngIf",m.hint))},dependencies:[u.O5,a.KE,a.bx,a.hX,d.Nt,l.lW,i._Y,i.Fj,i.JJ,i.JL,s.a8,s.dn,s.n5,s.hq,i.sg,i.u],styles:[".card[_ngcontent-%COMP%]{max-width:600px;width:20em;display:flex;flex-direction:column;align-items:center}.flex[_ngcontent-%COMP%]{margin-top:5em;display:flex;flex-direction:column;align-items:center}"]}),n})();const T=function(){return["login"]},L=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-welcome"]],decls:3,vars:2,consts:[[1,"flex"],["mat-raised-button","","color","primary",3,"routerLink"]],template:function(e,m){1&e&&(t.TgZ(0,"div",0)(1,"a",1),t._uU(2,"Se connecter"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,T)))},dependencies:[c.yS,l.zs],styles:[".flex[_ngcontent-%COMP%]{height:40em;display:flex;justify-content:center;align-items:center}"]}),n})()},{path:"login",component:x}];let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,c.Bz.forChild(L),a.lN,d.c,C.LD,l.ot,i.u5,s.QW,i.UX,h.t]}),n})()}}]);