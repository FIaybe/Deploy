"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[591],{6591:(W,p,o)=>{o.r(p),o.d(p,{WelcomeModule:()=>L});var u=o(6895),i=o(4006),l=o(4859),s=o(3546),g=o(4850),a=o(9549),d=o(4144),h=o(3897),f=o(8379),t=o(4650),C=o(9244);function y(n,m){1&n&&(t.TgZ(0,"mat-hint"),t._uU(1,"try : admin"),t.qZA())}function v(n,m){1&n&&(t.TgZ(0,"mat-hint"),t._uU(1,"try : admin"),t.qZA())}let Z=(()=>{class n{constructor(e,r){this.formBuilder=e,this.service=r,this.hint=!1,this.login="",this.password="",this.formgroup=this.formBuilder.group({login:["",i.kI.required],password:["",i.kI.required]}),this.formgroup.valueChanges.subscribe({next:c=>{this.login=c.login,this.password=c.password}})}onSubmit(){this.service.login(this.login,this.password).subscribe({next:()=>{localStorage.setItem("connected","true")},error:()=>{this.hint=!0}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(C.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:21,vars:3,consts:[[1,"flex"],[3,"formGroup","ngSubmit"],[1,"card"],["appearance","legacy"],["matInput","","placeholder","myFantatsicLogin","formControlName","login"],[4,"ngIf"],["type","password","matInput","","formControlName","password"],["mat-button","","type","submit"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(2,"mat-card",2)(3,"mat-card-title"),t._uU(4,"Connexion"),t.qZA(),t.TgZ(5,"mat-card-content")(6,"p")(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Identifiant"),t.qZA(),t._UZ(10,"input",4),t.YNc(11,y,2,0,"mat-hint",5),t.qZA()(),t.TgZ(12,"p")(13,"mat-form-field",3)(14,"mat-label"),t._uU(15,"Mot de passe"),t.qZA(),t._UZ(16,"input",6),t.YNc(17,v,2,0,"mat-hint",5),t.qZA()()(),t.TgZ(18,"mat-card-actions")(19,"button",7),t._uU(20,"Se connecter"),t.qZA()()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",r.formgroup),t.xp6(10),t.Q6J("ngIf",r.hint),t.xp6(6),t.Q6J("ngIf",r.hint))},dependencies:[u.O5,a.KE,a.bx,a.hX,d.Nt,l.lW,i._Y,i.Fj,i.JJ,i.JL,s.a8,s.dn,s.n5,s.hq,i.sg,i.u],styles:[".card[_ngcontent-%COMP%]{max-width:600px;width:20em;display:flex;flex-direction:column;align-items:center}.flex[_ngcontent-%COMP%]{margin-top:5em;display:flex;flex-direction:column;align-items:center}"]}),n})();const x=function(){return["login"]},T=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-welcome"]],decls:3,vars:2,consts:[[1,"flex"],["mat-raised-button","","color","primary",3,"routerLink"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"a",1),t._uU(2,"Se connecter"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,x)))},dependencies:[f.yS,l.zs],styles:[".flex[_ngcontent-%COMP%]{height:40em;display:flex;justify-content:center;align-items:center}"]}),n})()},{path:"login",component:Z}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,f.Bz.forChild(T),a.lN,d.c,h.LD,l.ot,i.u5,s.QW,i.UX,g.t]}),n})()}}]);