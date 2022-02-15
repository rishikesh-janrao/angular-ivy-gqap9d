import {
  Component,
  ComponentFactoryResolver,
  VERSION,
  ViewContainerRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-account-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  phone_number: any;
  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {
    {
      this.form = fb.group({
        mobileNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
      });
    }
  }
  submit() {
    console.log(this.phone_number);
  }
  async showPopup() {
    this.vcr.clear();
    const { FormSuccessComponent } = await import(
      '../../Atoms/success-modal/form-success.component'
    );
    this.vcr.createComponent(FormSuccessComponent);
    this.cfr.resolveComponentFactory(FormSuccessComponent);
  }
}
