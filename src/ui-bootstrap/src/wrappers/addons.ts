import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-addons',
  template: `
    <div class="input-group">
      <div class="input-group-addon"
        *ngIf="to.addonLeft"
        [ngStyle]="{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}"
        (click)="addonLeftClick($event)">
        <i [ngClass]="to.addonLeft.class" *ngIf="to.addonLeft.class"></i>
        <span *ngIf="to.addonLeft.text">{{ to.addonLeft.text }}</span>
      </div>
      <ng-template #fieldComponent></ng-template>
      <div class="input-group-addon"
        *ngIf="to.addonRight"
        [ngStyle]="{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}"
        (click)="addonRightClick($event)">
        <i [ngClass]="to.addonRight.class" *ngIf="to.addonRight.class"></i>
        <span *ngIf="to.addonRight.text">{{ to.addonRight.text }}</span>
      </div>
    </div>
  `,
})
export class FormlyWrapperAddons extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

  addonRightClick($event: any) {
    if (this.to.addonRight.onClick) {
      this.to.addonRight.onClick(this.to, this, $event);
    }
  }

  addonLeftClick($event: any) {
    if (this.to.addonLeft.onClick) {
      this.to.addonLeft.onClick(this.to, this, $event);
    }
  }
}
