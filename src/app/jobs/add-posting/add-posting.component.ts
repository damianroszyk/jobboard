import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostingService } from '../state';
import { createPosting } from '../state/posting.model';
import { Router } from '@angular/router';

/**
 * form adding new posting
 * todo: use it for edit posting
 */
@Component({
  selector: 'app-add-posting',
  templateUrl: './add-posting.component.html',
    styleUrls: ['./add-posting.component.scss']
})
export class AddPostingComponent {
  postingForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    company: [null, Validators.required],
    salaryMin: [null, Validators.required],
    salaryMax: [null, [Validators.required]],
    city: [null, Validators.required],
    street: [null, Validators.required],
    postalCode: [null, [Validators.required, this.validatePostalCode]],
  }, {
    validator: this.maxRange()
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private postingService: PostingService) {}

  onSubmit() {
    this.postingService.add(createPosting(this.postingForm.getRawValue()));
    this.router.navigate(['jobs']);
  }

  validatePostalCode(c: FormControl) {
    const regexp = /^\d{2}-\d{3}$/;

    return !(!!c.value) || regexp.test(c.value) ? null : { 'notValid': true};
  }

  maxRange() {
    return (group: FormGroup) => {
      const min = group.get('salaryMin').value;
      const max = group.get('salaryMax').value;
      if (min * 2 < max) {
        group.get('salaryMax').setErrors({maxRange: true});
      }
      if (min > max) {
        group.get('salaryMax').setErrors({minRange: true});
      }
      return null;
    };
  }
}
