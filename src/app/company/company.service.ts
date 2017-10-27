import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/catch';

import { Company } from './company';

@Injectable()
export class CompanyService {
  companies$: FirebaseListObservable<Company[]>;

  company$: FirebaseObjectObservable<Company>;

  constructor(private db: AngularFireDatabase) {
    this.company$ = this.db.object('company');
    this.companies$ = this.db.list('companies');

  }

  getCompanies() {
    return this.companies$
    .catch(this.errorHandler);

  }

  getCompany(companyKey: string) {
    return this.db.object(`companies/${companyKey}`)
    .catch(this.errorHandler);

  }
  saveCompany(company: Company) {
    return this.companies$.push(company)
      .then(_ => console.log("success"))
      .catch(error => console.log(error));

    //obje üzerinde kullanımı
    // this.company$.set({ name: company.name })

    //promise
    //   // this.company$.set(company)
    //   .then(_ => console.log('Success'))
    //   .catch(error => console.log(error));

    //observable
    // Observable.from(this.company$.set({ name: company.name }))
    //   .catch(error => Observable.throw(error));

  }

  editCompany(company: Company) {
    return this.companies$.update(company.$key, company)
      .then(_ => console.log('Success'))
      .catch(error => console.log(error))
  }

  removeCompany(company) {
    // return koymak. kullanmak istediğim yer için then ile durum yönetebilmemi sağlar. işlem başarılıysa ilgili yerlerde yönlendireceğim.

    return this.companies$.remove(company.$key)
      .then(_ => console.log('Success'))
      .catch(error => console.log(error))

    // tüm objeyi siler
    //   this.company$.remove()
    //     .then(_ => console.log('Success'))
    //     .catch(error => console.log(error))
  }


  private errorHandler(error) {
    console.log(error);
    return Observable.throw(error.message);
  }
}
