import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ApiService } from '../services/api.service';
import { ApplicationService } from '../services/application.service';

import { Observable } from 'rxjs';
import { HelperService } from '../services/helper.service';

@Injectable()
export class AppLoadService {

	constructor(
		private httpClient: HttpClient,
		private api: ApiService,
		private application: ApplicationService) {
	}

	// Initialize the application
	initializeApp(): Promise<any> {

		console.log('Application Initializing');

		return new Promise((resolve, reject) => {

			// Initialize application data
			this.getFormData().subscribe(data => {

				const [characteristics, skills, species, careers, obligations, duties, moralities] = data;

				if (species && careers && skills) {

					skills.sort(HelperService.sortArrayByProperty('label'));
					species.sort(HelperService.sortArrayByProperty('label'));
					careers.sort(HelperService.sortArrayByProperty('label'));
					
					ApplicationService.InitializeCharacteristics(characteristics);
					ApplicationService.InitializeSkills(skills);
					ApplicationService.InitializeSpecies(species);
					ApplicationService.InitializeCareers(careers);

					console.log('Application initialized');

					resolve();
				} else {
					throw 'Oh zut :( !';
				}

			});
		});
	}

	private getFormData() {
		return Observable.forkJoin(
			this.api.localResource(ApiService.CHARACTERISTICS),
			this.api.localResource(ApiService.SKILLS),
			this.api.localResource(ApiService.SPECIES),
			this.api.localResource(ApiService.CAREERS),
			this.api.localResource(ApiService.OBLIGATIONS),
			this.api.localResource(ApiService.DUTIES),
			this.api.localResource(ApiService.MORALITIES),
		);
	}

}